import { useState, type ReactNode } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { PlayCircle, Video, Briefcase, ChevronRight } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { useAppStore } from '../../store/useAppStore';
import type { Role } from '../../types';

const purposes: {
  role: Role;
  title: string;
  description: string;
  icon: ReactNode;
}[] = [
  {
    role: 'user',
    title: 'Watch & Earn',
    description:
      'Discover campaigns, complete simple tasks and turn your attention into rewards.',
    icon: <PlayCircle className="w-7 h-7 text-indigo-400" />,
  },
  {
    role: 'creator',
    title: 'I am a Creator',
    description:
      'Launch campaigns, grow your audience and get your content pushed by real fans.',
    icon: <Video className="w-7 h-7 text-indigo-400" />,
  },
  {
    role: 'business',
    title: 'I am a Business',
    description:
      'Reach engaged audiences with campaign placements that only cost when they perform.',
    icon: <Briefcase className="w-7 h-7 text-indigo-400" />,
  },
];

export function Onboarding() {
  const navigate = useNavigate();
  const { isAuthenticated, user, patchUser } = useAppStore();
  const [selected, setSelected] = useState<Role | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const handleContinue = () => {
    if (!selected) return;
    setIsSaving(true);
    // Role persistence to Convex is handled centrally by ConvexSync
    // (App.tsx); here we just record the choice and move on.
    patchUser({ role: selected });
    setTimeout(() => {
      navigate(
        selected === 'creator'
          ? '/creator/dashboard'
          : selected === 'business'
            ? '/business/dashboard'
            : '/dashboard'
      );
    }, 250);
  };

  return (
    <div className="flex-1 flex items-center justify-center p-6 bg-neutral-950">
      <div className="w-full max-w-lg relative overflow-hidden">
        <div className="absolute -top-24 -right-16 w-56 h-56 bg-white/5 blur-[70px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-2">
            Welcome{user?.name ? `, ${user.name.split(' ')[0]}` : ''}
          </p>
          <h1 className="text-3xl font-bold mb-2">What did you come for?</h1>
          <p className="text-neutral-400 text-sm mb-8">
            Pick how you want to use Push Play. You can always change this later.
          </p>

          <div className="space-y-3">
            {purposes.map((p) => {
              const active = selected === p.role;
              return (
                <button
                  key={p.role}
                  onClick={() => setSelected(p.role)}
                  className={`w-full text-left flex items-start gap-4 p-5 rounded-2xl border transition-all duration-200 ${
                    active
                      ? 'border-indigo-500 bg-indigo-500/10 shadow-[0_0_24px_rgba(99,102,241,0.15)]'
                      : 'border-neutral-800 bg-neutral-900 hover:border-neutral-700 hover:bg-neutral-900/80'
                  }`}
                >
                  <div
                    className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border ${
                      active
                        ? 'bg-indigo-500/20 border-indigo-500/40'
                        : 'bg-neutral-950 border-neutral-800'
                    }`}
                  >
                    {p.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-white">{p.title}</p>
                    <p className="text-sm text-neutral-400 mt-0.5 leading-snug">
                      {p.description}
                    </p>
                  </div>
                  <ChevronRight
                    className={`ml-auto shrink-0 w-5 h-5 mt-1 transition-colors ${
                      active ? 'text-indigo-400' : 'text-neutral-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <Button
            className="w-full mt-8 h-12"
            disabled={!selected}
            isLoading={isSaving}
            onClick={handleContinue}
          >
            Continue
          </Button>

          <button
            onClick={() => navigate('/dashboard')}
            className="block mx-auto mt-4 text-xs text-neutral-500 hover:text-neutral-300 transition-colors"
          >
            Skip for now
          </button>
        </div>
      </div>
    </div>
  );
}
