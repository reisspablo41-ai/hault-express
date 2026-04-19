import Image from 'next/image';
function Services() {
  return (
    <div className="grid grid-cols-2 gap-4 mt-20 h-screen">
      <div className="  flex flex-col items-center pb-20">
        <Image
          src="/sustainanble-logistics.webp"
          alt="Sustainable Logistics"
          layout="intrinsic"
          width={160}
          height={80}
          className="align rounded-full"
        />
        <h2 className="text-center mt-5 text-xl">Sustainable logistics</h2>
        <p className="text-center mt-5">
          Greener freight logistics that helps your bottom line, the environment
          and community.
        </p>
      </div>
      <div className="  flex flex-col items-center pb-20">
        <Image
          src="/sustainanble-logistics.webp"
          alt="Sustainable Logistics"
          layout="intrinsic"
          width={160}
          height={80}
          className="align rounded-full"
        />
        <h2 className="text-center mt-5 text-xl">Sustainable logistics</h2>
        <p className="text-center mt-5">
          Greener freight logistics that helps your bottom line, the environment
          and community.
        </p>
      </div>
    </div>
  );
}

export default Services;
