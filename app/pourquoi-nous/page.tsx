import { PageBreadcrumb } from "@/components/layout/PageBreadcrumb";
import { Hero } from "@/components/shared/Hero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { CallToAction } from "@/components/shared/CallToAction";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/constants/site";
import { images } from "@/constants/images";
import { whyUsIntro, whyUsItems, trustGuarantees } from "@/constants/why-us";
import { ctaConfig } from "@/constants/cta";
import { contactInfo } from "@/constants/contact";
import { legalInfo } from "@/constants/legal";

export const metadata = generatePageMetadata({
  title: `Pourquoi nous choisir — ${siteConfig.name}`,
  description:
    "Découvrez pourquoi faire confiance à Air Net Climatisation : travail soigné, produits professionnels, tarifs transparents et satisfaction client.",
  path: "/pourquoi-nous",
});

export default function PourquoiNousPage() {
  return (
    <>
      <PageBreadcrumb items={[{ name: "Pourquoi nous", path: "/pourquoi-nous" }]} />

      <Hero
        title="Pourquoi nous choisir ?"
        subtitle="Un professionnel de confiance pour l'entretien de votre climatisation."
        intro={whyUsIntro}
        primaryCta={ctaConfig.primary}
        secondaryCta={ctaConfig.secondary}
        badges={trustGuarantees}
        imageSrc={images.hero.whyUs.fallback}
        imageAlt={images.hero.whyUs.alt}
      />

      <Section title="Nos engagements" subtitle="Des valeurs qui guident chaque intervention.">
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

      <Section
        title="Notre méthode"
        subtitle="Une intervention organisée, propre et sécurisée."
        background="surface"
      >
        <div className="mx-auto max-w-3xl space-y-6">
          <Card>
            <h3 className="text-lg font-semibold">Produits professionnels</h3>
            <p className="mt-2 text-sm">
              Nous utilisons des produits professionnels adaptés à la désinfection des
              climatisations, respectueux des occupants et conformes aux normes en vigueur.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Organisation rigoureuse</h3>
            <p className="mt-2 text-sm">
              Chaque intervention suit un protocole précis : mise en sécurité, nettoyage en
              profondeur, contrôles et remise en service dans les meilleures conditions.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Transparence tarifaire</h3>
            <p className="mt-2 text-sm">
              Nos tarifs sont clairement annoncés dès le départ. Devis gratuit et sans engagement
              pour toute demande.
            </p>
          </Card>
        </div>
      </Section>

      <Section title="Assurance professionnelle">
        <Card className="mx-auto max-w-2xl">
          <p className="text-sm text-text-secondary">
            L&apos;entreprise dispose d&apos;une assurance Responsabilité Civile Professionnelle.
          </p>
          <p className="mt-2 text-sm">
            <strong>Assureur :</strong> {legalInfo.insurance.name}
          </p>
          <p className="text-sm">{legalInfo.insurance.address}</p>
        </Card>
      </Section>

      <Section background="surface">
        <CallToAction
          title="Faites confiance à un professionnel"
          description="Demandez votre devis gratuit et redonnez à votre climatisation toute sa performance."
          primaryButton={ctaConfig.primary}
          secondaryButton={ctaConfig.secondary}
          phone={contactInfo.phoneDisplay}
        />
      </Section>
    </>
  );
}
