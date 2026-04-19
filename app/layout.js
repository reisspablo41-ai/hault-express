import localFont from 'next/font/local';
import './globals.css';
import Header from './Components/Header';
import { UserContextProvider } from './Context/UserContext';
import { TimerProvider } from './Context/TimerContext';
import { Toaster } from 'sonner';
import { Outfit } from 'next/font/google';
import Script from 'next/script';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
});

// ✅ Use Next.js Best Practice for Metadata
export const metadata = {
  title: 'Hault Express Delivery - Fast & Secure Shipping',
  description:
    'Welcome to Hault Express Delivery - Find Services for shipping your packages, pets, shipment tracking, shipping rates, and tools to support shippers and small business.',
  keywords: ['shipping', 'logistics', 'courier', 'Hault Express Delivery', 'freight', 'United States track package'],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Hault Express Delivery',
    description:
      'Welcome to Hault Express Delivery - Find Services for shipping your packages, pets, and secure global tracking.',
    url: 'https://haultexpressdelivery.com',
    siteName: 'Hault Express Delivery',
    images: [
      {
        url: 'https://haultexpressdelivery.com/hault-logo.png',
        width: 1200,
        height: 630,
        alt: 'Hault Express Delivery Logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hault Express Delivery',
    description: 'Fast, secure shipping & tracking worldwide.',
    images: ['https://haultexpressdelivery.com/hault-logo.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/hault-logo.png" sizes="32x32" />
        <link rel="icon" href="/hault-logo.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/hault-logo.png" />
        {/* ✅ Organization Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Hault Express Delivery',
              url: 'https://haultexpressdelivery.com',
              logo: 'https://haultexpressdelivery.com/hault-logo.png',
              sameAs: [
                'https://wwww.facebook.com/share/1E2yHUswVX/?mibextid=wwXIfr',
              ],
            }),
          }}
        />

        {/* ✅ WebSite Schema Markup (For Search Box & Sitelinks) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Hault Express Delivery',
              url: 'https://haultexpressdelivery.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://haultexpressdelivery.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        <meta
          name="google-site-verification"
          content="gLwR-ISOyVSDF9CIr6UA4OL3gWeao6kJZwPuwR2Fyqk"
        />
      </head>
      <body
        className={`${outfit.className} antialiased bg-dark min-h-screen flex flex-col relative text-zinc-900 font-medium`}
      >
        <TimerProvider>
          <UserContextProvider>
            <Header />
            <div>
              <main>{children}</main>
            </div>
          </UserContextProvider>
        </TimerProvider>
        <Toaster
          richColors
          position="top-right"
          toastOptions={{ duration: 4000 }}
        />
        <Script src="//code.jivosite.com/widget/JsGXHlUhTp" strategy="lazyOnload" />
      </body>
    </html>
  );
}
