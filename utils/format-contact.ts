/** Formate un numéro de téléphone français pour l'affichage */
export function formatPhoneDisplay(phone: string): string {
  const cleaned = phone.replace(/\D/g, "");
  if (cleaned.length === 11 && cleaned.startsWith("33")) {
    const local = cleaned.slice(2);
    return `${local.slice(0, 2)} ${local.slice(2, 4)} ${local.slice(4, 6)} ${local.slice(6, 8)} ${local.slice(8, 10)}`;
  }
  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 2)} ${cleaned.slice(2, 4)} ${cleaned.slice(4, 6)} ${cleaned.slice(6, 8)} ${cleaned.slice(8, 10)}`;
  }
  return phone;
}

/** Génère un lien tel: à partir d'un numéro */
export function getPhoneHref(phone: string): string {
  const cleaned = phone.replace(/\s/g, "");
  return cleaned.startsWith("+") ? `tel:${cleaned}` : `tel:+33${cleaned.replace(/^0/, "")}`;
}

/** Génère un lien mailto: */
export function getEmailHref(email: string): string {
  return `mailto:${email}`;
}
