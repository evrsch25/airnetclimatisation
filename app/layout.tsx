import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { SkipLink } from "@/components/layout/SkipLink";
import { JsonLd } from "@/components/shared/JsonLd";
import { defaultMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/constants/site";
import {
  getLocalBusinessSchema,
  getOrganizationSchema,
  getWebSiteSchema,
} from "@/lib/seo/schema";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

export const metadata: Metadata = {
  ...defaultMetadata,
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="flex min-h-screen flex-col">
        <SkipLink />
        <JsonLd
          data={[getLocalBusinessSchema(), getOrganizationSchema(), getWebSiteSchema()]}
        />
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
