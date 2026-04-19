'use client';
import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

function RatesCalculator() {
  const [shippingFrom, setShippingFrom] = useState('');
  const [shippingTo, setShippingTo] = useState('');
  const [packageType, setPackageType] = useState('standard');
  const [weight, setWeight] = useState('');
  const [transitTime, setTransitTime] = useState(1);
  const [calculatedRate, setCalculatedRate] = useState(null);

  const rates = {
    standard: { 1: 7, 10: 20, 50: 30, 150: 100 },
    specialized: { 1: 9, 10: 25, 50: 40, 150: 130 },
    customized: { 1: 20, 10: 40, 50: 70, 150: 250 },
    crate: { small: 100, medium: 200, large: 300 },
    freight: { 500: 400, 1000: 700, 5000: 2000, 10000: 5000 },
  };

  const transitTimes = {
    citizen_cargoGround: 1,
    citizen_cargo2ndDay: 1.5,
    citizen_cargo3Day: 1.2,
    citizen_cargoNextDay: 2,
    citizen_cargoWorldWide: 1.4,
    citizen_cargoWorldwideExpress: 3,
  };

  const calculateRate = () => {
    let basePrice = 0;
    if (packageType === 'crate') {
      basePrice = rates.crate[weight] || 0;
    } else if (packageType === 'freight') {
      basePrice = rates.freight[weight] || 0;
    } else {
      const weightClass = Object.keys(rates[packageType])
        .map(Number)
        .sort((a, b) => a - b)
        .find((w) => weight <= w);
      basePrice = weightClass ? rates[packageType][weightClass] : 0;
    }
    setCalculatedRate(basePrice * transitTime);
  };

  const fieldClass =
    'w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white placeholder-white/40 focus:outline-none focus:border-secondary/60 focus:bg-white/15 transition text-sm';

  const labelClass = 'block text-white/60 text-xs font-semibold uppercase tracking-wider mb-1.5';

  return (
    <form className="w-full mt-3" onSubmit={(e) => e.preventDefault()}>
      {/* From / To row */}
      <div className="flex gap-3 mb-3">
        <div className="flex-1">
          <label className={labelClass}>From</label>
          <input
            placeholder="City or ZIP"
            type="text"
            value={shippingFrom}
            onChange={(e) => setShippingFrom(e.target.value)}
            className={fieldClass}
          />
        </div>
        <div className="flex-1">
          <label className={labelClass}>To</label>
          <input
            placeholder="City or ZIP"
            type="text"
            value={shippingTo}
            onChange={(e) => setShippingTo(e.target.value)}
            className={fieldClass}
          />
        </div>
      </div>

      {/* Package type + Weight row */}
      <div className="flex gap-3 mb-3">
        <div className="flex-1">
          <label className={labelClass}>Package Type</label>
          <select
            value={packageType}
            onChange={(e) => setPackageType(e.target.value)}
            className={fieldClass}
          >
            <option value="standard" className="bg-primary text-white">Standard Packages</option>
            <option value="specialized" className="bg-primary text-white">Specialized Options</option>
            <option value="freight" className="bg-primary text-white">Freight Packaging</option>
            <option value="customized" className="bg-primary text-white">Customized Packaging</option>
            <option value="crate" className="bg-primary text-white">Crate</option>
          </select>
        </div>
        <div className="flex-1">
          <label className={labelClass}>Weight (lbs)</label>
          <input
            placeholder="Enter weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            className={fieldClass}
          />
        </div>
      </div>

      {/* Transit time */}
      <div className="mb-4">
        <label className={labelClass}>Transit Time</label>
        <select
          value={transitTime}
          onChange={(e) => setTransitTime(Number(e.target.value))}
          className={fieldClass}
        >
          <option value={transitTimes.citizen_cargoGround} className="bg-primary text-white">Hault Express Delivery Ground (1–5 business days)</option>
          <option value={transitTimes.citizen_cargo2ndDay} className="bg-primary text-white">Hault Express Delivery 2nd Day Air (2 business days)</option>
          <option value={transitTimes.citizen_cargo3Day} className="bg-primary text-white">Hault Express Delivery 3 Day Select (3 business days)</option>
          <option value={transitTimes.citizen_cargoNextDay} className="bg-primary text-white">Hault Express Delivery Next Day Air (Next business day)</option>
          <option value={transitTimes.citizen_cargoWorldWide} className="bg-primary text-white">Hault Express Delivery Worldwide Expedited (2–5 days)</option>
          <option value={transitTimes.citizen_cargoWorldwideExpress} className="bg-primary text-white">Hault Express Delivery Worldwide Express (1–3 days)</option>
        </select>
      </div>

      {/* CTA row */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={calculateRate}
          className="flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-primary-dark font-bold px-6 py-2.5 rounded-lg text-sm whitespace-nowrap transition-all duration-200 hover:scale-105"
        >
          Get Quote <IoIosArrowForward />
        </button>

        {calculatedRate !== null && (
          <p className="text-white/80 text-sm font-semibold">
            Est. Rate: <span className="text-secondary">${calculatedRate.toFixed(2)}</span>
          </p>
        )}
      </div>
    </form>
  );
}

export default RatesCalculator;
