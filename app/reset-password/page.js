'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../supabaseClient';
import { toast } from 'sonner';

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = hashParams.get('access_token');
    if (accessToken) {
      setToken(accessToken);
    } else {
      toast.error('Invalid or expired reset link.');
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      toast.error('Missing or invalid token.');
      return;
    }

    const { error } = await supabase.auth.updateUser(
      { password },
      { accessToken: token }
    );

    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Password reset successfully!');
      setTimeout(() => router.push('/auth'), 2000);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded mt-[20%]">
      <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full border p-2 mb-4"
        />
        <button className="w-full bg-blue-500 text-white p-2 rounded" type="submit">
          Reset Password
        </button>
      </form>
    </div>
  );
}
