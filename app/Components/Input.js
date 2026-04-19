'use client';
import MainNav from './MainNav';
import Link from 'next/link';
import { CiBoxes } from 'react-icons/ci';
import { IoIosPin } from 'react-icons/io';
import { CiCalculator1 } from 'react-icons/ci';
import TrackingForm from './TrackingForm';
import RatesCalculator from './RatesCalculator';

import HomeContext from '../Context/HomeContext';
import { useContext } from 'react';

function Input() {
  const { active, setActive } = useContext(HomeContext);
  function handleActiveButton(activeButton) {
    setActive(activeButton);
    console.log(active);
  }
  return (
    <div className="flex flex-col w-full">
      <div className="flex mb-4 w-full mx-auto mt-2 justify-center gap-2">
        <MainNav
          onClick={() => handleActiveButton(1)}
          className={`${
            active === 1 ? ' border-b-2  border-secondary' : ' '
          } transition-all duration-100 ease-in-out `}
        >
          <CiCalculator1 className="text-lg" />
          <span className=" text-sm md:text-base">Transit Times</span>
        </MainNav>
        <MainNav
          onClick={() => handleActiveButton(2)}
          className={`${
            active === 2 ? ' border-b-2  border-secondary' : ' '
          } transition-all duration-100 ease-in-out  `}
        >
          <IoIosPin className="text-lg" />
          <span className=" text-sm md:text-base">Track</span>
        </MainNav>
        <MainNav>
          <CiBoxes className="text-lg" />
          <Link href="ship/sending-package ">
            <span className="text-sm md:text-base cursor-pointer">Ship</span>
          </Link>
        </MainNav>
      </div>
      {active === 2 ? <TrackingForm className="mt-2" /> : <RatesCalculator />}
    </div>
  );
}

export default Input;
