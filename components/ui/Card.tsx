import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  /** Filet bleu sur le bord gauche, pour distinguer une carte de contenu */
  accent?: boolean;
};

export function Card({ children, className, hover = false, accent = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-card)] border border-border bg-background p-6 shadow-sm",
        accent && "border-l-[3px] border-l-primary",
        hover &&
          "transition duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md",
        className,
      )}
    >
      {children}
    </div>
  );
}
