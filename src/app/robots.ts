import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url || "https://jsinformatics.in";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/admin/", "/api/admin", "/api/admin/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/admin", "/admin/", "/api/admin", "/api/admin/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
