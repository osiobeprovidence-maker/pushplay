import React, { useState } from 'react';
import { MOCK_CAMPAIGNS } from '../../data/mockData';
import { CampaignCard } from '../../components/ui/CampaignCard';
import { Search, SlidersHorizontal } from 'lucide-react';

const CATEGORIES = ['All', 'For You', 'Videos', 'Music', 'Live', 'Challenges', 'Trending'];

export function Discover() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto w-full">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-6">Discover</h1>
        
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
          <div className="flex-1 w-full md:max-w-md relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
            <input 
              type="text" 
              placeholder="Search campaigns, creators, or topics..."
              className="w-full h-12 bg-neutral-900 border border-neutral-800 rounded-full pl-12 pr-4 text-sm focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all"
            />
          </div>
          
          <button className="flex items-center gap-2 px-4 h-12 bg-neutral-900 border border-neutral-800 rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors shrink-0">
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
        </div>
      </header>

      {/* Categories Horizontal Scroll */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-4 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
        {CATEGORIES.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category 
                ? 'bg-white text-black' 
                : 'bg-neutral-900 text-neutral-400 hover:bg-neutral-800 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {MOCK_CAMPAIGNS.map(campaign => (
          <CampaignCard key={campaign.id} campaign={campaign} />
        ))}
        {/* Duplicate for visual bulk since we only have a few mocks */}
        {MOCK_CAMPAIGNS.map(campaign => (
          <CampaignCard key={`${campaign.id}-dup`} campaign={{...campaign, id: `${campaign.id}-dup`}} />
        ))}
      </div>
    </div>
  );
}
