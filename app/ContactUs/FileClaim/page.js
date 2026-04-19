import FileClaimForm from '@/app/Components/FileClaimForm';
import Footer from '@/app/Components/Footer';

function page() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-slate-50 pt-32 pb-20 px-4 relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-6 tracking-tight leading-[1.1]">
            File a <span className="text-secondary tracking-tight">Hault Express Delivery Claim</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            If your package was lost, damaged, or had broken pieces covered by insurance,
            submit your claim here for prompt investigation and resolution.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="py-20 bg-white">
        <FileClaimForm />
      </div>

      {/* Info Section */}
      <div className="bg-slate-50 py-24 px-6 md:px-12 border-y border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-extrabold text-primary mb-12 text-center">
            After You File <span className="text-slate-300 mx-2">—</span> Next Steps
          </h3>

          <div className="grid gap-12 text-slate-600">
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-slate-200">
              <h4 className="text-xl font-bold text-primary mb-4 flex items-center gap-3">
                <div className="w-1.5 h-6 bg-secondary rounded-full"></div>
                Claims Decisions
              </h4>
              <p className="leading-relaxed">
                Hault Express Delivery usually sends claims decisions within 5-10 business days. You can also check your Claim History in your Hault Express Delivery account for real-time updates. Processing times may vary depending on whether an item is reported as damaged or lost.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200">
                <h4 className="text-lg font-bold text-primary mb-3">Approved Claims</h4>
                <p className="text-sm leading-relaxed">
                  Once approved, payment is typically issued within 7-10 business days. Note that Hault Express Delivery does not pay claims exceeding the item&apos;s actual verified value.
                </p>
              </div>
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200">
                <h4 className="text-lg font-bold text-primary mb-3">Denied Claims</h4>
                <p className="text-sm leading-relaxed">
                  If a claim is denied, you will receive a decision letter detailing the specific reasons. You have the right to appeal any partially or fully denied claim.
                </p>
              </div>
            </div>

            <div className="bg-primary text-white p-8 md:p-10 rounded-[2rem] shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors"></div>
              <h4 className="text-xl font-bold mb-4">Making an Appeal</h4>
              <p className="text-white/70 leading-relaxed mb-6">
                You may file an appeal within 30 days of receiving a decision. Focus your appeal on the reasons cited for denial and provide any new supporting documentation.
              </p>
              <div className="grid gap-4 sm:flex sm:gap-6">
                <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex-1">
                  <p className="font-bold text-secondary text-sm mb-1 uppercase tracking-wider">First Appeal</p>
                  <p className="text-xs text-white/60">Submit via your Claim History portal using original documentation.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex-1">
                  <p className="font-bold text-secondary text-sm mb-1 uppercase tracking-wider">Final Review</p>
                  <p className="text-xs text-white/60">A secondary appeal can be filed within 30 days if the first is denied.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default page;
