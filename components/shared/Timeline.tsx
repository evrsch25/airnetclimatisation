import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import type { TimelineStep } from "@/types";

type TimelineProps = {
  steps: TimelineStep[];
};

export function Timeline({ steps }: TimelineProps) {
  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-6" aria-hidden="true" />

      <div className="space-y-6">
        {steps.map((step, index) => {
          const numbered = step.numbered !== false;

          return (
            <Reveal key={step.id} delay={index * 0.04}>
              {step.groupTitle && (
                <p className="mb-4 pl-10 text-base font-semibold text-primary md:pl-14">
                  {step.groupTitle}
                </p>
              )}

              <div
                className={cn(
                  "relative flex gap-6",
                  numbered ? "pl-10 md:pl-14" : "pl-10 md:pl-14",
                )}
              >
                {numbered ? (
                  <div
                    className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white md:left-2"
                    aria-hidden="true"
                  >
                    {step.id}
                  </div>
                ) : (
                  <div
                    className="absolute left-[10px] top-5 h-2.5 w-2.5 rounded-full bg-primary md:left-[18px]"
                    aria-hidden="true"
                  />
                )}

                <Card className={cn("flex-1", !numbered && "bg-surface")}>
                  <h3 className={cn("font-semibold", numbered ? "text-lg" : "text-base")}>
                    {step.title}
                  </h3>
                  {step.description.map((paragraph) => (
                    <p key={paragraph} className="mt-2 text-sm">
                      {paragraph}
                    </p>
                  ))}
                  {step.listItems && (
                    <ul className="mt-3 space-y-1">
                      {step.listItems.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <span
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
