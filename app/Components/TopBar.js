import { CiTimer } from 'react-icons/ci';
import { FaPhoneAlt } from 'react-icons/fa';
import { SiMinutemailer } from 'react-icons/si';
function TopBar() {
  return (
    <div className="bg-primary py-1 flex pl-10">
      <div className="flex items-center mr-5">
        <div className="border border-solid border-gray-500 rounded-full p-1 mr-2">
          <CiTimer className="text-white " />
        </div>

        <p className="text-white text-sm">Mon - Sat</p>
      </div>

      <div className="flex items-center mr-5">
        <div className="border border-solid border-gray-500 rounded-full p-1 mr-2">
          <SiMinutemailer className="text-white " />
        </div>
        <p className="text-white text-sm">haultexpressdelivery@gmail.com</p>
      </div>
    </div>
  );
}

export default TopBar;
