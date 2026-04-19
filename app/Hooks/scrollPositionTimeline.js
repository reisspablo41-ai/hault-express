'use client';

import { useEffect, useState } from 'react';

export default function useScrollTimeline() {
  const [scrollPosition, setScrollPosition] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      console.log(window.scrollY);
      if (currentScrollY >= 1870) {
        setScrollPosition(true);
      } else {
        setScrollPosition(false);
      }
      setScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup: Remove the event listener when the component unmounts
    console.log(scrollPosition);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }),
    []; // Empty dependency array ensures this runs once on mount

  return [scrollPosition, scrollY];
}
