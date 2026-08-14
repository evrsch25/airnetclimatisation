import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { keyFigures } from "@/constants/key-figures";

export function KeyFigures() {
  return (
    <section className="bg-primary-dark py-14 md:py-16">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {keyFigures.map((figure, index) => (
            <Reveal key={figure.label} delay={index * 0.05}>
              <div className="border-l-2 border-primary pl-5">
                <p className="text-4xl font-bold tracking-tight text-white">{figure.value}</p>
                <p className="mt-1.5 text-sm font-medium text-white/90">{figure.label}</p>
                <p className="mt-0.5 text-sm text-white/50">{figure.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
