'use client';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import { useState } from 'react';

function PrivacyAccord({ data }) {
  const [activeItem, setActiveItem] = useState(0);
  function handleActiveItem(id) {
    setActiveItem(activeItem === id ? null : id);
  }
  return (
    <div className="bg-gray-100 py-20 mb-10">
      <div className="md:w-[70%] xs:w-[90%] mx-auto">
        <div className="p-4">
          <ul className="list-none space-y-2">
            {data.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer rounded-md bg-white ${
                  activeItem === item.id ? ' ' : 'shadow'
                }`}
                onClick={() => handleActiveItem(item.id)}
              >
                <div className="flex justify-between items-center border p-4">
                  <span className="font-bold border-gray-500">
                    {item.title}
                  </span>
                  <span>
                    {activeItem === item.id ? (
                      <IoIosArrowDown />
                    ) : (
                      <IoIosArrowUp />
                    )}
                  </span>
                </div>
                {activeItem === item.id && (
                  <>
                    <p className="my-2 text-sm font-bold px-5 py-3">
                      {item.heading1}
                    </p>
                    <p className=" text-sm px-5">{item.description}</p>
                    <h3 className="font-bold px-5 py-3">{item.title2}</h3>
                    <p className=" text-sm px-5 pb-5">{item.description2}</p>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PrivacyAccord;
