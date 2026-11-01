import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  Network, 
  Wifi, 
  Cpu, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Clock, 
  ArrowRight,
  Lock,
  HeartHandshake,
  Wrench,
  Laptop
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/ui/Logo";

export const metadata: Metadata = {
  title: "About Us | JS Informatics — Technology & Security Solutions Thrissur",
  description:
    "Learn about JS Informatics, a complete security, connectivity, and IT solutions provider based in Thrissur, Kerala. Professional CCTV, structured networking, Wi-Fi, and computing support.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Banner */}
      <section className="bg-[#0B2D5B] text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-[#00AEEF]">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E376E] text-xs font-semibold text-[#00AEEF]">
            <span>About JS Informatics</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight">
            Connecting Technology. Protecting What Matters.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Founded with the commitment to deliver dependable, high-standard technology engineering for homes, retail establishments, and corporate offices across Thrissur and Central Kerala.
          </p>
        </div>
      </section>

      {/* Company Story & Positioning */}
      <section className="py-16 bg-[#F5F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00AEEF]">
                Our Brand Positioning
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B2D5B]">
                More Than Just A Camera Installer
              </h2>
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                Many service businesses in Kerala treat security cameras, Wi-Fi routers, and desktop computers as isolated, separate products. At <strong>JS Informatics</strong>, we view these components as interconnected parts of a single digital ecosystem.
              </p>
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                Modern high-resolution CCTV systems rely heavily on structured Cat6 cabling, PoE switches, and robust local networks for remote mobile access. Similarly, office computers depend on fast Wi-Fi and well-organized LAN trunks for shared printing, billing, and cloud backups. By unifying physical security and IT networking, JS Informatics ensures every component operates harmoniously.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-[#0B2D5B]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00AEEF]" />
                  <span>Residential & Commercial Focus</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00AEEF]" />
                  <span>Thrissur Local Field Technicians</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00AEEF]" />
                  <span>Standards-Compliant Cabling</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00AEEF]" />
                  <span>Transparent Equipment Pricing</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-4/3 rounded-2xl overflow-hidden border border-[#CBD5E1] shadow-xl">
              <Image
                src="/images/it-support.jpg"
                alt="JS Informatics Technical Support Team in Thrissur"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Brand Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00AEEF]">
              What Drives Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B2D5B] mt-1">
              Our Core Principles & Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#F5F8FC] border border-[#E2E8F0] space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#0B2D5B] text-white flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-[#00AEEF]" />
              </div>
              <h3 className="text-lg font-heading font-bold text-[#0B2D5B]">
                Integrity & Authenticity
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                We supply genuine, original equipment sourced through authorized distribution. We never compromise system longevity by using cheap counterfeit copper cable or substandard power supplies.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F8FC] border border-[#E2E8F0] space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#0B2D5B] text-white flex items-center justify-center">
                <Wrench className="w-6 h-6 text-[#00AEEF]" />
              </div>
              <h3 className="text-lg font-heading font-bold text-[#0B2D5B]">
                Craftsmanship & Clean Cabling
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                We take immense pride in tidy trunking, concealed conduit piping, neatly dressed server racks, and clearly numbered patch panels that keep homes and offices elegant.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F8FC] border border-[#E2E8F0] space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#0B2D5B] text-white flex items-center justify-center">
                <HeartHandshake className="w-6 h-6 text-[#00AEEF]" />
              </div>
              <h3 className="text-lg font-heading font-bold text-[#0B2D5B]">
                Customer-Focused Accountability
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                We remain fully accessible after project handover. When an issue arises, our local Thrissur technicians are a quick phone call away to troubleshoot and resolve it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ethical Tech & Privacy Commitment */}
      <section className="py-16 bg-[#0B2D5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E376E] text-xs font-semibold text-[#00AEEF]">
                <Lock className="w-3.5 h-3.5" />
                <span>Customer Privacy & Ethics</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold">
                Strict Customer Privacy & Credential Safeguards
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                We treat customer trust with utmost seriousness. JS Informatics maintains strict internal privacy protocols:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
                  <span>We never harvest, record, or retain customer CCTV passwords, Wi-Fi keys, or OS login credentials.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
                  <span>We assist customers in setting their own private administrative passwords upon system handover.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
                  <span>Remote support sessions occur only with explicit customer consent, using reputable software with no persistent background access.</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-4 bg-[#0E376E] p-6 rounded-2xl border border-[#16407B] space-y-4 text-center">
              <Logo variant="white" className="justify-center" />
              <p className="text-xs text-slate-300">
                Operating in Thrissur, Kerala, India. Dedicated to professional engineering and lasting customer relationships.
              </p>
              <Link
                href="/contact"
                className="inline-block w-full py-3 px-4 rounded-lg bg-[#00AEEF] hover:bg-[#0095ce] text-white text-xs font-bold transition-all shadow-md"
              >
                Connect With Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
