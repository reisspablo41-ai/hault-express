import Image from 'next/image';
import Footer from '../Components/Footer';
import Link from 'next/link';
import { FiAlertTriangle, FiGlobe, FiShield, FiArrowRight, FiCalendar } from 'react-icons/fi';

export const metadata = {
  title: 'Service Alerts — Hault Express Delivery',
  description:
    'Stay informed about service disruptions, weather delays, international suspensions, and other operational updates from Hault Express Delivery.',
};

const alerts = [
  {
    id: 'canada',
    severity: 'high',
    icon: FiGlobe,
    category: 'International',
    categoryColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    date: 'Updated Dec 23, 2024',
    title: 'Mail Suspension: Canada',
    body: [
      'Effective Dec. 23, 2024, Canada Post has advised Hault Express Delivery that the strike by its employees has ended. However, Hault Express Delivery suspension of acceptance of mail and packages bound for Canada remains temporarily unchanged as we monitor Canada Post\'s progress processing staged volumes.',
      'We anticipate reopening acceptance of Canada-bound volume within the next two weeks and we appreciate our customers\' patience as we continue to monitor developments.',
    ],
    link: null,
  },
  {
    id: 'scams',
    severity: 'medium',
    icon: FiShield,
    category: 'Security Alert',
    categoryColor: 'text-accent bg-accent/10 border-accent/20',
    date: 'Ongoing',
    title: 'Protect Yourself from Text & Email Scams',
    body: [
      'Fraudulent messages impersonating Hault Express Delivery are circulating. These scams may claim your package is delayed or that you owe a fee. Hault Express Delivery will never request personal or payment information via unsolicited text or email.',
      'If you receive a suspicious message, do not click any links and delete it immediately.',
    ],
    link: { label: 'View Scam Protection Guide', href: '/service-alerts/scam-protection' },
  },
  {
    id: 'holidays',
    severity: 'low',
    icon: FiCalendar,
    category: 'Service Notice',
    categoryColor: 'text-secondary bg-secondary/10 border-secondary/20',
    date: 'December 2024',
    title: 'Holiday Closure Schedule',
    body: [
      'Hault Express Delivery will be closed on Wednesday, December 25th in observance of Christmas Day. Limited operations will run December 24th and December 26th.',
      'Plan your shipments ahead of time to avoid holiday delays.',
    ],
    link: { label: 'View Full Holiday Schedule', href: '/service-alerts/holiday-schedule' },
  },
];

const severityBadge = {
  high: 'bg-red-500/10 border-l-4 border-red-500',
  medium: 'bg-accent/5 border-l-4 border-accent',
  low: 'bg-secondary/5 border-l-4 border-secondary',
};

export default function ServiceAlertsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-primary pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/service-alerts.jpg"
            alt="Service Alerts"
            fill
            sizes="100vw"
            className="object-cover opacity-10"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/60 to-primary pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-4 border border-accent/30 rounded-full px-4 py-1.5 bg-accent/10">
            Service Alerts
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
            Stay <span className="text-secondary">Informed</span>
          </h1>
          <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto">
            Real-time updates on service disruptions, weather delays, security notices, and
            international mail suspensions.
          </p>
        </div>
      </section>

      {/* Active alerts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <FiAlertTriangle className="text-accent text-xl" />
            <h2 className="text-2xl font-bold text-primary">Active Alerts</h2>
            <span className="ml-auto text-xs text-gray-400">{alerts.length} active notices</span>
          </div>

          <div className="space-y-6">
            {alerts.map((alert) => {
              const Icon = alert.icon;
              return (
                <div
                  key={alert.id}
                  className={`bg-white rounded-2xl p-6 shadow-card ${severityBadge[alert.severity]}`}
                >
                  <div className="flex flex-wrap items-start gap-3 mb-4">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border ${alert.categoryColor}`}>
                      <Icon className="text-sm" /> {alert.category}
                    </span>
                    <span className="text-gray-400 text-xs mt-0.5">{alert.date}</span>
                  </div>
                  <h3 className="text-primary font-bold text-xl mb-3">{alert.title}</h3>
                  {alert.body.map((para, i) => (
                    <p key={i} className="text-gray-600 text-sm leading-relaxed mb-3 last:mb-0">
                      {para}
                    </p>
                  ))}
                  {alert.link && (
                    <Link
                      href={alert.link.href}
                      className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-primary hover:text-secondary transition-colors"
                    >
                      {alert.link.label} <FiArrowRight />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Info strip */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-white font-bold text-2xl mb-3">Need help with a delayed shipment?</h3>
          <p className="text-white/50 mb-8">
            Our support team is available 24/7 to assist with any service disruptions.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/ContactUs">
              <button className="bg-secondary hover:bg-secondary/90 text-primary-dark font-bold px-8 py-3 rounded-full text-sm transition-all hover:scale-105">
                Contact Support
              </button>
            </Link>
            <Link href="/Track">
              <button className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-3 rounded-full text-sm transition-all">
                Track Your Package
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
