'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FESTIVALS } from '../lib/festivals';
import { useLanguage } from '../providers/LanguageProvider';
import { useTheme } from '../providers/ThemeProvider';
import { useFilter } from '../providers/FilterProvider';

export default function Rightbar({ onSearch }: { onSearch?: (query: string) => void }) {
  const [input, setInput] = useState('');
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [upcomingFestivals, setUpcomingFestivals] = useState<any[]>([]);
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { selectedSeason, setSelectedSeason, selectedType, setSelectedType } = useFilter();

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
    <aside className="fixed top-0 left-20 h-screen w-64 bg-gray-100 dark:bg-neutral-900 border-r border-gray-200 dark:border-neutral-800 text-black dark:text-gray-100 py-10 px-4 shadow-lg flex flex-col space-y-4 z-10 overflow-y-auto transition-colors duration-300">
      <div className="w-full flex justify-between items-start">
        <div className="text-xl font-serif-jp tracking-widest text-amber-300 dark:text-amber-400 font-bold bg-neutral-900 border-l-4 border-amber-500 pl-4 py-3 pr-4 rounded shadow-inner">
          楽しい<span className="text-3xl text-amber-200 font-black tracking-normal">思い出</span>を<br />作ろう
        </div>
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
        className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
      />

      <div className="flex flex-col space-y-2 text-sm z-40">
        <select
          value={selectedSeason || ''}
          onChange={(e) => setSelectedSeason(e.target.value || null)}
          className="w-full px-3 py-1.5 border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
        >
          <option value="">{isJa ? "全季節" : "All Seasons"}</option>
          <option value="Spring">{isJa ? "春" : "Spring"}</option>
          <option value="Summer">{isJa ? "夏" : "Summer"}</option>
          <option value="Autumn">{isJa ? "秋" : "Autumn"}</option>
          <option value="Winter">{isJa ? "冬" : "Winter"}</option>
        </select>
        <select
          value={selectedType || ''}
          onChange={(e) => setSelectedType(e.target.value || null)}
          className="w-full px-3 py-1.5 border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
        >
          <option value="">{isJa ? "全種類" : "All Types"}</option>
          <option value="Fireworks">{isJa ? "花火大会" : "Fireworks"}</option>
          <option value="Parade">{isJa ? "パレード・山車" : "Parade"}</option>
          <option value="Illumination">{isJa ? "イルミネーション" : "Illumination"}</option>
          <option value="Dance">{isJa ? "踊り" : "Dance"}</option>
          <option value="Other">{isJa ? "その他" : "Other"}</option>
        </select>
      </div>

      <button
        onClick={handleApply}
        className="bg-black text-white py-2 px-4 rounded hover:bg-amber-600 transition"
      >
        {isJa ? "適用" : "Apply"}
      </button>

      <div className="mt-4 pt-4 border-t border-gray-300 dark:border-neutral-700">
        <h3 className="text-lg font-extrabold text-gray-800 dark:text-gray-200 mb-4 block">
          {isJa ? "今後の祭り" : "Upcoming Matsuris"}
        </h3>
        <div className="flex flex-col space-y-4">
          {upcomingFestivals.map((fest) => (
            <div
              key={fest.key}
              onClick={() => handleFestivalClick(fest.name)}
              className="bg-white dark:bg-neutral-800 p-3 rounded-lg shadow-sm border border-gray-200 dark:border-neutral-700 cursor-pointer hover:border-amber-500 dark:hover:border-amber-500 hover:shadow-md transition group"
            >
              <div className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors text-base mb-1">
                {isJa && fest.name_ja ? fest.name_ja : fest.name}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 flex flex-col space-y-1">
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
          <button
            onClick={toggleTheme}
            className="px-3 py-2 w-full text-left rounded hover:bg-amber-50 dark:hover:bg-neutral-800 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200 flex items-center justify-between"
          >
            {isJa ? "テーマ切替" : "Toggle Theme"}
            <span>{theme === 'light' ? '🌙' : '☀️'}</span>
          </button>
          <Link
            href="/about"
            className="px-3 py-2 block w-full rounded hover:bg-amber-50 dark:hover:bg-neutral-800 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
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
            <div className="absolute bottom-full mb-2 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-md shadow-lg w-full overflow-hidden">
              <button
                onClick={() => {
                  setLanguage('en');
                  setLanguageMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 hover:bg-amber-50 dark:hover:bg-amber-900/40 hover:text-amber-600 dark:hover:text-amber-500 transition-colors duration-200 ${language === 'en' ? 'font-bold bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-500' : ''}`}
              >
                English
              </button>
              <button
                onClick={() => {
                  setLanguage('ja');
                  setLanguageMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 hover:bg-amber-50 dark:hover:bg-amber-900/40 hover:text-amber-600 dark:hover:text-amber-500 transition-colors duration-200 ${language === 'ja' ? 'font-bold bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-500' : ''}`}
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

