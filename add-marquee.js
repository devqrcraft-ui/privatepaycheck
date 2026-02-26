const fs = require('fs');
const marquee = `<div style={{overflow:'hidden',background:'linear-gradient(90deg,#4f46e5,#7c3aed)',padding:'10px 0'}}><style>{('@keyframes marquee{0%{transform:translateX(100%)}100%{transform:translateX(-100%)}}')}</style><div style={{display:'inline-block',whiteSpace:'nowrap',animation:'marquee 28s linear infinite',fontSize:'13px',color:'white',opacity:0.95}}>🔒 Your salary data NEVER leaves your browser &nbsp;·&nbsp; ⚡ Instant calculations &nbsp;·&nbsp; 🗺️ All 50 US States &nbsp;·&nbsp; 🆓 100% Free — no signup &nbsp;·&nbsp; 💼 Federal + State + FICA + 401k + HSA &nbsp;·&nbsp; 📱 Works on any device &nbsp;·&nbsp; 🔒 Your salary data NEVER leaves your browser &nbsp;·&nbsp; ⚡ Instant results</div></div>`;

['src/app/[state]/page.tsx','src/app/page.tsx'].forEach(f=>{
  let c=fs.readFileSync(f,'utf8');
  if(c.includes('marquee 28s')){console.log(f+': skip');return;}
  c=c.replace('</nav>','</nav>'+marquee);
  if(f==='src/app/page.tsx') c=c.replace("clamp(28px,5vw,52px)","clamp(36px,6vw,68px)");
  fs.writeFileSync(f,c);
  console.log(f+': done');
});
