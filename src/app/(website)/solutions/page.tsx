import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  Home, 
  Building2, 
  ShieldCheck, 
  Network, 
  Wifi, 
  Cpu, 
  CheckCircle2, 
  ArrowRight,
  Store,
  Briefcase,
  Layers,
  PhoneCall
} from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Tailored Technology Solutions | Residential & Business IT in Thrissur",
  description:
    "Comprehensive technology architectures designed specifically for residential homes, retail shops, and commercial offices in Thrissur and Central Kerala by JS Informatics.",
};

export default function SolutionsPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Banner */}
      <section className="bg-[#0B2D5B] text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-[#00AEEF]">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E376E] text-xs font-semibold text-[#00AEEF]">
            <span>Tailored Architecture</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight">
            Technology Solutions for Every Space
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Whether securing a private family residence or engineering high-throughput networking for a busy commercial enterprise, JS Informatics provides dependable, purpose-built systems.
          </p>
        </div>
      </section>

      {/* SOLUTION 1: RESIDENTIAL */}
      <section id="residential" className="py-16 bg-[#F5F8FC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E6F0FA] text-xs font-bold text-[#0B2D5B]">
                <Home className="w-4 h-4 text-[#00AEEF]" />
                <span>Home & Residential Architecture</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#0B2D5B]">
                Intelligent Home Security & Complete Wi-Fi Coverage
              </h2>

              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                Modern Kerala homes feature thick concrete masonry that frequently creates Wi-Fi dead zones, while perimeter security requires reliable 24/7 video recording. Our residential packages resolve these challenges permanently with neat, concealed cabling and verified hardware.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-[#1F2937]">
                <div className="p-4 bg-white rounded-xl border border-[#E2E8F0] shadow-xs space-y-1.5">
                  <div className="font-bold text-[#0B2D5B] flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#00AEEF]" />
                    Perimeter CCTV Surveillance
                  </div>
                  <p className="text-xs text-[#64748B]">
                    Night-vision cameras covering gates, car porches, courtyards, and rear gardens with live viewing on smartphones.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#E2E8F0] shadow-xs space-y-1.5">
                  <div className="font-bold text-[#0B2D5B] flex items-center gap-2">
                    <Wifi className="w-4 h-4 text-[#00AEEF]" />
                    Whole-Home Mesh Wi-Fi
                  </div>
                  <p className="text-xs text-[#64748B]">
                    Seamless multi-storey roaming that eliminates buffering on smart TVs, study laptops, and video calls.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#E2E8F0] shadow-xs space-y-1.5">
                  <div className="font-bold text-[#0B2D5B] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00AEEF]" />
                    Video Door Phone Units
                  </div>
                  <p className="text-xs text-[#64748B]">
                    Screen visitors at the main gate from inside your living room or via mobile app before granting entry.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#E2E8F0] shadow-xs space-y-1.5">
                  <div className="font-bold text-[#0B2D5B] flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-[#00AEEF]" />
                    Work-From-Home Reliability
                  </div>
                  <p className="text-xs text-[#64748B]">
                    Dedicated hardwired Ethernet drops and UPS power backup guidance for uninterrupted remote work.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/contact?tab=quotation&req=residential"
                  className="px-6 py-3 rounded-lg bg-[#00AEEF] hover:bg-[#0095ce] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center gap-2"
                >
                  <span>Request Residential Home Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-4/3 sm:aspect-16/11 rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-xl">
              <Image
                src="/images/cctv-installation.jpg"
                alt="Residential CCTV and Wi-Fi Installation Thrissur"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION 2: COMMERCIAL & BUSINESS IT */}
      <section id="commercial" className="py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 relative aspect-4/3 sm:aspect-16/11 rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-xl">
              <Image
                src="/images/lan-networking.jpg"
                alt="Commercial Office IT and Structured Cabling Thrissur"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0B2D5B] text-xs font-bold text-white">
                <Building2 className="w-4 h-4 text-[#00AEEF]" />
                <span>Commercial & Enterprise Solutions</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#0B2D5B]">
                Robust IT Backbones for Shops, Offices & Enterprises
              </h2>

              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                For commercial establishments, technology downtime equates directly to revenue loss and frustrated customers. JS Informatics engineers structured network backbones that support point-of-sale systems, workstation productivity, secure customer Wi-Fi, and compliance surveillance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-[#1F2937]">
                <div className="p-4 bg-[#F5F8FC] rounded-xl border border-[#E2E8F0] space-y-1.5">
                  <div className="font-bold text-[#0B2D5B] flex items-center gap-2">
                    <Network className="w-4 h-4 text-[#00AEEF]" />
                    Structured Cat6 Cabling & Racks
                  </div>
                  <p className="text-xs text-[#64748B]">
                    Neatly labelled patch panels, horizontal cable managers, and standard 19-inch rack enclosures.
                  </p>
                </div>

                <div className="p-4 bg-[#F5F8FC] rounded-xl border border-[#E2E8F0] space-y-1.5">
                  <div className="font-bold text-[#0B2D5B] flex items-center gap-2">
                    <Wifi className="w-4 h-4 text-[#00AEEF]" />
                    Isolated Guest Wi-Fi (VLANs)
                  </div>
                  <p className="text-xs text-[#64748B]">
                    Allow customers to access internet while strictly walling off internal billing systems and files.
                  </p>
                </div>

                <div className="p-4 bg-[#F5F8FC] rounded-xl border border-[#E2E8F0] space-y-1.5">
                  <div className="font-bold text-[#0B2D5B] flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#00AEEF]" />
                    Billing & Warehouse Surveillance
                  </div>
                  <p className="text-xs text-[#64748B]">
                    High-definition cameras monitoring cash drawers, display racks, stock rooms, and loading docks.
                  </p>
                </div>

                <div className="p-4 bg-[#F5F8FC] rounded-xl border border-[#E2E8F0] space-y-1.5">
                  <div className="font-bold text-[#0B2D5B] flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#00AEEF]" />
                    Annual Maintenance Contracts (AMC)
                  </div>
                  <p className="text-xs text-[#64748B]">
                    Scheduled maintenance visits, hardware health audits, and priority breakdown response in Thrissur.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/contact?tab=quotation&req=commercial"
                  className="px-6 py-3 rounded-lg bg-[#00AEEF] hover:bg-[#0095ce] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center gap-2"
                >
                  <span>Request Commercial Site Survey</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON MATRIX */}
      <section className="py-16 bg-[#F5F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00AEEF]">
              Feature Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B2D5B] mt-1">
              Residential vs Commercial Specifications
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-xs overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#0B2D5B] text-white uppercase text-[11px] font-bold tracking-wider">
                <tr>
                  <th className="py-4 px-6">System Component</th>
                  <th className="py-4 px-6">Residential Package</th>
                  <th className="py-4 px-6">Commercial / Business Package</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] text-[#1F2937]">
                <tr>
                  <td className="py-4 px-6 font-semibold text-[#0B2D5B]">CCTV Surveillance</td>
                  <td className="py-4 px-6 text-[#64748B]">2 to 8 HD / IP cameras covering perimeter & gates</td>
                  <td className="py-4 px-6 text-[#64748B]">8 to 32+ 4K IP cameras with NVR rack mounting & audio</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-[#0B2D5B]">Network Infrastructure</td>
                  <td className="py-4 px-6 text-[#64748B]">Direct Cat6 runs to smart TVs and home office desk</td>
                  <td className="py-4 px-6 text-[#64748B]">Structured Cat6/6A cabling, patch panels, 19&quot; wall/floor rack</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-[#0B2D5B]">Wireless Architecture</td>
                  <td className="py-4 px-6 text-[#64748B]">Dual-band mesh Wi-Fi with wired backhaul</td>
                  <td className="py-4 px-6 text-[#64748B]">Ceiling-mount enterprise APs with VLAN-segregated Guest Wi-Fi</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-[#0B2D5B]">Computing & Printers</td>
                  <td className="py-4 px-6 text-[#64748B]">PC tune-up, SSD upgrade & home printer sharing</td>
                  <td className="py-4 px-6 text-[#64748B]">Workstation fleet standardization, network scanner/printer fleet</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-[#0B2D5B]">Support Arrangement</td>
                  <td className="py-4 px-6 text-[#64748B]">On-demand service visits & phone troubleshooting</td>
                  <td className="py-4 px-6 text-[#64748B]">Annual Maintenance Contracts (AMC) with priority SLA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
