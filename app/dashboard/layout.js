'use client';

import { useEffect, useState } from 'react';
import Loading from '../loading';
import DashboardHeader from './Components/DashboardHeader';
import { useRouter } from 'next/navigation';

export default function ShipmentLayout({ children }) {
  const router = useRouter();
  const [authChecked, setAuthChecked] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get user from local storage on component mount
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    setAuthChecked(true); // Mark authentication check as complete

    // Redirect if user is not found
    if (!storedUser) {
      router.replace('/auth');
    }
  }, [router]);

  // Show loading until authentication check is completed
  if (!authChecked) return <Loading />;
  if (!user) return null; // Prevent unauthorized flash before redirecting

  return (
    <div>
      <DashboardHeader />
      <main className="bg-gray-100 px-[5%] py-10">{children}</main>
    </div>
  );
}
