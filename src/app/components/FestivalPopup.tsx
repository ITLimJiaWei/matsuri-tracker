'use client';

import Link from 'next/link';
import { Festival } from '../lib/festivals';

interface FestivalPopupProps {
  festival: Festival;
  onClose: () => void;
}

export default function FestivalPopup({ festival, onClose }: FestivalPopupProps) {
  return (
    <div className="w-64 p-4">
      <h2 className="text-xl font-bold mb-2">{festival.name}</h2>
      <p className="text-gray-600 mb-4">{festival.city}</p>

      {festival.subitems?.slice(0, 2).map((subitem, index) => (
        <div key={index} className="mb-3">
          <h3 className="font-semibold text-lg mb-1">- {subitem.name}</h3>
          <ul className="space-y-1">
            {subitem.details?.slice(0, 2).map((detail, i) => (
              <li key={i} className="text-sm truncate" title={detail}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex justify-between mb-2 text-sm text-gray-500">
          <span>{festival.startDate}</span>
          <span>{festival.endDate}</span>
        </div>
        <div className="relative mt-2">
          <Link href={`/festivals/${festival.id}`} onClick={onClose}>
            <button
              className="w-full mt-4 px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}