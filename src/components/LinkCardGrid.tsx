'use client';

type LinkItem = [string, string]; // [href, label]

export default function LinkCardGrid({
  title,
  links,
  minCardWidth = 150,
}: {
  title?: string;
  links: LinkItem[];
  minCardWidth?: number;
}) {
  return (
    <div>
      {title && (
        <div style={{ fontWeight: 800, fontSize: 'clamp(16px, 3vw, 18px)', color: '#e8edf8', marginBottom: 16 }}>
          {title}
        </div>
      )}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fit, minmax(${minCardWidth}px, 1fr))`,
          gap: 12,
        }}
      >
        {links.map(([href, label]) => (
          
          <a
            key={href}
            href={href}
            className="link-card-grid-item"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              minHeight: 56,
              padding: '14px 16px',
              borderRadius: 10,
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: '#f0f4fa',
              textDecoration: 'none',
              fontSize: 'clamp(14px, 3.2vw, 15px)',
              fontWeight: 700,
              transition: 'background 0.18s ease, border-color 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease',
            }}
          >
            {label}
          </a>
        ))}
      </div>
      <style>{`
        .link-card-grid-item:hover {
          background: rgba(245,200,66,0.14) !important;
          border-color: rgba(245,200,66,0.5) !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(245,200,66,0.15);
        }
      `}</style>
    </div>
  );
}
