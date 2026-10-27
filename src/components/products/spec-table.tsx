import type { SpecGroup } from "@/types/product";

export function SpecTable({ groups }: { groups: SpecGroup[] }) {
  const hasUnconfirmed = groups.some((group) =>
    group.items.some((item) => item.status === "needs-confirmation"),
  );

  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-3">
        {groups.map((group) => {
          const headingId = `spec-${group.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
          return (
            <section
              key={group.title}
              aria-labelledby={headingId}
              className="rounded-card border border-line bg-white p-6 shadow-card"
            >
              <h3 id={headingId} className="text-base font-semibold text-obsidian">
                {group.title}
              </h3>
              <dl className="mt-4 divide-y divide-line">
                {group.items.map((item) => (
                  <div
                    key={item.label}
                    className="grid gap-1 py-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-1 xl:grid-cols-2"
                  >
                    <dt className="text-sm text-muted">{item.label}</dt>
                    <dd className="text-sm font-medium text-obsidian">
                      {item.value}
                      {item.status === "needs-confirmation" ? (
                        <span className="ml-1 text-warning" title="To be confirmed by Nesday">
                          *
                        </span>
                      ) : null}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          );
        })}
      </div>
      {hasUnconfirmed ? (
        <p className="mt-4 text-sm text-muted">
          <span className="text-warning">*</span> To be confirmed. Please call us to check before
          ordering.
        </p>
      ) : null}
    </div>
  );
}
