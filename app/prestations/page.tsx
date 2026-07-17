import { PageBreadcrumb } from "@/components/layout/PageBreadcrumb";
import { Hero } from "@/components/shared/Hero";
import { Section } from "@/components/ui/Section";
import { ServiceGrid } from "@/components/shared/ServiceCard";
import { PricingTable } from "@/components/shared/PricingTable";
import { Timeline } from "@/components/shared/Timeline";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { CallToAction } from "@/components/shared/CallToAction";
import { JsonLd } from "@/components/shared/JsonLd";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { getFaqSchema, getServiceSchema } from "@/lib/seo/schema";
import { siteConfig, pricingIntro, devisGratuitMention } from "@/constants/site";
import { images } from "@/constants/images";
import { services, servicesIntro } from "@/constants/services";
import { timelineSteps } from "@/constants/timeline";
import { ctaConfig } from "@/constants/cta";
import { contactInfo } from "@/constants/contact";
import { getFaqByIds, prestationsFaqIds } from "@/constants/faq";

export const metadata = generatePageMetadata({
  title: `Prestations & tarifs — ${siteConfig.name}`,
  description:
    "Découvrez nos prestations de nettoyage et désinfection de climatisation. Tarifs transparents, devis gratuit. Split, multi-split et pompe à chaleur air/air.",
  path: "/prestations",
  keywords: [
    "nettoyage climatisation",
    "tarif nettoyage climatisation",
    "entretien climatisation",
    "désinfection climatisation",
  ],
});

export default function PrestationsPage() {
  const prestationsFaq = getFaqByIds(prestationsFaqIds);

  return (
    <>
      <JsonLd data={[getServiceSchema(), getFaqSchema(prestationsFaq)]} />

      <PageBreadcrumb items={[{ name: "Prestations", path: "/prestations" }]} />

      <Hero
        title="Nos prestations"
        subtitle="Un nettoyage rigoureux et une désinfection efficace pour chaque type d'installation."
        intro={servicesIntro}
        primaryCta={ctaConfig.primary}
        secondaryCta={ctaConfig.secondary}
        imageSrc={images.hero.prestations.fallback}
        imageAlt={images.hero.prestations.alt}
      />

      <Section title="Ce que nous réalisons" subtitle="Chaque intervention est adaptée à votre installation.">
        <ServiceGrid services={services} />
      </Section>

      <Section
        title="Grille tarifaire"
        subtitle={pricingIntro}
        background="surface"
      >
        <PricingTable />
        <p className="mt-6 text-center text-sm font-medium text-primary">{devisGratuitMention}</p>
      </Section>

      <Section
        title="Déroulement d'une intervention"
        subtitle="Une méthode professionnelle, étape par étape."
      >
        <Timeline steps={timelineSteps} />
      </Section>

      <Section
        title="Questions fréquentes"
        subtitle="Tout ce que vous devez savoir sur nos prestations."
        background="surface"
        id="faq"
      >
        <FaqAccordion items={prestationsFaq} />
      </Section>

      <Section>
        <CallToAction
          title="Besoin d'un devis personnalisé ?"
          description="Contactez-nous pour obtenir un devis gratuit adapté à votre installation."
          primaryButton={ctaConfig.primary}
          secondaryButton={ctaConfig.secondary}
          phone={contactInfo.phoneDisplay}
        />
      </Section>
    </>
  );
}
