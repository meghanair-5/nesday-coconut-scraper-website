import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const onDark = tone === "light";

  return (
    <Link
      href="/"
      className={cn("group inline-flex flex-col leading-none", className)}
      aria-label="Nesday Electric Coconut Scraper, home"
    >
      <span
        className={cn(
          "text-xl font-bold tracking-[0.14em]",
          onDark ? "text-ivory" : "text-obsidian",
        )}
      >
        NESDAY
      </span>
      <span
        className={cn(
          "mt-1 text-[0.625rem] font-semibold tracking-[0.16em] uppercase",
          onDark ? "text-orange" : "text-button",
        )}
      >
        Electric Coconut Scraper
      </span>
    </Link>
  );
}
