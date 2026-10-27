import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHeader } from "@/components/shared/page-header";
import { siteConfig } from "@/config/site";
import { featuredProduct } from "@/data/products";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description: `NESDAY® is a brand owned by ${siteConfig.owner}, ${siteConfig.ownerLocation}. Designed and manufactured in India.`,
  path: "/about",
});

const facts = [
  { label: "Brand", value: "NESDAY®" },
  { label: "Owned by", value: siteConfig.owner },
  { label: "Based in", value: siteConfig.ownerLocation },
  { label: "Made in", value: "India" },
];

export default function AboutPage() {
  const image = featuredProduct.images[1];

  return (
    <>
      <PageHeader eyebrow="About us" title="Welcome to the Nesday family" />

      <section aria-label="Our story" className="section-y">
        <div className="container-page grid items-start gap-12 lg:grid-cols-2">
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              Thank you for your interest in Nesday. NESDAY® is the brand owned by{" "}
              {siteConfig.owner}, and the Nesday Electric Coconut Scraper is designed and
              manufactured in India.
            </p>
            <p>
              Fresh coconut is at the heart of many Indian kitchens. Our goal is simple: to make
              preparing it more convenient for everyday home cooking, with one compact tool that
              also helps with curd, eggs and knife sharpening.
            </p>
            <p>
              If you ever need to get in touch, please call us on{" "}
              <a
                href={siteConfig.phone.href}
                className="font-semibold text-obsidian underline underline-offset-4 hover:text-button"
              >
                {siteConfig.phone.display}
              </a>
              . We are available {siteConfig.supportHours}.
            </p>
            <p className="text-base">
              Due to continuous improvements, design and specifications are subject to change
              without prior notice.
            </p>
          </div>
          <div>
            <div className="relative aspect-[3/2] overflow-hidden rounded-card border border-line bg-white">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain"
              />
            </div>
            <dl className="mt-8 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
              {facts.map((fact) => (
                <div key={fact.label} className="bg-white p-5">
                  <dt className="text-sm text-muted">{fact.label}</dt>
                  <dd className="mt-1 font-semibold text-obsidian">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
