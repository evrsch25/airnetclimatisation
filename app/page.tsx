import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Hero } from "@/components/shared/Hero";
import { ServiceGrid, ServiceLink } from "@/components/shared/ServiceCard";
import { Timeline } from "@/components/shared/Timeline";
import { CityGrid } from "@/components/shared/CityCard";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { CallToAction } from "@/components/shared/CallToAction";
import { InternalLinks } from "@/components/shared/InternalLinks";
import { JsonLd } from "@/components/shared/JsonLd";
import { Icon } from "@/components/ui/Icon";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { BeforeAfter } from "@/components/shared/BeforeAfter";
import { images } from "@/constants/images";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { getFaqSchema } from "@/lib/seo/schema";
import { heroContent, siteConfig } from "@/constants/site";
import { heroBenefits, whyMaintainSections } from "@/constants/benefits";
import { services } from "@/constants/services";
import { timelineSteps } from "@/constants/timeline";
import { whyUsItems } from "@/constants/why-us";
import { cities, interventionZone } from "@/constants/cities";
import { ctaConfig } from "@/constants/cta";
import { contactInfo } from "@/constants/contact";
import { getFaqByIds, homeFaqIds } from "@/constants/faq";
import { devisGratuitMention } from "@/constants/site";

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

      <Hero
        title={heroContent.title}
        subtitle={heroContent.subtitle}
        intro={heroContent.intro}
        primaryCta={ctaConfig.primary}
        secondaryCta={ctaConfig.secondary}
        badges={heroBenefits.map((b) => b.title)}
        imageSrc={images.hero.home.fallback}
        imageAlt={images.hero.home.alt}
      />

      <Section
        title="Pourquoi entretenir sa climatisation ?"
        subtitle="Un entretien régulier protège votre santé, votre confort et votre budget."
      >
        <div className="space-y-8">
          {whyMaintainSections.map((section, index) => (
            <Reveal key={section.id} delay={index * 0.05}>
              <Card>
                <h3 className="text-xl font-semibold">{section.title}</h3>
                {section.content.map((paragraph) => (
                  <p key={paragraph} className="mt-3 text-sm">
                    {paragraph}
                  </p>
                ))}
                {section.listItems && (
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {section.listItems.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-text-secondary">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
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
        title="Nos prestations"
        subtitle="Nettoyage rigoureux et désinfection efficace, adaptés à votre installation."
        background="surface"
      >
        <ServiceGrid services={services} compact />
        <ServiceLink />
      </Section>

      <Section
        title="Déroulement d'une intervention"
        subtitle="Une méthode claire et professionnelle, étape par étape."
      >
        <Timeline steps={timelineSteps} />
        <p className="mt-8 text-center text-sm font-medium text-primary">{devisGratuitMention}</p>
      </Section>

      <Section
        title="Pourquoi choisir Air Net Climatisation ?"
        subtitle="Un service professionnel, transparent et adapté à vos besoins."
        background="surface"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyUsItems.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.05}>
              <Card hover className="h-full">
                <Icon name={item.icon} size={28} />
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm">{item.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Remplacer les placeholders par les photos dans public/images/gallery/ */}
      <Section
        title="Avant / Après"
        subtitle="Découvrez la différence qu'un entretien professionnel peut faire."
        background="primary-light"
      >
        <BeforeAfter
          beforeSrc="/images/placeholders/avant.svg"
          afterSrc="/images/placeholders/apres.svg"
        />
      </Section>

      <Section
        title="Zone d'intervention"
        subtitle={interventionZone.description}
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
        title="Questions fréquentes"
        subtitle="Les réponses aux questions les plus courantes."
        background="surface"
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
