'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiPackage, FiGlobe, FiClock, FiHeadphones } from 'react-icons/fi';

const stats = [
  { icon: FiPackage,    value: 10,   suffix: 'M+', label: 'Packages Delivered' },
  { icon: FiGlobe,      value: 150,  suffix: '+',  label: 'Countries Covered'  },
  { icon: FiClock,      value: 99.9, suffix: '%',  label: 'On-Time Delivery'   },
  { icon: FiHeadphones, value: 24,   suffix: '/7', label: 'Customer Support'   },
];

function StatsBar() {
  const sectionRef = useRef(null);
  const countersRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.stat-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, stagger: 0.15, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', once: true },
        }
      );

      stats.forEach((stat, i) => {
        const el = countersRef.current[i];
        if (!el) return;
        const target = { val: 0 };
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            gsap.to(target, {
              val: stat.value,
              duration: 2,
              ease: 'power1.out',
              onUpdate: () => {
                el.textContent =
                  stat.value % 1 !== 0
                    ? target.val.toFixed(1)
                    : Math.round(target.val).toString();
              },
            });
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-primary-dark overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-secondary/60 to-transparent" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="stat-item flex flex-col items-center text-center px-6">
                {/* Icon */}
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-secondary/20 rounded-2xl blur-md" />
                  <div className="relative bg-secondary/10 border border-secondary/25 rounded-2xl p-3.5">
                    <Icon className="text-secondary text-xl" />
                  </div>
                </div>

                {/* Number */}
                <div className="text-4xl md:text-5xl font-extrabold text-white leading-none mb-1 tracking-tight">
                  <span ref={(el) => (countersRef.current[i] = el)}>0</span>
                  <span className="text-secondary">{stat.suffix}</span>
                </div>

                {/* Label */}
                <p className="text-white/38 text-xs mt-2 font-medium tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
    </section>
  );
}

export default StatsBar;
