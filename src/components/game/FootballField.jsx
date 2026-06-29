import React from 'react';

const YARD_WIDTH = 7.6; // pixels per yard (approximate for 100-yard field in ~760px)
const FIELD_HEIGHT = 280;
const ENDZONE_WIDTH = 60;

export default function FootballField({ ballOn, direction, down, yardsToGo, possession, homeAbbr, awayAbbr, homeColor, awayColor }) {
  // ballOn is 0-100 from left endzone perspective
  // If direction is "right", offense goes left to right
  const fieldWidth = 760;
  const totalWidth = fieldWidth + ENDZONE_WIDTH * 2;

  // Calculate ball position in pixels
  const ballX = ENDZONE_WIDTH + (ballOn / 100) * fieldWidth;

  // First down marker
  let firstDownX = null;
  if (down <= 4 && yardsToGo > 0) {
    if (direction === "right") {
      firstDownX = ENDZONE_WIDTH + (Math.min(100, ballOn + yardsToGo) / 100) * fieldWidth;
    } else {
      firstDownX = ENDZONE_WIDTH + (Math.max(0, ballOn - yardsToGo) / 100) * fieldWidth;
    }
  }

  // Line of scrimmage
  const losX = ballX;

  // Offensive formation positions (relative to LOS)
  const offensivePlayers = getOffensivePositions(losX, direction);
  const defensivePlayers = getDefensivePositions(losX, direction);

  return (
    <div className="w-full overflow-x-auto">
      <div className="mx-auto" style={{ width: totalWidth, minWidth: totalWidth }}>
        <svg width={totalWidth} height={FIELD_HEIGHT + 40} viewBox={`0 0 ${totalWidth} ${FIELD_HEIGHT + 40}`}>
          {/* Left Endzone */}
          <rect x={0} y={20} width={ENDZONE_WIDTH} height={FIELD_HEIGHT} fill="#1a5c2a" stroke="#fff" strokeWidth={2} />
          <text x={ENDZONE_WIDTH / 2} y={FIELD_HEIGHT / 2 + 20} fill="white" fontSize="14" fontWeight="bold" textAnchor="middle" transform={`rotate(-90, ${ENDZONE_WIDTH / 2}, ${FIELD_HEIGHT / 2 + 20})`} opacity={0.7}>
            END ZONE
          </text>

          {/* Right Endzone */}
          <rect x={ENDZONE_WIDTH + fieldWidth} y={20} width={ENDZONE_WIDTH} height={FIELD_HEIGHT} fill="#1a5c2a" stroke="#fff" strokeWidth={2} />
          <text x={ENDZONE_WIDTH + fieldWidth + ENDZONE_WIDTH / 2} y={FIELD_HEIGHT / 2 + 20} fill="white" fontSize="14" fontWeight="bold" textAnchor="middle" transform={`rotate(90, ${ENDZONE_WIDTH + fieldWidth + ENDZONE_WIDTH / 2}, ${FIELD_HEIGHT / 2 + 20})`} opacity={0.7}>
            END ZONE
          </text>

          {/* Main field */}
          <rect x={ENDZONE_WIDTH} y={20} width={fieldWidth} height={FIELD_HEIGHT} fill="#2d8c4e" stroke="#fff" strokeWidth={2} />

          {/* Yard lines every 10 yards */}
          {[10, 20, 30, 40, 50, 60, 70, 80, 90].map(yard => {
            const x = ENDZONE_WIDTH + (yard / 100) * fieldWidth;
            return (
              <g key={yard}>
                <line x1={x} y1={20} x2={x} y2={FIELD_HEIGHT + 20} stroke="white" strokeWidth={1} opacity={0.5} />
                <text x={x} y={16} fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="monospace">
                  {yard <= 50 ? yard : 100 - yard}
                </text>
              </g>
            );
          })}

          {/* 5-yard hash marks */}
          {Array.from({ length: 19 }, (_, i) => (i + 1) * 5).filter(y => y % 10 !== 0).map(yard => {
            const x = ENDZONE_WIDTH + (yard / 100) * fieldWidth;
            return (
              <g key={`hash-${yard}`}>
                <line x1={x} y1={20} x2={x} y2={28} stroke="white" strokeWidth={1} opacity={0.3} />
                <line x1={x} y1={FIELD_HEIGHT + 12} x2={x} y2={FIELD_HEIGHT + 20} stroke="white" strokeWidth={1} opacity={0.3} />
              </g>
            );
          })}

          {/* Hash marks (center) */}
          {Array.from({ length: 99 }, (_, i) => i + 1).map(yard => {
            const x = ENDZONE_WIDTH + (yard / 100) * fieldWidth;
            return (
              <g key={`chash-${yard}`}>
                <line x1={x} y1={FIELD_HEIGHT * 0.35 + 20} x2={x} y2={FIELD_HEIGHT * 0.35 + 25} stroke="white" strokeWidth={0.5} opacity={0.2} />
                <line x1={x} y1={FIELD_HEIGHT * 0.65 + 15} x2={x} y2={FIELD_HEIGHT * 0.65 + 20} stroke="white" strokeWidth={0.5} opacity={0.2} />
              </g>
            );
          })}

          {/* 50-yard line highlighted */}
          <line x1={ENDZONE_WIDTH + fieldWidth / 2} y1={20} x2={ENDZONE_WIDTH + fieldWidth / 2} y2={FIELD_HEIGHT + 20} stroke="white" strokeWidth={2} opacity={0.7} />

          {/* First down marker */}
          {firstDownX && firstDownX > ENDZONE_WIDTH && firstDownX < ENDZONE_WIDTH + fieldWidth && (
            <line x1={firstDownX} y1={20} x2={firstDownX} y2={FIELD_HEIGHT + 20} stroke="#FFD700" strokeWidth={3} strokeDasharray="6,3" opacity={0.85} />
          )}

          {/* Line of scrimmage */}
          <line x1={losX} y1={20} x2={losX} y2={FIELD_HEIGHT + 20} stroke="#3b82f6" strokeWidth={2.5} opacity={0.75} />

          {/* Defensive players (gray) */}
          {defensivePlayers.map((p, i) => (
            <g key={`def-${i}`}>
              <circle cx={p.x} cy={p.y + 20} r={8} fill="#6b7280" stroke="#374151" strokeWidth={1.5} />
              <text x={p.x} y={p.y + 24} fill="white" fontSize="7" textAnchor="middle" fontWeight="bold">{p.label}</text>
            </g>
          ))}

          {/* Offensive players */}
          {offensivePlayers.map((p, i) => (
            <g key={`off-${i}`}>
              <circle cx={p.x} cy={p.y + 20} r={8} fill={p.color} stroke={p.stroke} strokeWidth={1.5} />
              <text x={p.x} y={p.y + 24} fill={p.textColor || "black"} fontSize="7" textAnchor="middle" fontWeight="bold">{p.label}</text>
            </g>
          ))}

          {/* Ball */}
          <ellipse cx={ballX} cy={FIELD_HEIGHT / 2 + 20} rx={5} ry={3} fill="#8B4513" stroke="#5C2D0A" strokeWidth={1} />
        </svg>

        {/* Field info bar */}
        <div className="flex justify-between items-center px-4 py-1 text-xs text-slate-400 font-mono">
          <span>{homeAbbr} ←</span>
          <span>Ball on {ballOn > 50 ? `${awayAbbr} ${100 - ballOn}` : ballOn === 50 ? "50" : `${homeAbbr} ${ballOn}`}</span>
          <span>→ {awayAbbr}</span>
        </div>
      </div>
    </div>
  );
}

