import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Pharmacist Salary & Tax Calculator 2026 ★ ✓ 100% Private",
  description: "Calculate take-home pay for Pharmacist in 2026. ✓ Compare states ★ ✓ 100% Private.",
  alternates: { canonical: "https://www.privatepaycheck.com/salary-for-pharmacist" }
};
export default function Page( ) {
  return (
    <div style={{ background: "#091526", color: "#B8D0EE", minHeight: "100vh", padding: "60px 20px", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "36px", fontWeight: 900, color: "#fff", marginBottom: "20px" }}>Pharmacist Salary & Tax 2026 ★</h1>
        <div style={{ background: "rgba(245,200,66,0.06)", border: "1px solid rgba(245,200,66,0.2)", borderRadius: "12px", padding: "30px", marginBottom: "40px" }}>
          <p style={{ fontSize: "18px", lineHeight: 1.7, marginBottom: "24px" }}>See exactly how much a <strong>Pharmacist</strong> takes home in 2026.</p>
          <a href="/" className="btn-3d-gold" style={{ display: "inline-block", textDecoration: "none" }}>Calculate My Paycheck ➔</a>
        </div>
      </div>
    </div>
  );
}