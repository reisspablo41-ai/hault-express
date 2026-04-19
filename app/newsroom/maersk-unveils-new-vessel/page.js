import Link from 'next/link';
import Footer from '@/app/Components/Footer';
import Image from 'next/image';
import { FiClock, FiTag, FiChevronRight, FiArrowLeft, FiGlobe, FiTrendingDown } from 'react-icons/fi';

export default function BlogPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Blog Hero Section */}
      <section className="relative pt-32 pb-16 bg-slate-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-10">
            <Link href="/newsroom" className="hover:text-secondary transition-colors">Newsroom</Link>
            <FiChevronRight className="text-slate-300" />
            <span className="text-slate-500">Sustainability</span>
          </nav>

          <div className="flex flex-wrap items-center gap-6 mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-[10px] font-black uppercase tracking-widest">
              <FiTag /> Sea Freight
            </span>
            <span className="flex items-center gap-2 text-slate-400 text-xs font-bold">
              <FiClock className="text-secondary" /> October 2024
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-8 tracking-tight leading-[1.1]">
            Maersk Unveils Dual-Fuel <span className="text-secondary">Methanol Vessel</span> in Decarbonization Push
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <article className="pb-32">
        <div className="max-w-5xl mx-auto px-6 -mt-8 relative z-20">
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white mb-16 aspect-[21/9] relative">
            <Image
              src="/maesrsk.webp"
              fill
              alt="Maersk Methanol Vessel"
              className="object-cover"
              priority
            />
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-xl text-slate-600 leading-relaxed font-medium mb-10">
                SINGAPORE — Denmark-based shipping and logistics giant Maersk unveiled its latest dual-fuel methanol vessel on Thursday, signaling a major ramp-up in the industry’s decarbonization efforts for global trade.
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-16">
                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                  <FiGlobe className="text-3xl text-secondary mb-4" />
                  <h4 className="text-primary font-bold text-xl mb-2">Sustainable Fleet</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    The newly named A.P. Møller is a 350-meter-long ship capable of running on green methanol, significantly reducing fossil fuel dependency.
                  </p>
                </div>
                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                  <FiTrendingDown className="text-3xl text-emerald-500 mb-4" />
                  <h4 className="text-primary font-bold text-xl mb-2">Emission Targets</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Green methanol saves up to 280 tons of CO2 per day, helping Maersk reach its goal of net-zero emissions by 2040.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-extrabold text-primary mt-16 mb-6">A Tipping Point for Shipping</h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                Speaking to CNBC’s “Squawk Box Asia,” Maersk’s Asia-Pacific president, Ditlev Blicher, said the vessels represent the latest technology ready to decarbonize shipping. “[This technology] allows the industry to shift from black fuels significantly reducing the carbon outlets of normal shipping,” he said.
              </p>

              <div className="bg-primary text-white p-10 md:p-14 rounded-[3rem] shadow-2xl my-16 relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                <p className="text-2xl font-medium leading-relaxed italic mb-8 relative z-10">
                  "Replacing just 12 vessels with large dual-fuel ships like the A.P. Møller could save 1.5 million metric tons of CO2 — double the annual emissions of Copenhagen."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-px bg-secondary"></div>
                  <p className="text-secondary font-black uppercase tracking-widest text-xs">Sustainability Impact Report</p>
                </div>
              </div>

              <h2 className="text-3xl font-extrabold text-primary mt-16 mb-6">Market Trends & Expansion</h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                About 170 dual-fuel methanol vessels are now on order industry-wide, according to Blicher. While green methanol presents higher production costs, regulations are increasingly disincentivizing traditional "black" fuels to make green alternatives economically viable.
              </p>

              <p className="text-slate-500 leading-relaxed">
                In October, Maersk raised its full-year forecasts reporting strong demand and revenue of $15.8 billion, despite global trade disruptions. The company continues to lead the maritime industry toward a more sustainable and transparent future.
              </p>
            </div>

            {/* Post Footer */}
            <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <Link href="/newsroom" className="inline-flex items-center gap-3 text-sm font-black text-primary hover:text-secondary transition-all">
                <FiArrowLeft className="text-xl" /> BACK TO NEWSROOM
              </Link>
              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-secondary hover:text-primary-dark transition-all">
                  <span className="text-xs font-bold">In</span>
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-secondary hover:text-primary-dark transition-all">
                  <span className="text-xs font-bold">X</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
