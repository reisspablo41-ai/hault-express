import Image from 'next/image';

import Footer from '@/app/Components/Footer';

Image;
function page() {
  return (
    <div>
      <div className="relative w-screen h-[70vh] mx-auto my-[7%]">
        <Image
          src="/ourPeople.jpg"
          alt="Description of image"
          layout="fill"
          objectFit="cover"
        />
        <div className="bg-white absolute md:w-[30%] xs:w-[80%] h-[20vh] md:left-[55%] top-[30%] p-10 rounded flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl text-center">Who we are</h1>
            <p className="text-base text-center mt-5">
              Learn about our company. Explore our culture. And discover the
              values that drive us.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[70%] mx-auto my-20">
        <h3 className="text-3xl my-10 text-center">
          What sets us apart: Our nearly 500,000 difference-makers
        </h3>
        <p>
          Our team members are deep-down dedicated to our Purple Promise — to
          make every Hault Express Delivery experience outstanding. They prove it by going the
          extra mile (sometimes literally). Engaging with each other to find
          creative, innovative ways to solve customer problems. And displaying a
          work ethic that just won&apos;t quit. No matter where you look — from
          Memphis to Mumbai, Dublin to Dubai, Botswana to Brazil — we&apos;re
          working to provide a safe, inclusive, and rewarding place to work.
          Where growth and learning are prioritized. Employee successes are
          celebrated. And team members are delivering hope, change, and new
          possibilities to people everywhere.
        </p>
        <h3 className="text-4xl my-10">Our people-first culture</h3>
        <p>
          Creating an exceptional workplace means caring about more than our
          company&apos; success. It means prioritizing our people. Recognizing
          next-level effort. Prizing diversity. Enabling innovation. And rolling
          up our sleeves to help the people around us. That leads to outstanding
          customer experiences.
        </p>
        <h3 className="text-4xl my-10">What we value</h3>
        <p>
          Find out about our corporate commitments and how they help our
          customers, employees, and communities. Image
          <br />
          <span className="font-bold block my-5">Sustainability</span> Read
          about our efforts to advance environmental stewardship, including
          reducing emissions and waste, investing in research and development,
          and deploying electric delivery vehicles.
          <span className="font-bold block my-5">
            Quality Driven Management
          </span>{' '}
          Inspired by Six Sigma, Lean Six Sigma, Baldrige, and ISO, QDM gives us
          a structured approach to inventing, innovating, and improving at every
          level of the company.
          <span className="font-bold block my-5">
            Diversity, equity, and inclusion
          </span>{' '}
          At Hault Express Delivery, we embrace diversity, equity and inclusion as an imbedded
          and integral part of our business strategy and culture. Our
          differences create strength. We don&apos;t just believe it. We live
          it. See how our workforce reflects it, our culture elevates it, and
          our recognition reaffirms it.
        </p>
        <div className="grid grid-cols-4 my-20 xs:flex xs:flex-col md:flex-row">
          <div className="mx-5 xs:my-5 md:my-0">
            <h4 className="font-bold ">Our people</h4>
            <p>
              We understand the importance of actively recruiting, developing,
              and retaining our diverse talent.
            </p>
          </div>

          <div className="mx-5 xs:my-5 md:my-0">
            <h4 className="font-bold ">Our education and engagement</h4>
            <p>
              We foster ongoing employee engagement and provide educational
              opportunities to build an inclusive working environment and help
              our people succeed.
            </p>
          </div>
          <div className="mx-5 xs:my-5 md:my-0">
            <h4 className="font-bold ">
              Our communities, customers, and suppliers
            </h4>
            <p>
              We are committed to investing in the communities, customers, and
              suppliers we serve
            </p>
          </div>
          <div className="mx-5 xs:my-5 md:my-0">
            <h4 className="font-bold ">Our Story</h4>
            <p>
              We are committed to investing in the communities, customers, and
              suppliers we serve
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
