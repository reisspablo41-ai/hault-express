import Footer from '../../Components/Footer';
import Link from 'next/link';
import { FiCalendar, FiArrowLeft, FiAlertTriangle, FiCheckCircle, FiClock } from 'react-icons/fi';

export const metadata = {
  title: 'Holiday Schedule — Hault Express Delivery',
  description:
    'View Hault Express Delivery holiday closures and modified service hours. Plan your shipments accordingly to avoid delays.',
};

const holidays2024 = [
  { date: 'November 28, 2024', name: 'Thanksgiving Day', status: 'closed', note: 'No pickup or delivery.' },
  { date: 'November 29, 2024', name: 'Day After Thanksgiving', status: 'modified', note: 'Limited operations. Delays possible.' },
  { date: 'December 24, 2024', name: 'Christmas Eve', status: 'modified', note: 'Limited operations. Early close.' },
  { date: 'December 25, 2024', name: 'Christmas Day', status: 'closed', note: 'No pickup or delivery.' },
  { date: 'December 26, 2024', name: 'Day After Christmas', status: 'modified', note: 'Limited operations. Delays possible.' },
  { date: 'January 1, 2025', name: 'New Year\'s Day', status: 'closed', note: 'No pickup or delivery.' },
];

const holidays2025 = [
  { date: 'January 20, 2025', name: 'Martin Luther King Jr. Day', status: 'modified', note: 'Limited operations.' },
  { date: 'February 17, 2025', name: 'Presidents\' Day', status: 'modified', note: 'Limited operations.' },
  { date: 'May 26, 2025', name: 'Memorial Day', status: 'closed', note: 'No pickup or delivery.' },
  { date: 'July 4, 2025', name: 'Independence Day', status: 'closed', note: 'No pickup or delivery.' },
  { date: 'September 1, 2025', name: 'Labor Day', status: 'closed', note: 'No pickup or delivery.' },
  { date: 'November 27, 2025', name: 'Thanksgiving Day', status: 'closed', note: 'No pickup or delivery.' },
  { date: 'December 25, 2025', name: 'Christmas Day', status: 'closed', note: 'No pickup or delivery.' },
];

const statusConfig = {
  closed: {
    label: 'Closed',
    color: 'text-red-500 bg-red-50 border-red-100',
    dot: 'bg-red-500',
  },
  modified: {
    label: 'Modified',
    color: 'text-secondary bg-secondary/10 border-secondary/20',
    dot: 'bg-secondary',
  },
};

function HolidayTable({ holidays }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-card">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-100">
            <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider px-6 py-4">Date</th>
            <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider px-6 py-4">Holiday</th>
            <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider px-6 py-4">Status</th>
            <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider px-6 py-4 hidden md:table-cell">Note</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {holidays.map((h, i) => {
            const s = statusConfig[h.status];
            return (
              <tr key={i} className="bg-white hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FiCalendar className="text-gray-300 flex-shrink-0" />
                    {h.date}
                  </div>
                </td>
                <td className="px-6 py-4 font-semibold text-primary text-sm">{h.name}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border ${s.color}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                    {s.label}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-400 text-sm hidden md:table-cell">{h.note}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default function HolidaySchedulePage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-primary pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/40 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <Link
            href="/service-alerts"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm mb-8 transition-colors"
          >
            <FiArrowLeft /> Back to Service Alerts
          </Link>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center">
              <FiCalendar className="text-secondary text-3xl" />
            </div>
          </div>
          <span className="inline-block text-secondary text-xs font-semibold tracking-[0.3em] uppercase mb-4 border border-secondary/30 rounded-full px-4 py-1.5 bg-secondary/10">
            Service Notice
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Holiday <span className="text-secondary">Schedule</span>
          </h1>
          <p className="text-white/50 text-lg leading-relaxed">
            Plan your shipments around our holiday closures to ensure on-time delivery.
          </p>
        </div>
      </section>

      {/* Tip banner */}
      <div className="bg-secondary/10 border-b border-secondary/20">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-start gap-3">
          <FiAlertTriangle className="text-secondary text-lg flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-700">
            <span className="font-bold">Planning tip:</span> Ship at least 2–3 business days before a holiday to avoid delays. Ground shipments may take longer during peak holiday periods.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20 space-y-16">

        {/* Legend */}
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="w-3 h-3 bg-red-500 rounded-full" /> Closed — No pickup or delivery
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="w-3 h-3 bg-secondary rounded-full" /> Modified — Limited operations
          </div>
        </div>

        {/* 2024 */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
              <FiClock className="text-primary text-xl" />
            </div>
            <h2 className="text-2xl font-bold text-primary">2024 Holiday Schedule</h2>
          </div>
          <HolidayTable holidays={holidays2024} />
        </section>

        {/* 2025 */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center">
              <FiCalendar className="text-secondary text-xl" />
            </div>
            <h2 className="text-2xl font-bold text-primary">2025 Holiday Schedule</h2>
          </div>
          <HolidayTable holidays={holidays2025} />
        </section>

        {/* Tips */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-8">Shipping Tips for the Holidays</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: FiCheckCircle,
                color: 'text-emerald-500 bg-emerald-50',
                title: 'Ship Early',
                body: 'Give your packages extra time — ship 3–5 business days before any holiday closure.',
              },
              {
                icon: FiCalendar,
                color: 'text-secondary bg-secondary/10',
                title: 'Schedule in Advance',
                body: 'Use our online scheduling tool to book pickups ahead of time and lock in your preferred slot.',
              },
              {
                icon: FiClock,
                color: 'text-blue-500 bg-blue-50',
                title: 'Choose Express',
                body: 'For time-sensitive deliveries during the holiday season, consider Hault Express Delivery Next Day Air.',
              },
            ].map((tip, i) => {
              const Icon = tip.icon;
              return (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${tip.color}`}>
                    <Icon className="text-xl" />
                  </div>
                  <h3 className="font-bold text-primary mb-2">{tip.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{tip.body}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary rounded-3xl p-10 text-center">
          <h3 className="text-white font-bold text-2xl mb-3">Ready to ship?</h3>
          <p className="text-white/50 mb-8">
            Schedule your pickup today and we&apos;ll handle the rest.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/ship/sending-package">
              <button className="bg-secondary hover:bg-secondary/90 text-primary-dark font-bold px-8 py-3 rounded-full text-sm transition-all hover:scale-105">
                Ship a Package
              </button>
            </Link>
            <Link href="/dashboard/schedule-package-delivery">
              <button className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-3 rounded-full text-sm transition-all">
                Schedule Pickup
              </button>
            </Link>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}
