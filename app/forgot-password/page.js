'use client';

import { useState } from 'react';
import Image from 'next/image';
import { supabase } from '../supabaseClient';
import { toast } from 'sonner';

export default function Page() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/reset-password`,
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Check your email for the password reset link!');
      setEmail('');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded md:mt-[10%] xs:mt-[40%]">
      <div className="flex justify-center">
        <Image src="/hault-logo.png" height={100} width={100} alt="Hault Express Delivery Logo" />
      </div>
      <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border p-2 mb-4"
        />
        <button className="w-full bg-blue-500 text-white p-2 rounded" type="submit">
          Send Reset Link
        </button>
      </form>
    </div>
  );
}
