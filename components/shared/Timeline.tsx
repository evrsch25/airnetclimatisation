import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import type { TimelineStep } from "@/types";

type TimelineProps = {
  steps: TimelineStep[];
};

export function Timeline({ steps }: TimelineProps) {
  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-6" aria-hidden="true" />

      <div className="space-y-8">
        {steps.map((step, index) => (
          <Reveal key={step.id} delay={index * 0.05}>
            <div className="relative flex gap-6 pl-10 md:pl-14">
              <div
                className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white md:left-2"
                aria-hidden="true"
              >
                {step.id}
              </div>

              <Card className="flex-1">
                <h3 className="text-lg font-semibold">{step.title}</h3>
                {step.description.map((paragraph) => (
                  <p key={paragraph} className="mt-2 text-sm">
                    {paragraph}
                  </p>
                ))}
                {step.listItems && (
                  <ul className="mt-3 space-y-1">
                    {step.listItems.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
