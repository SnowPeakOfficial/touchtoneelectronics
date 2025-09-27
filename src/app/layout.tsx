import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppThemeProvider } from "@/context/ThemeContext";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TouchTone Electronics - Your Electronics Experts",
  description: "Professional electronics repair, phone unlocking, and retail services in Mississauga. Fast, reliable, trusted service for all your electronic needs.",
  keywords: "electronics repair, phone unlocking, Mississauga, TouchTone Electronics, device repair, screen replacement, battery replacement",
  authors: [{ name: "TouchTone Electronics" }],
  creator: "TouchTone Electronics",
  publisher: "TouchTone Electronics",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://touchtoneelectronics.ca",
    title: "TouchTone Electronics - Your Electronics Experts",
    description: "Professional electronics repair, phone unlocking, and retail services in Mississauga. Fast, reliable, trusted service for all your electronic needs.",
    siteName: "TouchTone Electronics",
  },
  twitter: {
    card: "summary_large_image",
    title: "TouchTone Electronics - Your Electronics Experts",
    description: "Professional electronics repair, phone unlocking, and retail services in Mississauga. Fast, reliable, trusted service for all your electronic needs.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <AppThemeProvider>
          <a href="#main" className="skip-link">Skip to content</a>
          <Navigation />
          <main id="main">
            {children}
          </main>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </AppThemeProvider>
      </body>
    </html>
  );
}
