import React, { Suspense } from "react";
import { Metadata } from "next";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  ShieldCheck, 
  CheckCircle2,
  Loader2
} from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { ContactFormsHub } from "@/components/forms/ContactFormsHub";

export const metadata: Metadata = {
  title: "Contact Us & Request a Quote | JS Informatics Thrissur",
  description:
    "Contact JS Informatics in Thrissur, Kerala for CCTV installation, LAN structured networking, Wi-Fi setups, hardware repairs, and quotations. Phone, WhatsApp, and on-site visit requests.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-[#F5F8FC] min-h-screen">
      {/* Hero Banner */}
      <section className="bg-[#0B2D5B] text-white py-14 px-4 sm:px-6 lg:px-8 border-b-4 border-[#00AEEF]">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E376E] text-xs font-semibold text-[#00AEEF]">
            <span>Get in Touch With Us</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight">
            Contact & Service Requests
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Need a quotation for your new house or commercial building? Experiencing camera downtime or slow Wi-Fi? Our Thrissur team is here to assist you.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Direct Info & Location */}
            <div className="lg:col-span-5 space-y-6">
              {/* Contact Card */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-xs space-y-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#00AEEF]">
                    Local Office
                  </span>
                  <h2 className="text-xl font-heading font-bold text-[#0B2D5B] mt-1">
                    JS Informatics
                  </h2>
                  <p className="text-xs text-[#64748B] mt-1">
                    Security, Connectivity & IT Solutions Provider
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-[#1F2937]">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-lg bg-[#E6F0FA] text-[#00AEEF] shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-[#0B2D5B]">Office Location</p>
                      <p className="text-[#64748B] mt-0.5">{siteConfig.address.display}</p>
                      <p className="text-[11px] text-[#00AEEF] mt-1 font-semibold">Near Round, Thrissur</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-lg bg-[#E6F0FA] text-[#00AEEF] shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-[#0B2D5B]">Direct Telephone</p>
                      <a
                        href={`tel:${siteConfig.phone}`}
                        className="text-[#64748B] hover:text-[#00AEEF] transition-colors mt-0.5 block"
                      >
                        {siteConfig.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-lg bg-[#E6F0FA] text-[#00AEEF] shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-[#0B2D5B]">Email Enquiries</p>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-[#64748B] hover:text-[#00AEEF] transition-colors mt-0.5 block truncate"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-lg bg-[#E6F0FA] text-[#00AEEF] shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-[#0B2D5B]">Working Hours</p>
                      <p className="text-[#64748B] mt-0.5">
                        {siteConfig.businessHours.days}: {siteConfig.businessHours.hours}
                      </p>
                      <p className="text-[11px] text-slate-500">Emergency support available on request.</p>
                    </div>
                  </div>
                </div>

                {/* Instant WhatsApp Direct Action */}
                <div className="pt-4 border-t border-[#F1F5F9]">
                  <a
                    href={getWhatsAppUrl("Hello JS Informatics, I have an enquiry regarding CCTV and IT services in Thrissur.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold shadow-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                    <span>Quick Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Service Areas Callout */}
              <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-xs space-y-3">
                <h3 className="text-sm font-heading font-bold text-[#0B2D5B] uppercase tracking-wider">
                  Service Coverage in Thrissur District
                </h3>
                <p className="text-xs text-[#64748B]">
                  We provide physical on-site installation and maintenance visits across:
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {siteConfig.serviceAreas.map((loc, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-[#F5F8FC] border border-[#E2E8F0] text-[11px] font-medium text-[#1F2937]"
                    >
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Multi-Form Hub */}
            <div className="lg:col-span-7">
              <Suspense
                fallback={
                  <div className="p-12 text-center bg-white rounded-2xl border border-[#E2E8F0]">
                    <Loader2 className="w-6 h-6 animate-spin text-[#00AEEF] mx-auto mb-2" />
                    <p className="text-xs text-[#64748B]">Loading form options...</p>
                  </div>
                }
              >
                <ContactFormsHub />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
