import os
path = 'src/components/Footer.tsx'
with open(path, 'r', encoding='utf-8') as f: content = f.read()

new_section = """<div>
            <div style={{fontSize:11,fontWeight:700,letterSpacing:".16em",textTransform:"uppercase",color:"#C9A84C",marginBottom:14}}>Sister Tools ➔</div>
            <a href="https://www.gigwisetax.com" className="foot-link" style={{color:'#F5DC80',fontWeight:700}}>GigWiseTax ➔</a>
            <a href="https://www.compressto20kb.com" className="foot-link" style={{color:'#F5DC80',fontWeight:700}}>Image Compressor ➔</a>
            <a href="https://www.1099deductions.com" className="foot-link" style={{color:'#F5DC80',fontWeight:700}}>1099 Deductions ➔</a>
          </div>"""
if 'Sister Tools' not in content:
    content = content.replace('<div>\n            <div style={{fontSize:11,fontWeight:700,letterSpacing:".16em",textTransform:"uppercase",color:"#C9A84C",marginBottom:14}}>Info</div>', new_section )

with open(path, 'w', encoding='utf-8') as f: f.write(content)
