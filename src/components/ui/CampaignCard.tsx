import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Music, Radio, HelpCircle, Award, Clock, Users } from 'lucide-react';
import { Campaign } from '../../types';
import { Button } from './Button';

const iconMap = {
  video: Play,
  music: Music,
  live: Radio,
  poll: HelpCircle,
  challenge: Award,
};

export const CampaignCard: React.FC<{ campaign: Campaign }> = ({ campaign }) => {
  const Icon = iconMap[campaign.type];

  return (
    <div className="group flex flex-col bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition-colors">
      <div className="relative aspect-video overflow-hidden bg-neutral-800">
        <img 
          src={campaign.image} 
          alt={campaign.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1.5 text-xs font-medium">
          <Icon className="w-3.5 h-3.5" />
          <span className="capitalize">{campaign.type}</span>
        </div>
        <div className="absolute top-3 right-3 bg-white text-black px-2.5 py-1 rounded-full font-bold text-xs shadow-lg">
          +{campaign.reward} PP
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <img src={campaign.creatorAvatar} alt={campaign.creatorName} className="w-6 h-6 rounded-full" />
          <span className="text-sm text-neutral-400">{campaign.creatorName}</span>
        </div>
        
        <h3 className="font-bold text-lg mb-2 line-clamp-2 leading-tight">{campaign.title}</h3>
        
        <div className="flex items-center gap-4 text-xs text-neutral-500 mt-auto mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {Math.round(campaign.duration / 60)} min
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5" />
            {(campaign.participants / 1000).toFixed(1)}k joined
          </div>
        </div>

        <Link to={`/watch/${campaign.id}`} className="block">
          <Button variant="secondary" className="w-full">
            Play Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
