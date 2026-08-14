import type { SocialLink } from "@/types";

/*
  Aucun réseau social n'existe pour le moment côté client.
  Les liens sont donc désactivés et le bloc correspondant est commenté
  dans components/layout/Footer.tsx.

  Pour réactiver : renseigner les URL réelles, passer enabled à true,
  puis décommenter le bloc du footer.

export const socialLinks: SocialLink[] = [
  { platform: "facebook", href: "https://www.facebook.com/…", enabled: true },
  { platform: "instagram", href: "https://www.instagram.com/…", enabled: true },
  { platform: "linkedin", href: "https://www.linkedin.com/…", enabled: true },
];
*/

export const socialLinks: SocialLink[] = [];
