import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

type IconBadgeProps = {
  name: string;
  size?: "sm" | "default" | "lg";
  tone?: "light" | "dark";
  className?: string;
};

const boxes = {
  sm: "h-10 w-10",
  default: "h-12 w-12",
  lg: "h-14 w-14",
};

const glyphs = { sm: 18, default: 22, lg: 26 };

export function IconBadge({ name, size = "default", tone = "light", className }: IconBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-[10px]",
        tone === "light" ? "bg-primary-light" : "bg-white/10",
        boxes[size],
        className,
      )}
    >
      <Icon
        name={name}
        size={glyphs[size]}
        className={tone === "dark" ? "text-white" : undefined}
      />
    </span>
  );
}
