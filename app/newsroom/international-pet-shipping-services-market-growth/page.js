import Link from 'next/link';
import Footer from '@/app/Components/Footer';
import Image from 'next/image';
import { FiClock, FiTag, FiChevronRight, FiArrowLeft } from 'react-icons/fi';

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
            <span className="text-slate-500">Market Insights</span>
          </nav>

          <div className="flex flex-wrap items-center gap-6 mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-[10px] font-black uppercase tracking-widest">
              <FiTag /> Market Trends
            </span>
            <span className="flex items-center gap-2 text-slate-400 text-xs font-bold">
              <FiClock className="text-secondary" /> November 2024
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-8 tracking-tight leading-[1.1]">
            International Pet Shipping Services <span className="text-secondary">Market Growth</span> Trends Report
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <article className="pb-32">
        <div className="max-w-5xl mx-auto px-6 -mt-8 relative z-20">
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white mb-16 aspect-[21/9] relative">
            <Image
              src="/pet-growth.jpg"
              fill
              alt="Pet Shipping Market Trends"
              className="object-cover"
              priority
            />
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-xl text-slate-600 leading-relaxed font-medium mb-10 first-letter:text-7xl first-letter:font-black first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                The global International Pet Shipping Services market was valued at approximately USD 1.8 billion in 2022 and is projected to grow at a compound annual growth rate (CAGR) of 9.6% from 2023 to 2030. This growth is attributed to the rising pet ownership worldwide and increasing international relocations, especially in developed regions.
              </p>

              <div className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100 my-12">
                <h3 className="text-primary font-bold text-2xl mb-4">Driving Factors</h3>
                <p className="text-slate-500 leading-relaxed mb-0">
                  The growing demand for pet transport services, driven by the humanization of pets and the desire for families to travel internationally with their animals, is a key factor influencing the market's expansion. Additionally, increasing concerns regarding pet safety during travel have prompted investments in specialized pet transport and logistics solutions, further boosting market growth.
                </p>
              </div>

              <h2 className="text-3xl font-extrabold text-primary mt-16 mb-6">Innovative Safety Features</h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                Key trends in the market include the rise of door-to-door pet shipping services, adoption of advanced technologies such as GPS tracking and live video monitoring for pets during transit, and a focus on enhanced customer service and pet comfort. As regulations for animal travel become stricter in some countries, businesses in the market are also adapting by offering specialized services to ensure compliance with local pet importation rules.
              </p>

              <p className="text-slate-500 leading-relaxed mb-12">
                The latest news indicates a growing trend of pet-friendly airlines and shipping companies offering more comprehensive, safe, and stress-free travel options for pets. The market's future growth is also influenced by the increasing adoption of pet insurance, which helps offset the cost of shipping services for pet owners.
              </p>

              <div className="relative group p-1 bg-gradient-to-br from-secondary to-primary rounded-[2rem] overflow-hidden mb-16">
                <div className="bg-white p-10 rounded-[1.9rem]">
                  <h2 className="text-2xl font-black text-primary mb-4 uppercase tracking-tight">Market Segmentation Insights</h2>
                  <p className="text-slate-500 leading-relaxed italic">
                    The International Pet Shipping Services Market is segmented based on key criteria like demographics, geography, product type, application, and end-user, enabling a focused approach for each unique group.
                  </p>
                </div>
              </div>

              <p className="text-slate-500 leading-relaxed">
                By analyzing each segment's characteristics, preferences, and behaviors, businesses can customize their marketing strategies, products, and services to align with specific needs. This targeted approach boosts market penetration, improves customer satisfaction, and drives profitability, ultimately supporting a more effective market strategy and enhancing overall business growth.
              </p>
            </div>

            {/* Post Footer */}
            <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <Link href="/newsroom" className="inline-flex items-center gap-3 text-sm font-black text-primary hover:text-secondary transition-all">
                <FiArrowLeft className="text-xl" /> BACK TO NEWSROOM
              </Link>
              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-secondary hover:text-primary-dark transition-all">
                  {/* Share Icon placeholder */}
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
