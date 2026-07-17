import Image from "next/image";
import Link from "next/link";
import { images } from "@/constants/images";
import { siteConfig } from "@/constants/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "header" | "footer";
  className?: string;
};

export function Logo({ variant = "header", className }: LogoProps) {
  const height = variant === "header" ? 48 : 40;

  return (
    <Link
      href="/"
      className={cn("inline-flex items-center", className)}
      aria-label={`${siteConfig.name} — Accueil`}
    >
      <Image
        src={images.logo.path}
        alt={images.logo.alt}
        width={height * 2.2}
        height={height}
        className="h-auto w-auto max-h-12 object-contain"
        priority={variant === "header"}
      />
    </Link>
  );
}
