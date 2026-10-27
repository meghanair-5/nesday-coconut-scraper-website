import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ChevronRight, Phone, ShieldCheck } from "lucide-react";
import { AttachmentList } from "@/components/products/attachment-list";
import { FaqList } from "@/components/products/faq-list";
import { ProductGallery } from "@/components/products/product-gallery";
import { SpecTable } from "@/components/products/spec-table";
import { CtaBand } from "@/components/shared/cta-band";
import { SafetyReminder } from "@/components/shared/safety-reminder";
import { StepList } from "@/components/shared/step-list";
import { ButtonAnchor, ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";
import { generalFaqs } from "@/data/faqs";
import { maintenanceInstructions, operatingSteps } from "@/data/instructions";
import { getAllProducts, getProductBySlug } from "@/data/products";
import { formatAvailability, formatCompareAtPrice, formatPrice } from "@/lib/format";
import { buildMetadata } from "@/lib/seo";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  const image = product.images[0];
  return buildMetadata({
    title: product.seo.title,
    description: product.seo.description,
    path: `/products/${product.slug}`,
    image: { url: image.src, width: image.width, height: image.height, alt: image.alt },
  });
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const compareAt = formatCompareAtPrice(product.price);

  return (
    <>
      <nav aria-label="Breadcrumb" className="container-page pt-6">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
          <li className="flex items-center gap-1.5">
            <Link href="/" className="hover:text-button">
              Home
            </Link>
            <ChevronRight aria-hidden className="size-4" />
          </li>
          <li className="flex items-center gap-1.5">
            <Link href="/products" className="hover:text-button">
              Products
            </Link>
            <ChevronRight aria-hidden className="size-4" />
          </li>
          <li aria-current="page" className="text-obsidian">
            {product.name}
          </li>
        </ol>
      </nav>

      <section
        aria-labelledby="product-heading"
        className="container-page grid gap-10 py-8 sm:py-10 lg:grid-cols-2 lg:gap-14"
      >
        <ProductGallery images={product.images} />
        <div>
          <h1 id="product-heading" className="text-page">
            {product.name}
          </h1>
          <p className="mt-3 text-lg text-body">{product.tagline}</p>
          <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <p className="text-2xl font-semibold text-obsidian">{formatPrice(product.price)}</p>
            {compareAt ? <s className="text-muted">{compareAt}</s> : null}
            <p className="text-sm text-muted">{formatAvailability(product.availability)}</p>
          </div>
          <div className="mt-6 space-y-4 leading-relaxed text-muted">
            {product.longDescription.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-6 space-y-2.5">
            {product.keyFeatures.map((feature) => (
              <li key={feature} className="flex gap-2.5 text-obsidian">
                <Check aria-hidden className="mt-0.5 size-5 shrink-0 text-orange" />
                {feature}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonAnchor href={siteConfig.phone.href} size="lg">
              <Phone aria-hidden />
              Call to order
            </ButtonAnchor>
            <ButtonLink href="/contact" variant="secondary" size="lg">
              Contact details
            </ButtonLink>
          </div>
          <p className="mt-3 text-sm text-muted">
            {siteConfig.phone.display} · {siteConfig.supportHours}
          </p>
          <div className="mt-8 flex gap-3 rounded-card border border-line bg-white p-5">
            <ShieldCheck aria-hidden className="size-6 shrink-0 text-orange" />
            <div className="text-sm leading-relaxed">
              <p className="font-semibold text-obsidian">Warranty</p>
              <p className="mt-1 text-muted">{product.warrantySummary}</p>
              <Link
                href="/policies/warranty"
                className="mt-1 inline-block font-semibold text-obsidian underline underline-offset-4 hover:text-button"
              >
                Warranty terms
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="attachments-heading" className="bg-white section-y">
        <div className="container-page">
          <SectionHeading id="attachments-heading" title="Included attachments" />
          <div className="mt-8">
            <AttachmentList attachments={product.attachments} />
          </div>
        </div>
      </section>

      <section aria-labelledby="specs-heading" className="section-y">
        <div className="container-page">
          <SectionHeading id="specs-heading" title="Specifications" />
          <div className="mt-8">
            <SpecTable groups={product.specGroups} />
          </div>
        </div>
      </section>

      <section aria-labelledby="usage-heading" className="bg-white section-y">
        <div className="container-page">
          <SectionHeading id="usage-heading" title="How to use and clean" />
          <div className="mt-8">
            <StepList steps={operatingSteps} />
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-card border border-line bg-ivory p-6">
              <h3 className="text-base font-semibold">Cleaning and care</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
                {maintenanceInstructions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <SafetyReminder />
          </div>
        </div>
      </section>

      <section aria-labelledby="product-faq-heading" className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading id="product-faq-heading" title="Questions about this product" />
          <FaqList faqs={[...product.faqs, ...generalFaqs]} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
