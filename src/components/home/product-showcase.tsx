import { AttachmentList } from "@/components/products/attachment-list";
import { ProductCard } from "@/components/products/product-card";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Product } from "@/types/product";

export function ProductShowcase({ products }: { products: Product[] }) {
  const attachments = products[0]?.attachments ?? [];

  return (
    <section aria-labelledby="products-heading" className="section-y">
      <div className="container-page">
        <SectionHeading
          id="products-heading"
          eyebrow="The product"
          title="Everything you need in one box"
        />
        <div className="mt-10 space-y-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {attachments.length > 0 ? (
          <div className="mt-16">
            <h3 className="text-2xl">Included attachments</h3>
            <div className="mt-6">
              <AttachmentList attachments={attachments} />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