function getOffensivePositions(losX, direction) {
  const dir = direction === "right" ? -1 : 1;
  const cy = FIELD_HEIGHT / 2;
  const spacing = 22;

  return [
    // O-Line (white)
    { x: losX + dir * 12, y: cy - spacing * 2, color: "#FFFFFF", stroke: "#9ca3af", label: "LT", textColor: "#111" },
    { x: losX + dir * 12, y: cy - spacing, color: "#FFFFFF", stroke: "#9ca3af", label: "LG", textColor: "#111" },
    { x: losX + dir * 12, y: cy, color: "#FFFFFF", stroke: "#9ca3af", label: "C", textColor: "#111" },
    { x: losX + dir * 12, y: cy + spacing, color: "#FFFFFF", stroke: "#9ca3af", label: "RG", textColor: "#111" },
    { x: losX + dir * 12, y: cy + spacing * 2, color: "#FFFFFF", stroke: "#9ca3af", label: "RT", textColor: "#111" },
    // QB (red)
    { x: losX + dir * 35, y: cy, color: "#ef4444", stroke: "#b91c1c", label: "QB", textColor: "#fff" },
    // RB (blue)
    { x: losX + dir * 55, y: cy - 12, color: "#3b82f6", stroke: "#1d4ed8", label: "RB", textColor: "#fff" },
    { x: losX + dir * 55, y: cy + 12, color: "#3b82f6", stroke: "#1d4ed8", label: "FB", textColor: "#fff" },
    // WR/TE (green)
    { x: losX + dir * 5, y: cy - spacing * 3.5, color: "#22c55e", stroke: "#15803d", label: "WR", textColor: "#fff" },
    { x: losX + dir * 5, y: cy + spacing * 3.5, color: "#22c55e", stroke: "#15803d", label: "WR", textColor: "#fff" },
    { x: losX + dir * 10, y: cy + spacing * 2.5, color: "#22c55e", stroke: "#15803d", label: "TE", textColor: "#fff" },
  ];
}

function getDefensivePositions(losX, direction) {
  const dir = direction === "right" ? 1 : -1;
  const cy = FIELD_HEIGHT / 2;
  const spacing = 22;

  return [
    // DL
    { x: losX + dir * 12, y: cy - spacing * 1.5, label: "DE" },
    { x: losX + dir * 12, y: cy - spacing * 0.5, label: "DT" },
    { x: losX + dir * 12, y: cy + spacing * 0.5, label: "DT" },
    { x: losX + dir * 12, y: cy + spacing * 1.5, label: "DE" },
    // LBs
    { x: losX + dir * 35, y: cy - spacing * 1.5, label: "LB" },
    { x: losX + dir * 35, y: cy, label: "LB" },
    { x: losX + dir * 35, y: cy + spacing * 1.5, label: "LB" },
    // DBs
    { x: losX + dir * 60, y: cy - spacing * 3, label: "CB" },
    { x: losX + dir * 60, y: cy + spacing * 3, label: "CB" },
    { x: losX + dir * 80, y: cy - spacing, label: "SS" },
    { x: losX + dir * 80, y: cy + spacing, label: "FS" },
  ];
}