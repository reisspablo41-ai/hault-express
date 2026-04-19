import Footer from '../Components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiClock } from 'react-icons/fi';

export const metadata = {
  title: 'Newsroom — Hault Express Delivery',
  description:
    'The latest news, announcements, and industry insights from Hault Express Delivery.',
};

const articles = [
  {
    slug: 'key-changes-in-hong-kong-pets',
    image: '/pet-updates.jpg',
    category: 'Pet Shipping',
    categoryColor: 'text-accent bg-accent/10 border-accent/20',
    date: 'December 2024',
    title: 'Latest Pet Shipping Updates: Key Changes in Hong Kong and Singapore (2024–2025)',
    excerpt:
      'Starting December 1, 2024, Hong Kong has reduced the quarantine period for cats and dogs imported from Macau from 120 days to 30 days.',
  },
  {
    slug: 'international-pet-shipping-services-market-growth',
    image: '/pet-growth.jpg',
    category: 'Market Trends',
    categoryColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    date: 'November 2024',
    title: 'International Pet Shipping Services Market Growth Trends Report',
    excerpt:
      'The global International Pet Shipping Services market was valued at approximately USD 1.8 billion in 2022 and is projected to grow at 9.6% CAGR through 2030.',
  },
  {
    slug: 'maersk-unveils-new-vessel',
    image: '/maesrsk.webp',
    category: 'Sea Freight',
    categoryColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    date: 'October 2024',
    title: 'Maersk Unveils Dual-Fuel Methanol Vessel in Decarbonization Push',
    excerpt:
      'SINGAPORE — Denmark-based Maersk unveiled its latest dual-fuel methanol vessel as the industry ramps up decarbonization efforts for global trade.',
  },
];

export default function NewsroomPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary pt-32 pb-24 overflow-hidden text-center">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-[0.3em] mb-6">
            Global Newsroom
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
            Latest from <span className="text-secondary">Hault Express Delivery</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Industry insights, logistical breakthroughs, and company announcements from our global network.
          </p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Featured Article */}
          <div className="mb-20">
            <Link href={`/newsroom/${articles[0].slug}`} className="group block">
              <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 border border-slate-100 flex flex-col lg:flex-row">
                <div className="relative lg:w-3/5 h-[400px] lg:h-[600px] overflow-hidden">
                  <Image
                    src={articles[0].image}
                    alt={articles[0].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="lg:w-2/5 p-10 lg:p-16 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <span className={`text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border ${articles[0].categoryColor}`}>
                      {articles[0].category}
                    </span>
                    <span className="flex items-center gap-2 text-slate-400 text-xs font-bold">
                      <FiClock className="text-secondary" /> {articles[0].date}
                    </span>
                  </div>
                  <h2 className="text-primary font-extrabold text-3xl lg:text-5xl mb-6 leading-[1.2] group-hover:text-secondary transition-colors duration-300">
                    {articles[0].title}
                  </h2>
                  <p className="text-slate-500 text-lg leading-relaxed mb-8 line-clamp-3">
                    {articles[0].excerpt}
                  </p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center gap-3 text-sm font-black text-primary group-hover:text-secondary transition-all group-hover:gap-5">
                      READ FULL INSIGHT <FiArrowRight className="text-xl" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="w-full h-px bg-slate-200 mb-20"></div>

          {/* Article Grid */}
          <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
            {articles.slice(1).map((article, i) => (
              <Link key={i} href={`/newsroom/${article.slug}`} className="group block">
                <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 h-full flex flex-col">
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="p-10 flex flex-col flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border ${article.categoryColor}`}>
                        {article.category}
                      </span>
                      <span className="flex items-center gap-2 text-slate-400 text-xs font-bold">
                        <FiClock className="text-secondary" /> {article.date}
                      </span>
                    </div>
                    <h2 className="text-primary font-extrabold text-2xl mb-4 leading-snug group-hover:text-secondary transition-colors duration-300 flex-1">
                      {article.title}
                    </h2>
                    <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-3 text-xs font-black text-primary group-hover:text-secondary transition-all group-hover:gap-5 mt-auto">
                      READ ARTICLE <FiArrowRight className="text-lg" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-24 bg-primary text-white text-center px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-3xl font-extrabold mb-4">Stay informed on global logistics</h2>
          <p className="text-white/60 mb-10 leading-relaxed">
            Join our newsletter to receive monthly industry deep-dives and service announcements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all sm:w-80"
            />
            <button className="bg-secondary hover:bg-secondary/90 text-primary-dark font-extrabold px-8 py-4 rounded-2xl shadow-lg transition-all active:scale-95 whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
