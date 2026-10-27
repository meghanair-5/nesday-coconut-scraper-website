import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Phone } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { ButtonAnchor } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: `Call Nesday on ${siteConfig.phone.display} to order, check availability or get product support.`,
  path: "/contact",
});

const reasons = [
  "Place an order and confirm the current price",
  "Check availability and delivery to your location",
  "Ask about the 110 V version",
  "Get help with using or cleaning your scraper",
  "Make a warranty claim",
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to us"
        description="The quickest way to order or get help is to call us."
      />
      <section aria-label="Contact details" className="section-y">
        <div className="container-page grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-card border border-line bg-white p-6 shadow-card sm:p-10">
            <span className="flex size-12 items-center justify-center rounded-lg bg-orange-soft text-orange">
              <Phone aria-hidden className="size-6" />
            </span>
            <h2 className="mt-6 font-sans text-base font-semibold text-muted">Phone</h2>
            <a
              href={siteConfig.phone.href}
              className="mt-1 block text-3xl font-bold text-obsidian hover:text-button sm:text-4xl"
            >
              {siteConfig.phone.display}
            </a>
            <p className="mt-4 flex items-center gap-2 text-muted">
              <Clock aria-hidden className="size-4" />
              {siteConfig.supportHours}
            </p>
            <ButtonAnchor href={siteConfig.phone.href} size="lg" className="mt-8 w-full sm:w-auto">
              <Phone aria-hidden />
              Call now
            </ButtonAnchor>
          </div>
          <div className="rounded-card border border-line bg-sand/60 p-6 sm:p-10">
            <h2 className="text-2xl">We can help you</h2>
            <ul className="mt-5 space-y-3">
              {reasons.map((reason) => (
                <li key={reason} className="flex gap-3 leading-relaxed text-muted">
                  <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-orange" />
                  {reason}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted">
              Before calling about a fault, you may find an answer in our{" "}
              <Link
                href="/how-it-works"
                className="font-semibold text-obsidian underline underline-offset-4 hover:text-button"
              >
                instructions
              </Link>{" "}
              or{" "}
              <Link
                href="/policies/warranty"
                className="font-semibold text-obsidian underline underline-offset-4 hover:text-button"
              >
                warranty terms
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
