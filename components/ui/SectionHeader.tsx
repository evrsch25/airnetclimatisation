import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  if (!title && !subtitle) return null;

  return (
    <div
      className={cn(
        "mb-10 md:mb-14",
        align === "center" && "text-center",
        align === "left" && "text-left",
        className,
      )}
    >
      {title && <h2 className="text-text-primary">{title}</h2>}
      {subtitle && (
        <p className={cn("mt-4 max-w-2xl text-lg", align === "center" && "mx-auto")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
