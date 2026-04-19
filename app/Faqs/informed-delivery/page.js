import Footer from '@/app/Components/Footer';

function page() {
  return (
    <div>
      <div className="h-[50vh] bg-gray-100  flex  flex-col justify-center [clip-path:ellipse(100%_100%_at_40%_0)]">
        <h1 className="text-5xl">Informed Delivery</h1>
        <span className="border-b-4 border-secondary w-[10%] my-3 mt-5"></span>
      </div>
      <div className="w-[70%] mx-auto my-20">
        <ul className="list-disc w-[90%] mx-auto">
          <li className="mb-5">
            <span className="font-bold block">
              What is the Change of Address feature in Informed Delivery?
            </span>{' '}
            The Change of Address feature in Informed Delivery allows you to
            update the delivery address of your mail and packages before they
            reach their destination. This feature ensures flexibility and
            convenience, whether you&apos;re relocating temporarily or
            permanently, or simply need to reroute an item to a new location.
          </li>
          <li className="mb-5">
            <span className="font-bold block">
              {' '}
              How does the Change of Address feature work with Informed
              Delivery?
            </span>
            Once you&apos;ve signed up for Informed Delivery, you&apos;ll
            receive notifications about your incoming mail and packages. If you
            realize that an address update is needed, simply:
            <br /> Log in to your Hault Express Delivery account.
            <br /> Navigate to the &quot;Informed Delivery&quot; section.
            <br /> Select the mail or package you&apos;d like to reroute.
            <br /> Choose the &quot;Change of Address&quot; option and provide
            the new delivery address.
            <br /> Confirm the update and complete any required payment. To
            request a Change of Address:
          </li>
          <li className="mb-5">
            <span className="font-bold block">
              {' '}
              Can I change the address for all incoming items in Informed
              Delivery?
            </span>
            The Change of Address feature applies to most mail and packages
            displayed in your Informed Delivery dashboard. However, certain
            exceptions may apply, such as: <br />
            Items already out for delivery.
            <br /> Restricted or regulated shipments (e.g., certain pet
            deliveries or hazardous materials).
            <br /> Time-sensitive or expedited deliveries that cannot be
            rerouted in time.
          </li>
          <li className="mb-5">
            <span className="font-bold block">
              {' '}
              How much does it cost to change an address using Informed
              Delivery?
            </span>
            A small fee may apply for processing a Change of Address request,
            depending on the service type and the new destination. Fees are
            displayed during the request process for full transparency.
          </li>
          <li className="mb-5">
            <span className="font-bold block">
              {' '}
              What is the deadline to request a Change of Address for my package
              or mail?
            </span>
            To ensure successful rerouting, Change of Address requests must be
            made before the package is out for delivery or has reached its final
            distribution center. Requests submitted after this window may not be
            processed.
          </li>
          <li className="mb-5">
            <span className="font-bold block">
              {' '}
              Will I receive tracking updates after changing my address?
            </span>
            Yes! Once your Change of Address request is processed, updated
            tracking information will be provided through your Informed Delivery
            dashboard. This allows you to monitor your mail and packages as they
            are rerouted to the new address.
          </li>
          <li className="mb-5">
            <span className="font-bold block">
              {' '}
              Can I change the address for multiple items at once?
            </span>
            Yes, you can update the address for multiple mail or package items
            from your Informed Delivery dashboard. Each item will be processed
            individually, and you&apos;ll receive tracking updates for all
            rerouted items.
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default page;
