"use client";

import { Button, ButtonLink } from "@/components/ui/button";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="container-page flex flex-col items-start py-24 sm:py-32">
      <h1 className="text-page">Something went wrong</h1>
      <p className="mt-4 max-w-lg text-lg text-muted">
        Please try again. If the problem continues, call us and we will help.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button onClick={reset}>Try again</Button>
        <ButtonLink href="/" variant="secondary">
          Go to the homepage
        </ButtonLink>
      </div>
    </section>
  );
}
