'use client';

import { createContext, useState, useEffect } from 'react';
import { getAddressFromCoordinates } from '../Components/FetchCoords';
import { updateShipmentLocation } from '../api/supabaseapi';

const TimerContext = createContext();

export function TimerProvider({ children }) {
  const [presentLocation, setPresentLocation] = useState('');
  const [address, setAddress] = useState('');
  const [activeShipment, setActiveAddress] = useState();

  useEffect(() => {
    if (!presentLocation) return;
    async function fetchAddress() {
      const [lat, lng] = presentLocation;
      const location = await getAddressFromCoordinates(lat, lng);
      if (location) {
        setAddress(location);
        await updateShipmentLocation(activeShipment, location);
      }
    }
    fetchAddress();
  }, [presentLocation, activeShipment]);
  return (
    <TimerContext.Provider
      value={{ presentLocation, setPresentLocation, address, setActiveAddress }}
    >
      {children}
    </TimerContext.Provider>
  );
}

export default TimerContext;
