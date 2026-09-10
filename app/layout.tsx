import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#070B14",
};

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jannatdevelopers.com"),
  title: {
    default: "Jannat Developers & Builders — Real Estate Development & Investment",
    template: "%s — Jannat Developers & Builders",
  },
  description:
    "Real estate development and investment shaped by more than fifteen years of experience across Lahore, Gwadar, Islamabad and Gilgit-Baltistan, with exposure across Pakistan, the UAE, China and the UK.",
  keywords: [
    "Jannat Developers & Builders",
    "JDB",
    "real estate developer Pakistan",
    "real estate development Lahore",
    "Gwadar real estate",
    "Islamabad real estate development",
    "Pakistan property development",
    "real estate investment Pakistan",
  ],
  openGraph: {
    title: "Jannat Developers & Builders",
    description:
      "Real estate development and investment shaped by more than fifteen years of experience.",
    url: "https://www.jannatdevelopers.com",
    siteName: "Jannat Developers & Builders",
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jannat Developers & Builders",
    description:
      "Real estate development and investment shaped by more than fifteen years of experience.",
  },
  robots: { index: true, follow: true },
};

import { IntroSequence } from "@/components/layout/IntroSequence";
import { BackToTop } from "@/components/layout/BackToTop";
import { CookieConsent } from "@/components/layout/CookieConsent";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <IntroSequence />
        {children}
        <BackToTop />
        <CookieConsent />
      </body>
    </html>
  );
}
