'use client';

import { useEffect, useState } from 'react';

export default function useScrollPosition({ threshold = 100 }) {
  const [scrollPosition, setScrollPosition] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY >= threshold) {
        setScrollPosition(true);
      } else {
        setScrollPosition(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }),
    [threshold]; // Empty dependency array ensures this runs once on mount

  return scrollPosition;
}
