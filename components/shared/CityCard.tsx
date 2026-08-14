import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { cityPages } from "@/constants/city-pages";
import type { City } from "@/types";

const citiesWithPage = new Set(cityPages.map((city) => city.slug));

type CityCardProps = {
  city: City;
  index?: number;
};

export function CityCard({ city, index = 0 }: CityCardProps) {
  const content = (
    <>
      <MapPin size={18} className="shrink-0 text-primary" aria-hidden="true" />
      <span className="flex-1 text-sm font-medium text-text-primary">{city.name}</span>
    </>
  );

  const base =
    "flex items-center gap-3 rounded-[var(--radius-card)] border border-border bg-background p-5 shadow-sm";

  return (
    <Reveal delay={index * 0.03} className="h-full">
      {citiesWithPage.has(city.slug) ? (
        <Link
          href={`/nettoyage-climatisation/${city.slug}`}
          className={`${base} h-full transition duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md`}
        >
          {content}
          <ArrowRight
            size={16}
            className="shrink-0 text-text-muted transition-colors group-hover:text-primary"
            aria-hidden="true"
          />
        </Link>
      ) : (
        <div className={`${base} h-full`}>{content}</div>
      )}
    </Reveal>
  );
}

type CityGridProps = {
  cities: City[];
};

export function CityGrid({ cities }: CityGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {cities.map((city, index) => (
        <CityCard key={city.slug} city={city} index={index} />
      ))}
    </div>
  );
}
