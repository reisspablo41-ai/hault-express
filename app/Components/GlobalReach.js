'use client';
import { motion } from 'framer-motion';
import { FiGlobe, FiTruck, FiClock } from 'react-icons/fi';

const features = [
  {
    icon: FiGlobe,
    title: 'Global Delivery Network',
    description: 'Serving over 220 countries and territories with unparalleled precision and reliability.',
  },
  {
    icon: FiTruck,
    title: 'Advanced Fleet',
    description: 'Equipped with temperature-controlled and specialized vehicles for all transportation needs.',
  },
  {
    icon: FiClock,
    title: 'Rapid Transit Times',
    description: 'Optimized routing algorithms ensure your shipments arrive exactly when expected.',
  },
];

export default function GlobalReach() {
  return (
    <section className="relative bg-dark py-28 overflow-hidden border-t border-white/5">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary-dark/20 rounded-full blur-[100px]" />
        
        {/* Subtle grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-primary/20 text-primary uppercase text-xs font-bold tracking-widest mb-6 border border-primary/30 shadow-[0_0_15px_rgba(13,148,136,0.3)]">
              Beyond Borders
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Empowering Your Logistics <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-primary">Worldwide</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl font-light">
              Hault Express Delivery Transport Service seamlessly connects continents, providing end-to-end visibility and uncompromising care for your most critical shipments.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.15, ease: 'easeOut' }}
              className="group relative rounded-3xl bg-white/[0.03] border border-white/10 p-8 hover:border-primary/50 transition-all duration-500 overflow-hidden backdrop-blur-sm"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="w-16 h-16 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center mb-8 text-primary group-hover:text-primary-light group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 shadow-[0_0_0_rgba(13,148,136,0)] group-hover:shadow-[0_0_30px_rgba(20,184,166,0.4)]">
                <feature.icon className="text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-light transition-colors duration-300">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed font-light text-base group-hover:text-white/80 transition-colors duration-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
