'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiPackage, FiMapPin, FiCalendar } from 'react-icons/fi';
import { MdOutlinePets } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';

const services = [
  {
    icon: FiPackage,
    title: 'Ship a Package',
    description:
      'Domestic and international shipping at competitive rates. From small parcels to large freight — we handle it all with speed and care.',
    link: '/ship/sending-package',
    accent: 'blue',
    iconBg: 'bg-blue-500/10 border-blue-500/20',
    iconColor: 'text-blue-500',
    hoverBorder: 'hover:border-blue-500/40',
    badge: 'Most Popular',
  },
  {
    icon: FiMapPin,
    title: 'Track Your Shipment',
    description:
      'Real-time GPS tracking with live map updates. Know exactly where your package is at every step.',
    link: '/Track',
    iconBg: 'bg-secondary/10 border-secondary/20',
    iconColor: 'text-secondary',
    hoverBorder: 'hover:border-secondary/40',
  },
  {
    icon: FiCalendar,
    title: 'Schedule a Pickup',
    description:
      'Free doorstep pickup during regular delivery hours. Book online in minutes.',
    link: '/dashboard/schedule-package-delivery',
    iconBg: 'bg-emerald-500/10 border-emerald-500/20',
    iconColor: 'text-emerald-500',
    hoverBorder: 'hover:border-emerald-500/40',
  },
  {
    icon: MdOutlinePets,
    title: 'Pet Shipping',
    description:
      'Safe, stress-free pet transportation with specialised care. Your companions deserve the best.',
    link: '/ContactUs',
    iconBg: 'bg-accent/10 border-accent/20',
    iconColor: 'text-accent',
    hoverBorder: 'hover:border-accent/40',
  },
];

function Features() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.services-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', once: true },
        }
      );
      gsap.fromTo(
        '.service-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, stagger: 0.1, duration: 0.75, ease: 'power3.out',
          scrollTrigger: { trigger: '.service-card', start: 'top 82%', once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const [featured, ...rest] = services;
  const FeaturedIcon = featured.icon;

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="services-header text-center mb-16">
          <span className="text-secondary text-sm font-semibold tracking-[0.25em] uppercase">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mt-3 mb-4">
            Our Core Services
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            From single parcels to enterprise logistics, Hault Express Delivery provides
            end-to-end shipping solutions designed around your needs.
          </p>
        </div>

        {/* Asymmetric grid: hero card left + 3 smaller right */}
        <div className="grid lg:grid-cols-5 gap-6 items-stretch">

          {/* Hero / featured card */}
          <Link href={featured.link} className="lg:col-span-2 service-card">
            <div className={`group relative bg-gradient-to-br from-blue-500/8 via-blue-400/4 to-transparent border border-blue-500/15 ${featured.hoverBorder} rounded-3xl p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover cursor-pointer overflow-hidden`}>

              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              {/* Badge */}
              {featured.badge && (
                <span className="absolute top-6 right-6 bg-secondary text-primary-dark text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {featured.badge}
                </span>
              )}

              {/* Icon */}
              <div className={`${featured.iconBg} border rounded-2xl p-4 w-fit mb-6`}>
                <FeaturedIcon className={`${featured.iconColor} text-3xl`} />
              </div>

              {/* Content */}
              <h3 className="text-primary font-bold text-2xl mb-4 leading-tight">
                {featured.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1">
                {featured.description}
              </p>

              <div className="flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:gap-3 transition-all">
                Get Started <IoIosArrowForward className="text-base" />
              </div>
            </div>
          </Link>

          {/* Three smaller cards */}
          <div className="lg:col-span-3 grid sm:grid-cols-1 gap-5 service-card">
            {rest.map((service, i) => {
              const Icon = service.icon;
              return (
                <Link href={service.link} key={i}>
                  <div className={`group flex items-start gap-5 bg-white border border-gray-100 ${service.hoverBorder} rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover cursor-pointer`}>
                    <div className={`${service.iconBg} border rounded-xl p-3 flex-shrink-0`}>
                      <Icon className={`${service.iconColor} text-xl`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-primary font-bold text-base mb-1.5">{service.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                    </div>
                    <IoIosArrowForward className="text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
