import ButtonBig from '@/app/Components/ButtonBig';
import EveryForm from '@/app/Components/EveryForm';
import Image from 'next/image';
function page() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold">
            Every Door <br />
            Direct Mail® Service
          </h2>
          <p>
            Sending postcards or flyers? Take out the hassle of mailing lists
            and addressing. Just select the mail routes you want to target and
            let Hault Express Delivery hand-deliver your mail to every door along the way.
          </p>
        </div>
        <div className="relative h-[40vh]">
          <Image
            src="/informedDelivery.jpg"
            alt="Informed Delivery"
            layout="fill"
            objectFit="cover"
            style={{ clipPath: 'polygon(5% 0, 0 100%, 95% 100%, 100% 0)' }}
          />
        </div>
      </div>
      <div className="mt-[5%] bg-white py-10">
        <EveryForm />
      </div>
    </div>
  );
}

export default page;
