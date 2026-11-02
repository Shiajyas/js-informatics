import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/auth";

export async function GET() {    
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const services = await prisma.service.findMany({
      orderBy: { createdAt: "asc" },
      include: { category: true },
    });
    return NextResponse.json({ success: true, services });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id, isPublished, tagline, shortDescription } = await req.json();
    if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });

    const updateData: any = {};
    if (typeof isPublished === "boolean") updateData.isPublished = isPublished;
    if (tagline) updateData.tagline = tagline;
    if (shortDescription) updateData.shortDescription = shortDescription;

    const updated = await prisma.service.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json({ success: true, service: updated });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update service" }, { status: 500 });
  }
}
