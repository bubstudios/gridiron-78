import React from 'react';
import { NFL_1978_TEAMS } from '@/lib/nfl1978data';

function getTeam(abbr) {
  return NFL_1978_TEAMS.find(t => t.abbreviation === abbr);
}

export default function KickoffBanner({ kickingTeamAbbr, onKickoff }) {
  const team = getTeam(kickingTeamAbbr);
  return (
    <div className="bg-slate-900 rounded-xl border border-amber-500/50 p-6 text-center">
      <p className="text-amber-400 font-bold text-lg mb-3">👟 Kickoff</p>
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="w-6 h-6 rounded" style={{ backgroundColor: team?.primary_color }} />
        <span className="text-white font-semibold">{team?.city} {team?.name}</span>
        <span className="text-slate-500 text-sm">to kick off</span>
      </div>
      <button
        onClick={onKickoff}
        className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-3 rounded-lg transition-colors"
      >
        Kick Off!
      </button>
    </div>
  );
}