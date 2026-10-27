import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/shared/page-header";
import { ReviewNotice } from "@/components/ui/review-notice";
import { policies, type PolicySlug } from "@/data/policies";
import { buildMetadata } from "@/lib/seo";

type PolicyPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(policies).map((slug) => ({ slug }));
}

function findPolicy(slug: string) {
  return slug in policies ? policies[slug as PolicySlug] : undefined;
}

export async function generateMetadata({ params }: PolicyPageProps): Promise<Metadata> {
  const policy = findPolicy((await params).slug);
  if (!policy) return {};
  return buildMetadata({
    title: policy.title,
    description: policy.description,
    path: `/policies/${policy.slug}`,
  });
}

export default async function PolicyPage({ params }: PolicyPageProps) {
  const policy = findPolicy((await params).slug);
  if (!policy) notFound();

  return (
    <>
      <PageHeader eyebrow="Policies" title={policy.title} />
      <div className="container-page section-y">
        <article className="max-w-3xl">
          {policy.status === "pending-review" ? (
            <ReviewNotice className="mb-10">
              This policy is being finalised by Nesday and may change. The text below is interim
              guidance only.
            </ReviewNotice>
          ) : null}
          <div className="space-y-10">
            {policy.sections.map((section, index) => (
              <section key={section.heading ?? index}>
                {section.heading ? <h2 className="text-2xl">{section.heading}</h2> : null}
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-4 leading-relaxed text-muted">
                    {paragraph}
                  </p>
                ))}
                {section.list ? (
                  <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-muted">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </article>
      </div>
    </>
  );
}
