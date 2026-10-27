import type { ReactNode } from "react";
import { SectionHeading } from "@/components/ui/section-heading";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <div className="border-b border-line bg-sand/60">
      <div className="container-page py-12 sm:py-16">
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} description={description} />
        {children}
      </div>
    </div>
  );
}
