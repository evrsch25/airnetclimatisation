import { cn } from "@/lib/utils";

type FieldErrorProps = {
  message?: string;
  className?: string;
};

export function FieldError({ message, className }: FieldErrorProps) {
  if (!message) return null;

  return (
    <p className={cn("mt-1.5 text-sm text-error", className)} role="alert">
      {message}
    </p>
  );
}
