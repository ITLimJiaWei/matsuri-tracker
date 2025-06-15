'use client';

import { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from 'react-leaflet';
// import FestivalModal from './FestivalModal';

import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x.src || markerIcon2x,
  iconUrl: markerIcon.src || markerIcon,
  shadowUrl: markerShadow.src || markerShadow,
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
          <MapFly key={selectedFestival.name} position={selectedFestival.location} />
          <Marker position={selectedFestival.location}>
            
          </Marker>
        </>
      )}
    </MapContainer>
  );
}

