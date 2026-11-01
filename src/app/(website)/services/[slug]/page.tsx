import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
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
  MessageCircle, 
  Phone, 
  ChevronRight,
  FileCheck2,
  HelpCircle,
  Home,
  Briefcase
} from "lucide-react";
import { servicesData, ServiceDetail } from "@/data/servicesData";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";

const serviceIcons: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-[#00AEEF]" />,
  Network: <Network className="w-8 h-8 text-[#00AEEF]" />,
  Wifi: <Wifi className="w-8 h-8 text-[#00AEEF]" />,
  Cpu: <Cpu className="w-8 h-8 text-[#00AEEF]" />,
  TerminalSquare: <TerminalSquare className="w-8 h-8 text-[#00AEEF]" />,
  Building2: <Building2 className="w-8 h-8 text-[#00AEEF]" />,
};

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | JS Informatics Thrissur`,
    description: service.shortDescription,
    keywords: [
      service.title,
      `${service.title} in Thrissur`,
      `${service.title} Kerala`,
      "JS Informatics services",
    ],
    openGraph: {
      title: `${service.title} | JS Informatics Thrissur`,
      description: service.shortDescription,
      url: `https://jsinformatics.in/services/${service.slug}`,
      images: [{ url: service.heroImage }],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const whatsappMsg = `Hello JS Informatics, I would like to enquire about your ${service.title} in Thrissur.`;

  return (
    <div className="flex flex-col w-full bg-white">
      <ServiceJsonLd service={service} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Services", url: `${siteConfig.url}/services` },
          { name: service.title, url: `${siteConfig.url}/services/${service.slug}` },
        ]}
      />
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-[#F5F8FC] border-b border-[#E2E8F0] py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#64748B]">
          <Link href="/" className="hover:text-[#00AEEF] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/services" className="hover:text-[#00AEEF] transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="font-semibold text-[#0B2D5B] truncate">{service.title}</span>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="bg-[#0B2D5B] text-white py-14 lg:py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-[#00AEEF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E376E] text-xs font-semibold text-[#00AEEF]">
                <span>{service.category}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                {service.fullDescription}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <Link
                  href={`/contact?tab=quotation&service=${encodeURIComponent(service.title)}`}
                  className="px-5 py-3 rounded-lg bg-[#00AEEF] hover:bg-[#0095ce] text-white text-xs sm:text-sm font-bold shadow-md transition-all"
                >
                  Request a Quotation
                </Link>
                <Link
                  href={`/contact?tab=service&category=${encodeURIComponent(service.title)}`}
                  className="px-5 py-3 rounded-lg bg-[#0E376E] hover:bg-[#164b94] text-white text-xs sm:text-sm font-semibold transition-all"
                >
                  Book Service Repair
                </Link>
                <a
                  href={getWhatsAppUrl(whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 relative aspect-4/3 sm:aspect-16/10 rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl">
              <Image
                src={service.heroImage}
                alt={service.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2D5B]/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 text-xs text-white font-medium bg-black/40 backdrop-blur-xs p-2 rounded-lg">
                Service location: Thrissur & Central Kerala
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Body Content */}
      <section className="py-16 bg-[#F5F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Content Area */}
            <div className="lg:col-span-8 space-y-12">
              {/* Features & Key Capabilities */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-xs">
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#0B2D5B] mb-4 flex items-center gap-2.5">
                  <FileCheck2 className="w-6 h-6 text-[#00AEEF]" />
                  <span>What We Deliver & Install</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {service.features.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1F2937]">
                      <CheckCircle2 className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Scope of Work */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-xs">
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#0B2D5B] mb-4">
                  Technical Scope of Work & Standards
                </h2>
                <p className="text-xs sm:text-sm text-[#64748B] mb-6 leading-relaxed">
                  Every installation or service ticket follows rigorous installation safety practices, correct grounding, clean trunking, and documented testing.
                </p>
                <div className="space-y-3">
                  {service.scopeOfWork.map((scope, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-[#F5F8FC] border border-[#E2E8F0] flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#00AEEF] text-white text-xs font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-[#0B2D5B]">{scope}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Residential & Commercial Applications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-xs space-y-4">
                  <div className="flex items-center gap-2 text-sm font-heading font-bold text-[#0B2D5B]">
                    <Home className="w-5 h-5 text-[#00AEEF]" />
                    <span>Residential Applications</span>
                  </div>
                  <ul className="space-y-2 text-xs text-[#64748B]">
                    {service.residentialApplications.map((app, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] mt-1.5 shrink-0"></span>
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-xs space-y-4">
                  <div className="flex items-center gap-2 text-sm font-heading font-bold text-[#0B2D5B]">
                    <Briefcase className="w-5 h-5 text-[#00AEEF]" />
                    <span>Commercial Applications</span>
                  </div>
                  <ul className="space-y-2 text-xs text-[#64748B]">
                    {service.commercialApplications.map((app, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] mt-1.5 shrink-0"></span>
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Service Benefits */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-xs">
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#0B2D5B] mb-6">
                  Key Benefits for You
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="space-y-1.5">
                      <h3 className="text-sm font-heading font-bold text-[#0B2D5B] flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00AEEF]" />
                        <span>{benefit.title}</span>
                      </h3>
                      <p className="text-xs text-[#64748B] leading-relaxed pl-6">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service FAQs */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-xs">
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#0B2D5B] mb-6 flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-[#00AEEF]" />
                  <span>Frequently Asked Questions</span>
                </h2>
                <FaqAccordion items={service.faqs} />
              </div>
            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Quick Action Box */}
              <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-xs space-y-5 sticky top-24">
                <div className="border-b border-[#F1F5F9] pb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#00AEEF]">
                    Local Support in Thrissur
                  </span>
                  <h3 className="text-lg font-heading font-bold text-[#0B2D5B] mt-1">
                    Book This Service
                  </h3>
                  <p className="text-xs text-[#64748B] mt-1">
                    Direct on-site visit or consultation for homes and offices.
                  </p>
                </div>

                <div className="space-y-2.5">
                  <Link
                    href={`/contact?tab=quotation&service=${encodeURIComponent(service.title)}`}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#00AEEF] hover:bg-[#0095ce] text-white text-xs font-bold transition-all shadow-xs"
                  >
                    <span>Request a Free Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href={`/contact?tab=service&category=${encodeURIComponent(service.title)}`}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#E6F0FA] hover:bg-[#0B2D5B] text-[#0B2D5B] hover:text-white text-xs font-semibold transition-colors"
                  >
                    <span>Book Repair Visit</span>
                  </Link>

                  <a
                    href={getWhatsAppUrl(whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-[#25D366] text-xs font-bold border border-emerald-200 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Direct</span>
                  </a>
                </div>

                <div className="pt-4 border-t border-[#F1F5F9] text-xs text-[#64748B] space-y-2">
                  <div className="flex items-center gap-2 text-[#0B2D5B] font-semibold">
                    <Phone className="w-3.5 h-3.5 text-[#00AEEF]" />
                    <span>Call: {siteConfig.phoneDisplay}</span>
                  </div>
                  <p className="text-[11px]">
                    Serving Thrissur, Chalakudy, Guruvayur, Irinjalakuda & surrounding Central Kerala localities.
                  </p>
                </div>

                {/* Other Services Navigation */}
                <div className="pt-4 border-t border-[#F1F5F9]">
                  <h4 className="text-xs font-bold text-[#0B2D5B] uppercase tracking-wider mb-2">
                    Other Services:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#64748B]">
                    {servicesData
                      .filter((s) => s.slug !== service.slug)
                      .map((other) => (
                        <li key={other.slug}>
                          <Link
                            href={`/services/${other.slug}`}
                            className="hover:text-[#00AEEF] transition-colors flex items-center justify-between py-1 group"
                          >
                            <span className="truncate">{other.title}</span>
                            <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#00AEEF]" />
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
