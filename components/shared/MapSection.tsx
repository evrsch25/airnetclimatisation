import { MapPin } from "lucide-react";
import { cities, interventionZone } from "@/constants/cities";
import { contactInfo } from "@/constants/contact";

/**
 * Carte OpenStreetMap : embarquée sans clé d'API ni compte tiers.
 * bbox cadre l'étang de Berre, marker positionné sur le siège à Port-de-Bouc.
 */
const BBOX = "4.85,43.30,5.35,43.72";
const MARKER = "43.4034,4.9847";
const embedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${BBOX}&layer=mapnik&marker=${MARKER}`;
const fullMapUrl = `https://www.openstreetmap.org/?mlat=43.4034&mlon=4.9847#map=11/43.48/5.10`;

export function MapSection() {
  return (
    <div className="overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface">
      <iframe
        src={embedUrl}
        title={`Carte de la zone d'intervention d'Air Net Climatisation — ${interventionZone.area}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="aspect-[16/10] w-full border-0 md:aspect-[21/9]"
      />

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
              Siège : {contactInfo.address.full}
            </p>
            <a
              href={fullMapUrl}
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
