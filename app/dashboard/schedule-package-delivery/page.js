import ButtonBig from '@/app/Components/ButtonBig';
import EveryForm from '@/app/Components/EveryForm';
import ScheduleDeliveryForm from '@/app/Components/ScheduleDeliveryForm';
import Image from 'next/image';
function page() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold mb-5">
            Schedule a Free <br />
            Package Pickup
          </h2>
          <p>
            Easily send packages from home. Schedule a pickup online, place your
            Hault Express Delivery packages on your doorstep, and we&apos;ll come pick them up
            for free during regular delivery.
          </p>
        </div>
        <div className="relative h-[40vh]">
          <Image
            src="/pickupSchedule.jpg"
            alt="Informed Delivery"
            layout="fill"
            objectFit="cover"
            style={{ clipPath: 'polygon(5% 0, 0 100%, 95% 100%, 100% 0)' }}
          />
        </div>
      </div>
      <div className="mt-[5%] bg-white py-10">
        <ScheduleDeliveryForm />
      </div>
    </div>
  );
}

export default page;
