import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
function SupportResources() {
  return (
    <div className="mt-20 flex flex-col items-center">
      <h2 className="text-3xl">Online Support Resources</h2>
      <h3>You&apos;ve got questions, we&apos;ve got answers.</h3>
      <span className="border-b-4 border-secondary w-[10%] my-3 mt-5"></span>
      <div className="grid grid-cols-2 my-20 xs:flex xs:flex-col md:flex-row">
        <Link href="/ContactUs/FileClaim" className="">
          <div className="w-[80%] mx-auto shadow-custom-light p-20 xs:mb-20 md:mb-0">
            <h3>Have a Problem with Your Delivery?</h3>
            <p>
              We can help out when you file a claim. Send us the details of your
              issue and we&apos;ll do the rest to find the best solution to make
              things right as quickly as possible.
            </p>
            <span className="mt-2 text-blue-600 flex items-center">
              File a Claim <FaArrowRight />
            </span>
          </div>
        </Link>
        <Link href="/Track" className="mt-2x flex items-center">
          <div className="w-[80%] mx-auto shadow-custom-light p-20">
            <h3>Where&apos;s My Parcel?</h3>
            <p>
              Visit our tracking page to know the whereabouts of your pacakge
              any questions you have about your shipment&apos;s whereabouts or
              changing a delivery.
            </p>
            <span className="mt-2 text-blue-600 flex items-center">
              {' '}
              Visit tracking Solution <FaArrowRight />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SupportResources;
