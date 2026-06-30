import React, { useRef, useEffect, useState } from 'react';

const FIELD_WIDTH = 280;
const ENDZONE_HEIGHT = 60;
const fieldHeight = 760;
const totalHeight = fieldHeight + ENDZONE_HEIGHT * 2;

export default function FootballField({ ballOn, direction, down, yardsToGo, possession, homeAbbr, awayAbbr, homeColor, awayColor, awaitingHike, onHike, userOnOffense, animatePlay, onAnimationDone }) {
  const scrollRef = useRef(null);
  const rafRef = useRef(null);
  const [liveYard, setLiveYard] = useState(ballOn);

  // Keep liveYard synced to ballOn when not animating
  useEffect(() => {
    if (!animatePlay) setLiveYard(ballOn);
  }, [ballOn, animatePlay]);

  // Idle recenter: keep ball centered in camera window when not animating
  useEffect(() => {
    if (animatePlay) return;
    if (!scrollRef.current) return;
    const yPx = ENDZONE_HEIGHT + (ballOn / 100) * fieldHeight;
    const container = scrollRef.current;
    const target = yPx - container.clientHeight / 2;
    container.scrollTop = Math.max(0, Math.min(target, container.scrollHeight - container.clientHeight));
  }, [ballOn, animatePlay]);

  // Animation rAF loop
  useEffect(() => {
    if (!animatePlay) return;
    const { startYard, endYard } = animatePlay;
    const duration = 1200;
    const t0 = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 2);

    const step = (now) => {
      const t = Math.min(1, (now - t0) / duration);
      const y = startYard + (endYard - startYard) * ease(t);
      setLiveYard(y);
      if (scrollRef.current) {
        const yPx = ENDZONE_HEIGHT + (y / 100) * fieldHeight;
        const container = scrollRef.current;
        const target = yPx - container.clientHeight / 2;
        container.scrollTop = Math.max(0, Math.min(target, container.scrollHeight - container.clientHeight));
      }
      if (t < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setLiveYard(endYard);
        if (onAnimationDone) onAnimationDone();
      }
    };
    rafRef.current = requestAnimationFrame(step);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [animatePlay]); // eslint-disable-line react-hooks/exhaustive-deps

  const losY = ENDZONE_HEIGHT + (ballOn / 100) * fieldHeight;
  const ballY = ENDZONE_HEIGHT + (liveYard / 100) * fieldHeight;

  let firstDownY = null;
  if (down <= 4 && yardsToGo > 0) {
    if (direction === "right") {
      firstDownY = ENDZONE_HEIGHT + (Math.min(100, ballOn + yardsToGo) / 100) * fieldHeight;
    } else {
      firstDownY = ENDZONE_HEIGHT + (Math.max(0, ballOn - yardsToGo) / 100) * fieldHeight;
    }
  }

  const offensivePlayers = getOffensivePositions(losY, direction);
  const defensivePlayers = getDefensivePositions(losY, direction);

  return (
    <div className="w-full">
      <div
        ref={scrollRef}
        className="mx-auto overflow-y-auto overflow-x-hidden rounded-lg"
        style={{ width: FIELD_WIDTH + 40, height: 420 }}
      >
        <svg width={FIELD_WIDTH + 40} height={totalHeight} viewBox={`0 0 ${FIELD_WIDTH + 40} ${totalHeight}`}>
          <rect x={20} y={0} width={FIELD_WIDTH} height={ENDZONE_HEIGHT} fill="#1a5c2a" stroke="#fff" strokeWidth={2} />
          <text x={FIELD_WIDTH / 2 + 20} y={ENDZONE_HEIGHT / 2} fill="white" fontSize="14" fontWeight="bold" textAnchor="middle" opacity={0.7}>END ZONE</text>

          <rect x={20} y={ENDZONE_HEIGHT + fieldHeight} width={FIELD_WIDTH} height={ENDZONE_HEIGHT} fill="#1a5c2a" stroke="#fff" strokeWidth={2} />
          <text x={FIELD_WIDTH / 2 + 20} y={ENDZONE_HEIGHT + fieldHeight + ENDZONE_HEIGHT / 2} fill="white" fontSize="14" fontWeight="bold" textAnchor="middle" opacity={0.7}>END ZONE</text>

          <rect x={20} y={ENDZONE_HEIGHT} width={FIELD_WIDTH} height={fieldHeight} fill="#2d8c4e" stroke="#fff" strokeWidth={2} />

          {[10, 20, 30, 40, 50, 60, 70, 80, 90].map(yard => {
            const y = ENDZONE_HEIGHT + (yard / 100) * fieldHeight;
            return (
              <g key={yard}>
                <line x1={20} y1={y} x2={FIELD_WIDTH + 20} y2={y} stroke="white" strokeWidth={1} opacity={0.5} />
                <text x={14} y={y + 4} fill="#94a3b8" fontSize="10" textAnchor="end" fontFamily="monospace">{yard}</text>
              </g>
            );
          })}

          <line x1={20} y1={ENDZONE_HEIGHT + fieldHeight / 2} x2={FIELD_WIDTH + 20} y2={ENDZONE_HEIGHT + fieldHeight / 2} stroke="white" strokeWidth={2} opacity={0.7} />

          {firstDownY && firstDownY > ENDZONE_HEIGHT && firstDownY < ENDZONE_HEIGHT + fieldHeight && (
            <line x1={20} y1={firstDownY} x2={FIELD_WIDTH + 20} y2={firstDownY} stroke="#FFD700" strokeWidth={3} strokeDasharray="6,3" opacity={0.85} />
          )}

          <line x1={20} y1={losY} x2={FIELD_WIDTH + 20} y2={losY} stroke="#3b82f6" strokeWidth={2.5} opacity={0.75} />

          {defensivePlayers.map((p, i) => (
            <g key={`def-${i}`}>
              <circle cx={p.x + 20} cy={p.y} r={8} fill="#6b7280" stroke="#374151" strokeWidth={1.5} />
              <text x={p.x + 20} y={p.y + 3} fill="white" fontSize="7" textAnchor="middle" fontWeight="bold">{p.label}</text>
            </g>
          ))}

          {offensivePlayers.map((p, i) => (
            <g key={`off-${i}`}>
              <circle cx={p.x + 20} cy={p.y} r={8} fill={p.color} stroke={p.stroke} strokeWidth={1.5} />
              <text x={p.x + 20} y={p.y + 3} fill={p.textColor || "black"} fontSize="7" textAnchor="middle" fontWeight="bold">{p.label}</text>
            </g>
          ))}

          {/* Ball carrier dot (only during animation) */}
          {animatePlay && (
            <circle cx={FIELD_WIDTH / 2 + 20} cy={ballY} r={9} fill="#fbbf24" stroke="#b45309" strokeWidth={2} />
          )}

          {/* Football */}
          <ellipse cx={FIELD_WIDTH / 2 + 20} cy={ballY} rx={3} ry={5} fill="#8B4513" stroke="#5C2D0A" strokeWidth={1} />

          {awaitingHike && (
            <g onClick={onHike} style={{ cursor: 'pointer' }}>
              <rect
                x={FIELD_WIDTH / 2 - 30}
                y={losY + (userOnOffense ? 40 : -40)}
                width={60}
                height={28}
                rx={6}
                fill="#f59e0b"
                stroke="#d97706"
                strokeWidth={2}
              />
              <text
                x={FIELD_WIDTH / 2 + 20}
                y={losY + (userOnOffense ? 40 : -40) + 18}
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
      </div>

      <div className="flex justify-between items-center px-4 py-1 text-xs text-slate-400 font-mono" style={{ width: FIELD_WIDTH + 40 }}>
        <span>{homeAbbr} ↓</span>
        <span>Ball on {ballOn > 50 ? `${awayAbbr} ${100 - ballOn}` : ballOn === 50 ? "50" : `${homeAbbr} ${ballOn}`}</span>
        <span>↑ {awayAbbr}</span>
      </div>
    </div>
  );
}

function getOffensivePositions(losY, direction) {
  const cx = FIELD_WIDTH / 2;
  const spacing = 22;
  const behindLOS = direction === "right" ? 15 : -15;

  return [
    { x: cx - spacing * 2, y: losY, color: "#FFFFFF", stroke: "#9ca3af", label: "LT", textColor: "#111" },
    { x: cx - spacing * 0.8, y: losY, color: "#FFFFFF", stroke: "#9ca3af", label: "LG", textColor: "#111" },
    { x: cx, y: losY, color: "#FFFFFF", stroke: "#9ca3af", label: "C", textColor: "#111" },
    { x: cx + spacing * 0.8, y: losY, color: "#FFFFFF", stroke: "#9ca3af", label: "RG", textColor: "#111" },
    { x: cx + spacing * 2, y: losY, color: "#FFFFFF", stroke: "#9ca3af", label: "RT", textColor: "#111" },
    { x: cx, y: losY + behindLOS, color: "#ef4444", stroke: "#b91c1c", label: "QB", textColor: "#fff" },
    { x: cx - 20, y: losY + behindLOS * 2, color: "#3b82f6", stroke: "#1d4ed8", label: "RB", textColor: "#fff" },
    { x: cx + 20, y: losY + behindLOS * 2, color: "#3b82f6", stroke: "#1d4ed8", label: "FB", textColor: "#fff" },
    { x: cx - 50, y: losY, color: "#22c55e", stroke: "#15803d", label: "WR", textColor: "#fff" },
    { x: cx + 50, y: losY, color: "#22c55e", stroke: "#15803d", label: "WR", textColor: "#fff" },
    { x: cx + spacing * 3.5, y: losY, color: "#22c55e", stroke: "#15803d", label: "TE", textColor: "#fff" },
  ];
}

function getDefensivePositions(losY, direction) {
  const cx = FIELD_WIDTH / 2;
  const spacing = 22;
  const overLOS = direction === "right" ? -15 : 15;

  return [
    { x: cx - spacing * 2.2, y: losY, label: "DE" },
    { x: cx - spacing * 0.7, y: losY, label: "DT" },
    { x: cx + spacing * 0.7, y: losY, label: "DT" },
    { x: cx + spacing * 2.2, y: losY, label: "DE" },
    { x: cx - spacing * 1.8, y: losY + overLOS, label: "LB" },
    { x: cx, y: losY + overLOS, label: "MLB" },
    { x: cx + spacing * 1.8, y: losY + overLOS, label: "LB" },
    { x: cx - 50, y: losY + overLOS * 2.5, label: "CB" },
    { x: cx + 50, y: losY + overLOS * 2.5, label: "CB" },
    { x: cx - 25, y: losY + overLOS * 4, label: "SS" },
    { x: cx + 25, y: losY + overLOS * 4, label: "FS" },
  ];
}