import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { heroPillars } from "@/constants/benefits";
import { audienceBanner, ctaConfig, heroReassurance } from "@/constants/cta";
import { images } from "@/constants/images";
import { heroContent } from "@/constants/site";

export function HeroHome() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-white via-white to-primary-light">
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-[58%] lg:block">
          <Image
            src={images.hero.home.path}
            alt={images.hero.home.alt}
            fill
            priority
            sizes="58vw"
            className="object-cover object-[72%_center]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_0%,rgba(255,255,255,0.88)_14%,rgba(255,255,255,0.3)_34%,rgba(255,255,255,0)_58%)]" />
        </div>

        <Container size="wide">
          <div className="max-w-xl py-14 lg:max-w-[46%] lg:py-24">
            <Reveal>
              <h1>
                <span className="block text-text-primary">{heroContent.titleLines[0]}</span>
                <span className="block text-primary">{heroContent.titleLines[1]}</span>
              </h1>

              <p className="mt-5 max-w-lg text-lg text-text-secondary">
                {heroContent.subtitle}
              </p>

              <div className="mt-8 h-px w-24 bg-primary" aria-hidden="true" />

              <ul className="mt-8 grid gap-6 sm:grid-cols-3">
                {heroPillars.map((pillar) => (
                  <li key={pillar.id} className="sm:border-l sm:border-border sm:pl-4 sm:first:border-l-0 sm:first:pl-0">
                    <Icon name={pillar.icon} size={26} />
                    <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-text-primary">
                      {pillar.title}
                    </p>
                    <p className="mt-1 text-sm text-text-secondary">{pillar.description}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button variant="primary" href={ctaConfig.primary.href}>
                  {ctaConfig.primary.label}
                </Button>
                <Button variant="outline" href={ctaConfig.secondary.href}>
                  {ctaConfig.secondary.label}
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <div className="border-b border-border bg-background">
        <Container size="wide">
          <div className="grid gap-6 py-8 md:grid-cols-2 lg:grid-cols-4">
            {heroReassurance.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <Icon name={item.icon} size={24} />
                <div>
                  <p className="text-sm font-semibold text-text-primary">{item.title}</p>
                  <p className="text-sm text-text-secondary">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <div className="bg-primary-dark py-3.5">
        <Container size="wide">
          <p className="text-center text-sm font-medium uppercase tracking-wide text-white/90">
            {audienceBanner.audience}
            <span className="mx-3 text-white/40" aria-hidden="true">
              |
            </span>
            {audienceBanner.claim}
          </p>
        </Container>
      </div>
    </>
  );
}
