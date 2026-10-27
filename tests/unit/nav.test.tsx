import { render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { isActivePath, NavLinks } from "@/components/layout/nav-links";
import { siteConfig } from "@/config/site";

vi.mock("next/navigation", () => ({ usePathname: () => "/products/electric-coconut-scraper" }));

describe("isActivePath", () => {
  it("matches home only exactly", () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/about", "/")).toBe(false);
  });

  it("matches nested routes", () => {
    expect(isActivePath("/products/electric-coconut-scraper", "/products")).toBe(true);
    expect(isActivePath("/productsx", "/products")).toBe(false);
  });
});

describe("NavLinks", () => {
  it("renders every main nav item and marks the current section", () => {
    render(
      <nav aria-label="Main">
        <NavLinks items={siteConfig.mainNav} />
      </nav>,
    );
    const nav = screen.getByRole("navigation", { name: "Main" });
    const links = within(nav).getAllByRole("link");
    expect(links).toHaveLength(siteConfig.mainNav.length);
    expect(within(nav).getByRole("link", { name: "Products" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(within(nav).getByRole("link", { name: "Home" })).not.toHaveAttribute("aria-current");
  });
});
