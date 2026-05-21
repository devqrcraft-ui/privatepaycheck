// AUTHOR-BOX:START
export default function AuthorBox() {
  return (
    <div
      itemScope
      itemType="https://schema.org/Person"
      style={{
        display:'flex', alignItems:'flex-start', gap:16,
        background:'rgba(245,200,66,0.06)',
        border:'1px solid rgba(245,200,66,0.2)',
        borderRadius:10, padding:'20px 24px', marginTop:32
      }}
    >
      <div style={{
        width:52, height:52, borderRadius:'50%', flexShrink:0,
        background:'rgba(245,200,66,0.15)',
        display:'flex', alignItems:'center', justifyContent:'center',
        fontWeight:800, fontSize:18, color:'#F5C842'
      }}>EB</div>
      <div>
        <div style={{fontSize:11, fontWeight:600, color:'rgba(232,237,248,0.6)', textTransform:'uppercase' as const, letterSpacing:'0.08em', marginBottom:4}}>
          Written & reviewed by
        </div>
        <div style={{fontWeight:700, color:'#e8edf8', fontSize:15, marginBottom:2}} itemProp="name">
          Ethan Blake
        </div>
        <div style={{fontSize:12, color:'rgba(255,255,255,0.5)', marginBottom:8}} itemProp="jobTitle">
          Tax Compliance Specialist · Since 2017
        </div>
        <p style={{margin:'0 0 10px', fontSize:13, color:'rgba(255,255,255,0.75)', lineHeight:1.7}} itemProp="description">
          {'Helped 5,000+ freelancers navigate IRS rules. Specializes in payroll and W-2 income taxation.'}
        </p>
        <div style={{display:'flex', gap:16, flexWrap:'wrap' as const}}>
          <a
            href="https://medium.com/@dev.qrcraft"
            rel="nofollow"
            target="_blank"
            style={{fontSize:12, color:'#F5C842', textDecoration:'none'}}
            itemProp="url"
          >
            Medium Profile
          </a>
          <a
            href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center"
            rel="nofollow"
            target="_blank"
            style={{fontSize:12, color:'rgba(255,255,255,0.5)', textDecoration:'none'}}
          >
            IRS.gov Source
          </a>
          <a
            href="/blog"
            style={{fontSize:12, color:'rgba(255,255,255,0.5)', textDecoration:'none'}}
          >
            All articles by Ethan Blake →
          </a>
        </div>
      </div>
    </div>
  )
}
// AUTHOR-BOX:END
