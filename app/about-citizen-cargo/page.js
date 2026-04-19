import Image from 'next/image';
import Seperator from '../Components/Seperator';
import ButtonBig from '../Components/ButtonBig';
import { IoIosArrowForward } from 'react-icons/io';
import Footer from '../Components/Footer';
import Link from 'next/link';
import ButtonBigTransparent from '../Components/ButtonBigTransparent';

function page() {
  return (
    <>
      <div className="md:mt-[20%] xs:mt-[30%] flex flex-col justify-center items-center text-center">
        <h1 className=" text-4xl">
          Moving our world forward by delivering what matters.
        </h1>
        <Seperator />
      </div>
      <div className="relative w-[90%] h-[70vh] mx-auto my-20">
        <Image
          src="/informedDelivery.jpg"
          alt="Description of image"
          layout="fill"
          objectFit="cover"
        />
        <div className="bg-white absolute md:w-[40%] xs:w-[95%] h-[50vh] md:left-[55%] top-[20%] p-10 rounded">
          <div>
            <p className="text-xs tracking-widest">Customer First</p>
            <h3 className="md:text-3xl xs:text-xl">
              Our solutions connect people and possibilities.
            </h3>
            <p className="mt-5 xs:text-md">
              Connecting people with goods, pets, services and ideas creates
              opportunities and improves lives. At Hault Express Delivery, we believe that a
              connected world is a better world, and that belief guides
              everything we do.
            </p>
            <Link href="/ContactUs">
              <ButtonBig className="rounded-full bg-secondary px-10 py-3 md:mt-10 xs:mt-5 items-center flex hover:scale-110 transition-all ease-in-out">
                Contact Us <IoIosArrowForward className="text-1xl" />
              </ButtonBig>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-20 [clip-path:ellipse(150%_95%_at_40%_0)]">
        <div className="w-[80%] mx-auto ">
          <p>
            Connecting people with goods, services and ideas creates
            opportunities and improves lives. At Hault Express Delivery, we believe that a
            connected world is a better world, and that belief guides everything
            we do.
          </p>
          <div className="grid grid-cols-3 w-[90%] mx-auto mt-20 xs:flex xs:flex-col md:flex-row">
            <div className="flex flex-col items-center mx-5 xs:mb-20 md:mb-0">
              <Image
                src="/aboutUs.jpg"
                alt="Description of image"
                height={300}
                width={600}
              />
              <h3 className="text-3xl my-5 xs:text-center">
                Company Information
              </h3>
              <p className="text-center">
                The Hault Express Delivery network offers next-day service to hundreds of
                customers.
              </p>
              <Link href="/about-citizen-cargo/our-company">
                <ButtonBigTransparent className="rounded-full text-sm border border-primary px-10 py-3 mt-10 hover:scale-110 transition-all">
                  CONTINNUE READING
                </ButtonBigTransparent>
              </Link>
            </div>
            <div className="flex flex-col items-center mx-5 xs:mb-20 md:mb-0">
              <Image
                src="/ourPeople.jpg"
                alt="Description of image"
                height={300}
                width={600}
              />
              <h3 className="text-3xl my-5">Our People</h3>
              <p className="text-center">
                Hault Express Delivery is a world class company and, at its core, is all about
                people.
              </p>
              <Link href="/about-citizen-cargo/our-people">
                <ButtonBigTransparent className="rounded-full text-sm border border-primary px-10 py-3 mt-10 hover:scale-110 transition-all">
                  GAIN INSIGHT
                </ButtonBigTransparent>
              </Link>
            </div>
            <div className="flex flex-col items-center mx-5 xs:mb-20 md:mb-0">
              <Image
                src="/petDelivery.jpg"
                alt="Description of image"
                height={300}
                width={600}
              />
              <h3 className="text-3xl my-5 text-center">Pet Delivery System</h3>
              <p className="text-center">
                Learn more about our excellent pet delivery system
              </p>
              <Link href="/about-citizen-cargo/pet-delivery-system">
                <ButtonBigTransparent className="rounded-full text-sm border border-primary px-10 py-3 mt-10 hover:scale-110 transition-all">
                  LEARN MORE
                </ButtonBigTransparent>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="my-20 flex flex-col items-center">
        <h3 className="text-3xl text-center px-5">
          Customer First, People Led, Innovation Driven
        </h3>
        <Seperator />
        <div className="relative w-[80%] h-[90vh] mx-auto my-20">
          <Image
            src="/customerDelivery.jpg"
            alt="Description of image"
            layout="fill"
            objectFit="cover"
          />
          <div className="bg-white absolute xs:w-[80%] md:w-[30%] h-[70vh] md:left-[55%] top-[10%] p-10 rounded flex flex-col items-center justify-center">
            <div className="text-center ">
              <div className="border-b-2 rounded border-gray-100 p-5">
                <h3 className="text-3xl font-bold">10k+</h3>
                <p>Employees</p>
              </div>
              <div className="border-b-2 rounded border-gray-100 p-5">
                <h3 className="text-3xl font-bold">500k+</h3>
                <p>Packages delivered per day</p>
              </div>
              <div className="border-b-2 rounded border-gray-100 p-5">
                <h3 className="text-3xl font-bold">50M+</h3>
                <p>Total revenue for 2023</p>
              </div>

              <Link href="/AboutHault Express Delivery/">
                <ButtonBig className="rounded-full bg-secondary px-10 py-3 mt-10 items-center flex hover:scale-110 transition-all ease-in-out">
                  View All Facts Sheet{' '}
                  <IoIosArrowForward className="text-1xl" />
                </ButtonBig>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
