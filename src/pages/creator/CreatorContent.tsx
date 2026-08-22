import React from 'react';
import { Video, Music, Play, Plus, Search, MoreVertical, Clock } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function CreatorContent() {
  const content = [
    { id: 1, title: 'Summer Vibes Mix 2026', type: 'music', duration: '3:45', views: '2.4M', date: '2 days ago', thumbnail: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop' },
    { id: 2, title: 'How to Build a Platform', type: 'video', duration: '12:20', views: '840k', date: '5 days ago', thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=225&fit=crop' },
    { id: 3, title: 'Midnight City Lights', type: 'video', duration: '0:15', views: '12.1M', date: '1 week ago', thumbnail: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=225&fit=crop' },
    { id: 4, title: 'Afrobeats Selection', type: 'music', duration: '4:12', views: '450k', date: '2 weeks ago', thumbnail: 'https://images.unsplash.com/photo-1514525253344-7814d9196607?w=400&h=400&fit=crop' },
  ];

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto w-full">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Content Library</h1>
          <p className="text-neutral-400 text-sm">Upload and manage your videos, music, and reels.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" className="h-12 px-6 rounded-2xl border-neutral-800 bg-neutral-900">
            <Music className="w-5 h-5 mr-2" />
            Upload Audio
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 h-12 px-6 rounded-2xl">
            <Video className="w-5 h-5 mr-2" />
            Upload Video
          </Button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {content.map((item) => (
          <div key={item.id} className="group bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden hover:border-neutral-700 transition-all">
            <div className="aspect-video relative overflow-hidden">
              <img src={item.thumbnail} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black">
                  <Play className="w-6 h-6 fill-current" />
                </div>
              </div>
              <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded-lg text-[10px] font-bold">
                {item.duration}
              </div>
              {item.type === 'music' && (
                <div className="absolute top-3 left-3 bg-blue-600 p-1.5 rounded-lg">
                  <Music className="w-3.5 h-3.5 text-white" />
                </div>
              )}
            </div>
            
            <div className="p-5">
              <h3 className="font-bold text-sm mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors">{item.title}</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-[11px] text-neutral-500">
                  <span className="flex items-center gap-1"><Play className="w-3 h-3" /> {item.views}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {item.date}</span>
                </div>
                <button className="p-1.5 hover:bg-neutral-800 rounded-lg transition-colors">
                  <MoreVertical className="w-4 h-4 text-neutral-500" />
                </button>
              </div>
            </div>
          </div>
        ))}

        <button className="aspect-video bg-neutral-900 border-2 border-dashed border-neutral-800 rounded-3xl flex flex-col items-center justify-center gap-3 text-neutral-500 hover:border-blue-500 hover:text-blue-400 transition-all group">
          <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">
            <Plus className="w-6 h-6" />
          </div>
          <span className="text-sm font-medium">Add Content</span>
        </button>
      </div>
    </div>
  );
}
