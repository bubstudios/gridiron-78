import React from 'react';

const FIELD_WIDTH = 280;
const ENDZONE_HEIGHT = 60;
const fieldHeight = 760;
const totalHeight = fieldHeight + ENDZONE_HEIGHT * 2;

export default function FootballField({ ballOn, direction, down, yardsToGo, possession, homeAbbr, awayAbbr, homeColor, awayColor, awaitingHike, onHike, userOnOffense }) {
  const ballY = ENDZONE_HEIGHT + (ballOn / 100) * fieldHeight;

  let firstDownY = null;
  if (down <= 4 && yardsToGo > 0) {
    if (direction === "right") {
      firstDownY = ENDZONE_HEIGHT + (Math.min(100, ballOn + yardsToGo) / 100) * fieldHeight;
    } else {
      firstDownY = ENDZONE_HEIGHT + (Math.max(0, ballOn - yardsToGo) / 100) * fieldHeight;
    }
  }

  const losY = ballY;
  const offensivePlayers = getOffensivePositions(losY, direction);
  const defensivePlayers = getDefensivePositions(losY, direction);

  return (
    <div className="w-full overflow-x-auto">
      <div className="mx-auto" style={{ width: FIELD_WIDTH + 40, minWidth: FIELD_WIDTH + 40 }}>
        <svg width={FIELD_WIDTH + 40} height={totalHeight} viewBox={`0 0 ${FIELD_WIDTH + 40} ${totalHeight}`}>
          {/* Bottom Endzone */}
          <rect x={20} y={0} width={FIELD_WIDTH} height={ENDZONE_HEIGHT} fill="#1a5c2a" stroke="#fff" strokeWidth={2} />
          <text x={FIELD_WIDTH / 2 + 20} y={ENDZONE_HEIGHT / 2} fill="white" fontSize="14" fontWeight="bold" textAnchor="middle" opacity={0.7}>END ZONE</text>

          {/* Top Endzone */}
          <rect x={20} y={ENDZONE_HEIGHT + fieldHeight} width={FIELD_WIDTH} height={ENDZONE_HEIGHT} fill="#1a5c2a" stroke="#fff" strokeWidth={2} />
          <text x={FIELD_WIDTH / 2 + 20} y={ENDZONE_HEIGHT + fieldHeight + ENDZONE_HEIGHT / 2} fill="white" fontSize="14" fontWeight="bold" textAnchor="middle" opacity={0.7}>END ZONE</text>

          {/* Main field */}
          <rect x={20} y={ENDZONE_HEIGHT} width={FIELD_WIDTH} height={fieldHeight} fill="#2d8c4e" stroke="#fff" strokeWidth={2} />

          {/* Yard lines every 10 yards (horizontal lines) */}
          {[10, 20, 30, 40, 50, 60, 70, 80, 90].map(yard => {
            const y = ENDZONE_HEIGHT + (yard / 100) * fieldHeight;
            return (
              <g key={yard}>
                <line x1={20} y1={y} x2={FIELD_WIDTH + 20} y2={y} stroke="white" strokeWidth={1} opacity={0.5} />
                <text x={14} y={y + 4} fill="#94a3b8" fontSize="10" textAnchor="end" fontFamily="monospace">{yard}</text>
              </g>
            );
          })}

          {/* 50-yard line highlighted */}
          <line x1={20} y1={ENDZONE_HEIGHT + fieldHeight / 2} x2={FIELD_WIDTH + 20} y2={ENDZONE_HEIGHT + fieldHeight / 2} stroke="white" strokeWidth={2} opacity={0.7} />

          {/* First down marker */}
          {firstDownY && firstDownY > ENDZONE_HEIGHT && firstDownY < ENDZONE_HEIGHT + fieldHeight && (
            <line x1={20} y1={firstDownY} x2={FIELD_WIDTH + 20} y2={firstDownY} stroke="#FFD700" strokeWidth={3} strokeDasharray="6,3" opacity={0.85} />
          )}

          {/* Line of scrimmage */}
          <line x1={20} y1={losY} x2={FIELD_WIDTH + 20} y2={losY} stroke="#3b82f6" strokeWidth={2.5} opacity={0.75} />

          {/* Defensive players (gray) */}
          {defensivePlayers.map((p, i) => (
            <g key={`def-${i}`}>
              <circle cx={p.x + 20} cy={p.y} r={8} fill="#6b7280" stroke="#374151" strokeWidth={1.5} />
              <text x={p.x + 20} y={p.y + 3} fill="white" fontSize="7" textAnchor="middle" fontWeight="bold">{p.label}</text>
            </g>
          ))}

          {/* Offensive players */}
          {offensivePlayers.map((p, i) => (
            <g key={`off-${i}`}>
              <circle cx={p.x + 20} cy={p.y} r={8} fill={p.color} stroke={p.stroke} strokeWidth={1.5} />
              <text x={p.x + 20} y={p.y + 3} fill={p.textColor || "black"} fontSize="7" textAnchor="middle" fontWeight="bold">{p.label}</text>
            </g>
          ))}

          {/* Ball */}
          <ellipse cx={FIELD_WIDTH / 2 + 20} cy={ballY} rx={3} ry={5} fill="#8B4513" stroke="#5C2D0A" strokeWidth={1} />

          {/* Hike button - appears near QB (offense) or MLB (defense) */}
          {awaitingHike && (
            <g onClick={onHike} style={{ cursor: 'pointer' }}>
              <rect
                x={FIELD_WIDTH / 2 - 30}
                y={ballY + (userOnOffense ? 40 : -40)}
                width={60}
                height={28}
                rx={6}
                fill="#f59e0b"
                stroke="#d97706"
                strokeWidth={2}
              />
              <text
                x={FIELD_WIDTH / 2 + 20}
                y={ballY + (userOnOffense ? 40 : -40) + 18}
                fill="#000"
                fontSize="12"
                fontWeight="bold"
                textAnchor="middle"
              >
                HIKE!
              </text>
            </g>
          )}
        </svg>

        {/* Field info bar */}
        <div className="flex justify-between items-center px-4 py-1 text-xs text-slate-400 font-mono">
          <span>{homeAbbr} ↓</span>
          <span>Ball on {ballOn > 50 ? `${awayAbbr} ${100 - ballOn}` : ballOn === 50 ? "50" : `${homeAbbr} ${ballOn}`}</span>
          <span>↑ {awayAbbr}</span>
        </div>
      </div>
    </div>
  );
}

