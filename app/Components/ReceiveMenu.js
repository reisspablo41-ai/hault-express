import { BsFillBoxSeamFill } from 'react-icons/bs';
import { CiBoxes } from 'react-icons/ci';
import { TbHandStop } from 'react-icons/tb';
import { FaHome } from 'react-icons/fa';
import Link from 'next/link';
import { useUserContext } from '../Context/UserContext';

function ReceiveMenu() {
  const { setActiveMenu, activeMenu } = useUserContext();
  return (
    <div
      className="w-[60%] bg-gray-100 p-7 absolute left-[20%]"
      onMouseOver={() => setActiveMenu(2)}
    >
      <ul>
        <div className="grid grid-cols-2">
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
        <div className="grid grid-cols-2">
          <li className="flex flex-col justify-center  text-primary text-sm  cursor-pointer">
            {' '}
            <Link href="/Track">
              <div className="flex px-1 py-3 hover:bg-gray-200 items-center font-bold">
                <BsFillBoxSeamFill className="text-3xl mr-3" />
                Track Package
              </div>
            </Link>
            <Link href="/schedule-a-pickup">
              <div className="flex px-1 py-3 hover:bg-gray-200 items-center font-bold">
                <CiBoxes className="text-3xl mr-3" />
                Schedule A Pickup
              </div>
            </Link>
            <Link href="/dashboard/informed-delivery">
              <div className="flex px-1 py-3 hover:bg-gray-200 items-center font-bold">
                <TbHandStop className="text-3xl mr-3" />
                Hold Mail
              </div>
            </Link>
            <Link href="/dashboard/informed-delivery">
              <div className="flex px-1 py-3 hover:bg-gray-200 items-center font-bold">
                <FaHome className="text-3xl mr-3" />
                Change of Address
              </div>
            </Link>
          </li>
          <li className="flex flex-col text-primary text-sm pt-2 cursor-pointer">
            <div className="font-bold pl-2 hover:bg-gray-200 p-2">
              Managing Mail
            </div>
            <Link href="/receive/mail-for-deceased">
              <div className="font-bold pl-2 hover:bg-gray-200 p-2">
                Mail for Deceased
              </div>
            </Link>

            <Link href="/dashboard/informed-delivery">
              <div className="font-bold pl-2 hover:bg-gray-200 p-2">
                Redirecting a Package
              </div>
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default ReceiveMenu;
