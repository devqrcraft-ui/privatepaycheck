import React from "react";

interface StatItem {
  label: string;
  value: string;
  sublabel?: string;
}

interface StatHighlightCardsProps {
  stats: StatItem[];
}

export default function StatHighlightCards({ stats }: StatHighlightCardsProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
        gap: "12px",
        margin: "24px 0",
      }}
    >
      {stats.map((stat, i) => (
        <div
          key={i}
          style={{
            background: "rgba(245, 200, 66, 0.08)",
            border: "1px solid rgba(245, 200, 66, 0.25)",
            borderRadius: "12px",
            padding: "16px 14px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "clamp(22px, 6vw, 32px)",
              fontWeight: 900,
              color: "#F5C842",
              lineHeight: 1.1,
              marginBottom: "4px",
              wordBreak: "break-word",
            }}
          >
            {stat.value}
          </div>
          <div
            style={{
              fontSize: "12px",
              color: "rgba(255,255,255,0.65)",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              fontWeight: 700,
            }}
          >
            {stat.label}
          </div>
          {stat.sublabel && (
            <div
              style={{
                fontSize: "11px",
                color: "rgba(255,255,255,0.4)",
                marginTop: "4px",
              }}
            >
              {stat.sublabel}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
