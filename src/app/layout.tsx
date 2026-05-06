import Script from 'next/script'
import { Playfair_Display, Inter } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700'], display: 'swap', variable: '--font-playfair' })
const inter = Inter({ subsets: ['latin'], weight: ['400','700'], display: 'swap', variable: '--font-inter' })
import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';

export const metadata: Metadata = {
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
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
                            <style>{`
  *{box-sizing:border-box;}
  body{user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;}
  input,textarea,select,[contenteditable]{user-select:text;-webkit-user-select:text;-moz-user-select:text;}
  a,button,[role=button]{cursor:pointer;transition:transform 0.15s,box-shadow 0.15s,background 0.15s,opacity 0.15s;}
  a:hover,button:hover,[role=button]:hover{transform:translateY(-2px);opacity:0.92;}
  button:active,[role=button]:active{transform:scale(0.97);}
`}</style>
      </head>
      
<body suppressHydrationWarning style={{ margin: 0, padding: 0, overflowX:"hidden", maxWidth:"100%" }}>
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
        <main role="main">{children}</main>
        <Analytics />
        <Script src="/ai-chat-widget.js?v=4" strategy="lazyOnload" />
      <Footer />
    
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XRMYZKZN69" strategy="lazyOnload" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XRMYZKZN69');
        `}} />
      <script dangerouslySetInnerHTML={{ __html: `
document.addEventListener('dragstart', function(e){ e.preventDefault(); return false; });
document.addEventListener('selectstart', function(e){ if(!['INPUT','TEXTAREA','SELECT'].includes(e.target.tagName)) e.preventDefault(); });
document.addEventListener('contextmenu', function(e){ e.preventDefault(); });
` }} />
</body>
    </html>
  );
}
