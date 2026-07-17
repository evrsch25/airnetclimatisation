# 02_TECH_STACK.md

# Stack technique

Le projet doit être développé avec des technologies modernes, stables et largement utilisées.

Le code doit être maintenable pendant plusieurs années.

La priorité est :

- stabilité
- lisibilité
- SEO
- performances
- évolutivité

Le projet n'est pas une démonstration technique.

Chaque dépendance doit avoir une vraie utilité.

---

# Framework

Utiliser :

Next.js 15

avec

App Router

Ne jamais utiliser le Pages Router.

---

# Langage

TypeScript obligatoire.

Mode strict.

Aucun "any" sauf justification exceptionnelle.

Privilégier :

type

plutôt que

interface

lorsque cela est pertinent.

Créer des types partagés dans un dossier dédié.

---

# Styling

Utiliser exclusivement

Tailwind CSS v4

Ne jamais créer des centaines de classes personnalisées.

Créer des composants réutilisables.

Utiliser des variables de thème.

Ne jamais utiliser Bootstrap.

Ne jamais utiliser Material UI.

Ne jamais utiliser CSS Modules sauf cas exceptionnel.

---

# Composants UI

Utiliser :

shadcn/ui

uniquement comme base.

Les composants devront être adaptés au design du projet.

Ne jamais laisser le style par défaut.

Tous les composants devront respecter le Design System.

---

# Icônes

Utiliser

Lucide React

Style :

Outline

Simple

Fin

Moderne

Ne jamais mélanger plusieurs bibliothèques.

---

# Animations

Utiliser :

Motion (anciennement Framer Motion)

Uniquement pour :

Fade

Slide

Reveal

Hover

Transitions

Ne jamais créer :

Parallax

Animations complexes

Rotations

Effets 3D

Animations longues

Les animations doivent durer entre :

200ms

et

500ms

maximum.

---

# Formulaire

Utiliser :

React Hook Form

+

Zod

Validation côté client.

Validation côté serveur.

Messages d'erreur clairs.

---

# Envoi d'email

Utiliser :

Resend

Architecture prévue dès le départ.

Les informations sensibles doivent être stockées dans :

.env.local

Aucune clé API dans le code.

---

# Images

Utiliser

next/image

obligatoirement.

Toutes les images doivent être :

optimisées

compressées

lazy load

responsive

Prévoir un dossier :

public/images

avec une arborescence claire.

---

# Polices

Utiliser

next/font

Ne jamais charger une police via CDN.

Police principale :

Inter

ou

Geist

Choisir la plus adaptée au design.

---

# Architecture générale

Utiliser une architecture modulaire.

Le projet doit être organisé de manière logique.

Exemple :

app/

components/

components/layout/

components/ui/

components/home/

components/contact/

components/prestations/

components/shared/

lib/

hooks/

types/

constants/

utils/

styles/

emails/

public/

public/images/

public/icons/

public/logos/

---

# Architecture des composants

Créer des composants :

petits

réutilisables

isolés

lisibles

Ne jamais créer un composant de plusieurs centaines de lignes.

Découper dès qu'une logique devient importante.

---

# Server Components

Utiliser les Server Components par défaut.

Passer en Client Component uniquement lorsqu'il y a une vraie raison :

hooks

state

animations

événements

formulaire

etc.

---

# Gestion des données

Le site est principalement statique.

Éviter les appels API inutiles.

Préférer les données locales lorsque c'est possible.

Prévoir cependant une architecture évolutive.

---

# Variables

Créer un dossier :

constants

Y placer :

coordonnées

réseaux sociaux

zone d'intervention

CTA

numéro de téléphone

adresse

email

etc.

Ces informations ne doivent jamais être écrites plusieurs fois.

---

# Helpers

Créer un dossier :

utils

ou

lib

Pour :

formatters

helpers

fonctions communes

validation

SEO

etc.

---

# SEO

Créer un module dédié.

Les métadonnées doivent être générées proprement.

Chaque page possède :

Title

Description

Keywords si nécessaire

Canonical

Open Graph

Twitter Card

Schema.org

---

# Routing

Utiliser des URLs propres.

/

/prestations

/pourquoi-nous

/zone-intervention

/contact

/mentions-legales

/cgu

Prévoir une architecture permettant d'ajouter facilement :

/martigues

/istres

/fos-sur-mer

etc.

pour le SEO local.

---

# Responsive

Le responsive est intégré dès le développement.

Ne jamais corriger le responsive après coup.

Chaque composant doit fonctionner :

Desktop

Laptop

Tablette

Mobile

---

# Accessibilité

Tous les composants doivent être accessibles.

Navigation clavier.

Focus visible.

ARIA.

Labels.

Contrastes.

---

# Performance

Objectif :

Lighthouse > 95

sur toutes les catégories.

Optimiser :

Images

Fonts

Hydratation

JavaScript

Imports

Animations

---

# Sécurité

Le formulaire doit être sécurisé.

Validation serveur.

Protection anti-spam.

Limiter les risques d'injection.

Ne jamais faire confiance aux données envoyées par le navigateur.

---

# Variables d'environnement

Créer :

.env.local

Prévoir :

RESEND_API_KEY

CONTACT_EMAIL

NEXT_PUBLIC_SITE_URL

GOOGLE_MAPS_API_KEY (si nécessaire plus tard)

Aucune donnée sensible dans Git.

---

# Git

Créer un .gitignore propre.

Commits fréquents.

Messages explicites.

Branches simples.

main

feature/...

fix/...

---

# Qualité du code

Utiliser :

ESLint

Prettier

TypeScript strict

Code lisible.

Fonctions courtes.

Noms explicites.

Factorisation maximale.

---

# Avant chaque développement

Toujours vérifier :

Existe-t-il déjà un composant similaire ?

Existe-t-il déjà une fonction similaire ?

Cette logique peut-elle être réutilisée ?

Peut-on simplifier ?

Le code est-il compréhensible par un développeur qui découvre le projet ?

Si la réponse est non :

Refactoriser avant de continuer.

---

# Objectif final

Le projet doit pouvoir être repris dans plusieurs années par un autre développeur sans difficulté.

L'architecture doit être suffisamment propre pour accueillir facilement :

- nouvelles pages
- nouvelles prestations
- galerie photo
- avis clients
- blog
- SEO local avancé
- espace administrateur

sans devoir refaire le projet.