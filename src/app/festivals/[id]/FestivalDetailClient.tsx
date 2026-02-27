'use client';

import Link from 'next/link';
import { useLanguage } from '../../providers/LanguageProvider';

export default function FestivalDetailClient({ festival }: { festival: any }) {
    const { language } = useLanguage();
    const isJa = language === 'ja';

    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 px-6 py-12 md:px-12 lg:px-24 transition-colors">
            <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-900 shadow-xl rounded-2xl overflow-hidden border border-neutral-100 dark:border-neutral-800 transition-colors">

                {/* Header Section */}
                <div className="bg-amber-600 text-white p-8 md:p-12 relative overflow-hidden">
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 opacity-10 blur-xl">
                        <div className="w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter"></div>
                    </div>
                    <div className="absolute -bottom-10 -left-10 opacity-10 blur-xl">
                        <div className="w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter"></div>
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <div>
                            <Link href="/" className="inline-flex items-center text-sm text-amber-100 hover:text-white mb-6 group transition-colors">
                                <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                </svg>
                                {isJa ? "マップに戻る" : "Back to Map"}
                            </Link>
                            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
                                {isJa && festival.name_ja ? festival.name_ja : festival.name}
                            </h1>
                            <p className="text-xl text-amber-100 font-medium">in {isJa && festival.city_ja ? festival.city_ja : festival.city}</p>
                        </div>
                        <div className="text-right mt-4 md:mt-0">
                            <div className="text-sm uppercase tracking-wider text-amber-200 font-semibold mb-1">
                                {isJa ? "開催日" : "Festival Dates"}
                            </div>
                            <div className="text-lg font-bold bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10 mb-4">
                                {new Date(festival.startDate).toLocaleDateString(language === 'ja' ? 'ja-JP' : 'en-US')} - {new Date(festival.endDate).toLocaleDateString(language === 'ja' ? 'ja-JP' : 'en-US')}
                            </div>
                            {festival.nearestStation && (
                                <>
                                    <div className="text-sm uppercase tracking-wider text-amber-200 font-semibold mb-1">
                                        {isJa ? "最寄り駅" : "Nearest Station"}
                                    </div>
                                    <div className="text-lg font-bold bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
                                        🚆 {isJa && festival.nearestStation_ja ? festival.nearestStation_ja : festival.nearestStation}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12">

                    {/* Description Card */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 border-b-2 border-amber-500 pb-2 inline-block">
                            {isJa ? "祭りの概要" : "About the Festival"}
                        </h2>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed bg-amber-50 dark:bg-amber-900/10 rounded-xl p-6 shadow-sm border border-amber-100/50 dark:border-amber-900/30">
                            {isJa && festival.description_ja ? festival.description_ja : festival.description}
                        </p>
                    </section>

                    {/* Highlights Network Grid */}
                    {festival.subitems && festival.subitems.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 border-b-2 border-amber-500 pb-2 inline-block">
                                {isJa ? "主な見どころ" : "Key Highlights"}
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                {festival.subitems.map((subitem: any, index: number) => (
                                    <div key={index} className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-sm border border-neutral-200 dark:border-neutral-700 hover:shadow-md transition-shadow group">
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                                            <span className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 flex items-center justify-center mr-3 text-sm group-hover:bg-amber-500 group-hover:text-white transition-colors">
                                                {index + 1}
                                            </span>
                                            {isJa && subitem.name_ja ? subitem.name_ja : subitem.name}
                                        </h3>

                                        <ul className="space-y-3">
                                            {(isJa && subitem.details_ja ? subitem.details_ja : subitem.details).map((detail: string, i: number) => (
                                                <li key={i} className="flex items-start">
                                                    <svg className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-gray-600 dark:text-gray-400">{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Location Coordinates footer */}
                    <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between text-sm text-gray-400">
                        <span>{isJa ? "座標" : "Coordinates"}: {festival.location[0].toFixed(4)}, {festival.location[1].toFixed(4)}</span>
                        <span className="font-mono text-xs opacity-50">ID: {festival.id}</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
