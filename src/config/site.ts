export interface ServiceNavItem {
  title: string;
  href: string;
  description: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  shortDescription: string;
  description: string;
  url: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    display: string;
  };
  businessHours: {
    days: string;
    hours: string;
  };
  serviceAreas: string[];
  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
  navLinks: {
    title: string;
    href: string;
  }[];
  services: ServiceNavItem[];
  productCategories: {
    title: string;
    slug: string;
    description: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "JS Informatics",
  legalName: "JS Informatics Technology Solutions",
  tagline: "Connecting Technology. Protecting What Matters.",
  shortDescription:
    "Security, connectivity and IT solutions provider based in Thrissur, Kerala.",
  description:
    "JS Informatics provides CCTV security systems, structured LAN networking, enterprise Wi-Fi installation, computer hardware maintenance, systems software, and comprehensive IT support for homes and businesses in Thrissur and Central Kerala.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://jsinformatics.in",
  phone: "+919526161805",
  phoneDisplay: "+91 95261 61805",
  whatsapp: "919526161805",
  whatsappDisplay: "+91 95261 61805",
  email: "contact@jsinformatics.in",
  address: {
    street: "Main Road, Near Round",
    city: "Thrissur",
    state: "Kerala",
    postalCode: "680001",
    country: "India",
    display: "Thrissur, Kerala, India - 680001",
  },
  businessHours: {
    days: "Monday – Saturday",
    hours: "9:00 AM – 7:00 PM IST",
  },
  serviceAreas: [
    "Thrissur Round",
    "East Fort",
    "West Fort",
    "Punkunnam",
    "Ayyanthole",
    "Ollur",
    "Kuriachira",
    "Mannuthy",
    "Amala Nagar",
    "Chalakudy",
    "Irinjalakuda",
    "Guruvayur",
    "Kunnamkulam",
    "Central Kerala",
  ],
  social: {
    facebook: "https://facebook.com/jsinformatics",
    instagram: "https://instagram.com/jsinformatics",
    linkedin: "https://linkedin.com/company/jsinformatics",
  },
  navLinks: [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "Products", href: "/products" },
    { title: "Solutions", href: "/solutions" },
    { title: "About Us", href: "/about" },
    { title: "Contact", href: "/contact" },
  ],
  services: [
    {
      title: "CCTV & Security Solutions",
      href: "/services/cctv-security",
      description: "Sales, installation, DVR/NVR setup, mobile viewing & maintenance.",
      icon: "ShieldCheck",
    },
    {
      title: "LAN Networking Solutions",
      href: "/services/lan-networking",
      description: "Structured Cat6 cabling, racks, patch panels & switch setups.",
      icon: "Network",
    },
    {
      title: "Wi-Fi Installation & Support",
      href: "/services/wifi-installation",
      description: "Enterprise access points, mesh Wi-Fi & dead-zone resolution.",
      icon: "Wifi",
    },
    {
      title: "Computer Hardware Services",
      href: "/services/computer-hardware",
      description: "Desktop/laptop diagnostics, RAM/SSD upgrades & assembly.",
      icon: "Cpu",
    },
    {
      title: "Computer Software Support",
      href: "/services/computer-software",
      description: "OS installation, slow PC troubleshooting & software setups.",
      icon: "TerminalSquare",
    },
    {
      title: "Business IT Support",
      href: "/services/business-it-support",
      description: "Workstation management, AMCs, network security & office relocations.",
      icon: "Building2",
    },
  ],
  productCategories: [
    { title: "CCTV Cameras", slug: "cctv-cameras", description: "Dome, bullet, PTZ, and IP surveillance cameras." },
    { title: "DVR & NVR Systems", slug: "dvr-nvr-systems", description: "Standalone network video recorders and digital video recorders." },
    { title: "Hard Disks & Storage", slug: "storage", description: "Surveillance-grade internal HDDs and enterprise SSDs." },
    { title: "Networking Switches", slug: "networking-switches", description: "Managed, unmanaged, and Gigabit PoE network switches." },
    { title: "Routers", slug: "routers", description: "High-performance dual-band and multi-WAN commercial routers." },
    { title: "Wireless Access Points", slug: "wireless-access-points", description: "Ceiling-mount enterprise APs and outdoor Wi-Fi extenders." },
    { title: "Networking Cables", slug: "networking-cables", description: "Cat5e, Cat6 UTP/STP structured copper cabling bundles." },
    { title: "Network Accessories", slug: "network-accessories", description: "Server racks, patch panels, keystones, and RJ45 connectors." },
    { title: "Computer Hardware", slug: "computer-hardware", description: "RAM modules, power supplies, cooling fans, and peripherals." },
    { title: "Security Accessories", slug: "security-accessories", description: "Power supply boxes, BNC/DC connectors, and video baluns." },
  ],
};

export function getWhatsAppUrl(message?: string): string {
  const defaultMsg = "Hello JS Informatics, I would like to enquire about your services.";
  const text = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
}
