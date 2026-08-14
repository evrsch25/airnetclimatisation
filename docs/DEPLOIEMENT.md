# Mise en ligne du site

## Pourquoi pas l'hébergement OVH en FTP

Le site est une application **Next.js**, qui a besoin d'un processus Node.js en
fonctionnement permanent — notamment pour la route `/api/contact` qui envoie les
e-mails du formulaire.

L'hébergement mutualisé OVH (`ftp.cluster129.hosting.ovh.net`) exécute du PHP,
pas du Node.js. Déposer les fichiers par FTP ne produirait pas un site
fonctionnel. Ce n'est pas une limite du projet, c'est la nature de cette offre
d'hébergement, très bien adaptée à un WordPress mais pas à ce type d'application.

**Ce qui reste chez OVH :** le nom de domaine, la zone DNS, et la messagerie
`contact@airnetclimatisation.fr`. Rien n'est résilié ni déplacé.
**Ce qui change :** uniquement l'adresse vers laquelle le domaine renvoie pour
afficher les pages web.

---

## État actuel du domaine

Relevé le 14/08/2026 :

| Enregistrement | Valeur actuelle                          | Action                |
| -------------- | ---------------------------------------- | --------------------- |
| Serveurs de noms | `dns200.anycast.me`, `ns200.anycast.me` | Ne pas toucher        |
| `MX`           | `mx0` à `mx3.mail.ovh.net`               | **Ne pas toucher**    |
| `TXT` (SPF)    | `v=spf1 include:mx.ovh.com ~all`         | Ne pas toucher        |
| `A` sur `@`    | `51.91.236.255` (mutualisé OVH)          | À remplacer           |
| `A` sur `www`  | `51.91.236.255`                          | À supprimer, remplacé par un `CNAME` |
| `TXT` `_dmarc` | absent                                   | À ajouter (étape Resend) |

> On **conserve les serveurs de noms OVH**. On ne bascule pas sur ceux de Vercel :
> cela obligerait à recréer tous les enregistrements existants, à commencer par
> les `MX`, avec un risque de coupure de la messagerie.

---

## Étape 1 — Déployer sur Vercel

1. Aller sur [vercel.com](https://vercel.com) et se connecter **avec le compte GitHub**
   qui héberge le dépôt (`evrsch25`).
2. **Add New → Project**, puis importer `evrsch25/airnetclimatisation`.
3. Vercel détecte Next.js tout seul. Ne rien modifier dans *Build & Development
   Settings*.
4. Avant de valider, déplier **Environment Variables** et saisir :

   | Nom                    | Valeur                                                   |
   | ---------------------- | -------------------------------------------------------- |
   | `NEXT_PUBLIC_SITE_URL` | `https://airnetclimatisation.vercel.app`                  |
   | `CONTACT_EMAIL`        | `contact@airnetclimatisation.fr`                          |
   | `RESEND_API_KEY`       | la clé `re_…` (voir `docs/RESEND.md`)                     |
   | `RESEND_FROM`          | `Air Net Climatisation <contact@airnetclimatisation.fr>`  |

   Si Resend n'est pas encore configuré, laisser `RESEND_API_KEY` vide : le site
   fonctionnera, seul le formulaire affichera un message invitant à téléphoner.

5. **Deploy**. Au bout d'une à deux minutes, le site est accessible sur une URL
   en `.vercel.app` : **c'est celle-ci qu'on envoie au client pour validation.**

À partir de là, chaque `git push` sur `main` redéploie automatiquement la
production, et chaque branche obtient sa propre URL de prévisualisation.

---

## Étape 2 — Brancher le domaine (après validation du client)

### Côté Vercel

1. *Projet → Settings → Domains → Add*.
2. Saisir `airnetclimatisation.fr`. Vercel proposera d'ajouter aussi
   `www.airnetclimatisation.fr` : accepter.
3. Vercel affiche les valeurs à créer. **Utiliser celles affichées à l'écran**,
   elles peuvent différer de celles ci-dessous.

### Côté OVH

*Espace client → Noms de domaine → airnetclimatisation.fr → Zone DNS*

1. **Modifier** l'enregistrement `A` sur `@` :
   remplacer `51.91.236.255` par `76.76.21.21`.
2. **Supprimer** l'enregistrement `A` sur `www`, puis créer à la place un
   `CNAME` sur `www` pointant vers la valeur donnée par Vercel
   (de la forme `xxxxxxxx.vercel-dns-0xx.com`).
   OVH refuse un `CNAME` tant qu'un `A` existe sur le même nom : la suppression
   doit précéder la création.
3. **Ne toucher à aucune autre ligne**, en particulier les `MX` et le `TXT` SPF.

La propagation prend de quelques minutes à quelques heures. Vercel génère
automatiquement le certificat HTTPS une fois le domaine résolu.

### Côté code

Une fois le domaine actif, mettre à jour sur Vercel :

```
NEXT_PUBLIC_SITE_URL=https://www.airnetclimatisation.fr
```

puis **redéployer**. Cette variable détermine les URL canoniques, le sitemap et
les images de partage : tant qu'elle pointe ailleurs, Google indexera de
mauvaises adresses.

---

## Étape 3 — Après la mise en ligne

- Vérifier que `https://www.airnetclimatisation.fr` et
  `https://airnetclimatisation.fr` répondent tous les deux en HTTPS.
- Envoyer un e-mail de test à `contact@airnetclimatisation.fr` depuis une boîte
  externe, pour confirmer que la messagerie n'a pas été affectée.
- Tester le formulaire de contact de bout en bout.
- Déclarer le site dans [Google Search Console](https://search.google.com/search-console)
  et y soumettre `https://www.airnetclimatisation.fr/sitemap.xml`.
- Vérifier l'aperçu de partage sur
  [opengraph.xyz](https://www.opengraph.xyz/).

---

## Et l'hébergement OVH déjà payé ?

Il continue de porter la **messagerie**, ce qui n'est pas rien. Si le pack
inclut aussi un espace web désormais inutilisé, cela vaut le coup de vérifier
au renouvellement s'il existe une offre moins chère limitée au domaine et aux
e-mails. À voir avec le client, ce n'est pas urgent.
