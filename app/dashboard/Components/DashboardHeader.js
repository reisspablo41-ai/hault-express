import Link from 'next/link';
function DashboardHeader() {
  return (
    <div className="flex justify-between mt-[13vh] py-[1.5%] shadow px-[5%] items-center">
      <Link href="/dashboard" className="cursor-pointer">
        <div>
          <h2 className="text-1xl"> Hault Express Delivery DashBoard</h2>
        </div>
      </Link>

      <div className="md:text-base xs:text-sm">
        {' '}
        <ul className="flex text-blue-500 cursor-pointer">
          <Link href="/Track">
            <li className="md:px-5 xs:px-2 hover:text-blue-800 text-center">
              Track
            </li>
          </Link>
          <Link href="/dashboard/informed-delivery">
            <li className="md:px-5 xs:px-2 hover:text-blue-800 text-center">
              Informed Delivery
            </li>
          </Link>
          <Link href="/dashboard/refunds">
            <li className="md:px-5 xs:px-2 hover:text-blue-800 text-center">
              Refunds
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default DashboardHeader;
