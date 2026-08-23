import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ConvexProvider, useMutation, useQuery, useConvexAuth } from 'convex/react';
import { auth } from './lib/firebase';
import { convex, syncConvexAuth } from './lib/convexClient';
import { useAppStore } from './store/useAppStore';
import { Role } from './types';

// Layouts
import { PublicLayout } from './components/layout/PublicLayout';
import { UserLayout } from './components/layout/UserLayout';
import { CreatorLayout } from './components/layout/CreatorLayout';
import { BusinessLayout } from './components/layout/BusinessLayout';
import { AdminLayout } from './components/layout/AdminLayout';

// Public Pages
import { Home } from './pages/public/Home';
import { Login } from './pages/public/Login';
import { Onboarding } from './pages/public/Onboarding';
import { DiscoverOverview } from './pages/public/DiscoverOverview';
import { CreatorsOverview } from './pages/public/CreatorsOverview';
import { BusinessOverview } from './pages/public/BusinessOverview';
import { LiveSessions } from './pages/public/LiveSessions';
import { Rewards as RewardsPage } from './pages/public/Rewards';
import { Pro } from './pages/public/Pro';

// User Pages
import { Dashboard } from './pages/user/Dashboard';
import { Discover } from './pages/user/Discover';
import { Watch } from './pages/user/Watch';
import { Rewards } from './pages/user/Rewards';
import { Live } from './pages/user/Live';
import { Profile } from './pages/user/Profile';
import { Wallet } from './pages/user/Wallet';

// Creator Pages
import { CreatorDashboard } from './pages/creator/CreatorDashboard';
import { CreatorCreate } from './pages/creator/CreatorCreate';
import { CreatorCampaigns } from './pages/creator/CreatorCampaigns';
import { CreatorContent } from './pages/creator/CreatorContent';
import { CreatorLive } from './pages/creator/CreatorLive';
import { CreatorAnalytics } from './pages/creator/CreatorAnalytics';
import { CreatorChallenges } from './pages/creator/CreatorChallenges';
import { CreatorProfile } from './pages/creator/CreatorProfile';

// Business Pages
import { BusinessDashboard } from './pages/business/BusinessDashboard';
import { BusinessCreate } from './pages/business/BusinessCreate';
import { BusinessCampaigns } from './pages/business/BusinessCampaigns';
import { BusinessAnalytics } from './pages/business/BusinessAnalytics';
import { BusinessAudience } from './pages/business/BusinessAudience';
import { BusinessSettings } from './pages/business/BusinessSettings';

// Admin Pages
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminUsers } from './pages/admin/AdminUsers';
import { AdminCampaigns } from './pages/admin/AdminCampaigns';
import { AdminRewards } from './pages/admin/AdminRewards';
import { AdminWithdrawals } from './pages/admin/AdminWithdrawals';
import { AdminReports } from './pages/admin/AdminReports';
import { AdminSettings } from './pages/admin/AdminSettings';

import type { User as FirebaseUser } from 'firebase/auth';

/**
 * Keeps the app's user state in sync with Firebase. When a real Firebase user
 * is signed in we push them into the store; when they sign out we clear it.
 * Demo (mock) accounts are untouched because they have no Firebase session.
 */
function AuthBridge() {
  const { loginWithFirebase, logout, user } = useAppStore();
  const [fbUser, setFbUser] = useState<FirebaseUser | null>(null);

  useEffect(() => {
    // onAuthStateChanged fires on registration AND every login/logout/token
    // change, so the Convex token provider is re-registered exactly when the
    // signed-in identity changes. Without this, a setAuth that first resolves
    // while signed out leaves the Convex client unauthenticated forever.
    return auth.onAuthStateChanged((next) => {
      syncConvexAuth();
      setFbUser(next);
    });
  }, []);

  useEffect(() => {
    if (fbUser) {
      loginWithFirebase(fbUser);
    } else if (user?.source === 'firebase') {
      logout();
    }
  }, [fbUser, loginWithFirebase, logout, user?.source]);

  return null;
}

/**
 * Persists the Firebase user into Convex and keeps points/isPro/role in sync.
 * Only mounted while a real Firebase session exists (and once the Convex
 * backend is deployed), so anonymous/pre-login Convex calls never happen.
 */
function ConvexSync() {
  const [fbUser, setFbUser] = useState<FirebaseUser | null>(null);

  useEffect(() => {
    return auth.onAuthStateChanged((next) => setFbUser(next));
  }, []);

  if (!fbUser) return null;
  return <ConvexSyncInner uid={fbUser.uid} />;
}

