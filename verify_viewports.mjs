import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const ARTIFACT_DIR = "C:\\Users\\satvi_kam18u2\\.gemini\\antigravity-ide\\brain\\3a821f03-3be7-434e-a508-bb1f1b272979";
const scratchDir = path.join(ARTIFACT_DIR, 'scratch');
const USER_DATA_DIR = path.join(scratchDir, 'edge_profile_verify');
if (!fs.existsSync(scratchDir)) fs.mkdirSync(scratchDir, { recursive: true });

async function captureViewport(width, height, name) {
  console.log(`Capturing ${name} (${width}x${height})...`);
  const edge = spawn(EDGE_PATH, [
    '--headless=new',
    '--remote-debugging-port=9229',
    `--user-data-dir=${USER_DATA_DIR}`,
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    `--window-size=${width},${height}`,
    'http://localhost:5173/'
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
    width,
    height,
    deviceScaleFactor: 1,
    mobile: false
  });

  await send('Page.navigate', { url: 'http://localhost:5173/' });
  await new Promise(r => setTimeout(r, 2000));

  async function evaluate(exp) {
    const res = await send('Runtime.evaluate', { expression: exp, returnByValue: true, awaitPromise: true });
    return res.result?.value;
  }

  // Scroll smoothly/instantly to #experience
  await evaluate('document.getElementById("experience").scrollIntoView({ behavior: "instant" })');
  await new Promise(r => setTimeout(r, 1200));

  const ss = await send('Page.captureScreenshot', { format: 'png' });
  const outPath = path.resolve(`${name}.png`);
  fs.writeFileSync(outPath, Buffer.from(ss.data, 'base64'));
  console.log(`Saved ${outPath}`);

  ws.close();
  edge.kill();
}

async function run() {
  await captureViewport(1440, 900, 'verify_experience_1440x900');
  await captureViewport(1920, 1080, 'verify_experience_1920x1080');
  await captureViewport(2560, 1440, 'verify_experience_2560x1440');
  await captureViewport(3840, 2160, 'verify_experience_3840x2160');
  console.log('All viewports captured successfully!');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
