# 05_UI_COMPONENTS.md

# Bibliothèque de composants

L'ensemble du site doit être construit à partir de composants réutilisables.

Ne jamais recréer un composant déjà existant.

Tous les composants doivent respecter le Design System.

Chaque composant doit être :

- réutilisable
- responsive
- accessible
- typé en TypeScript
- documenté par son nom et ses props

---

# Layout

## RootLayout

Responsabilités :

- Metadata globale
- Fonts
- Theme
- Header
- Footer
- Providers

Toutes les pages utilisent ce Layout.

---

# Header

Créer un composant :

Header.tsx

Il contient :

- Logo
- Navigation
- Bouton téléphone
- Bouton devis

Fonctionnalités :

- Sticky
- Ombre légère au scroll
- Animation douce
- Responsive
- Menu mobile

Le Header ne change jamais brutalement.

---

# Navigation

Créer un composant dédié.

Desktop :

Navigation horizontale.

Mobile :

Drawer.

Animation fluide.

Fermeture automatique après sélection.

Lien actif visible.

---

# Footer

Créer un Footer entièrement réutilisable.

Sections :

Entreprise

Navigation

Coordonnées

Réseaux sociaux

Mentions légales

CGU

Le Footer doit rester compact.

---

# Hero

Créer un Hero générique.

Props :

title

subtitle

image

primaryCTA

secondaryCTA

backgroundVariant

Le Hero doit pouvoir être utilisé sur plusieurs pages.

---

# Section

Créer un composant générique :

Section

Props :

title

subtitle

children

background

spacing

maxWidth

Toutes les pages utiliseront ce composant.

---

# SectionHeader

Créer un composant :

SectionHeader

Contient :

Titre

Sous-titre

Alignement configurable

Évite de répéter du code.

---

# Buttons

Créer :

PrimaryButton

SecondaryButton

OutlineButton

GhostButton

Tous héritent d'une même logique.

Même hauteur.

Même radius.

Même animation.

Même padding.

---

# Cards

Créer une base :

Card

Puis spécialiser.

Créer :

ServiceCard

BenefitCard

StepCard

CityCard

ContactCard

FeatureCard

FaqCard

ReviewCard

Toutes utilisent la Card de base.

---

# Icons

Créer un wrapper :

Icon.tsx

Utiliser Lucide.

Même taille partout.

Même épaisseur.

Même comportement.

---

# CTA

Créer un composant :

CallToAction

Props :

title

description

primaryButton

secondaryButton

variant

Utilisable partout.

---

# Timeline

Créer un composant :

Timeline

Chaque étape possède :

Numéro

Icône

Titre

Description

Animation légère.

Responsive.

---

# FAQ

Créer :

FaqAccordion

Props :

questions[]

Ouverture fluide.

Une seule question ouverte à la fois.

Navigation clavier.

ARIA.

---

# Formulaire

Créer :

ContactForm

Utiliser :

React Hook Form

+

Zod

Validation immédiate.

Messages d'erreur élégants.

Champs :

Nom

Téléphone

Email

Ville

Adresse

Message

Checkbox RGPD

Bouton d'envoi

État loading

Succès

Erreur

---

# Input

Créer des composants :

Input

Textarea

Select

Checkbox

Label

FieldError

Tous doivent partager le même style.

---

# Contact

Créer une carte :

ContactCard

Affiche :

Téléphone

Mail

Adresse

Horaires

Icône

Lien direct.

---

# Zone d'intervention

Créer :

CityGrid

CityCard

Responsive.

Réutilisable.

Prévoir l'ajout futur de dizaines de villes.

---

# Prestations

Créer :

ServiceGrid

ServiceCard

Le contenu doit être facilement modifiable.

---

# Avantages

Créer :

BenefitsGrid

BenefitCard

Icône

Titre

Description

Animation légère.

---

# Statistiques

Prévoir un composant :

Stats

Même s'il n'est pas utilisé immédiatement.

Exemples :

Nombre d'interventions

Temps de réponse

Zone couverte

Clients satisfaits

Le composant doit être facilement activable plus tard.

---

# Galerie

Créer une architecture permettant l'ajout futur :

Gallery

GalleryCard

GalleryModal

Sans les développer immédiatement.

---

# Avis

Prévoir :

ReviewCard

ReviewsGrid

Carousel éventuel

Les avis n'étant pas encore disponibles, afficher la section uniquement lorsqu'ils seront ajoutés.

---

# Loader

Créer un loader simple.

Aucune animation complexe.

---

# Empty State

Créer un composant générique.

Réutilisable.

---

# Breadcrumb

Prévoir un composant.

Même si toutes les pages ne l'utilisent pas immédiatement.

Important pour le SEO futur.

---

# Badge

Créer un composant :

Badge

Utilisable pour :

Devis gratuit

Intervention rapide

Professionnel

etc.

---

# Separator

Créer un composant :

Separator

Éviter les <hr> par défaut.

---

# Social Buttons

Créer un composant :

SocialLinks

Le style doit être identique partout.

Prévoir :

Facebook

Instagram

LinkedIn

Téléphone

Mail

Les liens peuvent être désactivés tant que les comptes n'existent pas.

---

# Floating Actions

Créer un composant indépendant.

Sur mobile :

Bouton Appeler

Bouton Contact

Sur desktop :

Version plus discrète.

Ne jamais gêner la navigation.

---

# Map

Créer une abstraction :

MapSection

Le composant doit permettre facilement d'ajouter Google Maps plus tard sans modifier les pages.

---

# Animation Wrapper

Créer un composant :

Reveal

Toutes les animations passent par ce composant.

Cela garantit une cohérence sur tout le site.

---

# SEO

Créer un composant ou une fonction permettant de générer facilement les métadonnées de chaque page.

Éviter la duplication.

---

# Objectif

À la fin du développement, toutes les pages doivent être construites comme un assemblage de composants réutilisables.

Aucun composant métier ne doit contenir de logique dupliquée.

Chaque nouveau besoin doit pouvoir être intégré en réutilisant les composants existants.

La bibliothèque de composants constitue la fondation du projet.