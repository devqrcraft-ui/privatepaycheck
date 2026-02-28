import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

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
      <body style={{ margin: 0, padding: 0 }}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
