import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export function AnnouncementBar() {
  return (
    <div className="bg-obsidian text-ivory">
      <div className="container-page flex min-h-9 flex-wrap items-center justify-center gap-x-2 py-2 text-center text-xs sm:text-sm">
        <span>Customer support {siteConfig.supportHours}.</span>
        <a
          href={siteConfig.phone.href}
          className="inline-flex items-center gap-1.5 font-semibold text-orange underline-offset-4 hover:text-orange-hover hover:underline focus-visible:outline-ivory"
        >
          <Phone aria-hidden className="size-3.5" />
          {siteConfig.phone.display}
        </a>
      </div>
    </div>
  );
}
