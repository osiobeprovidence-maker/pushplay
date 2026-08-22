import React from 'react';
import { Link } from 'react-router-dom';
import {
  Play, Radio, Users, Gift, Heart, Sparkles, ArrowRight, Zap,
  MessageCircle, Music2, Calendar, Ticket, Mic2, Compass, Hand, Signal, Bell
} from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function LiveSessions() {
  return (
    <div className="flex flex-col bg-black text-white selection:bg-indigo-500/30">
      <Hero />
      <CoreMessage />
      <Discover />
      <Experience />
      <SessionsTypes />
      <HowItWorks />
      <ForCreators />
      <FinalCTA />
    </div>
  );
}

/* SECTION 1 — HERO */
function Hero() {
  return (
    <section className="relative pt-24 pb-16 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="relative max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest uppercase mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
          Push Play Live
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          DON'T JUST WATCH LIVE.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-indigo-400 animate-gradient-x">
            BE PART OF IT.
          </span>
        </h1>

        <p className="text-base md:text-lg lg:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000">
          Push Play Live brings creators, communities and audiences together in real time. Watch what's happening, join the conversation and take part in experiences as they unfold.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-150">
          <Button to="#discover" variant="brand" size="lg" className="h-16 px-10 rounded-2xl group">
            Explore Live Sessions
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button to="#how" variant="secondary" size="lg" className="h-16 px-10 rounded-2xl border-white/10 hover:bg-white/5">
            How It Works
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-neutral-500 font-medium animate-in fade-in duration-1000 delay-300">
          <span>Live Streams</span>
          <span className="text-neutral-700">·</span>
          <span>Interactive Sessions</span>
          <span className="text-neutral-700">·</span>
          <span>Community Events</span>
        </div>
      </div>
    </section>
  );
}

/* CORE MESSAGE BAND */
function CoreMessage() {
  return (
    <section className="px-6 pb-8">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg md:text-2xl text-neutral-300 font-medium tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700">
          Live isn't just something you watch. <span className="text-white font-bold">It's something you join.</span>
        </p>
      </div>
    </section>
  );
}

