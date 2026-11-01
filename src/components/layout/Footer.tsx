import React from "react";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Network, 
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#0B2D5B] text-white border-t-4 border-[#00AEEF]">
      {/* Top Banner: Local Trust Anchor */}
      <div className="bg-[#061B37] py-6 px-4 border-b border-[#133F77]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="p-2.5 rounded-full bg-[#00AEEF]/20 text-[#00AEEF] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">
                Reliable Security & Connectivity Engineering in Thrissur & Central Kerala
              </p>
              <p className="text-xs text-slate-300">
                Residential homes, retail shops, corporate offices & commercial establishments.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/contact?tab=quotation"
              className="px-4 py-2 rounded-lg bg-[#00AEEF] hover:bg-[#0095ce] text-white text-xs font-bold transition-colors shadow-xs"
            >
              Get a Free Quotation
            </Link>
            <Link
              href="/contact?tab=service"
              className="px-4 py-2 rounded-lg bg-[#0E376E] hover:bg-[#164b94] text-slate-100 text-xs font-semibold transition-colors"
            >
              Book Service Repair
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Brand Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="white" />
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm pt-2">
              JS Informatics is your trusted partner for professional CCTV installation, structured LAN networking, enterprise Wi-Fi coverage, and computer maintenance in Thrissur, Kerala.
            </p>
            
            <div className="pt-2 text-xs text-slate-300 space-y-1.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
                <span>{siteConfig.address.display}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#00AEEF] shrink-0" />
                <span>{siteConfig.businessHours.days}: {siteConfig.businessHours.hours}</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3 text-xs">
              <span className="text-slate-400">Official Tagline:</span>
              <span className="text-[#00AEEF] font-semibold italic">
                &ldquo;{siteConfig.tagline}&rdquo;
              </span>
            </div>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider mb-4 border-b border-[#16407B] pb-2">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {siteConfig.services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="hover:text-[#00AEEF] transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 text-[#00AEEF] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div>
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider mb-4 border-b border-[#16407B] pb-2">
              Company & Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/" className="hover:text-[#00AEEF] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#00AEEF] transition-colors">
                  About JS Informatics
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#00AEEF] transition-colors">
                  Product Catalogue
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-[#00AEEF] transition-colors">
                  Residential & Business Solutions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#00AEEF] transition-colors">
                  Contact & Support
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#00AEEF] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-[#00AEEF] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/admin/login" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1">
                  <span>Admin Portal</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Direct */}
          <div>
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider mb-4 border-b border-[#16407B] pb-2">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <p>For urgent support, enquiries, or site inspections in Thrissur:</p>
              
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0E376E] hover:bg-[#164b94] text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#00AEEF]" />
                <span className="font-bold">{siteConfig.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0E376E] hover:bg-[#164b94] text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#00AEEF]" />
                <span className="truncate">{siteConfig.email}</span>
              </a>

              <div className="pt-2">
                <span className="text-[11px] text-slate-400 block mb-1">Central Kerala Service Areas:</span>
                <p className="text-[11px] text-slate-300 line-clamp-3">
                  {siteConfig.serviceAreas.slice(0, 8).join(" • ")} & surrounding areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer */}
      <div className="bg-[#061B37] border-t border-[#133F77] py-4 px-4 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <span>Thrissur, Kerala, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
