import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Rohin Chandra — Product Manager",
  description: "Product manager portfolio: resume, projects, and case studies.",
  openGraph: {
    title: "Rohin Chandra — Product Manager",
    description: "Product manager portfolio showcasing resume and key projects.",
    siteName: "Rohin Chandra",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased bg-black`}>
      <body className="min-h-full flex flex-col bg-black text-white font-[family-name:var(--font-inter)]">
        <Nav />
        <main className="flex-1 pt-16 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
