'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Rightbar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleApply = () => {
    if (onSearch && input.trim()) {
      onSearch(input);
    }
  };

  return (
    <aside className="fixed top-0 left-20 h-screen w-64 bg-gray-100 text-black py-10 px-4 shadow-lg flex flex-col space-y-4 z-10">
      <div className="w-full">
        <div className="writing-vertical text-7xl text-amber-500">祭り</div>
      </div>

      <br />
      <br />

      <input
        type="text"
        placeholder="Search ..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded"
      />

      <button
        onClick={handleApply}
        className="bg-black text-white py-2 px-4 rounded hover:bg-amber-200 transition"
      >
        Apply
      </button>

      <div className="bottom-0 text-[10px] sm:text-xl flex flex-col items-left space-y-2 mt-auto">
        <Link href="/languages" className="mb-4 hover:text-amber-300">Languages</Link>
        <Link href="/about" className="mb-4 hover:text-amber-300">About</Link>
      </div>
    </aside>
  );
}
