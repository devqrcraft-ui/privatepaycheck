import Script from 'next/script'
import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.privatepaycheck.com' },
  robots: { index: true, follow: true },
  keywords: 'paycheck calculator, salary calculator, tax calculator 2026, US paycheck, take home pay, FICA calculator, 401k calculator',
  metadataBase: new URL('https://www.privatepaycheck.com'),
  title: {
    default: 'Paycheck Calculator 2026 — Free & Private | PrivatePaycheck',
    template: '%s | PrivatePaycheck',
  },
  description: 'Free paycheck calculator for all 50 US states. Federal + state taxes, FICA, 401k, HSA. 100% private — your salary never leaves your browser.',
  openGraph: {
    locale: 'en_US',
    url: 'https://www.privatepaycheck.com',
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
      <body style={{ margin: 0, padding: 0, overflowX:"hidden", maxWidth:"100%" }}>
        <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'PrivatePaycheck — Paycheck Calculator 2026',
        url: 'https://www.privatepaycheck.com',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'All',
        description: 'Free paycheck calculator for all 50 US states. Federal + state taxes, FICA, 401k, HSA. 100% private.',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      }) }} />
        {children}
        <Analytics />
        <SpeedInsights />
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I calculate my paycheck?","acceptedAnswer":{"@type":"Answer","text":"Enter your gross salary, pay frequency, state, and deductions. Our calculator computes federal tax, state tax, FICA, and net pay instantly."}},{"@type":"Question","name":"Which states have no income tax?","acceptedAnswer":{"@type":"Answer","text":"Florida, Texas, Nevada, Washington, Wyoming, South Dakota, Tennessee, and New Hampshire have no state income tax."}},{"@type":"Question","name":"What is FICA tax?","acceptedAnswer":{"@type":"Answer","text":"FICA is Social Security (6.2%) and Medicare (1.45%) tax, totaling 7.65% for employees."}}]}) }} />      <Script src="/ai-chat-widget-final.js" strategy="lazyOnload" />
    
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XRMYZKZN69" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XRMYZKZN69');
        `}} />
      </body>
    </html>
  );
}
