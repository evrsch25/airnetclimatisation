/**
 * Prépare les photos fournies par le client pour le site.
 *
 * Les trois visuels avant/après sont livrés sous forme de montages contenant
 * déjà les deux états et une étiquette « AVANT » / « APRÈS ». On les redécoupe
 * en deux images distinctes pour les afficher dans le composant maison, ce qui
 * évite d'avoir deux étiquettes concurrentes à l'écran. Le recadrage retire
 * donc la zone occupée par l'étiquette d'origine.
 *
 * Usage : node scripts/process-client-photos.mjs
 */
import { mkdir } from "node:fs/promises";
import sharp from "sharp";

const SRC = "C:/Users/erwan/Downloads";
const CHANGEMENT = `${SRC}/changement`;

await mkdir("public/images/gallery", { recursive: true });
await mkdir("public/images/brand", { recursive: true });

async function write(input, dest, { extract, width = 1400 } = {}) {
  let pipeline = sharp(input).rotate();
  if (extract) pipeline = pipeline.extract(extract);

  const info = await pipeline
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 84 })
    .toFile(dest);

  console.log(
    `${dest.padEnd(48)} ${info.width}x${info.height}  ratio ${(info.width / info.height).toFixed(2)}  ${Math.round(info.size / 1024)} Ko`,
  );
}

/* -- Bandeau slogan : le technicien en intervention ------------------------ */
/* Source 1131x807 : capture Instagram. On rogne la bande de droite pour      */
/* supprimer l'icône de l'application, puis on cadre en 3:2.                  */
await write(`${SRC}/IMG_6472.jpeg`, "public/images/brand/technicien-nettoyage.webp", {
  extract: { left: 0, top: 20, width: 1005, height: 670 },
  width: 1400,
});

/* -- Échangeur d'unité intérieure (IMG_6586, 1170x784, montage empilé) ----- */
/* Étiquettes en haut à gauche : on rogne la bande de gauche.                 */
await write(`${CHANGEMENT}/IMG_6586.jpeg`, "public/images/gallery/echangeur-avant.webp", {
  extract: { left: 187, top: 0, width: 983, height: 388 },
});
await write(`${CHANGEMENT}/IMG_6586.jpeg`, "public/images/gallery/echangeur-apres.webp", {
  extract: { left: 187, top: 392, width: 983, height: 388 },
});

/* -- Grille et filtres (IMG_6641, 1170x863, montage côte à côte) ----------- */
/* Pastilles en haut : on rogne la bande supérieure.                          */
await write(`${CHANGEMENT}/IMG_6641.jpeg`, "public/images/gallery/filtres-avant.webp", {
  extract: { left: 0, top: 100, width: 585, height: 763 },
  width: 900,
});
await write(`${CHANGEMENT}/IMG_6641.jpeg`, "public/images/gallery/filtres-apres.webp", {
  extract: { left: 585, top: 100, width: 585, height: 763 },
  width: 900,
});

/* -- Volets de soufflage (IMG_6664, 1163x860, montage empilé) -------------- */
await write(`${CHANGEMENT}/IMG_6664.jpeg`, "public/images/gallery/volets-avant.webp", {
  extract: { left: 256, top: 0, width: 907, height: 380 },
});
await write(`${CHANGEMENT}/IMG_6664.jpeg`, "public/images/gallery/volets-apres.webp", {
  extract: { left: 256, top: 400, width: 907, height: 380 },
});
