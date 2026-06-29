// NFL 1978 Game Simulation Engine
import { getRoster } from './nfl1978data';

const WEATHER_EFFECTS = {
  clear: { passAccuracy: 0, runBonus: 0, fumbleChance: 0, kickAccuracy: 0, label: "Clear skies" },
  rain: { passAccuracy: -12, runBonus: -3, fumbleChance: 8, kickAccuracy: -10, label: "Rain" },
  snow: { passAccuracy: -18, runBonus: -8, fumbleChance: 12, kickAccuracy: -15, label: "Snow" },
  wind: { passAccuracy: -10, runBonus: 0, fumbleChance: 3, kickAccuracy: -20, label: "Strong winds" },
  fog: { passAccuracy: -8, runBonus: 0, fumbleChance: 2, kickAccuracy: -5, label: "Fog" },
  cold: { passAccuracy: -5, runBonus: -2, fumbleChance: 5, kickAccuracy: -8, label: "Bitter cold" },
};

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function chance(pct) {
  return Math.random() * 100 < pct;
}

function getAvgStat(roster, group, stat) {
  const players = roster.filter(p => p.position_group === group && p.is_starter && !p.is_injured);
  if (players.length === 0) return 50;
  return players.reduce((sum, p) => sum + (p[stat] || 50), 0) / players.length;
}

function getStarterByGroup(roster, group) {
  return roster.filter(p => p.position_group === group && p.is_starter && !p.is_injured);
}

function getQB(roster) {
  return roster.find(p => p.position === "QB" && p.is_starter && !p.is_injured) || roster.find(p => p.position === "QB");
}

export function generateWeather(stadiumType) {
  if (stadiumType === "dome") return { weather: "clear", temperature: 72, wind_speed: 0 };
  const weathers = ["clear", "clear", "clear", "rain", "snow", "wind", "fog", "cold"];
  const weather = weathers[rand(0, weathers.length - 1)];
  const temp = weather === "snow" ? rand(15, 32) : weather === "cold" ? rand(5, 25) : rand(40, 85);
  const windSpeed = weather === "wind" ? rand(20, 40) : rand(0, 15);
  return { weather, temperature: temp, wind_speed: windSpeed };
}

export function simulatePlay(gameState, offensivePlay, defensivePlay, offRoster, defRoster) {
  const weather = WEATHER_EFFECTS[gameState.weather] || WEATHER_EFFECTS.clear;
  const result = {
    yards: 0,
    description: "",
    turnover: false,
    turnoverType: null,
    touchdown: false,
    fieldGoalGood: false,
    sack: false,
    penalty: null,
    injury: null,
    timeUsed: 0,
  };

  // Handle special teams
  if (offensivePlay.type === "punt") {
    return simulatePunt(gameState, offRoster, defRoster, defensivePlay, weather, result);
  }
  if (offensivePlay.type === "field_goal") {
    return simulateFieldGoal(gameState, offRoster, defRoster, defensivePlay, weather, result);
  }

  // Check for penalty (10% chance)
  if (chance(10)) {
    const onOffense = chance(50);
    const penalties = onOffense
      ? [{ name: "False Start", yards: -5 }, { name: "Holding", yards: -10 }, { name: "Illegal Motion", yards: -5 }]
      : [{ name: "Offsides", yards: 5 }, { name: "Pass Interference", yards: rand(10, 30) }, { name: "Roughing the Passer", yards: 15 }, { name: "Unnecessary Roughness", yards: 15 }];
    const pen = penalties[rand(0, penalties.length - 1)];
    result.penalty = { name: pen.name, onOffense, yards: pen.yards };
    result.yards = onOffense ? pen.yards : Math.abs(pen.yards);
    result.description = `FLAG! ${pen.name} on the ${onOffense ? "offense" : "defense"}. ${Math.abs(pen.yards)}-yard penalty.`;
    result.timeUsed = rand(3, 8);
    return result;
  }

  // Running plays
  if (offensivePlay.type === "run") {
    return simulateRun(offensivePlay, defensivePlay, offRoster, defRoster, weather, result, gameState);
  }

  // Passing plays
  if (offensivePlay.type === "pass") {
    return simulatePass(offensivePlay, defensivePlay, offRoster, defRoster, weather, result, gameState);
  }

  return result;
}

