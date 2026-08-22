import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { PlayCircle, Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

export function PublicLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-neutral-50 selection:bg-white selection:text-black">
      <header className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <PlayCircle className="w-8 h-8 text-white group-hover:scale-105 transition-transform" />
            <span className="text-xl font-bold tracking-tight">Push Play</span>
          </Link>
           
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            <Link to="/explore" className="hover:text-white transition-colors">Discover</Link>
            <Link to="/creators" className="hover:text-white transition-colors">Creators</Link>
            <Link to="/for-business" className="hover:text-white transition-colors">Business</Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/login" className="text-sm font-medium text-white hover:text-neutral-300 transition-colors hidden sm:block">
              Log in
            </Link>
            <Button to="/signup" size="sm" className="hidden md:inline-flex">Get Started</Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl hover:bg-neutral-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>
        {/* Mobile Drawer */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-20 z-40 flex">
            <div className="flex-1 bg-black/60 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
            <div className="w-72 bg-neutral-950 border-l border-neutral-800 flex flex-col p-6">
              <nav className="space-y-2">
                <Link to="/explore" onClick={() => setIsMenuOpen(false)} className="flex items-center px-4 py-3 rounded-2xl text-neutral-300 hover:bg-neutral-900 hover:text-white transition-colors">Discover</Link>
                <Link to="/creators" onClick={() => setIsMenuOpen(false)} className="flex items-center px-4 py-3 rounded-2xl text-neutral-300 hover:bg-neutral-900 hover:text-white transition-colors">Creators</Link>
                <Link to="/for-business" onClick={() => setIsMenuOpen(false)} className="flex items-center px-4 py-3 rounded-2xl text-neutral-300 hover:bg-neutral-900 hover:text-white transition-colors">Business</Link>
                <div className="pt-4 mt-4 border-t border-neutral-800 space-y-2">
                  <Link to="/login" onClick={() => setIsMenuOpen(false)} className="flex items-center px-4 py-3 rounded-2xl text-neutral-400 hover:bg-neutral-900 hover:text-white transition-colors">Log in</Link>
                  <Link to="/signup" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center px-4 py-3 rounded-2xl bg-white text-black font-medium hover:bg-neutral-200 transition-colors">Get Started</Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      <footer className="border-t border-neutral-900 bg-neutral-950 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <PlayCircle className="w-6 h-6 text-white" />
              <span className="text-lg font-bold tracking-tight">Push Play</span>
            </div>
            <p className="text-neutral-500 text-sm max-w-sm">
              Play. Engage. Get Rewarded. The modern entertainment platform where your attention has real value.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Platform</h4>
            <ul className="space-y-2 text-sm text-neutral-500">
              <li><Link to="/explore" className="hover:text-white">Discover</Link></li>
              <li><Link to="/#live-arenas" className="hover:text-white">Live Sessions</Link></li>
              <li><Link to="/#rewards" className="hover:text-white">Rewards</Link></li>
              <li><Link to="/#pro" className="hover:text-white">Push Play Pro</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Partners</h4>
            <ul className="space-y-2 text-sm text-neutral-500">
              <li><Link to="/creators" className="hover:text-white">For Creators</Link></li>
              <li><Link to="/for-business" className="hover:text-white">For Business</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-neutral-900 text-sm text-neutral-500 flex flex-col md:flex-row justify-between items-center">
          <p>© 2026 Push Play Inc. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
