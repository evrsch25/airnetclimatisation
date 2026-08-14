import Image from "next/image";
import Link from "next/link";
import { images } from "@/constants/images";
import { siteConfig } from "@/constants/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "header" | "footer";
  className?: string;
};

/** Dimensions intrinsèques de logo-horizontal.png, produit par scripts/build-assets.mjs */
const INTRINSIC = { width: 724, height: 220 };

export function Logo({ variant = "header", className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center", className)}
      aria-label={`${siteConfig.name} — Accueil`}
    >
      <Image
        src={images.logo.horizontalPath}
        alt={images.logo.alt}
        width={INTRINSIC.width}
        height={INTRINSIC.height}
        className={cn("w-auto object-contain", variant === "header" ? "h-16 lg:h-[76px]" : "h-14")}
        priority={variant === "header"}
      />
    </Link>
  );
}
