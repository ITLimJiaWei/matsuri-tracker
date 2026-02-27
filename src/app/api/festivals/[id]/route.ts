import { NextResponse } from 'next/server';
import { FESTIVALS } from '../../../lib/festivals';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    const festival = FESTIVALS[id];

    if (!festival) {
        return NextResponse.json(
            { error: 'Festival not found' },
            { status: 404 }
        );
    }

    return NextResponse.json(festival);
}
