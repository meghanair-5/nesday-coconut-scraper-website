import type { MetadataRoute } from "next";
import { getAllProducts } from "@/data/products";
import { policies } from "@/data/policies";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["/", "/products", "/how-it-works", "/about", "/contact"];
  const productPaths = getAllProducts().map((product) => `/products/${product.slug}`);
  const policyPaths = Object.keys(policies).map((slug) => `/policies/${slug}`);

  return [...staticPaths, ...productPaths, ...policyPaths].map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path.startsWith("/policies") ? 0.3 : 0.7,
  }));
}
