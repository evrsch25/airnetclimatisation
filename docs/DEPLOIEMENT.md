# Mise en ligne — VPS Hostinger

Le site tourne sur le **VPS Hostinger** (`72.61.106.201`), à côté d'un autre
site déjà hébergé. Le domaine et la messagerie restent chez **OVH**.

Vercel n'est plus utilisé pour la production.

---

## Architecture cible

```
Visiteur
   │
   ▼
OVH DNS  ──A──►  72.61.106.201 (VPS Hostinger)
                     │
                     ▼
                   Nginx
              ┌──────┴──────┐
              │             │
     autre-site.fr    airnetclimatisation.fr
     (inchangé)             │
                            ▼
                     Next.js (PM2)
                     port local 3001
```

Chaque domaine a son **bloc Nginx**. L'autre site n'est pas touché tant qu'on
n'édite que le fichier de config d'`airnetclimatisation.fr`.

---

## Ce qui reste chez OVH

| Élément | Action |
|---|---|
| Serveurs de noms (`dns200` / `ns200.anycast.me`) | Ne pas toucher |
| `MX` (messagerie `contact@…`) | **Ne pas toucher** |
| SPF racine (`include:mx.ovh.com`) | Ne pas toucher |
| `A` sur `@` (aujourd'hui le mutualisé) | Remplacer par `72.61.106.201` |
| `A` / `CNAME` sur `www` | Pointer aussi vers le VPS |

---

## Prérequis sur le VPS

À vérifier une fois connecté en SSH (`ssh root@72.61.106.201`) :

```bash
# Stack déjà en place ?
nginx -v
node -v          # besoin de Node 20+
pm2 -v           # ou on l'installe
certbot --version

# Sites déjà configurés (ne pas les modifier)
ls /etc/nginx/sites-enabled/
# ou chez Hostinger parfois :
ls /etc/nginx/conf.d/
```

Si Node est absent ou trop vieux :

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
apt-get install -y nodejs
npm install -g pm2
```

---

## Étape 1 — Déposer le code sur le VPS

```bash
mkdir -p /var/www
cd /var/www
git clone https://github.com/evrsch25/airnetclimatisation.git
cd airnetclimatisation
```

Créer le fichier d'environnement (ne jamais le committer) :

```bash
nano /var/www/airnetclimatisation/.env.local
```

Contenu :

```bash
NEXT_PUBLIC_SITE_URL=https://www.airnetclimatisation.fr
CONTACT_EMAIL=contact@airnetclimatisation.fr
RESEND_API_KEY=
RESEND_FROM="Air Net Climatisation <contact@airnetclimatisation.fr>"
```

Laisser `RESEND_API_KEY` vide tant que Resend n'est pas configuré
(voir `docs/RESEND.md`) : le site s'affiche, seul le formulaire invite à appeler.

Puis :

```bash
cd /var/www/airnetclimatisation
npm ci
npm run build
```

---

## Étape 2 — Lancer l'app avec PM2 (port 3001)

Le port **3001** évite le conflit avec un éventuel autre service déjà sur 3000.

```bash
cd /var/www/airnetclimatisation
pm2 start npm --name airnet -- start -- -p 3001
pm2 save
pm2 startup
# Exécuter ensuite la commande que PM2 affiche (systemctl enable…)
```

Vérifier :

```bash
pm2 status
curl -I http://127.0.0.1:3001
```

---

## Étape 3 — Nginx pour airnetclimatisation.fr

Créer `/etc/nginx/sites-available/airnetclimatisation.fr` :

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name airnetclimatisation.fr www.airnetclimatisation.fr;

    location / {
        proxy_pass http://127.0.0.1:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Activer (chemins classiques Debian/Ubuntu ; adapter si Hostinger utilise `conf.d`) :

```bash
ln -s /etc/nginx/sites-available/airnetclimatisation.fr /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx
```

HTTPS :

```bash
certbot --nginx -d airnetclimatisation.fr -d www.airnetclimatisation.fr
```

> Certbot ne réussira que **après** que le DNS pointe déjà vers `72.61.106.201`
> (étape 4). On peut donc déployer le site d'abord, brancher le DNS, puis
> lancer Certbot.

---

## Étape 4 — DNS OVH → VPS

*Espace client OVH → Noms de domaine → airnetclimatisation.fr → Zone DNS*

1. Modifier le `A` de `@` : `72.61.106.201` (à la place de `51.91.236.255`).
2. Pour `www` :
   - soit un `A` vers `72.61.106.201`,
   - soit un `CNAME` vers `airnetclimatisation.fr.` (avec le point final chez OVH).
3. **Ne toucher à aucun `MX`.**

Propagation : quelques minutes à quelques heures. Contrôle :

```bash
nslookup airnetclimatisation.fr 8.8.8.8
# doit afficher 72.61.106.201
```

Puis Certbot (étape 3) si pas encore fait.

---

## Mises à jour ultérieures

```bash
cd /var/www/airnetclimatisation
git pull origin main
npm ci
npm run build
pm2 restart airnet
```

---

## Checklist avant d'annoncer le site au client

- [ ] `https://www.airnetclimatisation.fr` et `https://airnetclimatisation.fr` répondent
- [ ] L'autre site déjà sur le VPS fonctionne toujours
- [ ] Un e-mail test arrive bien sur `contact@airnetclimatisation.fr` (messagerie OVH intacte)
- [ ] Formulaire de contact OK (après configuration Resend)
- [ ] `pm2 status` → `airnet` en `online`
- [ ] Sitemap : `https://www.airnetclimatisation.fr/sitemap.xml`

---

## Sécurité

- Ne pas coller le mot de passe root dans un chat / un ticket.
- Préférer une **clé SSH** (Hostinger → VPS → SSH keys).
- Firewall : ports 22, 80, 443 ouverts ; le port 3001 **uniquement en local** (pas exposé).
