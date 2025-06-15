'use client';

import { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import FESTIVALS from '../lib/festivals';

// Required to fix Leaflet marker icon path in Next.js
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  iconUrl: '/leaflet/marker-icon.png',
  shadowUrl: '/leaflet/marker-shadow.png',
});

function MapFly({ position }) {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.flyTo(position, 10);
    }
  }, [position]);
  return null;
}

export default function Map({ selectedFestival }) {

  return (
    <MapContainer
      center={[36.2048, 138.2529]} // Center of Japan
      zoom={7}
      scrollWheelZoom={true}
      className="w-full h-full"
      maxBounds={[[20.0, 122.0], [46.0, 154.0]]}
      maxBoundsViscosity={1.0}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {selectedFestival && (
        <>
          <MapFly position={selectedFestival.location} />
          <Marker position={selectedFestival.location}>
            <Popup>{selectedFestival.name} ({selectedFestival.city})</Popup>
          </Marker>
        </>
      )}
    </MapContainer>
  );
}

