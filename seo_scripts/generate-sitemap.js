import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import { SitemapStream, streamToPromise } from 'sitemap';
import formatXml from 'xml-formatter';

// Recreate __dirname and require for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

// Load Data Sources
const archivesData = require('../src/1-Assets/data/archives.json');
const archivesCategories = require('../src/1-Assets/data/archivesCategories.json');
const FilmJSON = require('../src/1-Assets/data/film_metadata.json');

const SITE_URL = 'https://www.nyatimotionpictures.com';

async function generateSitemap() {
  const stream = new SitemapStream({ hostname: SITE_URL });

  // A. STATIC ROUTES
  const staticRoutes = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/services', changefreq: 'monthly', priority: 0.8 },
    { url: '/services/conquerordie', changefreq: 'monthly', priority: 0.7 },
    { url: '/contact', changefreq: 'monthly', priority: 0.7 },
    { url: '/donate', changefreq: 'monthly', priority: 0.6 },
    { url: '/film', changefreq: 'weekly', priority: 0.8 },
    { url: '/team', changefreq: 'monthly', priority: 0.6 },
    { url: '/internetarchive', changefreq: 'weekly', priority: 0.8 },
    { url: '/internetarchive/collections', changefreq: 'weekly', priority: 0.8 },
    { url: '/comingsoon', changefreq: 'monthly', priority: 0.5 },
    
    // Legal & Policy Pages
    { url: '/policies/deletepolicy', changefreq: 'yearly', priority: 0.3 },
    { url: '/policies/privacypolicy', changefreq: 'yearly', priority: 0.3 },
    { url: '/policies/termsofservice', changefreq: 'yearly', priority: 0.3 },
  ];

  staticRoutes.forEach((route) => stream.write(route));

  // B. DYNAMIC ARCHIVE CATEGORIES
  if (Array.isArray(archivesCategories)) {
    archivesCategories.forEach((category) => {
      if (category.title) {
        stream.write({
          url: `/internetarchive/collections?category=${encodeURIComponent(category.title)}`,
          changefreq: 'weekly',
          priority: 0.7,
        });
      }
    });
  }

  // C. DYNAMIC INDIVIDUAL COLLECTIONS
  if (Array.isArray(archivesData)) {
    archivesData.forEach((item) => {
      if (item._id) {
        stream.write({
          url: `/internetarchive/collections/${item._id}`,
          changefreq: 'monthly',
          priority: 0.7,
          lastmod: item.date ? new Date(item.date).toISOString() : undefined,
        });
      }
    });
  }

  // D. DYNAMIC FILM DETAIL PAGES
 let filmsList = [];
  
  if (Array.isArray(FilmJSON)) {
    filmsList = FilmJSON;
  } else if (typeof FilmJSON === 'object' && FilmJSON !== null) {
    // If keys are film IDs (e.g., { "conquerordie": { title: "..." } })
    filmsList = Object.entries(FilmJSON).map(([key, val]) => {
      if (typeof val === 'object' && val !== null) {
        return { ...val, _generatedKey: key };
      }
      return { id: val };
    });
  }

  filmsList.forEach((film) => {
    let rawId = film._id || film.id || film.filmid || film.slug || film._generatedKey;
    
    // Extract nested Mongo $oid if present
    if (typeof rawId === 'object' && rawId !== null) {
      rawId = rawId.$oid || rawId.toString();
    }

    if (rawId && typeof rawId === 'string') {
      stream.write({
        url: `/film/${encodeURIComponent(rawId)}`,
        changefreq: 'monthly',
        priority: 0.8,
      });
    }
  });

  stream.end();

  // WRITE TO PUBLIC DIRECTORY
  
  // Obtain raw XML
  const sitemapBuffer = await streamToPromise(stream);
  const rawXml = sitemapBuffer.toString();

  // 2. Format / Pretty-Print the XML
  const formattedXml = formatXml(rawXml, {
    indentation: '  ',
    collapseContent: true,
    lineSeparator: '\n'
  });

  // 3. Write formatted XML to public directory
  const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outputPath, formattedXml);

  console.log('✅ sitemap.xml generated & pretty-printed at public/sitemap.xml');
}

generateSitemap().catch((err) => {
  console.error('❌ Error generating sitemap:', err);
});