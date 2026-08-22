import os
cities = ["New-York-City", "Los-Angeles", "Houston", "Philadelphia", "San-Antonio", "Jacksonville", "Fort-Worth", "San-Jose", "San-Francisco", "Columbus", "Charlotte", "Indianapolis", "Seattle", "Denver", "Washington-DC", "Boston", "El-Paso", "Nashville", "Detroit", "Oklahoma-City"]
template = '''import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Salary & Paycheck Calculator [C] 2026 ★ ✓",
  description: "Calculate your net take-home pay in [C] for 2026. ✓ 100% Private.",
  alternates: { canonical: "https://www.privatepaycheck.com/salary-in-[S]" }
};
export default function Page( ) {
  return (
    <div style={{ background: "#091526", color: "#B8D0EE", minHeight: "100vh", padding: "60px 20px", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "38px", fontWeight: 900, color: "#fff", marginBottom: "20px" }}>★ Salary in [C] 2026</h1>
        <div style={{ background: "rgba(245,200,66,0.06)", border: "1px solid rgba(245,200,66,0.2)", borderRadius: "14px", padding: "40px", marginBottom: "40px", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
          <p style={{ fontSize: "20px", lineHeight: 1.7, marginBottom: "30px" }}>Find out your real income in <strong>[C]</strong> after all taxes.</p>
          <a href="/" className="btn-3d-gold" style={{ display: "inline-block", textDecoration: "none" }}>Calculate [C] Paycheck ➔</a>
        </div>
      </div>
    </div>
  );
}'''
for c in cities:
    slug = c.lower()
    os.makedirs(f"src/app/salary-in-{slug}", exist_ok=True)
    with open(f"src/app/salary-in-{slug}/page.tsx", "w", encoding="utf-8") as f:
        f.write(template.replace("[C]", c.replace("-"," ")).replace("[S]", slug))
