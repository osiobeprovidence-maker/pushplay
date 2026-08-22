import React from 'react';
import { MOCK_REWARDS } from '../../data/mockData';
import { useAppStore } from '../../store/useAppStore';
import { Button } from '../../components/ui/Button';

export function Rewards() {
  const { user, deductPoints } = useAppStore();
  const [selectedReward, setSelectedReward] = React.useState<string | null>(null);

  const handleRedeem = (rewardId: string, points: number) => {
    if ((user?.points || 0) >= points) {
      deductPoints(points);
      setSelectedReward(null);
      // In a real app, this would show a success toast/modal
      alert('Reward redeemed successfully! (Simulated)');
    } else {
      alert('Not enough Play Points.');
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto w-full">
      <header className="mb-6 md:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Rewards</h1>
          <p className="text-neutral-400">Redeem your Play Points for real value.</p>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl px-6 py-4 flex items-center gap-4">
          <div className="text-sm text-neutral-400">Available Balance</div>
          <div className="text-2xl font-bold text-white">{user?.points.toLocaleString()} <span className="text-sm text-neutral-500 font-normal">PP</span></div>
        </div>
      </header>

      <div className="space-y-12">
        {['Airtime & Data', 'Cash', 'Gift Cards'].map((category) => (
          <div key={category}>
            <h2 className="text-xl font-bold mb-6">{category}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {MOCK_REWARDS.map(reward => (
                <div key={reward.id} className="bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden hover:border-neutral-700 transition-all group flex flex-col">
                  <div className="aspect-[4/3] bg-neutral-800 relative overflow-hidden">
                    <img src={reward.image} alt={reward.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="text-2xl font-bold text-white">{reward.value}</div>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-bold text-lg mb-1">{reward.title}</h3>
                    <p className="text-sm text-neutral-400 mb-6 flex-1">{reward.description}</p>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <div className="font-bold text-green-400">{reward.points.toLocaleString()} PP</div>
                      <Button 
                        size="sm" 
                        variant={(user?.points || 0) >= reward.points ? 'primary' : 'secondary'}
                        disabled={(user?.points || 0) < reward.points}
                        onClick={() => setSelectedReward(reward.id)}
                      >
                        Redeem
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Redemption Modal */}
      {selectedReward && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 max-w-sm w-full shadow-2xl">
            <h2 className="text-xl font-bold mb-2">Confirm Redemption</h2>
            <p className="text-neutral-400 text-sm mb-6">Are you sure you want to redeem this reward?</p>
            
            <div className="flex gap-3">
              <Button variant="secondary" className="flex-1" onClick={() => setSelectedReward(null)}>Cancel</Button>
              <Button className="flex-1" onClick={() => {
                const reward = MOCK_REWARDS.find(r => r.id === selectedReward);
                if (reward) handleRedeem(reward.id, reward.points);
              }}>
                Confirm
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
