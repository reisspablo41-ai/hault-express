'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { FiArrowRight } from 'react-icons/fi';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      toast.error('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to subscribe');
      }

      toast.success('Subscribed! Check your inbox.');
      setEmail('');
    } catch (err) {
      toast.error(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:border-secondary/60 text-sm transition"
      />
      <button
        type="submit"
        disabled={loading}
        className="flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-primary-dark font-bold px-5 py-2.5 rounded-lg text-sm whitespace-nowrap transition-all hover:scale-105 disabled:opacity-60 disabled:hover:scale-100"
      >
        {loading ? 'Subscribing...' : <><span>Subscribe</span><FiArrowRight /></>}
      </button>
    </form>
  );
}
