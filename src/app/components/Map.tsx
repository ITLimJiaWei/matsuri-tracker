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
import FestivalPopup from './FestivalPopup';

import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Debugging: Check if marker icons are loading
console.log('Marker icons:', {
  markerIcon2x: markerIcon2x.src,
  markerIcon: markerIcon.src,
  markerShadow: markerShadow.src
});

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x.src || markerIcon2x,
  iconUrl: markerIcon.src || markerIcon,
  shadowUrl: markerShadow.src || markerShadow,
});
function MapFly({ position, onFlyComplete }) {
  const map = useMap();
  const isProgrammaticMove = useRef(false);
  const prevPositionRef = useRef();
  
  useEffect(() => {
    if (!position) return;
    
    // Check if position is the same as previous
    const isSamePosition = prevPositionRef.current && 
      position[0] === prevPositionRef.current[0] && 
      position[1] === prevPositionRef.current[1];
    
    prevPositionRef.current = position;

    const handleMoveEnd = () => {
      if (isProgrammaticMove.current) {
        console.log('Programmatic move ended');
        onFlyComplete();
        isProgrammaticMove.current = false;
      }
    };

    map.on('moveend', handleMoveEnd);
    
    console.log('Flying to position:', position);
    isProgrammaticMove.current = true;
    
    // If same position, fly to a slightly different position first
    if (isSamePosition) {
      map.flyTo([position[0] + 0.001, position[1]], 12, {
        duration: 0.5,
        onEnd: () => {
          map.flyTo(position, 12, {
            duration: 1.5
          });
        }
      });
    } else {
      map.flyTo(position, 12, {
        duration: 1.5
      });
    }

    return () => {
      map.off('moveend', handleMoveEnd);
    };
  }, [position, map, onFlyComplete]);

  return null;
}

export default function Map({ selectedFestival, festivalData }) {
  const [popupOpen, setPopupOpen] = useState(false);
  const markerRef = useRef(null);
  const mapRef = useRef(null);

  const handleFlyComplete = () => {
    console.log('Flight complete, opening popup');
    setPopupOpen(true);
    // Manually open the popup after a small delay
    setTimeout(() => {
      if (markerRef.current) {
        markerRef.current.openPopup();
      }
    }, 100);
  };

  useEffect(() => {
    setPopupOpen(false);
  }, [selectedFestival]);

  return (
    <MapContainer
      center={[36.2048, 138.2529]}
      zoom={7}
      scrollWheelZoom={true}
      className="w-full h-full"
      maxBounds={[[20.0, 122.0], [46.0, 154.0]]}
      maxBoundsViscosity={1.0}
      ref={mapRef}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {selectedFestival && (
        <>
          <MapFly 
            position={selectedFestival.location} 
            onFlyComplete={handleFlyComplete}
          />
          <Marker 
            position={selectedFestival.location}
            ref={markerRef}
          >
            <Popup
              className="festival-popup z-[1000]"
              onClose={() => setPopupOpen(false)}
            >
              <FestivalPopup 
                festival={selectedFestival} 
                festivalData={festivalData} 
              />
            </Popup>
          </Marker>
        </>
      )}
    </MapContainer>
  );
}