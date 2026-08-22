import os
# 1. Додаємо 3D CSS
css_path = 'src/app/globals.css'
with open(css_path, 'a', encoding='utf-8') as f:
    f.write('\n/* 3D UI v80 */\n.btn-3d-gold{position:relative;display:inline-flex;align-items:center;padding:12px 24px;background:linear-gradient(180deg,#F5C842 0%,#C9A84C 100%);color:#091526!important;font-weight:800;border-radius:8px;border:1px solid #FFD700;box-shadow:0 4px 0 #8a6d00,0 8px 15px rgba(0,0,0,0.3);transition:all .1s;cursor:pointer;text-transform:uppercase}\n.btn-3d-gold:hover{transform:translateY(-3px);box-shadow:0 7px 0 #8a6d00,0 12px 20px rgba(245,200,66,0.4)}\n.btn-3d-gold:active{transform:translateY(2px);box-shadow:0 2px 0 #8a6d00}\n')

# 2. Генеруємо 50 професій
profs = ["Software-Engineer","Registered-Nurse","Truck-Driver","Project-Manager","Data-Analyst","Sales-Manager","Accountant","Teacher","Electrician","Plumber","Real-Estate-Agent","Graphic-Designer","Marketing-Manager","HR-Manager","Financial-Advisor","Civil-Engineer","Mechanical-Engineer","Electrical-Engineer","Physician-Assistant","Pharmacist","Physical-Therapist","Occupational-Therapist","Speech-Language-Pathologist","Web-Developer","App-Developer","UX-Designer","Product-Designer","Content-Writer","SEO-Specialist","Social-Media-Manager","Digital-Marketer","Business-Analyst","Operations-Manager","Executive-Assistant","Customer-Success-Manager","Dental-Hygienist","Medical-Assistant","Phlebotomist","Veterinary-Technician","Paralegal","Legal-Secretary","Court-Reporter","Police-Officer","Firefighter","EMT","Paramedic","Flight-Attendant","Pilot","Construction-Manager","Architect"]
template = 'import React from "react";\nimport {{ Metadata }} from "next";\nexport const metadata: Metadata = {{ title: "{p} Salary 2026 ★ ✓ Private", description: "Calculate {p} pay." }};\nexport default function Page() {{ return <div style={{background:"#091526",color:"#fff",padding:"60px",minHeight:"100vh"}}><h1 style={{fontSize:"40px"}}>★ {p} Salary 2026</h1><a href="/" className="btn-3d-gold">Calculate Pay ➔</a></div> }}'
for p in profs:
    slug = p.lower()
    os.makedirs(f"src/app/salary-for-{slug}", exist_ok=True)
    with open(f"src/app/salary-for-{slug}/page.tsx", "w", encoding="utf-8") as f: f.write(template.format(p=p.replace("-"," ")))
