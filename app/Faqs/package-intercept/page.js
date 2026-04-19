import Footer from '@/app/Components/Footer';

function page() {
  return (
    <div>
      <div className="h-[50vh] bg-gray-100  flex  flex-col justify-center [clip-path:ellipse(100%_100%_at_40%_0)]">
        <h1 className="text-5xl">Package Intercept</h1>
        <span className="border-b-4 border-secondary w-[10%] my-3 mt-5"></span>
      </div>
      <div className="w-[70%] mx-auto my-20">
        <h3 className="text-4xl my-10">Package Intercept Feature</h3>
        <ul className="list-disc w-[90%] mx-auto">
          <li className="mb-5">
            <span className="font-bold block">
              What is the Package Intercept feature?
            </span>{' '}
            The Package Intercept service allows you to stop or redirect a
            package while it is in transit. Whether you need to change the
            delivery address, redirect it to a different location, or have it
            returned to the sender, our Package Intercept feature provides the
            flexibility you need.
          </li>
          <li className="mb-5">
            <span className="font-bold block">
              {' '}
              How do I request a Package Intercept?
            </span>
            To request a Package Intercept, simply log in to your Hault Express Delivery
            account, navigate to the &quot;Track & Manage&quot; section, and
            select the package you wish to intercept. From there, you can choose
            the desired action: change the delivery address, hold the package at
            a nearby facility, or return the package to the sender.
          </li>
          <li className="mb-5">
            <span className="font-bold block">
              {' '}
              What types of packages can be intercepted?
            </span>
            We can intercept most standard packages, including both regular
            shipments and express deliveries. However, certain restrictions may
            apply, such as packages that are already out for delivery or items
            that cannot be altered due to their contents or size.
          </li>
          <li className="mb-5">
            <span className="font-bold block">
              {' '}
              Is there a fee for using the Package Intercept service?
            </span>
            Yes, the Package Intercept service comes with a small fee, which
            varies depending on the service type (e.g., address change, return
            to sender, etc.) and the package&apos;s size or destination. The
            exact cost will be displayed when you request the intercept.
          </li>
          <li className="mb-5">
            <span className="font-bold block">
              {' '}
              Can I change the destination address of my package?
            </span>
            Yes, our Package Intercept feature allows you to change the delivery
            address of your package, whether it&apos;s a new home address, a
            business location, or a nearby pickup facility. This can be done as
            long as the package is still in transit and hasn&apos;t been
            delivered.
          </li>
          <li className="mb-5">
            <span className="font-bold block">
              {' '}
              How long after shipment can I intercept my package?
            </span>
            Package Intercept requests must be made within a specific window of
            time, typically before the package reaches its final destination or
            goes out for delivery. Once the package is in the delivery vehicle,
            it can no longer be intercepted.
          </li>
          <li className="mb-5">
            <span className="font-bold block">
              {' '}
              Will I receive a refund if my Package Intercept request is
              unsuccessful?
            </span>
            If your intercept request cannot be processed—such as if the package
            is too far along in the delivery process—you will receive a full
            refund for the service fee. Refunds will be processed to the
            original payment method used during the request.
          </li>
          <li className="mb-5">
            <span className="font-bold block">
              {' '}
              How will I know if my Package Intercept request is successful?
            </span>
            Once your request is processed, you will receive a confirmation
            email or app notification with the details of the intercept,
            including the updated tracking information. You can also track the
            status in your Hault Express Delivery account.
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default page;
