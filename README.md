# Air Net Climatisation

Site vitrine professionnel pour **Air Net Climatisation** — nettoyage, entretien et désinfection de climatisation dans les Bouches-du-Rhône.

## Stack

- **Next.js 15** (App Router)
- **TypeScript** (strict)
- **Tailwind CSS v4**
- **shadcn/ui** (base adaptée au design system)
- **Motion** (animations discrètes)
- **React Hook Form + Zod** (formulaire)
- **Resend** (envoi d'emails)

## Démarrage

```bash
# Installation
npm install

# Copier les variables d'environnement
cp .env.example .env.local

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Variables d'environnement

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL du site (ex: `https://airnetclimatisation.fr`) |
| `RESEND_API_KEY` | Clé API Resend pour l'envoi des emails |
| `CONTACT_EMAIL` | Email de réception des demandes de devis |
| `GOOGLE_MAPS_API_KEY` | (Optionnel) Clé Google Maps |

## Structure

```
app/           → Pages et routes API
components/    → Composants UI, layout et métier
constants/     → Contenu et données métier centralisées
lib/           → SEO, validations, utilitaires
types/         → Types TypeScript partagés
hooks/         → Hooks React réutilisables
utils/         → Fonctions utilitaires
public/        → Images, logos, icônes
styles/        → CSS global et variables de thème
```

## Scripts

```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Vérification ESLint
npm run format       # Formatage Prettier

node scripts/build-assets.mjs   # Régénère logo horizontal, emblème, favicons et image Open Graph
node scripts/screenshot.mjs     # Captures de contrôle visuel (nécessite le serveur de dev)
```

`build-assets.mjs` dérive tous les dérivés du logo depuis `public/logos/logo.png`.
Si le client fournit un nouveau logo, remplacer ce fichier et relancer le script.

## Pages

| Route | Description |
|---|---|
| `/` | Accueil |
| `/prestations` | Prestations et tarifs |
| `/pourquoi-nous` | Valeurs et engagements |
| `/zone-intervention` | Zone géographique |
| `/nettoyage-climatisation/[ville]` | 8 pages SEO locales (contenu dans `constants/city-pages.ts`) |
| `/contact` | Formulaire de devis |
| `/mentions-legales` | Mentions légales |
| `/cgu` | Conditions générales |

## Contenu

Tout le contenu métier est centralisé dans `constants/`.

## Documentation

- [`docs/RESEND.md`](docs/RESEND.md) — configuration de l'envoi des e-mails du formulaire.

## Licence

Projet privé — Air Net Climatisation © 2026
