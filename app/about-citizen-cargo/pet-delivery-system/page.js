import Image from 'next/image';

import Footer from '@/app/Components/Footer';
import Seperator from '@/app/Components/Seperator';

Image;
function page() {
  return (
    <div>
      <div className="h-[50vh] bg-gray-100  flex  flex-col justify-center [clip-path:ellipse(100%_100%_at_40%_0)] pt-[20vh] xs:pb-20 md:pb-0">
        <h1 className="md:text-5xl xs:text-4xl ml-10 mb-5">
          Pet Delivery System
        </h1>
        <p className="w-[50%] ml-10 xs:text-sm md:text-base">
          Efficient, Reliable, and Trackable Shipping Solutions. At Hault Express Delivery
          Shipping Agency, we understand that timely and secure delivery is the
          backbone of global trade and customer satisfaction. Our delivery
          system is designed to provide a seamless, efficient, and trackable
          experience for all your shipping needs—whether you’re transporting
          goods, parcels, or even pets.
        </p>
        <span className="border-b-4 border-secondary w-[10%] my-3 mt-5 ml-10"></span>
      </div>
      <div className="w-[70%] mx-auto my-20">
        <h3 className="text-4xl my-10">How Our Delivery System Works</h3>
        <ul className="list-disc w-[90%] mx-auto">
          <li className="mb-5">
            <span className="font-bold block">Request a Shipment</span> Start by
            providing your shipment details through our online portal or by
            contacting our customer service team. Let us know: The type of goods
            to be shipped. Pickup and destination locations. Any special
            requirements (e.g., temperature-controlled storage, pet
            transportation).
          </li>
          <li className="mb-5">
            <span className="font-bold block"> Scheduling and Pickup</span>
            We offer flexible scheduling to fit your timeline. Our team will
            coordinate with you to ensure a smooth and efficient pickup process.
          </li>
          <li className="mb-5">
            <span className="font-bold block"> Transit and Tracking</span>
            Once your shipment is on its way, you can track it in real-time
            using our advanced tracking system. Get live updates about: Transit
            progress. Estimated delivery time. Any potential delays.
          </li>
          <li className="mb-5">
            <span className="font-bold block"> Secure Delivery Whether</span>
            it&apos;s across town or across continents, our logistics team
            ensures that every shipment arrives at its destination safely and on
            time.
          </li>
        </ul>
        <h3 className="text-4xl my-10">Key Features of Our Delivery System</h3>
        <ul className="list-disc w-[90%] mx-auto">
          <li className="mb-5">
            <span className="font-bold block">
              Advanced Tracking Technology
            </span>{' '}
            Stay informed about your shipment every step of the way with our
            real-time tracking tools. Get notifications via email, SMS.
          </li>
          <li className="mb-5">
            <span className="font-bold block">Versatile Delivery Options</span>
            We provide customized solutions to meet diverse needs:
            <br />
            Same-Day Delivery: Perfect for urgent shipments.
            <br /> Standard Delivery: Cost-effective and reliable for non-urgent
            items.
            <br />
            International Shipping: Seamless global delivery supported by our
            extensive network of partners.
            <br />
            Pet Transport Services: Safe and comfortable travel for your furry
            companions.
          </li>
          <li className="mb-5">
            <span className="font-bold block"> Eco-Friendly Practices</span>
            At Hault Express Delivery, sustainability is key. We&apos;re committed to reducing
            our carbon footprint by using:
            <br />
            Eco-friendly packaging options.
            <br /> Energy-efficient transport methods.
          </li>
          <li className="mb-5">
            <span className="font-bold block"> Secure Handling </span>
            Your shipment is in safe hands. From temperature-controlled
            containers for sensitive items to careful handling of fragile goods,
            we prioritize safety at every stage.
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-3xl mt-20 mb-5 text-center">Why Choose Us</h3>
        <Seperator />
        <ul className="list-disc w-[70%] mx-auto">
          <li className="mb-5">
            <span className="font-bold block">Global Reach</span> With our
            extensive network of partners, we deliver to destinations across the
            globe, ensuring your shipments reach their destination without
            hassle.
          </li>
          <li className="mb-5">
            <span className="font-bold block"> Customer-Centric Approach</span>
            At Hault Express Delivery, we tailor our delivery services to your specific needs.
            Our customer support team is available 24/7 to assist with inquiries
            or special requests.
          </li>
          <li className="mb-5">
            <span className="font-bold block"> Competitive Pricing</span>
            Get premium delivery services at competitive rates. Request a quote
            today and discover the Hault Express Delivery difference.
          </li>
          <li className="mb-5">
            <span className="font-bold block"> Secure Handling </span>
            Your shipment is in safe hands. From temperature-controlled
            containers for sensitive items to careful handling of fragile goods,
            we prioritize safety at every stage.
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default page;
