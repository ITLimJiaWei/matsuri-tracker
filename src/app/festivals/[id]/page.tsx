import { notFound } from 'next/navigation';
import Link from 'next/link';

async function getFestival(id: string) {
    // We use the absolute URL for server-side fetching in App Router when calling our own API
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/festivals/${id}`, { cache: 'no-store' }); // Disable cache for dev

    if (!res.ok) return null;

    return res.json();
}

export default async function FestivalPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const festival = await getFestival(id);

    if (!festival) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-neutral-50 px-6 py-12 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-neutral-100">

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
                                Back to Map
                            </Link>
                            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">{festival.name}</h1>
                            <p className="text-xl text-amber-100 font-medium">in {festival.city}</p>
                        </div>
                        <div className="text-right mt-4 md:mt-0">
                            <div className="text-sm uppercase tracking-wider text-amber-200 font-semibold mb-1">Festival Dates</div>
                            <div className="text-lg font-bold bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
                                {new Date(festival.startDate).toLocaleDateString()} - {new Date(festival.endDate).toLocaleDateString()}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12">

                    {/* Description Card */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-amber-500 pb-2 inline-block">About the Festival</h2>
                        <p className="text-lg text-gray-700 leading-relaxed bg-amber-50 rounded-xl p-6 shadow-sm border border-amber-100/50">
                            {festival.description}
                        </p>
                    </section>

                    {/* Highlights Network Grid */}
                    {festival.subitems && festival.subitems.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-amber-500 pb-2 inline-block">Key Highlights</h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                {festival.subitems.map((subitem: any, index: number) => (
                                    <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200 hover:shadow-md transition-shadow group">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                            <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mr-3 text-sm group-hover:bg-amber-500 group-hover:text-white transition-colors">
                                                {index + 1}
                                            </span>
                                            {subitem.name}
                                        </h3>

                                        <ul className="space-y-3">
                                            {subitem.details.map((detail: string, i: number) => (
                                                <li key={i} className="flex items-start">
                                                    <svg className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-gray-600">{detail}</span>
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
                        <span>Coordinates: {festival.location[0].toFixed(4)}, {festival.location[1].toFixed(4)}</span>
                        <span className="font-mono text-xs opacity-50">ID: {festival.id}</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
