'use client';
import Image from 'next/image';
import UserDetails from './UserDetails';
import Link from 'next/link';
import useScrollPosition from '../Hooks/scrollPostionDetection';

import { usePathname } from 'next/navigation';

import MainMenu from './MainMenu';
import useWindowWidth from './Functions/getBrowserWidth';
import MobileHeader from './MobileHeader';
import { useUserContext } from '../Context/UserContext';
import { useEffect } from 'react';

function Header() {
  const pathname = usePathname();

  const scrollPosition = useScrollPosition(100);

  const width = useWindowWidth();

  return (
    <>
      {pathname === '/' ? (
        ''
      ) : (
        <div className="xs:h-[10vh] bg-transparent md:h-0"></div>
      )}
      {width >= 1133 ? (
        <div
          className={`fixed top-0 w-full z-50 transition-all duration-300 flex items-center ${pathname === '/'
            ? scrollPosition
              ? 'bg-primary/95 backdrop-blur-md text-white shadow-2xl border-b border-white/10'
              : 'bg-transparent text-white'
            : scrollPosition
              ? 'bg-primary/95 backdrop-blur-md text-white shadow-2xl border-b border-white/10'
              : 'bg-primary text-white'
            }`}
        >
          <div className="flex-1">
            <Link href="/">
              <Image
                src="/hault-logo.png"
                width={100}
                height={50}
                sizes="(max-width: 600px) 100px, 200px"
                alt="Header-Logo"
                unoptimized
              />
            </Link>
          </div>
          <MainMenu />
          <UserDetails />
        </div>
      ) : (
        <MobileHeader />
      )}
    </>
  );
}

export default Header;
