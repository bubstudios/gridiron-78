import React from 'react';
import { NFL_1978_TEAMS } from '@/lib/nfl1978data';

function getTeam(abbr) {
  return NFL_1978_TEAMS.find(t => t.abbreviation === abbr);
}

function TeamPlayerStats({ teamAbbr, players }) {
  const playerList = Object.values(players || {}).filter(p =>
    (p.passingAttempts > 0) || (p.rushingAttempts > 0) || (p.receptions > 0) ||
    (p.interceptionsMade > 0) || (p.sacksMade > 0) || (p.tackles > 0)
  );

  if (playerList.length === 0) {
    return <p className="text-slate-600 text-xs italic py-2">No stats yet — plays are being tracked.</p>;
  }

  const passers = playerList.filter(p => p.passingAttempts > 0).sort((a, b) => b.passingYards - a.passingYards);
  const rushers = playerList.filter(p => p.rushingAttempts > 0).sort((a, b) => b.rushingYards - a.rushingYards);
  const receivers = playerList.filter(p => p.receptions > 0).sort((a, b) => b.receivingYards - a.receivingYards);
  const defenders = playerList.filter(p => p.tackles > 0 || p.sacksMade > 0 || p.interceptionsMade > 0).sort((a, b) => b.tackles - a.tackles);

  return (
    <div className="space-y-4">
      {passers.length > 0 && (
        <StatTable title="Passing" headers={["C/ATT", "YDS", "TD", "INT", "SCK"]} rows={passers.map(p => [
          p.name, p.position,
          `${p.passingCompletions}/${p.passingAttempts}`,
          p.passingYards,
          { value: p.passingTDs, className: "text-green-400" },
          { value: p.interceptionsThrown, className: "text-red-400" },
          p.timesSacked,
        ])} />
      )}
      {rushers.length > 0 && (
        <StatTable title="Rushing" headers={["CAR", "YDS", "AVG", "TD", "FUM"]} rows={rushers.map(p => [
          p.name, p.position,
          p.rushingAttempts,
          p.rushingYards,
          p.rushingAttempts > 0 ? (p.rushingYards / p.rushingAttempts).toFixed(1) : "0.0",
          { value: p.rushingTDs, className: "text-green-400" },
          { value: p.fumbles, className: "text-red-400" },
        ])} />
      )}
      {receivers.length > 0 && (
        <StatTable title="Receiving" headers={["REC", "YDS", "AVG", "TD"]} rows={receivers.map(p => [
          p.name, p.position,
          p.receptions,
          p.receivingYards,
          p.receptions > 0 ? (p.receivingYards / p.receptions).toFixed(1) : "0.0",
          { value: p.receivingTDs, className: "text-green-400" },
        ])} />
      )}
      {defenders.length > 0 && (
        <StatTable title="Defense" headers={["TACK", "SACK", "INT"]} rows={defenders.map(p => [
          p.name, p.position,
          p.tackles,
          p.sacksMade,
          p.interceptionsMade,
        ])} />
      )}
    </div>
  );
}

function StatTable({ title, headers, rows }) {
  return (
    <div>
      <h4 className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">{title}</h4>
      <table className="w-full">
        <thead>
          <tr className="text-slate-600 text-xs border-b border-slate-700">
            <th className="text-left py-1 px-2 font-medium">Player</th>
            <th className="text-center py-1 px-2 font-medium">Pos</th>
            {headers.map((h, i) => (
              <th key={i} className="text-center py-1 px-2 font-medium">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-slate-800">
              <td className="py-1.5 px-2 text-white text-xs">{row[0]}</td>
              <td className="py-1.5 px-2 text-slate-500 text-xs text-center">{row[1]}</td>
              {row.slice(2).map((cell, j) => {
                const isObj = typeof cell === "object" && cell !== null;
                return (
                  <td key={j} className={`py-1.5 px-2 text-xs text-center font-mono ${isObj ? cell.className : "text-slate-300"}`}>
                    {isObj ? cell.value : cell}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PlayerStatsTable({ playerStats, userAbbr, oppAbbr }) {
  const userTeam = getTeam(userAbbr);
  const oppTeam = getTeam(oppAbbr);

  return (
    <div className="space-y-4">
      <div className="bg-slate-900 rounded-xl border border-slate-700 p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: userTeam?.primary_color }} />
          <h3 className="text-white text-sm font-semibold">{userTeam?.city} {userTeam?.name}</h3>
          <span className="text-amber-400 text-xs font-medium">YOU</span>
        </div>
        <TeamPlayerStats teamAbbr={userAbbr} players={playerStats?.[userAbbr]} />
      </div>
      <div className="bg-slate-900 rounded-xl border border-slate-700 p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: oppTeam?.primary_color }} />
          <h3 className="text-white text-sm font-semibold">{oppTeam?.city} {oppTeam?.name}</h3>
        </div>
        <TeamPlayerStats teamAbbr={oppAbbr} players={playerStats?.[oppAbbr]} />
      </div>
    </div>
  );
}