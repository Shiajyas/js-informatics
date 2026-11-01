import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/auth";

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const settings = await prisma.websiteSetting.findMany({
      orderBy: { key: "asc" },
    });
    return NextResponse.json({ success: true, settings });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { settings } = await req.json();

    if (!Array.isArray(settings)) {
      return NextResponse.json({ error: "Settings must be an array" }, { status: 400 });
    }

    for (const item of settings) {
      if (item.key && typeof item.value === "string") {
        await prisma.websiteSetting.upsert({
          where: { key: item.key },
          update: { value: item.value },
          create: {
            key: item.key,
            value: item.value,
            group: item.group || "GENERAL",
          },
        });
      }
    }

    const updatedSettings = await prisma.websiteSetting.findMany();
    return NextResponse.json({ success: true, settings: updatedSettings });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update settings" }, { status: 500 });
  }
}
