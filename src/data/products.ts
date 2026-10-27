import type { Attachment, Product, ProductImage } from "@/types/product";

const images = {
  scraperAndAdapter: {
    src: "/images/products/scraper-and-adapter.jpg",
    alt: "Nesday electric coconut scraper handset with the stainless steel shredder head, connected by cable to its black and orange power adapter unit",
    width: 1600,
    height: 900,
  },
  onStandWithAttachments: {
    src: "/images/products/scraper-on-stand-with-attachments.jpg",
    alt: "Nesday handset resting on the adapter unit, with the shredder head fitted and the curd beater and egg whisk attachments standing upright",
    width: 1280,
    height: 853,
  },
  onStandFront: {
    src: "/images/products/scraper-on-stand-front.jpg",
    alt: "Front view of the dome-shaped stainless steel shredder head on the Nesday handset, resting on the adapter unit",
    width: 1280,
    height: 853,
  },
  curdBeater: {
    src: "/images/products/curd-beater-attachment.jpg",
    alt: "Nesday handset fitted with the curd beater attachment, beside the power adapter unit",
    width: 1280,
    height: 853,
  },
  whisk: {
    src: "/images/products/handset-with-whisk.jpg",
    alt: "Nesday handset fitted with the stainless steel egg whisk attachment",
    width: 1280,
    height: 853,
  },
  eggBeating: {
    src: "/images/products/egg-beating.jpg",
    alt: "Egg whisk attachment beating eggs in a glass bowl, with two whole eggs beside it",
    width: 1280,
    height: 853,
  },
  knifeSharpener: {
    src: "/images/products/knife-sharpening-stone.jpg",
    alt: "Nesday handset fitted with the pink knife sharpening stone, beside the power adapter unit",
    width: 1280,
    height: 853,
  },
} satisfies Record<string, ProductImage>;

const attachments: Attachment[] = [
  {
    id: "shredder-head",
    name: "Shredder head (dome)",
    use: "Scrapes coconut flesh directly from the half shell. Also suitable for grating cheese.",
    image: images.onStandFront,
    status: "verified",
  },
  {
    id: "curd-beater",
    name: "Curd beater",
    use: "Beats and smooths curd.",
    image: images.curdBeater,
    status: "verified",
  },
  {
    id: "egg-whisk",
    name: "Egg whisk",
    use: "Beats eggs.",
    image: images.eggBeating,
    status: "verified",
  },
  {
    id: "knife-sharpener",
    name: "Knife sharpening stone",
    use: "Sharpens kitchen knives.",
    image: images.knifeSharpener,
    status: "verified",
  },
];

export const products: Product[] = [
  {
    id: "nesday-electric-coconut-scraper",
    slug: "electric-coconut-scraper",
    name: "Nesday Electric Coconut Scraper",
    tagline: "Fresh scraped coconut, without the manual effort.",
    shortDescription:
      "A handheld electric scraper with a rotating stainless steel head that scrapes coconut straight from the half shell. Comes with curd beater, egg whisk and knife sharpening attachments.",
    longDescription: [
      "Fresh coconut gives curries, chutneys, desserts and drinks a flavour that dried or frozen coconut cannot match. The Nesday Electric Coconut Scraper is designed to make that everyday preparation easier.",
      "Hold the handset in one hand and the coconut half in the other, switch on, and move the rotating dome-shaped shredder head across the flesh as you would with a spoon. The handset is powered by a separate adapter unit that plugs into the wall socket.",
      "The same handset accepts attachments for beating curd, beating eggs and sharpening knives, so a single tool covers several small kitchen tasks.",
    ],
    images: [
      images.scraperAndAdapter,
      images.onStandWithAttachments,
      images.onStandFront,
      images.curdBeater,
      images.whisk,
      images.knifeSharpener,
    ],
    price: null,
    availability: "on-request",
    keyFeatures: [
      "Stainless steel dome-shaped shredder head",
      "Lightweight handheld design with an on/off switch on the handset",
      "Geared DC motor powered through a separate adapter unit",
      "Four attachments: shredder head, curd beater, egg whisk and knife sharpener",
      "Shredder head can be removed and washed with water",
      "12-month warranty against faulty material or workmanship",
      "Designed and manufactured in India",
    ],
    specGroups: [
      {
        title: "Handset",
        items: [
          { label: "Shredder head (dome)", value: "Stainless steel", status: "verified" },
          { label: "Body", value: "ABS plastic", status: "verified" },
          { label: "Drive", value: "Geared DC motor", status: "verified" },
          {
            label: "Power cable length (minimum)",
            value: "1 m",
            status: "verified",
          },
        ],
      },
      {
        title: "Power adapter",
        items: [
          { label: "Input (standard)", value: "230 V AC, 50 Hz", status: "verified" },
          {
            label: "Input (optional version)",
            value: "110 V AC, 50/60 Hz",
            status: "needs-confirmation",
          },
          { label: "Output", value: "7 V, 25 W", status: "needs-confirmation" },
          {
            label: "Power cord length (minimum)",
            value: "1.83 m (2 yards)",
            status: "verified",
          },
        ],
      },
      {
        title: "Safety and usage",
        items: [
          {
            label: "Protection against electric shock",
            value: "Class II",
            status: "verified",
          },
          { label: "Protection against moisture", value: "IP20", status: "verified" },
          { label: "Environment", value: "Indoor use only", status: "verified" },
          {
            label: "Duty cycle",
            value: "Run for up to 5 minutes, then rest for 2 minutes",
            status: "verified",
          },
          {
            label: "Intended use",
            value: "Household use. Not professional or heavy-duty equipment.",
            status: "verified",
          },
        ],
      },
    ],
    attachments,
    warrantySummary:
      "12 months from the date of retail sale, covering the shredder and attachments against faulty material or workmanship.",
    faqs: [
      {
        question: "How long can I run the scraper at a time?",
        answer:
          "The rated duty cycle is up to 5 minutes of running followed by 2 minutes of rest. Following this helps protect the motor.",
      },
      {
        question: "How do I clean it?",
        answer:
          "Switch off and unplug first. Remove the shredder head and wash it with water. Wipe the handset and adapter with a clean, slightly moist cloth. Do not use solvents on the plastic parts, and do not immerse the handset or adapter in water.",
      },
      {
        question: "Can I use it in a 110 V country?",
        answer:
          "The standard adapter is for 230 V AC, 50 Hz supply. A 110 V version is listed as optional in the product manual. Please call us to check availability before ordering.",
      },
      {
        question: "Is it suitable for commercial or heavy-duty use?",
        answer:
          "No. The manual states that this is household equipment and should not be treated as professional or heavy-duty equipment.",
      },
      {
        question: "Can I open the handset or adapter to repair it?",
        answer:
          "No. Do not open or disassemble the shredder or the adapter. Servicing should only be done by Biars Industries or their authorised specialists. Please call us for support.",
      },
    ],
    seo: {
      title: "Nesday Electric Coconut Scraper",
      description:
        "Handheld electric coconut scraper with stainless steel shredder head, plus curd beater, egg whisk and knife sharpener attachments. 12-month warranty. Made in India.",
    },
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export const featuredProduct: Product = products[0];
