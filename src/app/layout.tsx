import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Footer from '@/components/Footer';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.privatepaycheck.com'),
  title: {
    default: 'Paycheck Calculator 2026 — Free & Private | PrivatePaycheck',
    template: '%s | PrivatePaycheck',
  },
  description: 'Free paycheck calculator for all 50 US states. Federal + state taxes, FICA, 401k, HSA. 100% private — your salary never leaves your browser.',
  openGraph: {
    siteName: 'PrivatePaycheck',
    type: 'website',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'PrivatePaycheck — Free Paycheck Calculator 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.svg'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
        <Analytics />
        <SpeedInsights />
      <Footer />
      </body>
    </html>
  );
}
