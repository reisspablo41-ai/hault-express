import Footer from '../../Components/Footer';
import Link from 'next/link';
import { FiShield, FiArrowLeft, FiAlertTriangle, FiMail, FiMessageSquare, FiCheckCircle, FiXCircle } from 'react-icons/fi';

export const metadata = {
  title: 'Scam Protection Guide — Hault Express Delivery',
  description:
    'Learn how to identify and protect yourself from fraudulent text and email messages impersonating Hault Express Delivery.',
};

const doList = [
  'Delete the message immediately without clicking any links',
  'Report the message to your phone carrier or email provider',
  'Go directly to haultexpressdelivery.com to track your package',
  'Contact Hault Express Delivery support at haultexpressdelivery@gmail.com if concerned',
  'Report suspected fraud to the FTC at ftc.gov/complaint',
];

const dontList = [
  'Click links in unexpected shipping notifications',
  'Call phone numbers provided in suspicious messages',
  'Provide credit card, bank, or personal information',
  'Pay any unexpected "redelivery fee" or "customs charge"',
  'Download any attachments from unknown senders',
];

const warningSignsText = [
  { sign: 'Urgency pressure', detail: 'Messages like "Act now or your package will be returned" to force quick action.' },
  { sign: 'Unexpected fees', detail: 'Claims that you owe a small fee (e.g., $1–$3) to release your delivery.' },
  { sign: 'Unfamiliar links', detail: 'Links that don\'t go to an official haultexpressdelivery.com domain.' },
  { sign: 'Spelling errors', detail: 'Poor grammar, misspellings, or awkward phrasing in the message.' },
  { sign: 'Unsolicited contact', detail: 'You receive a message about a package you weren\'t expecting.' },
];

const warningSignsEmail = [
  { sign: 'Spoofed sender address', detail: 'The "From" name says Hault Express Delivery but the actual email address is unrelated.' },
  { sign: 'Generic greeting', detail: 'Messages addressed to "Dear Customer" instead of your name.' },
  { sign: 'Mismatched branding', detail: 'Logo looks slightly off, wrong colors, or poor image quality.' },
  { sign: 'Requests for login', detail: 'Emails asking you to verify your account by clicking a link.' },
  { sign: 'Suspicious attachments', detail: 'Files like invoices or shipping labels attached to unsolicited emails.' },
];

export default function ScamProtectionPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-primary pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/40 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <Link
            href="/service-alerts"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm mb-8 transition-colors"
          >
            <FiArrowLeft /> Back to Service Alerts
          </Link>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center">
              <FiShield className="text-accent text-3xl" />
            </div>
          </div>
          <span className="inline-block text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-4 border border-accent/30 rounded-full px-4 py-1.5 bg-accent/10">
            Security Alert
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Scam Protection <span className="text-secondary">Guide</span>
          </h1>
          <p className="text-white/50 text-lg leading-relaxed">
            Fraudulent messages impersonating Hault Express Delivery are circulating. Here's how to
            recognize them and keep your information safe.
          </p>
        </div>
      </section>

      {/* Warning banner */}
      <div className="bg-accent/10 border-b border-accent/20">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-3">
          <FiAlertTriangle className="text-accent text-xl flex-shrink-0" />
          <p className="text-sm text-gray-700">
            <span className="font-bold">Important:</span> Hault Express Delivery will never ask for your personal information, payment details, or passwords via unsolicited text or email.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">

        {/* Text scams */}
        <section id="text">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
              <FiMessageSquare className="text-primary text-xl" />
            </div>
            <h2 className="text-2xl font-bold text-primary">Text Message Scams (Smishing)</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-8">
            "Smishing" is when scammers send fake SMS messages pretending to be from a carrier like Hault Express Delivery.
            These texts often contain a link to a fake website designed to steal your payment details.
          </p>
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Warning Signs</p>
            <div className="space-y-4">
              {warningSignsText.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-primary text-sm">{item.sign}: </span>
                    <span className="text-gray-500 text-sm">{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Email scams */}
        <section id="email">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
              <FiMail className="text-primary text-xl" />
            </div>
            <h2 className="text-2xl font-bold text-primary">Email Scams (Phishing)</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-8">
            Phishing emails look like official Hault Express Delivery communications but are sent from fraudulent addresses.
            They often prompt you to click a link that leads to a fake login or payment page.
          </p>
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Warning Signs</p>
            <div className="space-y-4">
              {warningSignsEmail.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-primary text-sm">{item.sign}: </span>
                    <span className="text-gray-500 text-sm">{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Do / Don't */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-8">What To Do (and Not Do)</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
              <p className="flex items-center gap-2 text-emerald-700 font-bold text-sm uppercase tracking-wider mb-5">
                <FiCheckCircle /> Do This
              </p>
              <ul className="space-y-3">
                {doList.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <FiCheckCircle className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
              <p className="flex items-center gap-2 text-red-600 font-bold text-sm uppercase tracking-wider mb-5">
                <FiXCircle /> Avoid This
              </p>
              <ul className="space-y-3">
                {dontList.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <FiXCircle className="text-red-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary rounded-3xl p-10 text-center">
          <h3 className="text-white font-bold text-2xl mb-3">Received a suspicious message?</h3>
          <p className="text-white/50 mb-8">
            Forward suspicious emails or screenshots of texts to our security team immediately.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/ContactUs">
              <button className="bg-secondary hover:bg-secondary/90 text-primary-dark font-bold px-8 py-3 rounded-full text-sm transition-all hover:scale-105">
                Report to Hault Express Delivery
              </button>
            </Link>
            <Link href="/service-alerts">
              <button className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-3 rounded-full text-sm transition-all">
                All Service Alerts
              </button>
            </Link>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}
