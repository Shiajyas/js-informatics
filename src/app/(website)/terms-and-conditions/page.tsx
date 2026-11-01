import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { FileText, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms and Conditions | JS Informatics Thrissur",
  description:
    "Standard terms of service, installation warranties, hardware procurement guidelines, and Annual Maintenance Contracts for JS Informatics in Thrissur, Kerala.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col w-full bg-[#F5F8FC] min-h-screen py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-10 shadow-xs space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6F0FA] text-xs font-semibold text-[#0B2D5B] mb-3">
            <FileText className="w-3.5 h-3.5 text-[#00AEEF]" />
            <span>Service Agreements & Policies</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B2D5B]">
            Terms and Conditions
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Last Updated: November 2026 • JS Informatics, Thrissur, Kerala, India
          </p>
        </div>

        <div className="prose prose-slate text-xs sm:text-sm leading-relaxed space-y-6 text-[#1F2937]">
          <section className="space-y-2">
            <h2 className="text-base font-heading font-bold text-[#0B2D5B]">1. Scope of Services</h2>
            <p>
              These Terms and Conditions govern the provision of technology solutions by <strong>JS Informatics</strong> (&ldquo;Company&rdquo;), including electronic CCTV surveillance installation, structured LAN cabling, wireless networking, computer hardware repair, systems software support, and commercial IT maintenance services across Thrissur and Central Kerala.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-heading font-bold text-[#0B2D5B]">2. Quotations & Pricing</h2>
            <p>
              All hardware and project quotations issued by JS Informatics are itemized estimates based on site assessment measurements and current equipment distribution prices:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-[#64748B]">
              <li>Quotations remain valid for 15 calendar days from the date of issuance due to fluctuating hardware and copper cabling market prices.</li>
              <li>Actual cable meters consumed during physical conduit pull will be reconciled based on physical site measurements.</li>
              <li>Prices quoted do not cover concealed civil or masonry cutting unless expressly agreed in the written scope of work.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-heading font-bold text-[#0B2D5B]">3. Equipment Warranties & Genuine Parts</h2>
            <p>
              All brand-new hardware components (CCTV cameras, NVRs/DVRs, hard drives, network switches, and access points) carry official manufacturer warranties provided by their respective brands:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-[#64748B]">
              <li>JS Informatics facilitates warranty claims through verified authorized service centers in Kerala for equipment supplied by us.</li>
              <li>Warranties do not cover damage caused by physical impact, lightning strikes, severe electrical surges, moisture ingress from unapproved customer tampering, or rodent damage.</li>
              <li>We strongly recommend utilizing adequate surge protection and uninterruptible power supplies (UPS) to protect sensitive microelectronics from erratic grid voltages.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-heading font-bold text-[#0B2D5B]">4. Legitimate Software Practices</h2>
            <p>
              JS Informatics adheres strictly to legal software licensing standards. We do not distribute, install, or activate pirated software, cracked operating system modifications, or illicit activation tools. Customers are responsible for possessing legitimate operating system and application licenses.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-heading font-bold text-[#0B2D5B]">5. Annual Maintenance Contracts (AMC)</h2>
            <p>
              AMC agreements entered into with commercial clients cover scheduled preventive maintenance and priority troubleshooting response. Unless otherwise contracted in a comprehensive agreement, replacement hardware components and third-party consumable parts are billed separately at actuals.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-heading font-bold text-[#0B2D5B]">6. Jurisdiction</h2>
            <p>
              Any disputes or legal proceedings arising in connection with services rendered shall be subject to the exclusive jurisdiction of the competent courts in Thrissur, Kerala, India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
