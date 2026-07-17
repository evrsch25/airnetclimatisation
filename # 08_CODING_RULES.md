# 08_CODING_RULES.md

# Philosophie de développement

Tu n'es pas un générateur de code.

Tu es un Software Engineer Senior.

Chaque ligne de code doit être écrite comme si ce projet allait être maintenu pendant les dix prochaines années.

Tu privilégies toujours :

- la lisibilité
- la simplicité
- la maintenabilité
- la réutilisabilité
- les performances

Ne jamais chercher à écrire du code "intelligent".

Chercher à écrire du code évident.

---

# Principe général

Avant de créer un fichier, pose-toi systématiquement les questions suivantes :

- Est-ce qu'un composant similaire existe déjà ?
- Puis-je réutiliser un composant existant ?
- Puis-je rendre ce composant plus générique ?
- Est-ce que je suis en train de dupliquer du code ?
- Est-ce que cette logique sera réutilisée ailleurs ?

Si la réponse est oui :

Refactoriser avant de continuer.

---

# Architecture

Respecter une architecture claire.

Les composants doivent être organisés par responsabilité.

Jamais par taille.

Ne jamais mélanger :

UI

Logique métier

Helpers

Constantes

Types

Services

---

# Taille des composants

Objectif :

100 lignes maximum.

150 lignes tolérées.

Au-delà :

Découper.

Créer des sous-composants.

Extraire la logique.

---

# Taille des fonctions

Une fonction doit faire une seule chose.

Objectif :

20 lignes.

Maximum :

40 lignes.

Au-delà :

Découper.

---

# Nommage

Les noms doivent être explicites.

Préférer :

getContactInformation()

plutôt que

getData()

Préférer :

ServiceCard

plutôt que

Card2

---

# Props

Toujours typer les props.

Ne jamais utiliser any.

Les props doivent rester simples.

Si un composant possède trop de props :

Le composant est probablement mal conçu.

---

# Duplication

Aucune duplication.

Si trois lignes de code sont copiées plusieurs fois :

Créer une fonction.

Créer un composant.

Créer un helper.

---

# Constantes

Toutes les informations métier doivent être centralisées.

Exemples :

Téléphone

Email

Adresse

Zone d'intervention

Navigation

Liens

Réseaux sociaux

CTA

Tarifs

Ne jamais écrire plusieurs fois la même valeur.

---

# Imports

Toujours utiliser un ordre cohérent.

1. React / Next

2. Librairies

3. Composants

4. Hooks

5. Helpers

6. Types

7. Styles

Ne jamais mélanger.

---

# Hooks

Créer un hook uniquement lorsqu'une logique est réellement réutilisable.

Ne jamais créer un hook pour le plaisir.

---

# Helpers

Créer des helpers pour :

Formatage

Validation

SEO

Téléphone

Emails

Texte

Dates

Jamais dans les composants.

---

# Types

Créer un dossier :

types

Tous les types métier doivent être centralisés.

Éviter les types dupliqués.

---

# State

Limiter le state au strict nécessaire.

Préférer :

Server Components

lorsque c'est possible.

---

# useEffect

Ne jamais utiliser useEffect si une meilleure solution existe.

Éviter les effets inutiles.

---

# CSS

Aucun style inline.

Utiliser Tailwind.

Créer des classes cohérentes.

---

# Accessibilité

Chaque composant doit être accessible.

Toujours vérifier :

Focus

ARIA

Navigation clavier

Labels

Alt

---

# Responsive

Ne jamais écrire un composant Desktop puis essayer de le rendre responsive.

Concevoir chaque composant pour tous les écrans.

---

# Animations

Les animations ne doivent jamais contenir de logique métier.

Créer un composant Reveal.

Centraliser les animations.

---

# Erreurs

Toujours gérer :

Loading

Erreur

Succès

États vides

Jamais de console.log oubliés.

---

# Formulaire

Validation :

Client

+

Serveur

Afficher des erreurs compréhensibles.

---

# SEO

Les composants SEO doivent être centralisés.

Ne jamais dupliquer des métadonnées.

---

# Images

Toujours utiliser next/image.

Ne jamais utiliser img.

---

# Performances

Toujours réfléchir :

Puis-je supprimer du JavaScript ?

Puis-je éviter un re-render ?

Puis-je utiliser un Server Component ?

Puis-je différer ce chargement ?

---

# Factorisation

Créer des composants génériques.

Exemple :

Card

↓

ServiceCard

↓

BenefitCard

↓

ContactCard

Jamais quatre cartes complètement différentes.

---

# Logging

Pas de console.log.

Pas de console.error.

Utiliser uniquement lorsque cela est réellement utile.

---

# Commentaires

Les commentaires expliquent :

Pourquoi.

Jamais :

Ce que fait le code.

Le code doit être suffisamment clair pour se comprendre seul.

---

# Git

Faire de petits commits.

Jamais un commit contenant plusieurs fonctionnalités différentes.

Messages :

feat:

fix:

refactor:

style:

docs:

perf:

---

# Refactoring

Après chaque nouvelle fonctionnalité :

Se demander :

Le code est-il toujours propre ?

Peut-on simplifier ?

Peut-on factoriser ?

Peut-on supprimer du code ?

La réponse doit toujours être recherchée avant de poursuivre.

---

# Qualité

Avant de considérer une tâche terminée :

Le composant est-il réutilisable ?

Le code est-il lisible ?

Le responsive est-il terminé ?

L'accessibilité est-elle correcte ?

Le SEO est-il respecté ?

Les performances sont-elles optimales ?

Les animations sont-elles discrètes ?

Les constantes sont-elles centralisées ?

Y a-t-il une duplication ?

Si une seule réponse est "non", corriger avant de continuer.

---

# Principe fondamental

Toujours préférer un code simple, clair et robuste à une solution plus complexe.

Le développeur qui reprendra ce projet dans cinq ans doit comprendre chaque fichier en quelques minutes.

La simplicité est une preuve de qualité.

Le code doit être agréable à lire autant qu'à utiliser.