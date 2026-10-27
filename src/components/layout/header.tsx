import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ButtonAnchor } from "@/components/ui/button";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";
import { NavLinks } from "./nav-links";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ivory/95 backdrop-blur supports-[backdrop-filter]:bg-ivory/85">
      <div className="container-page flex h-16 items-center justify-between gap-4 sm:h-18">
        <Logo />
        <nav aria-label="Main" className="hidden lg:block">
          <NavLinks items={siteConfig.mainNav} />
        </nav>
        <div className="flex items-center gap-2">
          <ButtonAnchor href={siteConfig.phone.href} size="sm" className="hidden sm:inline-flex">
            <Phone aria-hidden />
            Call to order
          </ButtonAnchor>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
