import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Check } from "lucide-react";
import { PageBreadcrumb } from "@/components/layout/PageBreadcrumb";
import { Hero } from "@/components/shared/Hero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/ui/Reveal";
import { Timeline } from "@/components/shared/Timeline";
import { ServiceGrid } from "@/components/shared/ServiceCard";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { CallToAction } from "@/components/shared/CallToAction";
import { KeyFigures } from "@/components/shared/KeyFigures";
import { JsonLd } from "@/components/shared/JsonLd";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { getCityServiceSchema, getFaqSchema } from "@/lib/seo/schema";
import {
  cityPages,
  getCityPage,
  TRAVEL_SURCHARGE_KM,
  TRAVEL_SURCHARGE_LABEL,
} from "@/constants/city-pages";
import { images } from "@/constants/images";
import { services } from "@/constants/services";
import { timelineSteps } from "@/constants/timeline";
import { ctaConfig } from "@/constants/cta";
import { contactInfo } from "@/constants/contact";
import { getFaqByIds, homeFaqIds } from "@/constants/faq";
import { siteConfig } from "@/constants/site";

type PageProps = { params: Promise<{ ville: string }> };

export function generateStaticParams() {
  return cityPages.map((city) => ({ ville: city.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { ville } = await params;
  const city = getCityPage(ville);
  if (!city) return {};

  return generatePageMetadata({
    title: `Nettoyage de climatisation à ${city.name} (${city.postalCode}) — ${siteConfig.name}`,
    description: `${city.intro} Devis gratuit, désinfection complète, intervention par un professionnel à ${city.name}.`,
    path: `/nettoyage-climatisation/${city.slug}`,
    keywords: [
      `nettoyage climatisation ${city.name}`,
      `entretien climatisation ${city.name}`,
      `désinfection climatisation ${city.name}`,
      `nettoyage pompe à chaleur ${city.name}`,
    ],
  });
}

export default async function CityPage({ params }: PageProps) {
  const { ville } = await params;
  const city = getCityPage(ville);
  if (!city) notFound();

  const faq = getFaqByIds(homeFaqIds);
  const hasSurcharge = city.distanceKm > TRAVEL_SURCHARGE_KM;
  const otherCities = cityPages.filter((item) => item.slug !== city.slug);

  return (
    <>
      <JsonLd data={[getCityServiceSchema(city.name), getFaqSchema(faq)]} />

      <PageBreadcrumb
        items={[
          { name: "Zone d'intervention", path: "/zone-intervention" },
          { name: city.name, path: `/nettoyage-climatisation/${city.slug}` },
        ]}
      />

      <Hero
        title={`Nettoyage de climatisation à ${city.name}`}
        subtitle={`Désinfection complète de votre installation à ${city.name} (${city.postalCode}) et alentours.`}
        intro={city.intro}
        primaryCta={ctaConfig.primary}
        secondaryCta={ctaConfig.secondary}
        imageSrc={images.hero.zone.path}
        imageAlt={`Intervention de nettoyage de climatisation à ${city.name}`}
      />

      <Section
        eyebrow={`${city.name} (${city.postalCode})`}
        title={`Pourquoi entretenir sa climatisation à ${city.name} ?`}
        align="left"
      >
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            {city.context.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="pt-2">
              <p className="text-sm font-semibold text-text-primary">
                Secteurs desservis à {city.name}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {city.areas.map((area) => (
                  <li key={area}>
                    <Badge variant="primary">{area}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <Card accent>
              <div className="flex items-center gap-3">
                <IconBadge name="MapPin" size="sm" />
                <h3 className="text-base font-semibold">{city.localAngle.title}</h3>
              </div>
              <p className="mt-3 text-sm">{city.localAngle.text}</p>
            </Card>

            <Card>
              <h3 className="text-base font-semibold">Déplacement</h3>
              <p className="mt-2 text-sm">
                {city.distanceKm === 0
                  ? "Vous êtes dans notre commune d'implantation : aucun frais de déplacement n'est appliqué."
                  : `Environ ${city.distanceKm} km depuis notre siège de ${contactInfo.address.city}.`}
              </p>
              {city.distanceKm > 0 && (
                <p className="mt-2 flex items-start gap-2 text-sm">
                  <Check size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                  {hasSurcharge
                    ? `Au-delà de ${TRAVEL_SURCHARGE_KM} km, une majoration forfaitaire de ${TRAVEL_SURCHARGE_LABEL} s'applique.`
                    : `Moins de ${TRAVEL_SURCHARGE_KM} km : aucune majoration de déplacement.`}
                </p>
              )}
            </Card>
          </div>
        </div>
      </Section>

      <KeyFigures />

      <Section
        eyebrow="Nos interventions"
        title={`Ce que nous nettoyons à ${city.name}`}
        subtitle="Split, multi-split et pompe à chaleur air/air, chez les particuliers comme chez les professionnels."
        background="surface"
      >
        <ServiceGrid services={services} compact />
      </Section>

      <Section
        eyebrow="Notre méthode"
        title="Le déroulement de votre intervention"
        subtitle="De la mise en sécurité à la remise en service, chaque intervention suit le même protocole."
      >
        <Timeline steps={timelineSteps} />
      </Section>

      <Section eyebrow="FAQ" title="Questions fréquentes" background="surface">
        <FaqAccordion items={faq} />
      </Section>

      <Section eyebrow="À proximité" title="Nous intervenons aussi dans ces communes">
        <Reveal>
          <ul className="flex flex-wrap justify-center gap-3">
            {otherCities.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/nettoyage-climatisation/${item.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-text-secondary transition hover:border-primary/40 hover:text-primary"
                >
                  <MapPin size={15} aria-hidden="true" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <Section spacing="sm">
        <CallToAction
          title={`Un devis gratuit pour votre climatisation à ${city.name}`}
          description="Décrivez votre installation en quelques lignes, nous revenons vers vous sous 24 à 48 h."
          primaryButton={ctaConfig.primary}
          secondaryButton={ctaConfig.secondary}
          phone={contactInfo.phoneDisplay}
        />
      </Section>
    </>
  );
}
