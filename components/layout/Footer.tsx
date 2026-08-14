import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { footerNavigation } from "@/constants/navigation";
import { contactInfo } from "@/constants/contact";
import { cities, interventionZone } from "@/constants/cities";
import { images } from "@/constants/images";
import { siteConfig } from "@/constants/site";

/*
  Réseaux sociaux — à réactiver quand les comptes existeront.
  Décommenter ce bloc, importer socialLinks depuis @/constants/social
  et rétablir les entrées dans ce fichier de constantes.

  <ul className="mt-6 flex gap-3">
    {socialLinks.filter((link) => link.enabled).map((link) => (
      <li key={link.platform}>
        <a href={link.href} target="_blank" rel="noopener noreferrer"
           className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
           aria-label={link.platform}>
          …icône…
        </a>
      </li>
    ))}
  </ul>
*/

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white/70">
      <Container className="py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="inline-flex rounded-xl bg-white px-4 py-3"
              aria-label={`${siteConfig.name} — Accueil`}
            >
              <Image
                src={images.logo.horizontalPath}
                alt={images.logo.alt}
                width={724}
                height={220}
                className="h-11 w-auto object-contain"
              />
            </Link>

            {/* La couleur est explicite : la règle globale sur p écrase l'héritage */}
            <p className="mt-5 text-sm leading-relaxed text-white/70">{siteConfig.description}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="mt-5 space-y-2.5">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-2.5 text-sm hover:text-white"
                >
                  <Phone size={16} className="shrink-0 text-primary" aria-hidden="true" />
                  {contactInfo.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2.5 text-sm hover:text-white"
                >
                  <Mail size={16} className="shrink-0 text-primary" aria-hidden="true" />
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                {contactInfo.address.full}
              </li>
              <li className="flex items-start gap-2.5 text-sm">
                <Clock size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                {contactInfo.hours.value}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Zone d&apos;intervention
            </h3>
            <p className="mt-5 text-sm text-white/70">
              {interventionZone.department} — {interventionZone.area}
            </p>
            <ul className="mt-3 space-y-1.5">
              {cities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/nettoyage-climatisation/${city.slug}`}
                    className="text-sm hover:text-white"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 text-sm text-white/60 sm:flex-row">
          <p className="text-white/60">
            © {currentYear} {siteConfig.legalName}. Tous droits réservés.
          </p>
          <div className="flex gap-5">
            <Link href="/mentions-legales" className="hover:text-white">
              Mentions légales
            </Link>
            <Link href="/cgu" className="hover:text-white">
              CGU
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
