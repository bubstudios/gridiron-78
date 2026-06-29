import React from 'react';
import { Cloud, CloudRain, CloudSnow, Wind, CloudFog, Thermometer } from 'lucide-react';

const weatherIcons = {
  clear: null,
  rain: CloudRain,
  snow: CloudSnow,
  wind: Wind,
  fog: CloudFog,
  cold: Thermometer,
};

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function Scoreboard({ gameState, homeTeam, awayTeam }) {
  const WeatherIcon = weatherIcons[gameState.weather];
  const isUserHome = gameState.user_team_abbr === gameState.home_team_abbr;
  const userOnOffense = gameState.possession === gameState.user_team_abbr;

  return (
    <div className="bg-slate-900 rounded-xl border border-slate-700 overflow-hidden">
      {/* Main scoreboard */}
      <div className="grid grid-cols-3 items-center px-4 py-3">
        {/* Away team */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white text-xs" style={{ backgroundColor: awayTeam?.primary_color || '#333' }}>
            {gameState.away_team_abbr}
          </div>
          <div>
            <p className="text-white font-semibold text-sm">{awayTeam?.city} {awayTeam?.name}</p>
            <p className="text-slate-500 text-xs">{gameState.away_team_abbr === gameState.user_team_abbr ? "👤 You" : "🤖 CPU"}</p>
          </div>
        </div>

        {/* Score & Time */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="text-3xl font-mono font-bold text-white">{gameState.away_score}</span>
            <span className="text-slate-600 text-lg">—</span>
            <span className="text-3xl font-mono font-bold text-white">{gameState.home_score}</span>
          </div>
          <div className="flex items-center justify-center gap-2 mt-1">
            <span className="text-amber-400 font-mono text-xs font-semibold">Q{gameState.quarter}</span>
            <span className="text-slate-400 font-mono text-sm">{formatTime(gameState.time_remaining)}</span>
          </div>
        </div>

        {/* Home team */}
        <div className="flex items-center justify-end gap-3">
          <div className="text-right">
            <p className="text-white font-semibold text-sm">{homeTeam?.city} {homeTeam?.name}</p>
            <p className="text-slate-500 text-xs">{gameState.home_team_abbr === gameState.user_team_abbr ? "👤 You" : "🤖 CPU"}</p>
          </div>
          <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white text-xs" style={{ backgroundColor: homeTeam?.primary_color || '#333' }}>
            {gameState.home_team_abbr}
          </div>
        </div>
      </div>

      {/* Game situation bar */}
      <div className="bg-slate-800 px-4 py-2 flex items-center justify-between text-xs">
        <div className="flex items-center gap-3">
          <span className={`px-2 py-0.5 rounded font-semibold ${userOnOffense ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>
            {userOnOffense ? "OFFENSE" : "DEFENSE"}
          </span>
          <span className="text-amber-300 font-mono font-semibold">
            {gameState.down > 4 ? "Change of Possession" : `${getOrdinal(gameState.down)} & ${gameState.yards_to_go >= 100 ? "Goal" : gameState.yards_to_go}`}
          </span>
        </div>

        <div className="flex items-center gap-3 text-slate-400">
          {WeatherIcon && <WeatherIcon size={14} className="text-blue-400" />}
          <span>{gameState.temperature}°F</span>
          {gameState.wind_speed > 10 && <span>Wind: {gameState.wind_speed}mph</span>}
          <span className="text-slate-600">|</span>
          <span>TO: {isUserHome ? gameState.home_timeouts : gameState.away_timeouts}</span>
        </div>
      </div>
    </div>
  );
}

function getOrdinal(n) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}