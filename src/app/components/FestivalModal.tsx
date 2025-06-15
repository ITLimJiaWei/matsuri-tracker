'use client';

import React from 'react';

type Festival = {
  name: string;
  description?: string;
  image?: string;
};

type Props = {
  festival: Festival;
  onClose: () => void;
};

export default function FestivalModal({ festival, onClose }: Props) {
  return (
    <div className="relative bg-white rounded-lg p-4 w-full max-w-xs shadow">
      <button
        onClick={onClose}
        className="absolute top-2 right-3 text-black text-xl font-bold"
      >
        ×
      </button>

      <h2 className="text-xl font-bold mb-2 text-black">{festival.name}</h2>

      {festival.image ? (
        <img
          src={festival.image}
          alt={festival.name}
          className="w-full h-32 object-cover rounded mb-2"
        />
      ) : (
        <div className="w-full h-32 bg-gray-200 flex items-center justify-center text-gray-500 text-sm rounded mb-2">
          No image available
        </div>
      )}

      <p className="text-black text-sm">{festival.description || 'No description available.'}</p>
    </div>
  );
}

