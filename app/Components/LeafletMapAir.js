'use client';

import React, { useContext, useEffect, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
} from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import TimerContext from '../Context/TimerContext';

function Routing({
  olat,
  olng,
  ilat1,
  ilng1,
  ilat2,
  ilng2,
  dlat,
  dlng,
  percentage,
  onThirdMarkerUpdate,
}) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    // Dynamically build waypoints based on provided props
    const points = [[olat, olng]];
    if (ilat1 != null && ilng1 != null) points.push([ilat1, ilng1]); // First Stop
    if (ilat2 != null && ilng2 != null) points.push([ilat2, ilng2]); // Second Stop
    points.push([dlat, dlng]); // Destination

    // Create the polyline between the points
    const polyline = L.polyline(points, { color: 'red', weight: 5 }).addTo(map);

    // Determine which segment the 5th marker is on
    const segment = Math.floor(percentage * (points.length - 1)); // Divide based on number of segments

    // Set thirdMarker to the last fully passed point
    const thirdMarkerCoords = points[Math.max(0, segment)];
    onThirdMarkerUpdate(thirdMarkerCoords);

    return () => {
      map.removeLayer(polyline);
    };
  }, [
    map,
    olat,
    olng,
    ilat1,
    ilng1,
    ilat2,
    ilng2,
    dlat,
    dlng,
    percentage,
    onThirdMarkerUpdate,
  ]);

  return null;
}

function LeafletMap({
  olat,
  olng,
  ilat1,
  ilng1,
  ilat2,
  ilng2,
  dlat,
  dlng,
  percentage,
  shipmentId,
}) {
  percentage = percentage / 100;
  const { setPresentLocation, setActiveAddress } =
    useContext(TimerContext);
  const [thirdMarker, setThirdMarker] = useState(null);
  const [view, setView] = useState('osm'); // 'osm' for OpenStreetMap, 'satellite' for Satellite

  const customIcon = new Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    shadowSize: [41, 41],
  });

  useEffect(() => {
    if (thirdMarker) {
      setPresentLocation(thirdMarker);
      setActiveAddress(shipmentId);
    }
  }, [thirdMarker, setPresentLocation, setActiveAddress, shipmentId]);

  // Toggle between views
  const toggleMapView = () => {
    setView(view === 'osm' ? 'satellite' : 'osm');
  };

  return (
    <>
      <button
        onClick={toggleMapView}
        className="p-2 bg-blue-500 text-white rounded-md text-xs z-20"
      >
        Switch Map to {view === 'osm' ? 'Satellite' : 'OpenStreetMap'} View
      </button>
      <MapContainer
        center={[(olat + dlat) / 2, (olng + dlng) / 2]}
        zoom={8}
        style={{ height: '100vh', width: '100%' }}
        className="z-0"
      >
        {/* OpenStreetMap TileLayer */}
        {view === 'osm' && (
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
        )}

        {/* Esri Satellite TileLayer */}
        {view === 'satellite' && (
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            attribution="Tiles © Esri — Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
          />
        )}

        <Routing
          olat={olat}
          olng={olng}
          ilat1={ilat1}
          ilng1={ilng1}
          ilat2={ilat2}
          ilng2={ilng2}
          dlat={dlat}
          dlng={dlng}
          percentage={percentage}
          onThirdMarkerUpdate={setThirdMarker}
        />
        <Marker position={[olat, olng]} icon={customIcon} />
        {thirdMarker && <Marker position={thirdMarker} icon={customIcon} />}
        {ilat1 != null && ilng1 != null && (
          <Marker position={[ilat1, ilng1]} icon={customIcon} />
        )}
        {ilat2 != null && ilng2 != null && (
          <Marker position={[ilat2, ilng2]} icon={customIcon} />
        )}
        <Marker position={[dlat, dlng]} icon={customIcon} />
      </MapContainer>

      {/* Button to toggle map view */}
    </>
  );
}

export default LeafletMap;
