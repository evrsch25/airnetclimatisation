"use client";

import dynamic from "next/dynamic";
import { MapPin } from "lucide-react";
import { cities, interventionZone } from "@/constants/cities";
import { contactInfo } from "@/constants/contact";

/**
 * Leaflet (OpenStreetMap) chargé uniquement côté client :
 * la librairie manipule le DOM et ne peut pas être rendue en SSR.
 */
const InterventionMap = dynamic(
  () =>
    import("@/components/shared/InterventionMap").then((mod) => mod.InterventionMap),
  {
    ssr: false,
    loading: () => (
      <div
        className="flex aspect-[16/10] w-full items-center justify-center bg-surface text-sm text-text-muted md:aspect-[21/9]"
        aria-hidden="true"
      >
        Chargement de la carte…
      </div>
    ),
  },
);

const FULL_MAP_URL =
  "https://www.openstreetmap.org/?mlat=43.4034&mlon=4.9847#map=10/43.35/5.15";

export function MapSection() {
  return (
    <div className="overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface">
      <InterventionMap className="aspect-[16/10] w-full md:aspect-[21/9]" />

      <div className="border-t border-border p-6">
        <div className="flex items-start gap-3">
          <MapPin size={20} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
          <div>
            <h3 className="text-base font-semibold text-text-primary">
              {interventionZone.department} — {interventionZone.area}
            </h3>
            <p className="mt-1 text-sm text-text-secondary">
              {cities.map((city) => city.name).join(" • ")}
            </p>
            <p className="mt-3 text-sm text-text-secondary">
              Zone approximative : rayon de 35&nbsp;km depuis Port-de-Bouc
              (jusqu&apos;à Marseille).
            </p>
            <p className="mt-1 text-sm text-text-secondary">
              Siège : {contactInfo.address.full}
            </p>
            <a
              href={FULL_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
            >
              Ouvrir la carte en plein écran
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
