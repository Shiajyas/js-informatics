import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status");
  const type = searchParams.get("type");
  const search = searchParams.get("search");

  const where: any = {};

  if (status && status !== "ALL") {
    where.status = status;
  }

  if (type && type !== "ALL") {
    where.type = type;
  }

  if (search) {
    where.OR = [
      { customerName: { contains: search } },
      { phone: { contains: search } },
      { referenceNumber: { contains: search } },
      { location: { contains: search } },
    ];
  }

  try {
    const enquiries = await prisma.enquiry.findMany({
      where,
      orderBy: { createdAt: "desc" },
      include: {
        notes: {
          orderBy: { createdAt: "desc" },
        },
      },
    });

    return NextResponse.json({ success: true, enquiries });
  } catch (error) {
    console.error("Failed to fetch enquiries:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id, status, note } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "Enquiry ID required" }, { status: 400 });
    }

    const dataToUpdate: any = {};
    if (status) {
      dataToUpdate.status = status;
    }

    // Update status if provided
    const updated = await prisma.enquiry.update({
      where: { id },
      data: dataToUpdate,
    });

    // Add internal note if provided
    if (note && note.trim().length > 0) {
      await prisma.enquiryNote.create({
        data: {
          enquiryId: id,
          author: session.name || session.username,
          note: note.trim(),
        },
      });
    }

    const fullUpdated = await prisma.enquiry.findUnique({
      where: { id },
      include: { notes: { orderBy: { createdAt: "desc" } } },
    });

    return NextResponse.json({ success: true, enquiry: fullUpdated });
  } catch (error) {
    console.error("Failed to update enquiry:", error);
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ error: "Missing ID" }, { status: 400 });

    await prisma.enquiry.delete({ where: { id } });
    return NextResponse.json({ success: true, message: "Enquiry deleted." });
  } catch (error) {
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}
