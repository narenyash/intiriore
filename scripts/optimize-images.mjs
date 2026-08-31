/**
 * One-shot image pipeline for AMBE.
 *
 * Reads the source interior renders (large PNGs sitting in the user's Downloads
 * folder) and emits web-ready assets into public/photos:
 *   - <slug>.avif  quality 55, width <= 2560   (primary)
 *   - <slug>.jpg   quality 72, width <= 1920   (fallback / social)
 *
 * Run with:  npm run optimize:images
 */
import { existsSync, mkdirSync } from "node:fs";
import { readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SOURCE_DIR = "C:/Users/me/Downloads";
const OUT_DIR = path.join(process.cwd(), "public", "photos");

/** source PNG basename -> web slug */
const MAP = {
  "Gemini_Generated_Image_jhbcvejhbcvejhbc.png": "exterior-dusk",
  "Gemini_Generated_Image_5uqwk75uqwk75uqw.png": "living-room",
  "Gemini_Generated_Image_ksfqhyksfqhyksfq.png": "dining-room",
  "Gemini_Generated_Image_qttbc7qttbc7qttb.png": "bedroom-oak",
  "Gemini_Generated_Image_8pqi588pqi588pqi.png": "bedroom-japandi",
  "Gemini_Generated_Image_bl4k5abl4k5abl4k.png": "bathroom",
  "BRB.png": "bathroom-before",
  "7441fe36-9898-470a-89c4-e7f4b777b101.png": "kitchen-oak-before",
  "Gemini_Generated_Image_546ffr546ffr546f.png": "kitchen-black",
  "Gemini_Generated_Image_yj0n6wyj0n6wyj0n.png": "kitchen-concrete",
  "Gemini_Generated_Image_nqc175nqc175nqc1.png": "kitchen-oak",
  "Gemini_Generated_Image_gbctpwgbctpwgbct.png": "home-office",
  "Gemini_Generated_Image_96gxur96gxur96gx.png": "entryway",
};

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

let ok = 0;
let missing = 0;

for (const [file, slug] of Object.entries(MAP)) {
  const src = path.join(SOURCE_DIR, file);
  if (!existsSync(src)) {
    console.warn(`  ! missing source: ${file}`);
    missing++;
    continue;
  }
  const input = await readFile(src);

  const avifPath = path.join(OUT_DIR, `${slug}.avif`);
  const jpgPath = path.join(OUT_DIR, `${slug}.jpg`);

  await sharp(input)
    .resize({ width: 2560, withoutEnlargement: true })
    .avif({ quality: 55, effort: 4 })
    .toFile(avifPath);

  await sharp(input)
    .resize({ width: 1920, withoutEnlargement: true })
    .jpeg({ quality: 72, mozjpeg: true })
    .toFile(jpgPath);

  const meta = await sharp(input).metadata();
  console.log(`  ok  ${slug.padEnd(16)}  ${meta.width}x${meta.height}  ->  avif + jpg`);
  ok++;
}

console.log(`\nDone. ${ok} processed, ${missing} missing. Output: ${OUT_DIR}`);
if (ok === 0) process.exitCode = 1;
