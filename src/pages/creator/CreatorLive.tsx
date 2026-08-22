import React, { useState } from 'react';
import { Radio, Users, MessageSquare, Shield, Settings, Mic, Video, Share2 } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function CreatorLive() {
  const [isLive, setIsLive] = useState(false);

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto w-full">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Live Studio</h1>
          <p className="text-neutral-400 text-sm">Broadcast live to your fans and earn rewards in real-time.</p>
        </div>
        {!isLive ? (
          <Button 
            className="bg-rose-600 hover:bg-rose-700 h-12 px-8 rounded-2xl animate-pulse"
            onClick={() => setIsLive(true)}
          >
            Go Live Now
          </Button>
        ) : (
          <Button 
            variant="secondary"
            className="h-12 px-8 rounded-2xl border-rose-900 bg-rose-950/20 text-rose-500 hover:bg-rose-950/40"
            onClick={() => setIsLive(false)}
          >
            End Stream
          </Button>
        )}
      </header>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="aspect-video bg-neutral-900 rounded-[32px] border border-neutral-800 overflow-hidden relative group">
            {!isLive ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="w-24 h-24 bg-neutral-800 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Video className="w-10 h-10 text-neutral-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Preview Camera</h3>
                <p className="text-neutral-500 max-w-xs mx-auto mb-8">Set up your lighting and camera before going live to your audience.</p>
                <div className="flex gap-3">
                  <Button variant="secondary" size="sm" className="bg-neutral-800 border-neutral-700">
                    <Mic className="w-4 h-4 mr-2" />
                    Audio Check
                  </Button>
                  <Button variant="secondary" size="sm" className="bg-neutral-800 border-neutral-700">
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <img 
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1280&h=720&fit=crop" 
                  className="w-full h-full object-cover" 
                  alt="Live Stream"
                />
                <div className="absolute top-6 left-6 flex gap-2">
                  <div className="bg-rose-600 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 shadow-lg">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                    Live
                  </div>
                  <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    12.4k
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 flex gap-2">
                  <button className="w-10 h-10 bg-black/60 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </>
            )}
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8">
            <h3 className="text-lg font-bold mb-6">Stream Details</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">Stream Title</label>
                <input 
                  type="text" 
                  className="w-full h-12 bg-neutral-950 border border-neutral-800 rounded-xl px-4 text-white outline-none focus:border-blue-500"
                  placeholder="e.g. Weekly Fan Q&A and Music Teasers"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-400 mb-2">Category</label>
                  <select className="w-full h-12 bg-neutral-950 border border-neutral-800 rounded-xl px-4 text-white outline-none focus:border-blue-500">
                    <option>Music</option>
                    <option>Gaming</option>
                    <option>Just Chatting</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-400 mb-2">Monetization</label>
                  <select className="w-full h-12 bg-neutral-950 border border-neutral-800 rounded-xl px-4 text-white outline-none focus:border-blue-500">
                    <option>Creator Tips Enabled</option>
                    <option>Subscribers Only</option>
                    <option>Free For All</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl flex flex-col h-[600px]">
            <div className="p-6 border-b border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-500" />
                <span className="font-bold">Live Chat</span>
              </div>
              <div className="flex gap-2">
                <button className="p-1.5 hover:bg-neutral-800 rounded-lg text-neutral-500 transition-colors">
                  <Shield className="w-4 h-4" />
                </button>
                <button className="p-1.5 hover:bg-neutral-800 rounded-lg text-neutral-500 transition-colors">
                  <Settings className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              <div className="text-center">
                <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">Welcome to the chat!</p>
              </div>
              {/* Mock Chat Messages */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-indigo-500 flex-shrink-0" />
                <div className="text-sm">
                  <span className="font-bold text-neutral-400 mr-2">SamUser:</span>
                  <span className="text-neutral-100">Can't wait for the new album! 🔥</span>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex-shrink-0" />
                <div className="text-sm">
                  <span className="font-bold text-neutral-400 mr-2">MusicLover:</span>
                  <span className="text-neutral-100">The visuals look insane!</span>
                </div>
              </div>
              <div className="flex gap-3 bg-blue-500/10 p-2 rounded-xl border border-blue-500/20">
                <div className="w-8 h-8 rounded-full bg-amber-500 flex-shrink-0" />
                <div className="text-sm">
                  <span className="font-bold text-amber-400 mr-2">PremiumFan:</span>
                  <span className="text-neutral-100">Tipped 1,000 Points! 🪙</span>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-neutral-800">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Send a message..." 
                  className="w-full h-11 bg-neutral-950 border border-neutral-800 rounded-xl pl-4 pr-12 text-sm text-white outline-none focus:border-blue-500"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-blue-500">
                  <Share2 className="w-4 h-4 rotate-90" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
