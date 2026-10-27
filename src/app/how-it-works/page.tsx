import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHeader } from "@/components/shared/page-header";
import { StepList } from "@/components/shared/step-list";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";
import {
  dutyCycle,
  environmentalInstructions,
  maintenanceInstructions,
  operatingSteps,
  safetyInstructions,
} from "@/data/instructions";
import { featuredProduct } from "@/data/products";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "How it works and instructions",
  description:
    "Step-by-step instructions, safety precautions, cleaning and care for the Nesday Electric Coconut Scraper.",
  path: "/how-it-works",
});

function BulletCard({ id, title, items }: { id: string; title: string; items: string[] }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="rounded-card border border-line bg-white p-6 shadow-card sm:p-8"
    >
      <h2 id={`${id}-heading`} className="text-2xl">
        {title}
      </h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 leading-relaxed text-muted">
            <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-orange" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function HowItWorksPage() {
  const image = featuredProduct.images[1];

  return (
    <>
      <PageHeader
        eyebrow="Instructions and support"
        title="How to use your Nesday scraper"
        description="Please read the safety instructions before using the scraper for the first time."
      />

      <section aria-labelledby="steps-heading" className="section-y">
        <div className="container-page grid items-start gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeading id="steps-heading" title="Operating steps" />
            <p className="mt-3 text-muted">
              Duty cycle: run for up to {dutyCycle.runMinutes} minutes, then rest for{" "}
              {dutyCycle.restMinutes} minutes.
            </p>
            <div className="mt-8">
              <StepList steps={operatingSteps} columns={2} />
            </div>
          </div>
          <div className="relative aspect-[3/2] overflow-hidden rounded-card border border-line bg-white lg:sticky lg:top-24">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <section aria-label="Safety, care and recycling" className="bg-white section-y">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <div className="lg:row-span-2">
            <BulletCard id="safety" title="Safety instructions" items={safetyInstructions} />
          </div>
          <BulletCard
            id="maintenance"
            title="Cleaning and maintenance"
            items={maintenanceInstructions}
          />
          <BulletCard
            id="environment"
            title="Environmental protection"
            items={environmentalInstructions}
          />
        </div>
      </section>

      <section aria-labelledby="support-heading" className="section-y">
        <div className="container-page max-w-3xl">
          <SectionHeading
            id="support-heading"
            title="Need help?"
            description={`If the scraper is not working as expected, please do not open it. Call us on ${siteConfig.phone.display} (${siteConfig.supportHours}) and we will help.`}
          />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
