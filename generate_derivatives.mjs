import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const masterPath = path.resolve('experience-background-master-5120.png');
const assetsDir = path.resolve('src/assets');
const expSubDir = path.join(assetsDir, 'experience');
if (!fs.existsSync(expSubDir)) fs.mkdirSync(expSubDir, { recursive: true });

const targets = [
  { name: '1440', width: 1440, height: 810 },
  { name: '1920', width: 1920, height: 1080 },
  { name: '2560', width: 2560, height: 1440 },
  { name: '3840', width: 3840, height: 2160 }
];

async function generateDerivatives() {
  console.log('Generating responsive derivatives from 5120x2880 master...');
  const masterPipeline = sharp(masterPath);

  for (const t of targets) {
    console.log(`Processing ${t.name} (${t.width}x${t.height})...`);
    const resized = masterPipeline.clone().resize(t.width, t.height, {
      kernel: sharp.kernel.lanczos3
    });

    // 1. AVIF derivative (primary) with 4:4:4 chroma subsampling for crisp text edges
    const avifBuffer = await resized.clone().avif({
      quality: 85,
      effort: 6,
      chromaSubsampling: '4:4:4'
    }).toBuffer();

    // 2. WebP derivative (fallback)
    const webpBuffer = await resized.clone().webp({
      quality: 90,
      effort: 6,
      smartSubsample: true
    }).toBuffer();

    // Save in src/assets
    const avifDst = path.join(assetsDir, `experience-background-${t.name}.avif`);
    const webpDst = path.join(assetsDir, `experience-background-${t.name}.webp`);
    fs.writeFileSync(avifDst, avifBuffer);
    fs.writeFileSync(webpDst, webpBuffer);
    console.log(`  Saved ${avifDst} (${(avifBuffer.length / 1024).toFixed(1)} KB)`);
    console.log(`  Saved ${webpDst} (${(webpBuffer.length / 1024).toFixed(1)} KB)`);

    // Also mirror into src/assets/experience/
    const avifExpDst = path.join(expSubDir, `experience-background-${t.name}.avif`);
    const webpExpDst = path.join(expSubDir, `experience-background-${t.name}.webp`);
    fs.writeFileSync(avifExpDst, avifBuffer);
    fs.writeFileSync(webpExpDst, webpBuffer);

    // If 1920, also update experience-background.jpg as fallback
    if (t.name === '1920') {
      const jpgBuffer = await resized.clone().jpeg({ quality: 88, mozjpeg: true }).toBuffer();
      fs.writeFileSync(path.join(assetsDir, 'experience-background.jpg'), jpgBuffer);
      console.log(`  Updated experience-background.jpg fallback (${(jpgBuffer.length / 1024).toFixed(1)} KB)`);
    }
  }

  console.log('All responsive derivatives generated successfully!');
}

generateDerivatives().catch(err => {
  console.error(err);
  process.exit(1);
});
