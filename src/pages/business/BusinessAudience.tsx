import React from 'react';
import { Users, UserPlus, MapPin, Smartphone, Monitor, Search, Filter, MoreVertical, Star } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function BusinessAudience() {
  const segments = [
    { name: 'Music Enthusiasts', size: '1.2M', growth: '+5.4%', engagement: '12%', color: 'bg-indigo-500' },
    { name: 'Gen Z Gamers', size: '450k', growth: '+12.1%', engagement: '18%', color: 'bg-emerald-500' },
    { name: 'Tech Early Adopters', size: '280k', growth: '+2.8%', engagement: '9%', color: 'bg-amber-500' },
    { name: 'Fashion & Style', size: '850k', growth: '+8.9%', engagement: '11%', color: 'bg-rose-500' },
  ];

  return (
    <div className="p-4 md:p-6 lg:p-10 max-w-7xl mx-auto w-full">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Audience Insights</h1>
          <p className="text-neutral-400 text-sm">Understand who is interacting with your brand and discover new segments.</p>
        </div>
        <Button variant="brand" className="h-12 px-6 rounded-2xl" onClick={() => alert('Create Segment - demo')}>
          <UserPlus className="w-5 h-5 mr-2" />
          Create Segment
        </Button>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {segments.map((segment, i) => (
          <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 hover:border-indigo-500 transition-all cursor-pointer group">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 rounded-xl ${segment.color}/10 flex items-center justify-center text-white`}>
                <Users className={`w-5 h-5 ${segment.color.replace('bg-', 'text-')}`} />
              </div>
              <span className="text-xs font-bold text-emerald-500">{segment.growth}</span>
            </div>
            <h3 className="font-bold text-lg mb-1 group-hover:text-indigo-400 transition-colors">{segment.name}</h3>
            <div className="flex items-center justify-between text-xs text-neutral-500">
              <span>{segment.size} users</span>
              <span className="flex items-center gap-1"><Star className="w-3 h-3 fill-current" /> {segment.engagement} Engagement</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-neutral-900 border border-neutral-800 rounded-[32px] p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold">Demographics & Behavior</h3>
            <div className="flex gap-2">
              <Button variant="secondary" size="sm" className="h-9 px-4 text-xs font-bold bg-neutral-800 border-neutral-700">Age</Button>
              <Button variant="secondary" size="sm" className="h-9 px-4 text-xs font-bold text-neutral-500">Gender</Button>
              <Button variant="secondary" size="sm" className="h-9 px-4 text-xs font-bold text-neutral-500">Interests</Button>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <div className="flex justify-between text-sm font-medium mb-3">
                <span className="text-neutral-300">18-24 years</span>
                <span className="text-white">45%</span>
              </div>
              <div className="h-3 bg-neutral-800 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-600 rounded-full" style={{ width: '45%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm font-medium mb-3">
                <span className="text-neutral-300">25-34 years</span>
                <span className="text-white">32%</span>
              </div>
              <div className="h-3 bg-neutral-800 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-400 rounded-full" style={{ width: '32%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm font-medium mb-3">
                <span className="text-neutral-300">35-44 years</span>
                <span className="text-white">15%</span>
              </div>
              <div className="h-3 bg-neutral-800 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-200 rounded-full" style={{ width: '15%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm font-medium mb-3">
                <span className="text-neutral-300">45+ years</span>
                <span className="text-white">8%</span>
              </div>
              <div className="h-3 bg-neutral-800 rounded-full overflow-hidden">
                <div className="h-full bg-neutral-600 rounded-full" style={{ width: '8%' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-[32px] p-8">
          <h3 className="text-lg font-bold mb-8">Location & Device</h3>
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-widest font-bold text-neutral-500">Top Regions</div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-indigo-500" />
                  <span>Lagos, NG</span>
                </div>
                <span className="font-bold">42%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-indigo-500" />
                  <span>Abuja, NG</span>
                </div>
                <span className="font-bold">18%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-indigo-500" />
                  <span>Accra, GH</span>
                </div>
                <span className="font-bold">12%</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-xs uppercase tracking-widest font-bold text-neutral-500">Device Usage</div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-sm">
                  <Smartphone className="w-4 h-4 text-neutral-400" />
                  <span>Mobile</span>
                </div>
                <span className="font-bold">88%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-sm">
                  <Monitor className="w-4 h-4 text-neutral-400" />
                  <span>Desktop</span>
                </div>
                <span className="font-bold">12%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
