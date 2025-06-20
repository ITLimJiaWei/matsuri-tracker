'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Rightbar({ onSearch }) {
  const [input, setInput] = useState('');
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  const handleApply = () => {
    if (onSearch && input.trim()) {
      onSearch(input);
    }
  };

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen((prev) => !prev);
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

      <div className="fixed bottom-4 left-24 text-sm sm:text-base flex flex-col items-start space-y-2 z-50">
        <div className="relative group">
          
        <Link 
          href="/about" 
          className="px-3 py-1 rounded hover:bg-amber-50 hover:text-amber-600 transition-colors duration-200"
        >
          About
        </Link>
        <button
              onClick={toggleLanguageMenu}
            className="px-3 py-4 rounded hover:bg-amber-50 hover:text-amber-600 transition-colors duration-200 flex items-center"
          >
            Languages
            <svg
              className={`ml-1 h-4 w-4 transform transition-transform ${languageMenuOpen ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {languageMenuOpen && (
            <div className="absolute bottom-full mb-2 bg-white border border-gray-200 rounded-md shadow-lg w-36 overflow-hidden">
              <Link
                href="/en"
                className="block px-4 py-2 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-200"
              >
                English
              </Link>
              <Link
               href="/ja"
                className="block px-4 py-2 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-200"
              >
                日本語
              </Link>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
