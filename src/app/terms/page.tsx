import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | PrivatePaycheck',
  description: 'PrivatePaycheck terms of service. Free paycheck calculator for informational purposes.',
  alternates: { canonical: 'https://www.privatepaycheck.com/terms' },
};

export default function Terms() {
  return (
    <main style={{ minHeight:'100vh', background:'#091526', color:'white', fontFamily:'system-ui,sans-serif' }}>

      <div style={{ maxWidth:'740px', margin:'0 auto', padding:'40px 16px' }}>
        <h1 style={{ fontSize:'clamp(24px,4vw,40px)', fontWeight:900, margin:'0 0 8px' }}>Terms of Service</h1>
        <p style={{ opacity: 0.8, fontSize:'13px', marginBottom:'40px' }}>Last updated: February 27, 2026</p>

        <div style={{ display:'flex', flexDirection:'column', gap:'32px', fontSize:'15px', lineHeight:1.8, opacity:0.85 }}>

          <section>
            <h2 style={{ fontSize:'20px', fontWeight:800, color:'#818cf8', marginBottom:'12px' }}>1. Acceptance of Terms</h2>
            <p>By using PrivatePaycheck.com ("the Site"), you agree to these Terms of Service. If you do not agree, please do not use the Site. These terms apply to all visitors and users.</p>
          </section>

          <section>
            <h2 style={{ fontSize:'20px', fontWeight:800, marginBottom:'12px' }}>2. Informational Purpose Only</h2>
            <p>PrivatePaycheck provides paycheck and tax calculations for <strong>informational and educational purposes only</strong>. The results are estimates based on standard tax rules and are not legal, tax, or financial advice.</p>
            <p style={{ marginTop:'8px' }}>Calculator results may differ from your actual paycheck due to:</p>
            <ul style={{ paddingLeft:'20px', marginTop:'8px', display:'flex', flexDirection:'column', gap:'6px' }}>
              <li>Employer-specific deductions not accounted for</li>
              <li>Local city or county taxes</li>
              <li>Tax credits, itemized deductions, or special circumstances</li>
              <li>Mid-year tax law changes</li>
              <li>Different pay period calculations used by your employer</li>
            </ul>
            <p style={{ marginTop:'12px' }}>For official tax advice, consult a licensed CPA or tax professional. For official withholding amounts, use the IRS Tax Withholding Estimator at irs.gov.</p>
          </section>

          <section>
            <h2 style={{ fontSize:'20px', fontWeight:800, marginBottom:'12px' }}>3. No Warranty</h2>
            <p>The Site is provided "as is" without warranties of any kind, express or implied. We do not warrant that calculator results are accurate, complete, or suitable for any particular purpose. Tax laws change frequently — always verify with official sources.</p>
          </section>

          <section>
            <h2 style={{ fontSize:'20px', fontWeight:800, marginBottom:'12px' }}>4. Limitation of Liability</h2>
            <p>PrivatePaycheck and its operators shall not be liable for any damages arising from your use of or reliance on calculator results. This includes but is not limited to financial losses, tax penalties, or errors in payroll decisions made based on our estimates.</p>
          </section>

          <section>
            <h2 style={{ fontSize:'20px', fontWeight:800, marginBottom:'12px' }}>5. Intellectual Property</h2>
            <p>All content on this Site — including text, code, design, and calculator logic — is the property of PrivatePaycheck. You may not reproduce, distribute, or create derivative works without written permission.</p>
          </section>

          <section>
            <h2 style={{ fontSize:'20px', fontWeight:800, marginBottom:'12px' }}>6. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul style={{ paddingLeft:'20px', marginTop:'8px', display:'flex', flexDirection:'column', gap:'6px' }}>
              <li>Scrape, crawl, or copy content from the Site in bulk</li>
              <li>Attempt to reverse-engineer or copy our calculator logic for commercial use</li>
              <li>Use the Site in any way that violates applicable laws</li>
              <li>Interfere with the Site's functionality or security</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize:'20px', fontWeight:800, marginBottom:'12px' }}>7. External Links</h2>
            <p>The Site may contain links to external websites (IRS, state tax agencies, etc.). We are not responsible for the content or privacy practices of those sites.</p>
          </section>

          <section>
            <h2 style={{ fontSize:'20px', fontWeight:800, marginBottom:'12px' }}>8. Changes to Terms</h2>
            <p>We reserve the right to update these terms at any time. The "Last updated" date above will reflect any changes. Continued use of the Site constitutes acceptance of the updated terms.</p>
          </section>

          <section>
            <h2 style={{ fontSize:'20px', fontWeight:800, marginBottom:'12px' }}>9. Governing Law</h2>
            <p>These terms are governed by the laws of the United States. Any disputes shall be resolved in accordance with applicable US federal and state law.</p>
          </section>

          <section>
            <h2 style={{ fontSize:'20px', fontWeight:800, marginBottom:'12px' }}>10. Contact</h2>
            <p>Questions about these terms? Contact us at: <span style={{ color:'#818cf8' }}>legal@privatepaycheck.com</span></p>
          </section>

        </div>
      </div>

      <footer style={{ textAlign:'center', padding:'24px', fontSize:'12px', opacity:0.8 borderTop:'1px solid rgba(255,255,255,0.06)', marginTop:'40px' }}>
        © 2026 PrivatePaycheck.com ·{' '}
        <Link href="/privacy-policy" style={{ color:'inherit' }}>Privacy Policy</Link> ·{' '}
        <Link href="/terms" style={{ color:'inherit' }}>Terms</Link>
      </footer>
    </main>
  );
}
