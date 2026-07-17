import Link from "next/link";

export function SkipLink() {
  return (
    <Link
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[var(--radius-button)] focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
    >
      Aller au contenu principal
    </Link>
  );
}
