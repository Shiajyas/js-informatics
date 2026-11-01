import { z } from "zod";

export const generalEnquirySchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9+\s-]{10,15}$/, "Please enter a valid phone number"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  location: z.string().min(2, "Please enter your location or locality in Thrissur/Kerala"),
  serviceCategory: z.string().min(1, "Please select a service category"),
  message: z.string().min(10, "Please provide some details in your message (at least 10 characters)"),
});

export const quotationRequestSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9+\s-]{10,15}$/, "Please enter a valid phone number"),
  email: z.string().email("Please provide a valid email address for quotation delivery"),
  serviceOrProduct: z.string().min(2, "Please enter the required service or product"),
  requirementType: z.enum(["RESIDENTIAL", "COMMERCIAL", "OTHER"], {
    message: "Please select requirement type",
  }),
  location: z.string().min(2, "Please enter project location / site address in Thrissur/Kerala"),
  description: z.string().min(10, "Please describe your requirement (e.g. number of cameras, office size)"),
});

export const serviceRequestSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9+\s-]{10,15}$/, "Please enter a valid phone number"),
  serviceCategory: z.string().min(1, "Please select the service category"),
  deviceType: z.string().min(2, "Please specify system or device type (e.g. Hikvision NVR, HP Laptop, TP-Link Router)"),
  problemDescription: z.string().min(10, "Please describe the symptoms or problem observed"),
  preferredDate: z.string().optional().or(z.literal("")),
  location: z.string().min(2, "Please provide the service visit address in Thrissur/Kerala"),
});

export type GeneralEnquiryInput = z.infer<typeof generalEnquirySchema>;
export type QuotationRequestInput = z.infer<typeof quotationRequestSchema>;
export type ServiceRequestInput = z.infer<typeof serviceRequestSchema>;
