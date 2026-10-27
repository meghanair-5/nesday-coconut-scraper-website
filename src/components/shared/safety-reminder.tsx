import Link from "next/link";
import { ShieldAlert } from "lucide-react";
import { dutyCycle } from "@/data/instructions";

export function SafetyReminder({ showLink = true }: { showLink?: boolean }) {
  return (
    <aside
      aria-label="Safety reminder"
      className="flex flex-col gap-4 rounded-card border border-warning/25 bg-warning-soft p-5 sm:flex-row sm:p-6"
    >
      <ShieldAlert aria-hidden className="size-6 shrink-0 text-warning" />
      <div className="text-sm leading-relaxed text-obsidian">
        <p className="font-semibold">Use it safely</p>
        <p className="mt-1 text-muted">
          Keep the scraper away from children, tie back long hair, and use it indoors only. Run for
          up to {dutyCycle.runMinutes} minutes, then rest for {dutyCycle.restMinutes} minutes.
          Switch off and unplug before removing the head for cleaning.
        </p>
        {showLink ? (
          <Link
            href="/how-it-works#safety"
            className="mt-2 inline-block font-semibold text-obsidian underline underline-offset-4 hover:text-button"
          >
            Read all safety instructions
          </Link>
        ) : null}
      </div>
    </aside>
  );
}
