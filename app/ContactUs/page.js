import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import ContactForm from '../Components/ContactForm';
import Footer from '../Components/Footer';
import SupportResources from '../Components/SupportResources';

export const metadata = {
  title: 'Contact Us | Hault Express Delivery Support',
  description: 'Get in touch with our global logistics experts. We provide 24/7 support for tracking, billing, and technical inquiries.',
};

export default function ContactUs() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary pt-32 pb-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-widest mb-6">
              Support Center
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
              How can we <span className="text-secondary">help you</span> today?
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-2xl">
              Our dedicated support team is available around the clock to assist with your shipping needs,
              technical issues, or business inquiries. Choose the best way to reach us below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards Grid */}
      <section className="py-12 -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ContactCard
              icon={<FiMail className="text-2xl" />}
              title="Email Us"
              value="haultexpressdelivery@gmail.com"
              description="For general inquiries and support."
              link="mailto:haultexpressdelivery@gmail.com"
            />

            <ContactCard
              icon={<FiMapPin className="text-2xl" />}
              title="Global Office"
              value="Headquarters"
              description="Worldwide Logistics Center"
              link="#"
            />
          </div>
        </div>
      </section>

      {/* Main Support Section: Form & Resources */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

            {/* Left: Form Area */}
            <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-sm">
              <div className="mb-10 text-center lg:text-left">
                <h2 className="text-3xl font-bold text-primary mb-4">Send us a message</h2>
                <p className="text-slate-500 max-w-md mx-auto lg:mx-0">
                  Fill out the form below and one of our experts will get back to you within 24 hours.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Right: Info Area */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <FiClock className="text-secondary" />
                  </div>
                  Operation Hours
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <p className="font-bold text-primary mb-1">Customer Support</p>
                    <p className="text-slate-500 text-sm">Mon - Fri: 7am - 7pm</p>
                    <p className="text-slate-500 text-sm">Sat: 8am - 5pm</p>
                  </div>
                  <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <p className="font-bold text-primary mb-1">Technical Support</p>
                    <p className="text-slate-500 text-sm">Mon - Fri: 8:30am - 6pm</p>
                    <p className="text-slate-500 text-sm">Emergency: 24/7</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-primary rounded-[2rem] text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors"></div>
                <h3 className="text-xl font-bold mb-4">Need Immediate Tracking?</h3>
                <p className="text-white/60 mb-6 text-sm">
                  Our automated tracking system is available 24/7. Get real-time updates without waiting for support.
                </p>
                <a href="/Track" className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-3 transition-all underline underline-offset-8">
                  Go to Tracking Solution
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <SupportResources />
      <div className="h-20"></div>
      <Footer />
    </div>
  );
}

function ContactCard({ icon, title, value, description, link }) {
  return (
    <a href={link} className="block group">
      <div className="h-full bg-white p-8 rounded-3xl border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
        <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-primary-dark transition-colors mb-6 shadow-inner">
          {icon}
        </div>
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{title}</h3>
        <p className="text-lg font-extrabold text-primary mb-2 truncate">{value}</p>
        <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
      </div>
    </a>
  );
}
