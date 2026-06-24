import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import { brand } from "@/lib/data";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aura.digital"),
  title: {
    default: `${brand.name} — Unleashing Digital Aura`,
    template: `%s · ${brand.name}`,
  },
  description:
    "A premium digital studio crafting immersive brands, experiences and futures. Empowering visionaries to create the future.",
  keywords: [
    "digital studio",
    "branding agency",
    "immersive design",
    "creative studio",
    "digital aura",
    "Aura Digital",
  ],
  authors: [{ name: brand.designer }],
  creator: brand.designer,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aura.digital",
    siteName: brand.name,
    title: `${brand.name} — Unleashing Digital Aura`,
    description:
      "A premium digital studio crafting immersive brands, experiences and futures.",
    images: [
      {
        url: "/images/hero-figure.jpg",
        width: 1200,
        height: 630,
        alt: "AURA DIGITAL — Unleashing Digital Aura",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} — Unleashing Digital Aura`,
    description:
      "A premium digital studio crafting immersive brands, experiences and futures.",
    images: ["/images/hero-figure.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050608",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="font-body">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-2.5 focus:font-body focus:text-sm focus:text-black"
        >
          Skip to content
        </a>
        <div id="top" />
        {children}
      </body>
    </html>
  );
}
