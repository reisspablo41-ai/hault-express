import { LuPackageSearch, LuPackageX } from 'react-icons/lu';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaHouseChimneyUser } from 'react-icons/fa6';
import { GiCardboardBoxClosed } from 'react-icons/gi';
import { FiMessageSquare, FiShield, FiFileText } from 'react-icons/fi';
import Footer from '../Components/Footer';
import Link from 'next/link';
import FaqsSelector from '../Components/FaqsSelector';

function Faqs() {
  const faqsData = [
    {
      id: 1,
      title: 'What should I do if my package or pet delivery is delayed?',
      description:
        'In case of delays, our team will immediately notify you with updated delivery timelines. You can also contact our support team for assistance via email.',
    },
    {
      id: 2,
      title: 'How do I schedule a delivery for my pet or package?',
      description:
        'You can schedule a delivery by visiting our website dashboard, using our mobile app interface, or contacting our customer support team directly.',
    },
    {
      id: 3,
      title: 'Are there any restrictions on the types of packages you deliver?',
      description:
        'Yes, we cannot transport hazardous materials, illegal substances, or perishable goods that do not meet our specialized packaging guidelines.',
    },
    {
      id: 4,
      title: 'What measures are in place to handle fragile or high-value packages?',
      description:
        'We use industrial-grade packaging materials and white-glove handling protocols to ensure that high-value shipments are protected throughout their journey.',
    },
    {
      id: 5,
      title: 'What documents are required for pet transportation?',
      description:
        'You will need to provide official vaccination records, a health certificate from a licensed veterinarian, and any necessary customs permits for international transit.',
    },
    {
      id: 6,
      title: 'Do you offer same-day or expedited delivery services?',
      description:
        'Yes, we offer premium expedited and same-day delivery options for both pet and package shipments, subject to route availability.',
    },
    {
      id: 7,
      title: 'What types of pets can you deliver?',
      description:
        'We specialize in the delivery of dogs, cats, birds, and small animals. Exotic species may require special permits and custom climate-controlled transport.',
    },
    {
      id: 8,
      title: 'Can I track my shipment in real-time?',
      description:
        'Absolutely. Our global tracking system provides live updates 24/7. Simply enter your tracking number on our tracking page to see the current location.',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary pt-32 pb-24 overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-widest mb-6">
            Help Center
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
            Frequently Asked <span className="text-secondary">Questions</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Find quick answers to common questions about our global logistics services,
            pet transportation, and shipment tracking.
          </p>
        </div>
      </section>

      {/* Quick Links Grid */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-primary mb-4">Topic Explorer</h2>
            <p className="text-slate-500">Select a category to find specific troubleshooting guides.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
            <TopicCard icon={<LuPackageSearch />} label="Tracking" href="/Track" />
            <TopicCard icon={<TbTruckDelivery />} label="Informed Delivery" href="/Faqs/informed-delivery" />
            <TopicCard icon={<LuPackageX />} label="Intercept" href="/Faqs/package-intercept" />
            <TopicCard icon={<FaHouseChimneyUser />} label="Address Change" href="/Faqs/change-of-address" />
            <TopicCard icon={<GiCardboardBoxClosed />} label="Mail & Ship" href="/ship/sending-mail" />
          </div>
        </div>
      </section>

      {/* Main FAQs Accordion */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <FaqsSelector data={faqsData} />
        </div>
      </section>

      {/* Support Cards */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <SupportCard
            icon={<FiShield className="text-2xl text-blue-600" />}
            title="File a Claim"
            desc="Insured delivery didn't go as planned? File an official claim online."
            btnText="File Claim"
            href="/ContactUs/FileClaim"
          />
          <SupportCard
            icon={<FiFileText className="text-2xl text-emerald-600" />}
            title="Request Refund"
            desc="Eligible for a refund? Submit your request with proof of purchase."
            btnText="Request Refund"
            href="/ContactUs/RequestRefund"
          />
          <SupportCard
            icon={<FiMessageSquare className="text-2xl text-orange-600" />}
            title="Contact Support"
            desc="Need personalized help? Reach out to our 24/7 support team."
            btnText="Get Help"
            href="/ContactUs"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

function TopicCard({ icon, label, href }) {
  return (
    <Link href={href} className="group">
      <div className="h-full bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center justify-center gap-4 hover:-translate-y-1">
        <div className="text-4xl text-slate-400 group-hover:text-secondary transition-colors">
          {icon}
        </div>
        <p className="text-sm font-bold text-primary group-hover:text-secondary whitespace-nowrap">{label}</p>
      </div>
    </Link>
  );
}

function SupportCard({ icon, title, desc, btnText, href }) {
  return (
    <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 text-center flex flex-col items-center gap-6 group hover:bg-white hover:shadow-xl transition-all duration-300">
      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-inner group-hover:bg-slate-50 transition-colors">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
      </div>
      <Link href={href} className="inline-flex items-center gap-2 text-primary font-extrabold hover:gap-3 transition-all underline underline-offset-8 decoration-secondary decoration-2 hover:text-secondary">
        {btnText}
      </Link>
    </div>
  );
}

export default Faqs;
