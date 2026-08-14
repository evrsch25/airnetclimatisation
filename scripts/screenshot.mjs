import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const BASE = process.env.BASE_URL ?? "http://localhost:3000";
const OUT = ".screenshots";

const targets = [
  { path: "/", name: "accueil" },
  { path: "/prestations", name: "prestations" },
  { path: "/pourquoi-nous", name: "pourquoi-nous" },
  { path: "/zone-intervention", name: "zone-intervention" },
  { path: "/contact", name: "contact" },
  { path: "/nettoyage-climatisation/martigues", name: "ville-martigues" },
];

mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  reducedMotion: "no-preference",
});

const problems = [];
page.on("pageerror", (e) => problems.push(`PAGEERROR ${page.url()} :: ${e.message}`));
page.on("console", (m) => {
  if (m.type() === "error" || m.type() === "warning") {
    problems.push(`${m.type().toUpperCase()} ${page.url()} :: ${m.text().slice(0, 200)}`);
  }
});

for (const target of targets) {
  await page.goto(`${BASE}${target.path}`, { waitUntil: "networkidle" });
  await page.screenshot({ path: `${OUT}/${target.name}-top.png` });

  // Descente progressive : vérifie que les animations d'apparition se déclenchent
  // réellement au scroll, dans les mêmes conditions qu'un visiteur.
  const shots = await page.evaluate(async () => {
    const step = window.innerHeight * 0.85;
    const stops = [];
    for (let y = step; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 700));
      stops.push(y);
    }
    return stops.length;
  });
  for (let i = 0; i < Math.min(shots, 12); i++) {
    await page.evaluate((y) => window.scrollTo(0, y), (i + 1) * 900);
    await page.waitForTimeout(200);
    await page.screenshot({ path: `${OUT}/${target.name}-scroll-${i + 1}.png` });
  }

  // Capture pleine page : les animations sont neutralisées, sinon l'agrandissement
  // du viewport par Playwright fige une partie du contenu à opacity 0.
  await page.addStyleTag({
    content: "*,*::before,*::after{animation:none!important;transition:none!important;opacity:1!important;transform:none!important}",
  });
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${OUT}/${target.name}-full.png`, fullPage: true });
  console.log(`ok ${target.path}`);
}

await browser.close();

if (problems.length) {
  console.log("\n--- Problèmes console ---");
  console.log([...new Set(problems)].join("\n"));
}
