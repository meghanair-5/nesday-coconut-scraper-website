import type { InstructionStep } from "@/data/instructions";
import { cn } from "@/lib/utils";

export function StepList({ steps, columns = 3 }: { steps: InstructionStep[]; columns?: 2 | 3 }) {
  return (
    <ol className={cn("grid gap-4 sm:grid-cols-2", columns === 3 && "lg:grid-cols-3")}>
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="flex gap-4 rounded-card border border-line bg-white p-5 shadow-card sm:p-6"
        >
          <span
            aria-hidden
            className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-button text-lg font-bold text-white"
          >
            {index + 1}
          </span>
          <div>
            <h3 className="text-base font-semibold">
              <span className="sr-only">Step {index + 1}: </span>
              {step.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