function getOffensivePositions(losY, direction) {
  const dir = direction === "right" ? 1 : -1;
  const cx = FIELD_WIDTH / 2;
  const spacing = 22;

  return [
    // O-Line (white) - horizontal line across field
    { x: cx - spacing * 2, y: losY - dir * 12, color: "#FFFFFF", stroke: "#9ca3af", label: "LT", textColor: "#111" },
    { x: cx - spacing * 0.8, y: losY - dir * 12, color: "#FFFFFF", stroke: "#9ca3af", label: "LG", textColor: "#111" },
    { x: cx, y: losY - dir * 12, color: "#FFFFFF", stroke: "#9ca3af", label: "C", textColor: "#111" },
    { x: cx + spacing * 0.8, y: losY - dir * 12, color: "#FFFFFF", stroke: "#9ca3af", label: "RG", textColor: "#111" },
    { x: cx + spacing * 2, y: losY - dir * 12, color: "#FFFFFF", stroke: "#9ca3af", label: "RT", textColor: "#111" },
    // QB (red) - behind center
    { x: cx, y: losY - dir * 30, color: "#ef4444", stroke: "#b91c1c", label: "QB", textColor: "#fff" },
    // RB/FB (blue) - behind QB
    { x: cx - 18, y: losY - dir * 48, color: "#3b82f6", stroke: "#1d4ed8", label: "RB", textColor: "#fff" },
    { x: cx + 18, y: losY - dir * 48, color: "#3b82f6", stroke: "#1d4ed8", label: "FB", textColor: "#fff" },
    // WR/TE (green) - wide
    { x: cx - spacing * 3.8, y: losY - dir * 8, color: "#22c55e", stroke: "#15803d", label: "WR", textColor: "#fff" },
    { x: cx + spacing * 3.8, y: losY - dir * 8, color: "#22c55e", stroke: "#15803d", label: "WR", textColor: "#fff" },
    { x: cx + spacing * 2.8, y: losY - dir * 12, color: "#22c55e", stroke: "#15803d", label: "TE", textColor: "#fff" },
  ];
}

function getDefensivePositions(losY, direction) {
  const dir = direction === "right" ? -1 : 1;
  const cx = FIELD_WIDTH / 2;
  const spacing = 22;

  return [
    // DL - horizontal line
    { x: cx - spacing * 2, y: losY + dir * 12, label: "DE" },
    { x: cx - spacing * 0.6, y: losY + dir * 12, label: "DT" },
    { x: cx + spacing * 0.6, y: losY + dir * 12, label: "DT" },
    { x: cx + spacing * 2, y: losY + dir * 12, label: "DE" },
    // LBs
    { x: cx - spacing * 1.8, y: losY + dir * 32, label: "LB" },
    { x: cx, y: losY + dir * 32, label: "MLB" },
    { x: cx + spacing * 1.8, y: losY + dir * 32, label: "LB" },
    // DBs - deep
    { x: cx - spacing * 3.5, y: losY + dir * 55, label: "CB" },
    { x: cx + spacing * 3.5, y: losY + dir * 55, label: "CB" },
    { x: cx - spacing * 1.2, y: losY + dir * 75, label: "SS" },
    { x: cx + spacing * 1.2, y: losY + dir * 75, label: "FS" },
  ];
}