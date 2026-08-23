import { create } from 'zustand';
import { User, Role } from '../types';
import { currentUser } from '../data/mockData';
import { signOutFirebase } from '../lib/auth';
import type { FirebaseUser } from '../lib/auth';

interface AppState {
  user: User | null;
  isAuthenticated: boolean;
  login: (role?: Role) => void;
  loginWithFirebase: (fbUser: FirebaseUser) => void;
  logout: () => void;
  patchUser: (partial: Partial<User>) => void;
  addPoints: (points: number) => void;
  deductPoints: (points: number) => void;
  updateProStatus: (status: boolean) => void;
}

function buildFirebaseUser(fbUser: FirebaseUser): User {
  const name = fbUser.displayName || fbUser.email?.split('@')[0] || 'Player';
  return {
    id: fbUser.uid,
    uid: fbUser.uid,
    name,
    username: '@' + (fbUser.email?.split('@')[0] || 'player'),
    email: fbUser.email ?? '',
    avatar: `https://i.pravatar.cc/150?u=${fbUser.uid}`,
    role: 'user',
    points: 0, // populated from Convex once available
    streak: 0,
    isPro: false,
    joinDate: new Date().toISOString(),
    emailVerified: fbUser.emailVerified,
    source: 'firebase',
  };
}

export const useAppStore = create<AppState>((set) => ({
  user: null, // Start logged out for the landing page
  isAuthenticated: false,

  // Demo / mock login (kept for showcase accounts).
  login: (role = 'user') =>
    set({
      user: { ...currentUser, role, source: 'demo' },
      isAuthenticated: true,
    }),

  // Real Firebase login: set the user immediately. Convex sync (persist +
  // load profile) is handled by the ConvexSync component once deployed.
  loginWithFirebase: (fbUser) => {
    const user = buildFirebaseUser(fbUser);
    set({ user, isAuthenticated: true });
  },

  logout: () => {
    void signOutFirebase().catch(() => {});
    set({ user: null, isAuthenticated: false });
  },

  addPoints: (points) =>
    set((state) => ({
      user: state.user ? { ...state.user, points: state.user.points + points } : null,
    })),
  deductPoints: (points) =>
    set((state) => ({
      user: state.user
        ? { ...state.user, points: Math.max(0, state.user.points - points) }
        : null,
    })),
  updateProStatus: (status) =>
    set((state) => ({
      user: state.user ? { ...state.user, isPro: status } : null,
    })),

  patchUser: (partial) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...partial } : null,
    })),
}));
