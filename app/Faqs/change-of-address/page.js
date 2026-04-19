import Footer from '@/app/Components/Footer';

function page() {
  return (
    <div>
      <div className="h-[50vh] bg-gray-100  flex  flex-col justify-center [clip-path:ellipse(100%_100%_at_40%_0)]">
        <h1 className="text-5xl">Change of Address</h1>
        <span className="border-b-4 border-secondary w-[10%] my-3 mt-5"></span>
      </div>
      <div className="w-[70%] mx-auto my-20">
        <ul className="list-disc w-[90%] mx-auto">
          <li className="mb-5">
            <span className="font-bold block">
              What is the Change of Address?
            </span>{' '}
            Our Change of Address feature allows you to update the delivery
            address of a package that is already in transit. This is perfect for
            situations where your plans have changed, and you need the package
            delivered to a new location.
          </li>
          <li className="mb-5">
            <span className="font-bold block">
              {' '}
              How can I request a Change of Address for my package?
            </span>
            To request a Change of Address:
            <br /> Log in to your Hault Express Delivery account.
            <br /> Go to the &quot;Track & Manage&quot; section. <br />
            Select the package for which you want to update the delivery
            address. <br />
            Click on the &quot;Change of Address&quot; option and enter the new
            delivery details. <br />
            Confirm your request and make the necessary payment (if applicable).
          </li>
          <li className="mb-5">
            <span className="font-bold block">
              {' '}
              3. Can I change the address for any package?
            </span>
            Most packages are eligible for a Change of Address as long as they
            are still in transit. However, some restrictions may apply, such as:
            <br />
            Packages already out for delivery.
            <br /> Shipments that are too close to their destination.
            <br />
            Items requiring special handling or regulatory restrictions (e.g.,
            certain types of pets or hazardous materials).
          </li>
          <li className="mb-5">
            <span className="font-bold block">
              {' '}
              Is there a fee for using the Change of Address feature?
            </span>
            Yes, there is a small fee for processing a Change of Address
            request. The exact cost will depend on factors such as the new
            destination, package size, and service type. The fee will be
            displayed during the request process.
          </li>
          <li className="mb-5">
            <span className="font-bold block">
              {' '}
              How long does it take for the new address to be updated?
            </span>
            Once your request is approved, the new delivery address will be
            updated in our system immediately. However, the actual rerouting of
            your package may take some additional time, depending on its current
            location.
          </li>
          <li className="mb-5">
            <span className="font-bold block">
              {' '}
              Can I change the address for a pet delivery?
            </span>
            Yes, you can update the delivery address for pet shipments, but
            additional conditions may apply. For instance, the new address must
            meet our safety and regulatory requirements for pet deliveries.
            Contact our support team for guidance on pet delivery address
            changes.
          </li>
          <li className="mb-5">
            <span className="font-bold block">
              {' '}
              Can I track my package after changing the delivery address?
            </span>
            Absolutely! Once the Change of Address is processed, the updated
            tracking information will be available in your Hault Express Delivery account. You
            can monitor the package&apos;s new route in real-time.
          </li>
          <li className="mb-5">
            <span className="font-bold block">
              {' '}
              What happens if the Change of Address request is unsuccessful?
            </span>
            If your request cannot be processed due to restrictions or timing
            issues, you will be notified immediately. In such cases, any fees
            charged for the Change of Address will be refunded.
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default page;
