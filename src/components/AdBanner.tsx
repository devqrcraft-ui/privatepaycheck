'use client';
import { useEffect, useRef } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// Reusable AdSense banner component
//
// Usage in any page:
//   import AdBanner from '@/components/AdBanner';
//   <AdBanner slot="1234567890" format="auto" />
//
// Common formats: 'auto', 'horizontal', 'rectangle', 'vertical'
// Get slot IDs from your AdSense dashboard: Ads → By ad unit
// ─────────────────────────────────────────────────────────────────────────────

interface AdBannerProps {
  slot: string;          // Your ad unit slot ID from AdSense
  format?: string;       // 'auto' | 'horizontal' | 'rectangle' | 'vertical'
  responsive?: boolean;
  style?: React.CSSProperties;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function AdBanner({ slot, format = 'auto', responsive = true, style }: AdBannerProps) {
  const adRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch (e) {
      // AdSense not loaded yet — safe to ignore
    }
  }, []);

  return (
    <div style={{ textAlign: 'center', margin: '16px auto', overflow: 'hidden', ...style }}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXX"  // ← REPLACE with your pub ID
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
}
