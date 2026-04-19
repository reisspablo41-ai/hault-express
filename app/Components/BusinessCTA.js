'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IoIosArrowForward } from 'react-icons/io';
import { FiBarChart2, FiUsers, FiZap } from 'react-icons/fi';

const perks = [
  { icon: FiBarChart2, label: 'Volume Discounts' },
  { icon: FiUsers, label: 'Dedicated Account Manager' },
  { icon: FiZap, label: 'API Integration' },
];

function BusinessCTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cta-item',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-primary-dark relative overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/8 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* Tag */}
        <span className="cta-item inline-block text-secondary text-sm font-semibold tracking-[0.25em] uppercase mb-4">
          For Businesses
        </span>

        {/* Headline */}
        <h2 className="cta-item text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Scale Your Shipping
          <br className="hidden md:block" />
          with{' '}
          <span className="text-secondary">Hault Express Delivery Business</span>
        </h2>

        {/* Sub text */}
        <p className="cta-item text-white/50 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Unlock volume discounts, dedicated account management, API
          integrations, and advanced analytics — everything your growing
          business needs to ship smarter.
        </p>

        {/* Perks */}
        <div className="cta-item flex flex-wrap justify-center gap-4 mb-12">
          {perks.map((perk, i) => {
            const Icon = perk.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white/70 text-sm"
              >
                <Icon className="text-secondary" />
                {perk.label}
              </div>
            );
          })}
        </div>

        {/* CTAs */}
        <div className="cta-item flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/ContactUs">
            <button className="px-8 py-4 bg-secondary text-primary-dark font-bold rounded-full flex items-center gap-2 hover:bg-secondary/90 transition-all hover:scale-105 hover:shadow-glow-secondary mx-auto">
              Get a Quote <IoIosArrowForward />
            </button>
          </Link>
          <Link href="/buisness/weekend-pickup-deliveries">
            <button className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:border-white/50 hover:bg-white/5 transition-all hover:scale-105 mx-auto">
              Explore Business Plans
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BusinessCTA;
