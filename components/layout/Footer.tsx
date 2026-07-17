import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { Container } from "@/components/ui/Container";
import { Separator } from "@/components/ui/Separator";
import { footerNavigation } from "@/constants/navigation";
import { contactInfo } from "@/constants/contact";
import { cities, interventionZone } from "@/constants/cities";
import { siteConfig } from "@/constants/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border">
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="footer" />
            <p className="mt-3 text-sm text-text-secondary leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-primary">Navigation</h3>
            <ul className="mt-4 space-y-2">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-secondary hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-primary">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-2 text-sm text-text-secondary hover:text-primary"
                >
                  <Phone size={16} aria-hidden="true" />
                  {contactInfo.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2 text-sm text-text-secondary hover:text-primary"
                >
                  <Mail size={16} aria-hidden="true" />
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-sm text-text-secondary">
                  <MapPin size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                  {contactInfo.address.full}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-primary">Zone d&apos;intervention</h3>
            <p className="mt-4 text-sm text-text-secondary">
              {interventionZone.department} — {interventionZone.area}
            </p>
            <p className="mt-2 text-sm text-text-secondary">
              {cities.map((c) => c.name).join(", ")}…
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-text-muted sm:flex-row">
          <p>
            © {currentYear} {siteConfig.legalName}. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-primary">
              Mentions légales
            </Link>
            <Link href="/cgu" className="hover:text-primary">
              CGU
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
