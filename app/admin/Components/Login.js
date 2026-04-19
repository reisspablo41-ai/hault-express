'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/app/supabaseClient';
import { toast } from 'sonner';

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });

      if (error) {
        toast.error(error.message);
        setLoading(false);
        return;
      }

      const userId = data.user?.id;
      if (!userId) {
        toast.error('User ID not found.');
        setLoading(false);
        return;
      }

      // Enforce the specific admin account ID
      if (userId !== 'fae1323a-ade8-4f08-bfd9-4f748c916ecd') {
        toast.error('Access denied: Unauthorized identity.');
        setLoading(false);
        await supabase.auth.signOut();
        return;
      }

      toast.success('Access authorized. Redirecting...');

      // Small delay to ensure auth cookies are written and processed 
      // before the middleware checks the next request
      setTimeout(() => {
        router.push('/admin/dashboard');
        router.refresh(); // Force refresh to ensure middleware picks up the new session
      }, 800);

    } catch (err) {
      console.error('Login exception:', err);
      toast.error('An unexpected error occurred during authorization.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-md bg-[#121214] border border-white/10 p-8 sm:p-10 rounded-2xl shadow-2xl relative z-10 backdrop-blur-sm">
        <div className="flex justify-center mb-8">
          <div className="bg-white/5 p-4 rounded-full border border-white/10">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-center text-white mb-2 tracking-tight">
          Admin Gateway
        </h2>
        <p className="text-gray-400 text-sm text-center mb-8">
          Authenticate to access the control panel
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold tracking-wider text-gray-400 uppercase mb-2">
              Corporate Email
            </label>
            <input
              type="email"
              placeholder="admin@haultexpressdelivery.com"
              className="w-full px-4 py-3 bg-[#1A1A1D] border border-white/5 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold tracking-wider text-gray-400 uppercase mb-2">
              Access Key
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-[#1A1A1D] border border-white/5 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black font-semibold py-3 rounded-xl mt-6 hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="flex gap-1">
                  <span className="w-2 h-2 bg-black/40 rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-black/40 rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-black/40 rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
                </span>
                Authorizing…
              </span>
            ) : (
              'Authorize Access'
            )}
          </button>
        </form>

        <div className="mt-8 text-center text-xs text-gray-600">
          Secure Hault Express Delivery Environment
        </div>
      </div>
    </div>
  );
}
