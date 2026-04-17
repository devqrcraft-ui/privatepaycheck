interface Props {
  state: string;
  items: string[];
}

export default function FreshnessBar({ state, items }: Props) {
  return (
    <div style={{
      background: 'rgba(16,185,129,0.07)',
      border: '1px solid rgba(16,185,129,0.3)',
      borderRadius: 10,
      padding: '12px 16px',
      marginBottom: 24,
      marginTop: 4,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
        <span style={{ fontSize: 11, fontWeight: 800, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          Updated April 2026
        </span>
        <span style={{ fontSize: 11, color: '#4ade80', background: 'rgba(74,222,128,0.12)', borderRadius: 4, padding: '1px 6px' }}>
          {state}
        </span>
      </div>
      <ul style={{ margin: 0, padding: '0 0 0 16px', display: 'flex', flexDirection: 'column', gap: 3 }}>
        {items.map((item, i) => (
          <li key={i} style={{ fontSize: 13, color: '#a7f3d0', lineHeight: 1.5 }}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
