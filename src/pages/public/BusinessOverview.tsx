import React from 'react';
import { BarChart3, Briefcase, Globe, Target } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function BusinessOverview() {
  return (
    <div className="flex flex-col">
      <section className="max-w-7xl mx-auto p-6 py-12 md:py-16 w-full">
        <div className="text-indigo-500 font-black tracking-widest uppercase text-sm mb-4">
          The Business Hub
        </div>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
          Precision Marketing. <br />
          <span className="text-neutral-500">Guaranteed Return.</span>
        </h2>
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-12 leading-relaxed">
          Stop guessing. Start growing. Push Play connects your brand with a verified audience through
          interactive campaigns and high-intent engagement.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Feature icon={Target} title="Hyper-Targeting" desc="Reach users based on verified interests, behaviors, and engagement history." />
          <Feature icon={BarChart3} title="Real-Time ROI" desc="Track every Naira spent with granular analytics and conversion data." />
          <Feature icon={Globe} title="Global Scale" desc="Launch local or international campaigns with a single click." />
          <Feature icon={Briefcase} title="Brand Safety" desc="Place your ads alongside premium, verified creator content." />
        </div>

        <div className="p-8 md:p-12 rounded-[40px] bg-gradient-to-br from-indigo-900/40 to-transparent border border-indigo-500/20 flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 text-white">Ready to scale your brand?</h3>
            <p className="text-neutral-400">Join over 500+ businesses already thriving on Push Play.</p>
          </div>
          <Button to="/signup" variant="brand" className="h-14 px-10 rounded-xl whitespace-nowrap">Partner with Us</Button>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 text-center">
            <div className="text-3xl font-black text-white">4.2k</div>
            <div className="text-sm text-neutral-500">Avg. completes per campaign</div>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 text-center">
            <div className="text-3xl font-black text-white">84%</div>
            <div className="text-sm text-neutral-500">Completion rate</div>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 text-center">
            <div className="text-3xl font-black text-white">500+</div>
            <div className="text-sm text-neutral-500">Active brands</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Button to="/signup" variant="brand" className="w-full h-14 rounded-2xl text-base">Create Business Account</Button>
          <Button to="/login" variant="outline" className="w-full h-14 rounded-2xl text-base">Sign In</Button>
        </div>
      </section>
    </div>
  );
}

function Feature({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-3xl bg-neutral-900/40 border border-white/5 hover:border-indigo-500/30 transition-colors">
      <div className="w-16 h-16 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 shadow-xl">
        <Icon className="w-8 h-8 text-indigo-400" />
      </div>
      <h4 className="font-bold text-lg mb-2 text-white">{title}</h4>
      <p className="text-neutral-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
