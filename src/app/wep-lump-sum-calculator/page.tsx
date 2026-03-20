import type { Metadata } from 'next';
import WEPLumpSumCalculator from './WEPLumpSumClient';

export const metadata: Metadata = {
  title: 'WEP Lump-Sum Tax Calculator 2026 — SS Fairness Act Impact',
  description: 'Calculate how your WEP/GPO retroactive Social Security payment affects your 2025 taxes. Includes lump-sum election analysis and IRMAA Medicare impact. Free, private.',
  keywords: [
    'WEP lump sum tax calculator',
    'SS fairness act tax impact 2025',
    'social security retroactive payment taxes',
    'WEP repeal calculator',
    'GPO repeal tax calculator',
    'lump sum election form 1040',
    'IRMAA 2027 calculator',
    'teacher social security 2026',
  ],
  openGraph: {
    title: 'WEP Lump-Sum Tax Impact Calculator 2026',
    description: 'How much extra tax do you owe on your SS Fairness Act retroactive payment? Free calculator.',
    url: 'https://privatepaycheck.com/wep-lump-sum-calculator',
    siteName: 'PrivatePaycheck',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.privatepaycheck.com/wep-lump-sum-calculator',
  },
};

export default function WEPLumpSumPage() {
  return <WEPLumpSumCalculator />;
}
