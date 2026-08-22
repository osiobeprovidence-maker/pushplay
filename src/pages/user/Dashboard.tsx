import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Music, Radio, Award } from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';
import { MOCK_CAMPAIGNS } from '../../data/mockData';
import { CampaignCard } from '../../components/ui/CampaignCard';
import { StreakCard } from '../../components/ui/StreakCard';
import { Button } from '../../components/ui/Button';

export function Dashboard() {
  const { user } = useAppStore();

  const activityStats = [
    { icon: Play, label: 'Watch', points: 50 },
    { icon: Music, label: 'Listen', points: 30 },
    { icon: Radio, label: 'Live', points: 100 },
    { icon: Award, label: 'Challenge', points: 250 },
  ];

  return (
    <div className="p-6 md:p-8 max-w-6xl mx-auto w-full">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Good afternoon, {user?.name.split(' ')[0]}</h1>
        <p className="text-neutral-400">Here's your entertainment summary for today.</p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {/* Balance Card */}
        <div className="lg:col-span-2 bg-neutral-900 border border-neutral-800 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full pointer-events-none" />
          
          <div>
            <div className="text-neutral-400 font-medium mb-1">Total Balance</div>
            <div className="text-5xl font-bold tracking-tight mb-2">
              {user?.points.toLocaleString()} <span className="text-2xl text-neutral-500 font-normal">PP</span>
            </div>
            <div className="text-sm text-green-400 font-medium">↑ 325 PP earned today</div>
          </div>

          <div className="flex gap-4 mt-8">
            <Link to="/rewards">
              <Button>Redeem Points</Button>
            </Link>
            <Link to="/wallet">
              <Button variant="secondary">History</Button>
            </Link>
          </div>
        </div>

        {/* Streak Card */}
        <div className="lg:col-span-1">
          <StreakCard streak={user?.streak} />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-10">
        <div className="md:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Featured for You</h2>
            <Link to="/discover" className="text-sm font-medium text-neutral-400 hover:text-white flex items-center gap-1">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {MOCK_CAMPAIGNS.slice(0, 2).map(campaign => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </div>
        </div>

        <div className="md:col-span-1">
          <h2 className="text-xl font-bold mb-6">Today's Activity</h2>
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-2">
            {activityStats.map((stat, i) => (
              <div key={i} className="flex items-center justify-between p-4 hover:bg-neutral-800/50 rounded-2xl transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium">{stat.label}</span>
                </div>
                <div className="text-sm font-bold text-neutral-400">+{stat.points} PP</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
