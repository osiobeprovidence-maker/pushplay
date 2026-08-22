import React from 'react';
import { Megaphone, Eye, Users } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function AdminCampaigns() {
  const campaigns = [
    { title: 'Summer Launch 2026', creator: 'Alex Rivers', status: 'Active', views: '12.4k', participants: '4.2k' },
    { title: 'Nike Air Drop', creator: 'Nike Nigeria', status: 'Pending', views: '-', participants: '-' },
  ];
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto w-full">
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Campaigns</h1>
        <p className="text-neutral-400 text-sm">Review and moderate all campaigns.</p>
      </header>
      <div className="space-y-4">
        {campaigns.map((c,i)=> (
          <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-2xl md:rounded-3xl p-4 md:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-neutral-800 flex items-center justify-center shrink-0"><Megaphone className="w-6 h-6 text-white" /></div>
              <div className="min-w-0"><div className="font-bold text-white truncate">{c.title}</div><div className="text-xs text-neutral-500">{c.creator}</div></div>
            </div>
            <div className="flex flex-wrap items-center gap-3 md:gap-6">
              <span className={`px-2 py-1 rounded text-xs ${c.status==='Active'?'bg-green-500/10 text-green-400':'bg-amber-500/10 text-amber-400'}`}>{c.status}</span>
              <span className="flex items-center gap-1 text-sm text-neutral-400"><Eye className="w-4 h-4" />{c.views}</span>
              <span className="flex items-center gap-1 text-sm text-neutral-400"><Users className="w-4 h-4" />{c.participants}</span>
              <Button variant="secondary" size="sm" className="w-full sm:w-auto" onClick={() => alert('Review campaign - demo')}>Review</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
