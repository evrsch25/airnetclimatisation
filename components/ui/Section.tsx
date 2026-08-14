import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

type SectionProps = {
  children: React.ReactNode;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  background?: "white" | "surface" | "primary-light" | "dark";
  spacing?: "default" | "sm" | "lg";
  id?: string;
  align?: "left" | "center";
};

export function Section({
  children,
  eyebrow,
  title,
  subtitle,
  className,
  background = "white",
  spacing = "default",
  id,
  align = "center",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        spacing === "default" && "py-16 md:py-20",
        spacing === "sm" && "py-12 md:py-16",
        spacing === "lg" && "py-20 md:py-28",
        background === "white" && "bg-background",
        background === "surface" && "bg-surface",
        background === "primary-light" && "bg-primary-light",
        background === "dark" && "bg-primary-dark",
        className,
      )}
    >
      <Container>
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          align={align}
          tone={background === "dark" ? "dark" : "light"}
        />
        {children}
      </Container>
    </section>
  );
}
