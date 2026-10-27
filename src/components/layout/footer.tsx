import Link from "next/link";
import { Phone } from "lucide-react";
import type { ReactNode } from "react";
import { siteConfig } from "@/config/site";
import { getAllProducts } from "@/data/products";
import { Logo } from "./logo";

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="text-sm font-semibold tracking-wide text-ivory">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm">{children}</ul>
    </div>
  );
}

const linkClass =
  "text-ivory/70 transition-colors duration-200 hover:text-orange focus-visible:outline-ivory motion-reduce:transition-none";

export function Footer() {
  const products = getAllProducts();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-obsidian text-ivory">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:py-16">
        <div className="max-w-xs">
          <Logo tone="light" />
          <p className="mt-5 text-sm leading-relaxed text-ivory/70">
            NESDAY® is a brand owned by {siteConfig.owner}. Designed and manufactured in India.
          </p>
        </div>

        <FooterColumn title="Products">
          {products.map((product) => (
            <li key={product.id}>
              <Link href={`/products/${product.slug}`} className={linkClass}>
                {product.name}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/products" className={linkClass}>
              All products
            </Link>
          </li>
        </FooterColumn>

        <FooterColumn title="Support">
          <li>
            <Link href="/how-it-works" className={linkClass}>
              How it works and instructions
            </Link>
          </li>
          {siteConfig.policyNav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={linkClass}>
                {item.label}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Contact">
          <li>
            <a
              href={siteConfig.phone.href}
              className={`${linkClass} inline-flex items-center gap-2`}
            >
              <Phone aria-hidden className="size-4" />
              {siteConfig.phone.display}
            </a>
          </li>
          <li className="text-ivory/70">{siteConfig.supportHours}</li>
          <li>
            <Link href="/about" className={linkClass}>
              About Nesday
            </Link>
          </li>
        </FooterColumn>
      </div>
      <div className="border-t border-ivory/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-ivory/55 sm:flex-row sm:justify-between">
          <p>
            © {year} {siteConfig.owner}. All rights reserved.
          </p>
          <p>Design and specifications are subject to change without prior notice.</p>
        </div>
      </div>
    </footer>
  );
}
