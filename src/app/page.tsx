'use client';

import "leaflet/dist/leaflet.css";
import dynamic from 'next/dynamic';
import { useState } from "react";
import { FESTIVALS } from './lib/festivals';
import Rightbar from './components/Rightbar';
import Fuse from 'fuse.js';

const Map = dynamic(() => import('./components/Map'), { ssr: false });

const fuse = new Fuse(Object.entries(FESTIVALS).map(([key, fest]) => ({
  key,
  ...fest
})), {
  keys: ['key', 'name', 'city'],
  threshold: 0.4, // 0 = strict, 1 = very fuzzy
});

export default function Home() {


  const [selectedFestival, setSelectedFestival] = useState(null);

  const handleSearch = (query: string) => {
    
  const result = fuse.search(query.trim());

  if (result.length > 0) {

    const matchedFestival = FESTIVALS[result[0].item.key];
    setSelectedFestival(null); // Reset first
    setSelectedFestival(matchedFestival);

  } else {
    alert("Festival not found!");
  }
};

  return (

    <>
      <div className="flex h-screen">
        <div className="w-[21rem] min-w-[21rem] bg-gray-100">
          <Rightbar onSearch={handleSearch} />
        </div>
        <div className="flex-1">
        <Map selectedFestival={selectedFestival}/>
      </div>
      </div>
      
    </>
    
    
  );
}

