// src/app/page.tsx
import Calculator from "./components/Calculator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paycheck Calculator 2026 — Free Federal & State Tax Calculator",
  description:
    "Calculate your exact take-home pay for 2026. Includes federal income tax, FICA (Social Security + Medicare), and all 50 state income taxes. Free, private, instant.",
  keywords: [
    "paycheck calculator 2026",
    "take home pay calculator",
    "salary calculator",
    "federal tax calculator",
    "net pay calculator",
  ],
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Calculator />
    </main>
  );
}