/* SECTION 2 — DISCOVER WHAT'S LIVE */
function Discover() {
  const sessions = [
    {
      status: 'LIVE NOW', statusColor: 'bg-red-600', title: 'The Friday Night Arena',
      desc: "Creators, guests and the community come together for a live interactive experience.",
      meta: '1.2K watching', cta: 'Join Live', icon: Play,
      gradient: 'from-indigo-700 via-purple-900 to-neutral-900', to: '/signup'
    },
    {
      status: 'STARTING SOON', statusColor: 'bg-amber-500', title: 'Push Play Music Room',
      desc: 'Discover new music, join the conversation and experience the session together.',
      meta: 'Starting in 35 min', cta: 'Set Reminder', icon: Bell,
      gradient: 'from-blue-700 via-indigo-900 to-neutral-900', to: '/signup'
    },
    {
      status: 'COMMUNITY LIVE', statusColor: 'bg-emerald-500', title: 'Creator Hangout',
      desc: 'A live conversation where creators and their communities connect directly.',
      meta: '842 participants', cta: 'Join Session', icon: Users,
      gradient: 'from-fuchsia-700 via-indigo-900 to-neutral-900', to: '/signup'
    },
  ];
  return (
    <section id="discover" className="py-20 px-6 border-t border-white/5 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="text-indigo-500 font-black tracking-widest uppercase text-sm mb-4">Happening on Push Play</div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">FIND SOMETHING WORTH JOINING.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sessions.map((s, i) => (
            <div key={i} className="group rounded-3xl border border-white/10 bg-neutral-900/40 overflow-hidden hover:border-indigo-500/40 transition-colors duration-300">
              <div className={`relative aspect-video bg-gradient-to-br ${s.gradient}`}>
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur text-white text-xs font-bold tracking-widest uppercase">
                  <span className={`w-2 h-2 rounded-full ${s.statusColor}`} />
                  {s.status}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <s.icon className="w-7 h-7 text-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-xs font-medium text-neutral-200 bg-black/40 backdrop-blur px-3 py-1.5 rounded-full">
                  {s.meta}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed mb-5">{s.desc}</p>
                <Button to={s.to} variant="secondary" className="w-full h-12 rounded-2xl border-white/10 hover:bg-white/5">
                  {s.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* SECTION 3 — MORE THAN A LIVE STREAM */
function Experience() {
  const chat = [
    { u: 'Nova', m: 'this beat is insane', c: 'text-indigo-400' },
    { u: 'Kai', m: 'first time here, love it', c: 'text-indigo-400' },
    { u: 'Mira', m: 'when is the next drop?', c: 'text-indigo-400' },
    { u: 'Leo', m: 'gifting 50 points', c: 'text-indigo-400' },
    { u: 'Zoe', m: "let's goooo", c: 'text-indigo-400' },
  ];
  const points = [
    { icon: Play, title: 'WATCH', desc: 'Discover live creators, events and experiences happening right now.' },
    { icon: MessageCircle, title: 'CONNECT', desc: 'Join conversations and interact with people experiencing the moment with you.' },
    { icon: Hand, title: 'PARTICIPATE', desc: 'Take part in challenges, polls, discussions and interactive activities.' },
    { icon: Heart, title: 'SUPPORT', desc: 'Show love to creators and experiences you enjoy through the platform.' },
  ];
  return (
    <section className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="text-indigo-500 font-black tracking-widest uppercase text-sm mb-4">The Push Play Experience</div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">LIVE IS BETTER WHEN YOU'RE INVOLVED.</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Product preview */}
          <div className="rounded-3xl border border-white/10 bg-neutral-900/40 overflow-hidden">
            <div className="relative aspect-video bg-gradient-to-br from-indigo-900/60 via-neutral-900/30 to-black">
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-600 text-white text-xs font-bold tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                Live
              </div>
              <div className="absolute bottom-4 left-4 text-xs font-medium text-neutral-200 bg-black/40 backdrop-blur px-3 py-1.5 rounded-full">
                12,480 watching
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur text-xs text-neutral-300">
                The Friday Night Arena
              </div>
            </div>

            {/* Chat + reactions */}
            <div className="p-5 border-t border-white/10">
              <div className="flex gap-2 mb-4">
                {[Heart, Gift, Sparkles, Zap].map((Ic, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400">
                    <Ic className="w-4 h-4" />
                  </div>
                ))}
                <div className="ml-auto flex items-center gap-2 px-4 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-sm font-medium">
                  <Signal className="w-4 h-4" /> Join
                </div>
              </div>
              <div className="space-y-2 max-h-36 overflow-hidden">
                {chat.map((m, i) => (
                  <div key={i} className="text-sm">
                    <span className={`font-semibold ${m.c}`}>{m.u}</span>
                    <span className="text-neutral-400"> {m.m}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Points */}
          <div className="grid sm:grid-cols-2 gap-5">
            {points.map((p) => (
              <div key={p.title} className="p-6 rounded-3xl bg-neutral-900/40 border border-white/5 hover:border-indigo-500/40 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 mb-4">
                  <p.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold tracking-wide mb-2">{p.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* SECTION 4 — WHAT HAPPENS LIVE */
function SessionsTypes() {
  const types = [
    { icon: Mic2, title: 'CREATOR SESSIONS', desc: 'Connect with creators and join conversations happening in real time.' },
    { icon: Ticket, title: 'LIVE CHALLENGES', desc: 'Watch, participate and compete in interactive experiences.' },
    { icon: Music2, title: 'MUSIC & CULTURE', desc: 'Discover performances, listening sessions and live conversations.' },
    { icon: Users, title: 'COMMUNITY EVENTS', desc: 'Join people around shared interests, conversations and experiences.' },
    { icon: Sparkles, title: 'PREMIERES & MOMENTS', desc: 'Be there when something new happens.' },
  ];
  return (
    <section className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="text-indigo-500 font-black tracking-widest uppercase text-sm mb-4">Every Session Is Different</div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">THERE'S MORE THAN ONE WAY TO GO LIVE.</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {types.map((t) => (
            <div key={t.title} className="group p-8 rounded-3xl bg-neutral-900/40 border border-white/5 hover:border-indigo-500/40 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 mb-6 group-hover:scale-110 transition-transform">
                <t.icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold tracking-wide mb-2">{t.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* SECTION 5 — HOW IT WORKS */
function HowItWorks() {
  const steps = [
    { n: '01', title: 'DISCOVER', desc: 'Browse live sessions and find something that interests you.' },
    { n: '02', title: 'JOIN', desc: 'Enter the session and become part of the live experience.' },
    { n: '03', title: 'PARTICIPATE', desc: 'Watch, interact, connect and enjoy the moment as it happens.' },
  ];
  return (
    <section id="how" className="py-20 px-6 border-t border-white/5 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 text-center">
          <div className="text-indigo-500 font-black tracking-widest uppercase text-sm mb-4">How To Join</div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">FIND IT. JOIN IT. EXPERIENCE IT.</h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.n} className="relative text-center px-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-2xl font-black text-indigo-400 mb-6">
                  {s.n}
                </div>
                <h3 className="font-bold tracking-wide mb-3">{s.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed max-w-xs mx-auto">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* SECTION 6 — FOR CREATORS */
function ForCreators() {
  return (
    <section className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-indigo-500 font-black tracking-widest uppercase text-sm mb-4">For Creators</div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">BRING YOUR COMMUNITY LIVE.</h2>
          <p className="text-neutral-400 text-lg leading-relaxed mb-8 max-w-lg">
            Create live experiences that bring your audience together. Host conversations, events, challenges and moments your community can join in real time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/signup" variant="brand" size="lg" className="h-14 px-8 rounded-2xl group">
              Start a Live Session
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button to="/creators" variant="secondary" size="lg" className="h-14 px-8 rounded-2xl border-white/10 hover:bg-white/5">
              Learn More for Creators
            </Button>
          </div>
        </div>

        {/* Abstract creator dashboard preview */}
        <div className="relative rounded-3xl border border-white/10 bg-neutral-900/40 p-6 overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center font-bold">JD</div>
              <div>
                <div className="font-bold">Jaden Storm</div>
                <div className="text-xs text-neutral-500">Creator Studio</div>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-600 text-white text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-white animate-ping" /> Live
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 mb-4">
            {['1.2K', '4.2M', '842'].map((v, i) => (
              <div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">
                <div className="text-xl font-black text-white">{v}</div>
                <div className="text-[10px] text-neutral-500 uppercase tracking-wide">Watching</div>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            {['Go live in one tap', 'Real-time chat & gifts', 'Build your community'].map((line, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                <span className="text-sm text-neutral-300">{line}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* SECTION 7 — FINAL CTA */
function FinalCTA() {
  return (
    <section className="relative py-28 px-6 border-t border-white/5 overflow-hidden text-center">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[320px] md:h-[420px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="relative max-w-3xl mx-auto">
        <div className="text-indigo-500 font-black tracking-widest uppercase text-sm mb-4">Ready When You Are</div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">SOMETHING IS ALWAYS HAPPENING.</h2>
        <p className="text-neutral-400 text-lg mb-10 leading-relaxed">
          Discover live experiences, meet new people and be part of moments as they happen.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button to="#discover" variant="brand" size="lg" className="h-16 px-10 rounded-2xl group">
            Explore Live Sessions
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button to="/signup" variant="secondary" size="lg" className="h-16 px-10 rounded-2xl border-white/10 hover:bg-white/5">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}
