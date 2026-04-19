import Image from 'next/image';
function Page() {
  return (
    <div>
      <h1 className="mt-[10%] ml-10 text-3xl">The Hault Express Delivery Store</h1>
      <div className="bg-gray-100 text-xl p-5 font-bold mt-5">Stamps</div>
      <div className="grid md:grid-cols-2 xs:grid-cols-1 mt-20 w-[80%] mx-auto bg-pink-100 p-10 rounded">
        <div>
          <h3 className="text-2xl font-bold mt-5">Sent With Love</h3>
          <p>
            Sending Joy is easy with this loveaable Stamps, always in forever
            and additional ounce options. Visit Any of our offices to buy a
            stamp, while we arer working on the best user experience to purchase
            stamps online.
          </p>
        </div>
        <div className="relative h-[30vh]">
          <Image
            src="/stampshead.jpg"
            alt="Stamps"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
