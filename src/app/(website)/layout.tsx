import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { OrganizationAndLocalBusinessJsonLd } from "@/components/seo/JsonLd";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <OrganizationAndLocalBusinessJsonLd />
      <Header />
      <main className="grow">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
