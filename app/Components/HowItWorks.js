'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiMonitor, FiTruck, FiMapPin } from 'react-icons/fi';

const steps = [
  {
    icon: FiMonitor,
    number: '01',
    title: 'Book Online',
    description:
      'Create a shipment in minutes from any device. Enter pickup and delivery details, select your service level, and confirm.',
    color: 'blue',
    iconBg: 'bg-blue-500/10 border-blue-500/20',
    iconColor: 'text-blue-500',
    numColor: 'text-blue-500/20',
  },
  {
    icon: FiTruck,
    number: '02',
    title: 'We Pick Up',
    description:
      'Our team collects your package from your doorstep at a scheduled time. No waiting in line, no hassle whatsoever.',
    color: 'primary',
    iconBg: 'bg-primary/10 border-primary/20',
    iconColor: 'text-primary',
    numColor: 'text-primary/20',
  },
  {
    icon: FiMapPin,
    number: '03',
    title: 'Track in Real-Time',
    description:
      'Monitor your shipment live with GPS precision. Get notified at every milestone until safe delivery.',
    color: 'secondary',
    iconBg: 'bg-secondary/10 border-secondary/20',
    iconColor: 'text-secondary',
    numColor: 'text-secondary/20',
  },
];

function HowItWorks() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.how-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', once: true },
        }
      );
      gsap.fromTo(
        '.step-card',
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, stagger: 0.2, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.step-card', start: 'top 82%', once: true },
        }
      );
      gsap.fromTo(
        '.connector-line',
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1, duration: 1.4, ease: 'power2.inOut',
          scrollTrigger: { trigger: '.connector-line', start: 'top 80%', once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Subtle top gradient wash */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="how-header text-center mb-20">
          <span className="text-secondary text-sm font-semibold tracking-[0.25em] uppercase">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mt-3 mb-4">
            How It Works
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto leading-relaxed">
            Getting your package where it needs to go is easy with Hault Express Delivery.
            Three steps and you&apos;re done.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-8 md:gap-10">

          {/* Animated connector line (desktop) */}
          <div className="connector-line hidden md:block absolute top-[2.8rem] left-[28%] right-[28%] h-px z-0">
            <div className="w-full h-full bg-gradient-to-r from-blue-500/30 via-primary/40 to-secondary/40" />
          </div>

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="step-card relative flex flex-col items-center text-center z-10">

                {/* Large background number */}
                <span className={`absolute -top-6 left-1/2 -translate-x-1/2 text-[6rem] font-black ${step.numColor} select-none pointer-events-none leading-none`}>
                  {step.number}
                </span>

                {/* Icon circle */}
                <div className={`relative ${step.iconBg} border rounded-2xl p-5 mb-6 shadow-sm`}>
                  <Icon className={`${step.iconColor} text-2xl`} />
                </div>

                {/* Step label pill */}
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2">
                  Step {step.number}
                </span>

                <h3 className="font-bold text-xl text-primary mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[260px] mx-auto">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
