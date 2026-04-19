export default function PolicyPage() {
  return (
    <div className="bg-dark min-h-screen text-white pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight">Shipment Protection & Handling Policies</h1>
        <p className="text-lg md:text-xl text-white/80 mb-12 italic">“Global Logistics, Delivered with Precision.”</p>
        
        <div className="space-y-12">
          {/* Main Content */}
          <section>
            <p className="text-white/80 mb-4 leading-relaxed">At Hault Express Delivery, we are committed to delivering a refined, secure, and reliable shipping experience across all service categories.</p>
            <p className="text-white/80 mb-4 leading-relaxed">To maintain our high operational standards, all shipments are subject to structured policies that ensure protection, compliance, and successful delivery from origin to destination.</p>
            <p className="text-white/80 leading-relaxed">These requirements are designed to provide clarity, accountability, and peace of mind for every shipment entrusted to our network.</p>
          </section>

          <hr className="border-white/10" />

          {/* Important Notice */}
          <section className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-white">Important Responsibility Notice</h2>
            <p className="text-white/80 mb-4 leading-relaxed">All mandatory shipment-related arrangements—including insurance coverage, specialized crate requirements (for pet shipments), and any applicable overnight storage or holding services—are the sole responsibility of the receiver.</p>
            <p className="text-white/80 font-medium">These requirements must be completed and confirmed before shipment dispatch or delivery continuation.</p>
          </section>

          <hr className="border-white/10" />

          {/* Insurance */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">🛡️ Shipment Insurance Policy</h2>
            <p className="text-secondary italic mb-6">“Protection You Can Trust, Every Step of the Way.”</p>
            
            <p className="text-white/80 mb-4 leading-relaxed">All shipments handled by Hault Express Delivery require a mandatory, fully refundable insurance coverage prior to dispatch.</p>
            <p className="text-white/80 mb-8 leading-relaxed">This policy applies to all categories of deliveries, ensuring that every shipment is supported by a secure and verified process.</p>

            <h3 className="text-xl font-semibold mb-4">Purpose of Insurance Coverage</h3>
            
            <div className="space-y-6 pl-4 border-l-2 border-secondary/50">
              <div>
                <h4 className="font-semibold text-white mb-2">1. Transit Protection & Risk Management</h4>
                <p className="text-white/80 mb-2">Shipping operations may involve unforeseen variables. Insurance coverage ensures your shipment remains protected against:</p>
                <ul className="list-disc list-inside text-white/70 space-y-1 ml-4 mb-2">
                  <li>Transit delays or disruptions</li>
                  <li>Routing or scheduling adjustments</li>
                  <li>Temporary holding or logistical changes</li>
                  <li>Additional handling requirements</li>
                </ul>
                <p className="text-white/80">This guarantees that your shipment continues under controlled, professional care at all times.</p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">2. Delivery Assurance & Verification</h4>
                <p className="text-white/80 mb-2">The insurance requirement serves as a formal confirmation of the receiver’s readiness. This helps to:</p>
                <ul className="list-disc list-inside text-white/70 space-y-1 ml-4">
                  <li>Prevent failed or refused deliveries</li>
                  <li>Ensure smooth coordination at the destination</li>
                  <li>Maintain efficient delivery timelines</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">3. Operational Compliance</h4>
                <p className="text-white/80 mb-2">This policy reinforces:</p>
                <ul className="list-disc list-inside text-white/70 space-y-1 ml-4 mb-2">
                  <li>Secure handling procedures</li>
                  <li>Documented chain-of-custody</li>
                  <li>Accountability throughout transit</li>
                </ul>
                <p className="text-white/80">Ensuring every shipment meets professional logistics standards.</p>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h4 className="font-semibold text-white mb-2">Receiver Responsibility</h4>
                <p className="text-white/80 text-sm">The receiver is solely responsible for completing the insurance requirement prior to shipment dispatch. Failure to complete this requirement will result in shipment delay or non-dispatch.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h4 className="font-semibold text-white mb-2">Refund Policy</h4>
                <p className="text-white/80 text-sm mb-2">The insurance fee is fully refundable upon successful delivery.</p>
                <ul className="list-disc list-inside text-white/70 text-sm space-y-1">
                  <li>Shipment is delivered successfully</li>
                  <li>Receiver signs the delivery confirmation</li>
                  <li>Refund is initiated promptly</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-red-900/20 border border-red-500/20 rounded-xl p-6">
              <h4 className="font-semibold text-red-400 mb-2">Important Notice</h4>
              <p className="text-white/80 text-sm">No shipment will be approved for dispatch without confirmed insurance coverage. This ensures every delivery is protected, verified, and prepared for a seamless journey.</p>
            </div>
          </section>

          <hr className="border-white/10" />

          {/* Premium Crate */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">🐾 Premium Crate Policy (Pet Shipments Only)</h2>
            <p className="text-secondary italic mb-6">“Designed for Comfort. Engineered for Safety.”</p>
            
            <p className="text-white/80 mb-8 leading-relaxed">For live animal transport, Hault Express Delivery requires the use of specialized, fully compliant travel crates. This ensures the safety, comfort, and well-being of animals throughout transit.</p>

            <h3 className="text-xl font-semibold mb-4">Purpose of Crate Requirement</h3>
            <p className="text-white/80 mb-4">Live animal shipments require enhanced care standards. Our crate policy ensures:</p>
            <ul className="list-disc list-inside text-white/70 space-y-2 mb-6 ml-4">
              <li>A stable and controlled travel environment</li>
              <li>Reduced stress for the animal</li>
              <li>Compliance with professional transport expectations</li>
            </ul>
            <p className="text-white/80 font-medium mb-8">Shipments without approved crates will not be processed.</p>

            <h3 className="text-xl font-semibold mb-4">Features of Premium Crates</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <h4 className="font-semibold text-white mb-1">Climate-Controlled Interior</h4>
                <p className="text-white/70 text-sm">Maintains a safe and stable temperature throughout the journey.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <h4 className="font-semibold text-white mb-1">Integrated Care System</h4>
                <p className="text-white/70 text-sm">Includes provisions for feeding, hydration, and sanitation.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <h4 className="font-semibold text-white mb-1">Spacious & Secure Design</h4>
                <p className="text-white/70 text-sm">Allows safe movement while preventing injury and stress.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <h4 className="font-semibold text-white mb-1">Full Compliance</h4>
                <p className="text-white/70 text-sm">Meets all required standards for professional live animal transport.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h4 className="font-semibold text-white mb-2">Receiver Responsibility</h4>
                <p className="text-white/80 text-sm">The receiver is solely responsible for arranging and completing the crate requirement prior to dispatch. This confirms readiness and allows shipment processing to proceed without interruption.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h4 className="font-semibold text-white mb-2">Refund Policy</h4>
                <p className="text-white/80 text-sm mb-2">The crate service is provided on a temporary (rental) basis, and the fee is fully refundable.</p>
                <ul className="list-disc list-inside text-white/70 text-sm space-y-1">
                  <li>Shipment is delivered successfully</li>
                  <li>Delivery confirmation is signed</li>
                  <li>Refund is processed promptly</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-red-900/20 border border-red-500/20 rounded-xl p-6">
              <h4 className="font-semibold text-red-400 mb-2">Important Notice</h4>
              <p className="text-white/80 text-sm">A compliant crate is mandatory for all pet shipments. No live animal shipment will be dispatched without confirmed crate arrangements.</p>
            </div>
          </section>

          <hr className="border-white/10" />

          {/* Overnight Stay */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">🏢 Overnight Stay / Storage Policy</h2>
            <p className="text-secondary italic mb-6">“Secure Holding. Continuous Care.”</p>

            <p className="text-white/80 mb-6 leading-relaxed">In certain situations, shipments may require temporary holding or overnight storage within our secure facilities. This ensures that your shipment remains safe, monitored, and properly maintained until delivery is completed.</p>

            <h3 className="text-xl font-semibold mb-4">When Storage May Be Required</h3>
            <ul className="list-disc list-inside text-white/70 space-y-2 mb-8 ml-4">
              <li>Receiver unavailable at time of delivery</li>
              <li>Delivery rescheduling</li>
              <li>Transit delays</li>
              <li>Coordination between transfer points</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">Purpose of Storage</h3>
            <div className="space-y-6 pl-4 border-l-2 border-secondary/50 mb-8">
              <div>
                <h4 className="font-semibold text-white mb-2">1. Security</h4>
                <p className="text-white/80 text-sm">Shipments are stored in controlled, secure environments with restricted access.</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">2. Condition Maintenance</h4>
                <p className="text-white/80 text-sm">All items are maintained in appropriate conditions to preserve their quality and safety. For live animals, additional care measures are applied to ensure comfort and well-being.</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">3. Delivery Continuity</h4>
                <p className="text-white/80 text-sm mb-2">Storage allows us to:</p>
                <ul className="list-disc list-inside text-white/70 text-sm space-y-1 ml-4">
                  <li>Avoid failed deliveries</li>
                  <li>Reschedule efficiently</li>
                  <li>Ensure successful final handover</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h4 className="font-semibold text-white mb-2">Receiver Responsibility</h4>
                <p className="text-white/80 text-sm">In cases where overnight storage is required, the receiver is solely responsible for completing the necessary arrangement before delivery can proceed.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h4 className="font-semibold text-white mb-2">Refund Policy</h4>
                <p className="text-white/80 text-sm mb-2">The storage fee is fully refundable upon successful delivery.</p>
                <ul className="list-disc list-inside text-white/70 text-sm space-y-1">
                  <li>Shipment is delivered</li>
                  <li>Receiver signs confirmation</li>
                  <li>Refund is initiated promptly</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-red-900/20 border border-red-500/20 rounded-xl p-6">
              <h4 className="font-semibold text-red-400 mb-2">Important Notice</h4>
              <p className="text-white/80 text-sm">Delivery will not proceed until all required storage arrangements have been completed and confirmed.</p>
            </div>
          </section>

          <hr className="border-white/10" />

          {/* Final Assurance */}
          <section className="bg-gradient-to-r from-secondary/10 to-transparent border border-secondary/20 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">✨ Final Assurance</h2>
            <p className="text-secondary italic mb-6">“Excellence in Every Delivery.”</p>
            
            <p className="text-white/90 mb-4 leading-relaxed">At Hault Express Delivery, our policies are designed to deliver more than logistics—they provide:</p>
            <ul className="list-disc list-inside text-white/80 space-y-2 mb-6 ml-4">
              <li>Security you can rely on</li>
              <li>Transparency you can trust</li>
              <li>Service you can depend on</li>
            </ul>

            <p className="text-white/90 mb-4 font-medium">Once all requirements are fulfilled, your shipment is cleared for:</p>
            <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
              <li>Immediate processing</li>
              <li>Secure transit</li>
              <li>Successful delivery</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
