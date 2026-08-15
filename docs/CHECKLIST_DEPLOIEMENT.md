# Checklist déploiement — Air Net Climatisation

Guide pas à pas depuis un PC Windows (PowerShell).  
VPS Hostinger : `72.61.106.201` · Domaine / e-mails : OVH.

---

## 0. Se connecter en SSH (Windows)

### Commande exacte (PowerShell)

```powershell
ssh root@72.61.106.201
```

**Attention :** pas d'espace entre `root` et `@`.  
Incorrect : `ssh root @72.61.106.201` → erreur PowerShell.  
Correct : `ssh root@72.61.106.201`.

### Première connexion

1. Ouvrir **PowerShell** (Windows + X → Terminal / PowerShell).
2. Lancer la commande ci-dessus.
3. Si demandé « Are you sure you want to continue connecting ? » → taper `yes` puis Entrée.
4. Saisir le **mot de passe root** Hostinger (rien ne s'affiche à la frappe, c'est normal) puis Entrée.

Vous êtes connecté quand l'invite ressemble à :

```text
root@srvXXXXXX:~#
```

Pour quitter plus tard : `exit`.

---

## 1. Diagnostiquer le VPS (une fois connecté)

Coller ces commandes une par une, et **garder / coller la sortie** si vous avez besoin d'aide :

```bash
nginx -v
node -v
npm -v
pm2 -v
certbot --version
ls /etc/nginx/sites-enabled/ 2>/dev/null
ls /etc/nginx/conf.d/ 2>/dev/null
ss -tlnp | grep -E ':80|:443|:3000|:3001'
```

Objectif : savoir si Nginx, Node, PM2 et Certbot sont déjà là, et sur quels ports tourne l'autre site.

---

## 2. Installer ce qui manque (si besoin)

Toujours en SSH, uniquement si l'étape 1 a signalé une absence :

### Node.js 22 (si `node -v` échoue ou < 20)

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
apt-get install -y nodejs
node -v
npm -v
```

### PM2 (si `pm2 -v` échoue)

```bash
npm install -g pm2
pm2 -v
```

### Certbot (si `certbot --version` échoue)

```bash
apt-get update
apt-get install -y certbot python3-certbot-nginx
```

---

## 3. Déposer le code du site

```bash
mkdir -p /var/www
cd /var/www
git clone https://github.com/evrsch25/airnetclimatisation.git
cd airnetclimatisation
```

Si le dossier existe déjà (re-déploiement) :

```bash
cd /var/www/airnetclimatisation
git pull origin main
```

---

## 4. Variables d'environnement

```bash
nano /var/www/airnetclimatisation/.env.local
```

Coller (adapter la clé Resend plus tard) :

```bash
NEXT_PUBLIC_SITE_URL=https://www.airnetclimatisation.fr
CONTACT_EMAIL=contact@airnetclimatisation.fr
RESEND_API_KEY=
RESEND_FROM="Air Net Climatisation <contact@airnetclimatisation.fr>"
```

Dans nano : `Ctrl+O` Entrée pour sauver, `Ctrl+X` pour quitter.

Tant que `RESEND_API_KEY` est vide, le site s'affiche ; le formulaire invite à téléphoner.

---

## 5. Installer et builder

```bash
cd /var/www/airnetclimatisation
npm ci
npm run build
```

Le build peut prendre 1 à 3 minutes. Il doit se terminer sans erreur rouge.

---

## 6. Lancer avec PM2 (port 3001)

Le port **3001** évite de bousculer un éventuel autre service sur 3000.

```bash
cd /var/www/airnetclimatisation
pm2 delete airnet 2>/dev/null
pm2 start npm --name airnet -- start -- -p 3001
pm2 save
pm2 startup
```

Exécuter **la commande** que `pm2 startup` affiche (souvent un long `sudo env PATH=…`).

Vérifier :

```bash
pm2 status
curl -I http://127.0.0.1:3001
```

`airnet` doit être `online`, et curl doit répondre `200` ou `308`.

---

## 7. Nginx — vhost Air Net (sans toucher l'autre site)

### Créer le fichier

```bash
nano /etc/nginx/sites-available/airnetclimatisation.fr
```

Contenu :

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

Sauver (`Ctrl+O`, Entrée, `Ctrl+X`).

### Activer

Si le dossier `sites-enabled` existe (Debian/Ubuntu classique) :

```bash
ln -sf /etc/nginx/sites-available/airnetclimatisation.fr /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx
```

Si Hostinger n'a que `conf.d/` (pas de `sites-enabled`) :

```bash
cp /etc/nginx/sites-available/airnetclimatisation.fr /etc/nginx/conf.d/airnetclimatisation.fr.conf
nginx -t
systemctl reload nginx
```

L'autre site continue via **son** fichier Nginx : on n'y touche pas.

---

## 8. DNS OVH → VPS (navigateur, pas le terminal)

1. Aller sur [https://www.ovh.com/manager/](https://www.ovh.com/manager/)
2. **Noms de domaine** → `airnetclimatisation.fr` → **Zone DNS**
3. Modifier le `A` de `@` (racine) :
   - Ancienne valeur : `51.91.236.255` (mutualisé)
   - Nouvelle valeur : `72.61.106.201`
4. Pour `www` :
   - soit un `A` → `72.61.106.201`
   - soit un `CNAME` → `airnetclimatisation.fr.` (point final chez OVH)
5. **Ne modifier aucun enregistrement `MX`** (messagerie).

Contrôle depuis PowerShell (sur votre PC) :

```powershell
nslookup airnetclimatisation.fr 8.8.8.8
```

Doit afficher `72.61.106.201`. Propagation : quelques minutes à quelques heures.

---

## 9. HTTPS (Certbot) — après que le DNS pointe

Toujours en SSH sur le VPS :

```bash
certbot --nginx -d airnetclimatisation.fr -d www.airnetclimatisation.fr
```

Suivre les questions (e-mail, accepter les conditions).  
Tester dans le navigateur : `https://www.airnetclimatisation.fr`

---

## 10. Resend (formulaire de contact)

Suivre `docs/RESEND.md` :

1. Compte Resend + vérification du domaine (enregistrements DNS chez OVH, sous-domaine `send`, **sans toucher aux MX**).
2. Créer la clé API `re_…`.
3. Sur le VPS :

```bash
nano /var/www/airnetclimatisation/.env.local
# coller RESEND_API_KEY=re_...
pm2 restart airnet
```

4. Tester le formulaire sur `/contact`.

---

## 11. Mises à jour plus tard

```bash
ssh root@72.61.106.201
cd /var/www/airnetclimatisation
git pull origin main
npm ci
npm run build
pm2 restart airnet
```

---

## Récap des outils

| Où | Quoi |
|---|---|
| PowerShell (PC) | `ssh root@72.61.106.201` puis `nslookup` |
| SSH (VPS) | Node, npm, PM2, Nginx, Certbot, git |
| Navigateur OVH | Zone DNS (enregistrements A / CNAME / Resend) |
| Navigateur Resend | Compte, domaine, clé API |
| Navigateur | Tester le site en HTTPS |

---

## Checklist finale

- [ ] SSH OK avec `ssh root@72.61.106.201`
- [ ] `pm2 status` → `airnet` online
- [ ] DNS `@` et `www` → `72.61.106.201`
- [ ] HTTPS OK sur `https://www.airnetclimatisation.fr`
- [ ] L'autre site du VPS fonctionne toujours
- [ ] Un mail test arrive sur `contact@airnetclimatisation.fr`
- [ ] Formulaire OK (après Resend)
