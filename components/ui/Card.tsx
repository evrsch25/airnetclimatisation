import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-card)] border border-border bg-background p-6 shadow-sm",
        hover && "transition-shadow duration-200 hover:shadow-md",
        className,
      )}
    >
      {children}
    </div>
  );
}
