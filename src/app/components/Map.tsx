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
import { FESTIVALS } from '../lib/festivals';
import { useFilter } from '../providers/FilterProvider';
import { useTheme } from '../providers/ThemeProvider';

import L from 'leaflet';
const customMarkerIcon = L.divIcon({
  html: `<svg viewBox="0 0 24 24" fill="currentColor" class="text-amber-500 w-8 h-8 drop-shadow-md" style="transform: translate(-50%, -100%); width: 32px; height: 32px;">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>`,
  className: '',
  iconSize: [0, 0],   // CSS transforms handle alignment visually
  iconAnchor: [0, 0], // CSS transforms handle alignment visually
  popupAnchor: [0, -32],
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

export default function Map({ selectedFestival }) {
  const [popupOpen, setPopupOpen] = useState(false);
  const markerRef = useRef(null);
  const mapRef = useRef(null);
  const { selectedSeason, selectedType } = useFilter();
  const { theme } = useTheme();

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

  const filteredFestivals = Object.values(FESTIVALS).filter((fest) => {
    const matchSeason = !selectedSeason || fest.season === selectedSeason;
    const matchType = !selectedType || fest.type === selectedType;
    return matchSeason && matchType;
  });

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
      {/* Base Map (No Labels, just shapes) */}
      <TileLayer
        url={
          theme === 'dark'
            ? 'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png'
            : 'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png'
        }
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Labels restricted to Japan bounds to hide foreign cities */}
      <TileLayer
        url={
          theme === 'dark'
            ? 'https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png'
            : 'https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png'
        }
        bounds={[[30.0, 129.2], [46.0, 146.0]]}
      />
      <TileLayer
        url={
          theme === 'dark'
            ? 'https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png'
            : 'https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png'
        }
        bounds={[[24.0, 122.5], [30.0, 131.0]]}
      />

      {filteredFestivals.map((fest) => (
        <Marker
          key={fest.id}
          position={fest.location}
          icon={customMarkerIcon}
          ref={selectedFestival && fest.id === selectedFestival.id ? markerRef : null}
        >
          <Popup
            className="festival-popup z-[1000]"
            onClose={() => setPopupOpen(false)}
          >
            <FestivalPopup
              festival={fest}
              onClose={() => setPopupOpen(false)}
            />
          </Popup>
        </Marker>
      ))}

      {selectedFestival && (
        <MapFly
          position={selectedFestival.location}
          onFlyComplete={handleFlyComplete}
        />
      )}
    </MapContainer>
  );
}