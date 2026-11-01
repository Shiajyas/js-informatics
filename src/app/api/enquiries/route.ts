import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { 
  generalEnquirySchema, 
  quotationRequestSchema, 
  serviceRequestSchema 
} from "@/schemas/enquirySchemas";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, data } = body;

    let prefix = "JSI-ENQ";
    let customerName = "";
    let phone = "";
    let email: string | undefined = undefined;
    let location = "";
    let serviceCategory: string | undefined = undefined;
    let requirementType = "RESIDENTIAL";
    let deviceType: string | undefined = undefined;
    let problemDetails: string | undefined = undefined;
    let preferredDate: string | undefined = undefined;
    let message = "";

    if (type === "QUOTATION") {
      prefix = "JSI-QUO";
      const result = quotationRequestSchema.safeParse(data);
      if (!result.success) {
        return NextResponse.json(
          { success: false, errors: result.error.flatten().fieldErrors },
          { status: 400 }
        );
      }
      const d = result.data;
      customerName = d.fullName;
      phone = d.phone;
      email = d.email;
      location = d.location;
      serviceCategory = d.serviceOrProduct;
      requirementType = d.requirementType;
      message = d.description;
    } else if (type === "SERVICE_REQUEST") {
      prefix = "JSI-SRV";
      const result = serviceRequestSchema.safeParse(data);
      if (!result.success) {
        return NextResponse.json(
          { success: false, errors: result.error.flatten().fieldErrors },
          { status: 400 }
        );
      }
      const d = result.data;
      customerName = d.fullName;
      phone = d.phone;
      location = d.location;
      serviceCategory = d.serviceCategory;
      deviceType = d.deviceType;
      problemDetails = d.problemDescription;
      preferredDate = d.preferredDate || undefined;
      message = `Problem: ${d.problemDescription} (Device: ${d.deviceType})`;
    } else {
      // Default GENERAL enquiry
      prefix = "JSI-ENQ";
      const result = generalEnquirySchema.safeParse(data);
      if (!result.success) {
        return NextResponse.json(
          { success: false, errors: result.error.flatten().fieldErrors },
          { status: 400 }
        );
      }
      const d = result.data;
      customerName = d.fullName;
      phone = d.phone;
      email = d.email || undefined;
      location = d.location;
      serviceCategory = d.serviceCategory;
      message = d.message;
    }

    // Generate unique random reference number
    const randomDigits = Math.floor(10000 + Math.random() * 90000);
    const referenceNumber = `${prefix}-${randomDigits}`;

    // Save directly to the Prisma database
    const savedEnquiry = await prisma.enquiry.create({
      data: {
        referenceNumber,
        type: type || "GENERAL",
        customerName,
        phone,
        email,
        location,
        serviceCategory,
        requirementType,
        deviceType,
        problemDetails,
        preferredDate,
        message,
        status: "NEW",
      },
    });

    return NextResponse.json({
      success: true,
      referenceNumber: savedEnquiry.referenceNumber,
      message: `Thank you, ${customerName}. Your request [${savedEnquiry.referenceNumber}] has been recorded. Our Thrissur technical team will contact you shortly.`,
    });
  } catch (error) {
    console.error("Enquiry database save error:", error);
    return NextResponse.json(
      { success: false, message: "Server error saving enquiry. Please contact us directly." },
      { status: 500 }
    );
  }
}
