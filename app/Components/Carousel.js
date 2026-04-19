'use client';
import { useState } from 'react';
import Image from 'next/image';
import { GrLinkNext } from 'react-icons/gr';
import { GrLinkPrevious } from 'react-icons/gr';
import ButtonBig from './ButtonBig';
import Link from 'next/link';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const updateIndex = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="relative md:w-[60%] xs:w-[95%] mx-auto overflow-hidden mt-20">
      {/* Carousel Items */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full  flex flex-col items-center justify-center text-xl font-bold"
          >
            <Image
              alt={item.name}
              height="250"
              width="500"
              src={item.img}
            ></Image>
            <h3 className="md:text-4xl xs:text-3xl mt-5 mb-5 text-center">
              {item.name}
            </h3>
            <p className="text-gray-700 text-center mb-5 text-base w-[60%]">
              {item.description}
            </p>
            <Link href="/citizen-store/buy-stamps  ">
              <ButtonBig className="px-10 py-3 bg-primary rounded-md flex items-center text-base ">
                {item.button.button}
              </ButtonBig>
            </Link>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <GrLinkPrevious
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2  text-primary p-2 rounded-full md:text-7xl xs:text-5xl cursor-pointer hover:text-secondary "
      />
      <GrLinkNext
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2  text-primary p-2 rounded-full md:text-7xl  xs:text-5xl cursor-pointer hover:text-secondary"
      />
      {/* Dots */}
      <div className="flex justify-center my-20 space-x-2">
        {items.map((_, index) => (
          <span
            key={index}
            onClick={() => updateIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
