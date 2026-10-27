import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

const defaultOgImage = {
  url: "/images/products/scraper-and-adapter.jpg",
  width: 1600,
  height: 900,
  alt: "Nesday Electric Coconut Scraper with its power adapter",
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: { url: string; width: number; height: number; alt: string };
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path,
  image = defaultOgImage,
  noIndex = false,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: siteConfig.productLine,
      locale: siteConfig.locale,
      url: path,
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}

export function absoluteUrl(path: string): string {
  return new URL(path, siteConfig.url).toString();
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.owner,
    brand: { "@type": "Brand", name: "NESDAY" },
    url: siteConfig.url,
    logo: absoluteUrl("/images/brand/nesday-logo-lowres.png"),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone.href.replace("tel:", ""),
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "ml"],
    },
  };
}
