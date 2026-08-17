import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { HeroHome } from "@/components/shared/HeroHome";
import { SloganBand } from "@/components/shared/SloganBand";
import { ServiceGrid, ServiceLink } from "@/components/shared/ServiceCard";
import { Timeline } from "@/components/shared/Timeline";
import { CityGrid } from "@/components/shared/CityCard";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { CallToAction } from "@/components/shared/CallToAction";
import { InternalLinks } from "@/components/shared/InternalLinks";
import { JsonLd } from "@/components/shared/JsonLd";
import { BenefitsGrid } from "@/components/shared/BenefitCard";
import { KeyFigures } from "@/components/shared/KeyFigures";
import { IconBadge } from "@/components/ui/IconBadge";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { getFaqSchema } from "@/lib/seo/schema";
import { siteConfig, devisGratuitMention } from "@/constants/site";
import { heroBenefits, whyMaintainSections } from "@/constants/benefits";
import { services } from "@/constants/services";
import { timelineSteps } from "@/constants/timeline";
import { whyUsItems } from "@/constants/why-us";
import { cities, interventionZone } from "@/constants/cities";
import { ctaConfig } from "@/constants/cta";
import { contactInfo } from "@/constants/contact";
import { getFaqByIds, homeFaqIds } from "@/constants/faq";
import { BeforeAfter } from "@/components/shared/BeforeAfter";

export const metadata = generatePageMetadata({
  title: `${siteConfig.name} — Nettoyage & désinfection de climatisation`,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  const homeFaq = getFaqByIds(homeFaqIds);

  return (
    <>
      <JsonLd data={getFaqSchema(homeFaq)} />

      <HeroHome />

      <SloganBand />

      <Section
        eyebrow="Ce que ça change"
        title="Les bénéfices d'un entretien professionnel"
        subtitle="Ce que vous gagnez concrètement après notre passage."
      >
        <BenefitsGrid benefits={heroBenefits} />
      </Section>

      <KeyFigures />

      <Section
        eyebrow="Bon à savoir"
        title="Pourquoi entretenir sa climatisation ?"
        background="surface"
        subtitle="Un entretien régulier protège votre santé, votre confort et votre budget."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {whyMaintainSections.map((section, index) => (
            <Reveal key={section.id} delay={index * 0.05} className="h-full">
              <Card accent hover className="h-full">
                <div className="flex items-center gap-4">
                  <IconBadge name={section.icon} />
                  <h3 className="text-lg font-semibold">{section.title}</h3>
                </div>
                {section.content.map((paragraph) => (
                  <p key={paragraph} className="mt-3 text-sm">
                    {paragraph}
                  </p>
                ))}
                {section.listItems && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {section.listItems.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-primary-light px-3 py-1 text-xs font-medium text-primary-dark"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Nos interventions"
        title="Nos prestations"
        subtitle="Nettoyage rigoureux et désinfection efficace, adaptés à votre installation."
      >
        <ServiceGrid services={services} compact />
        <ServiceLink />
      </Section>

      <Section
        eyebrow="Notre méthode"
        title="Déroulement d'une intervention"
        subtitle="Une méthode claire et professionnelle, étape par étape."
        background="surface"
      >
        <Timeline steps={timelineSteps} />
        <p className="mt-10 text-center text-sm font-semibold uppercase tracking-wide text-primary">
          {devisGratuitMention}
        </p>
      </Section>

      <Section
        eyebrow="Nos engagements"
        title="Pourquoi choisir Air Net Climatisation ?"
        subtitle="Un service professionnel, transparent et adapté à vos besoins."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyUsItems.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.05} className="h-full">
              <Card hover className="h-full">
                <IconBadge name={item.icon} />
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm">{item.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Le résultat"
        title="Avant / Après"
        subtitle="La différence d'un nettoyage professionnel sur la turbine de soufflage."
        background="primary-light"
      >
        <BeforeAfter />
      </Section>

      <Section
        eyebrow="Autour de l'étang de Berre"
        title="Zone d'intervention"
        subtitle={interventionZone.description}
        background="surface"
      >
        <CityGrid cities={cities} />
        <p className="mt-6 text-center text-sm text-text-secondary">
          {interventionZone.extendedDescription}
        </p>
        <div className="mt-8 text-center">
          <Button variant="outline" href="/zone-intervention">
            Vérifier votre commune
          </Button>
        </div>
      </Section>

      <Section
        eyebrow="FAQ"
        title="Questions fréquentes"
        subtitle="Les réponses aux questions les plus courantes."
        id="faq"
      >
        <FaqAccordion items={homeFaq} />
        <div className="mt-8 text-center">
          <Link
            href="/prestations#faq"
            className="text-sm font-medium text-primary hover:underline"
          >
            Voir toute la FAQ
          </Link>
        </div>
      </Section>

      <Section
        title="Découvrez notre site"
        subtitle="Toutes les informations pour faire le bon choix."
        background="surface"
      >
        <InternalLinks />
      </Section>

      <Section>
        <CallToAction
          title="Prêt à retrouver un air plus sain ?"
          description="Demandez votre devis gratuit et sans engagement. Nous intervenons rapidement dans les Bouches-du-Rhône."
          primaryButton={ctaConfig.primary}
          secondaryButton={ctaConfig.secondary}
          phone={contactInfo.phoneDisplay}
        />
      </Section>
    </>
  );
}
