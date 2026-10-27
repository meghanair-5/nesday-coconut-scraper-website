export type NavItem = {
  label: string;
  href: string;
};

const DEFAULT_SITE_URL = "https://nesdaycoconutscraper.in";

function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return DEFAULT_SITE_URL;
  try {
    return new URL(raw).origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const siteConfig = {
  name: "Nesday",
  productLine: "Nesday Electric Coconut Scraper",
  description:
    "Nesday Electric Coconut Scraper is a handheld electric tool for scraping fresh coconut at home, with attachments for curd beating, egg beating and knife sharpening. Designed and made in India.",
  url: resolveSiteUrl(),
  locale: "en_IN",
  owner: "Biars Industries",
  ownerLocation: "Koothattukulam, Ernakulam, Kerala, India",
  phone: {
    display: "+91 94470 95434",
    href: "tel:+919447095434",
  },
  supportHours: "10:00 am to 5:00 pm, on all working days",
  mainNav: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "How it works", href: "/how-it-works" },
    { label: "About us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],
  policyNav: [
    { label: "Warranty", href: "/policies/warranty" },
    { label: "Shipping and Delivery", href: "/policies/shipping" },
    { label: "Returns and Refunds", href: "/policies/returns" },
    { label: "Privacy Policy", href: "/policies/privacy" },
    { label: "Terms and Conditions", href: "/policies/terms" },
  ] satisfies NavItem[],
} as const;
