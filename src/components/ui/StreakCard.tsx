import React from 'react';
import { Flame } from 'lucide-react';

export function StreakCard({ streak = 7 }: { streak?: number }) {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const currentDayIndex = 3; // Let's say today is Thursday

  return (
    <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-6 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-[50px] rounded-full pointer-events-none" />
      
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center border border-orange-500/30 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
          <Flame className="w-6 h-6 text-orange-500" />
        </div>
        <div>
          <h3 className="text-xl font-bold">{streak} Day Play Streak</h3>
          <p className="text-sm text-neutral-400">You're on fire! Keep it up.</p>
        </div>
      </div>

      <div className="flex justify-between items-center px-2">
        {days.map((day, i) => {
          const isCompleted = i <= currentDayIndex;
          const isToday = i === currentDayIndex;
          return (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="text-xs text-neutral-500 font-medium">{day}</div>
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border transition-all ${
                  isCompleted 
                    ? isToday 
                      ? 'bg-orange-500 border-orange-400 text-white shadow-[0_0_10px_rgba(249,115,22,0.5)]' 
                      : 'bg-white border-white text-black'
                    : 'bg-neutral-800 border-neutral-700 text-neutral-600'
                }`}
              >
                {isCompleted && !isToday ? '✓' : ''}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