function simulateRun(offPlay, defPlay, offRoster, defRoster, weather, result, gameState) {
  const rb = getStarterByGroup(offRoster, "RB")[0] || { speed: 70, strength: 70, agility: 70 };
  const olBlocking = getAvgStat(offRoster, "OL", "blocking");
  const dlTackling = getAvgStat(defRoster, "DL", "tackling");
  const lbTackling = getAvgStat(defRoster, "LB", "tackling");

  let runPower = (rb.speed + rb.agility + rb.strength) / 3 + olBlocking / 2;
  let defPower = (dlTackling + lbTackling) / 2;

  // Matchup: run defense vs run play
  if (defPlay.strength === "run" || defPlay.strength === "run_middle") {
    defPower += 15;
  }
  if (defPlay.blitz) {
    defPower -= 8; // blitzing leaves gaps for runs
    runPower += 5;
  }
  if (defPlay.strength === "pass_deep" || defPlay.strength === "pass_short") {
    runPower += 10;
  }

  // Counter/Draw beats aggressive defense
  if ((offPlay.id === "run_counter" || offPlay.id === "run_draw") && defPlay.blitz) {
    runPower += 15;
  }

  // Weather
  runPower += weather.runBonus;

  const diff = runPower - defPower;
  let baseYards = Math.round(diff / 8) + rand(-2, 5);

  // Big play potential
  if (chance(8) && rb.speed > 85) baseYards += rand(10, 35);
  // Stuffed at the line
  if (baseYards < 0) baseYards = Math.max(-5, baseYards);

  result.yards = baseYards;
  result.timeUsed = rand(4, 8);

  // Fumble check
  const fumbleChance = 2 + weather.fumbleChance / 2;
  if (chance(fumbleChance)) {
    result.turnover = true;
    result.turnoverType = "fumble";
    result.description = `${rb.name} fumbles the ball! Recovered by the defense!`;
    result.yards = Math.min(result.yards, 2);
    return result;
  }

  // Injury check (3%)
  if (chance(3)) {
    result.injury = { player: rb.name, severity: chance(30) ? "out_for_game" : "shaken_up" };
  }

  const directionText = offPlay.direction === "middle" ? "up the middle" : `around the ${offPlay.direction} side`;
  if (baseYards > 15) {
    result.description = `${rb.name} breaks free ${directionText} for a big gain of ${baseYards} yards!`;
  } else if (baseYards > 0) {
    result.description = `${rb.name} runs ${directionText} for ${baseYards} yards.`;
  } else if (baseYards === 0) {
    result.description = `${rb.name} is stopped at the line of scrimmage for no gain.`;
  } else {
    result.description = `${rb.name} is tackled behind the line for a loss of ${Math.abs(baseYards)} yards!`;
  }

  // Touchdown check
  const yardsToEndzone = gameState.direction === "right" ? (100 - gameState.ball_on) : gameState.ball_on;
  if (baseYards >= yardsToEndzone) {
    result.touchdown = true;
    result.yards = yardsToEndzone;
    result.description = `TOUCHDOWN! ${rb.name} ${baseYards > 15 ? "breaks free and scores" : "punches it in"}! ${result.yards}-yard run!`;
  }

  return result;
}

