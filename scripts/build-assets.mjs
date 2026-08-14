/**
 * Prépare les assets images du site à partir des fichiers sources.
 * Usage : node scripts/build-assets.mjs
 */
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const SRC_LOGO = "public/logos/logo.png";

mkdirSync("public/images/hero", { recursive: true });
mkdirSync("public/images/og", { recursive: true });
mkdirSync("public/icons", { recursive: true });

/** Compose une version horizontale du logo : pictogramme à gauche, texte à droite */
async function crop(region, height) {
  const extracted = await sharp(SRC_LOGO).extract(region).png().toBuffer();
  const trimmed = await sharp(extracted).trim({ threshold: 12 }).png().toBuffer();
  return sharp(trimmed).resize({ height }).png().toBuffer();
}

async function buildHorizontalLogo() {
  const icon = await crop({ left: 170, top: 90, width: 690, height: 520 }, 200);
  const wordmark = await crop({ left: 90, top: 595, width: 850, height: 290 }, 150);

  const iconMeta = await sharp(icon).metadata();
  const markMeta = await sharp(wordmark).metadata();

  const gap = 28;
  const height = 220;
  const width = iconMeta.width + gap + markMeta.width;

  await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    },
  })
    .composite([
      { input: icon, left: 0, top: Math.round((height - iconMeta.height) / 2) },
      {
        input: wordmark,
        left: iconMeta.width + gap,
        top: Math.round((height - markMeta.height) / 2),
      },
    ])
    .png({ compressionLevel: 9 })
    .toFile("public/logos/logo-horizontal.png");

  console.log(`logo-horizontal.png ${width}x${height}`);
}

/** Emblème seul, détouré en cercle : lisible sur les fonds sombres */
async function buildEmblem() {
  const size = 320;
  const extracted = await sharp(SRC_LOGO)
    .extract({ left: 170, top: 90, width: 690, height: 520 })
    .png()
    .toBuffer();
  const trimmed = await sharp(extracted).trim({ threshold: 12 }).png().toBuffer();
  const icon = await sharp(trimmed)
    .resize({ width: size, height: size, fit: "inside" })
    .png()
    .toBuffer();
  const { width = size, height = size } = await sharp(icon).metadata();

  const square = await sharp({
    create: { width: size, height: size, channels: 4, background: "#ffffff" },
  })
    .composite([
      {
        input: icon,
        left: Math.round((size - width) / 2),
        top: Math.round((size - height) / 2),
      },
    ])
    .png()
    .toBuffer();

  const circle = Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="#fff"/></svg>`,
  );

  await sharp(square)
    .composite([{ input: circle, blend: "dest-in" }])
    .png({ compressionLevel: 9 })
    .toFile("public/logos/logo-emblem.png");

  console.log(`logo-emblem.png ${size}x${size}`);
}

/**
 * Favicon et icône iOS. Next.js sert automatiquement app/icon.png et
 * app/apple-icon.png ; l'icône iOS est aplatie sur blanc car iOS ne gère pas
 * la transparence et afficherait un fond noir.
 */
async function buildFavicons() {
  const emblem = "public/logos/logo-emblem.png";

  await sharp(emblem).resize(192, 192).png({ compressionLevel: 9 }).toFile("app/icon.png");

  await sharp(emblem)
    .resize(160, 160)
    .extend({ top: 10, bottom: 10, left: 10, right: 10, background: "#ffffff" })
    .flatten({ background: "#ffffff" })
    .png({ compressionLevel: 9 })
    .toFile("app/apple-icon.png");

  await sharp(emblem)
    .resize(512, 512)
    .flatten({ background: "#ffffff" })
    .png({ compressionLevel: 9 })
    .toFile("public/icons/icon-512.png");

  await sharp(emblem)
    .resize(192, 192)
    .flatten({ background: "#ffffff" })
    .png({ compressionLevel: 9 })
    .toFile("public/icons/icon-192.png");

  console.log("favicons: app/icon.png, app/apple-icon.png, public/icons/*");
}

/** Image de partage réseaux sociaux, au format imposé 1200x630 */
async function buildOgImage() {
  const W = 1200;
  const H = 630;

  const logo = await sharp("public/logos/logo-horizontal.png")
    .resize({ width: 560 })
    .png()
    .toBuffer();
  const { height: logoH = 0 } = await sharp(logo).metadata();

  const text = Buffer.from(`
    <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${W}" height="${H}" fill="#ffffff"/>
      <rect x="0" y="0" width="${W}" height="10" fill="#0084ff"/>
      <text x="80" y="400" font-family="Arial, Helvetica, sans-serif" font-size="46" font-weight="bold" fill="#1a1a2e">Nettoyage &amp; désinfection</text>
      <text x="80" y="458" font-family="Arial, Helvetica, sans-serif" font-size="46" font-weight="bold" fill="#0084ff">de climatisation</text>
      <text x="80" y="522" font-family="Arial, Helvetica, sans-serif" font-size="26" fill="#6b7280">Bouches-du-Rhône · Autour de l'étang de Berre</text>
      <text x="80" y="566" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="bold" fill="#002d5b">Devis gratuit · 06 35 51 03 58</text>
    </svg>`);

  await sharp(text)
    .composite([{ input: logo, left: 80, top: Math.round(180 - logoH / 2) }])
    .jpeg({ quality: 88 })
    .toFile("public/images/og/default.jpg");

  console.log(`og/default.jpg ${W}x${H}`);
}

/** Convertit une photo source en WebP optimisé pour un hero */
async function buildHero(source, target, width = 1600) {
  const info = await sharp(source)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(target);
  console.log(`${target} ${info.width}x${info.height} ${Math.round(info.size / 1024)} Ko`);
}

await buildHorizontalLogo();
await buildEmblem();
await buildFavicons();
await buildOgImage();

const assets = process.argv.slice(2);
for (const pair of assets) {
  const [source, target] = pair.split("::");
  await buildHero(source, target);
}
