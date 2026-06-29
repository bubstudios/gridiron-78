import React, { useState } from 'react';
import { OFFENSIVE_PLAYS, DEFENSIVE_PLAYS, getPlaysByCategory } from '@/lib/playbook';
import { ChevronDown, ChevronRight, Zap, Shield, Footprints } from 'lucide-react';

export default function PlaySelector({ isOffense, onSelectPlay, disabled, down, yardsToGo, ballOn, direction }) {
  const plays = isOffense ? OFFENSIVE_PLAYS : DEFENSIVE_PLAYS;
  const categorized = getPlaysByCategory(plays);
  const [expandedCat, setExpandedCat] = useState(null);
  const [hoveredPlay, setHoveredPlay] = useState(null);

  // Suggest plays based on situation
  const suggestions = isOffense ? getOffenseSuggestions(down, yardsToGo, ballOn, direction) : getDefenseSuggestions(down, yardsToGo);

  const categoryIcons = {
    "Run": "🏈",
    "Short Pass": "📡",
    "Medium Pass": "🎯",
    "Deep Pass": "🚀",
    "Special Teams": "⚡",
    "Base": "🛡️",
    "Run Stop": "🧱",
    "Blitz": "💥",
    "Coverage": "🌐",
  };

  return (
    <div className="bg-slate-900 rounded-xl border border-slate-700 overflow-hidden">
      <div className="px-3 sm:px-4 py-2 sm:py-3 border-b border-slate-700">
        <h3 className="text-white font-semibold flex items-center gap-2 text-sm sm:text-base">
          {isOffense ? <Zap size={16} className="text-amber-400" /> : <Shield size={16} className="text-blue-400" />}
          {isOffense ? "Call Offensive Play" : "Call Defensive Play"}
        </h3>
        {suggestions.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {suggestions.map(s => {
              const play = plays.find(p => p.id === s);
              if (!play) return null;
              return (
                <button
                  key={s}
                  onClick={() => !disabled && onSelectPlay(play)}
                  disabled={disabled}
                  className="px-2.5 py-1 bg-amber-600/20 text-amber-300 rounded text-xs font-medium hover:bg-amber-600/40 transition-colors disabled:opacity-40 border border-amber-600/30"
                >
                  ★ {play.name}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <div className="max-h-[280px] sm:max-h-[360px] overflow-y-auto">
        {Object.entries(categorized).map(([category, catPlays]) => (
          <div key={category}>
            <button
              onClick={() => setExpandedCat(expandedCat === category ? null : category)}
              className="w-full flex items-center justify-between px-4 py-2.5 text-left hover:bg-slate-800 transition-colors"
            >
              <span className="text-sm text-slate-300 flex items-center gap-2">
                <span>{categoryIcons[category] || "📋"}</span>
                <span className="font-medium">{category}</span>
                <span className="text-slate-600 text-xs">({catPlays.length})</span>
              </span>
              {expandedCat === category ? <ChevronDown size={14} className="text-slate-500" /> : <ChevronRight size={14} className="text-slate-500" />}
            </button>

            {expandedCat === category && (
              <div className="pb-1">
                {catPlays.map(play => (
                  <button
                    key={play.id}
                    onClick={() => !disabled && onSelectPlay(play)}
                    onMouseEnter={() => setHoveredPlay(play.id)}
                    onMouseLeave={() => setHoveredPlay(null)}
                    disabled={disabled}
                    className="w-full text-left px-6 py-2 hover:bg-slate-800/80 transition-colors disabled:opacity-40 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-white text-sm font-medium group-hover:text-amber-300 transition-colors">{play.name}</span>
                      {play.formation && (
                        <span className="text-slate-600 text-xs">{play.formation}</span>
                      )}
                      {play.risk === "high" || play.risk === "very_high" ? (
                        <span className="text-red-400 text-xs">⚠ Risky</span>
                      ) : null}
                    </div>
                    {hoveredPlay === play.id && (
                      <p className="text-slate-500 text-xs mt-0.5">{play.description}</p>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function getOffenseSuggestions(down, yardsToGo, ballOn, direction) {
  const yardsToEndzone = direction === "right" ? (100 - ballOn) : ballOn;

  // 4th down — usually punt or FG
  if (down === 4) {
    if (yardsToEndzone <= 35) return ["field_goal", "run_qb_sneak", "pass_slant"];
    return ["punt", "run_qb_sneak", "pass_hail_mary"];
  }

  // Goal line
  if (yardsToEndzone <= 5) return ["run_qb_sneak", "run_fb_dive", "run_power", "pass_slant"];

  // Short yardage (1-2 yards)
  if (yardsToGo <= 2) return ["run_qb_sneak", "run_power", "run_fb_dive", "pass_play_action"];

  // 3rd and long
  if (down === 3 && yardsToGo >= 8) return ["pass_crossing", "pass_post", "pass_curl", "pass_fly"];

  // 1st down
  if (down === 1) return ["run_dive", "run_sweep_right", "pass_play_action", "pass_slant"];

  // 2nd and medium
  if (down === 2 && yardsToGo >= 4 && yardsToGo <= 7) return ["run_off_tackle", "pass_curl", "pass_crossing"];

  return ["run_dive", "pass_slant", "pass_curl"];
}

function getDefenseSuggestions(down, yardsToGo) {
  if (down === 4 && yardsToGo > 3) return ["def_punt_return", "def_fg_block"];
  if (yardsToGo <= 2) return ["def_run_stuff", "def_goal_line", "def_lb_blitz"];
  if (down === 3 && yardsToGo >= 8) return ["def_cover_3", "def_lb_blitz", "def_safety_blitz"];
  if (down === 1) return ["def_43_base", "def_man_coverage", "def_43_under"];
  return ["def_43_base", "def_cover_2", "def_lb_blitz"];
}