function simulatePass(offPlay, defPlay, offRoster, defRoster, weather, result, gameState) {
  const qb = getQB(offRoster) || { throwing: 70, awareness: 70, speed: 60 };
  const receivers = getStarterByGroup(offRoster, "WR_TE");
  const receiver = receivers[rand(0, Math.max(0, receivers.length - 1))] || { catching: 70, speed: 75, name: "Receiver" };
  const olBlocking = getAvgStat(offRoster, "OL", "blocking");
  const dlRush = getAvgStat(defRoster, "DL", "tackling");
  const dbCoverage = getAvgStat(defRoster, "DB", "awareness");
  const dbCatching = getAvgStat(defRoster, "DB", "catching");

  // Sack check
  let sackChance = 8 + (dlRush - olBlocking) / 3;
  if (defPlay.blitz) sackChance += 15;
  if (defPlay.strength === "pass_rush" || defPlay.strength === "pass_rush_extreme") sackChance += 10;
  if (offPlay.distance === "deep") sackChance += 5;

  // Play action reduces sack chance if defense was playing run
  if (offPlay.id === "pass_play_action" && (defPlay.strength === "run" || defPlay.strength === "run_middle")) {
    sackChance -= 15;
  }

  if (chance(Math.max(3, sackChance))) {
    const sackYards = rand(-3, -12);
    result.yards = sackYards;
    result.sack = true;
    result.timeUsed = rand(4, 7);
    result.description = `${qb.name} is SACKED for a loss of ${Math.abs(sackYards)} yards!`;
    return result;
  }

  // Completion calculation
  let completionChance = 50 + (qb.throwing - 70) / 2 + (receiver.catching - 70) / 3 - (dbCoverage - 70) / 3;
  completionChance += weather.passAccuracy / 2;

  if (offPlay.distance === "short") completionChance += 18;
  if (offPlay.distance === "medium") completionChance += 5;
  if (offPlay.distance === "deep") completionChance -= 15;

  // Defense matchup
  if (defPlay.strength === "pass_short" && offPlay.distance === "short") completionChance -= 15;
  if (defPlay.strength === "pass_medium" && offPlay.distance === "medium") completionChance -= 12;
  if (defPlay.strength === "pass_deep" && offPlay.distance === "deep") completionChance -= 15;
  if (defPlay.strength === "pass_all") completionChance -= 18;

  // Blitz opens up receivers but QB has less time
  if (defPlay.blitz && !result.sack) {
    completionChance += 5; // less coverage if not sacked
  }

  // Man coverage vs zone
  if (defPlay.id === "def_man_coverage" && receiver.speed > 88) completionChance += 8;
  if (defPlay.id === "def_bump_run" && offPlay.distance === "short") completionChance -= 12;

  // Play action bonus
  if (offPlay.id === "pass_play_action" && (defPlay.strength === "run" || defPlay.strength === "run_middle")) {
    completionChance += 20;
  }

  completionChance = Math.max(10, Math.min(92, completionChance));

  if (chance(completionChance)) {
    // Complete!
    let baseYards;
    if (offPlay.distance === "short") baseYards = rand(2, 10);
    else if (offPlay.distance === "medium") baseYards = rand(8, 22);
    else baseYards = rand(20, 55);

    // YAC based on receiver speed
    if (receiver.speed > 85 && chance(25)) baseYards += rand(5, 15);

    result.yards = baseYards;
    result.timeUsed = offPlay.distance === "short" ? rand(3, 6) : offPlay.distance === "medium" ? rand(5, 8) : rand(6, 10);

    // Fumble after catch
    if (chance(1.5 + weather.fumbleChance / 3)) {
      result.turnover = true;
      result.turnoverType = "fumble";
      result.description = `${qb.name} completes to ${receiver.name} for ${baseYards} yards, but he FUMBLES! Recovered by the defense!`;
      return result;
    }

    // Touchdown check
    const yardsToEndzone = gameState.direction === "right" ? (100 - gameState.ball_on) : gameState.ball_on;
    if (baseYards >= yardsToEndzone) {
      result.touchdown = true;
      result.yards = yardsToEndzone;
      result.description = `TOUCHDOWN! ${qb.name} connects with ${receiver.name} for a ${result.yards}-yard TD pass!`;
      return result;
    }

    result.description = `${qb.name} completes to ${receiver.name} for ${baseYards} yards.`;
  } else {
    // Incomplete or interception
    let intChance = 3 + (dbCatching - 60) / 5;
    if (offPlay.distance === "deep") intChance += 4;
    if (offPlay.id === "pass_hail_mary") intChance += 10;
    if (defPlay.id === "def_man_coverage") intChance += 2;

    if (chance(intChance)) {
      result.turnover = true;
      result.turnoverType = "interception";
      result.yards = 0;
      result.timeUsed = rand(4, 8);
      result.description = `INTERCEPTED! ${qb.name}'s pass intended for ${receiver.name} is picked off!`;
      return result;
    }

    result.yards = 0;
    result.timeUsed = offPlay.distance === "short" ? rand(3, 5) : rand(5, 8);
    result.description = `${qb.name}'s pass to ${receiver.name} falls incomplete.`;
  }

  // Injury check
  if (chance(2)) {
    const injured = chance(50) ? qb : receiver;
    result.injury = { player: injured.name, severity: chance(20) ? "out_for_game" : "shaken_up" };
  }

  return result;
}

