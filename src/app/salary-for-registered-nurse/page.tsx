import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Registered Nurse Salary & Tax Calculator 2026 ★ ✓ Private",
  description: "Calculate take-home pay for Registered Nurse in 2026. ✓ 100% Private.",
  alternates: { canonical: "https://www.privatepaycheck.com/salary-for-registered-nurse" }
};
export default function Page( ) {
  return (
    <div style={{ background: "#091526", color: "#B8D0EE", minHeight: "100vh", padding: "60px 20px", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "38px", fontWeight: 900, color: "#fff", marginBottom: "20px" }}>★ Registered Nurse Salary & Tax 2026</h1>
        <div style={{ background: "rgba(245,200,66,0.06)", border: "1px solid rgba(245,200,66,0.2)", borderRadius: "14px", padding: "40px", marginBottom: "40px" }}>
          <p style={{ fontSize: "20px", lineHeight: 1.7, marginBottom: "30px" }}>See exactly how much a <strong>Registered Nurse</strong> takes home in 2026.</p>
          <a href="/" className="btn-3d-gold" style={{ display: "inline-block", textDecoration: "none" }}>Calculate My Paycheck ➔</a>
        </div>
        <p style={{fontSize:"12px"}}>Powered by <a href="https://www.gigwisetax.com" style={{color:"#F5C842"}}>GigWiseTax</a></p>
      </div>
    </div>
   );
}