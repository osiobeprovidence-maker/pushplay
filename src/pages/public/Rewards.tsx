import React from 'react';
import {
  Play, Heart, Users, ArrowRight, Sparkles, Gift, Wallet, Coins,
  TrendingUp, Clock, History, CheckCircle, Compass, Ticket,
  Radio, Hand, ShieldCheck, MessageCircle, Star, UserPlus
} from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function Rewards() {
  return (
    <div className="flex flex-col bg-black text-white selection:bg-indigo-500/30">
      <Hero />
      <WhyExists />
      <HowYouEarn />
      <RewardJourney />
      <Levels />
      <WaysToPlay />
      <CashAndPerks />
      <Trust />
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
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
          Push Play Rewards
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          YOUR TIME ONLINE
          <br />
          SHOULD <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-indigo-400 animate-gradient-x">COUNT FOR SOMETHING.</span>
        </h1>

        <p className="text-base md:text-lg lg:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000">
          You're already watching, listening, reacting and joining conversations online. Push Play gives eligible engagement a chance to earn Play Points that can unlock rewards, perks and available cash-out options.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-150">
          <Button to="/signup" variant="brand" size="lg" className="h-16 px-10 rounded-2xl group">
            Start Earning
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button to="#how" variant="secondary" size="lg" className="h-16 px-10 rounded-2xl border-white/10 hover:bg-white/5">
            See How Rewards Work
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-neutral-500 font-medium animate-in fade-in duration-1000 delay-300">
          <span>Watch</span><span className="text-neutral-700">·</span>
          <span>Engage</span><span className="text-neutral-700">·</span>
          <span>Participate</span><span className="text-neutral-700">·</span>
          <span>Earn Play Points</span>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto mt-16 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
        <WalletCard />
      </div>
    </section>
  );
}

