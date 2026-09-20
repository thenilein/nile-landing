import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.description,
  keywords: [
    "POS",
    "billing software",
    "GST invoicing",
    "inventory management",
    "purchase management",
    "retail software",
    "India billing",
    "barcode billing",
    "multi-outlet POS",
    "desktop POS",
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
    <html lang="en">
      <body className="bg-bg text-fg font-body antialiased">
        {children}
      </body>
    </html>
  );
}
