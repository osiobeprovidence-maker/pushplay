import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Eye, MousePointerClick, TrendingUp, Plus } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function CreatorDashboard() {
  const stats = [
    { label: 'Active Campaigns', value: '12', icon: MousePointerClick, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { label: 'Total Participants', value: '8,450', icon: Users, color: 'text-green-400', bg: 'bg-green-500/10' },
    { label: 'Total Reach', value: '42.5K', icon: Eye, color: 'text-purple-400', bg: 'bg-purple-500/10' },
    { label: 'Avg. Engagement', value: '72%', icon: TrendingUp, color: 'text-orange-400', bg: 'bg-orange-500/10' },
  ];

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto w-full">
      <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Creator Overview</h1>
          <p className="text-neutral-400">Welcome back. Here's how your content is performing.</p>
        </div>
        <Button to="/creator/create" variant="brand-blue" className="flex items-center gap-2">
          <Plus className="w-5 h-5" />
          New Campaign
        </Button>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, i) => (
          <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6">
            <div className={`w-12 h-12 rounded-2xl ${stat.bg} flex items-center justify-center mb-4`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <div className="text-neutral-400 font-medium mb-1 text-sm">{stat.label}</div>
            <div className="text-3xl font-bold text-white">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Recent Campaigns</h2>
            <Link to="/creator/campaigns" className="text-sm text-blue-500 hover:text-blue-400">View all</Link>
          </div>
          
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-neutral-950 text-neutral-400">
                <tr>
                  <th className="px-6 py-4 font-medium">Campaign</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium">Reach</th>
                  <th className="px-6 py-4 font-medium">Participants</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800">
                {[
                  { name: 'New Movie Trailer', status: 'Active', reach: '12.4k', part: '4,200', type: 'video' },
                  { name: 'Live Q&A Session', status: 'Draft', reach: '-', part: '-', type: 'live' },
                  { name: 'Album Listening Party', status: 'Completed', reach: '45k', part: '12k', type: 'music' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-neutral-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-white">{row.name}</div>
                      <div className="text-xs text-neutral-500 capitalize">{row.type}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 rounded text-xs font-medium ${
                        row.status === 'Active' ? 'bg-green-500/10 text-green-400' :
                        row.status === 'Completed' ? 'bg-blue-500/10 text-blue-400' :
                        'bg-neutral-800 text-neutral-400'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">{row.reach}</td>
                    <td className="px-6 py-4">{row.part}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <h2 className="text-xl font-bold mb-6">Audience Growth</h2>
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 h-64 flex flex-col items-center justify-center text-center">
            {/* Mock Chart Area */}
            <div className="w-full h-32 flex items-end justify-between gap-2 opacity-50 mb-4 px-4">
              {[40, 60, 45, 80, 55, 90, 75].map((h, i) => (
                <div key={i} className="w-full bg-blue-500 rounded-t-sm transition-all hover:bg-blue-400" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="text-sm font-bold text-white">+15% this week</div>
            <div className="text-xs text-neutral-500">Based on unique viewers</div>
          </div>
        </div>
      </div>
    </div>
  );
}
