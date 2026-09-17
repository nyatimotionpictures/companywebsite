import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import { preview } from 'vite';
import puppeteer from 'puppeteer';

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.resolve(ROOT_DIR, 'dist');

// 1. Data sources for dynamic routes
const archivesData = require('../src/1-Assets/data/archives.json');
const FilmJSON = require('../src/1-Assets/data/film_metadata.json');

// 2. Discover all routes to pre-render (excluding private/payment routes)
function getRoutes() {
  const routes = [
    '/',
    '/about',
    '/services',
    '/services/conquerordie',
    '/contact',
    '/donate',
    '/film',
    '/team',
    '/internetarchive',
    '/internetarchive/collections',
    '/comingsoon',
    '/policies/deletepolicy',
    '/policies/privacypolicy',
    '/policies/termsofservice'
  ];

  // Dynamic Film detail routes
  let filmsList = [];
  if (Array.isArray(FilmJSON)) {
    filmsList = FilmJSON;
  } else if (typeof FilmJSON === 'object' && FilmJSON !== null) {
    filmsList = Object.entries(FilmJSON).map(([key, val]) => {
      if (typeof val === 'object' && val !== null) {
        return { ...val, _generatedKey: key };
      }
      return { id: val };
    });
  }

  filmsList.forEach((film) => {
    let rawId = film._id || film.id || film.filmid || film.slug || film._generatedKey;
    if (typeof rawId === 'object' && rawId !== null) {
      rawId = rawId.$oid || rawId.toString();
    }
    if (rawId && typeof rawId === 'string') {
      routes.push(`/film/${encodeURIComponent(rawId)}`);
    }
  });

  // Dynamic Individual Archive Collections
  if (Array.isArray(archivesData)) {
    archivesData.forEach((item) => {
      if (item._id) {
        routes.push(`/internetarchive/collections/${encodeURIComponent(item._id)}`);
      }
    });
  }

  return Array.from(new Set(routes));
}

async function prerender() {
  if (!fs.existsSync(DIST_DIR)) {
    console.error('❌ dist/ directory not found. Please run vite build first.');
    process.exit(1);
  }

  console.log('🚀 Starting local preview server to snapshot routes...');
  const PORT = 4173;
  const previewServer = await preview({
    root: ROOT_DIR,
    preview: {
      port: PORT,
      open: false
    }
  });

  const baseUrl = `http://localhost:${PORT}`;
  console.log(`📡 Preview server ready at ${baseUrl}`);

  const routes = getRoutes();
  console.log(`📋 Pre-rendering ${routes.length} routes...`);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  // Set standard desktop viewport
  await page.setViewport({ width: 1280, height: 800 });

  let successCount = 0;
  for (const route of routes) {
    const pageUrl = `${baseUrl}${route}`;
    try {
      await page.goto(pageUrl, { waitUntil: 'networkidle0', timeout: 15000 });
      
      // Wait briefly for react-helmet-async to populate head tags
      await page.waitForFunction(() => document.title && document.title.length > 0, { timeout: 5000 }).catch(() => {});
      await new Promise((r) => setTimeout(r, 150));

      const html = await page.content();

      // Compute destination path
      const cleanRoute = route === '/' ? '' : route.replace(/^\//, '');
      const targetDir = path.join(DIST_DIR, cleanRoute);
      fs.mkdirSync(targetDir, { recursive: true });
      fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf-8');

      console.log(`  ✓ [pre-rendered] ${route}`);
      successCount++;
    } catch (err) {
      console.warn(`  ⚠️ Failed to pre-render ${route}:`, err.message);
    }
  }

  await browser.close();
  previewServer.httpServer.close();

  console.log(`\n🎉 Successfully pre-rendered ${successCount} / ${routes.length} pages into dist/`);
}

prerender().catch((err) => {
  console.error('❌ Prerendering encountered an error:', err);
  process.exit(1);
});
