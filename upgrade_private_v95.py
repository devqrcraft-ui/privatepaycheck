import os
# 1. Додаємо 3D CSS
css_path = 'src/app/globals.css'
css_code = """
.btn-3d-gold {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  background: linear-gradient(180deg, #F5C842 0%, #C9A84C 100%);
  color: #091526 !important;
  font-weight: 800;
  border-radius: 10px;
  border: 1px solid #FFD700;
  box-shadow: 0 5px 0 #8a6d00, 0 10px 20px rgba(0,0,0,0.3);
  transition: all 0.1s ease;
  cursor: pointer;
  text-transform: uppercase;
}
.btn-3d-gold:hover { transform: translateY(-3px); box-shadow: 0 8px 0 #8a6d00, 0 15px 25px rgba(245,200,66,0.4); }
.btn-3d-gold:active { transform: translateY(2px); box-shadow: 0 2px 0 #8a6d00; }
"""
if os.path.exists(css_path):
    with open(css_path, 'a', encoding='utf-8') as f: f.write(css_code)

# 2. Генеруємо 50 професій
profs = ["Software-Engineer","Registered-Nurse","Truck-Driver","Project-Manager","Data-Analyst","Sales-Manager","Accountant","Teacher","Electrician","Plumber","Real-Estate-Agent","Graphic-Designer","Marketing-Manager","HR-Manager","Financial-Advisor","Civil-Engineer","Mechanical-Engineer","Electrical-Engineer","Physician-Assistant","Pharmacist","Physical-Therapist","Occupational-Therapist","Speech-Language-Pathologist","Web-Developer","App-Developer","UX-Designer","Product-Designer","Content-Writer","SEO-Specialist","Social-Media-Manager","Digital-Marketer","Business-Analyst","Operations-Manager","Executive-Assistant","Customer-Success-Manager","Dental-Hygienist","Medical-Assistant","Phlebotomist","Veterinary-Technician","Paralegal","Legal-Secretary","Court-Reporter","Police-Officer","Firefighter","EMT","Paramedic","Flight-Attendant","Pilot","Construction-Manager","Architect"]
template = '''import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "[P] Salary & Tax Calculator 2026 ★ ✓ Private",
  description: "Calculate take-home pay for [P] in 2026. ✓ 100% Private.",
  alternates: { canonical: "https://www.privatepaycheck.com/salary-for-[S]" }
};
export default function Page( ) {
  return (
    <div style={{ background: "#091526", color: "#B8D0EE", minHeight: "100vh", padding: "60px 20px", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "38px", fontWeight: 900, color: "#fff", marginBottom: "20px" }}>★ [P] Salary & Tax 2026</h1>
        <div style={{ background: "rgba(245,200,66,0.06)", border: "1px solid rgba(245,200,66,0.2)", borderRadius: "14px", padding: "40px", marginBottom: "40px" }}>
          <p style={{ fontSize: "20px", lineHeight: 1.7, marginBottom: "30px" }}>See exactly how much a <strong>[P]</strong> takes home in 2026.</p>
          <a href="/" className="btn-3d-gold" style={{ display: "inline-block", textDecoration: "none" }}>Calculate My Paycheck ➔</a>
        </div>
        <p style={{fontSize:"12px"}}>Powered by <a href="https://www.gigwisetax.com" style={{color:"#F5C842"}}>GigWiseTax</a></p>
      </div>
    </div>
   );
}'''
for p in profs:
    slug = p.lower().replace(" ","-")
    os.makedirs(f"src/app/salary-for-{slug}", exist_ok=True)
    with open(f"src/app/salary-for-{slug}/page.tsx", "w", encoding="utf-8") as f:
        f.write(template.replace("[P]", p.replace("-"," ")).replace("[S]", slug))
