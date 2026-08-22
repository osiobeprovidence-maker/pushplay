import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Sparkles, Zap } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function Pro() {
  const included = [
    'Ad-free playback across the entire app',
    'Up to 5× Play Points earnings',
    'Exclusive creator drops & gift events',
    'Pro badge on your profile',
    'Priority customer support',
    'Early access to new features',
  ];
  return (
    <div className="flex flex-col bg-black text-white selection:bg-indigo-500/30">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="text-indigo-500 font-black tracking-widest uppercase text-sm mb-4">Push Play Pro</div>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter max-w-5xl mb-8 leading-[0.95]">
          GO PRO. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-indigo-400">UNLOCK EVERYTHING.</span>
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-neutral-400 max-w-2xl mb-12 leading-relaxed">
          A premium membership for the ultimate experience — ad-free playback, higher earning caps, and exclusive creator drops.
        </p>
        <Button to="/signup" variant="brand" size="lg" className="h-16 px-12 rounded-2xl group">
          Upgrade to Pro
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </section>

      {/* Plans */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-indigo-500 font-black tracking-widest uppercase text-sm mb-4">Plans</div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">Choose Your Membership</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PlanCard name="Weekly" price="₦500" period="/ week" features={['Ad-free playback', '2× point earnings']} />
            <PlanCard name="Monthly" price="₦1,800" period="/ month" features={['Everything in Weekly', '5× point cap', 'Pro badge']} highlighted />
            <PlanCard name="Quarterly" price="₦4,800" period="/ 3 months" features={['Best value', 'Exclusive drops', 'Priority support']} />
            <PlanCard name="Yearly" price="₦16,000" period="/ year" features={['Max savings', 'VIP gift drops', 'Early access']} />
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-10 text-center">What's Included</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {included.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-5 rounded-3xl bg-neutral-900/40 border border-white/5">
                <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-indigo-500" />
                </div>
                <div className="text-sm text-neutral-300">{f}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-10 text-center">Free vs Pro</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-white/10 rounded-3xl overflow-hidden">
              <thead>
                <tr className="bg-neutral-900/60">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4 font-semibold">Free</th>
                  <th className="text-center p-4 font-semibold text-indigo-400">Pro</th>
                </tr>
              </thead>
              <tbody>
                <Row feature="Ad-free playback" free="—" pro="✓" />
                <Row feature="Point earning cap" free="1×" pro="5×" />
                <Row feature="Exclusive drops" free="—" pro="✓" />
                <Row feature="Priority support" free="—" pro="✓" />
                <Row feature="Pro badge" free="—" pro="✓" />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-neutral-950 text-center">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">UNLOCK THE FULL EXPERIENCE</h2>
        <Button to="/signup" variant="brand" size="lg" className="h-16 px-12 rounded-full group">
          Upgrade Now
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
        <div className="mt-10">
          <Link to="/explore" className="text-sm text-neutral-500 hover:text-white transition-colors">← Back to Discover</Link>
        </div>
      </section>
    </div>
  );
}

function PlanCard({ name, price, period, features, highlighted }: any) {
  return (
    <div className={`p-8 rounded-[32px] border flex flex-col ${highlighted ? 'border-white/40 bg-white/5' : 'border-white/5 bg-neutral-900/40'}`}>
      <div className="text-sm font-bold tracking-widest uppercase text-neutral-500 mb-4">{name}</div>
      <div className="text-3xl font-black text-white mb-1">{price}<span className="text-base font-medium text-neutral-500">{period}</span></div>
      <ul className="space-y-3 mt-6 mb-8 flex-1">
        {features.map((f: string, i: number) => (
          <li key={i} className="flex items-start gap-2 text-sm text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <Button to="/signup" variant={highlighted ? 'white' : 'secondary'} className="w-full h-12 rounded-2xl">
        Choose {name}
      </Button>
    </div>
  );
}

function Row({ feature, free, pro }: any) {
  return (
    <tr className="border-t border-white/5">
      <td className="p-4 text-neutral-300">{feature}</td>
      <td className="p-4 text-center text-neutral-500">{free}</td>
      <td className="p-4 text-center text-indigo-400 font-semibold">{pro}</td>
    </tr>
  );
}
