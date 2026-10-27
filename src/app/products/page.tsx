import type { Metadata } from "next";
import { ProductCard } from "@/components/products/product-card";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHeader } from "@/components/shared/page-header";
import { getAllProducts } from "@/data/products";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Products",
  description:
    "Browse Nesday products: the Nesday Electric Coconut Scraper with shredder head, curd beater, egg whisk and knife sharpening attachments.",
  path: "/products",
});

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <>
      <PageHeader
        eyebrow="Shop"
        title="Nesday products"
        description="Prices and availability are confirmed over the phone. Call us and we will help you choose and arrange delivery."
      />
      <section aria-label="Product list" className="section-y">
        <div className="container-page space-y-8">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} headingLevel="h2" />
            ))
          ) : (
            <p className="text-muted">No products are listed at the moment. Please call us.</p>
          )}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
