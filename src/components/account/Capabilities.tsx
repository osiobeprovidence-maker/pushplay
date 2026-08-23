import { useState } from 'react';
import { useMutation, useQuery, useConvexAuth } from 'convex/react';
import { Link } from 'react-router-dom';
import { Video, Briefcase, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { useAppStore } from '../../store/useAppStore';

type CreatorProfile = {
  _id: string;
  creatorName: string;
  username: string;
} | null;

type BusinessProfile = {
  _id: string;
  businessName: string;
  businessUsername: string;
};

function CardShell({
  icon,
  title,
  description,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-11 h-11 rounded-xl bg-neutral-800 flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="font-bold text-white">{title}</h3>
          <p className="text-sm text-neutral-400 mt-0.5">{description}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

function CreatorSection() {
  const { user } = useAppStore();
  const { isAuthenticated } = useConvexAuth();
  const profile = useQuery('profiles/getCreatorProfile' as any) as
    | CreatorProfile
    | undefined;
  const create = useMutation('profiles/createCreatorProfile' as any);
  const [open, setOpen] = useState(false);
  const [creatorName, setCreatorName] = useState('');
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  if (!isAuthenticated || profile === undefined) {
    return (
      <CardShell
        icon={<Video className="w-5 h-5 text-indigo-400" />}
        title="Creator"
        description="Push your content to real audiences."
      >
        <Loader2 className="w-4 h-4 animate-spin text-neutral-500" />
      </CardShell>
    );
  }

  const handleCreate = async () => {
    setError(null);
    setBusy(true);
    try {
      await create({
        creatorName: creatorName || user?.name,
        username,
        bio,
      });
      setOpen(false);
    } catch (err) {
      setError(String((err as Error).message).replace(/^\[.*?\]\s*/, ''));
    } finally {
      setBusy(false);
    }
  };

  if (profile) {
    return (
      <CardShell
        icon={<CheckCircle2 className="w-5 h-5 text-emerald-400" />}
        title={`Creator: ${profile.creatorName}`}
        description={`@${profile.username}`}
      >
        <Link to="/creator/dashboard">
          <Button variant="secondary" className="w-full h-10 flex items-center justify-center gap-2">
            Creator Dashboard <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </CardShell>
    );
  }

  if (!open) {
    return (
      <CardShell
        icon={<Video className="w-5 h-5 text-indigo-400" />}
        title="Become a Creator"
        description="Launch campaigns and grow your audience. Your normal account stays unchanged."
      >
        <Button className="w-full h-10" onClick={() => setOpen(true)}>
          Become a Creator
        </Button>
      </CardShell>
    );
  }

  return (
    <CardShell
      icon={<Video className="w-5 h-5 text-indigo-400" />}
      title="Set up your Creator Profile"
      description="This adds a creator capability to your account."
    >
      <div className="space-y-3">
        <input
          value={creatorName}
          onChange={(e) => setCreatorName(e.target.value)}
          placeholder={`Creator name (${user?.name ?? 'your name'})`}
          className="w-full h-11 px-4 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm placeholder:text-neutral-600 focus:border-indigo-500 outline-none"
        />
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="@username"
          className="w-full h-11 px-4 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm placeholder:text-neutral-600 focus:border-indigo-500 outline-none"
        />
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Short bio (optional)"
          rows={2}
          className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm placeholder:text-neutral-600 focus:border-indigo-500 outline-none resize-none"
        />
        {error && <p className="text-xs text-red-400">{error}</p>}
        <div className="flex gap-2">
          <Button variant="secondary" className="flex-1 h-10" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button className="flex-1 h-10" disabled={busy || !username.trim()} onClick={handleCreate}>
            Create
          </Button>
        </div>
      </div>
    </CardShell>
  );
}

function BusinessSection() {
  const profiles = useQuery('profiles/getBusinessProfiles' as any) as
    | BusinessProfile[]
    | undefined;
  const create = useMutation('profiles/createBusinessProfile' as any);
  const [open, setOpen] = useState(false);
  const [businessName, setBusinessName] = useState('');
  const [businessUsername, setBusinessUsername] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  if (profiles === undefined) {
    return (
      <CardShell
        icon={<Briefcase className="w-5 h-5 text-amber-400" />}
        title="Business"
        description="Run campaign placements for brands."
      >
        <Loader2 className="w-4 h-4 animate-spin text-neutral-500" />
      </CardShell>
    );
  }

  const handleCreate = async () => {
    setError(null);
    setBusy(true);
    try {
      await create({ businessName, businessUsername, category });
      setOpen(false);
    } catch (err) {
      setError(String((err as Error).message).replace(/^\[.*?\]\s*/, ''));
    } finally {
      setBusy(false);
    }
  };

  if (profiles.length > 0 && !open) {
    return (
      <CardShell
        icon={<CheckCircle2 className="w-5 h-5 text-emerald-400" />}
        title={
          profiles.length === 1
            ? `Business: ${profiles[0].businessName}`
            : `${profiles.length} businesses`
        }
        description={profiles.map((p) => `@${p.businessUsername}`).join(', ')}
      >
        <Link to="/business/dashboard">
          <Button variant="secondary" className="w-full h-10 flex items-center justify-center gap-2">
            Business Dashboard <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </CardShell>
    );
  }

  if (!open) {
    return (
      <CardShell
        icon={<Briefcase className="w-5 h-5 text-amber-400" />}
        title="Set Up a Business"
        description="Reach engaged audiences with performance-priced placements."
      >
        <Button className="w-full h-10" onClick={() => setOpen(true)}>
          Set Up a Business
        </Button>
      </CardShell>
    );
  }

  return (
    <CardShell
      icon={<Briefcase className="w-5 h-5 text-amber-400" />}
      title="Register your business"
      description="Your main Push Play account stays a normal user account."
    >
      <div className="space-y-3">
        <input
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          placeholder="Business name"
          className="w-full h-11 px-4 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm placeholder:text-neutral-600 focus:border-amber-500 outline-none"
        />
        <input
          value={businessUsername}
          onChange={(e) => setBusinessUsername(e.target.value)}
          placeholder="@business_username"
          className="w-full h-11 px-4 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm placeholder:text-neutral-600 focus:border-amber-500 outline-none"
        />
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category (e.g. Fashion, Fintech)"
          className="w-full h-11 px-4 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm placeholder:text-neutral-600 focus:border-amber-500 outline-none"
        />
        {error && <p className="text-xs text-red-400">{error}</p>}
        <div className="flex gap-2">
          <Button variant="secondary" className="flex-1 h-10" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            className="flex-1 h-10"
            disabled={busy || !businessName.trim() || !businessUsername.trim()}
            onClick={handleCreate}
          >
            Create
          </Button>
        </div>
      </div>
    </CardShell>
  );
}

/**
 * "Grow with Push Play": lets any normal user attach Creator and/or Business
 * capabilities without ever leaving or replacing their main account.
 */
export function Capabilities() {
  return (
    <section className="space-y-6">
      <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
        Grow with Push Play
      </h3>
      <CreatorSection />
      <BusinessSection />
    </section>
  );
}
