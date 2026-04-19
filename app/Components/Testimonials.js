'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'E-commerce Owner',
    location: 'United States',
    quote:
      'Hault Express Delivery completely transformed our fulfillment process. Packages arrive on time, tracking is flawless, and our customers are happier than ever.',
    rating: 5,
    initial: 'S',
    color: 'bg-blue-500',
  },
  {
    name: 'Marcus Chen',
    role: 'Small Business Owner',
    location: 'San Francisco, CA',
    quote:
      "The pet shipping service was exceptional. Our labrador made the journey safely and stress-free. The team's care and communication was outstanding.",
    rating: 5,
    initial: 'M',
    color: 'bg-emerald-500',
  },
  {
    name: 'Amelia Torres',
    role: 'Operations Manager',
    location: 'Miami, FL',
    quote:
      "We've been using Hault Express Delivery for 3 years across our 5 locations. The reliability and competitive pricing makes it our go-to for all business shipping.",
    rating: 5,
    initial: 'A',
    color: 'bg-secondary',
  },
  {
    name: 'David Kim',
    role: 'Freelance Artist',
    location: 'Chicago, IL',
    quote:
      'Shipping my artwork internationally felt daunting until Hault Express Delivery. Careful handling, real-time tracking, and everything arrived in perfect condition.',
    rating: 5,
    initial: 'D',
    color: 'bg-accent',
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-secondary fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t, isFeatured = false }) {
  return (
    <div
      className={`bg-primary-light border border-white/10 rounded-3xl p-8 flex flex-col h-full transition-all duration-300 ${
        isFeatured ? 'ring-1 ring-secondary/30' : ''
      }`}
    >
      <StarRating count={t.rating} />
      <blockquote className="text-white/75 text-base leading-relaxed italic mt-5 mb-6 flex-1">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3 pt-4 border-t border-white/8">
        <div className={`${t.color} text-white font-bold text-sm rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0`}>
          {t.initial}
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{t.name}</p>
          <p className="text-white/40 text-xs mt-0.5">{t.role} &middot; {t.location}</p>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);
  const intervalRef = useRef(null);

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  const goTo = (index) => {
    setActive((index + testimonials.length) % testimonials.length);
    resetInterval();
  };

  useEffect(() => {
    resetInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', once: true },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // On desktop show 2 cards: active and active+1
  const second = (active + 1) % testimonials.length;

  return (
    <section ref={sectionRef} className="py-24 bg-primary relative overflow-hidden">
      {/* Ambient decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-secondary text-sm font-semibold tracking-[0.25em] uppercase">
            Customer Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            What Our Clients Say
          </h2>
        </div>

        {/* Cards — 1 on mobile, 2 on md+ */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Primary card — always shown */}
          <div key={`primary-${active}`} style={{ animation: 'fadeSlideIn 0.4s ease-out' }}>
            <TestimonialCard t={testimonials[active]} isFeatured />
          </div>

          {/* Secondary card — only visible on md+ */}
          <div
            key={`secondary-${second}`}
            className="hidden md:block"
            style={{ animation: 'fadeSlideIn 0.4s ease-out 0.08s both' }}
          >
            <TestimonialCard t={testimonials[second]} />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                active === i
                  ? 'bg-secondary w-8 h-2'
                  : 'bg-white/20 hover:bg-white/40 w-2 h-2'
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

export default Testimonials;
