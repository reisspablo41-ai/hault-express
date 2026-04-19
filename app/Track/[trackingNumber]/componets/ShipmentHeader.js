'use client';
import useScrollPosition from '@/app/Hooks/scrollPostionDetection';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Suspense, useState } from 'react';

function ShipmentHeader() {
  const scrollPosition = useScrollPosition(100);
  const pathname = usePathname();
  const segments = pathname.split('/'); // Split the URL by "/"
  const trackingNumber = segments[2]; // Get the last segment

  const links = [
    { href: '/Track', label: 'Track Package' },
    { href: `/dashboard/${trackingNumber}`, label: 'Full Delivery Details' },
  ];

  return (
    <div className="bg-primary mt-[7%]">
      <nav
        className={`flex text-white fixed top-[13vh] left-0 w-full z-50 mx-auto transition-all  ${
          scrollPosition ? 'bg-primary text-white shadow-lg' : 'bg-gray-900 '
        }`}
      >
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`${
              pathname === href ? 'bg-secondary font-bold' : ''
            } p-5 text-white`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default ShipmentHeader;
