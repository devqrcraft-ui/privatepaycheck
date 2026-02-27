import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

// ─────────────────────────────────────────────────────────────────────────────
// IMPORTANT: Replace XXXXXXXXXX with your real AdSense publisher ID
// Format: ca-pub-XXXXXXXXXX
// Get it at: https://www.google.com/adsense/
// ─────────────────────────────────────────────────────────────────────────────
const ADSENSE_PUB_ID = 'ca-pub-XXXXXXXXXX'; // ← REPLACE THIS

export const metadata: Metadata = {
  metadataBase: new URL('https://www.privatepaycheck.com'),
  title: {
    default: 'Paycheck Calculator 2026 — Free & Private | PrivatePaycheck',
    template: '%s | PrivatePaycheck',
  },
  description: 'Free paycheck calculator for all 50 US states. 100% private — your salary never leaves your browser.',
  openGraph: {
    siteName: 'PrivatePaycheck',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ── Google AdSense auto-ads ───────────────────────────────────── */}
        {/* Remove the XXXXXXXXXX check once you have a real publisher ID  */}
        {ADSENSE_PUB_ID !== 'ca-pub-XXXXXXXXXX' && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUB_ID}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className={inter.className} style={{ margin: 0, padding: 0 }}>
        {children}

        {/* ── Manual ad slot — place this component wherever you want ads ─ */}
        {/* See AdBanner.tsx for the reusable ad component                   */}
      </body>
    </html>
  );
}
