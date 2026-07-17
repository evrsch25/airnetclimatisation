import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";

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

    if (!apiKey) {
      return NextResponse.json(
        { error: "Service d'envoi non configuré. Veuillez nous appeler directement." },
        { status: 503 },
      );
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const { name, phone, email, city, address, message } = result.data;

    await resend.emails.send({
      from: "Air Net Climatisation <onboarding@resend.dev>",
      to: contactEmail,
      replyTo: email,
      subject: `Nouvelle demande de devis — ${name}`,
      html: `
        <h2>Nouvelle demande de devis</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Téléphone :</strong> ${phone}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Ville :</strong> ${city}</p>
        <p><strong>Adresse :</strong> ${address}</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erreur lors de l'envoi. Veuillez réessayer ou nous appeler." },
      { status: 500 },
    );
  }
}
