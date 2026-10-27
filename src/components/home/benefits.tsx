import { Droplets, Hand, Layers, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const benefits = [
  {
    icon: Sparkles,
    title: "Motor-driven scraping",
    body: "A geared motor turns the stainless steel dome, so you guide the head across the coconut instead of pushing against a fixed blade.",
  },
  {
    icon: Hand,
    title: "Scrape from the half shell",
    body: "Hold the coconut half in one hand and the handset in the other. No large stand or clamp to set up.",
  },
  {
    icon: Layers,
    title: "One handset, four uses",
    body: "Swap the head for the curd beater, egg whisk or knife sharpening stone.",
  },
  {
    icon: Droplets,
    title: "Simple to clean",
    body: "The shredder head comes off and washes with water. Wipe the handset with a moist cloth.",
  },
];

export function Benefits() {
  return (
    <section aria-labelledby="benefits-heading" className="bg-white section-y">
      <div className="container-page">
        <SectionHeading
          id="benefits-heading"
          eyebrow="Why Nesday"
          title="A practical everyday tool for coconut-based cooking"
          description="Fresh coconut gives curries, chutneys and desserts a flavour that dried coconut cannot match. Nesday makes preparing it a little easier."
        />
        <ul className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, body }) => (
            <li key={title}>
              <span className="flex size-11 items-center justify-center rounded-lg bg-orange-soft text-orange">
                <Icon aria-hidden className="size-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
