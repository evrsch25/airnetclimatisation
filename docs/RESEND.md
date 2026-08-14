# Configurer l'envoi des e-mails (Resend)

Le formulaire de contact du site envoie deux e-mails à chaque demande :

1. une **notification** vers `contact@airnetclimatisation.fr` (la demande du visiteur) ;
2. un **accusé de réception** automatique vers le visiteur.

Tant que Resend n'est pas configuré, le formulaire répond « Service d'envoi non
configuré. Veuillez nous appeler directement. » et **aucun e-mail ne part**.

Ce document liste, dans l'ordre, tout ce qu'il y a à faire.

---

## Ce qu'il faut avoir sous la main

- Un accès au compte e-mail `contact@airnetclimatisation.fr`.
- Un accès à la **zone DNS** du domaine `airnetclimatisation.fr`, chez le
  registrar où le domaine a été acheté (OVH, Ionos, Gandi, Namecheap…).
  C'est l'écran qui permet d'ajouter des enregistrements `TXT`, `MX`, `CNAME`.
  Chez OVH par exemple : *Espace client → Noms de domaine → airnetclimatisation.fr → Zone DNS*.
- Un accès au projet Vercel (pour y coller les variables d'environnement).

> Si l'accès à la zone DNS n'est pas disponible, l'étape 2 est bloquante.
> Voir la section « Solution de repli » en fin de document.

---

## Étape 1 — Créer le compte Resend

1. Aller sur [resend.com](https://resend.com) et cliquer sur **Sign up**.
2. Créer le compte avec l'adresse `contact@airnetclimatisation.fr`.
3. Valider l'e-mail de confirmation reçu.

Le plan gratuit permet **3 000 e-mails par mois et 100 par jour**, ce qui est
très largement suffisant pour un formulaire de contact. Aucune carte bancaire
n'est demandée.

---

## Étape 2 — Vérifier le domaine

Cette étape autorise Resend à envoyer des e-mails **au nom de**
`airnetclimatisation.fr`. Sans elle, les messages partiraient d'une adresse
générique et finiraient très souvent en spam.

1. Dans Resend, aller dans **Domains** → **Add Domain**.
2. Saisir `airnetclimatisation.fr`.
3. Choisir la région **EU (Ireland)** — les données restent en Europe, ce qui
   est cohérent avec le RGPD.
4. Resend affiche alors une liste de **3 à 4 enregistrements DNS** à créer.
   Ils ressemblent à ceci (les valeurs réelles sont propres au compte, il faut
   copier celles affichées à l'écran) :

   | Type    | Nom / Host             | Valeur                                  |
   | ------- | ---------------------- | --------------------------------------- |
   | `MX`    | `send`                 | `feedback-smtp.eu-west-1.amazonses.com` (priorité 10) |
   | `TXT`   | `send`                 | `v=spf1 include:amazonses.com ~all`     |
   | `TXT`   | `resend._domainkey`    | `p=MIGfMA0GCSq…` (longue clé DKIM)      |
   | `TXT`   | `_dmarc`               | `v=DMARC1; p=none;`                     |

5. Recopier **à l'identique** chaque enregistrement dans la zone DNS du domaine.
   Points d'attention :
   - Ne pas ajouter le domaine à la fin du nom : saisir `send`, pas
     `send.airnetclimatisation.fr` (la plupart des interfaces le complètent).
   - La clé DKIM est très longue : la copier d'un bloc, sans retour à la ligne
     ni espace ajouté.
   - Si un enregistrement `SPF` (`v=spf1 …`) existe déjà sur le domaine, **ne
     pas en créer un second** : il faut fusionner les deux en ajoutant
     `include:amazonses.com` dans celui qui existe.
6. Revenir dans Resend et cliquer sur **Verify DNS Records**.

La propagation DNS prend de quelques minutes à quelques heures (jusqu'à 24 h
dans les cas les plus lents). Le domaine passe en **Verified** quand tout est bon.

---

## Étape 3 — Créer la clé d'API

1. Dans Resend, aller dans **API Keys** → **Create API Key**.
2. Nom : `airnetclimatisation-site`.
3. Permission : **Sending access** (suffisant, plus sûr que *Full access*).
4. Domaine : `airnetclimatisation.fr`.
5. Copier la clé affichée (elle commence par `re_`).

> La clé n'est affichée **qu'une seule fois**. La conserver dans un
> gestionnaire de mots de passe. En cas de perte, il suffit d'en créer une
> nouvelle et de supprimer l'ancienne.

**Ne jamais** mettre cette clé dans un e-mail, un message, ni dans le code du
site : elle permettrait à un tiers d'envoyer des e-mails au nom du domaine.

---

## Étape 4 — Renseigner les variables d'environnement

Trois variables pilotent l'envoi.

| Variable         | Rôle                                       | Valeur                                                    |
| ---------------- | ------------------------------------------ | --------------------------------------------------------- |
| `RESEND_API_KEY` | Clé créée à l'étape 3                      | `re_…`                                                     |
| `CONTACT_EMAIL`  | Boîte qui reçoit les demandes              | `contact@airnetclimatisation.fr`                           |
| `RESEND_FROM`    | Expéditeur affiché                          | `Air Net Climatisation <contact@airnetclimatisation.fr>`   |

### En local (pour tester sur son ordinateur)

Dans le fichier `.env.local` à la racine du projet :

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESEND_API_KEY=re_votre_cle_ici
CONTACT_EMAIL=contact@airnetclimatisation.fr
RESEND_FROM="Air Net Climatisation <contact@airnetclimatisation.fr>"
```

`.env.local` est ignoré par Git : il ne part jamais sur GitHub.

### Sur Vercel (pour le site en ligne)

*Projet → Settings → Environment Variables*. Ajouter les trois variables et
cocher les trois environnements : **Production**, **Preview**, **Development**.

Puis **redéployer** : les variables ne sont lues qu'au démarrage, un déploiement
existant ne les prend pas en compte rétroactivement.

---

## Étape 5 — Tester

1. Ouvrir la page `/contact` du site.
2. Envoyer une demande avec une **vraie adresse e-mail** que vous consultez.
3. Vérifier que :
   - la notification arrive bien dans `contact@airnetclimatisation.fr` ;
   - l'accusé de réception arrive bien dans la boîte du visiteur ;
   - répondre à la notification renvoie bien vers l'adresse du visiteur
     (le champ `Répondre à` est automatiquement positionné) ;
   - le message n'est pas classé en spam.
4. Dans Resend, l'onglet **Logs** liste chaque envoi avec son statut
   (`delivered`, `bounced`, `complained`). C'est l'endroit à consulter en cas de
   doute.

---

## Solution de repli si le domaine n'est pas encore vérifiable

Si l'accès DNS n'est pas disponible immédiatement, le site fonctionne quand même :
laisser `RESEND_FROM` **vide**. Le code bascule alors sur l'adresse de test
`onboarding@resend.dev`.

Limite importante : sans domaine vérifié, Resend n'autorise l'envoi **que vers
l'adresse du compte Resend**. L'accusé de réception au visiteur ne partira donc
pas. C'est utilisable pour une démonstration, pas pour la mise en production.

---

## Points de vigilance

- **Quota.** 100 e-mails/jour sur le plan gratuit. Chaque demande de contact en
  consomme 2 (notification + accusé). Une alerte est visible dans le tableau de
  bord Resend si le quota approche.
- **Spam.** Si les messages arrivent en indésirables, vérifier que les trois
  enregistrements DNS sont bien tous validés, en particulier le DKIM.
- **Changement d'adresse.** Si l'adresse de réception change un jour, il suffit
  de modifier `CONTACT_EMAIL` sur Vercel et de redéployer. Aucun code à toucher.
- **Rotation de la clé.** En cas de doute sur une fuite : créer une nouvelle clé
  dans Resend, mettre à jour `RESEND_API_KEY` sur Vercel, redéployer, puis
  supprimer l'ancienne clé.

---

## Où se trouve le code concerné

| Fichier                       | Rôle                                                    |
| ----------------------------- | ------------------------------------------------------- |
| `app/api/contact/route.ts`    | Reçoit le formulaire, valide, envoie les deux e-mails    |
| `emails/templates.ts`         | Contenu HTML de la notification et de l'accusé           |
| `lib/validations/contact.ts`  | Règles de validation des champs                          |
| `.env.example`                | Modèle des variables à renseigner                        |
