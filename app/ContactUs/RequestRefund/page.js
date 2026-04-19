import Footer from '@/app/Components/Footer';
import RequestRefundForm from '@/app/Components/RequestRefundForm';

function page() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-slate-50 pt-32 pb-20 px-4 relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-6 tracking-tight leading-[1.1]">
            Request a <span className="text-secondary tracking-tight">Hault Express Delivery Refund</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            To submit a refund request for shipping fees or postage, please provide your tracking details
            and proof of purchase below.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="py-20 bg-white">
        <RequestRefundForm />
      </div>

      {/* Info Section */}
      <div className="bg-slate-50 py-24 px-6 md:px-12 border-y border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-extrabold text-primary mb-12 text-center">
            Refund Guidelines <span className="text-slate-300 mx-2">—</span> What to Expect
          </h3>

          <div className="grid gap-12 text-slate-600">
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-slate-200">
              <h4 className="text-xl font-bold text-primary mb-4 flex items-center gap-3">
                <div className="w-1.5 h-6 bg-secondary rounded-full"></div>
                Required Documentation
              </h4>
              <p className="leading-relaxed mb-6">
                To process your refund efficiently, we require verification of your identity and the transaction. Please ensure you have:
              </p>
              <ul className="grid sm:grid-cols-3 gap-4">
                <li className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-sm font-bold text-primary text-center">Valid Tracking #</li>
                <li className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-sm font-bold text-primary text-center">Purchase Receipt</li>
                <li className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-sm font-bold text-primary text-center">Government Photo ID</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200">
                <h4 className="text-lg font-bold text-primary mb-3">Processing Timeline</h4>
                <p className="text-sm leading-relaxed">
                  Refund requests are typically reviewed within 5-10 business days. You will receive an automated email once the decision is finalized.
                </p>
              </div>
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200">
                <h4 className="text-lg font-bold text-primary mb-3">Payment Issuance</h4>
                <p className="text-sm leading-relaxed">
                  Approved refunds are credited back to the original payment method within 7-10 business days of the approval date.
                </p>
              </div>
            </div>

            <div className="bg-primary text-white p-8 md:p-10 rounded-[2rem] shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors"></div>
              <h4 className="text-xl font-bold mb-4">Need Help with Your Request?</h4>
              <p className="text-white/70 leading-relaxed mb-6 text-sm">
                If you encounter any issues while submitting your request, please reach out to our global support team via email for immediate assistance.
              </p>
              <a href="mailto:haultexpressdelivery@gmail.com" className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-3 transition-all underline underline-offset-8">
                Email Customer Support
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default page;
