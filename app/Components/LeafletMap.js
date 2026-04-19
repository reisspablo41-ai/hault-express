'use client';

import React, { useContext, useEffect, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  Tooltip,
} from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-routing-machine';
import TimerContext from '../Context/TimerContext';

function Routing({ olat, olng, dlat, dlng, percentage, onThirdMarkerUpdate }) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const router = L.Routing.control({
      waypoints: [L.latLng(olat, olng), L.latLng(dlat, dlng)],
      routeWhileDragging: false,
      createMarker: () => null, // No markers
      addWaypoints: false,
      show: false, // 🚀 Hide text directions
      fitSelectedRoutes: true,
      lineOptions: {
        styles: [{ color: 'red', weight: 5 }], // Red, thick route
      },
      router: L.Routing.osrmv1({
        serviceUrl: 'https://router.project-osrm.org/route/v1',
      }),
    }).addTo(map);

    router.on('routesfound', (e) => {
      const route = e.routes[0];
      const coordinates = route.coordinates;

      if (coordinates.length > 1) {
        const index = Math.floor(percentage * (coordinates.length - 1));
        const { lat, lng } = coordinates[index];

        onThirdMarkerUpdate([lat, lng]); // Send location to parent component
      }
    });

    setTimeout(() => {
      document
        .querySelectorAll('.leaflet-routing-container')
        .forEach((el) => el.remove());
    }, 100);

    return () => {
      map.removeControl(router);
    };
  }, [map, olat, olng, dlat, dlng, percentage, onThirdMarkerUpdate]);

  return null;
}

function LeafletMap({ olat, olng, dlat, dlng, percentage, shipmentId }) {
  percentage = percentage / 100;
  const { presentLocation, setPresentLocation, address, setActiveAddress } =
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
          dlat={dlat}
          dlng={dlng}
          percentage={percentage}
          onThirdMarkerUpdate={setThirdMarker}
        />
        <Marker position={[olat, olng]} icon={customIcon}>
          {' '}
          <Tooltip
            permanent
            direction="top"
            offset={[0, -40]} // Moves tooltip higher above the marker
            className="custom-tooltip"
          >
            Origin
          </Tooltip>
        </Marker>
        {thirdMarker && <Marker position={thirdMarker} icon={customIcon} />}
        <Marker position={[dlat, dlng]} icon={customIcon}>
          <Tooltip
            permanent
            direction="top"
            offset={[0, -40]} // Moves tooltip higher above the marker
            className="custom-tooltip"
          >
            Destination
          </Tooltip>
        </Marker>
      </MapContainer>

      {/* Button to toggle map view */}
    </>
  );
}

export default LeafletMap;
