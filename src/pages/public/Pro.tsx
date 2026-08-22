import React from 'react';
import {
  Play, ArrowRight, Sparkles, Gift, Star, Zap, Compass, Ticket,
  Radio, Calendar, TrendingUp, ShieldCheck, History, Crown, CheckCircle,
  Hand, Users, Coins
} from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function Pro() {
  return (
    <div className="flex flex-col bg-black text-white selection:bg-indigo-500/30">
      <Hero />
      <WhyPro />
      <CompareFreePro />
      <ProExperience />
      <Plans />
      <EarningConnection />
      <TransparentValue />
      <FaqSection />
      <FinalCTA />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative pt-24 pb-16 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[520px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="relative max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest uppercase mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Crown className="w-4 h-4 text-indigo-400" />
          Push Play Pro
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          PLAY MORE.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-indigo-400 animate-gradient-x">UNLOCK MORE.</span>
          <br />
          EARN MORE.
        </h1>

        <p className="text-base md:text-lg lg:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000">
          Push Play Pro gives active members more ways to experience the platform — with expanded reward opportunities, higher participation limits, exclusive access and a smoother way to play.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-150">
          <Button to="/signup" variant="brand" size="lg" className="h-16 px-10 rounded-2xl group">
            Explore Pro Membership
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button to="#compare" variant="secondary" size="lg" className="h-16 px-10 rounded-2xl border-white/10 hover:bg-white/5">
            Compare Free & Pro
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-neutral-500 font-medium animate-in fade-in duration-1000 delay-300">
          <span>More access</span><span className="text-neutral-700">·</span>
          <span>More opportunities</span><span className="text-neutral-700">·</span>
          <span>More ways to play</span>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto mt-16 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
        <ProDashboard />
      </div>
    </section>
  );
}

function ProDashboard() {
  const opportunities = [
    { icon: Ticket, label: 'Pro campaign: Weekend Listen', tag: 'Pro Access' },
    { icon: Sparkles, label: 'Creator drop: Midnight Set', tag: 'Exclusive' },
    { icon: Radio, label: 'Pro live session: Studio Talk', tag: 'Pro Event' },
  ];
  return (
    <div className="rounded-3xl border border-white/10 bg-neutral-900/50 overflow-hidden">
      <div className="p-6 md:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xs text-neutral-500 font-medium">Membership Status</div>
              <div className="font-bold tracking-wide">PRO MEMBER</div>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div>
              <div className="text-xs text-neutral-500 font-medium">Play Points</div>
              <div className="text-2xl font-black">8,240 <span className="text-sm text-neutral-500 font-medium">PP</span></div>
            </div>
            <div>
              <div className="text-xs text-neutral-500 font-medium">Reward Opps</div>
              <div className="text-2xl font-black text-indigo-400">12</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div>
            <div className="text-xs font-bold tracking-widest uppercase text-neutral-500 mb-3">Exclusive Experiences</div>
            <div className="space-y-3">
              {opportunities.map((o, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                    <o.icon className="w-4 h-4" />
                  </div>
                  <div className="text-sm text-neutral-300 flex-1 truncate">{o.label}</div>
                  <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-full bg-indigo-500/15 text-indigo-300">{o.tag}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs font-bold tracking-widest uppercase text-neutral-500 mb-3">Progress</div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm text-neutral-300 mb-1"><span>Active campaigns</span><span className="text-neutral-500">6 / 8</span></div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden"><div className="h-full w-[75%] bg-gradient-to-r from-indigo-500 to-blue-400 rounded-full" /></div>
              </div>
              <div>
                <div className="flex justify-between text-sm text-neutral-300 mb-1"><span>Weekly goal</span><span className="text-neutral-500">820 / 1,000 pts</span></div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden"><div className="h-full w-[82%] bg-indigo-500/70 rounded-full" /></div>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {['Reduced interruptions', 'Pro badge', 'Early access'].map((b) => (
                  <span key={b} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300">{b}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function WhyPro() {
  const cards = [
    { icon: Gift, title: 'MORE REWARD OPPORTUNITIES', desc: 'Get access to additional eligible activities, campaigns and bonus opportunities available to Pro members.' },
    { icon: TrendingUp, title: 'HIGHER PARTICIPATION LIMITS', desc: 'Unlock higher limits across eligible reward activities and experiences.' },
    { icon: Sparkles, title: 'EXCLUSIVE EXPERIENCES', desc: 'Get access to selected creator drops, special events and Pro-only experiences.' },
    { icon: Zap, title: 'A BETTER WAY TO PLAY', desc: 'Enjoy a smoother Push Play experience with reduced interruptions and premium member benefits.' },
  ];
  return (
    <section className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <div className="text-indigo-500 font-black tracking-widest uppercase text-sm mb-4">Why Push Play Pro?</div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.05]">
            YOUR TIME ON PUSH PLAY<br />
            <span className="text-neutral-500">CAN TAKE YOU FURTHER.</span>
          </h2>
        </div>
        <p className="text-neutral-400 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
          Free members can discover, watch and participate. Pro members unlock additional ways to experience the platform and access more opportunities designed for active users.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="group p-7 rounded-3xl bg-neutral-900/40 border border-white/5 hover:border-indigo-500/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 mb-5 group-hover:scale-110 transition-transform">
                <c.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold tracking-wide mb-2 text-sm">{c.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CompareFreePro() {
  const free = [
    'Discover content and experiences',
    'Join available live sessions',
    'Participate in eligible activities',
    'Earn Play Points from qualifying opportunities',
    'Access standard rewards',
  ];
  const pro = [
    'Expanded eligible reward opportunities',
    'Higher participation limits',
    'Access to selected exclusive campaigns',
    'Pro-only creator drops',
    'Premium experiences',
    'Reduced interruptions',
    'Priority access to selected new features',
  ];
  return (
    <section id="compare" className="py-20 px-6 border-t border-white/5 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-indigo-500 font-black tracking-widest uppercase text-sm mb-4">Play Your Way</div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.05]">
            START FREE.<br />
            <span className="text-neutral-500">UPGRADE WHEN YOU WANT MORE.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl border border-white/5 bg-neutral-900/40">
            <div className="text-sm font-bold tracking-widest uppercase text-neutral-500 mb-1">Push Play Free</div>
            <p className="text-neutral-400 text-sm mb-6">For anyone who wants to explore and participate.</p>
            <ul className="space-y-3 mb-8">
              {free.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-neutral-300">
                  <CheckCircle className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />{f}
                </li>
              ))}
            </ul>
            <Button to="/signup" variant="secondary" className="w-full h-12 rounded-2xl border-white/10 hover:bg-white/5">Start for Free</Button>
          </div>

          <div className="relative p-8 rounded-3xl border border-indigo-500/50 bg-indigo-500/10">
            <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-indigo-500 text-white text-xs font-bold tracking-widest uppercase">Recommended</div>
            <div className="text-sm font-bold tracking-widest uppercase text-indigo-300 mb-1">Push Play Pro</div>
            <p className="text-neutral-300 text-sm mb-6">For active members who want more access and opportunities.</p>
            <ul className="space-y-3 mb-8">
              {pro.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-neutral-200">
                  <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />{f}
                </li>
              ))}
            </ul>
            <Button to="/signup" variant="brand" className="w-full h-12 rounded-2xl group">
              Go Pro <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        <p className="text-center text-xs text-neutral-600 mt-8">
          Pro may provide higher limits or access to additional eligible opportunities. It does not guarantee earnings.
        </p>
      </div>
    </section>
  );
}
function ProExperience() {
  const items = [
    { icon: Ticket, title: 'PRO CAMPAIGNS', desc: 'Access selected activities and campaigns available specifically to Pro members.', tag: 'Pro Access' },
    { icon: Sparkles, title: 'BONUS CHALLENGES', desc: 'Take part in additional eligible challenges and reward opportunities.', tag: 'Bonus Opportunity' },
    { icon: Gift, title: 'CREATOR DROPS', desc: 'Get earlier or exclusive access to selected creator experiences and drops.', tag: 'Exclusive' },
    { icon: Calendar, title: 'MEMBER EVENTS', desc: 'Join selected live sessions and community experiences designed for Pro members.', tag: 'Pro Event' },
  ];
  return (
    <section className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-indigo-500 font-black tracking-widest uppercase text-sm mb-4">More To Explore</div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.05]">
            ONE MEMBERSHIP.<br />
            <span className="text-neutral-500">MORE WAYS TO PLAY.</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group p-7 rounded-3xl bg-neutral-900/40 border border-white/5 hover:border-indigo-500/40 transition-colors">
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 group-hover:scale-110 transition-transform">
                  <it.icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-full bg-indigo-500/15 text-indigo-300">{it.tag}</span>
              </div>
              <h3 className="font-bold tracking-wide mb-2 text-sm">{it.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Plans() {
  const plans = [
    { name: 'WEEKLY', price: '₦500', period: '/ week', note: 'Best for trying the Pro experience.', features: ['Premium Push Play experience', 'Access to Pro features', 'Additional eligible opportunities', 'Pro member access'], cta: 'Try Pro Weekly', popular: false },
    { name: 'MONTHLY', price: '₦1,800', period: '/ month', note: 'Recommended for active Push Play users.', features: ['Everything in Weekly', 'Higher eligible participation limits', 'Access to selected Pro opportunities', 'Pro member badge'], cta: 'Go Pro Monthly', popular: true },
    { name: 'QUARTERLY', price: '₦4,800', period: '/ 3 months', note: 'For members who want more value.', features: ['Everything in Monthly', 'Priority access to selected opportunities', 'Exclusive drops', 'Additional Pro benefits'], cta: 'Choose Quarterly', popular: false },
    { name: 'YEARLY', price: '₦16,000', period: '/ year', note: 'The best value for long-term members.', features: ['Full Pro access', 'Exclusive member experiences', 'Priority access', 'Special reward opportunities'], cta: 'Go Pro Yearly', popular: false },
  ];
  return (
    <section className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-indigo-500 font-black tracking-widest uppercase text-sm mb-4">Membership Plans</div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">CHOOSE HOW YOU GO PRO.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`relative p-8 rounded-3xl border flex flex-col ${p.popular ? 'border-indigo-500/50 bg-indigo-500/10' : 'border-white/5 bg-neutral-900/40'}`}>
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-indigo-500 text-white text-xs font-bold tracking-widest uppercase">
                  Most Popular
                </div>
              )}
              <div className="text-sm font-bold tracking-widest uppercase text-neutral-500">{p.name}</div>
              <div className="text-3xl font-black mt-2 mb-1">{p.price}<span className="text-base font-medium text-neutral-500">{p.period}</span></div>
              <p className="text-xs text-neutral-500 mb-5">{p.note}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-300">
                    <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />{f}
                  </li>
                ))}
              </ul>
              <Button to="/signup" variant={p.popular ? 'brand' : 'secondary'} className="w-full h-12 rounded-2xl group">
                {p.cta} {p.popular && <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function EarningConnection() {
  const flow = [
    { n: '01', title: 'DISCOVER', desc: 'Find experiences and eligible activities.' },
    { n: '02', title: 'PARTICIPATE', desc: 'Watch, engage, complete challenges and join campaigns.' },
    { n: '03', title: 'UNLOCK', desc: 'Build your Play Points and access more opportunities.' },
    { n: '04', title: 'GO FURTHER WITH PRO', desc: 'Unlock additional eligible experiences and member benefits.' },
  ];
  return (
    <section className="py-20 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-indigo-500 font-black tracking-widest uppercase text-sm mb-4">More Than Entertainment</div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.05]">
            THE MORE YOU PARTICIPATE,<br />
            <span className="text-neutral-500">THE MORE YOU CAN UNLOCK.</span>
          </h2>
        </div>
        <p className="text-neutral-400 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
          Push Play Pro is designed for members who want to explore more of what the platform offers. Depending on available campaigns and your account eligibility, Pro membership can unlock additional activities, higher participation limits and exclusive opportunities.
        </p>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-indigo-500/40 via-white/10 to-transparent hidden md:block" />
          <div className="space-y-6 md:space-y-10">
            {flow.map((s, i) => (
              <div key={s.n} className={`relative flex flex-col md:flex-row md:items-center gap-5 ${i % 2 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`hidden md:flex w-16 h-16 shrink-0 rounded-full bg-neutral-900 border border-white/10 items-center justify-center text-xl font-black text-indigo-400 z-10`}>{s.n}</div>
                <div className="flex md:hidden w-12 h-12 shrink-0 rounded-full bg-neutral-900 border border-white/10 items-center justify-center text-lg font-black text-indigo-400">{s.n}</div>
                <div className="flex-1 p-6 rounded-3xl bg-neutral-900/40 border border-white/5 hover:border-indigo-500/40 transition-colors">
                  <h3 className="font-bold tracking-wide mb-2">{s.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-center text-xs text-neutral-600 mt-10">
          Rewards and earning opportunities vary by activity, campaign availability, eligibility and account status. Pro membership does not guarantee earnings.
        </p>
      </div>
    </section>
  );
}

function TransparentValue() {
  const activities = [
    { icon: Ticket, label: 'Pro campaign available', status: 'New' },
    { icon: Sparkles, label: 'Creator drop unlocked', status: 'Exclusive' },
    { icon: Radio, label: 'Pro live session', status: 'Tonight' },
  ];
  return (
    <section className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-indigo-500 font-black tracking-widest uppercase text-sm mb-4">Know What You're Getting</div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-[1.05]">
            PRO IS ABOUT ACCESS.<br />
            <span className="text-neutral-500">WHAT YOU DO WITH IT IS UP TO YOU.</span>
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed mb-6">
            Your Push Play dashboard shows your membership benefits, eligible activities, Play Points and available opportunities in one place.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { icon: ShieldCheck, label: 'Clear benefits' },
              { icon: History, label: 'Activity history' },
              { icon: Coins, label: 'Points visible' },
            ].map((f) => (
              <div key={f.label} className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-300">
                <f.icon className="w-4 h-4 text-indigo-400" />{f.label}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-neutral-900/50 p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center">
                <Crown className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-neutral-500 font-medium">Membership Status</div>
                <div className="font-bold tracking-wide text-indigo-300">PRO</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-neutral-500 font-medium">Play Points</div>
              <div className="text-2xl font-black">8,240 <span className="text-sm text-neutral-500 font-medium">PP</span></div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 mb-5">
            {[['Available', '12'], ['Completed', '34'], ['New Pro', '5']].map((s, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className="text-xl font-black">{s[1]}</div>
                <div className="text-[10px] uppercase tracking-wide text-neutral-500">{s[0]}</div>
              </div>
            ))}
          </div>
          <div className="text-xs font-bold tracking-widest uppercase text-neutral-500 mb-3">Available Activities</div>
          <div className="space-y-3">
            {activities.map((a, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0"><a.icon className="w-4 h-4" /></div>
                <div className="text-sm text-neutral-300 flex-1">{a.label}</div>
                <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-full bg-indigo-500/15 text-indigo-300">{a.status}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-sm text-neutral-300">Rewards available</span>
            <span className="text-sm font-semibold text-indigo-400">6 active</span>
          </div>
        </div>
      </div>
    </section>
  );
}
function FaqSection() {
  const faqs = [
    { q: 'Do I need Pro to earn on Push Play?', a: 'No. Free members can participate in eligible activities and earn Play Points where rewards are available. Pro gives members access to additional eligible opportunities and benefits.' },
    { q: 'Does Pro guarantee that I will make money?', a: 'No. Rewards depend on eligible activities, campaign availability, participation and account eligibility. Pro membership provides additional access and opportunities but does not guarantee earnings.' },
    { q: 'What extra opportunities do Pro members get?', a: 'Depending on availability, Pro members may receive access to additional campaigns, challenges, creator drops, exclusive experiences and higher participation limits.' },
    { q: 'Can I cancel my membership?', a: 'Yes. Membership management and cancellation should be available from the user’s account settings according to the applicable billing terms.' },
    { q: 'Can I start with the free version?', a: 'Yes. Users can join Push Play for free and upgrade to Pro whenever they want additional benefits and access.' },
  ];
  return (
    <section className="py-20 px-6 border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-10 text-center">QUESTIONS, ANSWERED.</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="p-6 rounded-3xl bg-neutral-900/40 border border-white/5">
              <div className="font-bold text-white mb-2">{f.q}</div>
              <div className="text-sm text-neutral-500 leading-relaxed">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative py-28 px-6 border-t border-white/5 overflow-hidden text-center">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[340px] md:h-[440px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="relative max-w-3xl mx-auto">
        <div className="text-indigo-500 font-black tracking-widest uppercase text-sm mb-4">Ready To Get More From Push Play?</div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-[0.95]">
          DON'T JUST BE ON THE PLATFORM.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-indigo-400">UNLOCK MORE OF IT.</span>
        </h2>
        <p className="text-neutral-400 text-lg mb-10 leading-relaxed">
          Join Push Play for free and explore the platform. Upgrade to Pro when you're ready for more access, more experiences and more opportunities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button to="/signup" variant="brand" size="lg" className="h-16 px-10 rounded-2xl group">
            Start Free
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button to="#compare" variant="secondary" size="lg" className="h-16 px-10 rounded-2xl border-white/10 hover:bg-white/5">
            Explore Push Play Pro
          </Button>
        </div>
        <p className="mt-6 text-sm text-neutral-500">
          No income promises. Just more ways to participate, unlock and explore.
        </p>
      </div>
    </section>
  );
}
