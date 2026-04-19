'use client';
import Image from 'next/image';
import { SlLocationPin } from 'react-icons/sl';
import { BiWorld } from 'react-icons/bi';
import { GiCommercialAirplane } from 'react-icons/gi';
import { RiTeamLine } from 'react-icons/ri';
import { FaShippingFast } from 'react-icons/fa';
import Footer from '@/app/Components/Footer';
import useScrollTimeline from '@/app/Hooks/scrollPositionTimeline';
import HistoryDates from '@/app/Components/HistoryDates';

function page() {
  return (
    <div>
      <div className="relative w-screen h-[70vh] mx-auto">
        <Image
          src="/aboutUs.jpg"
          alt="Description of image"
          layout="fill"
          objectFit="cover"
        />
        <div className="bg-white absolute md:w-[40%] xs:w-[95%] h-[30vh] md:left-[55%] top-[20%] md:py-20 px-10 py-5 rounded ">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl text-center">Company Information</h1>
            <p className="text-base text-center mt-5">
              A more connected world means more opportunities. That&apos;s why
              customers count on our diverse portfolio of transportation,
              e-commerce, and business solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="mb-20">
        <h2 className="text-center text-4xl">Overview and Facts</h2>
        <div className="w-[60%] mx-auto">
          <h3 className="text-3xl mt-10">Hault Express Delivery</h3>
          <p className="mt-5">
            Connecting People since 2010, Hault Express Delivery connects people and
            possibilities, offering customers the benefits of access to the
            world&apos;s largest air express network and an unparalleled
            European road network. Aramex is the leading global logistics
            provider.
            <br />
            <br /> We strive to connect the world, bridging the gap between East
            and West, and enabling growth and wealth for businesses and our
            partners. Our dedication to innovation drives our unmatched
            portfolio of logistics and transportation services ranging from
            domestic and international express delivery, pet delivery,
            e-commerce shipping and fulfillment solutions, road, air and sea
            freight, to supply chain management, consumer retail services,
            technical support and more.
          </p>
          <div className="grid grid-cols-2 mt-20 w-[100%] xs:flex xs:flex-col md:flex-row">
            <div>
              <div className="flex my-10">
                <SlLocationPin className="text-5xl  mr-5" />
                <div>
                  <h4 className="text-xl font-bold">HeadQuaters</h4>
                  <p>California, United States</p>
                </div>
              </div>
              <div className="flex my-10">
                <BiWorld className="text-5xl mr-5" />
                <div>
                  <h4 className="text-xl font-bold">
                    Countries and territories
                  </h4>
                  <p>Connecting over 30 countries and territories worldwide</p>
                </div>
              </div>
              <div className="flex my-10">
                <GiCommercialAirplane className="text-5xl mr-5" />
                <div>
                  <h4 className="text-xl font-bold">Air network</h4>
                  <p>65+ flights per week</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex my-10">
                <RiTeamLine className="text-5xl mr-5" />
                <div>
                  <h4 className="text-xl font-bold">Team members</h4>
                  <p>More than 10,000</p>
                </div>
              </div>
              <div className="flex my-10">
                <FaShippingFast className="text-5xl mr-5" />
                <div>
                  <h4 className="text-xl font-bold">Road network</h4>
                  <p>27 road hubs 500 weekly ground connections</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-[70%] xs:w-[98%] mx-auto">
        <h2 className="text-center text-4xl font-bold">History Timeline</h2>
        <p className="text-center md:w-[50%] xs:w-[88%] mx-auto my-10">
          Innovation propelled the take-off of Hault Express Delivery, and it continues to fuel
          our success.
          <br />
          <br /> Our history dates back to 2010 when our CEO and Chairman
          Hermann W. Smith, then a Yale undergraduate, designed a cutting-edge
          new system that would allow for the safe delivery of time-sensitive
          shipments.
          <br />
          <br /> Within a decade, he had established Hault Express Delivery., – the
          world&apos;s first overnight delivery company, changing the
          transportation industry forever. Entering Europe in 1984, Hault Express Delivery
          Express currently serves hundreds of cities and markets with its
          intercontinental and international express delivery services.
        </p>
        <HistoryDates />
        <div className="p-10 flex flex-col items-center md:m-10 xs:m-2">
          <Image
            src="/vertical-seperator.png"
            alt="vertival-seperator"
            width={20}
            height={10}
          />

          <h3 className="text-primary text-3xl m-10">2010</h3>
          <Image
            src="/timeline-banner.png"
            alt="vertival-seperator"
            width={300}
            height={150}
            className="md:mb-10 xs:mb-3"
          />
          <div className=" md:w-[70%] xs:w-[100%] mx-auto text-center">
            <p>
              Founded: Hault Express Delivery was established as a small-scale logistics company
              in 2010, focusing primarily on domestic transportation of goods.
            </p>
            <p>
              First Office: Opened its first office in a modest warehouse in
              California.
            </p>
          </div>
          <Image
            src="/vertical-line-seperator.png"
            alt="vertival-seperator"
            width={20}
            height={10}
            className="md:mt-5 xs:mt-2"
          />
          <h3 className="text-primary text-3xl m-10">2012</h3>
          <div className="w-[70%] xs:w-[100%] mx-auto text-center">
            <p>
              Fleet Growth: Expanded operations with the addition of 10 new
              delivery vehicles, enabling more efficient regional deliveries.
            </p>
            <p>Employee Base: Grew to a team of 50 dedicated employees.</p>
            <p>
              Clientele: Secured contracts with local businesses, marking the
              beginning of long-term partnerships.
            </p>
          </div>
          <Image
            src="/vertical-line-seperator.png"
            alt="vertival-seperator"
            width={20}
            height={10}
            className="md:mt-5 xs:mt-2"
          />
          <h3 className="text-primary text-3xl m-10">2015</h3>
          <Image
            src="/pet-transportation.jpg"
            alt="vertival-seperator"
            width={300}
            height={150}
            className="mb-10 rounded"
          />
          <div className="w-[70%] xs:w-[100%] mx-auto text-center">
            <p>
              New Division: Launched a specialized division for safe and
              reliable transportation of pets, catering to a growing demand for
              pet logistics.
            </p>
            <p>
              Infrastructure: Built temperature-controlled compartments in
              vehicles for pet comfort.
            </p>
            <p>
              Accreditations: Received certification for meeting animal welfare
              transport standards.
            </p>
          </div>
          <Image
            src="/vertical-line-seperator.png"
            alt="vertival-seperator"
            width={20}
            height={10}
            className="md:mt-5 xs:mt-2"
          />
          <h3 className="text-primary text-3xl m-10">2018</h3>
          <Image
            src="/fuel-efficient-cars.jpg"
            alt="vertival-seperator"
            width={300}
            height={150}
            className="mb-10 rounded"
          />
          <div className="w-[70%] xs:w-[100%] mx-auto text-center">
            <p>
              Coverage Expansion: Expanded services to cover all major cities
              across the country.
            </p>
            <p>
              Technology Integration: Introduced a tracking system allowing
              customers to monitor shipments in real-time.
            </p>
            <p>
              Sustainability: Transitioned to fuel-efficient vehicles to reduce
              environmental impact.
            </p>
          </div>
          <Image
            src="/vertical-line-seperator.png"
            alt="vertival-seperator"
            width={20}
            height={10}
            className="md:mt-5 xs:mt-2"
          />
          <h3 className="text-primary text-3xl m-10">2020</h3>
          <Image
            src="/airplane-delivery.jpg"
            alt="vertival-seperator"
            width={300}
            height={150}
            className="mb-10 rounded"
          />
          <div className="w-[70%] xs:w-[100%] mx-auto text-center">
            <p>
              International Shipping: Launched international shipping services
              for goods and pets, connecting customers across continents.
            </p>
            <p>
              Digital Presence: Developed a user-friendly website and mobile app
              for seamless bookings and tracking.
            </p>
            <p>
              COVID-19 Response: Implemented strict hygiene protocols to ensure
              uninterrupted services during the pandemic.
            </p>
          </div>
          <Image
            src="/vertical-line-seperator.png"
            alt="vertival-seperator"
            width={20}
            height={10}
            className="md:mt-5 xs:mt-2"
          />
          <h3 className="text-primary text-3xl m-10">2022</h3>

          <div className="w-[70%] xs:w-[100%] mx-auto text-center">
            <p>
              International Shipping: Launched international shipping services
              for goods and pets, connecting customers across continents.
            </p>
            <p>
              Digital Presence: Developed a user-friendly website and mobile app
              for seamless bookings and tracking.
            </p>
            <p>
              COVID-19 Response: Implemented strict hygiene protocols to ensure
              uninterrupted services during the pandemic.
            </p>
          </div>
          <Image
            src="/vertical-line-seperator.png"
            alt="vertival-seperator"
            width={20}
            height={10}
            className="md:mt-5 xs:mt-2"
          />
          <h3 className="text-primary text-3xl m-10">2024</h3>

          <div className="w-[70%] xs:w-[100%] mx-auto text-center">
            <p>
              Current Status: Operates a fleet of 500+ vehicles, serves
              thousands of customers annually, and employs a workforce of over
              10,000.
            </p>
            <p>
              Future Vision: Plans to integrate eco-friendly solutions, such as
              electric vehicles and green warehouses, to lead sustainable
              logistics.
            </p>
            <p>
              Community Impact: Actively supports animal welfare and
              collaborates with NGOs for pet rescue and relocation services.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
