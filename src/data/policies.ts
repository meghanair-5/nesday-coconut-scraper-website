import { siteConfig } from "@/config/site";

export type PolicySlug = "warranty" | "shipping" | "returns" | "privacy" | "terms";

export type PolicySection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
};

export type Policy = {
  slug: PolicySlug;
  title: string;
  description: string;
  /** `pending-review` pages show a visible notice until the business approves the text. */
  status: "verified" | "pending-review";
  sections: PolicySection[];
};

const callUs = `call us on ${siteConfig.phone.display} (${siteConfig.supportHours})`;

export const policies: Record<PolicySlug, Policy> = {
  warranty: {
    slug: "warranty",
    title: "Warranty",
    description: "Warranty terms for the Nesday Electric Coconut Scraper and its attachments.",
    status: "verified",
    sections: [
      {
        heading: "Warranty period",
        paragraphs: [
          "The warranty period is 12 months, starting from the date the product is sold to the consumer by a retailer.",
          "The 12-month period applies to the scraper and to its attachments.",
        ],
      },
      {
        heading: "What is covered",
        paragraphs: ["The warranty covers the scraper against faulty material or workmanship."],
      },
      {
        heading: "Conditions",
        list: [
          "The company or its authorised agent is entitled to keep any defective part or product that is replaced under the warranty.",
          "The company's liability under this warranty will not, under any circumstances, exceed the price paid by the customer.",
          "Do not open or disassemble the scraper or adapter. Servicing must be done by Biars Industries or their authorised specialists.",
        ],
      },
      {
        heading: "Making a claim",
        paragraphs: [`To make a warranty claim, keep your proof of purchase and ${callUs}.`],
      },
    ],
  },
  shipping: {
    slug: "shipping",
    title: "Shipping and Delivery",
    description: "How Nesday orders are delivered.",
    status: "pending-review",
    sections: [
      {
        paragraphs: [
          "Our shipping and delivery policy is being finalised. Delivery areas, charges and timelines will be published here once confirmed.",
          `Until then, please ${callUs}. We will confirm delivery options for your location before you place an order.`,
        ],
      },
    ],
  },
  returns: {
    slug: "returns",
    title: "Returns and Refunds",
    description: "Returns and refunds for Nesday products.",
    status: "pending-review",
    sections: [
      {
        paragraphs: [
          "Our returns and refunds policy is being finalised and will be published here once confirmed.",
          `If you have a problem with your product, please ${callUs}. Manufacturing defects are covered by our 12-month warranty.`,
        ],
      },
    ],
  },
  privacy: {
    slug: "privacy",
    title: "Privacy Policy",
    description: "How this website handles your information.",
    status: "pending-review",
    sections: [
      {
        heading: "Information we collect on this website",
        paragraphs: [
          "This website does not have accounts, forms or online checkout, and it does not ask you for personal information.",
          "Like most websites, our hosting provider may keep standard server logs (such as IP address, browser type and the pages requested) for security and to keep the site running.",
        ],
      },
      {
        heading: "Cookies and analytics",
        paragraphs: ["This website does not set advertising or analytics cookies."],
      },
      {
        heading: "Embedded videos",
        paragraphs: [
          "Videos are hosted by YouTube and are only loaded when you choose to play them. We use YouTube's privacy-enhanced mode. Once a video is playing, YouTube's own privacy policy applies.",
        ],
      },
      {
        heading: "Phone enquiries",
        paragraphs: [
          "If you call us, we use the details you share only to answer your enquiry, process your order or provide support.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [`For privacy questions, please ${callUs}.`],
      },
    ],
  },
  terms: {
    slug: "terms",
    title: "Terms and Conditions",
    description: "Terms for using this website.",
    status: "pending-review",
    sections: [
      {
        paragraphs: [
          "Full terms and conditions are being prepared and will be published here once approved.",
          "Product information on this website is provided for general guidance. Due to continuous improvements, design and specifications are subject to change without prior notice.",
          "NESDAY® is a brand owned by Biars Industries.",
        ],
      },
    ],
  },
};

export function getPolicy(slug: PolicySlug): Policy {
  return policies[slug];
}
