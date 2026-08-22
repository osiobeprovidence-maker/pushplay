import React from 'react';
import { BarChart3, TrendingUp, TrendingDown, Users, Play, Clock, ArrowUpRight, Target, Globe, MousePointer2 } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, Cell, PieChart, Pie } from 'recharts';

const timelineData = [
  { name: 'Aug 14', reach: 45000, conversion: 1200 },
  { name: 'Aug 15', reach: 52000, conversion: 1500 },
  { name: 'Aug 16', reach: 48000, conversion: 1100 },
  { name: 'Aug 17', reach: 61000, conversion: 1900 },
  { name: 'Aug 18', reach: 55000, conversion: 1600 },
  { name: 'Aug 19', reach: 67000, conversion: 2200 },
  { name: 'Aug 20', reach: 72000, conversion: 2400 },
];

const categoryData = [
  { name: 'Video', value: 45, color: '#6366f1' },
  { name: 'Audio', value: 30, color: '#818cf8' },
  { name: 'Challenges', value: 25, color: '#c7d2fe' },
];

export function BusinessAnalytics() {
  return (
    <div className="p-4 md:p-6 lg:p-10 max-w-7xl mx-auto w-full">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 md:mb-10">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Advanced Analytics</h1>
          <p className="text-neutral-400 text-sm">Measure your return on investment and campaign effectiveness.</p>
        </div>
        <div className="flex bg-neutral-900 border border-neutral-800 rounded-2xl p-1 overflow-x-auto scrollbar-hide max-w-full">
          <button className="px-3 md:px-4 py-2 text-xs font-bold bg-indigo-600 rounded-xl whitespace-nowrap shrink-0">Real-time</button>
          <button className="px-3 md:px-4 py-2 text-xs font-bold text-neutral-500 hover:text-white transition-colors whitespace-nowrap shrink-0">Past 30 Days</button>
          <button className="px-3 md:px-4 py-2 text-xs font-bold text-neutral-500 hover:text-white transition-colors whitespace-nowrap shrink-0">Custom</button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-10">
        <StatsCard icon={Target} label="Total Reach" value="2.4M" trend="+15.2%" isUp />
        <StatsCard icon={MousePointer2} label="Conversions" value="84.2k" trend="+12.4%" isUp />
        <StatsCard icon={TrendingUp} label="Avg. CTR" value="4.2%" trend="+0.8%" isUp />
        <StatsCard icon={BarChart3} label="ROI" value="3.8x" trend="-2.1%" isUp={false} />
      </div>

      <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-10">
        <div className="lg:col-span-2 bg-neutral-900 border border-neutral-800 rounded-2xl md:rounded-[32px] p-4 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8">
            <div>
              <h3 className="text-base md:text-lg font-bold">Performance Trends</h3>
              <p className="text-xs text-neutral-500">Reach vs Conversions over the last 7 days</p>
            </div>
            <div className="flex items-center gap-4 md:gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-indigo-500" />
                <span className="text-xs text-neutral-400">Reach</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-indigo-300" />
                <span className="text-xs text-neutral-400">Conversions</span>
              </div>
            </div>
          </div>
          <div className="h-[280px] md:h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={timelineData}>
                <defs>
                  <linearGradient id="colorReach" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1f2937" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: '12px' }}
                  itemStyle={{ fontSize: '12px' }}
                />
                <Area type="monotone" dataKey="reach" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorReach)" />
                <Area type="monotone" dataKey="conversion" stroke="#a5b4fc" strokeWidth={3} fill="none" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl md:rounded-[32px] p-4 md:p-8">
          <h3 className="text-base md:text-lg font-bold mb-6 md:mb-8">Spend by Channel</h3>
          <div className="h-[220px] md:h-[250px] w-full mb-6 md:mb-8">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={8}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-4">
            {categoryData.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm font-medium text-neutral-400">{item.name}</span>
                </div>
                <span className="text-sm font-bold">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl md:rounded-3xl p-4 md:p-8">
          <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6">Top Performing Ads</h3>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-16 h-12 rounded-xl bg-neutral-800 overflow-hidden">
                  <img src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=100&h=100&fit=crop`} alt="" className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold mb-0.5">Campaign Alpha {i}</div>
                  <div className="text-[10px] text-neutral-500 uppercase font-bold tracking-widest">Video • ₦450k spent</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-emerald-500">+12%</div>
                  <div className="text-[10px] text-neutral-500">Above avg.</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl md:rounded-3xl p-4 md:p-8">
          <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6">Cost per Acquisition (CPA)</h3>
          <div className="space-y-4">
            {[
              { label: 'Music Fans', value: '₦45.20', progress: 65 },
              { label: 'Gamers', value: '₦120.40', progress: 40 },
              { label: 'Tech Enthusiasts', value: '₦88.10', progress: 55 },
              { label: 'General Lifestyle', value: '₦32.50', progress: 85 },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-neutral-400 font-medium">{item.label}</span>
                  <span className="text-white font-bold">{item.value}</span>
                </div>
                <div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${item.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatsCard({ icon: Icon, label, value, trend, isUp }: any) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500">
          <Icon className="w-5 h-5" />
        </div>
        <div className={`flex items-center gap-1 text-xs font-bold ${isUp ? 'text-emerald-500' : 'text-rose-500'}`}>
          {isUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
          {trend}
        </div>
      </div>
      <div className="text-2xl font-black">{value}</div>
      <div className="text-xs text-neutral-500 font-medium">{label}</div>
    </div>
  );
}
