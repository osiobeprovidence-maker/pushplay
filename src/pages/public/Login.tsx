import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PlayCircle, Mail, ChevronLeft } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { useAppStore } from '../../store/useAppStore';

export function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAppStore();
  const [isLoading, setIsLoading] = useState(false);
  const [authMethod, setAuthMethod] = useState<'choice' | 'email'>('choice');
  
  const isSignup = location.pathname === '/signup';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate network request
    setTimeout(() => {
      login('user'); // Login as user mock
      navigate('/dashboard');
    }, 1000);
  };

  const handleGoogleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      login('user');
      navigate('/dashboard');
    }, 1500);
  };

  const handleCreatorLogin = () => {
    login('creator');
    navigate('/creator');
  };

  const handleBusinessLogin = () => {
    login('business');
    navigate('/business');
  };

  return (
    <div className="flex-1 flex items-center justify-center p-6 bg-neutral-950">
      <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
        {/* Decorative background flare */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 blur-[60px] rounded-full pointer-events-none" />
        
        <div className="relative z-10">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-neutral-950 rounded-2xl flex items-center justify-center border border-neutral-800 shadow-inner group">
              <PlayCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-center mb-2">
            {isSignup ? 'Create Account' : 'Welcome Back'}
          </h2>
          <p className="text-neutral-400 text-center text-sm mb-10">
            {isSignup 
              ? 'Join Push Play and start earning today.' 
              : 'Enter your details to sign in to your account.'}
          </p>

          {authMethod === 'choice' ? (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Button 
                variant="outline" 
                className="w-full gap-3 h-14 border-neutral-700 hover:bg-neutral-800"
                onClick={handleGoogleLogin}
                isLoading={isLoading}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </Button>
              
              <Button 
                variant="secondary" 
                className="w-full gap-3 h-14 bg-neutral-800 hover:bg-neutral-700"
                onClick={() => setAuthMethod('email')}
              >
                <Mail className="w-5 h-5" />
                Continue with Email
              </Button>

              <p className="text-center text-xs text-neutral-500 mt-6">
                By continuing, you agree to our <a href="#" className="underline">Terms</a> and <a href="#" className="underline">Privacy Policy</a>.
              </p>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <button 
                onClick={() => setAuthMethod('choice')}
                className="flex items-center gap-1.5 text-xs font-medium text-neutral-400 hover:text-white mb-6 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Back to options
              </button>

              <form onSubmit={handleLogin} className="space-y-4">
                {isSignup && (
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-1.5">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Alex Johnson"
                      className="w-full h-12 bg-neutral-950 border border-neutral-800 rounded-xl px-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all"
                      required
                    />
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-1.5">Email</label>
                  <input 
                    type="email" 
                    placeholder="alex@example.com"
                    className="w-full h-12 bg-neutral-950 border border-neutral-800 rounded-xl px-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all"
                    required
                  />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="block text-sm font-medium text-neutral-300">Password</label>
                    {!isSignup && <a href="#" className="text-xs text-neutral-400 hover:text-white">Forgot password?</a>}
                  </div>
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full h-12 bg-neutral-950 border border-neutral-800 rounded-xl px-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full mt-2" isLoading={isLoading}>
                  {isSignup ? 'Create Account' : 'Sign In'}
                </Button>
              </form>
            </div>
          )}

          <div className="mt-8 pt-8 border-t border-neutral-800">
            <p className="text-xs text-neutral-500 text-center mb-4 uppercase tracking-wider font-semibold">Demo Accounts</p>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="secondary" size="sm" className="h-10 text-xs" onClick={handleCreatorLogin}>
                Creator Demo
              </Button>
              <Button variant="secondary" size="sm" className="h-10 text-xs" onClick={handleBusinessLogin}>
                Business Demo
              </Button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button 
              onClick={() => navigate(isSignup ? '/login' : '/signup')}
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              {isSignup ? 'Already have an account? Log in' : "Don't have an account? Sign up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