function ConvexSyncInner({ uid }: { uid: string }) {
  const { user, patchUser, markRoleSynced } = useAppStore();
  const roleDirty = useAppStore((s) => s.roleDirty);
  const { isAuthenticated } = useConvexAuth();
  const storeUser = useMutation("users/storeUser" as any);
  const setUserRole = useMutation("users/setUserRole" as any);
  const profile = useQuery("users/getCurrentUser" as any) as
    | { points: number; isPro: boolean; role: string }
    | null
    | undefined;

  // Create/update the Convex profile. Gated on isAuthenticated so the call
  // never fires before the Firebase JWT has attached to the Convex client.
  useEffect(() => {
    if (!isAuthenticated || user?.source !== "firebase") return;
    void storeUser({
      email: user.email,
      name: user.name,
      emailVerified: !!user.emailVerified,
    }).catch(() => {});
  }, [isAuthenticated, uid, user?.source, user?.email, user?.name, user?.emailVerified, storeUser]);

  // Push a locally-chosen role (onboarding) to the server exactly once.
  useEffect(() => {
    if (!roleDirty || !user?.role) return;
    if (!isAuthenticated || user?.source !== "firebase") return;
    let cancelled = false;
    void setUserRole({ role: user.role })
      .then(() => {
        if (!cancelled) markRoleSynced();
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [roleDirty, isAuthenticated, user?.source, user?.role, setUserRole, markRoleSynced]);

  // Mirror server-side points/isPro/role into the local store. A pending
  // local role choice is never clobbered by a stale server snapshot.
  useEffect(() => {
    if (profile && user?.source === "firebase") {
      patchUser({
        points: profile.points,
        isPro: profile.isPro,
        ...(roleDirty ? {} : { role: profile.role as Role }),
      });
    }
  }, [profile, user?.source, roleDirty, patchUser]);

  return null;
}

export default function App() {
  const convexDeployed = import.meta.env.VITE_CONVEX_DEPLOYED === "true";
  return (
    <ConvexProvider client={convex}>
      <AuthBridge />
      {convexDeployed && <ConvexSync />}
      <BrowserRouter>
        <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Login />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/explore" element={<DiscoverOverview />} />
          <Route path="/creators" element={<CreatorsOverview />} />
          <Route path="/for-business" element={<BusinessOverview />} />
          <Route path="/live" element={<LiveSessions />} />
          <Route path="/rewards" element={<RewardsPage />} />
          <Route path="/pro" element={<Pro />} />
        </Route>

        {/* User Routes */}
        <Route element={<UserLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/app/rewards" element={<Rewards />} />
          <Route path="/app/live" element={<Live />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/watch/:id" element={<Watch />} />
          <Route path="/listen/:id" element={<Watch />} />
        </Route>

        {/* Creator Routes */}
        <Route path="/creator" element={<CreatorLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<CreatorDashboard />} />
          <Route path="create" element={<CreatorCreate />} />
          <Route path="campaigns" element={<CreatorCampaigns />} />
          <Route path="content" element={<CreatorContent />} />
          <Route path="live" element={<CreatorLive />} />
          <Route path="challenges" element={<CreatorChallenges />} />
          <Route path="analytics" element={<CreatorAnalytics />} />
          <Route path="profile" element={<CreatorProfile />} />
          <Route path="*" element={<Navigate to="dashboard" replace />} />
        </Route>

        {/* Business Routes */}
        <Route path="/business" element={<BusinessLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<BusinessDashboard />} />
          <Route path="create" element={<BusinessCreate />} />
          <Route path="campaigns" element={<BusinessCampaigns />} />
          <Route path="analytics" element={<BusinessAnalytics />} />
          <Route path="audience" element={<BusinessAudience />} />
          <Route path="settings" element={<BusinessSettings />} />
          <Route path="*" element={<Navigate to="dashboard" replace />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="campaigns" element={<AdminCampaigns />} />
          <Route path="rewards" element={<AdminRewards />} />
          <Route path="withdrawals" element={<AdminWithdrawals />} />
          <Route path="reports" element={<AdminReports />} />
          <Route path="settings" element={<AdminSettings />} />
          <Route path="*" element={<Navigate to="dashboard" replace />} />
        </Route>

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </BrowserRouter>
    </ConvexProvider>
  );
}

