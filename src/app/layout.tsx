import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jsinformatics.in"),
  title: {
    default: "JS Informatics | CCTV, Networking & IT Solutions in Thrissur, Kerala",
    template: "%s | JS Informatics",
  },
  description:
    "JS Informatics provides trusted CCTV installation, structured LAN cabling, business Wi-Fi setup, computer hardware maintenance, and IT support services in Thrissur, Kerala.",
  keywords: [
    "CCTV installation Thrissur",
    "LAN networking Kerala",
    "Wi-Fi setup Thrissur",
    "Computer hardware repair Thrissur",
    "Business IT support Thrissur",
    "Security camera technician Kerala",
    "JS Informatics Thrissur",
  ],
  authors: [{ name: "JS Informatics" }],
  creator: "JS Informatics",
  publisher: "JS Informatics",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-brand-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
