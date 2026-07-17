# 09_DEVELOPMENT_PLAN.md

# Plan de développement

Ce document définit l'ordre exact dans lequel le projet doit être développé.

Ne jamais développer les pages directement.

Toujours commencer par construire les fondations.

Chaque étape doit être entièrement terminée avant de passer à la suivante.

Chaque étape doit être testée.

Chaque étape doit être revue.

---

# PHASE 1 — Initialisation du projet

Créer un nouveau projet Next.js.

Installer toutes les dépendances.

Configurer TypeScript.

Configurer Tailwind CSS v4.

Installer shadcn/ui.

Installer Lucide React.

Installer Motion.

Installer React Hook Form.

Installer Zod.

Installer Resend.

Configurer ESLint.

Configurer Prettier.

Créer la structure des dossiers.

Configurer les alias TypeScript.

Configurer les variables d'environnement.

Créer un README.

Initialiser Git.

Aucun développement métier n'est réalisé pendant cette phase.

---

# PHASE 2 — Fondation du projet

Créer l'ensemble de l'architecture.

Créer :

constants

types

utils

hooks

lib

emails

components

Créer les constantes principales :

Téléphone

Adresse

Mail

Nom de l'entreprise

Navigation

Zone d'intervention

Réseaux sociaux

Horaires

Aucune donnée métier ne doit être écrite directement dans les composants.

---

# PHASE 3 — Design System

Créer tous les composants de base.

Buttons

Input

Textarea

Checkbox

Card

Section

Container

Icon

Badge

Separator

Typography

Créer ensuite les variantes.

Tester tous les composants.

Vérifier leur responsive.

---

# PHASE 4 — Layout

Créer :

Root Layout

Header

Footer

Navigation Desktop

Navigation Mobile

CTA flottants

Créer également les Metadata globales.

Tester toutes les résolutions.

---

# PHASE 5 — Composants métier

Créer :

Hero

FAQ

Timeline

ServiceCard

BenefitCard

CityCard

ContactCard

ReviewCard

MapSection

CallToAction

ContactForm

Reveal

Tous ces composants doivent être entièrement terminés avant de créer les pages.

---

# PHASE 6 — Développement des pages

Créer les pages dans cet ordre.

Accueil

Prestations

Pourquoi nous

Zone d'intervention

Contact

Mentions légales

CGU

404

Chaque page est développée complètement avant de passer à la suivante.

---

# PHASE 7 — Contenu

Intégrer le contenu fourni par le client.

Reformuler lorsque cela améliore :

la lisibilité

le SEO

la compréhension

Ne jamais inventer d'informations.

Ne jamais supprimer une information importante.

---

# PHASE 8 — Responsive

Tester :

Desktop

Laptop

Tablette

Mobile

Grand Mobile

Petit Mobile

Corriger toutes les sections.

Aucune barre horizontale.

Aucun texte coupé.

Aucun débordement.

---

# PHASE 9 — SEO

Créer :

Metadata

Schema.org

FAQ Schema

Open Graph

Twitter Cards

Canonical

Robots

Sitemap

Breadcrumbs

Optimiser toutes les images.

Créer les ALT.

Optimiser les H1.

Créer le maillage interne.

---

# PHASE 10 — Performance

Mesurer Lighthouse.

Corriger.

Optimiser.

Mesurer de nouveau.

Objectif :

95+

sur toutes les catégories.

Optimiser :

Images

Fonts

Bundles

Hydratation

JavaScript

Animations

---

# PHASE 11 — Accessibilité

Tester :

Navigation clavier

Contrastes

Focus

ARIA

Screen Readers

Labels

Messages d'erreur

Responsive

Corriger chaque problème.

---

# PHASE 12 — Relecture

Relire tout le projet.

Chercher :

Duplication

Code mort

Imports inutiles

Variables inutiles

Styles inutiles

Composants inutilisés

Optimiser.

---

# PHASE 13 — Revue UX

Relire chaque page comme un utilisateur.

Le visiteur comprend-il :

Qui ?

Quoi ?

Pourquoi ?

Comment ?

Où ?

Combien ?

Si une réponse n'est pas évidente :

Modifier la page.

---

# PHASE 14 — Validation finale

Avant de considérer le projet terminé :

Tous les liens fonctionnent.

Tous les boutons fonctionnent.

Le formulaire fonctionne.

Les images sont optimisées.

Le responsive est parfait.

Le SEO est terminé.

Le Lighthouse est excellent.

Le code est propre.

Le projet est prêt à être mis en production.

---

# Règle importante

Ne jamais développer plusieurs grosses fonctionnalités en parallèle.

Toujours terminer une étape.

La tester.

La corriger.

Puis seulement commencer la suivante.

La qualité prime toujours sur la vitesse.