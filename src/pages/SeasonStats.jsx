import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { NFL_1978_TEAMS } from '@/lib/nfl1978data';
import { ArrowLeft, BarChart3 } from 'lucide-react';

function getTeam(abbr) {
  return NFL_1978_TEAMS.find(t => t.abbreviation === abbr);
}

function calculateRating(p) {
  const att = p.passing_attempts;
  if (att === 0) return "—";
  const a = ((p.passing_completions / att) - 0.3) * 5;
  const b = ((p.passing_yards / att) - 3) * 0.25;
  const c = (p.passing_tds / att) * 20;
  const d = 2.375 - ((p.interceptions_thrown / att) * 25);
  const clamp = v => Math.max(0, Math.min(2.375, v));
  const rating = ((clamp(a) + clamp(b) + clamp(c) + clamp(d)) / 6) * 100;
  return rating.toFixed(1);
}

const STAT_FIELDS = [
  'passing_attempts', 'passing_completions', 'passing_yards', 'passing_tds',
  'interceptions_thrown', 'times_sacked', 'rushing_attempts', 'rushing_yards',
  'rushing_tds', 'fumbles', 'receptions', 'receiving_yards', 'receiving_tds',
  'interceptions_made', 'sacks_made', 'tackles'
];

export default function SeasonStats() {
  const [allStats, setAllStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("passing");

  useEffect(() => {
    base44.entities.PlayerGameStat.list('-created_date', 500)
      .then(data => { setAllStats(data || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const aggregated = {};
  for (const record of allStats) {
    const key = `${record.team_abbr}_${record.player_name}`;
    if (!aggregated[key]) {
      aggregated[key] = {
        player_name: record.player_name,
        team_abbr: record.team_abbr,
        player_position: record.player_position || "",
        games_played: 0,
        passing_attempts: 0, passing_completions: 0, passing_yards: 0, passing_tds: 0,
        interceptions_thrown: 0, times_sacked: 0,
        rushing_attempts: 0, rushing_yards: 0, rushing_tds: 0, fumbles: 0,
        receptions: 0, receiving_yards: 0, receiving_tds: 0,
        interceptions_made: 0, sacks_made: 0, tackles: 0,
      };
    }
    aggregated[key].games_played += 1;
    for (const f of STAT_FIELDS) {
      aggregated[key][f] += record[f] || 0;
    }
  }

  const players = Object.values(aggregated);

  const categories = [
    { id: "passing", label: "Passing", filter: p => p.passing_attempts > 0, sort: p => p.passing_yards,
      cols: [
        { label: "GP", get: p => p.games_played },
        { label: "C/ATT", get: p => `${p.passing_completions}/${p.passing_attempts}` },
        { label: "YDS", get: p => p.passing_yards },
        { label: "TD", get: p => p.passing_tds, className: "text-green-400" },
        { label: "INT", get: p => p.interceptions_thrown, className: "text-red-400" },
        { label: "RTG", get: p => calculateRating(p) },
      ]
    },
    { id: "rushing", label: "Rushing", filter: p => p.rushing_attempts > 0, sort: p => p.rushing_yards,
      cols: [
        { label: "GP", get: p => p.games_played },
        { label: "CAR", get: p => p.rushing_attempts },
        { label: "YDS", get: p => p.rushing_yards },
        { label: "AVG", get: p => p.rushing_attempts > 0 ? (p.rushing_yards / p.rushing_attempts).toFixed(1) : "0.0" },
        { label: "TD", get: p => p.rushing_tds, className: "text-green-400" },
        { label: "FUM", get: p => p.fumbles, className: "text-red-400" },
      ]
    },
    { id: "receiving", label: "Receiving", filter: p => p.receptions > 0, sort: p => p.receiving_yards,
      cols: [
        { label: "GP", get: p => p.games_played },
        { label: "REC", get: p => p.receptions },
        { label: "YDS", get: p => p.receiving_yards },
        { label: "AVG", get: p => p.receptions > 0 ? (p.receiving_yards / p.receptions).toFixed(1) : "0.0" },
        { label: "TD", get: p => p.receiving_tds, className: "text-green-400" },
      ]
    },
    { id: "defense", label: "Defense", filter: p => p.tackles > 0 || p.sacks_made > 0 || p.interceptions_made > 0, sort: p => p.tackles,
      cols: [
        { label: "GP", get: p => p.games_played },
        { label: "TACK", get: p => p.tackles },
        { label: "SACK", get: p => p.sacks_made },
        { label: "INT", get: p => p.interceptions_made },
      ]
    },
  ];

  const currentCat = categories.find(c => c.id === category);
  const sorted = players.filter(currentCat.filter).sort((a, b) => currentCat.sort(b) - currentCat.sort(a)).slice(0, 25);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800">
        <Link to="/" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
          <ArrowLeft size={16} /> Back
        </Link>
        <div className="text-amber-400 font-bold text-sm tracking-wide">1978 SEASON</div>
        <div className="w-16" />
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white">Season Leaders</h1>
          <p className="text-slate-400 text-sm mt-1">Cumulative stats across all games played</p>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-3 rounded-full" />
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="w-8 h-8 border-4 border-slate-700 border-t-amber-500 rounded-full animate-spin" />
          </div>
        ) : players.length === 0 ? (
          <div className="bg-slate-900 rounded-xl border border-slate-700 p-8 text-center">
            <BarChart3 size={32} className="text-slate-700 mx-auto mb-3" />
            <p className="text-slate-400 font-medium">No season stats yet</p>
            <p className="text-slate-600 text-sm mt-1">Play a game and the stats will appear here.</p>
            <Link to="/" className="inline-block mt-4 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-2.5 rounded-lg text-sm transition-colors">
              Start a Game
            </Link>
          </div>
        ) : (
          <>
            <div className="flex gap-1 bg-slate-900 rounded-lg p-1 border border-slate-700 mb-4">
              {categories.map(c => (
                <button
                  key={c.id}
                  onClick={() => setCategory(c.id)}
                  className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${category === c.id ? "bg-slate-700 text-white" : "text-slate-400 hover:text-white"}`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <div className="bg-slate-900 rounded-xl border border-slate-700 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="text-slate-500 text-xs border-b border-slate-700">
                    <th className="text-left py-2 px-3 font-semibold">#</th>
                    <th className="text-left py-2 px-3 font-semibold">Player</th>
                    <th className="text-center py-2 px-3 font-semibold">Team</th>
                    {currentCat.cols.map((col, i) => (
                      <th key={i} className="text-center py-2 px-3 font-semibold">{col.label}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sorted.map((p, i) => {
                    const team = getTeam(p.team_abbr);
                    return (
                      <tr key={`${p.team_abbr}_${p.player_name}`} className="border-t border-slate-800 hover:bg-slate-800/50">
                        <td className="py-2 px-3 text-slate-600 text-xs font-mono">{i + 1}</td>
                        <td className="py-2 px-3">
                          <span className="text-white text-sm font-medium">{p.player_name}</span>
                          <span className="text-slate-600 text-xs ml-1.5">{p.player_position}</span>
                        </td>
                        <td className="py-2 px-3 text-center">
                          <span className="inline-flex items-center gap-1.5">
                            <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: team?.primary_color }} />
                            <span className="text-slate-400 text-xs">{p.team_abbr}</span>
                          </span>
                        </td>
                        {currentCat.cols.map((col, j) => (
                          <td key={j} className={`py-2 px-3 text-center font-mono text-xs ${col.className || "text-slate-300"}`}>
                            {col.get(p)}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <p className="text-slate-600 text-xs text-center mt-4">
              Showing top {sorted.length} {currentCat.label.toLowerCase()} leaders · {allStats.length} game stat records
            </p>
          </>
        )}
      </div>
    </div>
  );
}