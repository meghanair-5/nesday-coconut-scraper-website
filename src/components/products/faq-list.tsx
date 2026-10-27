import { ChevronDown } from "lucide-react";
import type { Faq } from "@/types/product";

/** Native `<details>` gives keyboard and screen reader support without client JavaScript. */
export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-line rounded-card border border-line bg-white shadow-card">
      {faqs.map((faq) => (
        <details key={faq.question} className="group">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-lg px-5 py-4 text-left font-medium text-obsidian hover:bg-sand sm:px-6 [&::-webkit-details-marker]:hidden">
            {faq.question}
            <ChevronDown
              aria-hidden
              className="size-5 shrink-0 text-orange transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
            />
          </summary>
          <p className="px-5 pb-5 leading-relaxed text-muted sm:px-6">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
