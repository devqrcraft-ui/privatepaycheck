import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Salary & Paycheck Calculator Charlotte 2026 ★ ✓",
  description: "Calculate your net take-home pay in Charlotte for 2026. ✓ 100% Private.",
  alternates: { canonical: "https://www.privatepaycheck.com/salary-in-charlotte" }
};
export default function Page( ) {
  return (
    <div style={{ background: "#091526", color: "#B8D0EE", minHeight: "100vh", padding: "60px 20px", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "38px", fontWeight: 900, color: "#fff", marginBottom: "20px" }}>★ Salary in Charlotte 2026</h1>
        <div style={{ background: "rgba(245,200,66,0.06)", border: "1px solid rgba(245,200,66,0.2)", borderRadius: "14px", padding: "40px", marginBottom: "40px", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
          <p style={{ fontSize: "20px", lineHeight: 1.7, marginBottom: "30px" }}>Find out your real income in <strong>Charlotte</strong> after all taxes.</p>
          <a href="/" className="btn-3d-gold" style={{ display: "inline-block", textDecoration: "none" }}>Calculate Charlotte Paycheck ➔</a>
        </div>
      </div>
    </div>
  );
}