"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useScrollHeader } from "@/hooks/useScrollHeader";
import { mainNavigation } from "@/constants/navigation";
import { ctaConfig } from "@/constants/cta";
import { contactInfo } from "@/constants/contact";

export function Header() {
  const isScrolled = useScrollHeader();
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const closeMenu = useCallback(() => setIsMobileOpen(false), []);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    if (isMobileOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isMobileOpen, closeMenu]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/95 shadow-sm backdrop-blur-sm" : "bg-background",
      )}
    >
      <div className="mx-auto flex h-20 max-w-[var(--width-content-wide)] items-center justify-between px-4 sm:px-6 lg:h-[96px] lg:px-8">
        <Logo variant="header" />

        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex" aria-label="Navigation principale">
          {mainNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-text-secondary",
              )}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" size="sm" href={ctaConfig.secondary.href}>
            <Phone size={16} aria-hidden="true" />
            <span className="hidden xl:inline">{contactInfo.phoneDisplay}</span>
            <span className="xl:hidden">Appeler</span>
          </Button>
          <Button variant="primary" size="sm" href={ctaConfig.primary.href}>
            {ctaConfig.primary.label}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-button)] text-text-primary lg:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-border bg-background px-4 py-4 lg:hidden"
          aria-label="Navigation mobile"
        >
          <div className="flex flex-col gap-1">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-primary-light text-primary"
                    : "text-text-secondary hover:bg-surface",
                )}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
              <Button variant="outline" href={ctaConfig.secondary.href}>
                <Phone size={16} aria-hidden="true" />
                {contactInfo.phoneDisplay}
              </Button>
              <Button variant="primary" href={ctaConfig.primary.href}>
                {ctaConfig.primary.label}
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
