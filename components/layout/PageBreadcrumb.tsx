import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

type PageBreadcrumbProps = {
  items: { name: string; path: string }[];
};

export function PageBreadcrumb({ items }: PageBreadcrumbProps) {
  return (
    <Container className="pt-6">
      <Breadcrumb items={items} />
    </Container>
  );
}
