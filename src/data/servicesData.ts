export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  heroImage: string;
  features: string[];
  scopeOfWork: string[];
  benefits: { title: string; description: string }[];
  residentialApplications: string[];
  commercialApplications: string[];
  faqs: { question: string; answer: string }[];
}

export const servicesData: ServiceDetail[] = [
  {
    id: "cctv-security",
    slug: "cctv-security",
    title: "CCTV & Security Solutions",
    category: "Surveillance & Security",
    tagline: "High-definition surveillance systems designed for perimeter security and peace of mind.",
    shortDescription:
      "Comprehensive CCTV camera sales, professional installation, DVR/NVR configuration, mobile live-view setup, troubleshooting, and preventive maintenance.",
    fullDescription:
      "JS Informatics delivers end-to-end electronic surveillance solutions tailored for residential villas, retail shops, warehouses, commercial complexes, and office buildings in Thrissur and Central Kerala. We specify, mount, wire, and configure modern IP camera and HD analog systems that provide round-the-clock video capture, smart motion alerts, and crystal-clear remote viewing directly on your smartphone.",
    icon: "ShieldCheck",
    heroImage: "/images/cctv-installation.jpg",
    features: [
      "IP Network Cameras & HD Analog Surveillance Systems",
      "Network Video Recorders (NVR) & Digital Video Recorders (DVR)",
      "High-Definition Day/Night Vision & Infrared Night Illumination",
      "Secure Mobile App Remote Live Viewing & Playback Setup",
      "Perimeter Motion Detection & Instant Alert Notifications",
      "Surveillance-grade Hard Disk Drive Installation & Storage Calculation",
      "CCTV System Troubleshooting, Lens Cleaning & Preventative AMC",
      "Video Door Phones & Basic Biometric Access Control Integration",
    ],
    scopeOfWork: [
      "CCTV camera sales and hardware selection",
      "Site survey and optimal camera angle positioning",
      "Concealed / conduit cable routing (Cat6 / Coaxial RG59)",
      "DVR / NVR rack mounting and termination",
      "Port forwarding and secure P2P mobile cloud configuration",
      "Existing camera line testing, power supply repair, and BNC/RJ45 replacement",
    ],
    benefits: [
      {
        title: "24/7 Visual Deterrence & Evidence",
        description:
          "Visible, cleanly positioned cameras protect entrances, cash counters, parking lots, and inventory yards.",
      },
      {
        title: "Seamless Smartphone Access",
        description:
          "Monitor your home or business premises in real time from anywhere with encrypted mobile viewing.",
      },
      {
        title: "Reliable Surveillance Storage",
        description:
          "We configure continuous and motion-triggered recording modes to maximize footage retention days.",
      },
      {
        title: "Local Maintenance & Fast Repair",
        description:
          "Rapid diagnosis of offline cameras, power supply dropouts, hard disk failures, and video signal noise in Thrissur.",
      },
    ],
    residentialApplications: [
      "Villa perimeter and main gate monitoring",
      "Porch, courtyard, and boundary wall coverage",
      "Living room and elder care monitoring",
      "Video door phone communication with visitors",
    ],
    commercialApplications: [
      "Retail billing counters and point-of-sale monitoring",
      "Showroom floor and customer footfall tracking",
      "Office server room and document archive security",
      "Warehouse loading bays and vehicle entry points",
    ],
    faqs: [
      {
        question: "Can I view my CCTV cameras on my mobile phone when I am away from home?",
        answer:
          "Yes. We configure encrypted P2P cloud access or static IP configurations on your mobile devices (Android and iOS), enabling you to monitor live feeds and review recorded footage securely over mobile data.",
      },
      {
        question: "What is the difference between IP cameras and HD Analog cameras?",
        answer:
          "HD Analog cameras use coaxial cables connected to a DVR and are cost-effective for standard residences. IP cameras transmit digital video over Cat6 Ethernet cables to an NVR, offering higher resolutions (4MP, 8MP/4K), intelligent video analytics, and simplified long-distance cabling.",
      },
      {
        question: "How many days of video recording can the system store?",
        answer:
          "Storage duration depends on the number of cameras, recording resolution, frame rate, compression codec (H.265+), and hard disk capacity. We calculate your exact storage requirements—typically 15 to 30 days of continuous or motion-activated footage.",
      },
      {
        question: "Do you repair existing CCTV systems installed by other vendors?",
        answer:
          "Yes. Our technicians troubleshoot offline cameras, power supply failures, damaged cabling, DVR startup loops, and replace faulty hard disks for existing setups.",
      },
    ],
  },
  {
    id: "lan-networking",
    slug: "lan-networking",
    title: "LAN Networking Solutions",
    category: "Structured Cabling & Infrastructure",
    tagline: "Robust, high-speed structured cabling and network backbone design for offices and homes.",
    shortDescription:
      "Cat5e and Cat6 structured cabling, RJ45 termination, patch panel dress-up, server rack organization, switch deployment, cable certification testing, and office network expansion.",
    fullDescription:
      "A dependable Local Area Network (LAN) is the foundation of modern business productivity. JS Informatics plans, installs, and certifies structured network cabling infrastructure across Thrissur and Kerala. From multi-point office workstation drops to data server racks and network switches, we ensure interference-free Gigabit transmission with clean labelling and neat cable management.",
    icon: "Network",
    heroImage: "/images/lan-networking.jpg",
    features: [
      "Structured Cat6 and Cat6A Copper Cabling Installation",
      "Standard 19-inch Wall-mount and Floor Server Rack Organization",
      "Patch Panel Punch-down, Cable Dressing & Port Number Labelling",
      "RJ45 Modular Jack Faceplate Termination & Keystone Installation",
      "Unmanaged & Managed Gigabit PoE Network Switch Deployment",
      "Continuity Testing, Wire-map Verification & Signal Loss Diagnosis",
      "Office Floor Network Expansion & Workstation Drop Additions",
      "Clean Conduit Piping & Cable Trunking for Neat Interiors",
    ],
    scopeOfWork: [
      "Network architecture planning and drop count estimation",
      "PVC casing / conduit laying and vertical riser routing",
      "Cat6 cable pull and separation from high-voltage electrical lines",
      "Rack dressing with horizontal cable managers and velcro ties",
      "Switch port assignment, VLAN mapping support, and documentation",
      "Troubleshooting damaged runs, cross-talk, and slow network speeds",
    ],
    benefits: [
      {
        title: "Guaranteed Gigabit Throughput",
        description:
          "Wired Cat6 drops deliver consistent 1000 Mbps speeds free from wireless interference or dropouts.",
      },
      {
        title: "Neat & Maintainable Rack Layouts",
        description:
          "Clear port labelling and colour-coded patch leads simplify future equipment moves, additions, and changes.",
      },
      {
        title: "Eliminates Network Bottlenecks",
        description:
          "Optimized switch uplinks prevent data congestion between office workstations, NAS drives, and printers.",
      },
      {
        title: "Standards-Compliant Installation",
        description:
          "Proper cable bend radiuses, termination standards (T568B), and separation from 230V power lines.",
      },
    ],
    residentialApplications: [
      "Smart TV, gaming console, and home office hardwired drops",
      "Direct Cat6 links between ground floor and first floor routers",
      "Hardwired uplink to rooftop solar inverters and home servers",
    ],
    commercialApplications: [
      "Open-plan office workstation network connectivity",
      "POS terminal, barcode scanner, and receipt printer networking",
      "School computer lab and tuition center network installations",
      "Inter-floor switch trunking for multi-storey commercial complexes",
    ],
    faqs: [
      {
        question: "Why should an office prefer wired LAN cabling over purely Wi-Fi?",
        answer:
          "While Wi-Fi offers mobility, wired LAN cabling provides guaranteed bandwidth, lower latency, immunity to radio interference, and superior stability for heavy file transfers, billing databases, VoIP phones, and CCTV streams.",
      },
      {
        question: "What is the difference between Cat5e and Cat6 cabling?",
        answer:
          "Cat6 cables support higher frequencies (up to 250 MHz) and feature thicker copper gauge and tighter twists with a central spline, reducing crosstalk and ensuring full Gigabit (and 10G over short runs) performance. We recommend Cat6 for all modern installations.",
      },
      {
        question: "Can you reorganize messy network cables inside an existing office rack?",
        answer:
          "Yes. We specialize in server rack remediation—auditing messy patch cords, tracing ports, re-terminating damaged keystones, and installing tidy horizontal cable managers.",
      },
    ],
  },
  {
    id: "wifi-installation",
    slug: "wifi-installation",
    title: "Wi-Fi Installation & Support",
    category: "Wireless Connectivity",
    tagline: "Seamless, whole-premise wireless coverage without dead zones or frustrating drops.",
    shortDescription:
      "Enterprise access point deployment, mesh Wi-Fi system setup, commercial router configuration, coverage dead-zone troubleshooting, guest Wi-Fi segregation, and secure wireless authentication.",
    fullDescription:
      "Standard telecom ISP routers rarely provide adequate wireless coverage through thick concrete walls and across multi-level buildings common in Kerala. JS Informatics engineers robust wireless environments using dedicated ceiling-mount access points and mesh systems, delivering unified SSID roaming, strong signal in every room, and secure client isolation.",
    icon: "Wifi",
    heroImage: "/images/wifi-router.jpg",
    features: [
      "Dual-band & Wi-Fi 6 Access Point Ceiling & Wall Mounting",
      "Whole-Home Mesh Wi-Fi Network Design & Roaming Setup",
      "Concrete Wall RF Signal Penetration & Dead-Zone Elimination",
      "Secure Guest Wi-Fi Network Isolation from Corporate LAN",
      "Router & Access Point Power-over-Ethernet (PoE) Wiring",
      "Channel Frequency Optimization to Prevent Spectrum Congestion",
      "Dedicated Wi-Fi Subnets for CCTV Cameras & Smart IoT Appliances",
      "Outdoor Weatherproof Access Point Installation for Yards & Lawns",
    ],
    scopeOfWork: [
      "Wireless signal survey and dead-zone mapping",
      "PoE Cat6 link installation from central switch to AP locations",
      "Centralized controller or cloud management configuration",
      "SSID creation with WPA2/WPA3 enterprise and personal security",
      "Band steering (2.4 GHz for distance/IoT, 5 GHz for speed)",
    ],
    benefits: [
      {
        title: "Seamless Roaming Across Floors",
        description:
          "Move between rooms and storeys on video or audio calls without dropping connection or switching SSIDs.",
      },
      {
        title: "Elimination of Weak Signal Spots",
        description:
          "Strategic AP placement ensures strong coverage in corner bedrooms, basements, balconies, and retail aisles.",
      },
      {
        title: "Secure Guest Wi-Fi",
        description:
          "Provide visitors and customers internet access while strictly isolating your billing servers and internal files.",
      },
      {
        title: "Stable IoT Device Connections",
        description:
          "Keep smart TVs, CCTV cameras, and mobile devices connected without crashing the home router.",
      },
    ],
    residentialApplications: [
      "Multi-storey concrete villas with thick structural walls",
      "Outdoor patio, garden, and car porch Wi-Fi extension",
      "Dedicated, low-latency Wi-Fi for work-from-home and study desks",
    ],
    commercialApplications: [
      "Cafes, restaurants, and retail showrooms needing customer Wi-Fi",
      "Corporate offices requiring seamless employee laptop mobility",
      "Hotels, resorts, and homestays needing multi-room wireless access",
    ],
    faqs: [
      {
        question: "Why does my internet slow down on the first floor when the router is on the ground floor?",
        answer:
          "Reinforced concrete floor slabs in Kerala homes severely attenuate 5 GHz and 2.4 GHz radio waves. Installing a hardwired access point or wired-backhaul mesh unit on the upper floor completely resolves this issue.",
      },
      {
        question: "Can customers use our Wi-Fi without seeing our office computers or cash register?",
        answer:
          "Yes. We configure a dedicated Guest Network with VLAN separation. Guests can access the internet, but cannot communicate with your internal billing systems, CCTV NVR, or shared office printers.",
      },
    ],
  },
  {
    id: "computer-hardware",
    slug: "computer-hardware",
    title: "Computer Hardware Services",
    category: "Hardware Diagnostics & Upgrades",
    tagline: "Reliable diagnostics, component upgrades, custom desktop builds, and preventive maintenance.",
    shortDescription:
      "Desktop troubleshooting, laptop diagnostics, RAM and NVMe SSD speed upgrades, custom desktop assembly, power supply testing, thermal paste servicing, and hardware repairs.",
    fullDescription:
      "Whether your office workstation refuses to turn on or your home PC has slowed down over time, JS Informatics delivers genuine hardware diagnostics and repair services in Thrissur. We restore speed and reliability using quality components, including high-speed SSDs, tested RAM modules, certified power supplies, and proper thermal maintenance.",
    icon: "Cpu",
    heroImage: "/images/hardware-repair.jpg",
    features: [
      "Comprehensive Desktop PC Diagnostic Benchmarking",
      "Slow HDD to High-Speed SATA / NVMe M.2 SSD Upgrades",
      "DDR4 / DDR5 RAM Expansion & Dual-Channel Memory Tuning",
      "Custom PC Assembly for Engineering, Editing & Office Work",
      "SMPS Power Supply Testing & Voltage Rail Inspection",
      "CPU / GPU Heatsink Dust Cleaning & Thermal Paste Re-application",
      "Laptop Screen, Keyboard, and Battery Replacement Assistance",
      "Dual-Monitor & Peripheral Hardware Installation",
    ],
    scopeOfWork: [
      "Hardware POST failure diagnosis (beep codes, LED diagnostics)",
      "Safe data cloning from aging hard disks to new SSDs",
      "Internal dust cleaning and cooling fan replacement",
      "Motherboard BIOS updating and memory stability testing",
      "Installation of surge protection recommendations for local power stability",
    ],
    benefits: [
      {
        title: "Dramatic Speed Boost with SSDs",
        description:
          "Transform a sluggish computer into a fast workstation that boots in 15 seconds and opens apps instantly.",
      },
      {
        title: "Extended Computer Lifespan",
        description:
          "Targeted hardware upgrades avoid the costly need to purchase brand-new systems prematurely.",
      },
      {
        title: "Safe Hardware Handling",
        description:
          "Proper anti-static procedures and careful assembly protect sensitive microelectronics from damage.",
      },
      {
        title: "Honest Diagnostics",
        description:
          "Clear explanation of whether a component repair or upgrade is cost-effective before proceeding.",
      },
    ],
    residentialApplications: [
      "Family desktop tune-up and speed optimization",
      "Student study laptops needing battery or keyboard replacement",
      "Custom performance PC builds for content creators and gamers",
    ],
    commercialApplications: [
      "Office desktop fleet SSD upgrades and RAM standardization",
      "Accounting PC hardware redundancy and thermal maintenance",
      "Multi-display trading and monitoring workstation setups",
    ],
    faqs: [
      {
        question: "Can an old desktop or laptop be sped up without buying a new one?",
        answer:
          "In almost all cases, replacing an old mechanical hard disk with a modern solid-state drive (SSD) and upgrading the RAM to 8GB or 16GB delivers a 5x to 10x improvement in daily responsiveness at a fraction of the cost of a new computer.",
      },
      {
        question: "Will my files and operating system be preserved when upgrading to an SSD?",
        answer:
          "Yes. We perform sector-by-sector disk cloning or clean installations followed by full user data migration, ensuring all your documents, accounting databases, and desktop files remain intact.",
      },
    ],
  },
  {
    id: "computer-software",
    slug: "computer-software",
    title: "Computer Software Support",
    category: "Operating Systems & Applications",
    tagline: "Operating system installations, driver configurations, virus removal, and software stability.",
    shortDescription:
      "Windows and Linux OS installation, genuine driver setup, startup problem diagnosis, email client configuration, network printer installation, and data backup assistance.",
    fullDescription:
      "Software issues, corrupt drivers, and background bloatware can bring business operations to a halt. JS Informatics provides structured software support in Thrissur. We troubleshoot blue screen crashes, configure legitimate operating system installations, optimize startup tasks, set up multi-user printer sharing, and assist with secure file backups.",
    icon: "TerminalSquare",
    heroImage: "/images/it-support.jpg",
    features: [
      "Windows 11 / 10 & Linux Distribution Installation & Configuration",
      "Certified Hardware Driver Installation & Chipset Updates",
      "Slow Boot Time & Background Service Startup Optimization",
      "Network Printer & Shared Scanner Driver Setup Across LAN",
      "Microsoft Outlook & Business Email Protocol (IMAP/POP3) Setup",
      "Malware, Adware & Registry Corruption Cleanup",
      "Automated Local Data Backup Configuration to External Storage",
      "Browser & Connectivity Troubleshooting",
    ],
    scopeOfWork: [
      "Operating system clean installations and recovery partition creation",
      "Resolution of Windows Update boot loops and driver conflict crashes",
      "Network folder permission mapping and user credential setup",
      "PDF utility, office suite, and accounting software environment setup",
      "Ethical remote assistance sessions (with customer consent only)",
    ],
    benefits: [
      {
        title: "Legitimate & Stable Software Environments",
        description:
          "We follow verified software licensing standards, avoiding unstable pirated modifications that risk malware.",
      },
      {
        title: "Elimination of Annoying Crashes",
        description:
          "Proper driver installation resolves unexplained freezes, blue screens, and peripheral communication errors.",
      },
      {
        title: "Smooth Network Sharing",
        description:
          "Print and scan seamlessly from any laptop or desktop on your local office network.",
      },
      {
        title: "Protected Data",
        description:
          "Guidance on creating regular automated backups to prevent catastrophic loss from ransomware or drive failure.",
      },
    ],
    residentialApplications: [
      "Personal laptop operating system re-installation and cleanup",
      "Setting up parental controls and secure web browsing",
      "Transferring photos and documents to external backup drives",
    ],
    commercialApplications: [
      "Standardizing software images across office workstations",
      "Network barcode and receipt printer sharing across billing counters",
      "Configuring email clients and automated database export routines",
    ],
    faqs: [
      {
        question: "Do you install pirated or cracked operating systems?",
        answer:
          "No. JS Informatics adheres strictly to legitimate software practices. We install official operating systems and guide customers on purchasing valid software licenses to ensure system stability and security.",
      },
      {
        question: "Can you help fix software problems remotely?",
        answer:
          "Yes, for software-related issues where the computer still has active internet access, we can provide remote assistance. We always obtain your explicit permission, use reputable remote software, and terminate the session immediately once the task is finished.",
      },
    ],
  },
  {
    id: "business-it-support",
    slug: "business-it-support",
    title: "Business IT Support & AMCs",
    category: "Commercial Infrastructure",
    tagline: "Proactive IT infrastructure care and Annual Maintenance Contracts for growing businesses.",
    shortDescription:
      "Complete office workstation setup, network and Wi-Fi administration, printer sharing, IT equipment inventory, new office IT fit-outs, and preventive Annual Maintenance Contracts (AMC).",
    fullDescription:
      "Small and medium businesses in Thrissur require dependable technology without the overhead of a full-time in-house IT team. JS Informatics acts as your dedicated technology partner, ensuring your workstations, network switches, routers, printers, and CCTV systems operate smoothly with scheduled maintenance visits and priority troubleshooting.",
    icon: "Building2",
    heroImage: "/images/server-rack.jpg",
    features: [
      "Comprehensive Annual Maintenance Contracts (AMC) for Office IT",
      "New Office IT Infrastructure Setup (Cabling, Wi-Fi, Workstations)",
      "Office Relocation & IT Equipment Dismantling / Re-assembly",
      "Centralized Network Printer & Shared Scanner Fleet Management",
      "Basic Network Firewall, Router Security & Port Hardening",
      "Periodic Preventive Maintenance: Dust Cleaning, Cable Checks, Fan Tests",
      "Hardware Inventory Auditing & Upgrade Roadmap Planning",
      "Priority On-Site Support Response for Contracted Clients",
    ],
    scopeOfWork: [
      "Periodic on-site preventive maintenance visits",
      "Audit of office cabling, switches, routers, and power supply UPS units",
      "Single-point-of-contact for computer, network, and surveillance issues",
      "Backup schedule verification for critical business files",
      "Consultation on equipment procurement and office tech expansion",
    ],
    benefits: [
      {
        title: "Minimized Office Downtime",
        description:
          "Proactive servicing catches failing hard disks and overheating components before they cause workday disruptions.",
      },
      {
        title: "Single Trusted Vendor",
        description:
          "One phone call handles your computers, internet, Wi-Fi access points, and security cameras.",
      },
      {
        title: "Predictable IT Expenditure",
        description:
          "Annual Maintenance Contracts provide transparent costs and eliminate unexpected hourly service bills.",
      },
      {
        title: "Local Thrissur Presence",
        description:
          "Fast on-site physical assistance when hardware fails or office cabling needs immediate attention.",
      },
    ],
    residentialApplications: [
      "Home-office setups for professionals requiring high-reliability internet",
      "Multi-workstation home studios with shared storage (NAS)",
    ],
    commercialApplications: [
      "Chartered accountant, law firm, and consultancy offices",
      "Retail store chains and supermarkets across Thrissur district",
      "Clinics, hospitals, and diagnostic centers needing dependable printing and LAN",
      "Distribution centers and wholesale trader offices",
    ],
    faqs: [
      {
        question: "What is included in an Annual Maintenance Contract (AMC) with JS Informatics?",
        answer:
          "Our standard AMC covers scheduled preventive maintenance visits (dust cleaning, thermal checks, cable integrity), priority breakdown troubleshooting, software updates, printer network troubleshooting, and CCTV health checks. Replacement hardware parts are charged at actuals upon approval.",
      },
      {
        question: "Can JS Informatics help set up IT infrastructure for a brand-new office?",
        answer:
          "Yes. We handle the complete IT fit-out: structured Cat6 cabling, server rack installation, router/switch configuration, Wi-Fi coverage across all cabins, CCTV security, and desktop workstation setup.",
      },
    ],
  },
];
