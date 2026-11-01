import React from "react";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/auth";
import { SettingsManager } from "@/components/admin/SettingsManager";

export default async function AdminSettingsPage() {
  const session = await getAdminSession();
  if (!session) {
    redirect("/admin/login");
  }

  const settings = await prisma.websiteSetting.findMany({
    orderBy: { key: "asc" },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0B2D5B]">
          Website & Business Settings
        </h1>
        <p className="text-xs text-[#64748B] mt-0.5">
          Configure official company details, phone and WhatsApp contact numbers, address, and service locations.
        </p>
      </div>

      <SettingsManager initialSettings={settings as any} />
    </div>
  );
}
