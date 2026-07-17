import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
};

export function Container({ children, className, size = "default" }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        size === "default" && "max-w-[var(--width-content)]",
        size === "wide" && "max-w-[var(--width-content-wide)]",
        size === "narrow" && "max-w-3xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
