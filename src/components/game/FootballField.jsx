import React from 'react';

const FIELD_HEIGHT = 280;
const ENDZONE_WIDTH = 60;
const fieldWidth = 760;
const totalWidth = fieldWidth + ENDZONE_WIDTH * 2;

export default function FootballField({ ballOn, direction, down, yardsToGo, possession, homeAbbr, awayAbbr, homeColor, awayColor }) {
  const ballX = ENDZONE_WIDTH + (ballOn / 100) * fieldWidth;

  let firstDownX = null;
  if (down <= 4 && yardsToGo > 0) {
    if (direction === "right") {
      firstDownX = ENDZONE_WIDTH + (Math.min(100, ballOn + yardsToGo) / 100) * fieldWidth;
    } else {
      firstDownX = ENDZONE_WIDTH + (Math.max(0, ballOn - yardsToGo) / 100) * fieldWidth;
    }
  }

  const losX = ballX;
  const offensivePlayers = getOffensivePositions(losX, direction);
  const defensivePlayers = getDefensivePositions(losX, direction);

  return (
    <div className="w-full overflow-x-auto">
      <div className="mx-auto" style={{ width: totalWidth, minWidth: totalWidth }}>
        <svg width={totalWidth} height={FIELD_HEIGHT + 40} viewBox={`0 0 ${totalWidth} ${FIELD_HEIGHT + 40}`}>
          <rect x={0} y={20} width={ENDZONE_WIDTH} height={FIELD_HEIGHT} fill="#1a5c2a" stroke="#fff" strokeWidth={2} />
          <text x={ENDZONE_WIDTH / 2} y={FIELD_HEIGHT / 2 + 20} fill="white" fontSize="14" fontWeight="bold" textAnchor="middle" transform={`rotate(-90, ${ENDZONE_WIDTH / 2}, ${FIELD_HEIGHT / 2 + 20})`} opacity={0.7}>END ZONE</text>

          <rect x={ENDZONE_WIDTH + fieldWidth} y={20} width={ENDZONE_WIDTH} height={FIELD_HEIGHT} fill="#1a5c2a" stroke="#fff" strokeWidth={2} />
          <text x={ENDZONE_WIDTH + fieldWidth + ENDZONE_WIDTH / 2} y={FIELD_HEIGHT / 2 + 20} fill="white" fontSize="14" fontWeight="bold" textAnchor="middle" transform={`rotate(90, ${ENDZONE_WIDTH + fieldWidth + ENDZONE_WIDTH / 2}, ${FIELD_HEIGHT / 2 + 20})`} opacity={0.7}>END ZONE</text>

          <rect x={ENDZONE_WIDTH} y={20} width={fieldWidth} height={FIELD_HEIGHT} fill="#2d8c4e" stroke="#fff" strokeWidth={2} />

          {[10, 20, 30, 40, 50, 60, 70, 80, 90].map(yard => {
            const x = ENDZONE_WIDTH + (yard / 100) * fieldWidth;
            return (
              <g key={yard}>
                <line x1={x} y1={20} x2={x} y2={FIELD_HEIGHT + 20} stroke="white" strokeWidth={1} opacity={0.5} />
                <text x={x} y={16} fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="monospace">{yard <= 50 ? yard : 100 - yard}</text>
              </g>
            );
          })}

          <line x1={ENDZONE_WIDTH + fieldWidth / 2} y1={20} x2={ENDZONE_WIDTH + fieldWidth / 2} y2={FIELD_HEIGHT + 20} stroke="white" strokeWidth={2} opacity={0.7} />

          {firstDownX && firstDownX > ENDZONE_WIDTH && firstDownX < ENDZONE_WIDTH + fieldWidth && (
            <line x1={firstDownX} y1={20} x2={firstDownX} y2={FIELD_HEIGHT + 20} stroke="#FFD700" strokeWidth={3} strokeDasharray="6,3" opacity={0.85} />
          )}

          <line x1={losX} y1={20} x2={losX} y2={FIELD_HEIGHT + 20} stroke="#3b82f6" strokeWidth={2.5} opacity={0.75} />

          {defensivePlayers.map((p, i) => (
            <g key={`def-${i}`}>
              <circle cx={p.x} cy={p.y + 20} r={8} fill="#6b7280" stroke="#374151" strokeWidth={1.5} />
              <text x={p.x} y={p.y + 24} fill="white" fontSize="7" textAnchor="middle" fontWeight="bold">{p.label}</text>
            </g>
          ))}

          {offensivePlayers.map((p, i) => (
            <g key={`off-${i}`}>
              <circle cx={p.x} cy={p.y + 20} r={8} fill={p.color} stroke={p.stroke} strokeWidth={1.5} />
              <text x={p.x} y={p.y + 24} fill={p.textColor || "black"} fontSize="7" textAnchor="middle" fontWeight="bold">{p.label}</text>
            </g>
          ))}

          <ellipse cx={ballX} cy={FIELD_HEIGHT / 2 + 20} rx={5} ry={3} fill="#8B4513" stroke="#5C2D0A" strokeWidth={1} />
        </svg>

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
    { x: losX + dir * 12, y: cy - spacing * 2, color: "#FFFFFF", stroke: "#9ca3af", label: "LT", textColor: "#111" },
    { x: losX + dir * 12, y: cy - spacing * 0.8, color: "#FFFFFF", stroke: "#9ca3af", label: "LG", textColor: "#111" },
    { x: losX + dir * 12, y: cy, color: "#FFFFFF", stroke: "#9ca3af", label: "C", textColor: "#111" },
    { x: losX + dir * 12, y: cy + spacing * 0.8, color: "#FFFFFF", stroke: "#9ca3af", label: "RG", textColor: "#111" },
    { x: losX + dir * 12, y: cy + spacing * 2, color: "#FFFFFF", stroke: "#9ca3af", label: "RT", textColor: "#111" },
    { x: losX + dir * 30, y: cy, color: "#ef4444", stroke: "#b91c1c", label: "QB", textColor: "#fff" },
    { x: losX + dir * 48, y: cy - 18, color: "#3b82f6", stroke: "#1d4ed8", label: "RB", textColor: "#fff" },
    { x: losX + dir * 48, y: cy + 18, color: "#3b82f6", stroke: "#1d4ed8", label: "FB", textColor: "#fff" },
    { x: losX + dir * 8, y: cy - spacing * 3.8, color: "#22c55e", stroke: "#15803d", label: "WR", textColor: "#fff" },
    { x: losX + dir * 8, y: cy + spacing * 3.8, color: "#22c55e", stroke: "#15803d", label: "WR", textColor: "#fff" },
    { x: losX + dir * 12, y: cy + spacing * 2.8, color: "#22c55e", stroke: "#15803d", label: "TE", textColor: "#fff" },
  ];
}

function getDefensivePositions(losX, direction) {
  const dir = direction === "right" ? 1 : -1;
  const cy = FIELD_HEIGHT / 2;
  const spacing = 22;

  return [
    { x: losX + dir * 12, y: cy - spacing * 2, label: "DE" },
    { x: losX + dir * 12, y: cy - spacing * 0.6, label: "DT" },
    { x: losX + dir * 12, y: cy + spacing * 0.6, label: "DT" },
    { x: losX + dir * 12, y: cy + spacing * 2, label: "DE" },
    { x: losX + dir * 32, y: cy - spacing * 1.8, label: "LB" },
    { x: losX + dir * 32, y: cy, label: "MLB" },
    { x: losX + dir * 32, y: cy + spacing * 1.8, label: "LB" },
    { x: losX + dir * 55, y: cy - spacing * 3.5, label: "CB" },
    { x: losX + dir * 55, y: cy + spacing * 3.5, label: "CB" },
    { x: losX + dir * 75, y: cy - spacing * 1.2, label: "SS" },
    { x: losX + dir * 75, y: cy + spacing * 1.2, label: "FS" },
  ];
}