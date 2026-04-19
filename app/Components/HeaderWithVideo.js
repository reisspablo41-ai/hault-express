'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { HomeContextProvider } from '../Context/HomeContext';
import Input from './Input';
import { IoIosArrowForward } from 'react-icons/io';
import { FiPackage, FiMapPin } from 'react-icons/fi';

function HeaderWithVideo() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo('.hero-badge',   { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.6 }, 0.4)
        .fromTo('.hero-headline',{ autoAlpha: 0, y: 36 }, { autoAlpha: 1, y: 0, duration: 0.85 }, 0.6)
        .fromTo('.hero-sub',     { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.7  }, 0.85)
        .fromTo('.hero-ctas',    { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.65 }, 1.05)
        .fromTo('.hero-widget',  { autoAlpha: 0, y: 28, scale: 0.98 }, { autoAlpha: 1, y: 0, scale: 1, duration: 1.0 }, 1.2);

      gsap.to(scrollRef.current, {
        y: 8, repeat: -1, yoyo: true, ease: 'sine.inOut', duration: 1.3,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <HomeContextProvider>
      <div ref={heroRef} className="relative w-full min-h-screen overflow-hidden flex flex-col">
        {/* Video background */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover scale-110"
          autoPlay loop muted playsInline preload="auto"
        >
          <source src="https://cdn.pixabay.com/video/2023/09/25/182245-868128527_medium.mp4" type="video/mp4" />
        </video>

        {/* Layered gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/95 via-primary/82 to-primary-dark/78" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Ambient glows */}
        <div className="absolute top-1/4 right-1/3 w-[600px] h-[600px] bg-secondary/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-primary-light/8 rounded-full blur-[80px] pointer-events-none" />

        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />

        {/* Main content */}
        <div className="relative z-10 flex flex-col flex-1 min-h-screen">

          {/* Hero text — vertically centred in upper portion */}
          <div className="flex-1 flex items-center justify-center px-6 pt-28 pb-10">
            <div className="max-w-4xl mx-auto text-center">

              {/* Pill badge */}
              <div className="hero-badge inline-flex items-center gap-2.5 bg-white/6 border border-white/14 rounded-full px-5 py-2 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-blink flex-shrink-0" />
                <span className="text-white/65 text-[11px] font-semibold tracking-[0.25em] uppercase">
                  Trusted Worldwide Logistics
                </span>
              </div>

              {/* Headline */}
              <h1 className="hero-headline text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold text-white leading-[1.02] tracking-tight mb-6">
                Ship Smarter.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-amber-300 to-secondary">
                  Track Every Mile.
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="hero-sub text-white/50 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                Hault Express Delivery delivers packages across 150+ countries with real-time GPS tracking,
                competitive rates, and unbeatable on-time reliability.
              </p>

              {/* CTA buttons */}
              <div className="hero-ctas flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/ship/sending-package">
                  <button className="group flex items-center gap-2.5 px-8 py-4 bg-secondary text-primary-dark font-bold rounded-full text-sm md:text-base hover:bg-secondary/90 hover:scale-105 hover:shadow-glow-secondary transition-all duration-300">
                    <FiPackage className="text-lg flex-shrink-0" />
                    Ship a Package
                    <IoIosArrowForward className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link href="/Track">
                  <button className="flex items-center gap-2.5 px-8 py-4 border-2 border-white/22 text-white font-semibold rounded-full text-sm md:text-base hover:border-white/50 hover:bg-white/8 transition-all duration-300">
                    <FiMapPin className="text-lg flex-shrink-0" />
                    Track a Package
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Widget — anchored to bottom, bleeds into next section */}
          <div className="relative z-10 px-4 sm:px-6 w-full max-w-3xl mx-auto">
            <div className="hero-widget glass rounded-2xl px-6 sm:px-8 pt-12 pb-24 shadow-2xl">
              <Input />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          ref={scrollRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-white/25 text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-white/12 relative overflow-hidden rounded-full">
            <div className="absolute inset-x-0 top-0 h-1/2 bg-secondary animate-scroll-line rounded-full" />
          </div>
        </div>
      </div>
    </HomeContextProvider>
  );
}

export default HeaderWithVideo;
