import React from 'react';

export default function GameStats({ homeStats, awayStats, homeAbbr, awayAbbr }) {
  const hs = homeStats || {};
  const as = awayStats || {};

  const rows = [
    { label: "Total Yards", home: hs.totalYards || 0, away: as.totalYards || 0 },
    { label: "Passing Yards", home: hs.passingYards || 0, away: as.passingYards || 0 },
    { label: "Rushing Yards", home: hs.rushingYards || 0, away: as.rushingYards || 0 },
    { label: "First Downs", home: hs.firstDowns || 0, away: as.firstDowns || 0 },
    { label: "Completions", home: `${hs.completions || 0}/${hs.attempts || 0}`, away: `${as.completions || 0}/${as.attempts || 0}` },
    { label: "Rush Attempts", home: hs.rushAttempts || 0, away: as.rushAttempts || 0 },
    { label: "Turnovers", home: hs.turnovers || 0, away: as.turnovers || 0 },
    { label: "Sacks", home: hs.sacks || 0, away: as.sacks || 0 },
    { label: "Penalties", home: `${hs.penalties || 0} (${hs.penaltyYards || 0} yds)`, away: `${as.penalties || 0} (${as.penaltyYards || 0} yds)` },
  ];

  return (
    <div className="bg-slate-900 rounded-xl border border-slate-700">
      <div className="px-4 py-3 border-b border-slate-700">
        <h3 className="text-slate-300 text-sm font-semibold">Team Stats</h3>
      </div>
      <div className="p-3">
        <div className="grid grid-cols-3 gap-1 text-xs mb-2">
          <span className="text-slate-500 font-semibold text-center">{awayAbbr}</span>
          <span></span>
          <span className="text-slate-500 font-semibold text-center">{homeAbbr}</span>
        </div>
        {rows.map((r, i) => (
          <div key={i} className="grid grid-cols-3 gap-1 text-xs py-1 border-t border-slate-800">
            <span className="text-white text-center font-mono">{r.away}</span>
            <span className="text-slate-500 text-center">{r.label}</span>
            <span className="text-white text-center font-mono">{r.home}</span>
          </div>
        ))}
      </div>
    </div>
  );
}