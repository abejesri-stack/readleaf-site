import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dist = path.join(__dirname, '..', 'dist');
const index = path.join(dist, 'index.html');

// 1. Copy 404 fallback for undefined routes
fs.copyFileSync(index, path.join(dist, '404.html'));

// 2. Output dedicated HTML files for defined routes
// This ensures GitHub Pages statically serves a 200 OK without redirecting,
// which is extremely important for Google Search Console indexing.
fs.copyFileSync(index, path.join(dist, 'brand-facts.html'));

const guidesDir = path.join(dist, 'guides');
if (!fs.existsSync(guidesDir)) {
  fs.mkdirSync(guidesDir, { recursive: true });
}
fs.copyFileSync(index, path.join(guidesDir, 'best-minimalist-reading-apps-2026.html'));

console.log('Post-build: Mapped routes to static HTML files for SEO 200 OK responses.');
