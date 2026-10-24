import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'PrivatePaycheck privacy policy. Your salary data never leaves your browser — we collect no personal information.',
  alternates: { canonical: 'https://www.privatepaycheck.com/privacy-policy' },
};

export default function PrivacyPolicy() {
  return (
    <main style={{ minHeight:'100vh', background:'#091526', color:'white', fontFamily:'system-ui,sans-serif' }}>

      <div style={{ maxWidth:'740px', margin:'0 auto', padding:'40px 16px' }}>
        <h1 style={{ fontSize:'clamp(24px,4vw,40px)', fontWeight:900, margin:'0 0 8px' }}>Privacy Policy</h1>
        <p style={{ opacity: 0.8, fontSize:'13px', marginBottom:'40px' }}>Last updated: October 23, 2026</p>

        <div style={{ display:'flex', flexDirection:'column', gap:'32px', fontSize:'15px', lineHeight:1.8, opacity:0.85 }}>

          <section>
            <h2 style={{ fontSize:'20px', fontWeight:800, color:'#4ade80', marginBottom:'12px' }}>The Short Version</h2>
            <p>The PrivatePaycheck calculators do not collect, store, or transmit the salary, income, or other financial figures you enter: they run entirely in your browser using JavaScript. The optional PayCheck AI chat is different: the messages you type there are sent to our server and then to our AI provider, Groq, to generate a reply (see Third-Party Services below). Please do not type personal or financial identifiers into the chat.</p>
          </section>

          <section>
            <h2 style={{ fontSize:'20px', fontWeight:800, marginBottom:'12px' }}>What We Do Not Collect</h2>
            <ul style={{ paddingLeft:'20px', display:'flex', flexDirection:'column', gap:'8px' }}>
              <li>Salary or income figures you enter into the calculators (the optional chat is covered under Third-Party Services)</li>
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
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent</li>
              <li>Referring URL</li>
            </ul>
            <p style={{ marginTop:'12px' }}>This data is used solely for performance monitoring and security. It is never sold or shared with third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 style={{ fontSize:'20px', fontWeight:800, marginBottom:'12px' }}>Cookies</h2>
            <p>PrivatePaycheck uses no tracking cookies, advertising cookies, or third-party analytics cookies. We do not set cookies of our own. Vercel Web Analytics, which Vercel describes as cookie-free, counts page views in aggregate.</p>
          </section>

          <section>
            <h2 style={{ fontSize:'20px', fontWeight:800, marginBottom:'12px' }}>Third-Party Services</h2>
            <p>Our website is hosted on Vercel. Their privacy policy governs data processed through their infrastructure. We do not use Google Analytics, Facebook Pixel, or other behavioral tracking services. We use Vercel Web Analytics to count page views in aggregate. Some pages contain sponsored links to advertisers through the Awin affiliate network; if you click one, Awin and the advertiser may set their own cookies on their own sites, and we may earn a commission.</p><p style={{ marginTop:'8px' }}>PayCheck AI chat: if you use the optional chat, your last few messages (up to 6, each cut to 600 characters) are sent over HTTPS to our server and forwarded to Groq (groq.com), our AI provider, which generates the reply under its own privacy policy. We do not create accounts and do not intentionally store chat messages; our server only keeps a short-lived, in-memory request counter per IP address to limit abuse. Chat answers are general information and may be inaccurate; they are not tax advice.</p>
            <p style={{ marginTop:'8px' }}>If Google AdSense ads are displayed on this site in the future, Google may use cookies to serve relevant ads. You can opt out at <a href="https://www.google.com/settings/ads" style={{ color:'#818cf8' }} target="_blank" rel="noopener noreferrer">google.com/settings/ads</a>.</p>
          </section>

          <section>
            <h2 style={{ fontSize:'20px', fontWeight:800, marginBottom:'12px' }}>Data Security</h2>
            <p>Calculator inputs remain on your device and are not transmitted by the calculators. Chat messages travel over an encrypted HTTPS connection to our server and on to Groq, as described under Third-Party Services.</p>
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

      <footer style={{ textAlign:'center', padding:'24px', fontSize:'12px', opacity: 0.8, borderTop:'1px solid rgba(255,255,255,0.06)', marginTop:'40px' }}>
        © 2026 PrivatePaycheck.com ·{' '}
        <Link href="/privacy-policy" style={{ color:'inherit' }}>Privacy Policy</Link> ·{' '}
        <Link href="/terms" style={{ color:'inherit' }}>Terms</Link>
      </footer>
    </main>
  );
}
