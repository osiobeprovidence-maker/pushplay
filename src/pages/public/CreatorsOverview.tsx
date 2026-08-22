import React from 'react';
import { Award, Heart, Radio, Sparkles, Users, Zap } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function CreatorsOverview() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="max-w-7xl mx-auto p-6 py-12 md:py-16 w-full">
        <div className="text-blue-500 font-black tracking-widest uppercase text-sm mb-4">
          The Creator Studio
        </div>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
          Your Craft, <br />
          <span className="text-neutral-500">Amplified.</span>
        </h2>
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-12 leading-relaxed">
          We provide the stage; you provide the soul. Push Play is designed to help creators broadcast
          with ease, engage deeply with fans, and monetize influence transparently.
        </p>

        <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
          <ul className="space-y-6">
            <li className="flex items-start gap-4 p-5 rounded-3xl bg-neutral-900/40 border border-neutral-800/50">
              <div className="w-10 h-10 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-white">Instant Broadcasting</div>
                <div className="text-sm text-neutral-500">Go live with zero-latency streaming and high-fidelity audio.</div>
              </div>
            </li>
            <li className="flex items-start gap-4 p-5 rounded-3xl bg-neutral-900/40 border border-neutral-800/50">
              <div className="w-10 h-10 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-white">Direct Fan Engagement</div>
                <div className="text-sm text-neutral-500">Real-time chat, tipping, and reward distribution built-in.</div>
              </div>
            </li>
            <li className="flex items-start gap-4 p-5 rounded-3xl bg-neutral-900/40 border border-neutral-800/50">
              <div className="w-10 h-10 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-white">Transparent Monetization</div>
                <div className="text-sm text-neutral-500">Earn from verified attention and brand sponsorships without the middleman.</div>
              </div>
            </li>
          </ul>

          <div className="relative aspect-square rounded-[40px] overflow-hidden border border-white/10 group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-indigo-900 to-neutral-900" />
            <div className="absolute top-8 right-8 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute bottom-8 left-8 w-40 h-40 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold">JD</div>
                  <div>
                    <div className="font-bold text-white">Jaden Storm</div>
                    <div className="text-xs text-neutral-300">Electronic Artist • 4.2M Points Earned</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <StatCard icon={Users} title="Audience Growth" desc="+15% weekly unique viewers" />
          <StatCard icon={Radio} title="Live Reach" desc="42.5K avg. viewers per stream" />
          <StatCard icon={Sparkles} title="Challenges" desc="12.8k participants per challenge" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Button to="/signup" variant="brand-blue" className="w-full h-14 rounded-2xl text-base">Start Creating</Button>
          <Button to="/login" variant="outline" className="w-full h-14 rounded-2xl text-base">Sign In as Creator</Button>
        </div>
      </section>
    </div>
  );
}

function StatCard({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) {
  return (
    <div className="p-6 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-blue-500/30 transition-colors">
      <Icon className="w-6 h-6 text-blue-500 mb-3" />
      <div className="font-bold text-white">{title}</div>
      <div className="text-sm text-neutral-500">{desc}</div>
    </div>
  );
}
