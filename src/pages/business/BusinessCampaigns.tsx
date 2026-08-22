import React from 'react';
import { Plus, Search, Filter, MoreVertical, Eye, Users, TrendingUp, Calendar, CheckCircle2, Clock } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

export function BusinessCampaigns() {
  const navigate = useNavigate();

  const campaigns = [
    { 
      id: 'c1', 
      title: 'Summer Launch 2026', 
      status: 'active', 
      budget: '₦2,500,000', 
      spent: '₦1,240,000',
      views: '450k', 
      participants: '12.4k',
      startDate: 'Aug 1, 2026',
      type: 'Video Promotion'
    },
    { 
      id: 'c2', 
      title: 'Back to School Blast', 
      status: 'pending', 
      budget: '₦1,000,000', 
      spent: '₦0',
      views: '0', 
      participants: '0',
      startDate: 'Sep 5, 2026',
      type: 'Audio Promotion'
    },
    { 
      id: 'c3', 
      title: 'Mid-Year Clearance', 
      status: 'completed', 
      budget: '₦800,000', 
      spent: '₦800,000',
      views: '320k', 
      participants: '8.2k',
      startDate: 'Jun 15, 2026',
      type: 'Challenge'
    },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'active': return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
      case 'pending': return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      case 'completed': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      default: return 'bg-neutral-500/10 text-neutral-500 border-neutral-500/20';
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-10 max-w-7xl mx-auto w-full">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Campaign Management</h1>
          <p className="text-neutral-400 text-sm">Monitor and optimize your advertising performance across the platform.</p>
        </div>
        <Button 
          variant="brand"
          className="h-12 px-6 rounded-2xl"
          onClick={() => navigate('/business/create')}
        >
          <Plus className="w-5 h-5 mr-2" />
          Create New Campaign
        </Button>
      </header>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
          <input 
            type="text" 
            placeholder="Search by name or ID..." 
            className="w-full h-12 bg-neutral-900 border border-neutral-800 rounded-2xl pl-12 pr-4 text-white outline-none focus:border-indigo-500 transition-all"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" className="h-12 border-neutral-800 bg-neutral-900 px-4" onClick={() => alert('Filters - demo')}>
            <Filter className="w-5 h-5 mr-2" />
            Filters
          </Button>
          <select className="h-12 bg-neutral-900 border border-neutral-800 rounded-2xl px-4 text-white outline-none focus:border-indigo-500 appearance-none min-w-[140px]">
            <option>All Status</option>
            <option>Active</option>
            <option>Pending</option>
            <option>Completed</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 flex flex-col md:flex-row items-center gap-6 group hover:border-neutral-700 transition-all">
            <div className="flex-1 min-w-0 w-full">
              <div className="flex items-center gap-3 mb-2">
                <span className={cn(
                  "px-2.5 py-0.5 rounded-lg text-[10px] font-bold uppercase tracking-wider border",
                  getStatusStyle(campaign.status)
                )}>
                  {campaign.status}
                </span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-500">{campaign.type}</span>
              </div>
              <h3 className="text-xl font-bold truncate mb-2">{campaign.title}</h3>
              <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-400">
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Started {campaign.startDate}</span>
                <span className="flex items-center gap-2"><Users className="w-4 h-4" /> {campaign.participants} Participants</span>
                <span className="flex items-center gap-2"><Eye className="w-4 h-4" /> {campaign.views} Views</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:flex items-center gap-10 w-full md:w-auto border-t md:border-t-0 md:border-l border-neutral-800 pt-6 md:pt-0 md:pl-10">
              <div className="space-y-1">
                <div className="text-[10px] uppercase tracking-widest font-bold text-neutral-500">Total Budget</div>
                <div className="font-bold text-lg">{campaign.budget}</div>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] uppercase tracking-widest font-bold text-neutral-500">Amount Spent</div>
                <div className="font-bold text-lg text-indigo-400">{campaign.spent}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 self-start md:self-center">
              <Button variant="secondary" size="sm" className="bg-neutral-800 border-neutral-700 hover:bg-neutral-700" onClick={() => alert('View Reports - demo')}>
                View Reports
              </Button>
              <button className="p-2 hover:bg-neutral-800 rounded-xl transition-colors">
                <MoreVertical className="w-5 h-5 text-neutral-500" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
