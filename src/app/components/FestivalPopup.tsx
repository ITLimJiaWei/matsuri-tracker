'use client';

import { useLanguage } from '../providers/LanguageProvider';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Festival } from '../lib/festivals';
import { useEffect, useRef, useState } from 'react';

interface FestivalPopupProps {
  festival: Festival;
  onClose: () => void;
}
export default function FestivalPopup({ festival, onClose }: FestivalPopupProps) {
  const { language } = useLanguage();
  const isJa = language === 'ja';
  const router = useRouter();
  const [imgError, setImgError] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const btn = buttonRef.current;
    if (!btn) return;

    const handleClick = (e: MouseEvent) => {
      e.preventDefault();
      onClose();
      router.push(`/festivals/${festival.id}`);
    };

    btn.addEventListener('click', handleClick);
    return () => btn.removeEventListener('click', handleClick);
  }, [festival.id, onClose, router]);

  return (
    <div className="w-64">
      {festival.image && !imgError && (
        <div className="w-full h-32 relative mb-3 rounded-t-md overflow-hidden bg-neutral-100 dark:bg-neutral-800">
          <Image
            src={festival.image}
            alt={festival.name}
            fill
            className="object-cover"
            sizes="(max-width: 256px) 100vw, 256px"
            onError={() => setImgError(true)}
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
            <span>{new Date(festival.startDate).toLocaleDateString(language === 'ja' ? 'ja-JP' : 'en-US', { month: 'short', day: 'numeric' })}</span>
            <span>&mdash;</span>
            <span>{new Date(festival.endDate).toLocaleDateString(language === 'ja' ? 'ja-JP' : 'en-US', { month: 'short', day: 'numeric' })}</span>
          </div>
          <div className="relative">
            <button
              ref={buttonRef}
              type="button"
              className="block w-full text-center px-4 py-2 bg-amber-500 text-white font-medium text-sm rounded shadow-sm hover:bg-amber-600 hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              {isJa ? "詳細を見る" : "View Details"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}