import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: `${SITE.name} — GST Billing for Tamil Nadu & Indian SMEs`,
  description: SITE.description,
  keywords: [
    "GST billing software",
    "POS for Tamil Nadu",
    "offline billing software",
    "Zoho inventory POS integration",
    "billing software India",
    "GST invoicing",
    "Tally alternative",
    "shop billing software",
    "Coimbatore POS",
    "Chennai billing software",
  ],
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="bg-bg text-fg font-sans antialiased">{children}</body>
    </html>
  );
}
