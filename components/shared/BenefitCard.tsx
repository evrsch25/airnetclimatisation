import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/ui/Reveal";
import type { Benefit } from "@/types";

type BenefitCardProps = {
  benefit: Benefit;
  index?: number;
};

export function BenefitCard({ benefit, index = 0 }: BenefitCardProps) {
  return (
    <Reveal delay={index * 0.05}>
      <Card hover className="h-full">
        <IconBadge name={benefit.icon} />
        <h3 className="mt-5 text-lg font-semibold">{benefit.title}</h3>
        <p className="mt-2 text-sm">{benefit.description}</p>
      </Card>
    </Reveal>
  );
}

type BenefitsGridProps = {
  benefits: Benefit[];
  columns?: 2 | 3;
};

export function BenefitsGrid({ benefits, columns = 3 }: BenefitsGridProps) {
  return (
    <div
      className={
        columns === 3
          ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          : "grid gap-6 sm:grid-cols-2"
      }
    >
      {benefits.map((benefit, index) => (
        <BenefitCard key={benefit.id} benefit={benefit} index={index} />
      ))}
    </div>
  );
}
