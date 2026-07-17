import dynamic from "next/dynamic";
import { Hero } from "@/components/shared/Hero";
import { Section } from "@/components/ui/Section";
import { ContactCard } from "@/components/shared/ContactCard";
import { MapSection } from "@/components/shared/MapSection";
import { PageBreadcrumb } from "@/components/layout/PageBreadcrumb";
import { JsonLd } from "@/components/shared/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { getContactPageSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/constants/site";
import { images } from "@/constants/images";
import { ctaConfig, reassuranceItems } from "@/constants/cta";
import { responseTime } from "@/constants/contact";

const ContactForm = dynamic(
  () => import("@/components/shared/ContactForm").then((mod) => mod.ContactForm),
  {
    loading: () => (
      <div className="rounded-[var(--radius-card)] border border-border bg-background p-6 shadow-sm">
        <p className="text-sm text-text-secondary">Chargement du formulaire…</p>
      </div>
    ),
  },
);

export const metadata = generatePageMetadata({
  title: `Contact & devis gratuit — ${siteConfig.name}`,
  description:
    "Contactez Air Net Climatisation pour un devis gratuit. Téléphone : 06 35 51 03 58. Intervention dans les Bouches-du-Rhône.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={getContactPageSchema()} />

      <PageBreadcrumb items={[{ name: "Contact", path: "/contact" }]} />

      <Hero
        title="Contactez-nous"
        subtitle="Demandez votre devis gratuit et sans engagement."
        intro="Remplissez le formulaire ou appelez-nous directement. Nous vous répondons rapidement."
        primaryCta={ctaConfig.primary}
        secondaryCta={ctaConfig.secondary}
        imageSrc={images.hero.contact.fallback}
        imageAlt={images.hero.contact.alt}
      />

      <Section>
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {reassuranceItems.map((item) => (
            <Badge key={item} variant="primary">
              {item}
            </Badge>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <ContactForm />
          <div className="space-y-6">
            <ContactCard />
            <p className="text-sm text-text-muted">
              {responseTime.label} : {responseTime.value}
            </p>
          </div>
        </div>
      </Section>

      <Section title="Notre zone d'intervention" background="surface">
        <MapSection />
      </Section>
    </>
  );
}
