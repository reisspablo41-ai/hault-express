'use client';

import Link from 'next/link';

function MainNav({ children, onClick, className }) {
  return (
    <button
      className={`text-center ${className} text-white flex items-center justify-center xs:p-2 md:pr-10 xs:text-sm md:text-xl`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default MainNav;
