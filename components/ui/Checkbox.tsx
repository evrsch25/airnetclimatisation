import { cn } from "@/lib/utils";

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: React.ReactNode;
  error?: boolean;
};

export function Checkbox({ label, error, className, id, ...props }: CheckboxProps) {
  const inputId = id ?? props.name;

  return (
    <div className={cn("flex items-start gap-3", className)}>
      <input
        type="checkbox"
        id={inputId}
        className={cn(
          "mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary",
          error && "border-error",
        )}
        {...props}
      />
      <label htmlFor={inputId} className="text-sm text-text-secondary leading-relaxed">
        {label}
      </label>
    </div>
  );
}
