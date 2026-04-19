'use client';
import { useContext } from 'react';
import { FaBoxesStacked } from 'react-icons/fa6';
import { MdOutlinePets } from 'react-icons/md';
import TimerContext from '@/app/Context/TimerContext';

export default function TimerStatusBar({ goodWeight, percentage }) {
  return (
    <div className="w-[100%] max-w-lg mx-auto mt-10">
      {/* Status Bar Container */}
      <div className="w-full bg-gray-200 rounded-lg h-2 relative">
        {/* Progress Fill */}
        <div
          className="bg-blue-500 h-2 rounded-lg"
          style={{ width: `${percentage}%` }} // ✅ Controlled by TimerContext
        ></div>

        {/* Moving Icon */}
        {goodWeight ? (
          <FaBoxesStacked
            className="absolute top-1 transform -translate-y-1/2 bg-blue-600 rounded-full text-4xl p-2"
            style={{
              left: `${percentage - 2}%`, // ✅ Moves based on context percentage
              transition: 'left 0.1s linear',
            }}
            size={30}
          />
        ) : (
          <MdOutlinePets
            className="absolute top-1 transform -translate-y-1/2 bg-blue-600 rounded-full text-4xl p-2"
            style={{
              left: `${percentage - 2}%`,
              transition: 'left 0.1s linear',
            }}
            size={30}
          />
        )}
      </div>

      {/* Percentage Display */}
      <p className="mt-2 text-center text-sm font-medium text-gray-700">
        {percentage}% Complete
      </p>
    </div>
  );
}
