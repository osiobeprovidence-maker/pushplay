import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, Sparkles, Radio } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function DiscoverOverview() {
  return (
    <div className="max-w-7xl mx-auto p-6 py-12 md:py-16">
      <div className="text-indigo-500 font-black tracking-widest uppercase text-sm mb-4">
        Curated Experience
      </div>
      <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
        Discover What Moves You
      </h2>
      
      <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-12 leading-relaxed">
        A hand-picked selection of high-fidelity audio, cinematic visuals, and interactive challenges 
        designed to captivate your senses. From underground beats to global anthems, spatial audio 
        experiences to creator-led sessions — your next favorite experience is waiting.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <DividingCard 
          icon={Radio} 
          title="Sonic Journeys" 
          desc="From underground beats to global anthems. Discover music with spatial depth and creator-led sessions."
        />
        <DividingCard 
          icon={PlayCircle} 
          title="Visual Stories" 
          desc="Short-form series and long-form narratives that push the boundaries of digital cinematography."
        />
        <DividingCard 
          icon={Sparkles} 
          title="Live Arenas" 
          desc="Participate in real-time challenges, interactive livestreams, and community-driven events."
        />
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Link to="/signup">
          <Button variant="brand" className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-2xl h-14">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Join the Ecosystem
          </Button>
        </Link>
        <Link to="/login">
          <Button variant="outline" className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-2xl h-14">
            Sign In
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="currentColor" d="M16 12l-4 4-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4z"/>
            </svg>
          </Button>
        </Link>
      </div>
    </div>
  );
}

function DividingCard({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) {
  return (
    <div className="p-6 rounded-3xl bg-neutral-900/40 border border-neutral-800/50 hover:border-indigo-500/30 transition-all group">
      <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 mb-5 group-hover:scale-110 transition-transform">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-neutral-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
