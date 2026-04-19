import FileClaimForm from '@/app/Components/FileClaimForm';
import Footer from '@/app/Components/Footer';
import Image from 'next/image';
function Page() {
  return (
    <>
      <div className="grid grid-cols-2 mt-[6%] bg-gray-100">
        <div className="w-[80%] mx-auto py-[5vh]">
          <h3 className="text-3xl mt-10 font-bold mb-10">
            Mailing & Shipping Prices
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
            src="/postage-prices.jpg"
            alt="File Domestic Claim"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <div className="mb-28">
        <h3 className="text-2xl text-center my-10">
          Cost of First-Class™ Stamps
        </h3>
        <div className="grid grid-cols-3 w-[80%] mx-auto">
          <div>
            <h4 className="text-center font-bold text-xl mb-5">
              Letter Stamps
            </h4>
            <p className="text-center">
              Standard-sized, rectangular envelopes <br />
              From
              <span className="font-bold"> $0.73</span> <br />
              Square, Oversized, or Unusual Envelopes <br />
              From <span className="font-bold"> $1.19 </span>
            </p>
          </div>
          <div>
            <h4 className="text-center font-bold text-xl mb-5">
              Postcard Stamps
            </h4>
            <p className="text-center">
              Standard-sized, rectangular postcards <br />
              From
              <span className="font-bold"> $0.56</span> <br />
            </p>
          </div>
          <div>
            <h4 className="text-center font-bold text-xl mb-5">
              Global Forever® (International)
            </h4>
            <p className="text-center">
              Standard-sized, rectangular envelopes <br />
              From
              <span className="font-bold"> $1.65</span> <br />
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Page;
