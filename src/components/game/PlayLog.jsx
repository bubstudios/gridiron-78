import React, { useRef, useEffect } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function PlayLog({ logs }) {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs?.length]);

  if (!logs || logs.length === 0) {
    return (
      <div className="bg-slate-900 rounded-xl border border-slate-700 p-4">
        <h3 className="text-slate-400 text-sm font-semibold mb-2">Play-by-Play</h3>
        <p className="text-slate-600 text-xs italic">Game has not started yet.</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 rounded-xl border border-slate-700">
      <div className="px-4 py-3 border-b border-slate-700">
        <h3 className="text-slate-300 text-sm font-semibold">Play-by-Play</h3>
      </div>
      <ScrollArea className="h-[240px]">
        <div className="p-3 space-y-1.5">
          {logs.map((log, i) => {
            const isTD = log.includes("TOUCHDOWN");
            const isTurnover = log.includes("INTERCEPTED") || log.includes("fumble") || log.includes("FUMBLES") || log.includes("BLOCKED");
            const isFG = log.includes("field goal");
            const isFlag = log.includes("FLAG");
            const isSack = log.includes("SACKED");
            const isQuarter = log.includes("---");

            if (isQuarter) {
              return (
                <div key={i} className="text-center py-1">
                  <span className="text-amber-400 text-xs font-mono font-semibold">{log}</span>
                </div>
              );
            }

            return (
              <div
                key={i}
                className={`text-xs px-2 py-1 rounded ${
                  isTD ? 'bg-green-900/40 text-green-300 font-semibold' :
                  isTurnover ? 'bg-red-900/40 text-red-300 font-semibold' :
                  isFG ? 'bg-amber-900/40 text-amber-300' :
                  isFlag ? 'bg-yellow-900/40 text-yellow-300' :
                  isSack ? 'bg-orange-900/40 text-orange-300' :
                  'text-slate-400'
                }`}
              >
                {log}
              </div>
            );
          })}
          <div ref={endRef} />
        </div>
      </ScrollArea>
    </div>
  );
}