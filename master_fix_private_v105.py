import os
# 1. Caching & Security
with open('vercel.json', 'w') as f:
    f.write('{"headers":[{"source":"/(.*)","headers":[{"key":"X-Content-Type-Options","value":"nosniff"}]},{"source":"/_next/static/(.*)","headers":[{"key":"Cache-Control","value":"public, max-age=31536000, immutable"}]}]}')
# 2. Footer Interlinking
path = 'src/components/Footer.tsx'
if os.path.exists(path):
    with open(path, 'r', encoding='utf-8') as f: c = f.read()
    if 'Sister Tools' not in c:
        interlink = '\n        <div style={{marginTop:20,paddingTop:20,borderTop:"1px solid rgba(255,255,255,0.1)"}}>\n          <span style={{color:"#e8b84b",fontWeight:800,marginRight:15}}>★ TAX NETWORK:</span>\n          <a href="https://www.gigwisetax.com" style={{color:"#fff",marginRight:20}}>GigWiseTax ➔</a>\n          <a href="https://www.compressto20kb.com" style={{color:"#fff"}}>CompressTo20KB ➔</a>\n        </div>'
        c = c.replace('</footer>', interlink + '\n      </footer>' )
        with open(path, 'w', encoding='utf-8') as f: f.write(c)
