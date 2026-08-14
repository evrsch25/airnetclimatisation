import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/ui/Reveal";
import type { Service } from "@/types";

type ServiceCardProps = {
  service: Service;
  index?: number;
  compact?: boolean;
};

export function ServiceCard({ service, index = 0, compact = false }: ServiceCardProps) {
  return (
    <Reveal delay={index * 0.05}>
      <Card hover className="flex h-full flex-col">
        <IconBadge name={service.icon} />
        <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm">{service.description}</p>

        {!compact && (
          <ul className="mt-4 space-y-1">
            {service.includes.slice(0, 3).map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </Card>
    </Reveal>
  );
}

type ServiceGridProps = {
  services: Service[];
  compact?: boolean;
};

export function ServiceGrid({ services, compact = false }: ServiceGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {services.map((service, index) => (
        <ServiceCard key={service.id} service={service} index={index} compact={compact} />
      ))}
    </div>
  );
}

export function ServiceLink() {
  return (
    <div className="mt-8 text-center">
      <Link
        href="/prestations"
        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
      >
        Voir toutes nos prestations
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </div>
  );
}
