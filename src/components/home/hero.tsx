import Image from "next/image";
import { ArrowRight, BadgeCheck, Factory, Puzzle } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import type { Product } from "@/types/product";

const highlights = [
  { icon: BadgeCheck, label: "12-month warranty" },
  { icon: Puzzle, label: "4 attachments included" },
  { icon: Factory, label: "Designed and made in India" },
];

export function Hero({ product }: { product: Product }) {
  const image = product.images[0];

  return (
    <section aria-labelledby="hero-heading" className="overflow-hidden">
      <div className="container-page grid items-center gap-8 py-10 sm:py-14 md:grid-cols-2 md:gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:py-20">
        <div className="order-2 md:order-1">
          <p className="mb-4 text-sm font-semibold text-button">Nesday Electric Coconut Scraper</p>
          <h1 id="hero-heading" className="text-hero">
            Fresh scraped coconut, without the hard work.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            A handheld electric scraper that scrapes coconut straight from the half shell. The same
            handset also beats curd, whisks eggs and sharpens knives.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <ButtonLink href={`/products/${product.slug}`} size="lg">
              Explore the product
              <ArrowRight aria-hidden />
            </ButtonLink>
            <ButtonLink href="#how-it-works" variant="secondary" size="lg">
              See how it works
            </ButtonLink>
          </div>
          <ul className="mt-10 grid gap-3 text-sm text-obsidian sm:grid-cols-3 md:grid-cols-1 xl:grid-cols-3">
            {highlights.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5">
                <Icon aria-hidden className="size-5 shrink-0 text-orange" />
                {label}
              </li>
            ))}
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative aspect-[16/10] overflow-hidden rounded-hero border border-line bg-sand shadow-lift">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 55vw, (min-width: 768px) 50vw, 100vw"
              className="object-contain p-4 sm:p-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
