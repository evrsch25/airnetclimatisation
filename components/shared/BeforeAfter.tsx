import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { images } from "@/constants/images";

type Pair = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
};

const defaultPairs: Pair[] = [
  {
    beforeSrc: images.beforeAfter.before.path,
    afterSrc: images.beforeAfter.after.path,
    beforeAlt: images.beforeAfter.before.alt,
    afterAlt: images.beforeAfter.after.alt,
  },
];

export function BeforeAfter({ pairs = defaultPairs }: { pairs?: Pair[] }) {
  return (
    <div className="space-y-8">
      {pairs.map((pair) => (
        <div key={pair.beforeSrc} className="grid gap-6 md:grid-cols-2">
          <Card className="overflow-hidden p-0">
            <div className="relative aspect-[4/3] bg-surface">
              <Image
                src={pair.beforeSrc}
                alt={pair.beforeAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <p className="px-4 py-3 text-center text-sm font-medium text-text-secondary">
              Avant
            </p>
          </Card>
          <Card className="overflow-hidden p-0">
            <div className="relative aspect-[4/3] bg-surface">
              <Image
                src={pair.afterSrc}
                alt={pair.afterAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <p className="px-4 py-3 text-center text-sm font-medium text-text-secondary">
              Après
            </p>
          </Card>
        </div>
      ))}
    </div>
  );
}
