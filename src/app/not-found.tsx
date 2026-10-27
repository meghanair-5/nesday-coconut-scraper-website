import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="container-page flex flex-col items-start py-24 sm:py-32">
      <p className="text-sm font-semibold text-button">Error 404</p>
      <h1 className="mt-3 text-page">We couldn&apos;t find that page</h1>
      <p className="mt-4 max-w-lg text-lg text-muted">
        The page may have moved, or the link may be out of date.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/">Go to the homepage</ButtonLink>
        <ButtonLink href="/products" variant="secondary">
          View products
          <ArrowRight aria-hidden />
        </ButtonLink>
      </div>
    </section>
  );
}
