import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type CallToActionProps = {
  title: string;
  description?: string;
  primaryButton: { label: string; href: string };
  secondaryButton?: { label: string; href: string };
  phone?: string;
  variant?: "default" | "surface";
  className?: string;
};

export function CallToAction({
  title,
  description,
  primaryButton,
  secondaryButton,
  phone,
  variant = "default",
  className,
}: CallToActionProps) {
  return (
    <Reveal>
      <div
        className={cn(
          "rounded-[var(--radius-card)] border border-border px-6 py-10 text-center md:px-12 md:py-14",
          variant === "default" && "bg-primary-light",
          variant === "surface" && "bg-surface",
          className,
        )}
      >
        <h2 className="text-2xl md:text-3xl">{title}</h2>
        {description && <p className="mx-auto mt-4 max-w-xl text-text-secondary">{description}</p>}

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button variant="primary" href={primaryButton.href}>
            {primaryButton.label}
          </Button>
          {secondaryButton && (
            <Button variant="outline" href={secondaryButton.href}>
              {secondaryButton.label}
            </Button>
          )}
        </div>

        {phone && (
          <p className="mt-4 text-sm text-text-secondary">
            Ou appelez-nous au{" "}
            <a href={`tel:${phone}`} className="font-medium text-primary hover:underline">
              {phone}
            </a>
          </p>
        )}
      </div>
    </Reveal>
  );
}
