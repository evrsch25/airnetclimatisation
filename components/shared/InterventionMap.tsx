"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/** Siège — Port-de-Bouc */
const CENTER: [number, number] = [43.4034, 4.9847];

/**
 * Rayon en mètres : ~35 km depuis Port-de-Bouc jusqu'au centre de Marseille.
 * Calculé pour englober clairement la ville (Vieux-Port ≈ 34 km).
 */
const RADIUS_M = 35_000;

const PRIMARY = "#0084ff";

type InterventionMapProps = {
  className?: string;
};

export function InterventionMap({ className }: InterventionMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      scrollWheelZoom: false,
      attributionControl: true,
    }).setView(CENTER, 10);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
    }).addTo(map);

    L.circle(CENTER, {
      radius: RADIUS_M,
      color: PRIMARY,
      weight: 2,
      opacity: 0.9,
      fillColor: PRIMARY,
      fillOpacity: 0.12,
    }).addTo(map);

    const pin = L.divIcon({
      className: "airnet-map-pin",
      html: `<span style="
        display:block;width:16px;height:16px;border-radius:9999px;
        background:${PRIMARY};border:3px solid #fff;
        box-shadow:0 1px 4px rgba(0,0,0,.35);
      "></span>`,
      iconSize: [16, 16],
      iconAnchor: [8, 8],
    });

    L.marker(CENTER, { icon: pin })
      .addTo(map)
      .bindPopup("Air Net Climatisation — Port-de-Bouc");

    mapRef.current = map;

    // Leaflet calcule mal la taille si le conteneur n'est pas encore visible
    const resize = () => map.invalidateSize();
    requestAnimationFrame(resize);
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      role="img"
      aria-label="Carte de la zone d'intervention autour de Port-de-Bouc, jusqu'à Marseille"
    />
  );
}
