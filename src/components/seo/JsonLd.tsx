import React from "react";
import { siteConfig } from "@/config/site";
import { ServiceDetail } from "@/data/servicesData";
import { ProductItem } from "@/data/productsData";

export function OrganizationAndLocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteConfig.url}/#localbusiness`,
        "name": siteConfig.name,
        "legalName": siteConfig.legalName,
        "url": siteConfig.url,
        "logo": `${siteConfig.url}/logo/js-logo-horizontal.svg`,
        "image": `${siteConfig.url}/images/hero-tech.jpg`,
        "description": siteConfig.description,
        "telephone": siteConfig.phone,
        "email": siteConfig.email,
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": siteConfig.address.street,
          "addressLocality": siteConfig.address.city,
          "addressRegion": siteConfig.address.state,
          "postalCode": siteConfig.address.postalCode,
          "addressCountry": "IN",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 10.5276,
          "longitude": 76.2144,
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            "opens": "09:00",
            "closes": "19:00",
          },
        ],
        "areaServed": siteConfig.serviceAreas.map((area) => ({
          "@type": "Place",
          "name": `${area}, Kerala`,
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        "url": siteConfig.url,
        "name": siteConfig.name,
        "description": siteConfig.tagline,
        "publisher": {
          "@id": `${siteConfig.url}/#localbusiness`,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceJsonLd({ service }: { service: ServiceDetail }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.shortDescription,
    "provider": {
      "@type": "LocalBusiness",
      "name": siteConfig.name,
      "telephone": siteConfig.phone,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Thrissur",
        "addressRegion": "Kerala",
        "addressCountry": "IN",
      },
    },
    "areaServed": {
      "@type": "State",
      "name": "Kerala",
    },
    "serviceType": service.category,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "description": "Itemized on-site inspection and quotation in Thrissur.",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProductJsonLd({ product }: { product: ProductItem }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": `${siteConfig.url}${product.image}`,
    "description": product.shortDescription,
    "brand": {
      "@type": "Brand",
      "name": product.brand,
    },
    "category": product.categoryName,
    "offers": {
      "@type": "Offer",
      "url": `${siteConfig.url}/products/${product.slug}`,
      "priceCurrency": "INR",
      "availability":
        product.availability === "IN_STOCK"
          ? "https://schema.org/InStock"
          : "https://schema.org/PreOrder",
      "price": "0", // Stated as Contact for pricing
      "priceValidUntil": "2027-12-31",
      "seller": {
        "@type": "Organization",
        "name": siteConfig.name,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
