'use client';
import { BsFillBoxSeamFill } from 'react-icons/bs';
import { PiMailboxBold } from 'react-icons/pi';
import { LiaStampSolid } from 'react-icons/lia';
import { CiBoxes } from 'react-icons/ci';
import { FaHome } from 'react-icons/fa';
import { CiCalculator1 } from 'react-icons/ci';
import Link from 'next/link';

function QuickToolsMenu() {
  return (
    <div className="w-[60%] bg-gray-100 p-7 absolute left-10">
      <ul>
        <div className="grid grid-cols-3">
          <Link href="/Track">
            <li className="flex flex-col justify-center items-center text-primary text-sm hover:bg-gray-200 py-10 cursor-pointer">
              {' '}
              <BsFillBoxSeamFill className="text-4xl " />
              Track Package
            </li>
          </Link>
          <Link href="/dashboard/informed-delivery">
            <li className="flex flex-col justify-center items-center text-primary text-sm hover:bg-gray-200 py-10 cursor-pointer">
              {' '}
              <PiMailboxBold className="text-4xl " />
              Informed Delivery
            </li>
          </Link>
          <Link href="/citizen-store/buy-stamps">
            <li className="flex flex-col justify-center items-center text-primary text-sm hover:bg-gray-200 py-10 cursor-pointer">
              {' '}
              <LiaStampSolid className="text-4xl " />
              Buy Stamps
            </li>
          </Link>
        </div>
        <div className="grid grid-cols-3 ">
          <Link href="/schedule-a-pickup">
            <li className="flex flex-col justify-center items-center text-primary text-sm hover:bg-gray-200 py-10 cursor-pointer">
              {' '}
              <CiBoxes className="text-4xl " />
              Schedule A Pickup
            </li>
          </Link>
          <Link href="/dashboard/informed-delivery">
            <li className="flex flex-col justify-center items-center text-primary text-sm hover:bg-gray-200 py-10 cursor-pointer">
              {' '}
              <FaHome className="text-4xl " />
              Change My Address
            </li>
          </Link>
          <Link href="/">
            <li className="flex flex-col justify-center items-center text-primary text-sm hover:bg-gray-200 py-10 cursor-pointer">
              {' '}
              <CiCalculator1 className="text-4xl " />
              Calculate A Price
            </li>
          </Link>
        </div>
      </ul>
    </div>
  );
}

export default QuickToolsMenu;
