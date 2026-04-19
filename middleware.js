import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';

export async function middleware(request) {
    let response = NextResponse.next({
        request: {
            headers: request.headers,
        },
    });

    try {
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

        if (!supabaseUrl || !supabaseKey) {
            console.error('Missing Supabase environment variables in Middleware!');
            const url = new URL(request.url);
            if (url.pathname.startsWith('/admin/dashboard')) {
                const loginUrl = new URL('/admin', request.url);
                return NextResponse.redirect(loginUrl);
            }
        } else {
            const supabase = createServerClient(
                supabaseUrl,
                supabaseKey,
                {
                    cookies: {
                        getAll() {
                            return request.cookies.getAll();
                        },
                        setAll(cookiesToSet) {
                            cookiesToSet.forEach(({ name, value }) =>
                                request.cookies.set(name, value)
                            );
                            response = NextResponse.next({
                                request,
                            });
                            cookiesToSet.forEach(({ name, value, options }) =>
                                response.cookies.set(name, value, options)
                            );
                        },
                    },
                }
            );

            // refreshing the auth token
            const { data: { user } } = await supabase.auth.getUser();

            const url = new URL(request.url);

            // Admin Protection Logic
            if (url.pathname.startsWith('/admin/dashboard')) {
                const ADMIN_UUID = 'fae1323a-ade8-4f08-bfd9-4f748c916ecd';

                if (!user || user.id !== ADMIN_UUID) {
                    // If not authenticated or not the admin, redirect to admin login
                    const loginUrl = new URL('/admin', request.url);
                    return NextResponse.redirect(loginUrl);
                }
            }
        }
    } catch (error) {
        console.error('Middleware execution error:', error);
        const url = new URL(request.url);
        if (url.pathname.startsWith('/admin/dashboard')) {
            const loginUrl = new URL('/admin', request.url);
            return NextResponse.redirect(loginUrl);
        }
    }

    return response;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - any static assets (svg, png, jpg, jpeg, gif, webp)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
};
