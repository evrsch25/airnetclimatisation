import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type HeroProps = {
  title: string;
  subtitle: string;
  intro?: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  imageSrc?: string;
  imageAlt?: string;
  imageAspect?: "landscape" | "square";
  badges?: string[];
  className?: string;
};

export function Hero({
  title,
  subtitle,
  intro,
  primaryCta,
  secondaryCta,
  imageSrc,
  imageAlt = "Nettoyage professionnel de climatisation",
  imageAspect = "landscape",
  badges,
  className,
}: HeroProps) {
  return (
    <section className={cn("bg-background py-12 md:py-16 lg:py-20", className)}>
      <Container>
        <div
          className={cn(
            "grid items-center gap-10 lg:gap-16",
            imageSrc && "lg:grid-cols-2",
          )}
        >
          <Reveal>
            <div className={cn(!imageSrc && "mx-auto max-w-3xl text-center")}>
              <h1 className="text-text-primary">{title}</h1>
              <p
                className={cn(
                  "mt-4 text-lg font-medium text-primary",
                  !imageSrc && "mx-auto max-w-2xl",
                )}
              >
                {subtitle}
              </p>
              {intro && (
                <p className={cn("mt-4 text-text-secondary", !imageSrc && "mx-auto max-w-2xl")}>
                  {intro}
                </p>
              )}

              {badges && badges.length > 0 && (
                <ul
                  className={cn(
                    "mt-6 space-y-2",
                    !imageSrc && "mx-auto inline-block text-left",
                  )}
                >
                  {badges.map((badge) => (
                    <li key={badge} className="flex items-center gap-2 text-sm text-text-secondary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                      {badge}
                    </li>
                  ))}
                </ul>
              )}

              <div
                className={cn(
                  "mt-8 flex flex-col gap-3 sm:flex-row",
                  !imageSrc && "justify-center",
                )}
              >
                <Button variant="primary" href={primaryCta.href}>
                  {primaryCta.label}
                </Button>
                <Button variant="outline" href={secondaryCta.href}>
                  {secondaryCta.label}
                </Button>
              </div>
            </div>
          </Reveal>

          {imageSrc && (
            <Reveal delay={0.15}>
              <div
                className={cn(
                  "relative overflow-hidden rounded-[var(--radius-image)] bg-surface",
                  imageAspect === "square" ? "aspect-square" : "aspect-[4/3]",
                )}
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
