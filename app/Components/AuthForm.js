'use client';

import { useState } from 'react';
import { supabase } from '../supabaseClient';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useUserContext } from '../Context/UserContext';
import { toast } from 'sonner';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const router = useRouter();
  const { setUser } = useUserContext();

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);

    let result;

    if (isLogin) {
      result = await supabase.auth.signInWithPassword({ email, password });
    } else {
      result = await supabase.auth.signUp({ email, password });
    }

    const { data, error } = result;

    if (error) {
      toast.error(error.message);
    } else {
      toast.success(
        isLogin
          ? 'Login successful! Redirecting...'
          : 'Signup successful! Check your email for verification.'
      );
      if (isLogin && data.user) {
        setUser(data.user);
        router.push('/dashboard');
      }
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 pt-24 pb-12 bg-gray-50/50">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">

        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10">
          <div className="flex justify-center md:justify-start mb-8">
            <Link href="/">
              <Image
                src="/hault-logo.png"
                height={80}
                width={80}
                alt="Hault Express Delivery Logo"
                className="cursor-pointer hover:scale-105 transition-transform duration-300"
                unoptimized
              />
            </Link>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
              {isLogin ? 'Welcome back' : 'Create an account'}
            </h2>
            <p className="text-gray-500 text-lg">
              {isLogin
                ? 'Please enter your details to sign in.'
                : 'Start tracking with Hault Express Delivery today.'}
            </p>
          </div>

          <form onSubmit={handleAuth} className="space-y-6">
            <div className="space-y-1">
              <label className="block text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-400 outline-none"
                required
              />
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-semibold text-gray-700">
                  Password
                </label>
                {isLogin && (
                  <Link
                    href="/forgot-password"
                    className="text-sm font-bold text-accent hover:text-primary transition-colors"
                  >
                    Forgot password?
                  </Link>
                )}
              </div>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-400 outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-accent text-white py-4 rounded-xl font-bold text-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-primary hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 mt-4"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                isLogin ? 'Sign In' : 'Sign Up'
              )}
            </button>
          </form>

          <div className="mt-8 flex items-center justify-center space-x-2 text-gray-600">
            <span>{isLogin ? "Don't have an account?" : "Already have an account?"}</span>
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="font-bold text-accent hover:text-primary transition-colors focus:outline-none"
            >
              {isLogin ? 'Sign up' : 'Log in'}
            </button>
          </div>

          <div className="mt-12 text-center text-sm text-gray-500">
            Need help?{' '}
            <Link href="/ContactUs" className="font-semibold text-accent hover:text-primary transition-colors">
              Contact Customer Support
            </Link>
          </div>
        </div>

        {/* Right Side - Image & Overlay */}
        <div className="hidden md:block w-1/2 relative bg-gray-900 overflow-hidden">
          <Image
            src="/citizen_cargo-login.jpg"
            alt="Logistics Background"
            layout="fill"
            objectFit="cover"
            className="opacity-80 mix-blend-overlay hover:scale-105 transition-transform duration-[20s] ease-out"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-12">
            <div className="transform translate-y-0 transition-transform duration-700">
              <h3 className="text-white text-4xl font-extrabold mb-4 leading-tight">
                Supercharge Your Shipping Workflow.
              </h3>
              <p className="text-gray-300 text-lg max-w-md font-medium leading-relaxed">
                Join thousands of businesses that trust Hault Express Delivery for their global logistics and delivery needs.
              </p>
              <div className="flex items-center gap-4 mt-8">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-gray-900 bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600 opacity-90" style={{ zIndex: 10 - i }}>
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-300 font-medium">
                  Loved by <strong className="text-white">10,000+</strong> users
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AuthForm;
