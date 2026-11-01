import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy | JS Informatics Thrissur",
  description:
    "Privacy Policy for JS Informatics. Our strict commitments on customer data, credential protection, and ethical IT service practices in Thrissur, Kerala.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col w-full bg-[#F5F8FC] min-h-screen py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-10 shadow-xs space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6F0FA] text-xs font-semibold text-[#0B2D5B] mb-3">
            <Lock className="w-3.5 h-3.5 text-[#00AEEF]" />
            <span>Customer Security & Trust</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B2D5B]">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Last Updated: November 2026 • JS Informatics, Thrissur, Kerala, India
          </p>
        </div>

        <div className="prose prose-slate text-xs sm:text-sm leading-relaxed space-y-6 text-[#1F2937]">
          <section className="space-y-2">
            <h2 className="text-base font-heading font-bold text-[#0B2D5B]">1. Overview & Commitment</h2>
            <p>
              At <strong>JS Informatics</strong>, we provide security, connectivity, and IT solutions for homes and businesses across Thrissur and Central Kerala. We recognize the sensitive nature of surveillance systems, local computer networks, and business hardware. This policy outlines our strict standards regarding personal data, equipment access, and confidentiality.
            </p>
          </section>

          <section className="p-4 rounded-xl bg-[#E6F0FA] border border-[#BFDBFE] space-y-3">
            <h2 className="text-base font-heading font-bold text-[#0B2D5B] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#00AEEF]" />
              <span>2. Strict Credential & Password Safeguards</span>
            </h2>
            <p className="text-xs text-[#0B2D5B] font-medium">
              We uphold an absolute zero-retention policy for customer authentication credentials:
            </p>
            <ul className="space-y-1.5 text-xs text-[#1F2937]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
                <span><strong>No Password Storage:</strong> We never harvest, log, or maintain records of customer CCTV NVR/DVR administrative passwords, Wi-Fi router WPA keys, operating system passwords, or cloud credentials.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
                <span><strong>Customer Handover:</strong> During installation, our technicians assist customers in configuring their own private master passwords, ensuring our staff have no residual access once the commissioning is signed off.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-heading font-bold text-[#0B2D5B]">3. Remote IT Support Framework</h2>
            <p>
              When a customer requests remote troubleshooting for software or network configuration issues:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-[#64748B]">
              <li>Explicit verbal or digital consent is obtained prior to launching any remote session.</li>
              <li>We utilize reputable, industry-standard remote assistance tools.</li>
              <li>Sessions terminate immediately upon task completion, with zero persistent background daemons or unauthorized permanent access left on the customer device.</li>
              <li>Technicians access strictly the files, diagnostics, and settings required to resolve the specific reported issue.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-heading font-bold text-[#0B2D5B]">4. Information Collected via Website Forms</h2>
            <p>
              When you submit a General Enquiry, Quotation Request, or Service Repair Ticket through our website, we collect your name, contact phone number, email address, physical service locality in Thrissur/Kerala, and project details. This data is utilized solely for:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-[#64748B]">
              <li>Communicating with you regarding your service or quotation inquiry.</li>
              <li>Scheduling on-site technical inspection visits.</li>
              <li>Maintaining service repair warranty and AMC records.</li>
            </ul>
            <p>
              We do not sell, rent, or trade your contact information to third-party telemarketers or advertisers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-heading font-bold text-[#0B2D5B]">5. Contact Us Regarding Privacy</h2>
            <p>
              For any questions regarding our security protocols or your contact records, please reach out to:
            </p>
            <div className="p-3 bg-[#F5F8FC] rounded-lg border border-[#E2E8F0] text-xs">
              <p className="font-bold text-[#0B2D5B]">JS Informatics — Privacy & Data Officer</p>
              <p className="text-[#64748B]">Main Road, Near Round, Thrissur, Kerala, India - 680001</p>
              <p className="text-[#64748B]">Email: {siteConfig.email}</p>
              <p className="text-[#64748B]">Phone: {siteConfig.phoneDisplay}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
