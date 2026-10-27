/**
 * `verified` means the value was taken from official Nesday material.
 * `needs-confirmation` values are shown with a visible notice until the business confirms them.
 */
export type VerificationStatus = "verified" | "needs-confirmation";

export type ProductImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Price = {
  amount: number;
  currency: "INR";
  /** Original price before a confirmed sale, if any. */
  compareAt?: number;
};

export type Availability = "in-stock" | "out-of-stock" | "on-request";

export type SpecItem = {
  label: string;
  value: string;
  status: VerificationStatus;
};

export type SpecGroup = {
  title: string;
  items: SpecItem[];
};

export type Attachment = {
  id: string;
  name: string;
  use: string;
  image?: ProductImage;
  status: VerificationStatus;
};

export type Faq = {
  question: string;
  answer: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  longDescription: string[];
  images: ProductImage[];
  /** `null` until a price is confirmed by the business. */
  price: Price | null;
  availability: Availability;
  keyFeatures: string[];
  specGroups: SpecGroup[];
  attachments: Attachment[];
  warrantySummary: string;
  faqs: Faq[];
  seo: {
    title: string;
    description: string;
  };
};
