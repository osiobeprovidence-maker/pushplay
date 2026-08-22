import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, Megaphone, Gift, CreditCard, FileText, Settings, LogOut, PlayCircle, Menu, X } from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';
import { cn } from '../../utils';

export function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAppStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
    navigate('/', { replace: true });
  };

  const navItems = [
    { icon: LayoutDashboard, label: 'Overview', path: '/admin/dashboard' },
    { icon: Users, label: 'Users', path: '/admin/users' },
    { icon: Megaphone, label: 'Campaigns', path: '/admin/campaigns' },
    { icon: Gift, label: 'Rewards', path: '/admin/rewards' },
    { icon: CreditCard, label: 'Withdrawals', path: '/admin/withdrawals' },
    { icon: FileText, label: 'Reports', path: '/admin/reports' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' },
  ];

  return (
    <div className="flex h-screen w-full bg-neutral-950 text-neutral-50 overflow-hidden font-sans">
      <aside className="hidden md:flex flex-col w-64 border-r border-neutral-800 bg-neutral-950">
        <div className="p-6 flex items-center gap-2">
          <PlayCircle className="w-8 h-8 text-red-500" />
          <span className="text-xl font-bold tracking-tight">Push Play <span className="text-red-500 font-normal text-sm">Admin</span></span>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 mt-4 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 font-medium",
                  isActive ? "bg-red-600 text-white" : "text-neutral-400 hover:bg-neutral-800 hover:text-white"
                )}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-neutral-800 mt-auto">
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
            <PlayCircle className="w-6 h-6 text-red-500" />
            <span className="font-bold">Admin</span>
          </div>
          <div className="w-10" />
        </div>

        {/* Mobile Drawer */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-40 flex">
            <div className="flex-1 bg-black/60 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
            <div className="w-72 bg-neutral-950 border-l border-neutral-800 flex flex-col overflow-y-auto">
              <div className="p-6 flex items-center gap-2 border-b border-neutral-800">
                <PlayCircle className="w-8 h-8 text-red-500" />
                <span className="text-xl font-bold tracking-tight">Push Play <span className="text-red-500 font-normal text-sm">Admin</span></span>
              </div>
              <nav className="flex-1 px-4 space-y-2 mt-4 overflow-y-auto">
                {navItems.map((item) => {
                  const isActive = location.pathname.startsWith(item.path);
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 font-medium",
                        isActive ? "bg-red-600 text-white" : "text-neutral-400 hover:bg-neutral-800 hover:text-white"
                      )}
                    >
                      <item.icon className="w-5 h-5" />
                      {item.label}
                    </Link>
                  )
                })}
              </nav>
              <div className="p-4 border-t border-neutral-800 mt-auto">
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
