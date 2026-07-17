import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { images } from "@/constants/images";

type BeforeAfterProps = {
  beforeSrc?: string;
  afterSrc?: string;
};

export function BeforeAfter({
  beforeSrc = images.beforeAfter.before.path,
  afterSrc = images.beforeAfter.after.path,
}: BeforeAfterProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="overflow-hidden p-0">
        <div className="relative aspect-video bg-surface">
          <Image
            src={beforeSrc}
            alt={images.beforeAfter.before.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <p className="px-4 py-3 text-center text-sm font-medium text-text-secondary">Avant</p>
      </Card>
      <Card className="overflow-hidden p-0">
        <div className="relative aspect-video bg-surface">
          <Image
            src={afterSrc}
            alt={images.beforeAfter.after.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <p className="px-4 py-3 text-center text-sm font-medium text-text-secondary">Après</p>
      </Card>
    </div>
  );
}
