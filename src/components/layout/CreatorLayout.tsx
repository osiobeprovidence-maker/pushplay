import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Megaphone, Video, Radio, BarChart3, LogOut, PlayCircle, Trophy, User } from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';
import { cn } from '../../utils';

export function CreatorLayout() {
  const location = useLocation();
  const { user, logout } = useAppStore();

  const navItems = [
    { icon: LayoutDashboard, label: 'Overview', path: '/creator/dashboard' },
    { icon: Megaphone, label: 'Campaigns', path: '/creator/campaigns' },
    { icon: Video, label: 'Content', path: '/creator/content' },
    { icon: Radio, label: 'Live', path: '/creator/live' },
    { icon: Trophy, label: 'Challenges', path: '/creator/challenges' },
    { icon: BarChart3, label: 'Analytics', path: '/creator/analytics' },
    { icon: User, label: 'Profile', path: '/creator/profile' },
  ];

  return (
    <div className="flex h-screen w-full bg-neutral-950 text-neutral-50 overflow-hidden font-sans">
      <aside className="hidden md:flex flex-col w-64 border-r border-neutral-800 bg-neutral-950">
        <div className="p-6 flex items-center gap-2">
          <PlayCircle className="w-8 h-8 text-blue-500" />
          <span className="text-xl font-bold tracking-tight">Push Play <span className="text-blue-500 font-normal text-sm">Creator</span></span>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 mt-4">
          {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 font-medium",
                  isActive ? "bg-blue-600 text-white" : "text-neutral-400 hover:bg-neutral-800 hover:text-white"
                )}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 mt-auto">
          <div className="flex items-center gap-3 px-4 py-3 mb-4 rounded-2xl bg-neutral-900 border border-neutral-800">
            <img src={user?.avatar} alt="" className="w-10 h-10 rounded-full" />
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold text-white truncate">{user?.name}</div>
              <div className="text-xs text-neutral-500 truncate">{user?.username}</div>
            </div>
          </div>
          <button 
            onClick={logout}
            className="flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 font-medium text-neutral-400 hover:bg-neutral-800 hover:text-white w-full"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </aside>

      <main className="flex-1 relative flex flex-col h-full overflow-y-auto">
        <div className="md:hidden flex items-center justify-between p-4 border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <PlayCircle className="w-6 h-6 text-blue-500" />
            <span className="font-bold">Creator</span>
          </div>
          <img src={user?.avatar} alt="" className="w-8 h-8 rounded-full" />
        </div>
        <Outlet />
      </main>
    </div>
  );
}
