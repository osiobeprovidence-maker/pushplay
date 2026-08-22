import React from 'react';
import { Plus, Search, Filter, MoreVertical, Eye, Users, TrendingUp } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { MOCK_CAMPAIGNS } from '../../data/mockData';
import { useNavigate } from 'react-router-dom';

export function CreatorCampaigns() {
  const navigate = useNavigate();
  const creatorCampaigns = MOCK_CAMPAIGNS.filter(c => c.creatorName === 'Alex Rivers');

  return (
    <div className="p-4 md:p-6 lg:p-10 max-w-7xl mx-auto w-full">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">My Campaigns</h1>
          <p className="text-neutral-400 text-sm">Manage and track your active and past promotion campaigns.</p>
        </div>
        <Button 
          variant="brand-blue"
          className="h-12 px-6 rounded-2xl"
          onClick={() => navigate('/creator/create')}
        >
          <Plus className="w-5 h-5 mr-2" />
          New Campaign
        </Button>
      </header>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
          <input 
            type="text" 
            placeholder="Search campaigns..." 
            className="w-full h-12 bg-neutral-900 border border-neutral-800 rounded-2xl pl-12 pr-4 text-white outline-none focus:border-blue-500 transition-all"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" className="h-12 border-neutral-800 bg-neutral-900 px-4">
            <Filter className="w-5 h-5 mr-2" />
            Filters
          </Button>
          <select className="h-12 bg-neutral-900 border border-neutral-800 rounded-2xl px-4 text-white outline-none focus:border-blue-500">
            <option>All Status</option>
            <option>Active</option>
            <option>Pending</option>
            <option>Completed</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4">
        {creatorCampaigns.map((campaign) => (
          <div key={campaign.id} className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 flex flex-col md:flex-row items-center gap-6 group hover:border-neutral-700 transition-all">
            <div className="w-full md:w-32 h-24 rounded-2xl overflow-hidden flex-shrink-0">
              <img src={campaign.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            
            <div className="flex-1 min-w-0 w-full">
              <div className="flex items-center gap-2 mb-1">
                <span className={`w-2 h-2 rounded-full ${campaign.status === 'active' ? 'bg-emerald-500' : 'bg-neutral-500'}`} />
                <span className="text-[10px] uppercase tracking-wider font-bold text-neutral-500">{campaign.status}</span>
              </div>
              <h3 className="text-lg font-bold truncate mb-1">{campaign.title}</h3>
              <div className="flex items-center gap-4 text-sm text-neutral-500">
                <span className="flex items-center gap-1.5"><Eye className="w-4 h-4" /> 12.4k Views</span>
                <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> {campaign.participants} Enrolled</span>
                <span className="flex items-center gap-1.5 text-blue-400 font-medium"><TrendingUp className="w-4 h-4" /> +12% Growth</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:flex items-center gap-8 w-full md:w-auto border-t md:border-t-0 md:border-l border-neutral-800 pt-6 md:pt-0 md:pl-8">
              <div>
                <div className="text-xs text-neutral-500 mb-1">Budget Spent</div>
                <div className="font-bold">₦240,000</div>
              </div>
              <div>
                <div className="text-xs text-neutral-500 mb-1">ROI</div>
                <div className="font-bold text-emerald-500">3.2x</div>
              </div>
            </div>

            <button className="p-2 hover:bg-neutral-800 rounded-xl transition-colors self-start md:self-center">
              <MoreVertical className="w-5 h-5 text-neutral-500" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
