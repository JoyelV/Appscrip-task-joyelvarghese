import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import MainHeader from '@/features/home/components/header/Header';
import Footer from '@/features/home/components/footer/Footer';
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-Commerce Product Catalog",
  description:
    "Discover and shop premium cloths, watches, and bags for men, women, and kids. Enjoy exclusive deals, secure payments, and fast delivery. Built with Next.js for a smooth, responsive experience. Explore a wide variety of styles and brands with easy filtering and sorting options.",
  keywords: [
    "eCommerce",
    "T-shirts",
    "Bags",
    "watches",
    "online shopping",
    "Next.js store",
    "buy watches online",
    "buy cloths online",
    "React commerce site",
    "affordable watches",
    "trendy bags",
  ],
  authors: [{ name: "Joyel Varghese", url: "https://joyel-porfolio.vercel.app" }],
  creator: "Joyel Varghese",
  openGraph: {
    title: "E-Commerce Product Catalog",
    description:
      "Discover and shop premium cloths, watches, and bags for men, women, and kids. Enjoy exclusive deals, secure payments, and fast delivery. Built with Next.js for a smooth, responsive experience. Explore a wide variety of styles and brands with easy filtering and sorting options.",
    url: "https://appscrip-task-joyelvarghese.netlify.app",
    siteName: "E-Commerce Store",
    images: [{ url: "https://appscrip-task-joyelvarghese.netlify.app/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Product Catalog",
    description: "Discover and shop premium products with ease.",
    images: ["https://appscrip-task-joyelvarghese.netlify.app/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MainHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
