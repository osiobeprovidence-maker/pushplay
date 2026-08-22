import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PlayCircle, Award, Compass, Play, ArrowRight, 
  Users, Briefcase, Zap, Globe, Target, 
  BarChart3, Heart, Radio, Sparkles
} from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function Home() {
  return (
    <div className="flex flex-col bg-black text-white selection:bg-indigo-500/30">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest uppercase mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
          The Future of Interactive Entertainment
        </div>
        
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter max-w-5xl mb-8 leading-[0.9] animate-in fade-in slide-in-from-bottom-8 duration-1000">
          DISCOVER. <br />
          COMPLETE. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-indigo-400 animate-gradient-x">
            EARN.
          </span>
        </h1>
        
        <p className="text-base md:text-lg lg:text-xl text-neutral-400 max-w-2xl mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 px-4">
          Push Play is the digital engagement platform where you discover content, complete experiences, and earn rewards — every interaction counts.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
          <Button to="/signup" variant="brand" size="lg" className="w-full sm:w-auto h-16 px-10 text-lg rounded-2xl group">
            Join the Ecosystem
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button to="/login" variant="secondary" size="lg" className="w-full sm:w-auto h-16 px-10 text-lg rounded-2xl border-white/10 hover:bg-white/5">
            Sign In
          </Button>
        </div>
      </section>

      {/* Discovery Section - FOR USERS */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <div className="text-indigo-500 font-black tracking-widest uppercase text-sm mb-4">Discover the Extraordinary</div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                For the Curious Mind.
              </h2>
            </div>
            <p className="text-neutral-500 text-lg max-w-md">
              A curated world of high-fidelity audio, cinematic visuals, and interactive challenges designed to captivate.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <DiscoveryCard 
              icon={Radio}
              title="Sonic Journeys"
              desc="From underground beats to global anthems. Discover music with spatial depth and creator-led sessions."
            />
            <DiscoveryCard 
              icon={PlayCircle}
              title="Visual Stories"
              desc="Short-form series and long-form narratives that push the boundaries of digital cinematography."
            />
            <DiscoveryCard 
              icon={Sparkles}
              title="Live Arenas"
              desc="Participate in real-time challenges, interactive livestreams, and community-driven events."
            />
          </div>
        </div>
      </section>

      {/* Live Arenas Section - LIVE SESSIONS */}
      <section id="live-arenas" className="py-32 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <div className="text-indigo-500 font-black tracking-widest uppercase text-sm mb-4">Live Sessions</div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                Step Into the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-white">Live Arenas.</span>
              </h2>
            </div>
            <p className="text-neutral-500 text-lg max-w-md">
              Real-time streams, interactive challenges, and community events you can join the moment they go live.
            </p>
          </div>

          {/* Live Demo Placeholder */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-neutral-900/40 group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-neutral-900/10 to-black" />
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-600 text-white text-xs font-bold tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                Live
              </div>
              <div className="absolute bottom-4 left-4 text-sm text-neutral-300 font-medium bg-black/40 backdrop-blur px-3 py-1.5 rounded-full">
                12,480 watching
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
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
                {[
                  { u: 'Nova', m: 'this beat is insane 🔥' },
                  { u: 'Kai', m: 'first time here, love it' },
                  { u: 'Mira', m: 'when is the next drop?' },
                  { u: 'Leo', m: 'gifting 50 points 🎁' },
                  { u: 'Zoe', m: 'let’s goooo' },
                ].map((c, i) => (
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

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Button to="/signup" variant="brand" size="lg" className="h-14 px-8 rounded-2xl group">
              Explore Live Sessions
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button to="/signup" variant="secondary" size="lg" className="h-14 px-8 rounded-2xl border-white/10 hover:bg-white/5">
              Start Your Own Stream
            </Button>
          </div>
        </div>
      </section>

      {/* Creator Section - FOR CREATORS */}
      <section className="py-32 px-6 bg-neutral-900/30 border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="text-indigo-500 font-black tracking-widest uppercase text-sm mb-4">The Creator Studio</div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-8">
              Your Craft, <br />
              <span className="text-neutral-500">Amplified.</span>
            </h2>
            <p className="text-neutral-400 text-lg mb-10 leading-relaxed">
              We provide the stage; you provide the soul. Push Play is designed to help creators broadcast with ease, engage deeply with fans, and monetize their influence transparently.
            </p>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Zap className="w-3.5 h-3.5 text-indigo-500" />
                </div>
                <div>
                  <div className="font-bold">Instant Broadcasting</div>
                  <div className="text-sm text-neutral-500">Go live with zero-latency streaming and high-fidelity audio.</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="w-3.5 h-3.5 text-indigo-500" />
                </div>
                <div>
                  <div className="font-bold">Direct Fan Engagement</div>
                  <div className="text-sm text-neutral-500">Built-in tools for real-time chat, tipping, and reward distribution.</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="w-3.5 h-3.5 text-indigo-500" />
                </div>
                <div>
                  <div className="font-bold">Transparent Monetization</div>
                  <div className="text-sm text-neutral-500">Earn from verified attention and brand sponsorships without the middleman.</div>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="relative aspect-square rounded-[40px] overflow-hidden border border-white/10 group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-purple-900 to-neutral-900" />
            <div className="absolute top-8 right-8 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute bottom-8 left-8 w-40 h-40 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="absolute bottom-10 left-10 right-10">
              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center font-bold">JD</div>
                  <div>
                    <div className="font-bold">Jaden Storm</div>
                    <div className="text-xs text-neutral-400">Electronic Artist • 4.2M Points Earned</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Section - FOR BUSINESSES */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <div className="text-indigo-500 font-black tracking-widest uppercase text-sm mb-4">The Business Hub</div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">
              Precision Marketing. <br />
              <span className="text-neutral-500">Guaranteed Return.</span>
            </h2>
            <p className="text-neutral-400 text-lg">
              Stop guessing. Start growing. Push Play connects your brand with a verified audience through interactive campaigns and high-intent engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BusinessFeature 
              icon={Target}
              title="Hyper-Targeting"
              desc="Reach users based on verified interests, behaviors, and engagement history."
            />
            <BusinessFeature 
              icon={BarChart3}
              title="Real-Time ROI"
              desc="Track every Naira spent with granular analytics and conversion data."
            />
            <BusinessFeature 
              icon={Globe}
              title="Global Scale"
              desc="Launch local or international campaigns with a single click."
            />
            <BusinessFeature 
              icon={Briefcase}
              title="Brand Safety"
              desc="Place your ads alongside premium, verified creator content."
            />
          </div>

          <div className="mt-20 p-12 rounded-[40px] bg-gradient-to-br from-indigo-900/40 to-transparent border border-indigo-500/20 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Ready to scale your brand?</h3>
              <p className="text-neutral-400">Join over 500+ businesses already thriving on Push Play.</p>
            </div>
            <Button to="/signup" variant="white" size="lg" className="h-14 px-10 rounded-xl">
              Partner with Us
            </Button>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section id="rewards" className="py-32 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <div className="text-indigo-500 font-black tracking-widest uppercase text-sm mb-4">Rewards</div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                Your Attention, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-white">Now Rewarded.</span>
              </h2>
            </div>
            <p className="text-neutral-500 text-lg max-w-md">
              Earn Play Points for every moment you engage — then convert them into real cash, gift cards, and exclusive perks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <RewardCard icon={Play} title="Watch & Listen" desc="Accumulate points automatically as you enjoy content across Push Play." />
            <RewardCard icon={Heart} title="Engage & React" desc="Liking, gifting, and joining challenges boosts your daily point earnings." />
            <RewardCard icon={Users} title="Refer Friends" desc="Invite your circle and earn a bonus every time they join and stay active." />
          </div>

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
              Start Earning
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Push Play Pro Section */}
      <section id="pro" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="text-indigo-500 font-black tracking-widest uppercase text-sm mb-4">Push Play Pro</div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">
              Go Pro. <br />
              <span className="text-neutral-500">Unlock Everything.</span>
            </h2>
            <p className="text-neutral-400 text-lg">
              A premium membership for the ultimate experience — ad-free playback, higher earning caps, and exclusive creator drops.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <PlanCard name="Weekly" price="₦500" period="/ week" features={['Ad-free playback', '2x point earnings']} />
            <PlanCard name="Monthly" price="₦1,800" period="/ month" features={['Everything in Weekly', '5x point cap', 'Pro badge']} highlighted />
            <PlanCard name="Quarterly" price="₦4,800" period="/ 3 months" features={['Best value', 'Exclusive drops', 'Priority support']} />
            <PlanCard name="Yearly" price="₦16,000" period="/ year" features={['Max savings', 'VIP gift drops', 'Early access']} />
          </div>

          <div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="font-bold text-lg">Why go Pro?</div>
              <div className="text-sm text-neutral-500">Pro members earn up to 5× more and never see an ad.</div>
            </div>
            <Button to="/signup" variant="white" size="lg" className="h-14 px-8 rounded-2xl">
              Upgrade to Pro
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-neutral-950 text-center relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[280px] md:h-[400px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10">
          THE PLAY IS YOURS.
        </h2>
        <Button to="/signup" variant="brand" size="lg" className="h-20 px-16 text-xl rounded-full group">
          Get Started Now
          <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
        </Button>
        <div className="mt-16 text-neutral-600 font-medium tracking-widest uppercase text-xs">
          Available on Web • iOS • Android
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-xl font-black tracking-tighter">PUSH PLAY</div>
          <div className="flex gap-8 text-sm text-neutral-500 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Help Center</a>
          </div>
          <div className="text-neutral-600 text-xs font-bold uppercase tracking-widest">
            © 2026 PUSH PLAY ECOSYSTEM
          </div>
        </div>
      </footer>
    </div>
  );
}

function DiscoveryCard({ icon: Icon, title, desc }: any) {
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

function BusinessFeature({ icon: Icon, title, desc }: any) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 shadow-xl">
        <Icon className="w-8 h-8 text-indigo-400" />
      </div>
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <p className="text-neutral-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function RewardCard({ icon: Icon, title, desc }: any) {
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

