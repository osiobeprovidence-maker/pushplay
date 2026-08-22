import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Users, TrendingUp, DollarSign, Plus } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function BusinessDashboard() {
  const stats = [
    { label: 'Active Campaigns', value: '4', icon: Target, color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
    { label: 'Total Engagement', value: '128K', icon: Users, color: 'text-green-400', bg: 'bg-green-500/10' },
    { label: 'Completion Rate', value: '84%', icon: TrendingUp, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { label: 'Total Spend', value: '₦450K', icon: DollarSign, color: 'text-orange-400', bg: 'bg-orange-500/10' },
  ];

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto w-full">
      <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Business Overview</h1>
          <p className="text-neutral-400">Track your campaign performance and ROI.</p>
        </div>
        <Link to="/business/create">
          <Button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white">
            <Plus className="w-5 h-5" />
            New Ad Campaign
          </Button>
        </Link>
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
            <h2 className="text-xl font-bold">Campaign Performance</h2>
          </div>
          
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 h-80 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="text-sm text-neutral-400">Total Engagements</div>
                <div className="text-2xl font-bold">128,450</div>
              </div>
              <div className="flex gap-2">
                <span className="flex items-center gap-1 text-xs text-neutral-400"><div className="w-2 h-2 rounded-full bg-indigo-500" /> Views</span>
                <span className="flex items-center gap-1 text-xs text-neutral-400"><div className="w-2 h-2 rounded-full bg-green-500" /> Completes</span>
              </div>
            </div>
            
            {/* Mock Line Chart */}
            <div className="flex-1 relative flex items-end justify-between">
              {[30, 40, 35, 50, 45, 60, 75, 65, 80, 90, 85, 100].map((h, i) => (
                <div key={i} className="w-full mx-1 relative group flex items-end h-full">
                  <div className="absolute bottom-0 w-full bg-indigo-500/20 rounded-t-sm" style={{ height: `${h}%` }} />
                  <div className="absolute bottom-0 w-full bg-indigo-500 rounded-t-sm" style={{ height: `${h * 0.7}%` }} />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden divide-y divide-neutral-800">
            {[
              { title: 'Summer Sale Promo', metric: '4.2k completes', time: '2h ago' },
              { title: 'New Product Launch', metric: '1.8k views', time: '5h ago' },
              { title: 'Brand Quiz Campaign', metric: 'Budget 80% used', time: '1d ago' },
              { title: 'App Install Drive', metric: 'Completed', time: '2d ago' },
            ].map((item, i) => (
              <div key={i} className="p-4 hover:bg-neutral-800/50 transition-colors">
                <div className="font-medium text-white mb-1">{item.title}</div>
                <div className="flex justify-between text-xs text-neutral-500">
                  <span>{item.metric}</span>
                  <span>{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
