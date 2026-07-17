"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Label } from "@/components/ui/Label";
import { FieldError } from "@/components/ui/FieldError";
import { Checkbox } from "@/components/ui/Checkbox";
import { Card } from "@/components/ui/Card";
import {
  contactFormSchema,
  type ContactFormData,
} from "@/lib/validations/contact";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error ?? "Une erreur est survenue");
      }

      setStatus("success");
      reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Une erreur est survenue. Veuillez réessayer.",
      );
    }
  };

  if (status === "success") {
    return (
      <Card className="text-center">
        <h3 className="text-lg font-semibold text-success">Demande envoyée !</h3>
        <p className="mt-2 text-sm text-text-secondary">
          Merci pour votre message. Nous vous recontacterons dans les plus brefs délais.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
          Envoyer une autre demande
        </Button>
      </Card>
    );
  }

  return (
    <Card>
      <h3 className="text-lg font-semibold">Demander un devis</h3>
      <p className="mt-2 text-sm text-text-secondary">
        Remplissez le formulaire ci-dessous. Devis gratuit et sans engagement.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5" noValidate>
        {/* Honeypot anti-spam — champ invisible */}
        <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
          <label htmlFor="website">Ne pas remplir</label>
          <input
            id="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </div>

        <div>
          <Label htmlFor="name">Nom *</Label>
          <Input id="name" {...register("name")} error={!!errors.name} />
          <FieldError message={errors.name?.message} />
        </div>

        <div>
          <Label htmlFor="phone">Téléphone *</Label>
          <Input id="phone" type="tel" {...register("phone")} error={!!errors.phone} />
          <FieldError message={errors.phone?.message} />
        </div>

        <div>
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" {...register("email")} error={!!errors.email} />
          <FieldError message={errors.email?.message} />
        </div>

        <div>
          <Label htmlFor="city">Ville *</Label>
          <Input id="city" {...register("city")} error={!!errors.city} />
          <FieldError message={errors.city?.message} />
        </div>

        <div>
          <Label htmlFor="address">Adresse d&apos;intervention *</Label>
          <Input id="address" {...register("address")} error={!!errors.address} />
          <FieldError message={errors.address?.message} />
        </div>

        <div>
          <Label htmlFor="message">Message *</Label>
          <Textarea id="message" {...register("message")} error={!!errors.message} />
          <FieldError message={errors.message?.message} />
        </div>

        <div>
          <Checkbox
            id="rgpdConsent"
            label="J'accepte que mes données soient utilisées pour répondre à ma demande, conformément à la politique de confidentialité."
            error={!!errors.rgpdConsent}
            {...register("rgpdConsent")}
          />
          <FieldError message={errors.rgpdConsent?.message} />
        </div>

        {status === "error" && (
          <p className="text-sm text-error" role="alert">
            {errorMessage}
          </p>
        )}

        <Button type="submit" variant="primary" disabled={status === "loading"}>
          {status === "loading" ? "Envoi en cours…" : "Demander un devis"}
        </Button>
      </form>
    </Card>
  );
}
