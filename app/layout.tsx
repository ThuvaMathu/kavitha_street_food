import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { generateMetadata } from "@/utils/seo";
import {
  generateLocalBusinessSchema,
  generateMenuSchema,
} from "@/utils/seo/metadata";
import siteConfig from "@/utils/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO-optimized metadata for Brisbane, Australia
export const metadata: Metadata = generateMetadata({
  title: "Authentic Indian & Sri Lankan Food Truck in Brisbane, Australia",
  description:
    "Experience authentic Indian and Sri Lankan street food in Brisbane. Fresh traditional recipes, curries, biriyani, dosai & more. Visit our food truck at South Bank. Serving Brisbane's Indian & Sri Lankan communities.",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Generate structured data for SEO
  const localBusinessSchema = generateLocalBusinessSchema();
  const menuSchema = generateMenuSchema();

  return (
    <html lang="en-AU">
      <head>
        {/* Structured Data - Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {/* Structured Data - Menu */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(menuSchema),
          }}
        />
        {/* Favicon */}
        <link rel="icon" href="/app-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
