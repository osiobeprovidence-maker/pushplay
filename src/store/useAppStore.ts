import { create } from 'zustand';
import { User, Role } from '../types';
import { currentUser } from '../data/mockData';

interface AppState {
  user: User | null;
  isAuthenticated: boolean;
  login: (role?: Role) => void;
  logout: () => void;
  addPoints: (points: number) => void;
  deductPoints: (points: number) => void;
  updateProStatus: (status: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  user: null, // Start logged out for the landing page
  isAuthenticated: false,
  login: (role = 'user') => set({ 
    user: { ...currentUser, role }, 
    isAuthenticated: true 
  }),
  logout: () => set({ user: null, isAuthenticated: false }),
  addPoints: (points) => set((state) => ({
    user: state.user ? { ...state.user, points: state.user.points + points } : null
  })),
  deductPoints: (points) => set((state) => ({
    user: state.user ? { ...state.user, points: Math.max(0, state.user.points - points) } : null
  })),
  updateProStatus: (status) => set((state) => ({
    user: state.user ? { ...state.user, isPro: status } : null
  })),
}));
