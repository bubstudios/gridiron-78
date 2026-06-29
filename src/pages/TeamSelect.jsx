import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { NFL_1978_TEAMS } from '@/lib/nfl1978data';
import { ChevronRight, MapPin, Users, Star, BarChart3 } from 'lucide-react';

export default function TeamSelect() {
  const navigate = useNavigate();
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [opponent, setOpponent] = useState(null);
  const [step, setStep] = useState("user"); // "user" | "opponent"

  const conferences = { AFC: {}, NFC: {} };
  NFL_1978_TEAMS.forEach(t => {
    if (!conferences[t.conference][t.division]) conferences[t.conference][t.division] = [];
    conferences[t.conference][t.division].push(t);
  });

  const handleTeamClick = (team) => {
    if (step === "user") {
      setSelectedTeam(team);
      setStep("opponent");
    } else {
      if (team.abbreviation === selectedTeam.abbreviation) return;
      setOpponent(team);
    }
  };

  const startGame = () => {
    if (!selectedTeam || !opponent) return;
    const params = new URLSearchParams({
      user: selectedTeam.abbreviation,
      opponent: opponent.abbreviation,
    });
    navigate(`/game?${params.toString()}`);
  };

  const currentTeams = step === "opponent"
    ? NFL_1978_TEAMS.filter(t => t.abbreviation !== selectedTeam?.abbreviation)
    : NFL_1978_TEAMS;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <div className="text-center pt-10 pb-6 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          NFL <span className="text-amber-400">1978</span>
        </h1>
        <p className="text-slate-400 mt-2 text-lg">Football Simulation</p>
        <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        <Link to="/season" className="inline-flex items-center gap-1.5 text-slate-400 hover:text-amber-400 text-sm mt-3 transition-colors">
          <BarChart3 size={14} /> Season Stats
        </Link>
      </div>

      {/* Step indicator */}
      <div className="max-w-4xl mx-auto px-4 mb-6">
        <div className="flex items-center justify-center gap-3 text-sm">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${step === "user" ? "bg-amber-600 text-white" : "bg-slate-800 text-slate-400"}`}>
            <span className="font-semibold">1</span>
            <span>Choose Your Team</span>
          </div>
          <ChevronRight size={16} className="text-slate-600" />
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${step === "opponent" ? "bg-amber-600 text-white" : "bg-slate-800 text-slate-500"}`}>
            <span className="font-semibold">2</span>
            <span>Choose Opponent</span>
          </div>
        </div>

        {selectedTeam && step === "opponent" && (
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="flex items-center gap-2 bg-slate-800 rounded-lg px-3 py-2 border border-slate-700">
              <div className="w-6 h-6 rounded" style={{ backgroundColor: selectedTeam.primary_color }} />
              <span className="text-white text-sm font-semibold">{selectedTeam.city} {selectedTeam.name}</span>
            </div>
            <span className="text-slate-500 text-sm">vs</span>
            {opponent ? (
              <div className="flex items-center gap-2 bg-slate-800 rounded-lg px-3 py-2 border border-slate-700">
                <div className="w-6 h-6 rounded" style={{ backgroundColor: opponent.primary_color }} />
                <span className="text-white text-sm font-semibold">{opponent.city} {opponent.name}</span>
              </div>
            ) : (
              <span className="text-slate-600 text-sm italic">Pick an opponent...</span>
            )}
          </div>
        )}
      </div>

      {/* Team Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-8">
        {Object.entries(conferences).map(([conf, divisions]) => (
          <div key={conf} className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${conf === "AFC" ? "bg-red-500" : "bg-blue-500"}`} />
              {conf}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(divisions).map(([div, teams]) => (
                <div key={div}>
                  <h3 className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">{conf} {div}</h3>
                  <div className="space-y-1.5">
                    {teams.map(team => {
                      const isSelected = selectedTeam?.abbreviation === team.abbreviation;
                      const isOpponent = opponent?.abbreviation === team.abbreviation;
                      const isDisabled = step === "opponent" && team.abbreviation === selectedTeam?.abbreviation;

                      return (
                        <button
                          key={team.abbreviation}
                          onClick={() => handleTeamClick(team)}
                          disabled={isDisabled}
                          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-left group
                            ${isSelected ? 'bg-amber-600/20 border border-amber-500/50 ring-1 ring-amber-500/30' :
                              isOpponent ? 'bg-blue-600/20 border border-blue-500/50' :
                              isDisabled ? 'opacity-30 cursor-not-allowed bg-slate-800/50' :
                              'bg-slate-800/60 border border-slate-700/50 hover:bg-slate-800 hover:border-slate-600'}`}
                        >
                          <div className="w-8 h-8 rounded-md flex items-center justify-center text-white text-xs font-bold shrink-0" style={{ backgroundColor: team.primary_color }}>
                            {team.abbreviation}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-white text-sm font-medium truncate">{team.city} {team.name}</p>
                            <div className="flex items-center gap-2 text-slate-500 text-xs">
                              <span className="flex items-center gap-0.5"><MapPin size={10} />{team.stadium}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-xs">
                            <Star size={10} className="text-amber-400" />
                            <span className="text-slate-400 font-mono">{team.overall_rating}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Start Game Button */}
      {selectedTeam && opponent && (
        <div className="fixed bottom-0 left-0 right-0 bg-slate-950/95 border-t border-slate-800 p-4 backdrop-blur-sm">
          <div className="max-w-lg mx-auto flex items-center justify-between">
            <div className="text-sm text-white">
              <span className="font-semibold">{selectedTeam.city} {selectedTeam.name}</span>
              <span className="text-slate-500 mx-2">@</span>
              <span className="font-semibold">{opponent.city} {opponent.name}</span>
            </div>
            <button
              onClick={startGame}
              className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-2.5 rounded-lg transition-colors text-sm"
            >
              Kick Off!
            </button>
          </div>
        </div>
      )}

      {/* Bottom spacer for fixed button */}
      {selectedTeam && opponent && <div className="h-20" />}
    </div>
  );
}