"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/config/site";
import { cn } from "@/lib/utils";

export function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

type NavLinksProps = {
  items: readonly NavItem[];
  orientation?: "horizontal" | "vertical";
  onNavigate?: () => void;
};

export function NavLinks({ items, orientation = "horizontal", onNavigate }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul
      className={cn(
        orientation === "horizontal" ? "flex items-center gap-1" : "flex flex-col gap-1",
      )}
    >
      {items.map((item) => {
        const active = isActivePath(pathname, item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={cn(
                "block rounded-lg font-medium transition-colors duration-200 motion-reduce:transition-none",
                orientation === "horizontal" ? "px-3.5 py-2 text-sm" : "px-4 py-3.5 text-lg",
                active
                  ? "bg-orange-soft text-obsidian shadow-[inset_0_-2px_0_0_var(--color-orange)]"
                  : "text-body hover:bg-sand hover:text-obsidian",
              )}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
