'use client';
import { HiMenuAlt2 } from 'react-icons/hi';
import UserDetails from './UserDetails';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import useScrollPosition from '../Hooks/scrollPostionDetection';
import MobileMainMenu from './MobileMainMenu';
import { useState } from 'react';

function MobileHeader() {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const pathname = usePathname();
  const scrollPosition = useScrollPosition(100);
  return (
    <div
      className={`fixed top-0 w-full z-50 transition-all flex items-center ${
        pathname === '/'
          ? scrollPosition
            ? 'bg-gray-900 text-white shadow-lg' // Home page after scroll
            : 'bg-transparent text-black' // Home page before scroll
          : scrollPosition
          ? 'bg-gray-900 text-white shadow-lg' // Other pages after scroll
          : 'bg-primary text-white'
      }`}
    >
      <Link href="/">
        <Image
          src="/hault-logo.png"
          width={100}
          height={70}
          sizes="(max-width: 600px) 100px, 200px"
          alt="Header-Logo"
          className="text-center "
          unoptimized
        />
      </Link>
      <HiMenuAlt2
        className="text-white text-3xl"
        onClick={() => setIsMobileMenu(true)}
      />
      {isMobileMenu ? (
        <MobileMainMenu
          isMobileMenu={isMobileMenu}
          setIsMobileMenu={setIsMobileMenu}
        />
      ) : (
        ''
      )}

      <div className="flex-1"></div>

      <UserDetails />
    </div>
  );
}

export default MobileHeader;
