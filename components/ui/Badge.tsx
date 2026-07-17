import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "primary" | "outline";
  className?: string;
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variant === "default" && "bg-surface text-text-secondary",
        variant === "primary" && "bg-primary-light text-primary",
        variant === "outline" && "border border-border text-text-secondary",
        className,
      )}
    >
      {children}
    </span>
  );
}
