import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { NFL_1978_TEAMS } from '@/lib/nfl1978data';
import { getRoster } from '@/lib/nfl1978data';
import { simulatePlay, generateWeather, simulateExtraPoint, simulateKickoff, getInitialStats } from '@/lib/gameEngine';
import FootballField from '@/components/game/FootballField';
import Scoreboard from '@/components/game/Scoreboard';
import PlaySelector from '@/components/game/PlaySelector';
import PlayLog from '@/components/game/PlayLog';
import GameStats from '@/components/game/GameStats';
import { OFFENSIVE_PLAYS, DEFENSIVE_PLAYS } from '@/lib/playbook';
import { ArrowLeft, BarChart3, ScrollText, Users } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import PlayerStatsTable from '@/components/game/PlayerStatsTable';
import KickoffBanner from '@/components/game/KickoffBanner';
import { applyPlayerStats, getInitialPlayerStats } from '@/lib/gameEngine';

function getTeam(abbr) {
  return NFL_1978_TEAMS.find(t => t.abbreviation === abbr);
}

function cpuSelectPlay(isOffense, down, yardsToGo, ballOn, direction) {
  if (isOffense) {
    const yardsToEndzone = direction === "right" ? (100 - ballOn) : ballOn;
    if (down === 4) {
      if (yardsToEndzone <= 35) return OFFENSIVE_PLAYS.find(p => p.id === "field_goal");
      return OFFENSIVE_PLAYS.find(p => p.id === "punt");
    }
    if (yardsToGo <= 2) {
      const shortPlays = ["run_qb_sneak", "run_power", "run_fb_dive", "pass_slant"];
      return OFFENSIVE_PLAYS.find(p => p.id === shortPlays[Math.floor(Math.random() * shortPlays.length)]);
    }
    if (down === 3 && yardsToGo >= 8) {
      const longPlays = ["pass_crossing", "pass_post", "pass_curl", "pass_fly"];
      return OFFENSIVE_PLAYS.find(p => p.id === longPlays[Math.floor(Math.random() * longPlays.length)]);
    }
    const normalPlays = OFFENSIVE_PLAYS.filter(p => p.type === "run" || p.type === "pass");
    return normalPlays[Math.floor(Math.random() * normalPlays.length)];
  } else {
    const normalDef = DEFENSIVE_PLAYS.filter(p => p.category !== "Special Teams");
    return normalDef[Math.floor(Math.random() * normalDef.length)];
  }
}

