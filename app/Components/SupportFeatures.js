import { BiSupport } from 'react-icons/bi';
import { GrNext } from 'react-icons/gr';
import { FaCreditCard } from 'react-icons/fa';
import { HiChatBubbleBottomCenterText } from 'react-icons/hi2';

import ButtonBigTransparent from './ButtonBigTransparent';
function SupportFeatures() {
  return (
    <div className="mt-20 flex flex-col items-center">
      <h2 className="text-3xl">Support When You Need It</h2>
      <h3 className="text-center">
        Use the email below to access the help centre that
        best fits your need.
      </h3>
      <span className="border-b-4 border-secondary w-[10%] my-3 mt-5"></span>
      <div className="grid grid-cols-3 my-20 xs:flex xs:flex-col md:flex-row">
        <div className="w-[95%] mx-auto p-5">
          <BiSupport className="text-5xl my-5" />
          <h3 className="font-bold my-5">Customer Support</h3>
          <p className="my-5">
            Monday - Friday: 7 a.m. to 7 p.m.
            <br /> Saturday: 8 a.m. to 5 p.m.
          </p>

          <br />
          Or by email:
          <span className="underline text-blue-800">haultexpressdelivery@gmail.com</span>
        </div>
        <div className="w-[95%] mx-auto p-5">
          <FaCreditCard className="text-5xl my-5" />
          <h3 className="font-bold my-5">Billing Questions</h3>
          <p className="my-5">Monday - Friday: 9 a.m. to 12 p.m.</p>
          {/* <ButtonBigTransparent className="px-10 py-3  rounded-full flex items-center border-2 border-primary">
            +61 2 5550 1410 <GrNext />
          </ButtonBigTransparent> */}
          <br />
          Or by email:
          <span className="underline text-blue-800">haultexpressdelivery@gmail.com</span>
        </div>
        <div className="w-[95%] mx-auto p-5">
          <HiChatBubbleBottomCenterText className="text-5xl my-5" />
          <h3 className="font-bold my-5">Technical Support</h3>
          <p className="my-5">Monday - Friday: 8:30 am to 6 p.m.</p>
          {/* <ButtonBigTransparent className="px-10 py-3  rounded-full flex items-center border-2 border-primary">
            +61 2 5550 1410 <GrNext />
          </ButtonBigTransparent> */}
          <br />
          Or by email:
          <span className="underline text-blue-800">haultexpressdelivery@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default SupportFeatures;
