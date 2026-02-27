'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FESTIVALS } from '../lib/festivals';
import { useLanguage } from '../providers/LanguageProvider';

export default function Rightbar({ onSearch }: { onSearch?: (query: string) => void }) {
  const [input, setInput] = useState('');
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [upcomingFestivals, setUpcomingFestivals] = useState<any[]>([]);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const now = new Date();
    const sorted = Object.entries(FESTIVALS)
      .map(([key, fest]) => ({ key, ...fest }))
      .filter(fest => new Date(fest.startDate) >= now)
      .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
      .slice(0, 3);
    setUpcomingFestivals(sorted);
  }, []);

  const handleApply = () => {
    if (onSearch && input.trim()) {
      onSearch(input);
    }
  };

  const handleFestivalClick = (name: string) => {
    if (onSearch) {
      onSearch(name);
    }
  };

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen((prev) => !prev);
  };

  const isJa = language === 'ja';

  return (
    <aside className="fixed top-0 left-20 h-screen w-64 bg-gray-100 text-black py-10 px-4 shadow-lg flex flex-col space-y-4 z-10 overflow-y-auto">
      <div className="w-full">
        <div className="writing-vertical text-7xl text-amber-500">祭り</div>
      </div>

      <br />
      <br />

      <input
        type="text"
        placeholder={isJa ? "検索 ..." : "Search ..."}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleApply();
          }
        }}
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
      />

      <button
        onClick={handleApply}
        className="bg-black text-white py-2 px-4 rounded hover:bg-amber-600 transition"
      >
        {isJa ? "適用" : "Apply"}
      </button>

      <div className="mt-6 pt-4 border-t border-gray-300">
        <h3 className="text-lg font-extrabold text-gray-800 mb-4 block">
          {isJa ? "今後の祭り" : "Upcoming Matsuris"}
        </h3>
        <div className="flex flex-col space-y-4">
          {upcomingFestivals.map((fest) => (
            <div
              key={fest.key}
              onClick={() => handleFestivalClick(fest.name)}
              className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 cursor-pointer hover:border-amber-500 hover:shadow-md transition group"
            >
              <div className="font-bold text-gray-900 group-hover:text-amber-600 transition-colors text-base mb-1">
                {isJa && fest.name_ja ? fest.name_ja : fest.name}
              </div>
              <div className="text-xs text-gray-500 flex flex-col space-y-1">
                <span className="truncate font-medium">
                  {isJa && fest.city_ja ? fest.city_ja : fest.city}
                </span>
                <span className="text-amber-600 font-bold bg-amber-50 self-start px-2 py-0.5 rounded">
                  {new Date(fest.startDate).toLocaleDateString(language === 'ja' ? 'ja-JP' : undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Spacer to push language menu slightly down if needed, or rely on flex positioning */}
      <div className="flex-1"></div>

      <div className="mt-auto text-sm sm:text-base flex flex-col items-start space-y-2 z-50">
        <div className="relative group w-full">

          <Link
            href="/about"
            className="px-3 py-1 block w-full rounded hover:bg-amber-50 hover:text-amber-600 transition-colors duration-200"
          >
            {isJa ? "概要" : "About"}
          </Link>
          <button
            onClick={toggleLanguageMenu}
            className="px-3 py-4 w-full rounded hover:bg-amber-50 hover:text-amber-600 transition-colors duration-200 flex items-center justify-between"
          >
            {isJa ? "言語" : "Languages"}
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
            <div className="absolute bottom-full mb-2 bg-white border border-gray-200 rounded-md shadow-lg w-full overflow-hidden">
              <button
                onClick={() => {
                  setLanguage('en');
                  setLanguageMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-200 ${language === 'en' ? 'font-bold bg-amber-50 text-amber-600' : ''}`}
              >
                English
              </button>
              <button
                onClick={() => {
                  setLanguage('ja');
                  setLanguageMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-200 ${language === 'ja' ? 'font-bold bg-amber-50 text-amber-600' : ''}`}
              >
                日本語
              </button>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}

