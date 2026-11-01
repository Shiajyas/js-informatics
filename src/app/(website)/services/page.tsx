import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { 
  ShieldCheck, 
  Network, 
  Wifi, 
  Cpu, 
  TerminalSquare, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle,
  PhoneCall,
  Laptop
} from "lucide-react";
import { servicesData } from "@/data/servicesData";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Services Catalogue | CCTV, Networking & IT Support in Thrissur",
  description:
    "Explore JS Informatics' comprehensive technology solutions: CCTV installation, Cat6 structured cabling, enterprise Wi-Fi, computer hardware repair, software support, and business IT maintenance in Thrissur, Kerala.",
};

const serviceIcons: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-[#00AEEF]" />,
  Network: <Network className="w-8 h-8 text-[#00AEEF]" />,
  Wifi: <Wifi className="w-8 h-8 text-[#00AEEF]" />,
  Cpu: <Cpu className="w-8 h-8 text-[#00AEEF]" />,
  TerminalSquare: <TerminalSquare className="w-8 h-8 text-[#00AEEF]" />,
  Building2: <Building2 className="w-8 h-8 text-[#00AEEF]" />,
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Header Banner */}
      <section className="bg-[#0B2D5B] text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-[#00AEEF]">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E376E] text-xs font-semibold text-[#00AEEF]">
            <span>Technology Engineering Services</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight">
            Complete Technology & Security Services
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            From single-camera home installations to enterprise-grade structured office networks and preventive computing maintenance, JS Informatics delivers practical, dependable technology solutions across Thrissur and Central Kerala.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-[#F5F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {servicesData.map((service, index) => (
              <div
                key={service.slug}
                id={service.slug}
                className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-xs hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12"
              >
                {/* Visual / Image Col */}
                <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full bg-slate-100">
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2D5B]/70 via-transparent to-transparent lg:hidden"></div>
                  <div className="absolute top-4 left-4 p-3 rounded-xl bg-white/90 backdrop-blur-xs shadow-md">
                    {serviceIcons[service.icon]}
                  </div>
                </div>

                {/* Details Col */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00AEEF] mb-1.5">
                      <span>Service 0{index + 1}</span>
                      <span>•</span>
                      <span>{service.category}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B2D5B] mb-3">
                      {service.title}
                    </h2>

                    <p className="text-sm font-medium text-[#00AEEF] mb-3 italic">
                      &ldquo;{service.tagline}&rdquo;
                    </p>

                    <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#1F2937] mb-6">
                      {service.features.slice(0, 4).map((feat, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#F1F5F9] flex flex-wrap items-center justify-between gap-4">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#0B2D5B] hover:text-[#00AEEF] transition-colors"
                    >
                      <span>Explore In-Depth Scope & FAQs</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <div className="flex items-center gap-3">
                      <Link
                        href={`/contact?tab=quotation&service=${encodeURIComponent(service.title)}`}
                        className="px-4 py-2 rounded-lg bg-[#00AEEF] hover:bg-[#0095ce] text-white text-xs font-bold transition-colors shadow-xs"
                      >
                        Request a Quote
                      </Link>
                      <Link
                        href={`/contact?tab=service&category=${encodeURIComponent(service.title)}`}
                        className="px-3.5 py-2 rounded-lg bg-[#E6F0FA] text-[#0B2D5B] hover:bg-[#0B2D5B] hover:text-white text-xs font-semibold transition-colors"
                      >
                        Book Repair
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Remote IT Support Ethical Guidelines Section */}
      <section className="py-16 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F5F8FC] border border-[#BFDBFE] rounded-2xl p-8 sm:p-12 relative overflow-hidden">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E6F0FA] text-xs font-bold text-[#0B2D5B]">
                <Laptop className="w-4 h-4 text-[#00AEEF]" />
                <span>Ethical Remote Assistance Standards</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B2D5B]">
                Responsible & Transparent Remote IT Support
              </h2>
              <p className="text-sm text-[#64748B] leading-relaxed">
                When physical on-site intervention is unnecessary for software diagnostics, JS Informatics provides remote assistance. To safeguard customer security and privacy, we operate strictly within defined ethical guidelines:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs text-[#1F2937]">
                <div className="p-3.5 bg-white rounded-xl border border-[#E2E8F0] space-y-1">
                  <div className="font-bold text-[#0B2D5B] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00AEEF]" />
                    Explicit Customer Consent First
                  </div>
                  <p className="text-slate-600">
                    Sessions are initiated only after explicit verbal or written permission with single-use session tokens.
                  </p>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-[#E2E8F0] space-y-1">
                  <div className="font-bold text-[#0B2D5B] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00AEEF]" />
                    Zero Persistent Access
                  </div>
                  <p className="text-slate-600">
                    We never leave background daemons, persistent backdoors, or unattended remote control agents behind.
                  </p>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-[#E2E8F0] space-y-1">
                  <div className="font-bold text-[#0B2D5B] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00AEEF]" />
                    No Password Storage
                  </div>
                  <p className="text-slate-600">
                    We never harvest or store customer operating system passwords, Wi-Fi keys, CCTV login credentials, or banking details.
                  </p>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-[#E2E8F0] space-y-1">
                  <div className="font-bold text-[#0B2D5B] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00AEEF]" />
                    Strictly Scoped Troubleshooting
                  </div>
                  <p className="text-slate-600">
                    Technicians touch only the files and configuration settings necessary to resolve your specific problem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local CTA */}
      <section className="py-12 bg-[#0B2D5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-heading font-bold">Unsure which service matches your requirement?</h3>
            <p className="text-xs text-slate-300 mt-1">
              Speak directly with our technical support team in Thrissur for honest advice.
            </p>
          </div>
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#00AEEF] hover:bg-[#0095ce] text-white text-xs font-bold transition-all shrink-0"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call {siteConfig.phoneDisplay}</span>
          </a>
        </div>
      </section>
    </div>
  );
}
