import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';

export const metadata: Metadata = {
  title: 'Paycheck Calculator 2026 — Free & Private | PrivatePaycheck',
  description: 'Free paycheck calculator for all 50 US states. 100% private — your salary never leaves your browser.',
  metadataBase: new URL('https://www.privatepaycheck.com' ),
  openGraph: {
    title: "Paycheck Calculator 2026 — 100% Private & Free | PrivatePaycheck",
    description: "Free paycheck calculator for all 50 US states.",
    url: "https://www.privatepaycheck.com",
    siteName: "PrivatePaycheck",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paycheck Calculator 2026 — 100% Private & Free | PrivatePaycheck",
    description: "Free paycheck calculator for all 50 US states.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode } ) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.privatepaycheck.com" }]
  };

  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema ) }} />
      </head>
      <body style={{ margin: 0, padding: 0, overflowX:"hidden", maxWidth:"100%" }}>
        <Nav />
        <main role="main">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
