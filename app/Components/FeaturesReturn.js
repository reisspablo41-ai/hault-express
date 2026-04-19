'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IoIosArrowForward } from 'react-icons/io';
import { FiMapPin, FiRefreshCw, FiHome } from 'react-icons/fi';

const returnPerks = [
  { icon: FiMapPin, text: 'Thousands of drop-off locations across the United States' },
  { icon: FiHome, text: 'Free scheduled home pickup available' },
  { icon: FiRefreshCw, text: 'Works for retail, e-commerce & personal returns' },
];

function FeaturesReturn() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.return-img',
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );
      gsap.fromTo(
        '.return-text',
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: 'power3.out',
          delay: 0.1,
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
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="return-img relative rounded-3xl overflow-hidden h-80 md:h-[500px]">
            <Image
              src="/returnitCitizenCargoLogistics.jpg"
              alt="Easy Returns with Hault Express Delivery"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="bg-secondary text-primary-dark text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                Hassle-Free Returns
              </span>
            </div>
          </div>

          {/* Text */}
          <div className="return-text">
            <span className="text-secondary text-sm font-semibold tracking-[0.25em] uppercase">
              Returns &amp; Locations
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4 mb-4 leading-tight">
              Return It When and
              <br />
              Where You Want
            </h2>
            <div className="w-16 h-1 bg-secondary mb-6" />
            <p className="text-gray-500 leading-relaxed mb-8">
              Drop off returns at thousands of Hault Express Delivery locations across the United States, or
              schedule a free home pickup. Flexible options built around your
              schedule — not ours.
            </p>

            {/* Perks list */}
            <ul className="space-y-3 mb-10">
              {returnPerks.map((perk, i) => {
                const Icon = perk.icon;
                return (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <span className="bg-secondary/10 border border-secondary/20 rounded-lg p-2 flex-shrink-0">
                      <Icon className="text-secondary text-base" />
                    </span>
                    <span className="text-sm">{perk.text}</span>
                  </li>
                );
              })}
            </ul>

            <Link href="/ContactUs/FileClaim">
              <button className="group flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-light transition-all hover:scale-105">
                Find a Location
                <IoIosArrowForward className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesReturn;
