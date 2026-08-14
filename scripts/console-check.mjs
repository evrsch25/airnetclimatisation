/** Affiche en entier les erreurs console d'une page, pour diagnostiquer l'hydratation. */
import { chromium } from "playwright";

const url = process.argv[2] ?? "http://localhost:3001/";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

page.on("console", (m) => {
  if (m.type() === "error") console.log(`\n=== ${m.type()} ===\n${m.text()}`);
});
page.on("pageerror", (e) => console.log(`\n=== pageerror ===\n${e.stack}`));

await page.goto(url, { waitUntil: "networkidle" });
await page.waitForTimeout(2500);
await browser.close();
