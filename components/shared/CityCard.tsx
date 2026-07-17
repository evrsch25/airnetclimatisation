import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { MapPin } from "lucide-react";
import type { City } from "@/types";

type CityCardProps = {
  city: City;
  index?: number;
};

export function CityCard({ city, index = 0 }: CityCardProps) {
  return (
    <Reveal delay={index * 0.03}>
      <Card className="flex items-center gap-3">
        <MapPin size={18} className="text-primary shrink-0" aria-hidden="true" />
        <span className="text-sm font-medium text-text-primary">{city.name}</span>
      </Card>
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
