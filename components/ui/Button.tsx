import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white hover:bg-primary-hover shadow-sm",
        secondary:
          "bg-surface text-text-primary border border-border hover:bg-surface-alt",
        outline:
          "border border-primary text-primary bg-transparent hover:bg-primary-light",
        ghost:
          "text-text-secondary hover:text-primary hover:bg-primary-light",
      },
      size: {
        default: "h-11 px-6 text-sm rounded-[var(--radius-button)]",
        sm: "h-9 px-4 text-sm rounded-[var(--radius-button)]",
        lg: "h-12 px-8 text-base rounded-[var(--radius-button)]",
        icon: "h-11 w-11 rounded-[var(--radius-button)]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

type ButtonProps = VariantProps<typeof buttonVariants> & {
  href?: string;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button({
  variant,
  size,
  href,
  className,
  children,
  external,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (href) {
    if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a href={href} className={classes} {...props}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export { buttonVariants };
