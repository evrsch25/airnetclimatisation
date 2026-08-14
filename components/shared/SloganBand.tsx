import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/constants/images";
import { heroContent } from "@/constants/site";
import { trustGuarantees } from "@/constants/why-us";

export function SloganBand() {
  return (
    <section className="bg-surface py-16 lg:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[3/2] overflow-hidden rounded-[var(--radius-image)] bg-background">
              <Image
                src={images.brand.slogan.path}
                alt={images.brand.slogan.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div>
              <h2>Un entretien à la hauteur de votre installation</h2>
              <p className="mt-4 text-lg">{heroContent.closing}</p>

              <p className="mt-8 text-sm font-semibold text-text-primary">
                Faire confiance à Air Net Climatisation, c&apos;est la garantie :
              </p>
              <ul className="mt-4 space-y-2.5">
                {trustGuarantees.map((guarantee) => (
                  <li key={guarantee} className="flex items-start gap-2.5 text-sm text-text-secondary">
                    <Check size={18} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                    {guarantee}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
