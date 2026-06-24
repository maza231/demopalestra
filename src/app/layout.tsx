import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} | Palestra a ${site.city}`,
  description: `${site.name}: palestra a ${site.city} con sala pesi, corsi di gruppo e personal training. Attrezzature moderne, staff qualificato e orari ampi. Scrivici su WhatsApp o passa a trovarci.`,
  keywords: [
    "palestra",
    site.city,
    "sala pesi",
    "corsi fitness",
    "personal training",
    "abbonamento palestra",
  ],
  openGraph: {
    title: `${site.name} | Palestra a ${site.city}`,
    description: `Allenati da ${site.name}: sala pesi, corsi e personal training a ${site.city}.`,
    type: "website",
    locale: "it_IT",
    siteName: site.name,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0c0f14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
