"use client";
// app/components/Navbar.tsx

import { useState } from "react";

const navLinks = [
  {
    label: "Calculators",
    icon: "🧮",
    children: [
      { label: "Paycheck Calculator", href: "/", desc: "Federal + all 50 states" },
      { label: "Hourly Calculator", href: "/hourly", desc: "Convert hourly to salary" },
      { label: "Salary Calculator", href: "/salary", desc: "Annual take-home pay" },
      { label: "Bonus Tax Calculator", href: "/bonus", desc: "How much of your bonus you keep" },
      { label: "401(k) Calculator", href: "/401k", desc: "Retirement savings impact" },
    ],
  },
  {
    label: "By State",
    icon: "🗺️",
    children: [
      { label: "California", href: "/california-paycheck-calculator", desc: "Up to 13.3% state tax" },
      { label: "Texas", href: "/texas-paycheck-calculator", desc: "No state income tax 🟢" },
      { label: "New York", href: "/new-york-paycheck-calculator", desc: "Up to 10.9% state tax" },
      { label: "Florida", href: "/florida-paycheck-calculator", desc: "No state income tax 🟢" },
      { label: "Illinois", href: "/illinois-paycheck-calculator", desc: "Flat 4.95% state tax" },
      { label: "All 50 States →", href: "/states", desc: "" },
    ],
  },
  {
    label: "Learn",
    icon: "📚",
    children: [
      { label: "How to Read a Pay Stub", href: "/blog/how-to-read-your-pay-stub", desc: "Decode every line" },
      { label: "What is FICA Tax?", href: "/blog/what-is-fica-tax", desc: "Social Security + Medicare" },
      { label: "W-4 Form Guide 2026", href: "/blog/w4-form-guide-2026", desc: "Fill it out correctly" },
      { label: "Tax Brackets 2026", href: "/blog/tax-brackets-2026", desc: "Federal income tax rates" },
      { label: "How to Increase Take-Home Pay", href: "/blog/how-to-increase-take-home-pay", desc: "Smart strategies" },
    ],
  },
  {
    label: "Compare States",
    icon: "⚖️",
    href: "/compare",
  },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <a href="/" className="flex items-center gap-2 font-bold text-xl text-gray-900 hover:opacity-80 transition-opacity">
              <span className="text-2xl">💰</span>
              <span>PayCalc<span className="text-blue-600">2026</span></span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setOpenMenu(link.label)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    <button className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      openMenu === link.label
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}>
                      <span>{link.icon}</span>
                      {link.label}
                      <svg className={`w-3.5 h-3.5 transition-transform ${openMenu === link.label ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Dropdown */}
                    {openMenu === link.label && (
                      <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-lg border border-gray-100 py-2 overflow-hidden">
                        {link.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="flex flex-col px-4 py-2.5 hover:bg-blue-50 transition-colors group"
                          >
                            <span className="text-sm font-medium text-gray-800 group-hover:text-blue-600">{child.label}</span>
                            {child.desc && <span className="text-xs text-gray-400 mt-0.5">{child.desc}</span>}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                  >
                    <span>{link.icon}</span>
                    {link.label}
                  </a>
                )
              )}
            </div>

            {/* Right side */}
            <div className="hidden md:flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs text-green-600 bg-green-50 border border-green-100 rounded-full px-3 py-1.5 font-medium">
                <span>🔒</span>
                <span>100% Private</span>
              </div>
              <a
                href="/"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                Calculate Now
              </a>
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.children ? (
                  <>
                    <div className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      <span>{link.icon}</span> {link.label}
                    </div>
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                      >
                        {child.label}
                      </a>
                    ))}
                  </>
                ) : (
                  <a
                    href={link.href}
                    className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                  >
                    <span>{link.icon}</span> {link.label}
                  </a>
                )}
              </div>
            ))}
            <div className="pt-2 border-t border-gray-100">
              <a href="/" className="block w-full text-center bg-blue-600 text-white font-semibold py-2.5 rounded-lg text-sm">
                Calculate My Paycheck →
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
