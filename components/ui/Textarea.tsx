import { cn } from "@/lib/utils";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: boolean;
};

export function Textarea({ className, error, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "flex min-h-[140px] w-full rounded-[var(--radius-input)] border border-border bg-background px-4 py-3 text-sm text-text-primary transition-colors placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
        error && "border-error focus:border-error focus:ring-error/20",
        className,
      )}
      {...props}
    />
  );
}
