'use client';

import { MapContainer, TileLayer } from 'react-leaflet';

export default function Map() {
  return (
    <MapContainer
      center={[36.2048, 138.2529]} // Center of Japan
      zoom={7}
      scrollWheelZoom={true}
      className="w-full h-full"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}
