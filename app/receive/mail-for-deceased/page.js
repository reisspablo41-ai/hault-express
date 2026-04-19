import ButtonBig from '@/app/Components/ButtonBig';
import Footer from '@/app/Components/Footer';
import Image from 'next/image';
function page() {
  return (
    <div className="mt-[6.5%]">
      <div className="grid grid-cols-2 bg-gray-100">
        <div className="w-[70%] mx-auto">
          <h1 className="text-3xl font-bold mt-10">
            Informed Delivery by Hault Express Delivery
          </h1>
          <h2 className="text-xl font-bold my-2">
            How to Stop or Forward Mail
          </h2>
          <p>
            After loved ones pass, you can stop mail from being sent to their
            addresses. Learn how to file a proper request at the Post Office™ to
            redirect their mail or remove them from advertising lists.
          </p>
        </div>
        <div className="relative h-[40vh]">
          <Image
            src="/hero-image-deceased.jpg"
            alt="Informed Delivery"
            layout="fill"
            objectFit="cover"
            style={{ clipPath: 'polygon(5% 0, 0 100%, 95% 100%, 100% 0)' }}
          />
        </div>
      </div>
      <div className="mt-[5%] w-[70%] mx-auto">
        <h2 className="text-2xl font-bold my-2">If You Shared an Address</h2>
        <p>
          If you shared a mailing address with someone who has died and continue
          to receive that mail, you have several options:
        </p>
        <ul className="list-disc pl-10">
          <li>You may open and manage the deceased&apos;s mail as needed.</li>
          <li>
            You may forward all of the deceased&apos;s mail to a different
            address.
          </li>
          <li>
            You may forward a single piece of mail, for example, to an appointed
            executor, without going to a Post Office™ location. To forward the
            single mailpiece:
          </li>
          <li>Remove a package you no longer wish to track</li>
        </ul>
      </div>
      <div className="mt-[5%]  bg-gray-100 py-10">
        <div className="w-[70%] mx-auto">
          <h2 className="text-2xl font-bold my-2">
            If You Have a Different Address
          </h2>
          <p>
            To forward the deceased&apos;s mail to yourself or to a different
            address, you must go to a Post Office location to submit a change of
            address request. You will need to:
          </p>
          <ul className="list-disc pl-10">
            <li>
              Provide documented proof that you are the appointed executor or
              administrator authorized to manage the deceased&apos;s mail.
              (Simply having their death certificate is not enough.)
            </li>
            <li>Complete a change of address request in person.</li>

            <li>Remove a package you no longer wish to track</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
