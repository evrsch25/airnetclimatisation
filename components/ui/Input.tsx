import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
};

export function Input({ className, error, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "flex h-12 w-full rounded-[var(--radius-input)] border border-border bg-background px-4 text-sm text-text-primary transition-colors placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
        error && "border-error focus:border-error focus:ring-error/20",
        className,
      )}
      {...props}
    />
  );
}
