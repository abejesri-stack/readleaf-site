import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dist = path.join(__dirname, '..', 'dist');
const index = path.join(dist, 'index.html');

const htmlContent = fs.readFileSync(index, 'utf-8');

// 1. Copy 404 fallback for undefined routes
fs.writeFileSync(path.join(dist, '404.html'), htmlContent);

// 2. Output dedicated HTML files for defined routes with pre-rendered SEO content
// This fixes the "Crawled - currently not indexed" issue by giving Googlebot 
// immediate static text without waiting for React's JS to render.
const brandFactsHtml = htmlContent.replace(
  '<div id="root"></div>',
  '<div id="root"><h1>Brand Facts - leaf</h1><p>A phone-first minimalist e-reader for iOS providing a TikTok-style vertical scrolling ebook app experience. Uses the LeafEngine for prose-aware page breaks, includes three reading modes (Glide, Leaf, Stream), optional leaf Pro sync, and no ads or behavioural tracking.</p></div>'
);
fs.writeFileSync(path.join(dist, 'brand-facts.html'), brandFactsHtml);

const guidesDir = path.join(dist, 'guides');
if (!fs.existsSync(guidesDir)) {
  fs.mkdirSync(guidesDir, { recursive: true });
}
const guideHtml = htmlContent.replace(
  '<div id="root"></div>',
  '<div id="root"><h1>The Best Minimalist Reading Apps for iPhone in 2026</h1><p>A neutral comparison of three approaches to mobile reading - leaf (a TikTok-style vertical scrolling ebook app), Kindle, and Apple Books. Evaluated on interaction physics, page-break intelligence, cognitive load, typography, data ethics, and sync.</p></div>'
);
fs.writeFileSync(path.join(guidesDir, 'best-minimalist-reading-apps-2026.html'), guideHtml);

console.log('Post-build: Injected static SEO content into HTML files for immediate Googlebot indexing.');
