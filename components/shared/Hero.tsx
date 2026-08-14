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
  imageSrc = "/images/placeholders/hero-climatisation.svg",
  imageAlt = "Nettoyage professionnel de climatisation",
  imageAspect = "landscape",
  badges,
  className,
}: HeroProps) {
  return (
    <section className={cn("bg-background py-12 md:py-16 lg:py-20", className)}>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <h1 className="text-text-primary">{title}</h1>
              <p className="mt-4 text-lg font-medium text-primary">{subtitle}</p>
              {intro && <p className="mt-4 text-text-secondary">{intro}</p>}

              {badges && badges.length > 0 && (
                <ul className="mt-6 space-y-2">
                  {badges.map((badge) => (
                    <li key={badge} className="flex items-center gap-2 text-sm text-text-secondary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                      {badge}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button variant="primary" href={primaryCta.href}>
                  {primaryCta.label}
                </Button>
                <Button variant="outline" href={secondaryCta.href}>
                  {secondaryCta.label}
                </Button>
              </div>
            </div>
          </Reveal>

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
                unoptimized={imageSrc.endsWith(".svg")}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
