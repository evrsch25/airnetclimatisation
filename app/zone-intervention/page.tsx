import { PageBreadcrumb } from "@/components/layout/PageBreadcrumb";
import { Hero } from "@/components/shared/Hero";
import { Section } from "@/components/ui/Section";
import { CityGrid } from "@/components/shared/CityCard";
import { MapSection } from "@/components/shared/MapSection";
import { CallToAction } from "@/components/shared/CallToAction";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/constants/site";
import { images } from "@/constants/images";
import { cities, interventionZone } from "@/constants/cities";
import { ctaConfig } from "@/constants/cta";
import { contactInfo } from "@/constants/contact";

export const metadata = generatePageMetadata({
  title: `Zone d'intervention — ${siteConfig.name}`,
  description:
    "Air Net Climatisation intervient dans les Bouches-du-Rhône : Martigues, Port-de-Bouc, Istres, Fos-sur-Mer, Marignane, Vitrolles, Salon-de-Provence et environs.",
  path: "/zone-intervention",
  keywords: [
    "nettoyage climatisation Port-de-Bouc",
    "entretien climatisation Martigues",
    "nettoyage climatisation Istres",
    "nettoyage climatisation Fos-sur-Mer",
    "Bouches-du-Rhône",
  ],
});

export default function ZoneInterventionPage() {
  return (
    <>
      <PageBreadcrumb items={[{ name: "Zone d'intervention", path: "/zone-intervention" }]} />

      <Hero
        title="Zone d'intervention"
        subtitle="Nous intervenons rapidement dans les Bouches-du-Rhône."
        intro={interventionZone.extendedDescription}
        primaryCta={ctaConfig.primary}
        secondaryCta={ctaConfig.secondary}
        imageSrc={images.hero.zone.fallback}
        imageAlt={images.hero.zone.alt}
      />

      <Section title="Où intervenons-nous ?">
        <MapSection />
      </Section>

      <Section
        title="Communes desservies"
        subtitle="Exemples de villes où nous intervenons."
        background="surface"
      >
        <CityGrid cities={cities} />
        <p className="mt-8 text-center text-sm text-text-secondary">
          Et toutes les communes voisines autour de l&apos;étang de Berre. Contactez-nous pour
          vérifier si nous intervenons dans votre commune.
        </p>
      </Section>

      <Section>
        <CallToAction
          title="Votre commune n'est pas listée ?"
          description="Contactez-nous pour vérifier notre disponibilité dans votre secteur."
          primaryButton={ctaConfig.primary}
          secondaryButton={ctaConfig.secondary}
          phone={contactInfo.phoneDisplay}
        />
      </Section>
    </>
  );
}
