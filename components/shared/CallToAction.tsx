import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type CallToActionProps = {
  title: string;
  description?: string;
  primaryButton: { label: string; href: string };
  secondaryButton?: { label: string; href: string };
  phone?: string;
  variant?: "default" | "surface" | "dark";
  className?: string;
};

export function CallToAction({
  title,
  description,
  primaryButton,
  secondaryButton,
  phone,
  variant = "dark",
  className,
}: CallToActionProps) {
  const isDark = variant === "dark";

  return (
    <Reveal>
      <div
        className={cn(
          "overflow-hidden rounded-[var(--radius-card)] px-6 py-12 text-center md:px-12 md:py-16",
          variant === "default" && "border border-border bg-primary-light",
          variant === "surface" && "border border-border bg-surface",
          isDark && "bg-primary-dark",
          className,
        )}
      >
        <h2 className={cn("text-2xl tracking-tight md:text-3xl", isDark && "text-white")}>
          {title}
        </h2>

        {description && (
          <p className={cn("mx-auto mt-4 max-w-xl", isDark ? "text-white/70" : "text-text-secondary")}>
            {description}
          </p>
        )}

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button variant="primary" size="lg" href={primaryButton.href}>
            {primaryButton.label}
          </Button>
          {secondaryButton && (
            <Button
              variant={isDark ? "secondary" : "outline"}
              size="lg"
              href={secondaryButton.href}
              className={isDark ? "border-white/25 bg-transparent text-white hover:bg-white/10" : undefined}
            >
              <Phone size={16} aria-hidden="true" />
              {secondaryButton.label}
            </Button>
          )}
        </div>

        {phone && (
          <p className={cn("mt-6 text-sm", isDark ? "text-white/60" : "text-text-secondary")}>
            Ou appelez directement le{" "}
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className={cn(
                "font-semibold hover:underline",
                isDark ? "text-white" : "text-primary",
              )}
            >
              {phone}
            </a>
          </p>
        )}
      </div>
    </Reveal>
  );
}
