import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Briefcase, BarChart, Target, Users, Settings, LogOut, PlayCircle, Menu, X } from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';
import { cn } from '../../utils';

export function BusinessLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAppStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
    navigate('/', { replace: true });
  };

  const navItems = [
    { icon: Briefcase, label: 'Overview', path: '/business/dashboard' },
    { icon: Target, label: 'Campaigns', path: '/business/campaigns' },
    { icon: BarChart, label: 'Analytics', path: '/business/analytics' },
    { icon: Users, label: 'Audience', path: '/business/audience' },
    { icon: Settings, label: 'Settings', path: '/business/settings' },
  ];

  return (
    <div className="flex h-screen w-full bg-neutral-950 text-neutral-50 overflow-hidden font-sans">
      <aside className="hidden md:flex flex-col w-64 border-r border-neutral-800 bg-neutral-950">
        <div className="p-6 flex items-center gap-2">
          <PlayCircle className="w-8 h-8 text-indigo-500" />
          <span className="text-xl font-bold tracking-tight">Push Play <span className="text-indigo-500 font-normal text-sm">Business</span></span>
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
                  isActive ? "bg-indigo-600 text-white" : "text-neutral-400 hover:bg-neutral-800 hover:text-white"
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
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold">
              B
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold text-white truncate">Acme Corp</div>
              <div className="text-xs text-neutral-500 truncate">Business Account</div>
            </div>
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

      <main className="flex-1 relative flex flex-col h-full overflow-y-auto">
        {/* Mobile Header with Hamburger */}
        <div className="md:hidden flex items-center justify-between p-4 border-b border-neutral-800 bg-neutral-950 sticky top-0 z-30">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-xl hover:bg-neutral-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
          <div className="flex items-center gap-2">
            <PlayCircle className="w-6 h-6 text-indigo-500" />
            <span className="font-bold">Business</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-sm">
            B
          </div>
        </div>

        {/* Mobile Drawer Overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-40 flex">
            <div className="flex-1 bg-black/60 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
            <div className="w-72 bg-neutral-950 border-l border-neutral-800 flex flex-col overflow-y-auto">
              <div className="p-6 flex items-center gap-2 border-b border-neutral-800">
                <PlayCircle className="w-8 h-8 text-indigo-500" />
                <span className="text-xl font-bold tracking-tight">Push Play <span className="text-indigo-500 font-normal text-sm">Business</span></span>
              </div>
              <nav className="flex-1 px-4 space-y-2 mt-4">
                {navItems.map((item) => {
                  const isActive = location.pathname.startsWith(item.path);
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 font-medium",
                        isActive ? "bg-indigo-600 text-white" : "text-neutral-400 hover:bg-neutral-800 hover:text-white"
                      )}
                    >
                      <item.icon className="w-5 h-5" />
                      {item.label}
                    </Link>
                  )
                })}
              </nav>
              <div className="p-4 mt-auto border-t border-neutral-800">
                <div className="flex items-center gap-3 px-4 py-3 mb-4 rounded-2xl bg-neutral-900 border border-neutral-800">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold">B</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold text-white truncate">Acme Corp</div>
                    <div className="text-xs text-neutral-500 truncate">Business Account</div>
                  </div>
                </div>
                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 font-medium text-neutral-400 hover:bg-neutral-800 hover:text-white w-full"
                >
                  <LogOut className="w-5 h-5" />
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        )}

        <Outlet />
      </main>
    </div>
  );
}
