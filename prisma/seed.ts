import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { siteConfig } from "../src/config/site";
import { servicesData } from "../src/data/servicesData";
import { productsData } from "../src/data/productsData";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting JS Informatics Database Seed...");

  // 1. Seed Admin User
  const defaultPassword = "AdminPassword123!";
  const passwordHash = bcrypt.hashSync(defaultPassword, 10);

  const admin = await prisma.adminUser.upsert({
    where: { username: "admin" },
    update: {
      passwordHash,
      email: "admin@jsinformatics.in",
    },
    create: {
      username: "admin",
      email: "admin@jsinformatics.in",
      name: "JS Informatics Administrator",
      passwordHash,
      role: "SUPER_ADMIN",
    },
  });
  console.log(`✅ Admin user seeded: ${admin.username} / ${defaultPassword}`);

  // 2. Seed Product Categories & Products
  for (let i = 0; i < siteConfig.productCategories.length; i++) {
    const cat = siteConfig.productCategories[i];
    const category = await prisma.productCategory.upsert({
      where: { slug: cat.slug },
      update: {
        name: cat.title,
        description: cat.description,
        sortOrder: i,
      },
      create: {
        name: cat.title,
        slug: cat.slug,
        description: cat.description,
        sortOrder: i,
      },
    });

    // Seed products for this category
    const catProducts = productsData.filter((p) => p.categorySlug === cat.slug);
    for (const prod of catProducts) {
      await prisma.product.upsert({
        where: { slug: prod.slug },
        update: {
          name: prod.name,
          brand: prod.brand,
          shortDescription: prod.shortDescription,
          description: prod.description,
          specifications: JSON.stringify(prod.specifications),
          availability: prod.availability,
          priceDisplay: prod.priceDisplay,
          isFeatured: prod.isFeatured,
          image: prod.image,
          seoTitle: prod.seoTitle,
          seoDescription: prod.seoDescription,
        },
        create: {
          name: prod.name,
          slug: prod.slug,
          brand: prod.brand,
          categoryId: category.id,
          shortDescription: prod.shortDescription,
          description: prod.description,
          specifications: JSON.stringify(prod.specifications),
          availability: prod.availability,
          priceDisplay: prod.priceDisplay,
          isFeatured: prod.isFeatured,
          image: prod.image,
          seoTitle: prod.seoTitle,
          seoDescription: prod.seoDescription,
        },
      });
    }
  }
  console.log("✅ Product categories and products seeded.");

  // 3. Seed Services
  const defaultCategory = await prisma.serviceCategory.upsert({
    where: { slug: "core-it-services" },
    update: { name: "Core Technology & Security Services" },
    create: {
      name: "Core Technology & Security Services",
      slug: "core-it-services",
      description: "Electronic surveillance, structured networking, Wi-Fi and computing maintenance.",
    },
  });

  for (const s of servicesData) {
    await prisma.service.upsert({
      where: { slug: s.slug },
      update: {
        title: s.title,
        tagline: s.tagline,
        shortDescription: s.shortDescription,
        fullDescription: s.fullDescription,
        icon: s.icon,
        heroImage: s.heroImage,
        features: JSON.stringify(s.features),
        scopeOfWork: JSON.stringify(s.scopeOfWork),
        benefits: JSON.stringify(s.benefits),
        residentialApps: JSON.stringify(s.residentialApplications),
        commercialApps: JSON.stringify(s.commercialApplications),
        faqs: JSON.stringify(s.faqs),
        isPublished: true,
      },
      create: {
        title: s.title,
        slug: s.slug,
        categoryId: defaultCategory.id,
        tagline: s.tagline,
        shortDescription: s.shortDescription,
        fullDescription: s.fullDescription,
        icon: s.icon,
        heroImage: s.heroImage,
        features: JSON.stringify(s.features),
        scopeOfWork: JSON.stringify(s.scopeOfWork),
        benefits: JSON.stringify(s.benefits),
        residentialApps: JSON.stringify(s.residentialApplications),
        commercialApps: JSON.stringify(s.commercialApplications),
        faqs: JSON.stringify(s.faqs),
        isPublished: true,
      },
    });
  }
  console.log("✅ Services seeded.");

  // 4. Seed Website Settings
  const settings = [
    { key: "company_name", value: siteConfig.name, group: "GENERAL" },
    { key: "company_tagline", value: siteConfig.tagline, group: "GENERAL" },
    { key: "company_phone", value: siteConfig.phone, group: "CONTACT" },
    { key: "company_phone_display", value: siteConfig.phoneDisplay, group: "CONTACT" },
    { key: "company_whatsapp", value: siteConfig.whatsapp, group: "CONTACT" },
    { key: "company_email", value: siteConfig.email, group: "CONTACT" },
    { key: "company_address", value: siteConfig.address.display, group: "CONTACT" },
    { key: "business_hours", value: `${siteConfig.businessHours.days}: ${siteConfig.businessHours.hours}`, group: "CONTACT" },
    { key: "service_areas", value: siteConfig.serviceAreas.join(", "), group: "CONTACT" },
  ];

  for (const set of settings) {
    await prisma.websiteSetting.upsert({
      where: { key: set.key },
      update: { value: set.value },
      create: {
        key: set.key,
        value: set.value,
        group: set.group,
      },
    });
  }
  console.log("✅ Website settings seeded.");

  // 5. Seed Clearly Labelled Demonstration Enquiries (for testing admin workflows)
  const demoEnquiries = [
    {
      referenceNumber: "JSI-QUO-DEMO1",
      type: "QUOTATION",
      customerName: "[DEMO] Dr. Varghese",
      phone: "+91 94471 00001",
      email: "demo-varghese@example.com",
      location: "East Fort, Thrissur",
      serviceCategory: "CCTV & Security Solutions",
      requirementType: "COMMERCIAL",
      message: "Need itemized quotation for 8 outdoor 4MP IP cameras and 1 NVR with 2TB hard disk for dental clinic.",
      status: "NEW",
    },
    {
      referenceNumber: "JSI-SRV-DEMO2",
      type: "SERVICE_REQUEST",
      customerName: "[DEMO] Smt. Lakshmi Menon",
      phone: "+91 98460 00002",
      email: "demo-lakshmi@example.com",
      location: "Punkunnam, Thrissur",
      serviceCategory: "Wi-Fi Installation & Support",
      requirementType: "RESIDENTIAL",
      deviceType: "TP-Link Dual Band Router",
      problemDetails: "Wi-Fi signal does not reach upper bedrooms through concrete slab.",
      message: "Require on-site visit to inspect and install a wired access point upstairs.",
      status: "CONTACTED",
    },
    {
      referenceNumber: "JSI-ENQ-DEMO3",
      type: "GENERAL",
      customerName: "[DEMO] Rajesh Kumar",
      phone: "+91 94472 00003",
      email: "demo-rajesh@example.com",
      location: "Ayyanthole, Thrissur",
      serviceCategory: "LAN Networking Solutions",
      requirementType: "COMMERCIAL",
      message: "Opening a 12-desk accounting office next month. Looking for Cat6 cabling and rack setup.",
      status: "QUOTATION_SENT",
    },
  ];

  for (const enq of demoEnquiries) {
    await prisma.enquiry.upsert({
      where: { referenceNumber: enq.referenceNumber },
      update: {},
      create: enq,
    });
  }
  console.log("✅ Demonstration enquiries seeded.");

  console.log("🚀 Database seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
