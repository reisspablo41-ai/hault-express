'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IoIosArrowForward } from 'react-icons/io';

const featured = [
  {
    img: '/informeds.jpg',
    badge: 'Digital Service',
    title: 'Informed Delivery® Emails',
    description:
      'Get free Daily Digest emails with previews of letter-sized mail and upcoming packages — all before they arrive.',
    link: '/dashboard/informed-delivery',
    cta: 'Sign Up for Free',
  },
  {
    img: '/pickupSchedule.jpg',
    badge: 'Convenience',
    title: 'Schedule a Free Package Pickup',
    description:
      "Place your packages on your doorstep and we'll collect them during regular delivery — completely free.",
    link: '/dashboard/schedule-package-delivery',
    cta: 'Schedule Pickup',
  },
  {
    img: '/informedDelivery.jpg',
    badge: 'Business Tool',
    title: 'Every Door Direct Mail® Service',
    description:
      'Target mail routes with postcards or flyers without mailing lists. Hault Express Delivery delivers to every door on the route.',
    link: '/dashboard/every-door-direct-mail',
    cta: 'Get Started',
  },
];

function FeaturedCitizenCargoLogistics() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.featured-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );

      gsap.fromTo(
        '.featured-card',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.18,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.featured-card',
            start: 'top 82%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="featured-header text-center mb-16">
          <span className="text-secondary text-sm font-semibold tracking-[0.25em] uppercase">
            Featured Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mt-3">
            Hault Express Delivery Products &amp; Services
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((item, i) => (
            <div
              key={i}
              className="featured-card group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-primary-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="text-primary font-bold text-xl mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
                <Link href={item.link}>
                  <button className="flex items-center gap-2 text-sm font-semibold text-primary bg-primary/5 hover:bg-primary hover:text-white rounded-full px-5 py-2.5 transition-all duration-300">
                    {item.cta} <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCitizenCargoLogistics;
