'use client';

import Link from 'next/link';
import { Festival } from '../lib/festivals';
import { useLanguage } from '../providers/LanguageProvider';
import Image from 'next/image';

interface FestivalPopupProps {
  festival: Festival;
  onClose: () => void;
}

export default function FestivalPopup({ festival, onClose }: FestivalPopupProps) {
  const { language } = useLanguage();
  const isJa = language === 'ja';

  return (
    <div className="w-64">
      {festival.image && (
        <div className="w-full h-32 relative mb-3 rounded-t-md overflow-hidden">
          <Image
            src={festival.image}
            alt={festival.name}
            fill
            className="object-cover"
            sizes="(max-width: 256px) 100vw, 256px"
          />
        </div>
      )}
      <div className="px-4 pb-4 pt-1">
        <h2 className="text-xl font-bold mb-1 leading-tight">
          {isJa && festival.name_ja ? festival.name_ja : festival.name}
        </h2>
        <p className="text-amber-600 font-medium text-sm mb-3">
          {isJa && festival.city_ja ? festival.city_ja : festival.city}
        </p>

        <p className="text-sm text-gray-700 leading-relaxed min-h-[3rem]">
          {isJa && festival.shortDescription_ja ? festival.shortDescription_ja : festival.shortDescription}
        </p>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between mb-3 text-xs text-gray-500 font-medium">
            <span>{new Date(festival.startDate).toLocaleDateString(language === 'ja' ? 'ja-JP' : undefined, { month: 'short', day: 'numeric' })}</span>
            <span>&mdash;</span>
            <span>{new Date(festival.endDate).toLocaleDateString(language === 'ja' ? 'ja-JP' : undefined, { month: 'short', day: 'numeric' })}</span>
          </div>
          <div className="relative">
            <Link href={`/festivals/${festival.id}`} onClick={onClose}>
              <button
                className="w-full px-4 py-2 bg-amber-500 text-white font-medium text-sm rounded shadow-sm hover:bg-amber-600 hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                {isJa ? "詳細を見る" : "View Details"}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}