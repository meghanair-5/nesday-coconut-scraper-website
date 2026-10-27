import { ArrowRight } from "lucide-react";
import { SafetyReminder } from "@/components/shared/safety-reminder";
import { StepList } from "@/components/shared/step-list";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { operatingSteps } from "@/data/instructions";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" aria-labelledby="how-heading" className="bg-white section-y">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="how-heading"
            eyebrow="How it works"
            title="Six simple steps, from shell to scraped coconut"
          />
          <ButtonLink href="/how-it-works" variant="secondary" className="self-start md:self-auto">
            Full instructions
            <ArrowRight aria-hidden />
          </ButtonLink>
        </div>
        <div className="mt-10">
          <StepList steps={operatingSteps} />
        </div>
        <div className="mt-8">
          <SafetyReminder />
        </div>
      </div>
    </section>
  );
}
