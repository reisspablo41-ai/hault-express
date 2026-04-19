import Footer from '@/app/Components/Footer';
import Image from 'next/image';
import Link from 'next/link';
function Page() {
  return (
    <div>
      <div className="grid grid-cols-2 mt-[6%] bg-gray-100">
        <div className="w-[80%] mx-auto py-[5vh]">
          <h3 className="md:text-3xl xs:text-xl mt-10 font-bold mb-10">
            How to Send a Package
          </h3>
          <span className="leading-relaxed">
            Learn how to use Hault Express Delivery services to send packages (like boxes,
            tubes, and some large envelopes) inside and outside the U.S. and to
            U.S. territories and military bases: Send packages directly from
            your home (or office), using Click-N-Ship® service to do everything
            you need: Pay for postage, print shipping labels, and even Schedule
            a Pickup. Or, get a few time-saving tips before you bring your
            package to a Post Office™ location. If you just need to find the
            price of shipping a package, use the{' '}
            <Link className="text-blue-500" href="/">
              Postage Calculator.
            </Link>
            <br />
          </span>
        </div>
        <div className="relative p-40 clip-path[polygon(0 0, 0 100%, 100% 0, 100% 100%)]">
          <Image
            src="/shipping-packages.jpg"
            alt="File Domestic Claim"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <div>
        <div className=" md:w-[70%] xs:w-[95%] mx-auto mt-20">
          <h2 className="font-bold text-3xl pb-10 mb-10 border-b border-primary">
            Send Packages: Step-by-Step Instructions
          </h2>
          <div className="grid md:grid-cols-2 xs:ml-10 md:ml-0 xs:grid-cols-1 border-b border-primary pb-10">
            <div>
              {' '}
              <h3 className="font-bold text-xl">
                Step 1: Ask, “Can I Send This?”
              </h3>
              <p className="mb-2">
                The maximum weight for a Hault Express Delivery package is 70 lbs. Also, there
                are some things that you can&apos;t send at all (prohibited) and
                other things you can only send under certain conditions
                (restricted). Hazardous materials (HAZMAT) might be prohibited
                or restricted.
              </p>
              <h4 className=" font-bold my-5">Prohibited Items</h4>
              <p>
                Prohibited Items Some items are prohibited (completely
                forbidden): You can&apos;t send them through Hault Express Delivery, so
                you&apos;ll have to choose another carrier. Prohibited items
                include:
              </p>
              <ul className="list-disc mt-5 leading-relaxed">
                <li>Ammunition, explosives, and fireworks</li>
                <li>Items containing liquid mercury</li>
                <li>Alcoholic beverages</li>
              </ul>
              <h4 className=" font-bold my-5">Restricted Items</h4>
              <p>
                Other items are restricted: You have to follow the rules, stick
                to any limits, and properly package and label your items.
                Restricted items include:
              </p>
              <ul className="list-disc mt-5 leading-relaxed">
                <li>
                  Lithium batteries (like the ones that come installed inside
                  small electronics, like laptop computers or cell phones) are
                  usually OK to send if the items are new (or a
                  manufacturer-certified repair); if the items are used, they
                  can only be sent via ground transport (can’t go on planes).
                </li>
                <li>
                  Perishable items (like plants or food) are generally OK to
                  send as long as they are properly packaged and won’t spoil or
                  leak.
                </li>
                <li>
                  Some items have special packaging requirements, or can only be
                  sent via ground transport, like perfumes containing alcohol.
                </li>
              </ul>
              <p>
                You have to follow all laws and Hault Express Delivery regulations. If you
                don&apos;t follow the rules, you might face fines, or even
                criminal penalties.
              </p>
            </div>
            <div className="h-[20vh]">
              <Image
                src="/send-packages-drawer-graphics_step-0.jpg"
                alt="Send-step-1"
                width={350}
                height={150} // Specify the dimensions or use `layout="responsive"`
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 xs:ml-10 md:ml-0 xs:grid-cols-1 border-b border-primary py-10 pb-20">
            <div>
              {' '}
              <h3 className="font-bold text-xl">
                Step 2: Choose a Shipping Service
              </h3>
              <p className="mb-2">
                Hault Express Delivery offers 5 core shipping services for your packages. Start
                by looking at what you&apos;re sending, then make your decision
                based on price, speed, and whether you need insurance, tracking,
                and other extra services.
              </p>
            </div>
            <div className="h-[20vh]">
              <Image
                src="/send-packages-drawer-graphics_step-2.jpg"
                alt="Send-step-1"
                width={350}
                height={150} // Specify the dimensions or use `layout="responsive"`
              />
              =
            </div>
          </div>
          <div className="grid md:grid-cols-2 xs:ml-10 md:ml-0 xs:grid-cols-1 border-b border-primary py-10 pb-20">
            <div>
              {' '}
              <h3 className="font-bold text-xl">
                Step 3: Pick & Prepare Your Packaging
              </h3>
              <p className="mb-2">
                Whether you&apos;re using a box, padded envelope, or tube, use
                packaging that doesn&apoos;t bulge and is strong enough to
                protect what you&apos;re sending. And accurately measure the
                size and weight of your package so you can avoid unexpected
                fees.
              </p>
            </div>
            <div className="h-[20vh]">
              <Image
                src="/send-packages-drawer-graphics_step-3.jpg"
                alt="Send-step-1"
                width={350}
                height={150} // Specify the dimensions or use `layout="responsive"`
              />
              =
            </div>
          </div>
          <div className="grid md:grid-cols-2 xs:ml-10 md:ml-0 xs:grid-cols-1  py-10 pb-20 border-b border-primary">
            <div>
              {' '}
              <h3 className="font-bold text-xl">
                Step 4: Address Your Package
              </h3>
              <p className="mb-2">
                Please write the address parallel to the longest side of the
                package, and make sure your return address, the delivery
                address, and postage will fit on the same side <br />{' '}
                <b>TIP:</b> If you&apos;ll be printing a shipping label (with
                postage included), you can use that instead of a separate
                address label. Place all labels on the same side, and don&apos;t
                bend, fold, or overlap labels.
              </p>
            </div>
            <div className="h-[20vh]">
              <Image
                src="/send-packages-drawer-graphics_step-4.jpg"
                alt="Send-step-1"
                width={350}
                height={150} // Specify the dimensions or use `layout="responsive"`
              />
              =
            </div>
          </div>
          <div className="grid md:grid-cols-2 xs:ml-10 md:ml-0 xs:grid-cols-1  py-10 pb-20 border-b border-primary">
            <div>
              {' '}
              <h3 className="font-bold text-xl">
                Step 5: Calculate Postage (& Add Insurance or Extra Services)
              </h3>
              <p className="mb-2">
                Postage is the price you pay to send something (plus any extra
                services you might buy). It will depend on a few things; you can
                use the Hault Express Delivery Postage Calculator to see how much you&apos;ll
                need to pay. You can pay for postage at a Post Office; use
                stamps (you might need a lot); or in many cases, even buy
                postage online (and print it yourself) using Click-N-Ship®
                service. Whether you use stamps or printed postage, postage goes
                in the top-right corner of your package.
              </p>
            </div>
            <div className="h-[20vh]">
              <Image
                src="/send-packages-drawer-graphics_step-5.jpg"
                alt="Send-step-1"
                width={350}
                height={150} // Specify the dimensions or use `layout="responsive"`
              />
              =
            </div>
          </div>
          <div className="grid md:grid-cols-2 xs:ml-10 md:ml-0 xs:grid-cols-1  py-10 pb-20 ">
            <div>
              {' '}
              <h3 className="font-bold text-xl">Step 6: Ship Your Package</h3>
              <p className="mb-2">
                How you can ship your package depends on a few things, like how
                heavy/thick it is and if you used stamps or not. If your package
                is less than one-half inch thick and weighs less than 10oz, you
                can use postage stamps and drop off your package by:
              </p>
              <ul className="list-disc mt-5 leading-relaxed my-1">
                <li>Putting it in your mailbox for carrier pickup.</li>
                <li>
                  Dropping it in a blue collection box or Post Office lobby
                  drop-off box.
                </li>
                <li>Requesting a free pickup.</li>
              </ul>
              <p className="my-2">
                If your package uses stamps and is more than one-half inch thick
                or weighs more than 10 oz, you must take it to a Post Office
                counter and give it to the Retail Associate at the counter.
              </p>
              <p className="my-2">
                If you printed the postage using Click-N-Ship or at a Hault Express Delivery
                kiosk, you can use any method to drop off your packages.
              </p>
              <p className="my-2">
                <b>NOTE:</b> If your stamped package is thicker than one-half
                inch or heavier than 10 oz—if you put it in your mailbox for
                pickup, the carrier will leave it. If you drop it in a blue
                collection box or Post Office lobby mail receptacle, it will be
                returned to you.
              </p>
              <h4 className=" font-bold my-5"> Schedule a Package Pickup</h4>
              When you&apos;re ready to send your package, Hault Express Delivery will come to
              your address to pick it up! Save time—Schedule a Pickup online:
              <ul className="list-disc mt-5 leading-relaxed my-1">
                <li>
                  Pick up during regular mail delivery (free!): Hault Express Delivery will pick
                  up eligible packages for free.
                </li>
                <li>
                  Pickup On Demand® (premium paid service): For a fee, you can
                  select a 2-hour period for the Post Office to pick up your
                  packages.
                </li>
              </ul>
            </div>
            <div className="h-[20vh]">
              <Image
                src="/send-packages-drawer-graphics_step-6.jpg"
                alt="Send-step-1"
                width={350}
                height={150} // Specify the dimensions or use `layout="responsive"`
              />
              =
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
