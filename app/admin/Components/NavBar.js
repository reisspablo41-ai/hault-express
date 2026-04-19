'use client';

import { FaUserAlt, FaUsers } from 'react-icons/fa';
import { HiOutlinePlus, HiOutlineCreditCard } from 'react-icons/hi2';
import { CiBoxes, CiLogout } from 'react-icons/ci';
import { RiDashboardLine } from 'react-icons/ri';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { supabase } from '@/app/supabaseClient';

import { FiSettings } from 'react-icons/fi';

function NavBar({ onClose }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/admin');
  };

  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: RiDashboardLine, exact: true },
    { name: 'All Shipments', path: '/admin/dashboard', icon: CiBoxes, exact: true },
    { name: 'Create Shipment', path: '/admin/dashboard/create-shipment', icon: HiOutlinePlus },
    { name: 'All Users', path: '/admin/dashboard/all-users', icon: FaUsers },
    { name: 'Add New User', path: '/admin/dashboard/add-new-user', icon: FaUserAlt },
    { name: 'All Refunds', path: '/admin/dashboard/refunds', icon: HiOutlineCreditCard },
    { name: 'Create Refunds', path: '/admin/dashboard/create-refunds', icon: HiOutlinePlus },
    { name: 'System Settings', path: '/admin/dashboard/settings', icon: FiSettings },
  ];

  return (
    <aside className="bg-[#0A0A0B] text-gray-300 h-screen w-full flex flex-col border-r border-white/5 shadow-2xl">
      {/* Logo Area */}
      <div className="p-6 flex items-center justify-between border-b border-white/5">
        <Link href="/admin/dashboard" className="transition-transform hover:scale-105 duration-300" onClick={onClose}>
          <Image
            src="/hault-logo.png"
            height={40}
            width={120}
            alt="Hault Express Delivery Administration"
            className="object-contain"
            unoptimized
          />
        </Link>
        {/* Mobile Close Button */}
        <button
          onClick={onClose}
          className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4 px-4">
          Menu
        </div>

        {navItems.map((item, index) => {
          // special rule for exact match on /admin/dashboard vs others
          const isActive = item.exact
            ? pathname === item.path
            : pathname.includes(item.path) && (item.path !== '/admin/dashboard' || pathname === '/admin/dashboard');

          // simple exception to ensure 'Dashboard' doesn't flag for all others
          if (item.name === 'All Shipments' && pathname !== '/admin/dashboard') return null;
          if (item.name === 'Dashboard' && pathname === '/admin/dashboard') return null; // Avoid dupes

          return (
            <Link key={index} href={item.path} onClick={onClose}>
              <div
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group cursor-pointer ${isActive
                  ? 'bg-white/10 text-white font-medium shadow-[0_4px_12px_rgba(255,255,255,0.05)]'
                  : 'hover:bg-white/5 hover:text-white'
                  }`}
              >
                <item.icon className={`text-xl ${isActive ? 'text-accent' : 'text-gray-500 group-hover:text-gray-300 transition-colors'}`} />
                <span className="text-sm">{item.name}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Footer Area */}
      <div className="p-4 border-t border-white/5">
        <button
          onClick={handleLogout}
          className="flex items-center w-full space-x-3 px-4 py-3 rounded-xl hover:bg-red-500/10 hover:text-red-400 transition-colors duration-200 group text-sm"
        >
          <CiLogout className="text-xl text-gray-500 group-hover:text-red-400" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}

export default NavBar;
