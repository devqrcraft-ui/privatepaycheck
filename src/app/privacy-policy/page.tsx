import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | PrivatePaycheck',
  description: 'PrivatePaycheck privacy policy. Your salary data never leaves your browser — we collect no personal information.',
  alternates: { canonical: 'https://www.privatepaycheck.com/privacy-policy' },
};

export default function PrivacyPolicy() {
  return (
    <main style={{ minHeight:'100vh', background:'#091526', color:'white', fontFamily:'system-ui,sans-serif' }}>

      <div style={{ maxWidth:'740px', margin:'0 auto', padding:'40px 16px' }}>
        <h1 style={{ fontSize:'clamp(24px,4vw,40px)', fontWeight:900, margin:'0 0 8px' }}>Privacy Policy</h1>
        <p style={{ opacity: 0.8, fontSize:'13px', marginBottom:'40px' }}>Last updated: February 27, 2026</p>

        <div style={{ display:'flex', flexDirection:'column', gap:'32px', fontSize:'15px', lineHeight:1.8, opacity:0.85 }}>

          <section>
            <h2 style={{ fontSize:'20px', fontWeight:800, color:'#4ade80', marginBottom:'12px' }}>The Short Version</h2>
            <p>PrivatePaycheck does not collect, store, or transmit your salary, income, or any personal financial data. All calculations happen entirely in your browser using JavaScript. Nothing is sent to our servers.</p>
          </section>

          <section>
            <h2 style={{ fontSize:'20px', fontWeight:800, marginBottom:'12px' }}>What We Do Not Collect</h2>
            <ul style={{ paddingLeft:'20px', display:'flex', flexDirection:'column', gap:'8px' }}>
              <li>Salary or income information you enter into calculators</li>
              <li>Tax filing status or deduction amounts</li>
              <li>Name, email, or any account information (no accounts exist)</li>
              <li>Social Security numbers or tax IDs</li>
              <li>Payment or financial account information</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize:'20px', fontWeight:800, marginBottom:'12px' }}>What We Do Collect</h2>
            <p>Like all websites, our hosting provider (Vercel) automatically logs standard web server data:</p>
            <ul style={{ paddingLeft:'20px', display:'flex', flexDirection:'column', gap:'8px', marginTop:'8px' }}>
              <li>IP address (anonymized)</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent</li>
              <li>Referring URL</li>
            </ul>
            <p style={{ marginTop:'12px' }}>This data is used solely for performance monitoring and security. It is never sold or shared with third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 style={{ fontSize:'20px', fontWeight:800, marginBottom:'12px' }}>Cookies</h2>
            <p>PrivatePaycheck uses no tracking cookies, advertising cookies, or third-party analytics cookies. We may use a single session cookie for basic site functionality (such as remembering your state selection). This cookie contains no personal information and expires when you close your browser.</p>
          </section>

          <section>
            <h2 style={{ fontSize:'20px', fontWeight:800, marginBottom:'12px' }}>Third-Party Services</h2>
            <p>Our website is hosted on Vercel. Their privacy policy governs data processed through their infrastructure. We do not use Google Analytics, Facebook Pixel, or other behavioral tracking services.</p>
            <p style={{ marginTop:'8px' }}>If Google AdSense ads are displayed on this site in the future, Google may use cookies to serve relevant ads. You can opt out at <a href="https://www.google.com/settings/ads" style={{ color:'#818cf8' }} target="_blank" rel="noopener noreferrer">google.com/settings/ads</a>.</p>
          </section>

          <section>
            <h2 style={{ fontSize:'20px', fontWeight:800, marginBottom:'12px' }}>Data Security</h2>
            <p>Because we do not collect personal financial data, there is no sensitive data to protect on our end. All calculator inputs remain on your device and are never transmitted over the internet.</p>
          </section>

          <section>
            <h2 style={{ fontSize:'20px', fontWeight:800, marginBottom:'12px' }}>Children's Privacy</h2>
            <p>PrivatePaycheck is a general-purpose financial calculator tool. We do not knowingly collect any information from children under 13. The site contains no features directed at children.</p>
          </section>

          <section>
            <h2 style={{ fontSize:'20px', fontWeight:800, marginBottom:'12px' }}>Changes to This Policy</h2>
            <p>We may update this privacy policy occasionally. Changes will be reflected by updating the "Last updated" date above. Continued use of the site after changes constitutes acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 style={{ fontSize:'20px', fontWeight:800, marginBottom:'12px' }}>Contact</h2>
            <p>Questions about this privacy policy? Contact us at: <span style={{ color:'#818cf8' }}>kalkulator018@gmail.com</span></p>
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
