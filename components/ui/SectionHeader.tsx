import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
  className,
}: SectionHeaderProps) {
  if (!title && !subtitle && !eyebrow) return null;

  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "mb-10 md:mb-14",
        align === "center" && "text-center",
        align === "left" && "text-left",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.14em]",
            align === "center" && "justify-center",
            isDark ? "text-primary-light" : "text-primary",
          )}
        >
          <span
            className={cn("h-px w-6", isDark ? "bg-primary-light/50" : "bg-primary/40")}
            aria-hidden="true"
          />
          {eyebrow}
        </p>
      )}

      {title && (
        <h2 className={cn("tracking-tight", isDark ? "text-white" : "text-text-primary")}>
          {title}
        </h2>
      )}

      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-lg",
            align === "center" && "mx-auto",
            isDark && "text-white/70",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
