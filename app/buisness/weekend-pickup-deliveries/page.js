import Link from 'next/link';
import Image from 'next/image';
import ButtonBig from '@/app/Components/ButtonBig';
import { IoIosArrowForward } from 'react-icons/io';
import { FaCheckCircle } from 'react-icons/fa';
import Footer from '@/app/Components/Footer';
function Page() {
  return (
    <>
      <div className="h-[70vh] grid grid-cols-2 gap-4 mx-auto bg-gradient-to-b from-white to-gray-100 [clip-path:ellipse(100%_100%_at_40%_0)] mt-[6.5%]">
        <div className="flex items-center mx-10">
          <Image
            src="/saturdayShipping.jpg"
            alt="Description of image"
            width={650}
            height={250} // Specify the dimensions or use `layout="responsive"`
          />
        </div>
        <div className="flex  flex-col justify-center mx-10">
          <h2 className="text-4xl">
            Saturday Delivery <br /> Options
          </h2>
          <span className="border-b-4 border-secondary w-[15%] my-3"></span>
          <p>
            Hault Express Delivery offers Saturday parcel delivery to help your reach your
            customers, even on weekends.
          </p>
          <div></div>
        </div>
      </div>
      <div className="h-[70vh] mx-auto w-[70%] mt-20 flex flex-col items-center">
        <h2 className="text-4xl text-center">
          Why Wait for Monday? <br />
        </h2>
        <div className="border-b-4 border-secondary w-[15%] my-3"></div>

        <p>
          Your customers want their deliveries as soon as possible. And Hault Express Delivery
          understands.
        </p>
        <div className="grid grid-cols-2 mt-10 gap-11">
          <div>
            <Image
              src="/jopwell.jpg"
              alt="Description of image"
              width={650}
              height={250} // Specify the dimensions or use `layout="responsive"`
            />
          </div>
          <div>
            <ul>
              <li className="flex">
                {' '}
                <FaCheckCircle className="text-primary text-2xl mr-2" /> With
                Hault Express Delivery Standard on Saturday, provide faster delivery, when and
                how your customers want it.
              </li>
              <li className="flex">
                {' '}
                <FaCheckCircle className="text-primary text-2xl mr-2" />{' '}
                There&apos;s no need to separate parcels. Hault Express Delivery helps
                businesses meet customer expectations for timely deliveries.it.
              </li>
              <li className="flex">
                {' '}
                <FaCheckCircle className="text-primary text-2xl mr-2" />{' '}
                Saturday delivery is a general service. No special contracts are
                required.
              </li>
              <li className="flex">
                {' '}
                <FaCheckCircle className="text-primary text-2xl mr-2" />{' '}
                Eligible parcels will be delivered at no additional cost above
                normal shipping rates*.
              </li>
            </ul>
            <ButtonBig className="px-10 py-3 bg-accent rounded-full flex items-center mt-5">
              Start Shipping <IoIosArrowForward className="text-1xl" />
            </ButtonBig>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Page;
