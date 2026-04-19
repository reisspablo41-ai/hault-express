'use client';
import { motion } from 'framer-motion';
import { FiCommand, FiHeart, FiCpu, FiShoppingBag, FiArrowRight } from 'react-icons/fi';

const industries = [
  {
    icon: FiShoppingBag,
    title: 'E-Commerce & Retail',
    desc: 'High-volume B2C distribution with ultra-fast last-mile logistics to keep your customers delighted.'
  },
  {
    icon: FiHeart,
    title: 'Healthcare & Pharma',
    desc: 'Strict temperature-controlled environments for sensitive medical supplies and pharmaceuticals.'
  },
  {
    icon: FiCpu,
    title: 'Tech & Electronics',
    desc: 'Extra-secure, anti-static handling and padded transit for high-value technology items.'
  },
  {
    icon: FiCommand,
    title: 'Manufacturing',
    desc: 'Heavy freight, machinery transportation, and raw materials supply chain management.'
  }
];

export default function IndustrySolutions() {
  return (
    <section className="bg-dark py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row gap-8 justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-4 rounded-full bg-primary/20 text-primary-light uppercase text-xs font-bold tracking-widest mb-6 border border-primary/30">
              Specialized Service
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Tailored Logistics for <br />
              <span className="text-primary-light">Every Industry</span>
            </h2>
          </div>
          <p className="text-white/60 text-lg md:text-right max-w-md">
            No two industries are alike. We provide specialized handling, bespoke routing, and customized workflows to match your exact business requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group flex flex-col h-full cursor-pointer"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary-light text-2xl mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-transform duration-300">
                <item.icon />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-white/60 leading-relaxed font-light mb-8 flex-1">{item.desc}</p>
              
              <div className="flex items-center gap-2 text-primary-light font-semibold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <span>Learn more</span>
                <FiArrowRight />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