export default function Game() {
  const params = new URLSearchParams(window.location.search);
  const userAbbr = params.get("user") || "PIT";
  const oppAbbr = params.get("opponent") || "DAL";

  const homeTeam = getTeam(oppAbbr);
  const awayTeam = getTeam(userAbbr);

  const [rosters] = useState(() => ({
    [userAbbr]: getRoster(userAbbr),
    [oppAbbr]: getRoster(oppAbbr),
  }));

  const [gameState, setGameState] = useState(() => {
    const weather = generateWeather(homeTeam?.stadium_type);
    const coinWinner = Math.random() > 0.5 ? userAbbr : oppAbbr;
    const receiving = coinWinner;
    return {
      home_team_abbr: oppAbbr,
      away_team_abbr: userAbbr,
      home_score: 0,
      away_score: 0,
      quarter: 1,
      time_remaining: 900,
      possession: receiving,
      ball_on: 20,
      down: 1,
      yards_to_go: 10,
      direction: receiving === userAbbr ? "right" : "left",
      user_team_abbr: userAbbr,
      ...weather,
      play_log: [
        `Welcome to ${homeTeam?.stadium}!`,
        `${weather.weather !== "clear" ? `Weather: ${weather.weather}, ${weather.temperature}°F` : `Clear skies, ${weather.temperature}°F`}`,
        `${coinWinner === userAbbr ? "You" : homeTeam?.city} won the coin toss and will receive.`,
        `--- QUARTER 1 ---`,
      ],
      status: "in_progress",
      home_timeouts: 3,
      away_timeouts: 3,
      home_stats: getInitialStats(),
      away_stats: getInitialStats(),
      coin_toss_winner: coinWinner,
      receiving_second_half: coinWinner === userAbbr ? oppAbbr : userAbbr,
      awaitingXP: false,
      lastTDTeam: null,
      awaitingKickoff: true,
      kickoffKickingTeam: receiving === userAbbr ? oppAbbr : userAbbr,
      player_stats: getInitialPlayerStats([userAbbr, oppAbbr]),
    };
  });

  const [tab, setTab] = useState("plays");
  const [animating, setAnimating] = useState(false);
  const [statsSaved, setStatsSaved] = useState(false);
  const [selectedPlay, setSelectedPlay] = useState(null);
  const [awaitingHike, setAwaitingHike] = useState(false);
  const [animatePlay, setAnimatePlay] = useState(null);
  const pendingResultRef = useRef(null);
  const animKeyRef = useRef(0);

  useEffect(() => {
    if (gameState.status === "completed" && !statsSaved) {
      const records = [];
      for (const teamAbbr of [userAbbr, oppAbbr]) {
        const teamStats = gameState.player_stats?.[teamAbbr] || {};
        const opponentAbbr = teamAbbr === userAbbr ? oppAbbr : userAbbr;
        for (const player of Object.values(teamStats)) {
          records.push({
            player_name: player.name,
            team_abbr: teamAbbr,
            opponent_abbr: opponentAbbr,
            player_position: player.position || "",
            passing_attempts: player.passingAttempts || 0,
            passing_completions: player.passingCompletions || 0,
            passing_yards: player.passingYards || 0,
            passing_tds: player.passingTDs || 0,
            interceptions_thrown: player.interceptionsThrown || 0,
            times_sacked: player.timesSacked || 0,
            rushing_attempts: player.rushingAttempts || 0,
            rushing_yards: player.rushingYards || 0,
            rushing_tds: player.rushingTDs || 0,
            fumbles: player.fumbles || 0,
            receptions: player.receptions || 0,
            receiving_yards: player.receivingYards || 0,
            receiving_tds: player.receivingTDs || 0,
            interceptions_made: player.interceptionsMade || 0,
            sacks_made: player.sacksMade || 0,
            tackles: player.tackles || 0,
          });
        }
      }
      if (records.length > 0) {
        base44.entities.PlayerGameStat.bulkCreate(records)
          .then(() => setStatsSaved(true))
          .catch(() => setStatsSaved(true));
      } else {
        setStatsSaved(true);
      }
    }
  }, [gameState.status, statsSaved, userAbbr, oppAbbr, gameState.player_stats]);

  const userOnOffense = gameState.possession === userAbbr;
  const isGameOver = gameState.status === "completed";

  const handleSelectPlay = useCallback((play) => {
    if (animating || isGameOver || awaitingHike) return;
    setSelectedPlay(play);
    setAwaitingHike(true);
  }, [animating, isGameOver, awaitingHike]);

  // Commit the play result to game state (called after animation finishes)
  const commitPlay = useCallback((result, offPlay, defPlay, offTeam, defTeam) => {
    setGameState(prev => {
      const gs = { ...prev };
      const newPlayerStats = applyPlayerStats(gs.player_stats, result.playerStats);
      const newLogs = [...gs.play_log];
      const offStats = offTeam === oppAbbr ? { ...gs.home_stats } : { ...gs.away_stats };
      const defStats = defTeam === oppAbbr ? { ...gs.home_stats } : { ...gs.away_stats };

      if (offTeam === userAbbr) {
        newLogs.push(`📋 You called: ${offPlay.name}`);
      } else {
        newLogs.push(`📋 You called: ${defPlay.name}`);
      }

      if (offPlay.type === "run") {
        offStats.rushAttempts = (offStats.rushAttempts || 0) + 1;
        if (result.yards > 0) offStats.rushingYards = (offStats.rushingYards || 0) + result.yards;
      }
      if (offPlay.type === "pass") {
        offStats.attempts = (offStats.attempts || 0) + 1;
        if (result.yards > 0 && !result.sack) {
          offStats.completions = (offStats.completions || 0) + 1;
          offStats.passingYards = (offStats.passingYards || 0) + result.yards;
        }
        if (result.sack) defStats.sacks = (defStats.sacks || 0) + 1;
      }
      if (result.penalty) {
        if (result.penalty.onOffense) {
          offStats.penalties = (offStats.penalties || 0) + 1;
          offStats.penaltyYards = (offStats.penaltyYards || 0) + Math.abs(result.penalty.yards);
        } else {
          defStats.penalties = (defStats.penalties || 0) + 1;
          defStats.penaltyYards = (defStats.penaltyYards || 0) + Math.abs(result.penalty.yards);
        }
      }
      if (result.turnover) offStats.turnovers = (offStats.turnovers || 0) + 1;

      offStats.totalYards = (offStats.passingYards || 0) + (offStats.rushingYards || 0);

      let newBallOn = gs.ball_on;
      let newDown = gs.down;
      let newYTG = gs.yards_to_go;
      let newPossession = gs.possession;
      let newDirection = gs.direction;
      let homeScore = gs.home_score;
      let awayScore = gs.away_score;
      let awaitingXP = false;
      let lastTDTeam = null;
      let awaitingKickoff = false;
      let kickoffKickingTeam = null;

      newLogs.push(result.description);

      if (result.injury) {
        const sev = result.injury.severity === "out_for_game" ? "is OUT for the game" : "is shaken up but stays in";
        newLogs.push(`🏥 ${result.injury.player} ${sev}!`);
      }

      if (result.isPunt) {
        if (gs.direction === "right") {
          newBallOn = Math.max(1, Math.min(99, gs.ball_on + result.yards - (result.returnYards || 0)));
        } else {
          newBallOn = Math.max(1, Math.min(99, gs.ball_on - result.yards + (result.returnYards || 0)));
        }
        newPossession = defTeam;
        newDirection = gs.direction === "right" ? "left" : "right";
        newDown = 1;
        newYTG = 10;
      } else if (result.touchdown) {
        if (offTeam === oppAbbr) homeScore += 6;
        else awayScore += 6;
        newLogs.push("🏈 TOUCHDOWN!");
        awaitingXP = true;
        lastTDTeam = offTeam;
      } else if (result.fieldGoalGood) {
        if (offTeam === oppAbbr) homeScore += 3;
        else awayScore += 3;
        offStats.fieldGoals = (offStats.fieldGoals || 0) + 1;
        offStats.fieldGoalAttempts = (offStats.fieldGoalAttempts || 0) + 1;
        awaitingKickoff = true;
        kickoffKickingTeam = offTeam;
      } else if (result.turnover) {
        if (result.turnoverType === "missed_fg") {
          offStats.fieldGoalAttempts = (offStats.fieldGoalAttempts || 0) + 1;
        }
        newPossession = defTeam;
        newDirection = gs.direction === "right" ? "left" : "right";
        if (result.turnoverType === "interception") {
          const intReturn = Math.floor(Math.random() * 20);
          if (gs.direction === "right") {
            newBallOn = Math.max(1, Math.min(99, gs.ball_on + intReturn));
          } else {
            newBallOn = Math.max(1, Math.min(99, gs.ball_on - intReturn));
          }
        }
        newDown = 1;
        newYTG = 10;
      } else {
        if (gs.direction === "right") {
          newBallOn = Math.max(1, Math.min(99, gs.ball_on + result.yards));
        } else {
          newBallOn = Math.max(1, Math.min(99, gs.ball_on - result.yards));
        }

        if (result.yards >= gs.yards_to_go && !result.penalty) {
          newDown = 1;
          newYTG = 10;
          offStats.firstDowns = (offStats.firstDowns || 0) + 1;
          const yte = gs.direction === "right" ? (100 - newBallOn) : newBallOn;
          if (yte < 10) newYTG = yte;
        } else if (result.penalty) {
          // After penalty, replay the down
        } else {
          newDown = gs.down + 1;
          newYTG = Math.max(1, gs.yards_to_go - Math.max(0, result.yards));

          if (newDown > 4) {
            newLogs.push("Turnover on downs!");
            newPossession = defTeam;
            newDirection = gs.direction === "right" ? "left" : "right";
            newDown = 1;
            newYTG = 10;
          }
        }
      }

      // Safety check
      if (newBallOn <= 1 && gs.direction === "right" && newPossession === offTeam && !result.touchdown) {
        if (defTeam === oppAbbr) homeScore += 2;
        else awayScore += 2;
        newLogs.push("⚠️ SAFETY! 2 points for the defense!");
        newPossession = offTeam;
        newBallOn = 20;
        newDirection = gs.direction;
        newDown = 1;
        newYTG = 10;
      }
      if (newBallOn >= 99 && gs.direction === "left" && newPossession === offTeam && !result.touchdown) {
        if (defTeam === oppAbbr) homeScore += 2;
        else awayScore += 2;
        newLogs.push("⚠️ SAFETY! 2 points for the defense!");
        newPossession = offTeam;
        newBallOn = 80;
        newDirection = gs.direction;
        newDown = 1;
        newYTG = 10;
      }

      let newTime = gs.time_remaining - result.timeUsed;
      let newQuarter = gs.quarter;
      let newStatus = gs.status;

      if (newTime <= 0) {
        if (newQuarter < 4) {
          newQuarter += 1;
          newTime = 900;
          newLogs.push(`--- QUARTER ${newQuarter} ---`);

          if (newQuarter === 3) {
            newLogs.push("--- HALFTIME ---");
            awaitingKickoff = true;
            kickoffKickingTeam = gs.receiving_second_half === userAbbr ? oppAbbr : userAbbr;
          }
        } else {
          newTime = 0;
          newStatus = "completed";
          newLogs.push("--- GAME OVER ---");
          if (homeScore > awayScore) {
            newLogs.push(`${homeTeam?.city} ${homeTeam?.name} win!`);
          } else if (awayScore > homeScore) {
            newLogs.push(`${awayTeam?.city} ${awayTeam?.name} win!`);
          } else {
            newLogs.push("The game ends in a tie!");
          }
        }
      }

      const newHomeStats = offTeam === oppAbbr ? offStats : defStats;
      const newAwayStats = offTeam === userAbbr ? offStats : defStats;

      return {
        ...gs,
        ball_on: newBallOn,
        down: newDown,
        yards_to_go: newYTG,
        possession: newPossession,
        direction: newDirection,
        home_score: homeScore,
        away_score: awayScore,
        quarter: newQuarter,
        time_remaining: Math.max(0, newTime),
        play_log: newLogs,
        status: newStatus,
        home_stats: newHomeStats,
        away_stats: newAwayStats,
        player_stats: newPlayerStats,
        awaitingXP,
        lastTDTeam,
        awaitingKickoff,
        kickoffKickingTeam,
      };
    });
  }, [userAbbr, oppAbbr, homeTeam, awayTeam]);

  // Phase A: compute result, trigger animation
  const handleHike = useCallback(() => {
    if (!selectedPlay || animating || isGameOver) return;
    setAnimating(true);
    setAwaitingHike(false);

    const gs = gameState;
    const offTeam = gs.possession;
    const defTeam = offTeam === userAbbr ? oppAbbr : userAbbr;
    const offRoster = rosters[offTeam];
    const defRoster = rosters[defTeam];

    let offPlay, defPlay;
    if (offTeam === userAbbr) {
      offPlay = selectedPlay;
      defPlay = cpuSelectPlay(false, gs.down, gs.yards_to_go, gs.ball_on, gs.direction);
    } else {
      defPlay = selectedPlay;
      offPlay = cpuSelectPlay(true, gs.down, gs.yards_to_go, gs.ball_on, gs.direction);
    }

    const result = simulatePlay(gs, offPlay, defPlay, offRoster, defRoster);
    pendingResultRef.current = { result, offPlay, defPlay, offTeam, defTeam };
    animKeyRef.current += 1;
    setAnimatePlay({ startYard: result.startYard, endYard: result.endYard, key: animKeyRef.current });
  }, [selectedPlay, animating, isGameOver, userAbbr, oppAbbr, rosters, gameState]);

  // Phase B: commit state after animation finishes
  const handleAnimationDone = useCallback(() => {
    const pending = pendingResultRef.current;
    if (!pending) {
      setAnimating(false);
      setAnimatePlay(null);
      setSelectedPlay(null);
      return;
    }
    const { result, offPlay, defPlay, offTeam, defTeam } = pending;
    commitPlay(result, offPlay, defPlay, offTeam, defTeam);
    pendingResultRef.current = null;
    setAnimatePlay(null);
    setAnimating(false);
    setSelectedPlay(null);
  }, [commitPlay]);

  // Handle extra point
  const handleXP = useCallback(() => {
    setGameState(prev => {
      const gs = { ...prev };
      const tdTeam = gs.lastTDTeam;
      const offRoster = rosters[tdTeam];
      const weather = { kickAccuracy: gs.weather === "clear" ? 0 : -5 };
      const good = simulateExtraPoint(offRoster, weather);
      const newLogs = [...gs.play_log];

      if (good) {
        if (tdTeam === oppAbbr) gs.home_score += 1;
        else gs.away_score += 1;
        newLogs.push("Extra point is GOOD!");
      } else {
        newLogs.push("Extra point is NO GOOD!");
      }

      return {
        ...gs,
        play_log: newLogs,
        awaitingXP: false,
        lastTDTeam: null,
        awaitingKickoff: true,
        kickoffKickingTeam: tdTeam,
      };
    });
  }, [userAbbr, oppAbbr, rosters]);

  // Handle kickoff
  const handleKickoff = useCallback(() => {
    setGameState(prev => {
      const gs = { ...prev };
      const kickingTeam = gs.kickoffKickingTeam;
      const receivingTeam = kickingTeam === userAbbr ? oppAbbr : userAbbr;
      const kickingRoster = rosters[kickingTeam];
      const returnRoster = rosters[receivingTeam];

      const koResult = simulateKickoff(kickingRoster, returnRoster);
      const newLogs = [...gs.play_log, `👟 ${koResult.description}`];

      if (koResult.isReturnTD) {
        let homeScore = gs.home_score;
        let awayScore = gs.away_score;
        if (receivingTeam === oppAbbr) homeScore += 6;
        else awayScore += 6;
        newLogs.push("🏈 TOUCHDOWN on the kickoff return!");
        return {
          ...gs,
          play_log: newLogs,
          home_score: homeScore,
          away_score: awayScore,
          awaitingKickoff: false,
          kickoffKickingTeam: null,
          awaitingXP: true,
          lastTDTeam: receivingTeam,
        };
      }

      const newBallOn = receivingTeam === oppAbbr ? koResult.startingYard : 100 - koResult.startingYard;
      const newDirection = receivingTeam === userAbbr ? "right" : "left";

      return {
        ...gs,
        play_log: newLogs,
        awaitingKickoff: false,
        kickoffKickingTeam: null,
        possession: receivingTeam,
        direction: newDirection,
        ball_on: newBallOn,
        down: 1,
        yards_to_go: 10,
      };
    });
  }, [userAbbr, oppAbbr, rosters]);

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800 sticky top-0 z-30 bg-slate-950">
        <Link to="/" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 text-sm">
          <ArrowLeft size={16} /> Back
        </Link>
        <div className="text-amber-400 font-bold text-sm tracking-wide">NFL 1978</div>
        <Link to="/season" className="text-slate-400 hover:text-white transition-colors text-xs flex items-center gap-1">
          <BarChart3 size={14} /> Stats
        </Link>
      </div>

      <div className="max-w-2xl mx-auto px-2 sm:px-3 py-2 sm:py-4 space-y-2 sm:space-y-4">
        <Scoreboard gameState={gameState} homeTeam={homeTeam} awayTeam={awayTeam} />

        <div className="bg-slate-900 rounded-xl border border-slate-700 p-2 sm:p-3 overflow-hidden">
          <FootballField
            ballOn={gameState.ball_on}
            direction={gameState.direction}
            down={gameState.down}
            yardsToGo={gameState.yards_to_go}
            possession={gameState.possession}
            homeAbbr={oppAbbr}
            awayAbbr={userAbbr}
            homeColor={homeTeam?.primary_color}
            awayColor={awayTeam?.primary_color}
            awaitingHike={awaitingHike}
            onHike={handleHike}
            userOnOffense={userOnOffense}
            animatePlay={animatePlay}
            onAnimationDone={handleAnimationDone}
          />
        </div>

        {gameState.awaitingKickoff && !gameState.awaitingXP && (
          <KickoffBanner
            kickingTeamAbbr={gameState.kickoffKickingTeam}
            onKickoff={handleKickoff}
          />
        )}

        {gameState.awaitingXP && (
          <div className="bg-green-900/30 border border-green-700/50 rounded-xl p-6 text-center">
            <p className="text-green-300 font-semibold text-lg mb-3">🏈 TOUCHDOWN!</p>
            <button
              onClick={handleXP}
              className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-3 rounded-lg transition-colors"
            >
              Kick Extra Point
            </button>
          </div>
        )}

        {isGameOver && (
          <div className="bg-slate-900 rounded-xl border border-amber-500/50 p-6 text-center">
            <p className="text-amber-400 font-bold text-2xl mb-2">FINAL</p>
            <p className="text-white text-4xl font-mono font-bold mb-4">
              {gameState.away_score} — {gameState.home_score}
            </p>
            <p className="text-slate-300 mb-4">
              {gameState.away_score > gameState.home_score
                ? `${awayTeam?.city} ${awayTeam?.name} win!`
                : gameState.home_score > gameState.away_score
                ? `${homeTeam?.city} ${homeTeam?.name} win!`
                : "The game ends in a tie!"}
            </p>
            <Link to="/" className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-3 rounded-lg transition-colors inline-block">
              Play Again
            </Link>
          </div>
        )}

        {!isGameOver && !gameState.awaitingXP && !gameState.awaitingKickoff && (
          <>
            <div className="flex gap-1 bg-slate-900 rounded-lg p-1 border border-slate-700 sticky top-[44px] z-20">
              <button
                onClick={() => setTab("plays")}
                className={`flex-1 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-1 ${tab === "plays" ? "bg-slate-700 text-white" : "text-slate-400 hover:text-white"}`}
              >
                🏈 Play
              </button>
              <button
                onClick={() => setTab("stats")}
                className={`flex-1 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-1 ${tab === "stats" ? "bg-slate-700 text-white" : "text-slate-400 hover:text-white"}`}
              >
                <BarChart3 size={13} /> Stats
              </button>
              <button
                onClick={() => setTab("players")}
                className={`flex-1 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-1 ${tab === "players" ? "bg-slate-700 text-white" : "text-slate-400 hover:text-white"}`}
              >
                <Users size={13} /> Players
              </button>
              <button
                onClick={() => setTab("log")}
                className={`flex-1 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-1 ${tab === "log" ? "bg-slate-700 text-white" : "text-slate-400 hover:text-white"}`}
              >
                <ScrollText size={13} /> Log
              </button>
            </div>

            {tab === "plays" && (
              <PlaySelector
                isOffense={userOnOffense}
                onSelectPlay={handleSelectPlay}
                disabled={animating || awaitingHike}
                down={gameState.down}
                yardsToGo={gameState.yards_to_go}
                ballOn={gameState.ball_on}
                direction={gameState.direction}
              />
            )}

            {tab === "stats" && (
              <GameStats
                homeStats={gameState.home_stats}
                awayStats={gameState.away_stats}
                homeAbbr={oppAbbr}
                awayAbbr={userAbbr}
              />
            )}

            {tab === "players" && (
              <PlayerStatsTable
                playerStats={gameState.player_stats}
                userAbbr={userAbbr}
                oppAbbr={oppAbbr}
              />
            )}

            {tab === "log" && (
              <PlayLog logs={gameState.play_log} />
            )}
          </>
        )}

        {tab === "plays" && !isGameOver && !gameState.awaitingXP && !gameState.awaitingKickoff && gameState.play_log.length > 0 && (
          <div className="bg-slate-900/60 rounded-lg border border-slate-800 p-3">
            <p className="text-xs text-slate-500 mb-1">Last play:</p>
            <p className="text-sm text-slate-300">
              {gameState.play_log.filter(l => !l.startsWith("---") && !l.startsWith("📋")).slice(-1)[0]}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}