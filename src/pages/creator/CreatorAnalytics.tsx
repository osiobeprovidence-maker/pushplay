import React from 'react';
import { BarChart3, TrendingUp, TrendingDown, Users, Play, Clock, ArrowUpRight } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  { name: 'Mon', views: 4000, revenue: 2400 },
  { name: 'Tue', views: 3000, revenue: 1398 },
  { name: 'Wed', views: 2000, revenue: 9800 },
  { name: 'Thu', views: 2780, revenue: 3908 },
  { name: 'Fri', views: 1890, revenue: 4800 },
  { name: 'Sat', views: 2390, revenue: 3800 },
  { name: 'Sun', views: 3490, revenue: 4300 },
];

export function CreatorAnalytics() {
  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto w-full">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Analytics</h1>
          <p className="text-neutral-400 text-sm">Deep dive into your content performance and audience growth.</p>
        </div>
        <div className="flex bg-neutral-900 border border-neutral-800 rounded-2xl p-1">
          <button className="px-4 py-2 text-xs font-bold bg-blue-600 rounded-xl">7D</button>
          <button className="px-4 py-2 text-xs font-bold text-neutral-500 hover:text-white transition-colors">30D</button>
          <button className="px-4 py-2 text-xs font-bold text-neutral-500 hover:text-white transition-colors">90D</button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
              <Users className="w-5 h-5" />
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-emerald-500">
              <TrendingUp className="w-3 h-3" /> 12%
            </div>
          </div>
          <div className="text-2xl font-black">24.5k</div>
          <div className="text-xs text-neutral-500 font-medium">Followers</div>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500">
              <Play className="w-5 h-5" />
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-emerald-500">
              <TrendingUp className="w-3 h-3" /> 8%
            </div>
          </div>
          <div className="text-2xl font-black">1.2M</div>
          <div className="text-xs text-neutral-500 font-medium">Total Views</div>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
              <Clock className="w-5 h-5" />
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-rose-500">
              <TrendingDown className="w-3 h-3" /> 2%
            </div>
          </div>
          <div className="text-2xl font-black">15.4k</div>
          <div className="text-xs text-neutral-500 font-medium">Watch Hours</div>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <ArrowUpRight className="w-5 h-5" />
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-emerald-500">
              <TrendingUp className="w-3 h-3" /> 24%
            </div>
          </div>
          <div className="text-2xl font-black">₦480k</div>
          <div className="text-xs text-neutral-500 font-medium">Est. Revenue</div>
        </div>
      </div>

      <div className="bg-neutral-900 border border-neutral-800 rounded-[32px] p-8 mb-10">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-lg font-bold">Growth Overview</h3>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <span className="text-xs text-neutral-400">Views</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-indigo-500" />
              <span className="text-xs text-neutral-400">Revenue</span>
            </div>
          </div>
        </div>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1f2937" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#6b7280', fontSize: 12 }}
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#6b7280', fontSize: 12 }}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: '12px' }}
                itemStyle={{ fontSize: '12px' }}
              />
              <Area type="monotone" dataKey="views" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorViews)" />
              <Area type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8">
          <h3 className="text-lg font-bold mb-6">Audience Demographics</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-xs mb-2">
                <span className="text-neutral-400 font-medium">18-24 years</span>
                <span className="text-white font-bold">42%</span>
              </div>
              <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '42%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-2">
                <span className="text-neutral-400 font-medium">25-34 years</span>
                <span className="text-white font-bold">35%</span>
              </div>
              <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 rounded-full" style={{ width: '35%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-2">
                <span className="text-neutral-400 font-medium">35+ years</span>
                <span className="text-white font-bold">23%</span>
              </div>
              <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                <div className="h-full bg-neutral-600 rounded-full" style={{ width: '23%' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8">
          <h3 className="text-lg font-bold mb-6">Top Locations</h3>
          <div className="space-y-4">
            {[
              { country: 'Nigeria', percentage: '65%', color: 'bg-emerald-500' },
              { country: 'Ghana', percentage: '12%', color: 'bg-blue-500' },
              { country: 'USA', percentage: '8%', color: 'bg-indigo-500' },
              { country: 'UK', percentage: '5%', color: 'bg-amber-500' },
            ].map((loc, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${loc.color}`} />
                  <span className="text-sm font-medium text-neutral-300">{loc.country}</span>
                </div>
                <span className="text-sm font-bold">{loc.percentage}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