function simulatePunt(gameState, offRoster, defRoster, defPlay, weather, result) {
  const punter = offRoster.find(p => p.position === "P") || { kick_power: 70 };
  const puntYards = 30 + Math.round((punter.kick_power - 70) / 2) + rand(-5, 10) + weather.kickAccuracy / 3;

  // Blocked punt
  if (defPlay.id === "def_punt_block" && chance(12)) {
    result.yards = -10;
    result.turnover = true;
    result.turnoverType = "blocked_punt";
    result.description = "The punt is BLOCKED! Defense recovers!";
    result.timeUsed = rand(5, 8);
    return result;
  }

  result.yards = Math.max(15, Math.round(puntYards));
  result.timeUsed = rand(5, 8);
  result.description = `Punt of ${result.yards} yards.`;
  result.isPunt = true;

  // Return yards
  if (defPlay.id !== "def_punt_block") {
    const returnYards = rand(0, 15);
    if (returnYards > 0) {
      result.returnYards = returnYards;
      result.description += ` Returned ${returnYards} yards.`;
    }
  }

  return result;
}

function simulateFieldGoal(gameState, offRoster, defRoster, defPlay, weather, result) {
  const kicker = offRoster.find(p => p.position === "K") || { kick_power: 70 };
  const yardsToEndzone = gameState.direction === "right" ? (100 - gameState.ball_on) : gameState.ball_on;
  const fgDistance = yardsToEndzone + 17; // snap + hold

  let fgChance = 90 - (fgDistance - 20) * 1.5 + (kicker.kick_power - 70) / 2;
  fgChance += weather.kickAccuracy / 2;

  // Blocked
  if (defPlay.id === "def_fg_block" && chance(8)) {
    result.description = "The field goal is BLOCKED!";
    result.timeUsed = rand(4, 6);
    result.turnover = true;
    result.turnoverType = "blocked_fg";
    return result;
  }

  fgChance = Math.max(5, Math.min(98, fgChance));

  if (chance(fgChance)) {
    result.fieldGoalGood = true;
    result.description = `The ${fgDistance}-yard field goal is GOOD!`;
  } else {
    result.description = `The ${fgDistance}-yard field goal is NO GOOD! Wide ${chance(50) ? "left" : "right"}.`;
    result.turnover = true;
    result.turnoverType = "missed_fg";
  }
  result.timeUsed = rand(4, 6);
  return result;
}

export function simulateExtraPoint(offRoster, weather) {
  const kicker = offRoster.find(p => p.position === "K") || { kick_power: 70 };
  let xpChance = 95 + (kicker.kick_power - 70) / 5 + (weather.kickAccuracy || 0) / 4;
  xpChance = Math.min(99, xpChance);
  return chance(xpChance);
}

export function simulateKickoff() {
  // After a score, ball goes to the 20-25 yard line on average
  const returnYards = rand(15, 35);
  return Math.min(40, returnYards);
}

export function getInitialStats() {
  return {
    totalYards: 0,
    passingYards: 0,
    rushingYards: 0,
    firstDowns: 0,
    turnovers: 0,
    sacks: 0,
    penalties: 0,
    penaltyYards: 0,
    timeOfPossession: 0,
    completions: 0,
    attempts: 0,
    rushAttempts: 0,
    fieldGoals: 0,
    fieldGoalAttempts: 0,
    punts: 0,
  };
}