import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { PageBreadcrumb } from "@/components/layout/PageBreadcrumb";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/constants/site";
import { mentionsLegalesSections } from "@/constants/legal";

export const metadata = generatePageMetadata({
  title: `Mentions légales — ${siteConfig.name}`,
  description: `Mentions légales du site ${siteConfig.name}.`,
  path: "/mentions-legales",
});

export default function MentionsLegalesPage() {
  return (
    <>
      <PageBreadcrumb items={[{ name: "Mentions légales", path: "/mentions-legales" }]} />
      <Section title="Mentions légales" spacing="lg" align="left">
      <div className="mx-auto max-w-3xl space-y-8">
        {mentionsLegalesSections.map((section) => (
          <Card key={section.id}>
            <h2 className="text-xl font-semibold">{section.title}</h2>
            <div className="mt-4 space-y-3">
              {section.content.map((paragraph) => (
                <p key={paragraph} className="text-sm">
                  {paragraph}
                </p>
              ))}
              {section.listItems && (
                <ul className="mt-2 space-y-1">
                  {section.listItems.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Card>
        ))}
      </div>
    </Section>
    </>
  );
}
