import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  Network, 
  Wifi, 
  Cpu, 
  TerminalSquare, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Layers, 
  Settings2, 
  FileText, 
  Wrench,
  HelpCircle,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { servicesData } from "@/data/servicesData";
import { productsData } from "@/data/productsData";
import { FaqAccordion } from "@/components/home/FaqAccordion";

const serviceIcons: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#00AEEF]" />,
  Network: <Network className="w-6 h-6 text-[#00AEEF]" />,
  Wifi: <Wifi className="w-6 h-6 text-[#00AEEF]" />,
  Cpu: <Cpu className="w-6 h-6 text-[#00AEEF]" />,
  TerminalSquare: <TerminalSquare className="w-6 h-6 text-[#00AEEF]" />,
  Building2: <Building2 className="w-6 h-6 text-[#00AEEF]" />,
};

const homeFaqs = [
  {
    question: "Do you provide CCTV installation for both residential homes and commercial businesses in Thrissur?",
    answer:
      "Yes. We design and install CCTV surveillance systems for individual residential villas, gated communities, retail stores, supermarkets, educational institutions, and corporate offices across Thrissur and Central Kerala.",
  },
  {
    question: "Can I monitor my security cameras remotely on my phone?",
    answer:
      "Yes. Every modern IP or HD analog system we deploy is configured with secure mobile application access on Android and iOS, allowing you to view live video feeds, receive push alerts, and playback recorded footage from anywhere.",
  },
  {
    question: "How do you resolve Wi-Fi dead zones in multi-storey concrete houses?",
    answer:
      "Concrete slabs and thick plastered masonry attenuate wireless signals significantly. We eliminate dead zones by routing discrete Cat6 cabling to strategic locations and mounting dedicated enterprise ceiling access points or wired-backhaul mesh systems, ensuring uninterrupted roaming without signal drops.",
  },
  {
    question: "Do you offer Annual Maintenance Contracts (AMC) for office IT systems?",
    answer:
      "Yes. Our Business IT AMCs cover routine preventive maintenance, network health audits, server rack checks, desktop hardware troubleshooting, printer sharing, and priority on-site support for businesses in Thrissur.",
  },
  {
    question: "What are your standard business hours for service and support?",
    answer:
      "Our technicians are available Monday through Saturday from 9:00 AM to 7:00 PM IST. Emergency repair assistance for contracted commercial establishments can be scheduled by phone.",
  },
];

