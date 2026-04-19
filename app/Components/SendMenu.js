import { BsFillBoxSeamFill } from 'react-icons/bs';
import { CiBoxes } from 'react-icons/ci';
import Link from 'next/link';
function SendMenu() {
  return (
    <div className="w-[70%] bg-gray-100 p-7 absolute left-10">
      <ul>
        <div className="grid grid-cols-3">
          <li className="flex flex-col justify-center items-center ">
            <h4 className="font-bold border-b border-primary w-[90%] text-primary">
              Tools
            </h4>
          </li>
          <li className="flex flex-col justify-center items-center ">
            <h4 className="font-bold border-b border-primary w-[90%] text-primary">
              Learn About
            </h4>
          </li>
          <li className="flex flex-col justify-center items-center "></li>
        </div>
        <div className="grid grid-cols-3">
          <Link href="/Track">
            <li className="flex flex-col justify-center items-center text-primary text-sm hover:bg-gray-200 py-10 cursor-pointer">
              {' '}
              <BsFillBoxSeamFill className="text-4xl " />
              Track Package
            </li>
          </Link>

          <li className="flex flex-col justify-center text-primary text-sm  py-10 cursor-pointer">
            <div className="font-bold pl-2">Sending</div>
            <Link href="/ship/sending-mail">
              <div className="pl-5 hover:bg-gray-200">Sending Mail</div>
            </Link>
            <Link href="/ship/sending-package">
              <div className="pl-5 hover:bg-gray-200">Sending Package</div>
            </Link>
            <div className="pl-5 hover:bg-gray-200">Shipping Restrictions</div>
          </li>
          <li className="flex flex-col justify-center text-primary text-sm  py-10 cursor-pointer">
            <Link href="/ContactUs/FileClaim">
              <div className="font-bold pl-2 hover:bg-gray-200">
                Filing A Claim
              </div>
            </Link>
            <Link href="/ContactUs/RequestRefund">
              <div className="font-bold pl-2 hover:bg-gray-200">
                Requesting a Refund
              </div>
            </Link>
          </li>
        </div>
        <div className="grid grid-cols-3 ">
          <Link href="/schedule-a-pickup">
            <li className="flex flex-col justify-center items-center text-primary text-sm hover:bg-gray-200 py-10 cursor-pointer">
              {' '}
              <CiBoxes className="text-4xl " />
              Schedule A Pickup
            </li>
          </Link>
          <Link href="/buisness/postage-prices">
            <li className="flex flex-col justify-center text-primary text-sm  py-10 cursor-pointer">
              <div className="font-bold pl-2 hover:bg-gray-200">
                Postage Prices
              </div>
            </li>
          </Link>
        </div>
      </ul>
    </div>
  );
}

export default SendMenu;
