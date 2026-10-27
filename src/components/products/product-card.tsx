import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ButtonAnchor, ButtonLink } from "@/components/ui/button";
import { formatAvailability, formatPrice } from "@/lib/format";
import type { Product } from "@/types/product";

export function ProductCard({
  product,
  headingLevel = "h3",
}: {
  product: Product;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  const image = product.images[0];
  const href = `/products/${product.slug}`;

  return (
    <article className="grid overflow-hidden rounded-card border border-line bg-white shadow-card md:grid-cols-2">
      <Link
        href={href}
        className="relative block aspect-[4/3] bg-sand md:aspect-auto md:min-h-80"
        tabIndex={-1}
        aria-hidden
      >
        <Image
          src={image.src}
          alt=""
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-contain p-6"
        />
      </Link>
      <div className="flex flex-col p-6 sm:p-8 lg:p-10">
        <Heading className="text-2xl leading-snug sm:text-3xl">
          <Link href={href} className="hover:text-button">
            {product.name}
          </Link>
        </Heading>
        <p className="mt-3 leading-relaxed text-muted">{product.shortDescription}</p>

        <div className="mt-5">
          <p className="text-sm font-semibold text-obsidian">Included attachments</p>
          <ul className="mt-2 grid gap-1.5 text-sm text-muted sm:grid-cols-2">
            {product.attachments.map((attachment) => (
              <li key={attachment.id} className="flex items-center gap-2">
                <Check aria-hidden className="size-4 shrink-0 text-orange" />
                {attachment.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-line pt-5">
          <p className="text-xl font-semibold text-obsidian">{formatPrice(product.price)}</p>
          <p className="text-sm text-muted">{formatAvailability(product.availability)}</p>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={href}>
            View details
            <ArrowRight aria-hidden />
          </ButtonLink>
          <ButtonAnchor href={siteConfig.phone.href} variant="secondary">
            <Phone aria-hidden />
            Call to order
          </ButtonAnchor>
        </div>
      </div>
    </article>
  );
}
