'use client';
export const dynamic = 'force-dynamic';
import TrackingForm from '../Components/TrackingForm';
import Footer from '../Components/Footer';

function Page() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Hero Section */}
      <div className="bg-primary pt-32 pb-24 px-4 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-xs font-bold tracking-widest uppercase mb-6 animate-fade-in">
            Hault Express Delivery Partner
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Track Your <span className="text-secondary">Shipment</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Stay updated on your shipment&apos;s journey. Enter your tracking
            number to see real-time status, transit route, and estimated
            delivery time.
          </p>

          <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-md p-2 rounded-2xl border border-white/10 shadow-2xl">
            <TrackingForm className="mt-0" />
          </div>
        </div>
      </div>

      {/* Additional Info / Features */}
      <div className="flex-1 py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <FeatureCard
            title="Real-time Updates"
            desc="Get the latest status of your package or pet shipment instantly with our live tracking system."
          />
          <FeatureCard
            title="Global Connectivity"
            desc="Our network spans across continents, ensuring your shipment is monitored no matter where it is."
          />
          <FeatureCard
            title="Secure Logistics"
            desc="Hault Express Delivery ensures that every shipment is handled with the highest level of security and care."
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-card border border-slate-100 hover:shadow-lg transition-shadow duration-300">
      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
        <div className="w-2 h-2 rounded-full bg-secondary"></div>
      </div>
      <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-slate-500 leading-relaxed text-sm">
        {desc}
      </p>
    </div>
  );
}

export default Page;