export default function HomePage() {
  const featuredProducts = productsData.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* SECTION 1: HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#F5F8FC] to-white py-14 lg:py-20 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Tagline Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6F0FA] border border-[#BFDBFE] text-xs font-semibold text-[#0B2D5B]">
                <span className="w-2 h-2 rounded-full bg-[#00AEEF]"></span>
                <span>Connecting Technology. Protecting What Matters.</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#0B2D5B] leading-[1.15] tracking-tight">
                Your Trusted Partner for <br className="hidden sm:inline" />
                <span className="text-[#00AEEF]">CCTV, Networking</span> & IT Solutions
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl font-normal">
                From advanced CCTV security systems and structured LAN networking to Wi-Fi installation and complete computer support, JS Informatics provides practical technology solutions for homes and businesses across Thrissur and Central Kerala.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  href="/contact?tab=quotation"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-bold text-white bg-[#00AEEF] hover:bg-[#0095ce] transition-all shadow-md hover:shadow-lg transform active:scale-95 gap-2"
                >
                  <span>Get a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-bold text-[#0B2D5B] bg-white hover:bg-[#F5F8FC] border border-[#CBD5E1] transition-all hover:border-[#0B2D5B]"
                >
                  Explore Our Services
                </Link>

                <a
                  href={getWhatsAppUrl("Hello JS Informatics, I would like to request information about your services.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-3.5 rounded-lg text-sm font-bold text-[#25D366] bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat With Us</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 border-t border-[#E2E8F0] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-semibold text-[#1F2937]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00AEEF] shrink-0" />
                  <span>Residential & Business</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00AEEF] shrink-0" />
                  <span>Thrissur Local Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00AEEF] shrink-0" />
                  <span>Professional Installation</span>
                </div>
              </div>
            </div>

            {/* Right Image / Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-4/3 sm:aspect-16/11">
                <Image
                  src="/images/hero-tech.jpg"
                  alt="JS Informatics CCTV and IT Solutions in Thrissur"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2D5B]/80 via-transparent to-transparent"></div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-4 rounded-xl shadow-lg border border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-[#0B2D5B]">JS Informatics Headquarters</p>
                    <p className="text-[11px] text-slate-500">Thrissur, Kerala, India</p>
                  </div>
                  <Link
                    href="/contact"
                    className="text-xs font-bold text-[#00AEEF] hover:underline flex items-center gap-1"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: COMPANY INTRODUCTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00AEEF]">
              About JS Informatics
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B2D5B]">
              Complete Security, Connectivity & IT Solutions Under One Roof
            </h2>
            <p className="text-base text-[#64748B] leading-relaxed">
              Based in Thrissur, Kerala, JS Informatics is not simply a camera installer or a computer shop. We are a technical engineering provider specializing in structured networking, wireless coverage, electronic surveillance, and end-to-end computing maintenance. We combine physical security and computer networking expertise to deliver reliable systems that protect what matters most to you.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE SERVICES */}
      <section id="services" className="py-16 bg-[#F5F8FC] border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#00AEEF]">
                Our Expertise
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B2D5B] mt-1">
                Our Core Services
              </h2>
              <p className="text-sm text-[#64748B] mt-2 max-w-xl">
                Engineered solutions delivered with verified equipment, neat cabling standards, and prompt local support.
              </p>
            </div>
            <Link
              href="/services"
              className="mt-4 md:mt-0 text-sm font-bold text-[#00AEEF] hover:text-[#0095ce] flex items-center gap-1.5"
            >
              <span>View All 6 Service Catalogues</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => (
              <div
                key={service.slug}
                className="bg-white rounded-xl p-6 border border-[#E2E8F0] shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between group hover:border-[#00AEEF]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-[#E6F0FA] group-hover:bg-[#00AEEF]/10 transition-colors">
                      {serviceIcons[service.icon] || <ShieldCheck className="w-6 h-6 text-[#00AEEF]" />}
                    </div>
                    <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider">
                      {service.category.split("&")[0]}
                    </span>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-[#0B2D5B] group-hover:text-[#00AEEF] transition-colors mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#64748B] leading-relaxed mb-4 line-clamp-3">
                    {service.shortDescription}
                  </p>

                  <ul className="space-y-1.5 mb-6 text-xs text-[#1F2937]">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00AEEF] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#F1F5F9] flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-xs font-bold text-[#0B2D5B] group-hover:text-[#00AEEF] flex items-center gap-1"
                  >
                    <span>Service Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href={`/contact?tab=quotation&service=${encodeURIComponent(service.title)}`}
                    className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#E6F0FA] text-[#0B2D5B] hover:bg-[#00AEEF] hover:text-white transition-colors"
                  >
                    Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURED PRODUCTS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#00AEEF]">
                Hardware & Equipment
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B2D5B] mt-1">
                Featured Products
              </h2>
              <p className="text-sm text-[#64748B] mt-2 max-w-xl">
                Surveillance cameras, network switches, enterprise Wi-Fi routers, and performance computer hardware.
              </p>
            </div>
            <Link
              href="/products"
              className="mt-4 md:mt-0 text-sm font-bold text-[#00AEEF] hover:text-[#0095ce] flex items-center gap-1.5"
            >
              <span>Explore 10 Product Categories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((prod) => (
              <div
                key={prod.slug}
                className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-4/3 bg-[#F8FAFC] border-b border-[#E2E8F0] overflow-hidden">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-white/90 text-[10px] font-bold text-[#0B2D5B] shadow-xs">
                      {prod.categoryName}
                    </div>
                  </div>

                  <div className="p-4">
                    <p className="text-[11px] font-medium text-[#64748B]">{prod.brand}</p>
                    <h3 className="text-sm font-heading font-bold text-[#0B2D5B] mt-1 line-clamp-2 group-hover:text-[#00AEEF] transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-[#64748B] mt-2 line-clamp-2">
                      {prod.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <div className="pt-3 border-t border-[#F1F5F9] flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-[#0B2D5B]">
                        {prod.priceDisplay}
                      </span>
                    </div>
                    <Link
                      href={`/products/${prod.slug}`}
                      className="text-xs font-bold text-[#00AEEF] hover:underline flex items-center gap-1"
                    >
                      <span>Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 & 6: RESIDENTIAL & BUSINESS IT SOLUTIONS */}
      <section className="py-16 bg-[#F5F8FC] border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00AEEF]">
              Tailored Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B2D5B] mt-1">
              Purpose-Built for Homes & Commercial Enterprises
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Whether securing a family residence or provisioning IT network architecture for an entire office floor, JS Informatics designs solutions suited to your environment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Residential Solutions Card */}
            <div className="bg-white rounded-2xl p-8 border border-[#E2E8F0] shadow-xs flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E6F0FA] text-xs font-bold text-[#0B2D5B] mb-4">
                  <span>For Villas, Houses & Apartments</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-[#0B2D5B] mb-3">
                  Residential Security & Home Connectivity
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                  Protect your perimeter and enjoy flawless internet connectivity throughout every room, terrace, and courtyard without dead spots or ugly loose cabling.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs text-[#1F2937]">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
                    <span>Perimeter CCTV with smartphone live view</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
                    <span>Multi-storey mesh Wi-Fi roaming</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
                    <span>Video door phone visitor verification</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
                    <span>Home office PC diagnostics & upgrades</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-[#F1F5F9]">
                <Link
                  href="/solutions#residential"
                  className="text-xs font-bold text-[#00AEEF] hover:underline flex items-center gap-1.5"
                >
                  <span>Explore Residential Setups</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Commercial Solutions Card */}
            <div className="bg-white rounded-2xl p-8 border border-[#E2E8F0] shadow-xs flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0B2D5B] text-xs font-bold text-white mb-4">
                  <span>For Shops, Offices & Commercial Buildings</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-[#0B2D5B] mb-3">
                  Business IT, Structured LAN & Surveillance
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                  Maintain uninterrupted daily operations with certified structured cabling, isolated guest Wi-Fi, 4K camera surveillance, and Annual Maintenance Contracts (AMC).
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs text-[#1F2937]">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
                    <span>Cat6 structured cabling & server racks</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
                    <span>PoE Gigabit switches & VLAN isolation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
                    <span>Office workstations, printers & network AMCs</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
                    <span>Isolated guest Wi-Fi for retail customers</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-[#F1F5F9]">
                <Link
                  href="/solutions#commercial"
                  className="text-xs font-bold text-[#00AEEF] hover:underline flex items-center gap-1.5"
                >
                  <span>Explore Commercial Packages</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: WHY CHOOSE JS INFORMATICS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00AEEF]">
              Our Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B2D5B] mt-1">
              Why Choose JS Informatics?
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              We focus on practical engineering, clean workmanship, and responsive local accountability in Thrissur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-[#E2E8F0] bg-[#F5F8FC]">
              <div className="w-10 h-10 rounded-lg bg-[#0B2D5B] text-white flex items-center justify-center mb-4">
                <Settings2 className="w-5 h-5 text-[#00AEEF]" />
              </div>
              <h3 className="text-base font-heading font-bold text-[#0B2D5B] mb-2">
                Practical Technology Solutions
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                We specify reliable hardware that solves your actual requirement, avoiding over-engineered costs or under-powered configurations.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[#E2E8F0] bg-[#F5F8FC]">
              <div className="w-10 h-10 rounded-lg bg-[#0B2D5B] text-white flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5 text-[#00AEEF]" />
              </div>
              <h3 className="text-base font-heading font-bold text-[#0B2D5B] mb-2">
                Residential & Business Support
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Equal attention given to a single residential camera troubleshooting call and a comprehensive 40-node office LAN rollout.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[#E2E8F0] bg-[#F5F8FC]">
              <div className="w-10 h-10 rounded-lg bg-[#0B2D5B] text-white flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5 text-[#00AEEF]" />
              </div>
              <h3 className="text-base font-heading font-bold text-[#0B2D5B] mb-2">
                Security & Networking Expertise
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Deep hands-on experience spanning both video surveillance protocols (RTSP, ONVIF) and data networking standards (Cat6, PoE, VLANs).
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[#E2E8F0] bg-[#F5F8FC]">
              <div className="w-10 h-10 rounded-lg bg-[#0B2D5B] text-white flex items-center justify-center mb-4">
                <Wrench className="w-5 h-5 text-[#00AEEF]" />
              </div>
              <h3 className="text-base font-heading font-bold text-[#0B2D5B] mb-2">
                Professional Installation
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Neat conduit casing, correct cable bend radiuses, labelled patch panels, and tidy rack dressing that keep premises looking immaculate.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[#E2E8F0] bg-[#F5F8FC]">
              <div className="w-10 h-10 rounded-lg bg-[#0B2D5B] text-white flex items-center justify-center mb-4">
                <Layers className="w-5 h-5 text-[#00AEEF]" />
              </div>
              <h3 className="text-base font-heading font-bold text-[#0B2D5B] mb-2">
                Troubleshooting & Maintenance
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                We do not disappear after installation. We diagnose offline feeds, failing drives, Wi-Fi interference, and broken hardware when you need us.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[#E2E8F0] bg-[#F5F8FC]">
              <div className="w-10 h-10 rounded-lg bg-[#0B2D5B] text-white flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5 text-[#00AEEF]" />
              </div>
              <h3 className="text-base font-heading font-bold text-[#0B2D5B] mb-2">
                Customer-Focused Service
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Transparent communication, honest hardware quotes, and clear instructions so you can operate your system with complete confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: OUR WORKING PROCESS */}
      <section className="py-16 bg-[#0B2D5B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00AEEF]">
              How We Work
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mt-1">
              Our 4-Step Working Process
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              From the initial site visit to final sign-off and beyond, we ensure clarity at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#0E376E] p-6 rounded-xl border border-[#16407B] relative">
              <span className="text-3xl font-heading font-extrabold text-[#00AEEF]/40 block mb-2">01</span>
              <h3 className="text-base font-heading font-bold text-white mb-2">
                Site Assessment & Consultation
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We inspect your home or facility, evaluate camera angles, check wall structures for Wi-Fi propagation, and note cable pathways.
              </p>
            </div>

            <div className="bg-[#0E376E] p-6 rounded-xl border border-[#16407B] relative">
              <span className="text-3xl font-heading font-extrabold text-[#00AEEF]/40 block mb-2">02</span>
              <h3 className="text-base font-heading font-bold text-white mb-2">
                Transparent Quotation & Design
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We provide an itemized proposal specifying recommended hardware models, storage capacity calculations, and cabling estimates.
              </p>
            </div>

            <div className="bg-[#0E376E] p-6 rounded-xl border border-[#16407B] relative">
              <span className="text-3xl font-heading font-extrabold text-[#00AEEF]/40 block mb-2">03</span>
              <h3 className="text-base font-heading font-bold text-white mb-2">
                Neat Installation & Testing
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our technicians execute conduit casing, cable pull, rack termination, camera focus adjustment, and full throughput speed tests.
              </p>
            </div>

            <div className="bg-[#0E376E] p-6 rounded-xl border border-[#16407B] relative">
              <span className="text-3xl font-heading font-extrabold text-[#00AEEF]/40 block mb-2">04</span>
              <h3 className="text-base font-heading font-bold text-white mb-2">
                Handover & Support
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We guide you through smartphone live viewing, playback retrieval, and provide ongoing technical assistance whenever needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: SERVICE AREAS IN THRISSUR & KERALA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00AEEF]">
                Local Coverage
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B2D5B]">
                Serving Thrissur & Surrounding Regions
              </h2>
              <p className="text-sm text-[#64748B] leading-relaxed">
                JS Informatics provides responsive on-site technical visits across the greater Thrissur metropolitan region and Central Kerala. We arrive equipped with necessary testing tools, cable punch-downs, and replacement components.
              </p>
              <div className="pt-2 text-xs text-[#0B2D5B] font-semibold flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#00AEEF]" />
                <span>Base Location: Main Road, Near Round, Thrissur, Kerala - 680001</span>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#F5F8FC] p-6 sm:p-8 rounded-2xl border border-[#E2E8F0]">
              <h3 className="text-sm font-heading font-bold text-[#0B2D5B] uppercase tracking-wider mb-4">
                Key Localities Covered:
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-[#1F2937]">
                {siteConfig.serviceAreas.map((area, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 bg-white rounded-lg border border-[#E2E8F0]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00AEEF]"></div>
                    <span className="font-medium truncate">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 bg-[#F5F8FC] border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00AEEF]">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B2D5B] mt-1">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Common questions about our CCTV installation, networking, and IT support services.
            </p>
          </div>

          <FaqAccordion items={homeFaqs} />
        </div>
      </section>

      {/* SECTION 11: CONTACT AND ENQUIRY CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0B2D5B] to-[#061B37] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-xs">
            <div className="space-y-3 max-w-xl text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00AEEF]">
                Ready to Upgrade Your Tech?
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                Request a Free Quotation or Site Survey
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Connect with our team to discuss your CCTV camera, LAN cabling, Wi-Fi coverage, or computer support requirement in Thrissur.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3.5 w-full md:w-auto">
              <Link
                href="/contact?tab=quotation"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-bold text-white bg-[#00AEEF] hover:bg-[#0095ce] transition-all shadow-md text-center"
              >
                Request a Quote
              </Link>
              <Link
                href="/contact?tab=service"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-bold text-slate-200 bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-center"
              >
                Book a Service Visit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
