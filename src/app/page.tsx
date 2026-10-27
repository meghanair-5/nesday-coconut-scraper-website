import type { Metadata } from "next";
import { Benefits } from "@/components/home/benefits";
import { Hero } from "@/components/home/hero";
import { HowItWorksSection } from "@/components/home/how-it-works-section";
import { ProductShowcase } from "@/components/home/product-showcase";
import { VideosSection } from "@/components/home/videos-section";
import { FaqList } from "@/components/products/faq-list";
import { SpecTable } from "@/components/products/spec-table";
import { CtaBand } from "@/components/shared/cta-band";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";
import { generalFaqs } from "@/data/faqs";
import { featuredProduct, getAllProducts } from "@/data/products";
import { videos } from "@/data/videos";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    title: `${siteConfig.productLine} | Fresh coconut, made easier`,
    description: siteConfig.description,
    path: "/",
  }),
  title: { absolute: `${siteConfig.productLine} | Fresh coconut, made easier` },
};

export default function HomePage() {
  const product = featuredProduct;
  const faqs = [...product.faqs.slice(0, 3), ...generalFaqs];

  return (
    <>
      <Hero product={product} />
      <Benefits />
      <ProductShowcase products={getAllProducts()} />
      <HowItWorksSection />

      <section aria-labelledby="specs-heading" className="section-y">
        <div className="container-page">
          <SectionHeading
            id="specs-heading"
            eyebrow="Specifications"
            title={product.name}
            description="Specifications from the product manual."
          />
          <div className="mt-10">
            <SpecTable groups={product.specGroups} />
          </div>
        </div>
      </section>

      <div className="bg-white">
        <VideosSection videos={videos} />
      </div>

      <section aria-labelledby="faq-heading" className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading
            id="faq-heading"
            eyebrow="FAQ"
            title="Frequently asked questions"
            description={`Can't find your answer? Call us on ${siteConfig.phone.display}.`}
          />
          <FaqList faqs={faqs} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
