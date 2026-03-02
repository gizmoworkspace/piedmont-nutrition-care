import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Piedmont Nutrition Care | Jeanne Doherty, MS, RD, LDN — Winston-Salem, NC",
  description:
    "Clinical nutrition therapy that fixes the cause — not just the symptoms. Medical Nutrition Therapy for diabetes, IBS, oncology nutrition, heart health, and weight management in Winston-Salem, NC.",
  keywords: "dietitian Winston-Salem, nutrition therapy NC, IBS dietitian, diabetes nutrition, functional nutrition, Jeanne Doherty RD",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
