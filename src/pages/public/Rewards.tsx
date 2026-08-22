import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Heart, Users, ArrowRight, Sparkles, Zap } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function Rewards() {
  return (
    <div className="flex flex-col bg-black text-white selection:bg-indigo-500/30">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="text-indigo-500 font-black tracking-widest uppercase text-sm mb-4">Rewards</div>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter max-w-5xl mb-8 leading-[0.95]">
          EVERY EXPERIENCE, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-indigo-400">NOW REWARDED.</span>
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-neutral-400 max-w-2xl mb-12 leading-relaxed">
          Earn Play Points for every experience you complete — then redeem them for real cash, gift cards, and exclusive perks.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button to="/signup" variant="brand" size="lg" className="h-16 px-10 rounded-2xl group">
            Start Earning
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button to="/signup" variant="secondary" size="lg" className="h-16 px-10 rounded-2xl border-white/10 hover:bg-white/5">
            See Plans
          </Button>
        </div>
      </section>

      {/* How to earn */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-indigo-500 font-black tracking-widest uppercase text-sm mb-4">How You Earn</div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">Points From Every Moment</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <EarnCard icon={Play} title="Watch & Listen" desc="Accumulate points automatically as you enjoy content across Push Play." />
            <EarnCard icon={Heart} title="Engage & React" desc="Liking, gifting, and joining challenges boosts your daily point earnings." />
            <EarnCard icon={Users} title="Refer Friends" desc="Invite your circle and earn a bonus every time they join and stay active." />
          </div>
        </div>
      </section>

      {/* Tiers + conversion */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <TierCard name="Bronze" points="0 – 4,999" perks={['Cash-out from ₦500', 'Standard rewards', 'Community access']} />
            <TierCard name="Silver" points="5,000 – 24,999" perks={['Cash-out from ₦250', 'Early campaign access', 'Monthly bonus points']} highlighted />
            <TierCard name="Gold" points="25,000+" perks={['Zero cash-out minimum', 'VIP gift drops', 'Priority support']} />
          </div>
          <div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-sm text-neutral-500 font-medium">Conversion rate</div>
              <div className="text-2xl font-bold">1,000 Play Points = ₦100</div>
            </div>
            <Button to="/signup" variant="brand" size="lg" className="h-14 px-8 rounded-2xl group">
              Claim Rewards
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-10 text-center">Frequently Asked</h2>
          <div className="space-y-4">
            <Faq q="How do I earn Play Points?" a="Watch content, react, join challenges, and refer friends. Points accrue automatically in your wallet." />
            <Faq q="Can I really cash out?" a="Yes. Silver members cash out from ₦250, Gold from ₦0. Payouts are processed to your linked wallet." />
            <Faq q="Do points expire?" a="Points stay active as long as your account remains in good standing and you engage monthly." />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-neutral-950 text-center">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">START EARNING REWARDS</h2>
        <Button to="/signup" variant="brand" size="lg" className="h-16 px-12 rounded-full group">
          Join Now
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
        <div className="mt-10">
          <Link to="/explore" className="text-sm text-neutral-500 hover:text-white transition-colors">← Back to Discover</Link>
        </div>
      </section>
    </div>
  );
}

function EarnCard({ icon: Icon, title, desc }: any) {
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

function TierCard({ name, points, perks, highlighted }: any) {
  return (
    <div className={`p-8 rounded-[32px] border ${highlighted ? 'border-indigo-500/50 bg-indigo-500/10' : 'border-white/5 bg-neutral-900/40'}`}>
      <div className="text-sm font-bold tracking-widest uppercase text-neutral-500">{name}</div>
      <div className="text-2xl font-black text-white mb-4">{points}</div>
      <ul className="space-y-3">
        {perks.map((p: string, i: number) => (
          <li key={i} className="flex items-start gap-2 text-sm text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Faq({ q, a }: any) {
  return (
    <div className="p-6 rounded-3xl bg-neutral-900/40 border border-white/5">
      <div className="font-bold text-white mb-2">{q}</div>
      <div className="text-sm text-neutral-500 leading-relaxed">{a}</div>
    </div>
  );
}
