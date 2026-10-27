import { siteConfig } from "@/config/site";
import type { Faq } from "@/types/product";

/** Questions that apply to the business rather than to a single product. */
export const generalFaqs: Faq[] = [
  {
    question: "How do I order?",
    answer: `Call us on ${siteConfig.phone.display} (${siteConfig.supportHours}). We will confirm the current price, availability and delivery details for your location.`,
  },
  {
    question: "What does the warranty cover?",
    answer:
      "The warranty lasts 12 months from the date the product is sold to you by a retailer. It covers the scraper and its attachments against faulty material or workmanship. See the warranty page for the full terms.",
  },
  {
    question: "Do you deliver to my area?",
    answer:
      "Delivery areas, charges and timelines are being confirmed. Please call us and we will tell you what is available for your location.",
  },
  {
    question: "Can I return the product?",
    answer:
      "Our returns and refunds policy is being finalised. Please call us before ordering if you have questions about returns.",
  },
  {
    question: "How do I get support?",
    answer: `Call us on ${siteConfig.phone.display}. Our support hours are ${siteConfig.supportHours}.`,
  },
];
