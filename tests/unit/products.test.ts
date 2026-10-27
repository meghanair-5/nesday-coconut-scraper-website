import { existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { getAllProducts, getProductBySlug } from "@/data/products";
import { policies } from "@/data/policies";
import { videos } from "@/data/videos";

const publicDir = path.resolve(__dirname, "../../public");
const products = getAllProducts();

describe("product data", () => {
  it("has at least one product", () => {
    expect(products.length).toBeGreaterThan(0);
  });

  it("uses unique ids and URL-safe unique slugs", () => {
    const slugs = products.map((p) => p.slug);
    const ids = products.map((p) => p.id);
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(new Set(ids).size).toBe(ids.length);
    for (const slug of slugs) expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
  });

  it("gives every image descriptive alt text and a file that exists", () => {
    for (const product of products) {
      const allImages = [
        ...product.images,
        ...product.attachments.flatMap((a) => (a.image ? [a.image] : [])),
      ];
      for (const image of allImages) {
        expect(image.alt.length, image.src).toBeGreaterThan(15);
        expect(existsSync(path.join(publicDir, image.src)), image.src).toBe(true);
      }
    }
  });

  it("only lists prices with a positive amount and currency", () => {
    for (const product of products) {
      if (product.price === null) continue;
      expect(product.price.amount).toBeGreaterThan(0);
      expect(product.price.currency).toBe("INR");
    }
  });

  it("keeps SEO descriptions within a sensible length", () => {
    for (const product of products) {
      expect(product.seo.description.length).toBeLessThanOrEqual(170);
    }
  });

  it("looks up products by slug", () => {
    const first = products[0];
    expect(getProductBySlug(first.slug)).toBe(first);
    expect(getProductBySlug("does-not-exist")).toBeUndefined();
  });
});

describe("supporting content", () => {
  it("has a slug matching each policy key", () => {
    for (const [key, policy] of Object.entries(policies)) expect(policy.slug).toBe(key);
  });

  it("has a local thumbnail for every video", () => {
    for (const video of videos) {
      expect(existsSync(path.join(publicDir, video.thumbnail)), video.thumbnail).toBe(true);
    }
  });
});
