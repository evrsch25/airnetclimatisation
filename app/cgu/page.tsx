import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { PageBreadcrumb } from "@/components/layout/PageBreadcrumb";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/constants/site";
import { cguSections } from "@/constants/legal";

export const metadata = generatePageMetadata({
  title: `Conditions générales d'utilisation — ${siteConfig.name}`,
  description: `Conditions générales d'utilisation du site ${siteConfig.name}.`,
  path: "/cgu",
});

export default function CguPage() {
  return (
    <>
      <PageBreadcrumb items={[{ name: "CGU", path: "/cgu" }]} />
      <Section title="Conditions générales d'utilisation" spacing="lg" align="left">
      <div className="mx-auto max-w-3xl space-y-8">
        {cguSections.map((section) => (
          <Card key={section.id}>
            <h2 className="text-xl font-semibold">{section.title}</h2>
            <div className="mt-4 space-y-3">
              {section.content.map((paragraph) => (
                <p key={paragraph} className="text-sm">
                  {paragraph}
                </p>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
    </>
  );
}
