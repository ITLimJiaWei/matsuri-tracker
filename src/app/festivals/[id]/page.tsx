import { notFound } from 'next/navigation';
import FestivalDetailClient from './FestivalDetailClient';
import { FESTIVALS } from '../../lib/festivals';

async function getFestival(id: string) {
    return FESTIVALS[id?.toLowerCase()] || null;
}

export default async function FestivalPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const festival = await getFestival(id);

    if (!festival) {
        notFound();
    }

    return <FestivalDetailClient festival={festival} />;
}
