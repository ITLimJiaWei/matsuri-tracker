'use client';

import "leaflet/dist/leaflet.css";
import dynamic from 'next/dynamic';
import { useState } from "react";
import { FESTIVALS } from './lib/festivals';
import Rightbar from './components/Rightbar';
import FestivalModal from './components/FestivalModal';


const Map = dynamic(() => import('./components/Map'), { ssr: false });

export default function Home() {


  const [selectedFestival, setSelectedFestival] = useState(null);

  const handleSearch = (query: string) => {
    const key = query.trim().toLowerCase();
    if (FESTIVALS[key]) {
      
      // Reset first to trigger change even if same festival
      setSelectedFestival(null); // clear it first
      
      setSelectedFestival(FESTIVALS[key]);
      
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

