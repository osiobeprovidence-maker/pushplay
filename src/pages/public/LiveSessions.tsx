import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Radio, Users, Gift, Heart, Sparkles, ArrowRight, Zap } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function LiveSessions() {
  const chat = [
    { u: 'Nova', m: 'this beat is insane 🔥' },
    { u: 'Kai', m: 'first time here, love it' },
    { u: 'Mira', m: 'when is the next drop?' },
    { u: 'Leo', m: 'gifting 50 points 🎁' },
    { u: 'Zoe', m: 'let’s goooo' },
  ];
  return (
    <div className="flex flex-col bg-black text-white selection:bg-indigo-500/30">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="text-indigo-500 font-black tracking-widest uppercase text-sm mb-4">Live Sessions</div>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter max-w-5xl mb-8 leading-[0.95]">
          STEP INTO THE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-indigo-400">LIVE ARENAS.</span>
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-neutral-400 max-w-2xl mb-12 leading-relaxed">
          Real-time streams, interactive challenges, and community events you can join the moment they go live.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button to="/signup" variant="brand" size="lg" className="h-16 px-10 rounded-2xl group">
            Explore Live Sessions
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button to="/signup" variant="secondary" size="lg" className="h-16 px-10 rounded-2xl border-white/10 hover:bg-white/5">
            Start Your Own Stream
          </Button>
        </div>
      </section>

      {/* Live Demo */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-indigo-500 font-black tracking-widest uppercase text-sm mb-4">Live Demo</div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">See It In Action</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 relative aspect-video rounded-3xl overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-neutral-900/20 to-black" />
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-600 text-white text-xs font-bold tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                Live
              </div>
              <div className="absolute bottom-4 left-4 text-sm text-neutral-300 font-medium bg-black/40 backdrop-blur px-3 py-1.5 rounded-full">
                12,480 watching
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur flex items-center justify-center border border-white/20">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur text-xs text-neutral-300">
                PushPlay Arenas
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-6 flex flex-col">
              <div className="text-sm font-bold tracking-widest uppercase text-neutral-500 mb-4">Live Chat</div>
              <div className="space-y-3 flex-1 max-h-64 overflow-y-auto">
                {chat.map((c, i) => (
                  <div key={i} className="text-sm">
                    <span className="font-semibold text-indigo-400">{c.u}</span>
                    <span className="text-neutral-400"> {c.m}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 text-neutral-600 text-xs">
                Chat is a demo placeholder.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <FeatureCard icon={Radio} title="Real-Time Streaming" desc="Zero-latency broadcasts with high-fidelity audio and crisp visuals." />
          <FeatureCard icon={Users} title="Community Challenges" desc="Drop into interactive games and events with viewers worldwide." />
          <FeatureCard icon={Gift} title="Tips & Gifts" desc="Support creators live with points, gifts, and instant reactions." />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-neutral-950 text-center">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">READY TO GO LIVE?</h2>
        <Button to="/signup" variant="brand" size="lg" className="h-16 px-12 rounded-full group">
          Get Started
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
        <div className="mt-10">
          <Link to="/explore" className="text-sm text-neutral-500 hover:text-white transition-colors">← Back to Discover</Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, desc }: any) {
  return (
    <div className="p-8 rounded-[32px] bg-neutral-900/40 border border-white/5 hover:border-indigo-500/50 transition-all group">
      <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 mb-6 group-hover:scale-110 transition-transform">
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-neutral-500 leading-relaxed text-sm">{desc}</p>
    </div>
  );
}
