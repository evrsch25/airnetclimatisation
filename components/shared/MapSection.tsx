import { MapPin } from "lucide-react";
import { cities, interventionZone } from "@/constants/cities";

export function MapSection() {
  return (
    <div className="relative overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface">
      <div className="flex aspect-[16/9] flex-col items-center justify-center p-8 text-center md:aspect-[21/9]">
        <MapPin size={48} className="text-primary mb-4" aria-hidden="true" />
        <h3 className="text-lg font-semibold text-text-primary">
          {interventionZone.department}
        </h3>
        <p className="mt-2 text-sm text-text-secondary">{interventionZone.area}</p>
        <p className="mt-4 max-w-lg text-sm text-text-secondary">
          {cities.map((c) => c.name).join(" • ")}
        </p>
        <p className="mt-4 text-xs text-text-muted">
          {/* TODO: Intégrer Google Maps lorsque la clé API sera disponible */}
          Carte interactive à venir
        </p>
      </div>
    </div>
  );
}
