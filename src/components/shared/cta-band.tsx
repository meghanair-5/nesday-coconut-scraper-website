import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ButtonAnchor, ButtonLink } from "@/components/ui/button";

type CtaBandProps = {
  title?: string;
  description?: string;
};

export function CtaBand({
  title = "Ready to make fresh coconut easier?",
  description = `Call us to confirm the price, availability and delivery for your location. We are available ${siteConfig.supportHours}.`,
}: CtaBandProps) {
  return (
    <section aria-labelledby="cta-heading" className="section-y">
      <div className="container-page">
        <div className="rounded-hero bg-obsidian px-6 py-12 text-center text-ivory sm:px-12 sm:py-16">
          <h2 id="cta-heading" className="mx-auto max-w-2xl text-section text-ivory">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-ivory/75">{description}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonAnchor href={siteConfig.phone.href} variant="inverse" size="lg">
              <Phone aria-hidden />
              Call {siteConfig.phone.display}
            </ButtonAnchor>
            <ButtonLink
              href="/products"
              size="lg"
              className="border border-ivory/30 bg-transparent text-ivory hover:bg-ivory/10 focus-visible:outline-ivory"
            >
              View products
              <ArrowRight aria-hidden />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
