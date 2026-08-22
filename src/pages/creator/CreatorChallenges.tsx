import React from 'react';
import { Award, Trophy, Users, Star, ArrowRight, Plus } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function CreatorChallenges() {
  const challenges = [
    { id: 1, title: 'Dance with Alex Rivers', participants: 4500, prize: '50k Points', type: 'video', status: 'Active', trend: '+150 today' },
    { id: 2, title: 'Cover the New Single', participants: 1200, prize: 'Personal Shoutout', type: 'music', status: 'Active', trend: '+45 today' },
    { id: 3, title: 'Summer Remix Contest', participants: 850, prize: 'NGN 100,000', type: 'music', status: 'Draft', trend: 'N/A' },
  ];

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto w-full">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Fan Challenges</h1>
          <p className="text-neutral-400 text-sm">Create interactive challenges to engage your community.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 h-12 px-6 rounded-2xl">
          <Plus className="w-5 h-5 mr-2" />
          Create Challenge
        </Button>
      </header>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-4">
            <Trophy className="w-6 h-6 text-blue-500" />
          </div>
          <div className="text-2xl font-bold">12.8k</div>
          <div className="text-sm text-neutral-500">Total Participants</div>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-4">
            <Star className="w-6 h-6 text-amber-500" />
          </div>
          <div className="text-2xl font-bold">245</div>
          <div className="text-sm text-neutral-500">Top Tier Submissions</div>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-emerald-500" />
          </div>
          <div className="text-2xl font-bold">88%</div>
          <div className="text-sm text-neutral-500">Engagement Rate</div>
        </div>
      </div>

      <div className="space-y-4">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="group bg-neutral-900 border border-neutral-800 rounded-3xl p-6 flex flex-col md:flex-row items-center gap-6 hover:border-neutral-700 transition-all">
            <div className="w-16 h-16 rounded-2xl bg-neutral-800 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Award className={`w-8 h-8 ${challenge.type === 'video' ? 'text-indigo-400' : 'text-blue-400'}`} />
            </div>
            
            <div className="flex-1 w-full">
              <div className="flex items-center gap-2 mb-1">
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${challenge.status === 'Active' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-neutral-800 text-neutral-500'}`}>
                  {challenge.status}
                </span>
                <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">{challenge.type} challenge</span>
              </div>
              <h3 className="text-lg font-bold mb-1">{challenge.title}</h3>
              <div className="flex items-center gap-4 text-sm text-neutral-500">
                <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> {challenge.participants.toLocaleString()} joined</span>
                <span className="flex items-center gap-1.5 text-blue-400 font-medium">{challenge.trend}</span>
              </div>
            </div>

            <div className="w-full md:w-auto flex items-center justify-between md:justify-end gap-8 border-t md:border-t-0 md:border-l border-neutral-800 pt-6 md:pt-0 md:pl-8">
              <div>
                <div className="text-xs text-neutral-500 mb-1">Grand Prize</div>
                <div className="font-bold text-amber-500">{challenge.prize}</div>
              </div>
              <button className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
