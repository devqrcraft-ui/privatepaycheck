import type { Metadata } from 'next';
import Link from 'next/link';
import Calculator from '@/components/Calculator';
import { STATE_TAXES, STATE_SLUG_MAP } from '@/lib/taxRates2026';

export const dynamicParams = false;

export async function generateStaticParams() {
  return Object.keys(STATE_SLUG_MAP).map(s => ({ state: s + '-paycheck-calculator' }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state } = await params;
  const slug = state.replace('-paycheck-calculator', '');
  const code = STATE_SLUG_MAP[slug];
  const st = STATE_TAXES[code];
  if (!st) return { title: 'Paycheck Calculator' };
  return {
    title: st.name + ' Paycheck Calculator 2026 — Free & Private',
    description: 'Calculate take-home pay in ' + st.name + '. Federal + state taxes, FICA, 401k. Your data stays in browser.',
    alternates: { canonical: 'https://privatepaycheck.com/' + state },
  };
}

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params;
  const slug = state.replace('-paycheck-calculator', '');
  const code = STATE_SLUG_MAP[slug];
  const st = STATE_TAXES[code];
  if (!st) return <div>Not found</div>;
  const noTax = st.noTax === true;
  const rateStr = (st.rate * 100).toFixed(2) + '%';
  const homeHref = '/';
  return (
    <main style={{ minHeight:'100vh', background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color:'white', fontFamily:'system-ui,sans-serif' }}>
      <nav style={{ padding:'14px 24px', display:'flex', alignItems:'center', justifyContent:'space-between', borderBottom:'1px solid rgba(255,255,255,0.08)', background:'rgba(0,0,0,0.3)', position:'sticky', top:0, zIndex:100 }}>
        <Link href={homeHref} style={{ fontWeight:800, fontSize:'18px', color:'white', textDecoration:'none' }}>
          {'$ PrivatePaycheck'}
        </Link>
        <Link href={homeHref} style={{ color:'rgba(255,255,255,0.6)', fontSize:'13px', textDecoration:'none' }}>
          {'All States'}
        </Link>
      </nav><div style={{overflow:'hidden',background:'linear-gradient(90deg,#4f46e5,#7c3aed)',padding:'10px 0'}}><style>{('@keyframes marquee{0%{transform:translateX(100%)}100%{transform:translateX(-100%)}}')}</style><div style={{display:'inline-block',whiteSpace:'nowrap',animation:'marquee 28s linear infinite',fontSize:'13px',color:'white',opacity:0.95}}>🔒 Your salary data NEVER leaves your browser &nbsp;·&nbsp; ⚡ Instant calculations &nbsp;·&nbsp; 🗺️ All 50 US States &nbsp;·&nbsp; 🆓 100% Free — no signup &nbsp;·&nbsp; 💼 Federal + State + FICA + 401k + HSA &nbsp;·&nbsp; 📱 Works on any device &nbsp;·&nbsp; 🔒 Your salary data NEVER leaves your browser &nbsp;·&nbsp; ⚡ Instant results</div></div>
      <div style={{ maxWidth:'1000px', margin:'0 auto', padding:'40px 16px' }}>
        <div style={{ textAlign:'center', marginBottom:'40px' }}>
          {noTax && (
            <div style={{ display:'inline-block', background:'rgba(74,222,128,0.1)', border:'1px solid rgba(74,222,128,0.3)', borderRadius:'20px', padding:'6px 16px', fontSize:'13px', marginBottom:'16px', color:'#4ade80' }}>
              {st.name + ' has NO state income tax!'}
            </div>
          )}
          <h1 style={{ fontSize:'clamp(24px,4vw,44px)', fontWeight:900, margin:'0 0 12px' }}>
            {st.name + ' Paycheck Calculator 2026'}
          </h1>
          <p style={{ fontSize:'16px', opacity:0.65, maxWidth:'550px', margin:'0 auto', lineHeight:1.7 }}>
            {noTax ? st.name + ' residents pay no state income tax. Calculate your exact federal take-home pay.' : st.name + ' state income tax: ' + rateStr + '. Calculate your exact take-home pay.'}
          </p>
        </div>
        <Calculator defaultState={code} />
        <div style={{ marginTop:'40px', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'12px', padding:'24px' }}>
          <h2 style={{ fontSize:'18px', fontWeight:800, marginBottom:'16px' }}>{st.name + ' Tax Facts 2026'}</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))', gap:'12px', fontSize:'14px' }}>
            <div><span style={{ opacity:0.6 }}>{'State Tax: '}</span><strong>{noTax ? 'None' : rateStr}</strong></div>
            <div><span style={{ opacity:0.6 }}>{'Federal FICA: '}</span><strong>{'7.65%'}</strong></div>
            <div><span style={{ opacity:0.6 }}>{'SS Wage Cap: '}</span><strong>{'$168,600'}</strong></div>
          </div>
        </div>
      </div>
      <footer style={{ textAlign:'center', padding:'24px', fontSize:'12px', opacity:0.4, borderTop:'1px solid rgba(255,255,255,0.06)', marginTop:'40px' }}>
        {'2026 PrivatePaycheck.com'}
      </footer>
    </main>
  );
}