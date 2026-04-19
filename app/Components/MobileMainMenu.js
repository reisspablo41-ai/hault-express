'use client';
import { IoIosArrowUp, IoMdClose } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import Image from 'next/image';
import Link from 'next/link';
import { CiBoxes, CiCalculator1 } from 'react-icons/ci';
import { PiMailboxBold } from 'react-icons/pi';
import { FaHome } from 'react-icons/fa';
import { BsBoxes } from 'react-icons/bs';
import { useState } from 'react';
import { TbHandStop } from 'react-icons/tb';
import { LiaStampSolid } from 'react-icons/lia';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
function MobileMainMenu({ isMobileMenu, setIsMobileMenu }) {
  const [activeMenuQuick, setActiveMenuQuick] = useState(false);
  const [activeMenuSend, setActiveMenuSend] = useState(false);
  const [activeMenuReceive, setActiveMenuReceive] = useState(false);
  const [activeMenuHelp, setActiveMenuHelp] = useState(false);
  function handleActiveMenu() {
    setActiveMenuQuick((activeMenuQuick) => !activeMenuQuick);
  }
  function handleActiveMenuSend() {
    setActiveMenuSend((setActiveMenuSend) => !setActiveMenuSend);
  }
  function handleActiveMenuReceive() {
    setActiveMenuReceive((activeMenuReceive) => !activeMenuReceive);
  }
  function handleActiveMenuHelp() {
    setActiveMenuHelp((activeMenuHelp) => !activeMenuHelp);
  }
  return (
    <motion.div
      className="h-[100vh] w-[100%] bg-gray-900 absolute top-0 left-0 z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            src="/hault-logo.png"
            width={100}
            height={70}
            sizes="(max-width: 600px) 100px, 200px"
            alt="Header-Logo"
            className="text-center "
            onClick={() => setIsMobileMenu(false)}
            unoptimized
          />
        </Link>
        <IoMdClose
          className="text-white text-3xl mr-5"
          onClick={() => setIsMobileMenu(false)}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <ul className="text-white">
          <motion.li
            className="border-b border-white"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <div
              className="flex justify-between items-center p-5"
              onClick={() => handleActiveMenu()}
            >
              <p>Quick Tools</p>
              {!activeMenuQuick ? (
                <IoIosArrowDown className="text-4xl" />
              ) : (
                <IoIosArrowUp className="text-4xl" />
              )}
            </div>
            {activeMenuQuick && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="transition-all opacity-100 duration-500"
              >
                <ul className=" items-center px-10">
                  <Link href="/Track">
                    <motion.li
                      className="flex items-center pb-5"
                      onClick={() => setIsMobileMenu(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <BsBoxes className="text-2xl mr-5" />
                      Track Package
                    </motion.li>
                  </Link>
                  <Link href="/dashboard/informed-delivery">
                    <motion.li
                      className="flex items-center pb-5"
                      onClick={() => setIsMobileMenu(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <PiMailboxBold className="text-2xl mr-5" />
                      Informed Delivery
                    </motion.li>
                  </Link>
                  <motion.li
                    className="flex items-center pb-5"
                    onClick={() => setIsMobileMenu(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <LiaStampSolid className="text-2xl mr-5" />
                    Buy Stamps
                  </motion.li>
                  <Link href="/schedule-a-pickup">
                    <motion.li
                      className="flex items-center pb-5"
                      onClick={() => setIsMobileMenu(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CiBoxes className="text-2xl mr-5" />
                      Schedule A Pickup
                    </motion.li>
                  </Link>
                  <Link href="/dashboard/informed-delivery">
                    <motion.li
                      className="flex items-center pb-5"
                      onClick={() => setIsMobileMenu(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaHome className="text-2xl mr-5" />
                      Change My Address
                    </motion.li>
                  </Link>
                  <Link href="/">
                    <motion.li
                      className="flex items-center pb-5"
                      onClick={() => setIsMobileMenu(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CiCalculator1 className="text-2xl mr-5" />
                      Calculate A Price
                    </motion.li>
                  </Link>
                </ul>
              </motion.div>
            )}
          </motion.li>
          <motion.li
            className="border-b border-white"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <div
              className="flex justify-between items-center p-5"
              onClick={() => handleActiveMenuSend()}
            >
              <p>Send</p>
              {!activeMenuSend ? (
                <IoIosArrowDown className="text-4xl" />
              ) : (
                <IoIosArrowUp className="text-4xl" />
              )}
            </div>
            {activeMenuSend ? (
              <div className="transition-all opacity-100 duration-500">
                <ul className=" items-center px-10">
                  <Link href="/Track">
                    <motion.li
                      className="flex items-center pb-5"
                      onClick={() => setIsMobileMenu(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {' '}
                      <BsBoxes className="text-2xl mr-5" />
                      Track Package
                    </motion.li>
                  </Link>
                  <Link href="/schedule-a-pickup">
                    <motion.li
                      className="flex items-center pb-5"
                      onClick={() => setIsMobileMenu(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {' '}
                      <CiBoxes className="text-2xl mr-5" />
                      Schedule A Pickup
                    </motion.li>
                  </Link>
                  <Link href="/ship/sending-mail">
                    <motion.li
                      className="flex items-center pb-5"
                      onClick={() => setIsMobileMenu(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {' '}
                      Sending Mail
                    </motion.li>
                  </Link>
                  <Link href="/ship/sending-package">
                    <motion.li
                      className="flex items-center pb-5"
                      onClick={() => setIsMobileMenu(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {' '}
                      Sending Packages
                    </motion.li>
                  </Link>
                  <motion.li
                    className="flex items-center pb-5"
                    onClick={() => setIsMobileMenu(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {' '}
                    Shipping Restrictions
                  </motion.li>
                  <Link href="/buisness/postage-prices">
                    <motion.li
                      className="flex items-center pb-5"
                      onClick={() => setIsMobileMenu(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {' '}
                      Postage Prices
                    </motion.li>
                  </Link>
                  <motion.li
                    className="flex items-center pb-5"
                    onClick={() => setIsMobileMenu(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {' '}
                    Filing A Claim
                  </motion.li>
                  <motion.li
                    className="flex items-center pb-5"
                    onClick={() => setIsMobileMenu(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {' '}
                    Requesting a Refund
                  </motion.li>
                </ul>
              </div>
            ) : (
              ''
            )}
          </motion.li>
          <motion.li
            className="border-b border-white"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <div
              className="flex justify-between items-center p-5"
              onClick={() => handleActiveMenuReceive()}
            >
              <p>Receive</p>
              {!activeMenuReceive ? (
                <IoIosArrowDown className="text-4xl" />
              ) : (
                <IoIosArrowUp className="text-4xl" />
              )}
            </div>
            {activeMenuReceive ? (
              <div className="transition-all opacity-100 duration-500">
                <ul className=" items-center px-10">
                  <Link href="/Track">
                    <motion.li
                      className="flex items-center pb-5"
                      onClick={() => setIsMobileMenu(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {' '}
                      <BsBoxes className="text-2xl mr-5" />
                      Track Package
                    </motion.li>
                  </Link>
                  <Link href="/schedule-a-pickup">
                    <motion.li
                      className="flex items-center pb-5"
                      onClick={() => setIsMobileMenu(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {' '}
                      <CiBoxes className="text-2xl mr-5" />
                      Schedule A Pickup
                    </motion.li>
                  </Link>
                  <Link href="/dashboard/informed-delivery">
                    <motion.li
                      className="flex items-center pb-5"
                      onClick={() => setIsMobileMenu(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {' '}
                      <TbHandStop className="text-2xl mr-5" />
                      Hold Mail
                    </motion.li>
                  </Link>
                  <Link href="/dashboard/informed-delivery">
                    <motion.li
                      className="flex items-center pb-5"
                      onClick={() => setIsMobileMenu(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {' '}
                      <FaHome className="text-2xl mr-5" />
                      Change My Address
                    </motion.li>
                  </Link>
                  <li className="flex items-center pb-5"> Managing Mail</li>
                  <Link href="/receive/mail-for-deceased">
                    <motion.li
                      className="flex items-center pb-5"
                      onClick={() => setIsMobileMenu(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {' '}
                      Mail for Deceased
                    </motion.li>
                  </Link>
                  <Link href="/dashboard/informed-delivery">
                    <motion.li
                      className="flex items-center pb-5"
                      onClick={() => setIsMobileMenu(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {' '}
                      Redirecting a Package
                    </motion.li>
                  </Link>
                </ul>
              </div>
            ) : (
              ''
            )}
          </motion.li>
          <motion.li
            className="border-b border-white"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <div
              className="flex justify-between items-center p-5"
              onClick={() => handleActiveMenuHelp()}
            >
              <p>Help</p>
              {!activeMenuHelp ? (
                <IoIosArrowDown className="text-4xl" />
              ) : (
                <IoIosArrowUp className="text-4xl" />
              )}
            </div>
            {activeMenuHelp ? (
              <div className="transition-all opacity-100 duration-500">
                <ul className=" items-center px-10">
                  <Link href="/Faqs">
                    <motion.li
                      className="flex items-center pb-5"
                      onClick={() => setIsMobileMenu(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {' '}
                      Faqs
                    </motion.li>
                  </Link>
                  <Link href="/ContactUs/RequestRefund">
                    <motion.li
                      className="flex items-center pb-5"
                      onClick={() => setIsMobileMenu(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {' '}
                      Requesting a Refund
                    </motion.li>
                  </Link>
                  <Link href="ContactUs/FileClaim">
                    <motion.li
                      className="flex items-center pb-5"
                      onClick={() => setIsMobileMenu(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {' '}
                      Filing A Claim
                    </motion.li>
                  </Link>
                </ul>
              </div>
            ) : (
              ''
            )}
          </motion.li>
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default MobileMainMenu;
