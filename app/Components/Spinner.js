import React from 'react';

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white bg-opacity-80">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
