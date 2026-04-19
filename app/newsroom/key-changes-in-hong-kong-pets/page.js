import Link from 'next/link';
import Footer from '@/app/Components/Footer';
import Image from 'next/image';
import { FiClock, FiTag, FiChevronRight, FiArrowLeft, FiAlertCircle } from 'react-icons/fi';

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
            <span className="text-slate-500">Service Updates</span>
          </nav>

          <div className="flex flex-wrap items-center gap-6 mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-widest">
              <FiTag /> Pet Shipping
            </span>
            <span className="flex items-center gap-2 text-slate-400 text-xs font-bold">
              <FiClock className="text-secondary" /> December 2024
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-8 tracking-tight leading-[1.1]">
            Latest Pet Shipping Updates: Key Changes in <span className="text-secondary">Hong Kong & Singapore</span>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <article className="pb-32">
        <div className="max-w-5xl mx-auto px-6 -mt-8 relative z-20">
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white mb-16 aspect-[21/9] relative">
            <Image
              src="/pet-updates.jpg"
              fill
              alt="Hong Kong Pet Updates"
              className="object-cover"
              priority
            />
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-xl text-slate-600 leading-relaxed font-medium mb-12">
                As global pet relocation becomes more complex, major hubs like Hong Kong and Singapore are updating their regulations to balance public health with the needs of pet owners. Here are the critical changes for 2024–2025.
              </p>

              <div className="space-y-12">
                <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 group hover:shadow-xl transition-all duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                      <FiAlertCircle className="text-xl" />
                    </div>
                    <h3 className="text-2xl font-black text-primary group-hover:text-secondary transition-colors">Hong Kong: Macau Quarantine Reduction</h3>
                  </div>
                  <p className="text-slate-500 leading-relaxed mb-4">
                    Starting December 1, 2024, Hong Kong has successfully reduced the quarantine period for cats and dogs imported from Macau from 120 days to just 30 days.
                  </p>
                  <p className="text-sm text-slate-400 italic">Source: South China Morning Post.</p>
                </div>

                <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 group hover:shadow-xl transition-all duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500">
                      <FiTag className="text-xl" />
                    </div>
                    <h3 className="text-2xl font-black text-primary group-hover:text-secondary transition-colors">Singapore: Revised Risk Categorization</h3>
                  </div>
                  <p className="text-slate-500 leading-relaxed mb-4">
                    Effective July 1, 2024, Singapore’s Animal & Veterinary Service (AVS) revised its rabies risk categorization, transitioning from a four-category system to a streamlined three-schedule structure. This update aligns Singapore with international biosecurity standards.
                  </p>
                </div>

                <div className="bg-slate-900 text-white p-10 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
                  <h4 className="text-secondary font-black uppercase tracking-widest text-sm mb-6">Urgent Advisory: Rabies Vaccines</h4>
                  <p className="text-white/80 leading-relaxed mb-8 text-lg">
                    In September 2024, Singapore’s AVS advised against using the Canvac R (Dyntec) rabies vaccine due to potency concerns. All potential importers must ensure rabies serology test reports originate from AVS-approved laboratories.
                  </p>
                  <div className="h-px bg-white/10 w-full mb-8"></div>
                  <p className="text-white/60 text-sm">
                    Failure to comply with vaccination requirements can lead to extended quarantine or deportation of pets at the owner's expense.
                  </p>
                </div>

                <div className="pt-10">
                  <h3 className="text-3xl font-extrabold text-primary mb-8">Advocating for Change</h3>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    A recent survey among Hong Kong pet owners revealed that 80% consider existing quarantine rules too harsh, with over 90% expressing concerns about waiting times for limited spots. These statistics have prompted legislative discussions regarding pet-friendly public transport and further quarantine adjustments.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    These developments reflect an ongoing trend towards a more accommodating pet relocation landscape, balancing safety with animal welfare.
                  </p>
                </div>
              </div>
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
