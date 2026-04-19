'use client';
import { motion } from 'framer-motion';
import { FiMonitor, FiMapPin, FiBarChart2 } from 'react-icons/fi';

export default function TechnologyTracking() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Text Content */}
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary uppercase text-xs font-bold tracking-widest mb-6 border border-primary/20">
              Next-Gen Tech
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-dark mb-6 tracking-tight leading-tight">
              Visibility from <br/>
              <span className="text-primary">End to End</span>
            </h2>
            <p className="text-dark/70 text-lg mb-8 leading-relaxed">
              At Hault Express Delivery Transport Service, we leverage cutting-edge tracking technology to provide unparalleled transparency. Know exactly where your cargo is at any moment, and monitor its condition in real-time.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: FiMapPin, title: 'Pinpoint GPS Tracking', desc: 'Real-time location data refreshed every 60 seconds.' },
                { icon: FiMonitor, title: 'Live Dashboard', desc: 'Access all your shipments through a unified, intuitive interface.' },
                { icon: FiBarChart2, title: 'Advanced Analytics', desc: 'Optimize your supply chain with actionable delivery insights.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                    <item.icon className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-dark mb-1">{item.title}</h4>
                    <p className="text-dark/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Visual Mockup */}
        <div className="lg:w-1/2 w-full rrelative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full" />
            
            <div className="relative bg-dark rounded-3xl border border-white/10 shadow-2xl overflow-hidden aspect-[4/3] flex flex-col">
              {/* Browser/Dashboard Header */}
              <div className="h-12 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="mx-auto w-1/2 h-6 bg-white/5 rounded-md"></div>
              </div>
              
              {/* Fake Dashboard Body */}
              <div className="flex-1 p-6 flex flex-col gap-4">
                <div className="flex gap-4 h-1/3">
                  <div className="w-1/3 bg-white/5 rounded-xl border border-white/5 animate-pulse"></div>
                  <div className="w-2/3 bg-primary/10 rounded-xl border border-primary/20 flex flex-col justify-end p-4">
                     <div className="w-full h-1/2 bg-gradient-to-t from-primary/40 to-transparent rounded-sm relative overflow-hidden">
                       <div className="absolute bottom-0 w-full h-[2px] bg-primary"></div>
                     </div>
                  </div>
                </div>
                <div className="flex-1 bg-white/5 rounded-xl border border-white/5 relative overflow-hidden flex items-center justify-center">
                   <FiMapPin className="text-6xl text-primary/30 animate-bounce" />
                   <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                </div>
              </div>
            </div>
            
            {/* Floating Element */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-zinc-100 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                 <FiMapPin />
              </div>
              <div>
                <p className="text-xs text-dark/50 font-bold uppercase tracking-wider">Status</p>
                <p className="text-dark font-bold">On Schedule</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
