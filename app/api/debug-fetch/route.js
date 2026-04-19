import { NextResponse } from 'next/server';

export async function GET() {
    try {
        console.log("=== Testing Native Fetch to Supabase ===");
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

        // Try passing the exact URL that Supabase JS client uses for health check
        const urlToFetch = `${supabaseUrl}/rest/v1/`;
        console.log("Fetching GET:", urlToFetch);

        const response = await fetch(urlToFetch, {
            headers: {
                'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`
            }
        });

        const data = await response.json();
        return NextResponse.json({ success: true, status: response.status, data });
    } catch (e) {
        console.error("Fetch Exception:", e);
        return NextResponse.json({ success: false, error: e.message, stack: e.stack }, { status: 500 });
    }
}
