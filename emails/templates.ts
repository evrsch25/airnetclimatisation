import { contactInfo, responseTime } from "@/constants/contact";
import { siteConfig } from "@/constants/site";

type QuoteRequest = {
  name: string;
  phone: string;
  email: string;
  city: string;
  address: string;
  message: string;
};

/** Neutralise le HTML : les valeurs viennent d'un formulaire public */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const shell = (title: string, body: string) => `
<!doctype html>
<html lang="fr">
  <body style="margin:0;padding:24px;background:#f8f9fa;font-family:Arial,Helvetica,sans-serif;color:#1a1a2e;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;">
      <tr>
        <td style="padding:24px 28px;border-bottom:1px solid #e5e7eb;">
          <p style="margin:0;font-size:18px;font-weight:bold;color:#002d5b;">${siteConfig.legalName}</p>
          <p style="margin:4px 0 0;font-size:13px;color:#6b7280;">${title}</p>
        </td>
      </tr>
      <tr><td style="padding:28px;font-size:14px;line-height:1.6;">${body}</td></tr>
      <tr>
        <td style="padding:20px 28px;border-top:1px solid #e5e7eb;font-size:12px;color:#6b7280;">
          ${siteConfig.legalName} — ${contactInfo.phoneDisplay} — ${contactInfo.email}<br />
          ${contactInfo.address.full}
        </td>
      </tr>
    </table>
  </body>
</html>`;

/** Notification interne envoyée à l'entreprise */
export function buildInternalNotification(data: QuoteRequest) {
  const row = (label: string, value: string) =>
    `<tr>
      <td style="padding:6px 12px 6px 0;color:#6b7280;white-space:nowrap;vertical-align:top;">${label}</td>
      <td style="padding:6px 0;font-weight:bold;">${escapeHtml(value)}</td>
    </tr>`;

  return {
    subject: `Nouvelle demande de devis — ${data.name} (${data.city})`,
    html: shell(
      "Nouvelle demande de devis",
      `<table role="presentation" cellpadding="0" cellspacing="0">
        ${row("Nom", data.name)}
        ${row("Téléphone", data.phone)}
        ${row("Email", data.email)}
        ${row("Ville", data.city)}
        ${row("Adresse", data.address)}
      </table>
      <p style="margin:20px 0 6px;color:#6b7280;">Message</p>
      <div style="padding:14px;background:#f8f9fa;border-radius:8px;white-space:pre-wrap;">${escapeHtml(data.message)}</div>`,
    ),
  };
}

/** Accusé de réception envoyé au visiteur */
export function buildVisitorConfirmation(data: QuoteRequest) {
  return {
    subject: `Votre demande de devis — ${siteConfig.name}`,
    html: shell(
      "Nous avons bien reçu votre demande",
      `<p style="margin:0 0 16px;">Bonjour ${escapeHtml(data.name)},</p>
      <p style="margin:0 0 16px;">
        Merci pour votre demande de devis. Nous l'avons bien reçue et nous revenons vers vous
        ${responseTime.value.toLowerCase()}.
      </p>
      <p style="margin:0 0 8px;color:#6b7280;">Récapitulatif de votre demande</p>
      <div style="padding:14px;background:#f8f9fa;border-radius:8px;">
        <p style="margin:0 0 8px;"><strong>Ville :</strong> ${escapeHtml(data.city)}</p>
        <p style="margin:0;white-space:pre-wrap;">${escapeHtml(data.message)}</p>
      </div>
      <p style="margin:20px 0 0;">
        Pour toute urgence, vous pouvez nous joindre directement au
        <strong>${contactInfo.phoneDisplay}</strong> (${contactInfo.hours.value.toLowerCase()}).
      </p>
      <p style="margin:16px 0 0;">À très bientôt,<br />L'équipe ${siteConfig.name}</p>`,
    ),
  };
}
