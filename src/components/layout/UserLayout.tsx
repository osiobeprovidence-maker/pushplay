import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Compass, Radio, Gift, User, PlayCircle, LogOut } from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';
import { cn } from '../../utils';

export function UserLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAppStore();

  const handleLogout = () => {
    logout();
    navigate('/', { replace: true });
  };

  const navItems = [
    { icon: Home, label: 'Home', path: '/dashboard' },
    { icon: Compass, label: 'Discover', path: '/discover' },
    { icon: Radio, label: 'Live', path: '/live' },
    { icon: Gift, label: 'Rewards', path: '/rewards' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <div className="flex h-screen w-full bg-neutral-950 text-neutral-50 overflow-hidden font-sans">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 border-r border-neutral-800 bg-neutral-950">
        <div className="p-6 flex items-center gap-2">
          <PlayCircle className="w-8 h-8 text-white" />
          <span className="text-xl font-bold tracking-tight">Push Play</span>
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
                  isActive ? "bg-white text-black" : "text-neutral-400 hover:bg-neutral-800 hover:text-white"
                )}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 mt-auto">
          <div className="bg-neutral-900 rounded-2xl p-4 mb-4">
            <div className="text-xs text-neutral-400 mb-1">Play Points</div>
            <div className="text-2xl font-bold">{user?.points.toLocaleString()}</div>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 font-medium text-neutral-400 hover:bg-neutral-800 hover:text-white w-full"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 relative flex flex-col h-full overflow-y-auto overflow-x-hidden pb-20 md:pb-0">
        <Outlet />
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-neutral-950/80 backdrop-blur-xl border-t border-neutral-800 pb-safe z-50">
        <div className="flex items-center justify-around px-2 py-3">
          {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 w-16 h-12 transition-colors",
                  isActive ? "text-white" : "text-neutral-500 hover:text-neutral-300"
                )}
              >
                <item.icon className={cn("w-6 h-6", isActive && "fill-white/20")} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  );
}
