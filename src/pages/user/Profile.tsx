import React from 'react';
import { useAppStore } from '../../store/useAppStore';
import { Settings, Shield, Bell, HelpCircle, ChevronRight, Copy } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { StreakCard } from '../../components/ui/StreakCard';

export function Profile() {
  const { user } = useAppStore();

  const menuItems = [
    { icon: Settings, label: 'Account Settings' },
    { icon: Bell, label: 'Notifications' },
    { icon: Shield, label: 'Privacy & Security' },
    { icon: HelpCircle, label: 'Help & Support' },
  ];

  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto w-full">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Left Column: Profile Info */}
        <div className="md:w-1/3">
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 text-center flex flex-col items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-neutral-950 shadow-xl mb-4">
              <img src={user?.avatar} alt={user?.name} className="w-full h-full object-cover" />
            </div>
            <h2 className="text-2xl font-bold mb-1">{user?.name}</h2>
            <p className="text-neutral-400 mb-6">{user?.username}</p>
            
            <div className="flex justify-between w-full p-4 bg-neutral-950 rounded-2xl mb-6">
              <div className="text-center flex-1 border-r border-neutral-800">
                <div className="text-xs text-neutral-500 font-medium mb-1">Points</div>
                <div className="font-bold text-white">{user?.points.toLocaleString()}</div>
              </div>
              <div className="text-center flex-1 border-r border-neutral-800">
                <div className="text-xs text-neutral-500 font-medium mb-1">Rank</div>
                <div className="font-bold text-white">Gold</div>
              </div>
              <div className="text-center flex-1">
                <div className="text-xs text-neutral-500 font-medium mb-1">Referrals</div>
                <div className="font-bold text-white">12</div>
              </div>
            </div>

            <Button className="w-full flex items-center justify-center gap-2">
              <Copy className="w-4 h-4" />
              Copy Invite Link
            </Button>
          </div>
        </div>

        {/* Right Column: Details & Settings */}
        <div className="md:w-2/3 space-y-6">
          <StreakCard streak={user?.streak} />

          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-2">
            {menuItems.map((item, i) => (
              <button key={i} className="w-full flex items-center justify-between p-4 hover:bg-neutral-800/50 rounded-2xl transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-white">{item.label}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-neutral-600 group-hover:text-neutral-300 transition-colors" />
              </button>
            ))}
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg mb-1">Push Play Pro</h3>
              <p className="text-sm text-neutral-400">Unlock premium campaigns and higher limits.</p>
            </div>
            <Button variant="secondary">Upgrade</Button>
          </div>
        </div>

      </div>
    </div>
  );
}
