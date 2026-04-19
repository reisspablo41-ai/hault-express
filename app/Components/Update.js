import Link from 'next/link';
import Image from 'next/image';
import { FiAlertTriangle, FiCalendar, FiGlobe, FiArrowRight } from 'react-icons/fi';

const updates = [
  {
    icon: FiAlertTriangle,
    category: 'Security Alert',
    categoryColor: 'text-accent bg-accent/10 border-accent/20',
    title: 'Protect Yourself from Text & Email Scams',
    excerpt:
      "If you receive a message claiming to be from Hault Express Delivery about a package or delivery failure, delete it immediately. We will never ask for personal information this way.",
    links: [
      { label: 'Text Scams Guide', href: '/service-alerts/scam-protection#text' },
      { label: 'Email Scams Guide', href: '/service-alerts/scam-protection#email' },
    ],
  },
  {
    icon: FiCalendar,
    category: 'Service Notice',
    categoryColor: 'text-secondary bg-secondary/10 border-secondary/20',
    title: 'Upcoming Hault Express Delivery Holiday Closures',
    excerpt:
      'Hault Express Delivery will be closed on Wednesday, December 25th in observance of Christmas Day. Plan your shipments accordingly to avoid delays during the holiday season.',
    links: [{ label: 'View All Holidays', href: '/service-alerts/holiday-schedule' }],
  },
  {
    icon: FiGlobe,
    category: 'International',
    categoryColor: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
    title: 'Mail Suspension: Canada',
    excerpt:
      'Effective November 29, 2024, international mail service to Canada is temporarily suspended due to the Canadian Union of Postal Workers strike.',
    links: [{ label: 'Learn More', href: '/service-alerts' }],
  },
];

function Update() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-secondary text-sm font-semibold tracking-[0.25em] uppercase">
            Stay Informed
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mt-3">
            Hault Express Delivery Updates
          </h2>
        </div>

        {/* Update cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {updates.map((update, i) => {
            const Icon = update.icon;
            return (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full border mb-4 ${update.categoryColor}`}
                >
                  <Icon className="text-sm" />
                  {update.category}
                </div>
                <h3 className="text-primary font-bold text-lg mb-3 leading-snug">
                  {update.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {update.excerpt}
                </p>
                <div className="flex flex-col gap-2">
                  {update.links.map((link, j) => (
                    <Link
                      key={j}
                      href={link.href}
                      className="flex items-center gap-1 text-sm font-semibold text-primary hover:text-secondary transition-colors"
                    >
                      {link.label} <FiArrowRight className="text-xs" />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Newsroom banner */}
        <div className="bg-primary rounded-3xl overflow-hidden flex flex-col md:flex-row">
          <div className="relative md:w-2/5 h-64 md:h-auto min-h-[240px]">
            <Image
              src="/cities.jpg"
              alt="Hault Express Delivery Newsroom"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/40" />
          </div>
          <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
            <span className="text-secondary text-xs font-semibold tracking-widest uppercase mb-3">
              Newsroom
            </span>
            <h3 className="text-white text-3xl font-bold mb-4">
              Latest News from Hault Express Delivery
            </h3>
            <p className="text-white/50 mb-8 leading-relaxed">
              Stay up to date with the latest innovations, service
              announcements, and company news from Hault Express Delivery.
            </p>
            <Link href="/newsroom">
              <button className="flex items-center gap-2 text-sm font-bold text-primary-dark bg-secondary rounded-full px-6 py-3 hover:bg-secondary/90 transition-all hover:scale-105 w-fit">
                Visit Newsroom <FiArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Update;
