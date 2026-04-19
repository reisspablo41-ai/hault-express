'use client';

import { useRef } from 'react';
import dynamic from 'next/dynamic';

const LeafletMap = dynamic(() => import('../LeafletMap'), { ssr: false });
const LeafletMapAir = dynamic(() => import('../LeafletMapAir'), { ssr: false });

export default function MapWrapper({
  status,
  duration,
  olat,
  olng,
  dlat,
  dlng,
  percentage,
  shipmentId,
  ilat1,
  ilng1,
  ilat2,
  ilng2,
  inter1,
  inter2,
  shipmentType,
}) {
  if (inter1 === null) {
    ilat1 = undefined;
    ilng1 = undefined;
  }
  if (inter2 === null) {
    ilat2 = undefined;
    ilng2 = undefined;
  }
  console.log(shipmentType);

  if (olat == null || olng == null || dlat == null || dlng == null) {
    return (
      <div className="w-full h-96 flex items-center justify-center bg-slate-50 text-slate-400">
        <p className="font-semibold text-sm">Live map is currently unavailable.</p>
      </div>
    );
  }

  return (
    <>
      {shipmentType === 1 ? (
        <LeafletMap
          status={status}
          duration={duration}
          olat={olat}
          olng={olng}
          dlat={dlat}
          dlng={dlng}
          percentage={percentage}
          shipmentId={shipmentId}
        />
      ) : (
        <LeafletMapAir
          status={status}
          duration={duration}
          olat={olat}
          olng={olng}
          dlat={dlat}
          dlng={dlng}
          ilat1={ilat1}
          ilng1={ilng1}
          ilat2={ilat2}
          ilng2={ilng2}
          percentage={percentage}
          shipmentId={shipmentId}
        />
      )}
    </>
  );
}
