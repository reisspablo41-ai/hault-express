'use client';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useState } from 'react';

function FaqsSelector({ data }) {
  const [activeItem, setActiveItem] = useState(null);

  function handleActiveItem(id) {
    setActiveItem(activeItem === id ? null : id);
  }

  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-extrabold text-primary mb-2">More Questions?</h3>
        <p className="text-slate-500 text-sm">Expand the items below for more information.</p>
      </div>

      <div className="space-y-4">
        {data.map((item) => (
          <div
            key={item.id}
            className={`group rounded-3xl transition-all duration-300 border ${activeItem === item.id
                ? 'bg-white border-secondary shadow-lg scale-[1.01]'
                : 'bg-slate-50/50 border-slate-100 hover:border-slate-200'
              }`}
          >
            <button
              onClick={() => handleActiveItem(item.id)}
              className="w-full px-8 py-6 flex justify-between items-center text-left gap-4"
            >
              <span className={`font-bold transition-colors ${activeItem === item.id ? 'text-primary' : 'text-slate-600'
                }`}>
                {item.title}
              </span>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${activeItem === item.id
                  ? 'bg-secondary text-primary-dark rotate-180'
                  : 'bg-slate-200 text-slate-500 group-hover:bg-slate-300'
                }`}>
                <IoIosArrowDown className="text-lg" />
              </div>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeItem === item.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
              <div className="px-8 pb-8 pt-2">
                <div className="w-full h-px bg-slate-100 mb-6"></div>
                <p className="text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaqsSelector;
