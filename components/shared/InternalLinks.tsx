import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";

const links = [
  {
    title: "Nos prestations",
    description: "Découvrez nos services et tarifs transparents.",
    href: "/prestations",
  },
  {
    title: "Zone d'intervention",
    description: "Vérifiez si nous intervenons dans votre commune.",
    href: "/zone-intervention",
  },
  {
    title: "Pourquoi nous choisir",
    description: "Nos engagements et notre méthode de travail.",
    href: "/pourquoi-nous",
  },
  {
    title: "Contact & devis",
    description: "Demandez votre devis gratuit et sans engagement.",
    href: "/contact",
  },
];

export function InternalLinks() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="group">
          <Card hover className="h-full">
            <h3 className="text-base font-semibold text-text-primary group-hover:text-primary">
              {link.title}
            </h3>
            <p className="mt-2 text-sm">{link.description}</p>
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
              En savoir plus
              <ArrowRight size={14} aria-hidden="true" />
            </span>
          </Card>
        </Link>
      ))}
    </div>
  );
}
