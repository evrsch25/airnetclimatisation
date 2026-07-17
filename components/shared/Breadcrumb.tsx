import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/shared/JsonLd";
import { getBreadcrumbSchema } from "@/lib/seo/schema";

type BreadcrumbItem = {
  name: string;
  path: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [{ name: "Accueil", path: "/" }, ...items];

  return (
    <>
      <JsonLd data={getBreadcrumbSchema(allItems)} />
      <nav aria-label="Fil d'Ariane" className="mb-6">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-text-muted">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;

            return (
              <li key={item.path} className="flex items-center gap-1">
                {index > 0 && (
                  <ChevronRight size={14} className="text-border" aria-hidden="true" />
                )}
                {isLast ? (
                  <span className="font-medium text-text-primary" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.path} className="hover:text-primary">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
