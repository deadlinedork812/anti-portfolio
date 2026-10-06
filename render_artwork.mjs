import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const ARTIFACT_DIR = "C:\\Users\\satvi_kam18u2\\.gemini\\antigravity-ide\\brain\\3a821f03-3be7-434e-a508-bb1f1b272979";
const scratchDir = path.join(ARTIFACT_DIR, 'scratch');
if (!fs.existsSync(scratchDir)) fs.mkdirSync(scratchDir, { recursive: true });

const bgPath = path.resolve('pristine_landscape_5120.png').replace(/\\/g, '/');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Experience Background Master 5120x2880</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=JetBrains+Mono:wght@500;600;700&display=swap" rel="stylesheet">
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    html, body {
      width: 5120px;
      height: 2880px;
      overflow: hidden;
      background: #f3f6fa;
      position: relative;
    }
    .base-artwork {
      position: absolute;
      inset: 0;
      width: 5120px;
      height: 2880px;
      object-fit: cover;
      z-index: 1;
    }

    /* ─── Bottom-Left Editorial Statement ─── */
    .bottom-left-statement-container {
      position: absolute;
      bottom: 125px;
      left: 820px;
      z-index: 5;
    }
    .statement-diffuse-backing {
      position: absolute;
      inset: -40px -70px;
      background: radial-gradient(ellipse at 40% 60%, rgba(243, 246, 250, 0.58) 0%, rgba(243, 246, 250, 0.22) 55%, transparent 75%);
      filter: blur(24px);
      z-index: -1;
      pointer-events: none;
    }
    .handwritten-hero-block {
      display: flex;
      flex-direction: column;
      font-family: 'Caveat', cursive;
      font-size: 90px;
      font-weight: 700;
      line-height: 1.14;
      color: #0f172a;
      transform: rotate(-1.5deg);
      user-select: none;
      text-shadow: 
        0 1px 3px rgba(255, 255, 255, 0.95), 
        0 2px 8px rgba(15, 23, 42, 0.35), 
        0 6px 24px rgba(15, 23, 42, 0.16);
    }
    .handwritten-hero-block .punchline {
      color: #1e1b4b;
    }
    .handwritten-hero-block .punchline .accent-product {
      color: #4338ca;
      font-weight: 700;
      text-shadow: 
        0 1px 3px rgba(255, 255, 255, 0.95), 
        0 2px 10px rgba(67, 56, 202, 0.4), 
        0 6px 20px rgba(15, 23, 42, 0.2);
    }

    /* ─── Bottom-Right Career Map Tag ─── */
    .bottom-right-tag-container {
      position: absolute;
      bottom: 135px;
      right: 720px;
      z-index: 5;
    }
    .career-map-pill {
      display: inline-flex;
      align-items: center;
      padding: 14px 44px;
      background: rgba(255, 255, 255, 0.72);
      backdrop-filter: blur(14px);
      border: 1.5px solid rgba(255, 255, 255, 0.9);
      border-radius: 9999px;
      box-shadow: 0 4px 20px rgba(15, 23, 42, 0.08);
      user-select: none;
    }
    .career-map-mono {
      font-family: 'JetBrains Mono', monospace;
      font-size: 32px;
      font-weight: 600;
      letter-spacing: 0.08em;
      color: #0f172a;
      white-space: nowrap;
    }
  </style>
</head>
<body>
  <img src="file:///${bgPath}" alt="" class="base-artwork" />

  <!-- 1. Bottom-Left Editorial Statement -->
  <div class="bottom-left-statement-container">
    <div class="statement-diffuse-backing"></div>
    <div class="handwritten-hero-block">
      <span>Different roles. Same curiosity.</span>
      <span class="punchline">From code to quality <span class="accent-product">to product.</span></span>
    </div>
  </div>

  <!-- 2. Bottom-Right Career Map Tag -->
  <div class="bottom-right-tag-container">
    <div class="career-map-pill">
      <span class="career-map-mono">CAREER MAP · 2023 — PRESENT</span>
    </div>
  </div>
</body>
</html>`;

const htmlFilePath = path.join(scratchDir, 'render_master.html');
fs.writeFileSync(htmlFilePath, htmlContent, 'utf8');

async function renderMaster() {
  console.log('Launching headless Edge for 5120x2880 render from pristine landscape...');
  const edge = spawn(EDGE_PATH, [
    '--headless=new',
    '--remote-debugging-port=9229',
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    '--window-size=5120,2880',
    'about:blank'
  ]);

  let wsUrl = null;
  for (let i = 0; i < 35; i++) {
    try {
      const res = await fetch('http://127.0.0.1:9229/json/version');
      const json = await res.json();
      wsUrl = json.webSocketDebuggerUrl;
      if (wsUrl) break;
    } catch {
      await new Promise(r => setTimeout(r, 200));
    }
  }

  const pagesRes = await fetch('http://127.0.0.1:9229/json/list');
  const pages = await pagesRes.json();
  const page = pages.find(p => p.type === 'page') || pages[0];
  const ws = new WebSocket(page.webSocketDebuggerUrl);

  let msgId = 1;
  const pending = new Map();
  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(msg.error);
      else resolve(msg.result);
    }
  };
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const id = msgId++;
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params }));
  });

  await new Promise(r => ws.onopen = r);
  await send('Page.enable');
  await send('Runtime.enable');
  await send('Emulation.setDeviceMetricsOverride', {
    width: 5120,
    height: 2880,
    deviceScaleFactor: 1,
    mobile: false
  });

  const fileUrl = 'file:///' + htmlFilePath.replace(/\\/g, '/');
  console.log('Navigating to:', fileUrl);
  await send('Page.navigate', { url: fileUrl });

  // Wait for fonts to be fully ready
  await new Promise(r => setTimeout(r, 3000));
  await send('Runtime.evaluate', {
    expression: 'document.fonts.ready',
    awaitPromise: true
  });
  await new Promise(r => setTimeout(r, 1000));

  console.log('Capturing 5120x2880 master PNG...');
  const ss = await send('Page.captureScreenshot', { format: 'png' });
  const masterPngPath = path.resolve('experience-background-master-5120.png');
  fs.writeFileSync(masterPngPath, Buffer.from(ss.data, 'base64'));
  console.log('Master saved to', masterPngPath);

  ws.close();
  edge.kill();

  const meta = await sharp(masterPngPath).metadata();
  console.log(`Rendered master: ${meta.width}x${meta.height}, size: ${(fs.statSync(masterPngPath).size / 1024 / 1024).toFixed(2)} MB`);
}

renderMaster().catch(err => {
  console.error(err);
  process.exit(1);
});
