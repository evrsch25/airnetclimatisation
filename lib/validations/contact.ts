import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(100, "Le nom est trop long"),
  phone: z
    .string()
    .min(10, "Veuillez entrer un numéro de téléphone valide")
    .max(20, "Le numéro de téléphone est trop long"),
  email: z.string().email("Veuillez entrer une adresse email valide"),
  city: z
    .string()
    .min(2, "Veuillez indiquer votre ville")
    .max(100, "Le nom de ville est trop long"),
  address: z
    .string()
    .min(5, "Veuillez indiquer votre adresse d'intervention")
    .max(200, "L'adresse est trop longue"),
  message: z
    .string()
    .min(10, "Veuillez décrire votre demande (minimum 10 caractères)")
    .max(2000, "Le message est trop long"),
  website: z.string().max(0).optional(),
  rgpdConsent: z
    .boolean()
    .refine((val) => val === true, {
      message: "Vous devez accepter la politique de confidentialité",
    }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
