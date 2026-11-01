export interface ProductItem {
  id: string;
  name: string;
  slug: string;
  brand: string;
  categorySlug: string;
  categoryName: string;
  shortDescription: string;
  description: string;
  specifications: Record<string, string>;
  availability: "IN_STOCK" | "CALL_FOR_PRICE" | "OUT_OF_STOCK";
  priceDisplay: string;
  isFeatured: boolean;
  image: string;
  seoTitle: string;
  seoDescription: string;
}

export const productsData: ProductItem[] = [
  // 1. CCTV Cameras
  {
    id: "prod-1",
    name: "4MP Outdoor IP Bullet Surveillance Camera",
    slug: "4mp-outdoor-ip-bullet-camera",
    brand: "Hikvision / CP Plus (Available Brands)",
    categorySlug: "cctv-cameras",
    categoryName: "CCTV Cameras",
    shortDescription: "Weatherproof 4 Megapixel network bullet camera with smart infrared night vision up to 30 meters.",
    description:
      "A high-clarity 4MP IP network camera engineered for outdoor residential and commercial surveillance. Featuring an IP67 weatherproof housing, digital wide dynamic range (WDR) for balanced lighting in strong sunlight, and smart IR night illumination.",
    specifications: {
      "Resolution": "4 Megapixel (2560 × 1440)",
      "Lens": "2.8mm / 4mm Fixed Lens",
      "Night Vision": "Smart Infrared up to 30 meters",
      "Weather Rating": "IP67 Weatherproof and Dustproof",
      "Connectivity": "RJ45 Ethernet with PoE (802.3af)",
      "Compression": "H.265+ / H.265 / H.264+",
      "Audio": "Built-in Microphone (Model Dependent)",
    },
    availability: "IN_STOCK",
    priceDisplay: "Contact us for pricing",
    isFeatured: true,
    image: "/images/cctv-installation.jpg",
    seoTitle: "4MP Outdoor IP Bullet Surveillance Camera | JS Informatics Thrissur",
    seoDescription: "High-definition 4MP outdoor IP bullet camera with PoE and 30m night vision. Available for professional installation in Thrissur.",
  },
  {
    id: "prod-2",
    name: "2MP Full HD Indoor Dome Camera",
    slug: "2mp-indoor-dome-camera",
    brand: "CP Plus / Dahua (Available Brands)",
    categorySlug: "cctv-cameras",
    categoryName: "CCTV Cameras",
    shortDescription: "Compact ceiling-mount dome surveillance camera ideal for retail shops, offices, and home interiors.",
    description:
      "Designed for discreet interior installation, this 2MP Full HD dome camera provides wide-angle perimeter visibility with high image fidelity, automatic day/night switching, and clean ceiling mounting.",
    specifications: {
      "Resolution": "1080p Full HD (1920 × 1080)",
      "Form Factor": "Ceiling Mount Compact Dome",
      "Night Vision Range": "Up to 20 meters IR",
      "Field of View": "Approx. 103° Horizontal",
      "Housing": "Durable ABS Plastic",
    },
    availability: "IN_STOCK",
    priceDisplay: "Contact us for pricing",
    isFeatured: false,
    image: "/images/cctv-installation.jpg",
    seoTitle: "2MP Indoor Dome Camera | JS Informatics Thrissur",
    seoDescription: "Discreet 2MP ceiling dome camera for home and office surveillance in Thrissur, Kerala.",
  },

  // 2. DVR and NVR Systems
  {
    id: "prod-3",
    name: "8-Channel 4K Ultra HD Network Video Recorder (NVR)",
    slug: "8-channel-4k-uhd-nvr",
    brand: "Hikvision / CP Plus (Available Brands)",
    categorySlug: "dvr-nvr-systems",
    categoryName: "DVR and NVR Systems",
    shortDescription: "High-performance 8-channel NVR with support for up to 8MP/4K IP cameras and HDMI output.",
    description:
      "A dependable standalone NVR capable of recording up to 8 IP cameras with H.265+ stream compression to maximize hard drive storage efficiency. Features 4K HDMI local output, dual USB ports, and encrypted P2P cloud connectivity for instant mobile streaming.",
    specifications: {
      "Channels": "8 IP Video Channels",
      "Supported Resolution": "Up to 8MP (4K) per channel",
      "HDD Interface": "1 SATA port (up to 8TB capacity)",
      "Video Output": "1x HDMI (4K UHD), 1x VGA (1080p)",
      "Compression": "H.265+ / H.265 / H.264",
      "Remote Access": "Mobile App (Android/iOS) + Web Browser",
    },
    availability: "IN_STOCK",
    priceDisplay: "Contact us for pricing",
    isFeatured: true,
    image: "/images/server-rack.jpg",
    seoTitle: "8-Channel 4K NVR System | JS Informatics Thrissur",
    seoDescription: "8-channel 4K NVR with H.265+ compression and mobile app integration. Professional installation in Thrissur, Kerala.",
  },

  // 3. Hard Disks and Storage
  {
    id: "prod-4",
    name: "2TB Surveillance-Grade Internal Hard Drive",
    slug: "2tb-surveillance-hard-drive",
    brand: "Seagate SkyHawk / WD Purple (Available Brands)",
    categorySlug: "storage",
    categoryName: "Hard Disks and Storage",
    shortDescription: "Engineered specifically for 24/7 continuous write workloads in DVR and NVR security systems.",
    description:
      "Unlike standard desktop hard drives which are built for intermittent read/write cycles, surveillance-grade hard drives are tuned for uninterrupted 24x7 video writing, lower power consumption, and reduced thermal footprint inside video recorders.",
    specifications: {
      "Capacity": "2 Terabytes (2000 GB)",
      "Form Factor": "3.5-inch Internal SATA III (6 Gb/s)",
      "Workload Rating": "Tuned for 24/7 surveillance recording",
      "Cache": "64MB / 256MB",
      "Rotational Speed": "5400 RPM (Low heat and vibration)",
    },
    availability: "IN_STOCK",
    priceDisplay: "Contact us for pricing",
    isFeatured: false,
    image: "/images/hardware-repair.jpg",
    seoTitle: "2TB Surveillance Hard Drive | JS Informatics",
    seoDescription: "Surveillance-grade 2TB internal SATA hard drive for DVR and NVR video recording systems.",
  },

  // 4. Networking Switches
  {
    id: "prod-5",
    name: "8-Port Gigabit PoE+ Unmanaged Network Switch",
    slug: "8-port-gigabit-poe-switch",
    brand: "TP-Link / D-Link / Ruijie (Available Brands)",
    categorySlug: "networking-switches",
    categoryName: "Networking Switches",
    shortDescription: "8 Gigabit Ethernet ports with 802.3af/at Power-over-Ethernet for IP cameras and Wi-Fi access points.",
    description:
      "Delivers both high-speed Gigabit data and electrical power over a single Cat6 network cable. Eliminates the need for separate electrical power adapters at individual IP camera or ceiling Wi-Fi access point locations.",
    specifications: {
      "Ports": "8x 10/100/1000 Mbps RJ45 PoE Ports",
      "PoE Standard": "IEEE 802.3af/at compliant",
      "Total PoE Power Budget": "65W – 120W (Model dependent)",
      "Enclosure": "Sturdy Metal Casing with Wall-mount option",
      "Switching Capacity": "16 Gbps non-blocking",
    },
    availability: "IN_STOCK",
    priceDisplay: "Contact us for pricing",
    isFeatured: true,
    image: "/images/server-rack.jpg",
    seoTitle: "8-Port Gigabit PoE+ Switch | JS Informatics Thrissur",
    seoDescription: "8-Port Gigabit PoE switch for powering CCTV IP cameras and access points. Installed in Thrissur.",
  },

  // 5. Routers
  {
    id: "prod-6",
    name: "Dual-Band Gigabit Wi-Fi 6 Commercial Router",
    slug: "dual-band-gigabit-wifi6-router",
    brand: "TP-Link / Ruijie Reyee (Available Brands)",
    categorySlug: "routers",
    categoryName: "Routers",
    shortDescription: "High-capacity AX1800 Wi-Fi 6 router with Gigabit WAN/LAN ports for high-bandwidth internet connections.",
    description:
      "Designed for smooth handling of multiple simultaneous streaming devices, video meetings, and high-speed fiber internet. Delivers lower latency and greater concurrent client capacity with OFDMA and MU-MIMO technology.",
    specifications: {
      "Wi-Fi Standard": "Wi-Fi 6 (802.11ax/ac/n/g/b/a)",
      "Speed": "Up to 1201 Mbps (5 GHz) + 574 Mbps (2.4 GHz)",
      "Ethernet Ports": "1x Gigabit WAN + 4x Gigabit LAN",
      "Antennas": "4x High-Gain External Antennas",
      "Security": "WPA3 / WPA2 Personal & Enterprise Encryption",
    },
    availability: "IN_STOCK",
    priceDisplay: "Contact us for pricing",
    isFeatured: true,
    image: "/images/wifi-router.jpg",
    seoTitle: "Dual-Band Wi-Fi 6 Router | JS Informatics Thrissur",
    seoDescription: "High-performance Wi-Fi 6 Gigabit router for homes and business offices in Thrissur, Kerala.",
  },

  // 6. Wireless Access Points
  {
    id: "prod-7",
    name: "Ceiling-Mount Dual-Band Enterprise Access Point",
    slug: "ceiling-mount-enterprise-access-point",
    brand: "Ruijie Reyee / TP-Link Omada (Available Brands)",
    categorySlug: "wireless-access-points",
    categoryName: "Wireless Access Points",
    shortDescription: "Professional ceiling-mount access point with seamless fast-roaming and 802.3af PoE support.",
    description:
      "Engineered for aesthetics and high RF coverage. Mounts cleanly to ceiling tiles or concrete slabs, blending into modern office or villa interiors while broadcasting enterprise-grade dual-band Wi-Fi.",
    specifications: {
      "Mounting": "Ceiling / Wall Mount with bracket included",
      "Frequency Bands": "Concurrent 2.4 GHz and 5 GHz",
      "Power Source": "PoE (802.3af) or 12V DC input",
      "Roaming Protocol": "802.11k/v/r seamless roaming",
      "Management": "Cloud Managed / Standalone Web UI",
    },
    availability: "IN_STOCK",
    priceDisplay: "Contact us for pricing",
    isFeatured: true,
    image: "/images/wifi-router.jpg",
    seoTitle: "Ceiling-Mount Enterprise Access Point | JS Informatics",
    seoDescription: "Enterprise ceiling-mount Wi-Fi access point with seamless roaming for villas and offices in Thrissur.",
  },

  // 7. Networking Cables
  {
    id: "prod-8",
    name: "Cat6 UTP Pure Copper Structured Network Cable (305m Drum)",
    slug: "cat6-utp-pure-copper-cable-305m",
    brand: "D-Link / Finolex / Schneider (Available Brands)",
    categorySlug: "networking-cables",
    categoryName: "Networking Cables",
    shortDescription: "Solid 23 AWG 100% pure annealed bare copper 4-pair unshielded twisted pair network cable bundle.",
    description:
      "Reliable structured cabling requires 100% pure copper—never copper-clad aluminum (CCA). This 305-meter drum delivers verified Gigabit performance up to 250 MHz with high insulation resistance and minimal signal attenuation.",
    specifications: {
      "Conductor": "Solid 23 AWG Bare Copper (100% Pure Copper)",
      "Standard": "TIA/EIA-568-C.2 Cat6",
      "Length": "305 Meters (1000 ft) Pull Box",
      "Separator": "Central PE Cross-Spline to prevent crosstalk",
      "Sheath": "Durable FR-PVC / LSZH Jacket",
    },
    availability: "IN_STOCK",
    priceDisplay: "Contact us for pricing",
    isFeatured: false,
    image: "/images/lan-networking.jpg",
    seoTitle: "Cat6 Pure Copper Network Cable 305m | JS Informatics",
    seoDescription: "Solid 23 AWG 100% pure copper Cat6 network cabling for structured office and residential installations in Thrissur.",
  },

  // 8. Network Accessories
  {
    id: "prod-9",
    name: "6U Wall-Mount Network Server Rack Enclosure",
    slug: "6u-wall-mount-network-rack",
    brand: "Valrack / Netrack (Available Brands)",
    categorySlug: "network-accessories",
    categoryName: "Network Accessories",
    shortDescription: "Standard 19-inch 6U wall-mount steel enclosure with toughened glass door and cable entry cutouts.",
    description:
      "Provides organized, secure housing for DVRs, NVRs, network switches, patch panels, and power sockets. Protects valuable network equipment from tampering, dust accumulation, and accidental cable disconnections.",
    specifications: {
      "Size": "6U Standard 19-inch Rack",
      "Construction": "Durable Cold-Rolled Steel with Powder Coating",
      "Front Door": "Toughened Glass with Key Lock",
      "Cooling": "Ventilated side panels with fan mounting slots",
      "Included": "Mounting hardware and internal shelf",
    },
    availability: "IN_STOCK",
    priceDisplay: "Contact us for pricing",
    isFeatured: false,
    image: "/images/server-rack.jpg",
    seoTitle: "6U Wall-Mount Network Rack Enclosure | JS Informatics",
    seoDescription: "Sturdy 6U 19-inch wall-mount network rack for housing DVRs, switches, and patch panels in Thrissur.",
  },

  // 9. Computer Hardware
  {
    id: "prod-10",
    name: "500GB NVMe M.2 High-Speed Solid State Drive (SSD)",
    slug: "500gb-nvme-m2-high-speed-ssd",
    brand: "Crucial / Kingston / Western Digital (Available Brands)",
    categorySlug: "computer-hardware",
    categoryName: "Computer Hardware",
    shortDescription: "Ultra-fast PCIe Gen3/Gen4 NVMe internal SSD for desktop and laptop performance upgrades.",
    description:
      "Breathe new life into your desktop PC or laptop. Delivers read speeds up to 3500 MB/s—over 6 times faster than traditional SATA SSDs and up to 25 times faster than old spinning hard drives. Boot Windows in seconds and eliminate desktop lag.",
    specifications: {
      "Capacity": "500 Gigabytes",
      "Interface": "PCIe NVMe M.2 2280",
      "Sequential Read": "Up to 3,500 MB/s",
      "Sequential Write": "Up to 3,000 MB/s",
      "Compatibility": "Laptops & Desktops with M.2 slots",
    },
    availability: "IN_STOCK",
    priceDisplay: "Contact us for pricing",
    isFeatured: true,
    image: "/images/hardware-repair.jpg",
    seoTitle: "500GB NVMe M.2 SSD Upgrade | JS Informatics Thrissur",
    seoDescription: "High-speed 500GB NVMe M.2 SSD with installation and data migration service in Thrissur.",
  },

  // 10. Security Accessories
  {
    id: "prod-11",
    name: "12V 10A Multi-Channel Centralized CCTV Power Supply Box",
    slug: "12v-10a-cctv-power-supply-box",
    brand: "CP Plus / ERD (Available Brands)",
    categorySlug: "security-accessories",
    categoryName: "Security Accessories",
    shortDescription: "Wall-mount metal power supply box with individual fuse protection for up to 8 surveillance cameras.",
    description:
      "Centralizes power distribution for multi-camera CCTV installations. Prevents individual camera outages from taking down the entire system and protects against voltage spikes with built-in fuse protection and thermal cutoff.",
    specifications: {
      "Input Voltage": "180V – 260V AC, 50Hz",
      "Output Voltage": "12V DC ± 5%",
      "Output Current": "10 Amperes Total",
      "Channel Outputs": "8 Individual Terminal Outputs",
      "Protection": "PTC Resettable Fuse per Channel, Short-Circuit Protection",
    },
    availability: "IN_STOCK",
    priceDisplay: "Contact us for pricing",
    isFeatured: false,
    image: "/images/cctv-installation.jpg",
    seoTitle: "12V 10A CCTV Centralized Power Supply Box | JS Informatics",
    seoDescription: "Regulated 12V 10A multi-channel power supply for CCTV camera installations in Thrissur, Kerala.",
  },
];
