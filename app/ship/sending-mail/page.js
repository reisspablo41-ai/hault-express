import Footer from '@/app/Components/Footer';
import Image from 'next/image';
function Page() {
  return (
    <div>
      <div className="grid grid-cols-2 mt-[6%] bg-gray-100">
        <div className="w-[80%] mx-auto py-[5vh]">
          <h3 className="md:text-3xl xs:text-xl mt-10 font-bold mb-10">
            How to Send a Letter or Postcard:
          </h3>
          <span className="leading-relaxed">
            Save with Online Shipping: With the enhanced Click-N-Ship® service,
            domestic shippers get lower Commercial Rates on many services.
            Businesses can get additional savings on select services by opting
            in to the Business Rate Card.
            <br />
          </span>
        </div>
        <div className="relative p-40 clip-path[polygon(0 0, 0 100%, 100% 0, 100% 100%)]">
          <Image
            src="/sending-mail.jpg"
            alt="File Domestic Claim"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <div>
        <div className=" md:w-[70%] xs:w-[95%] mx-auto mt-20">
          <h2 className="font-bold text-3xl pb-10 mb-10 border-b border-primary xs:ml-10 md:ml-0">
            Send Mail: Step-by-Step Instructions
          </h2>
          <div className="grid md:grid-cols-2 xs:ml-10 md:ml-0 xs:grid-cols-1 border-b border-primary pb-10 ">
            <div>
              {' '}
              <h3 className="font-bold text-xl">
                Step 1: Choose Envelope or Postcard
              </h3>
              <p className="mb-2">
                Envelopes are for sending flat, flexible things, like letters,
                cards, checks, forms, and other paper goods. For just 1 $0.73
                First-Class Mail® Forever® stamp, you can send 1 oz (about 4
                sheets of regular, 8-1/2&quot; x 11&quote; paper in a
                rectangular envelope) to anywhere in the U.S.!
              </p>
              <p>
                Envelopes must be rectangular and made of paper to qualify for
                letter prices. Your envelope can be a maximum of 11-1/2&quot;
                long x 6-1/8&quot; high. (A standard No. 10 envelope is
                9-1/2&quot; long x 4-1/8&quot; high.) You can fold what you put
                in your envelope, but it needs to stay flat—no more than
                1/4&quot; thick. <br /> If you want to send letter-sized papers
                without folding them, you can use a large envelope (called a
                &quot;flat&quot;); the postage for flats starts at $1.50. If
                your large envelope is nonrectangular, rigid (can&apos;t bend),
                or lumpy (not uniformly thick), you&apos;ll have to pay the
                package price.
                <br /> <b>TIP:</b> If your envelope can&apos;t fit through
                Hault Express Delivery mail processing machines, or is rigid, lumpy or has
                clasps, string, or buttons, it&apos;s &quot;nonmachinable&quot;
                and you&apos;ll have to pay $0.46 more to send it. (See
                additional postage in Step 3.) You&apos;ll also have to pay more
                if your envelopes are square or vertical (taller than they are
                wide).
                <br /> <b>Postcards </b>
                are for short messages that you don&apos;t need to put in an
                envelope. Save money using a $0.56 postcard stamp to send a
                standard-sized postcard anywhere in the U.S. Standard postcards
                are usually made of paper, are between 5&quot; to 6&quot; long
                and 3-1/2&quot; to 4-1/4&quot; high, and are between 0.007&quot;
                and 0.016&quot; thick.
              </p>
            </div>
            <div className="h-[20vh]">
              <Image
                src="/send-step-1.jpg"
                alt="Send-step-1"
                width={350}
                height={150} // Specify the dimensions or use `layout="responsive"`
              />
              <Image
                src="/step-1-env.jpg"
                alt="Send-step-1"
                width={100}
                height={75} // Specify the dimensions or use `layout="responsive"`
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 xs:ml-10 md:ml-0 xs:grid-cols-1 border-b border-primary py-10 pb-20">
            <div>
              {' '}
              <h3 className="font-bold text-xl">Step 2: Address Your Mail</h3>
              <p className="mb-2">
                Envelopes: Write your address (the &quot;return&quot; or
                &quot;sender&quot; address) in the top left corner. Write the
                delivery address (the &quot;recipient&quot; address) in the
                bottom center. Postcards: Postcards come in different formats,
                so write the delivery address in the space it gives you (on the
                same side you write your message and put the stamp).
              </p>
            </div>
            <div className="h-[20vh]">
              <Image
                src="/send-step-2.jpg"
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
                Step 3: Calculate Postage (& Add Insurance or Extra Services)
              </h3>
              <p className="mb-2">
                A First-Class Mail® Forever stamp costs $0.73 and goes in the
                upper right corner of the envelope. (You can also use any
                combination of stamps that adds up to $0.73.) If your letter is
                heavier or bigger, or if you want to add insurance or extra
                services like Certified Mail® service, you&apos;ll pay more. A
                standard postcard stamp costs $0.56. (Large or square postcards
                will cost more.) Put the postcard stamp in the space provided
                near the delivery address.
              </p>
            </div>
            <div className="h-[20vh]">
              <Image
                src="/send-step-3.jpg"
                alt="Send-step-1"
                width={350}
                height={150} // Specify the dimensions or use `layout="responsive"`
              />
              =
            </div>
          </div>
          <div className="grid md:grid-cols-2 xs:ml-10 md:ml-0 xs:grid-cols-1  py-10 pb-20">
            <div>
              {' '}
              <h3 className="font-bold text-xl">Step 4: Send Your Mail</h3>
              <p className="mb-2">
                Once your envelope or postcard has the correct addresses and
                postage, you can send it several ways, including putting it in
                your mailbox or dropping it in a blue collection box or at a
                Post Office™ location.
              </p>
            </div>
            <div className="h-[20vh]">
              <Image
                src="/send-step-4.jpg"
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
