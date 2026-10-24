// Sponsored block for pages where the reader may end up owing the IRS (W-4 / withholding topics).
// Server component, no client JS. One block per page, placed AFTER the calculator result and the explanation.
// Never use the advertiser name in titles, meta tags or headings (keeps trademark and brand-bidding rules safe).

const AWIN_BASE = 'https://www.awin1.com/cread.php?awinmid=130537&awinaffid=2898033';
const DESTINATION = 'https://www.communitytax.com';
const IRS_PAYMENT_PLANS = 'https://www.irs.gov/payments/payment-plans-installment-agreements';

// The placement id goes into Awin's clickref, so every placement is visible separately in the Awin report.
export function sponsoredTaxHelpUrl(placement: string): string {
  const ref = placement.toLowerCase().replace(/[^a-z0-9_-]/g, '').slice(0, 50) || 'pp';
  return `${AWIN_BASE}&clickref=${ref}&ued=${encodeURIComponent(DESTINATION)}`;
}

// v2-wrapper: standalone pages pass nothing (dark band behind the card); pages that already have a container pass wrap={false}.
export default function SponsoredTaxHelp({ placement, wrap = true }: { placement: string; wrap?: boolean }) {
  const card = (
    <aside
      aria-label="Sponsored"
      style={{ maxWidth: 820, margin: '32px auto', padding: '20px 22px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(245,200,66,0.28)', borderRadius: 12, color: '#B8D0EE', fontSize: 14, lineHeight: 1.7 }}
    >
      <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#90B4D0', marginBottom: 6 }}>Sponsored</div>
      <h2 style={{ fontSize: 18, fontWeight: 800, color: '#F5C842', margin: '0 0 10px' }}>Owe the IRS more than you can pay?</h2>
      <p style={{ margin: '0 0 10px' }}>
        If you owe the IRS, you can contact the IRS directly about payment plans and other relief:{' '}
        <a href={IRS_PAYMENT_PLANS} target="_blank" rel="noopener noreferrer" style={{ color: '#F5C842', textDecoration: 'underline' }}>IRS payment plans</a>.
        Some taxpayers prefer professional help. Community Tax, a private company that is not part of the IRS, offers a free consultation to explain your options, and paid services may follow.
      </p>
      <p style={{ margin: '0 0 14px', fontSize: 12.5, color: '#90B4D0' }}>
        <strong style={{ color: '#B8D0EE' }}>Advertising disclosure:</strong> PrivatePaycheck may earn a commission if you become a Community Tax customer through the link below. This is not an endorsement or tax advice, and PrivatePaycheck does not provide tax-resolution services.
      </p>
      <a
        href={sponsoredTaxHelpUrl(placement)}
        target="_blank"
        rel="sponsored noopener noreferrer"
        style={{ display: 'inline-block', background: '#F5C842', color: '#091526', fontWeight: 800, fontSize: 14, padding: '11px 20px', borderRadius: 8, textDecoration: 'none' }}
      >
        See Community Tax&apos;s free consultation →
      </a>
      <span style={{ marginLeft: 10, fontSize: 12, color: '#90B4D0' }}>(sponsored link)</span>
    </aside>
  );
  return wrap ? <div style={{ background: '#07111F', padding: '8px 16px 36px' }}>{card}</div> : card;
}
