import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';

export async function middleware(request) {
    const url = new URL(request.url);
    const path = url.pathname;

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
            if (path.startsWith('/admin/dashboard')) {
                const loginUrl = new URL('/admin', request.url);
                return NextResponse.redirect(loginUrl);
            }
            return response;
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

            // ONLY perform authentication checks on sensitive routes
            // This prevents middleware timeouts on the home page and other public routes
            if (path.startsWith('/admin/dashboard') || path.startsWith('/dashboard')) {
                const { data: { user } } = await supabase.auth.getUser();
                const ADMIN_UUID = '12124b30-d95b-468a-bd6e-c3ac5b8f09c6';

                // Admin Protection Logic
                if (path.startsWith('/admin/dashboard')) {
                    if (!user || user.id !== ADMIN_UUID) {
                        const loginUrl = new URL('/admin', request.url);
                        return NextResponse.redirect(loginUrl);
                    }
                } 
                // General Dashboard Protection Logic
                else if (path.startsWith('/dashboard')) {
                    if (!user) {
                        const loginUrl = new URL('/signin', request.url);
                        return NextResponse.redirect(loginUrl);
                    }
                }
            }
        }
    } catch (error) {
        console.error('Middleware execution error:', error);
        if (path.startsWith('/admin/dashboard')) {
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
