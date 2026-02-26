import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { default: 'PrivatePaycheck – Free Paycheck Calculator 2026', template: '%s | PrivatePaycheck' },
  description: 'Free paycheck calculator for all 50 US states. Federal + state taxes, FICA, 401k, HSA. 100% private – your data never leaves your browser.',
  metadataBase: new URL('https://privatepaycheck.com'),
  openGraph: { type: 'website', siteName: 'PrivatePaycheck' },
  verification: {
    google: 'Ke8lQI5ANq2TuOILynfn4obnwF7Sbm-Hgp_VEfcke1g',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body style={{ margin: 0, padding: 0, background: '#0f0c29' }}>
        {children}
      </body>
    </html>
  );
}
