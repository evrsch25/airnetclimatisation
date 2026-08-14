import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";
import { buildInternalNotification, buildVisitorConfirmation } from "@/emails/templates";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Données invalides", details: result.error.flatten() },
        { status: 400 },
      );
    }

    if (result.data.website) {
      return NextResponse.json({ success: true });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL ?? "contact@airnetclimatisation.fr";
    const fromAddress = process.env.RESEND_FROM ?? "Air Net Climatisation <onboarding@resend.dev>";

    if (!apiKey) {
      return NextResponse.json(
        { error: "Service d'envoi non configuré. Veuillez nous appeler directement." },
        { status: 503 },
      );
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const { name, phone, email, city, address, message } = result.data;
    const data = { name, phone, email, city, address, message };

    const notification = buildInternalNotification(data);
    const { error } = await resend.emails.send({
      from: fromAddress,
      to: contactEmail,
      replyTo: data.email,
      subject: notification.subject,
      html: notification.html,
    });

    if (error) {
      return NextResponse.json(
        { error: "Erreur lors de l'envoi. Veuillez réessayer ou nous appeler." },
        { status: 502 },
      );
    }

    // L'accusé de réception ne doit pas faire échouer la demande s'il n'part pas
    const confirmation = buildVisitorConfirmation(data);
    await resend.emails
      .send({
        from: fromAddress,
        to: data.email,
        replyTo: contactEmail,
        subject: confirmation.subject,
        html: confirmation.html,
      })
      .catch(() => null);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erreur lors de l'envoi. Veuillez réessayer ou nous appeler." },
      { status: 500 },
    );
  }
}