function WalletCard() {
  const activity = [
    { icon: Play, label: 'Watched an eligible creator campaign', pts: '+40', c: 'text-emerald-400' },
    { icon: Radio, label: 'Joined a live community session', pts: '+120', c: 'text-emerald-400' },
    { icon: Hand, label: 'Completed a brand challenge', pts: '+85', c: 'text-emerald-400' },
  ];
  const sources = [
    { label: 'Watch & Discover', value: 42 },
    { label: 'Engage & React', value: 31 },
    { label: 'Challenges', value: 19 },
    { label: 'Referrals', value: 8 },
  ];
  return (
    <div className="rounded-3xl border border-white/10 bg-neutral-900/50 overflow-hidden">
      <div className="p-6 md:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-sm text-neutral-500 font-medium">
              <Wallet className="w-4 h-4 text-indigo-400" /> Play Points Balance
            </div>
            <div className="text-4xl md:text-5xl font-black mt-1">8,240 <span className="text-lg text-neutral-500 font-medium">PP</span></div>
            <div className="flex items-center gap-1 text-xs text-emerald-400 mt-1">
              <TrendingUp className="w-3.5 h-3.5" /> +245 this week
            </div>
          </div>
          <div className="sm:w-64">
            <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
              <span>Progress to Silver</span>
              <span>1,760 to go</span>
            </div>
            <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-[78%] bg-gradient-to-r from-indigo-500 to-blue-400 rounded-full" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div>
            <div className="text-xs font-bold tracking-widest uppercase text-neutral-500 mb-3">Recent Activity</div>
            <div className="space-y-3">
              {activity.map((a, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                    <a.icon className="w-4 h-4" />
                  </div>
                  <div className="text-sm text-neutral-300 flex-1 truncate">{a.label}</div>
                  <div className={`text-sm font-semibold ${a.c}`}>{a.pts}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-bold tracking-widest uppercase text-neutral-500 mb-3">Points From Experiences</div>
            <div className="space-y-3">
              {sources.map((s) => (
                <div key={s.label}>
                  <div className="flex items-center justify-between text-sm text-neutral-300 mb-1">
                    <span>{s.label}</span>
                    <span className="text-neutral-500">{s.value}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-indigo-500/70 rounded-full" style={{ width: `${s.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-5">
              {['Gift cards', 'Cash-out', 'Drops', 'Perks'].map((r) => (
                <span key={r} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300">
                  <Gift className="w-3.5 h-3.5 inline mr-1 text-indigo-400" />{r}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function WhyExists() {
  const stats = [
    { icon: Compass, title: 'WATCH', desc: 'Discover content and eligible experiences.' },
    { icon: MessageCircle, title: 'ENGAGE', desc: 'React, participate and join the conversation.' },
    { icon: TrendingUp, title: 'PROGRESS', desc: 'Build your Play Points through eligible activity.' },
    { icon: Sparkles, title: 'UNLOCK', desc: 'Access rewards, perks and available cash-out opportunities.' },
  ];
  return (
    <section className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <div className="text-indigo-500 font-black tracking-widest uppercase text-sm mb-4">Your Attention Has Value</div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.05]">
            YOU'RE ALREADY ENGAGING.<br />
            <span className="text-neutral-500">NOW IT CAN TAKE YOU FURTHER.</span>
          </h2>
        </div>
        <p className="text-neutral-400 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
          Every day, people spend time discovering content, joining conversations and supporting the things they enjoy. Push Play is building a better way for audiences to be recognized for meaningful participation.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.title} className="p-7 rounded-3xl bg-neutral-900/40 border border-white/5 hover:border-indigo-500/40 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                  <s.icon className="w-6 h-6" />
                </div>
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
              </div>
              <h3 className="font-bold tracking-wide mb-2">{s.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowYouEarn() {
  const cards = [
    { icon: Compass, title: 'DISCOVER', desc: 'Explore eligible videos, music, live sessions and experiences across Push Play.', sub: "Your journey starts by finding experiences you actually want to be part of." },
    { icon: Hand, title: 'PARTICIPATE', desc: 'Earn Play Points from eligible engagement.', sub: 'Watch, listen, react, vote or take part in activities where rewards are available.' },
    { icon: Ticket, title: 'COMPLETE CHALLENGES', desc: 'Take part in campaigns and community challenges.', sub: 'Some experiences offer additional opportunities to earn when you complete specific activities.' },
    { icon: UserPlus, title: 'GROW YOUR COMMUNITY', desc: 'Invite friends and build your Push Play network.', sub: 'Eligible referral and community programs can unlock additional rewards.' },
  ];
  return (
    <section id="how" className="py-20 px-6 border-t border-white/5 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-indigo-500 font-black tracking-widest uppercase text-sm mb-4">How It Works</div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">PLAY. ENGAGE. GET REWARDED.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="group p-8 rounded-3xl bg-neutral-900/40 border border-white/5 hover:border-indigo-500/40 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 mb-6 group-hover:scale-110 transition-transform">
                <c.icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold tracking-wide mb-2">{c.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-3">{c.desc}</p>
              <p className="text-xs text-neutral-600 leading-relaxed">{c.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function RewardJourney() {
  const steps = [
    { n: '01', title: 'START PLAYING', desc: 'Join Push Play and begin participating in available experiences.' },
    { n: '02', title: 'EARN PLAY POINTS', desc: 'Collect points from eligible activities, campaigns and challenges.' },
    { n: '03', title: 'UNLOCK MORE', desc: 'Gain access to additional reward opportunities, experiences and member perks.' },
    { n: '04', title: 'CLAIM YOUR REWARDS', desc: 'Use your Play Points according to the available reward options in your account.' },
  ];
  return (
    <section className="py-20 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-indigo-500 font-black tracking-widest uppercase text-sm mb-4">Build Your Play</div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.05]">
            THE MORE YOU PARTICIPATE,<br />
            <span className="text-neutral-500">THE MORE YOU CAN UNLOCK.</span>
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-indigo-500/40 via-white/10 to-transparent hidden md:block" />
          <div className="space-y-6 md:space-y-10">
            {steps.map((s, i) => (
              <div key={s.n} className={`relative flex flex-col md:flex-row md:items-center gap-5 ${i % 2 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:flex w-16 h-16 shrink-0 rounded-full bg-neutral-900 border border-white/10 items-center justify-center text-xl font-black text-indigo-400 z-10">
                  {s.n}
                </div>
                <div className="flex md:hidden w-12 h-12 shrink-0 rounded-full bg-neutral-900 border border-white/10 items-center justify-center text-lg font-black text-indigo-400">
                  {s.n}
                </div>
                <div className="flex-1 p-6 rounded-3xl bg-neutral-900/40 border border-white/5 hover:border-indigo-500/40 transition-colors">
                  <h3 className="font-bold tracking-wide mb-2">{s.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Levels() {
  const tiers = [
    {
      name: 'BRONZE', tag: 'Your starting point.', highlighted: false,
      desc: 'Begin earning Play Points and accessing the Push Play community.',
      perks: ['Access to available reward activities', 'Standard reward opportunities', 'Community participation', 'Progress tracking'],
    },
    {
      name: 'SILVER', tag: 'More ways to participate.', highlighted: true,
      desc: 'Stay active and unlock additional opportunities.',
      perks: ['Expanded reward opportunities', 'Early access to selected campaigns', 'Bonus point opportunities', 'Enhanced community access'],
    },
    {
      name: 'GOLD', tag: 'For your most active participation.', highlighted: false,
      desc: 'Unlock the highest available member benefits.',
      perks: ['Priority access to selected opportunities', 'Exclusive reward drops', 'Premium community benefits', 'Enhanced support options'],
    },
  ];
  return (
    <section className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-indigo-500 font-black tracking-widest uppercase text-sm mb-4">Reward Levels</div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">LEVELS THAT GROW WITH YOU.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`p-8 rounded-3xl border flex flex-col ${t.highlighted ? 'border-indigo-500/50 bg-indigo-500/10' : 'border-white/5 bg-neutral-900/40'}`}>
              <div className="text-sm font-bold tracking-widest uppercase text-neutral-500">{t.name}</div>
              <div className="text-neutral-300 mt-2 mb-4 text-sm italic">{t.tag}</div>
              <p className="text-sm text-neutral-400 leading-relaxed mb-6">{t.desc}</p>
              <ul className="space-y-3 mt-auto">
                {t.perks.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-300">
                    <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function WaysToPlay() {
  const items = [
    { icon: Play, title: 'WATCH & DISCOVER', desc: 'Explore an eligible creator campaign.', reward: 'Reward: + Play Points' },
    { icon: Radio, title: 'JOIN A LIVE CHALLENGE', desc: 'Participate in a live community experience.', reward: 'Reward: Challenge bonus' },
    { icon: Ticket, title: 'COMPLETE A CAMPAIGN', desc: 'Finish an available sponsored activity.', reward: 'Reward: Campaign reward' },
    { icon: UserPlus, title: 'INVITE A FRIEND', desc: 'Bring someone new into the Push Play community.', reward: 'Reward: Eligible referral bonus' },
  ];
  return (
    <section className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-indigo-500 font-black tracking-widest uppercase text-sm mb-4">Ways To Play</div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">THERE'S MORE THAN ONE WAY TO EARN.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group p-7 rounded-3xl bg-neutral-900/40 border border-white/5 hover:border-indigo-500/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 mb-5 group-hover:scale-110 transition-transform">
                <it.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold tracking-wide mb-2 text-sm">{it.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed mb-4">{it.desc}</p>
              <div className="text-xs font-semibold text-indigo-400">{it.reward}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-neutral-600 mt-8">
          Available rewards and activities may vary based on campaigns, eligibility and account status.
        </p>
      </div>
    </section>
  );
}

function CashAndPerks() {
  const uses = [
    { icon: Coins, label: 'Cash-out opportunities' },
    { icon: Gift, label: 'Gift cards' },
    { icon: Sparkles, label: 'Exclusive drops' },
    { icon: Star, label: 'Premium platform perks' },
    { icon: Ticket, label: 'Campaign rewards' },
    { icon: Users, label: 'Special community experiences' },
  ];
  return (
    <section className="py-20 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto text-center">
        <div className="text-indigo-500 font-black tracking-widest uppercase text-sm mb-4">Your Points. Your Options.</div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">TURN PARTICIPATION INTO VALUE.</h2>
        <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          Depending on available reward programs and your account eligibility, Play Points can be used to access:
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {uses.map((u) => (
            <div key={u.label} className="flex items-center gap-3 p-5 rounded-3xl bg-neutral-900/40 border border-white/5 hover:border-indigo-500/30 transition-colors text-left">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                <u.icon className="w-5 h-5" />
              </div>
              <span className="text-sm text-neutral-300">{u.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function Trust() {
  const history = [
    { date: 'Today', label: 'Live session participation', pts: '+120' },
    { date: 'Yesterday', label: 'Creator campaign completed', pts: '+60' },
    { date: 'Mar 12', label: 'Referral bonus (eligible)', pts: '+200' },
    { date: 'Mar 10', label: 'Challenge reward claimed', pts: '+85' },
  ];
  return (
    <section className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-indigo-500 font-black tracking-widest uppercase text-sm mb-4">Built For Real Participation</div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">NO GUESSWORK. SEE YOUR PROGRESS.</h2>
          <p className="text-neutral-400 text-lg leading-relaxed mb-6">
            Track your activity and see how your participation contributes to your progress. Your available rewards, points and opportunities are always visible from your Push Play account.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { icon: ShieldCheck, label: 'Transparent activity' },
              { icon: History, label: 'Full reward history' },
              { icon: Clock, label: 'Pending points visible' },
            ].map((f) => (
              <div key={f.label} className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-300">
                <f.icon className="w-4 h-4 text-indigo-400" />
                {f.label}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-neutral-900/50 p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-sm text-neutral-500 font-medium">Current Play Points</div>
              <div className="text-3xl font-black">8,240 <span className="text-base text-neutral-500 font-medium">PP</span></div>
            </div>
            <div className="text-right">
              <div className="text-sm text-neutral-500 font-medium">Points Pending</div>
              <div className="text-2xl font-bold text-amber-400">320</div>
            </div>
          </div>
          <div className="text-xs font-bold tracking-widest uppercase text-neutral-500 mb-3">Reward History</div>
          <div className="space-y-3">
            {history.map((h, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                  <History className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-neutral-300">{h.label}</div>
                  <div className="text-xs text-neutral-500">{h.date}</div>
                </div>
                <div className="text-sm font-semibold text-emerald-400">{h.pts}</div>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
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
    { q: 'How do I earn Play Points?', a: 'You can earn Play Points through eligible activities, campaigns, challenges and experiences available on Push Play. Available opportunities may change over time.' },
    { q: 'Do I earn points for everything I watch?', a: "No. Points are earned through eligible activities and experiences where rewards are available. Push Play will clearly show when an activity qualifies." },
    { q: 'What can I use Play Points for?', a: 'Depending on available programs and your eligibility, Play Points may unlock rewards, perks, campaign opportunities and available cash-out options.' },
    { q: 'How do I know what rewards are available?', a: 'Your Push Play account and wallet will show your current Play Points, eligible activities and available reward options.' },
    { q: 'Is Push Play free to join?', a: 'Yes. Users can join Push Play and explore available experiences. Some premium features or membership benefits may require a subscription.' },
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
        <div className="text-indigo-500 font-black tracking-widest uppercase text-sm mb-4">Your Next Moment Could Count</div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-[0.95]">
          YOU'RE ALREADY ONLINE.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-indigo-400">MAKE IT WORTH MORE.</span>
        </h2>
        <p className="text-neutral-400 text-lg mb-10 leading-relaxed">
          Join Push Play to discover entertainment, live experiences, challenges and opportunities where your participation can unlock more.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button to="/signup" variant="brand" size="lg" className="h-16 px-10 rounded-2xl group">
            Create Your Free Account
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        <p className="mt-6 text-sm text-neutral-500">
          Start exploring. Discover eligible rewards. Build your Play.
        </p>
      </div>
    </section>
  );
}
