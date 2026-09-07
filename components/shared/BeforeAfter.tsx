import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { beforeAfterPairs } from "@/constants/before-after";
import { cn } from "@/lib/utils";
import type { BeforeAfterPair, BeforeAfterShot } from "@/types";

type ShotProps = {
  shot: BeforeAfterShot;
  label: string;
  ratio: number;
  tone: "before" | "after";
};

function Shot({ shot, label, ratio, tone }: ShotProps) {
  return (
    <figure className="relative overflow-hidden rounded-[var(--radius-image)] border border-border bg-surface">
      <div className="relative" style={{ aspectRatio: ratio }}>
        <Image
          src={shot.src}
          alt={shot.alt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 45vw"
        />
      </div>
      <figcaption
        className={cn(
          "absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-sm",
          tone === "before" ? "bg-text-primary/85" : "bg-primary",
        )}
      >
        {label}
      </figcaption>
    </figure>
  );
}

export function BeforeAfter({ pairs = beforeAfterPairs }: { pairs?: BeforeAfterPair[] }) {
  return (
    <div className="space-y-10">
      {pairs.map((pair, index) => {
        /* Les photos en portrait restent côte à côte même sur mobile : empilées,
           elles occuperaient deux écrans entiers et la comparaison se perdrait. */
        const portrait = pair.ratio < 1;

        return (
          <Reveal key={pair.id} delay={index * 0.05}>
            <div className={cn(portrait && "mx-auto max-w-2xl")}>
              <div className={cn("grid gap-4", portrait ? "grid-cols-2" : "sm:grid-cols-2")}>
                <Shot shot={pair.before} label="Avant" ratio={pair.ratio} tone="before" />
                <Shot shot={pair.after} label="Après" ratio={pair.ratio} tone="after" />
              </div>
              <div className="mt-3">
                <h3 className="text-base font-semibold text-text-primary">{pair.title}</h3>
                <p className="mt-1 text-sm text-text-secondary">{pair.description}</p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
