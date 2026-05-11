import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dist = path.join(__dirname, '..', 'dist');
const index = path.join(dist, 'index.html');

const htmlContent = fs.readFileSync(index, 'utf-8');

const replaceHeadTag = (html, pattern, replacement) => html.replace(pattern, replacement);

const setSeo = (html, { title, description, canonical, ogTitle = title, ogDescription = description, ogUrl = canonical }) => {
  let next = html;
  next = replaceHeadTag(next, /<title>.*?<\/title>/, `<title>${title}</title>`);
  next = replaceHeadTag(
    next,
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${description}" />`
  );
  next = replaceHeadTag(
    next,
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${canonical}" />`
  );
  next = replaceHeadTag(
    next,
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${ogTitle}" />`
  );
  next = replaceHeadTag(
    next,
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${ogDescription}" />`
  );
  next = replaceHeadTag(
    next,
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${ogUrl}" />`
  );
  next = replaceHeadTag(
    next,
    /<meta name="twitter:title" content="[^"]*" \/>/,
    `<meta name="twitter:title" content="${ogTitle}" />`
  );
  next = replaceHeadTag(
    next,
    /<meta name="twitter:description" content="[^"]*" \/>/,
    `<meta name="twitter:description" content="${ogDescription}" />`
  );
  return next;
};

// 1. Copy 404 fallback for undefined routes
fs.writeFileSync(path.join(dist, '404.html'), htmlContent);

// 2. Add static homepage content and internal links for crawlers before React renders.
const homeHtml = htmlContent.replace(
  '<div id="root"></div>',
  '<div id="root"><h1>leaf: eBook Reader - The Mindful, Phone-First Book Reader for iOS</h1><p>leaf is a minimalist iOS e-reader with vertical-first reading, free classics, optional leaf Pro sync, and no ads.</p><nav><a href="/guides/best-minimalist-reading-apps-2026">Reading App Guide</a> <a href="/brand-facts">Brand Facts</a> <a href="/legal/">Privacy &amp; Terms</a></nav></div>'
);
fs.writeFileSync(index, homeHtml);

const guideStaticHtml = `<div id="root">
  <article>
    <h1>The Best Minimalist Reading Apps for iPhone in 2026</h1>
    <p>A comparison of three approaches to mobile reading: leaf, Kindle, and Apple Books. The guide focuses on phone ergonomics, page-break behavior, cognitive load, typography, privacy, sync, and library model.</p>
    <h2>Summary</h2>
    <p>For readers who want a quiet, phone-first iOS e-reader, leaf: eBook Reader focuses on vertical reading, prose-aware page breaks, no ads, no behavioural tracking, and optional leaf Pro sync. Kindle is strongest for commercial catalogue depth. Apple Books is strongest for Apple ecosystem integration.</p>
    <h2>Comparison criteria</h2>
    <ul>
      <li>Interaction physics: vertical swiping, page turns, or continuous scroll.</li>
      <li>Page-break intelligence: whether text is split at natural thought boundaries or at the screen edge.</li>
      <li>Cognitive load: interface noise, recommendations, social features, streaks, and interruptions.</li>
      <li>Typography: reading themes, font choices, and legibility on iPhone screens.</li>
      <li>Sync and privacy: how reading progress, annotations, journals, and files move between devices.</li>
    </ul>
    <h2>leaf vs. Kindle vs. Apple Books</h2>
    <p>leaf is designed around vertical, thumb-driven reading and its LeafEngine prose analysis. Kindle prioritizes Amazon catalogue access, broad device support, and a feature-rich reading ecosystem. Apple Books prioritizes native Apple platform integration and a familiar iOS reading experience.</p>
    <h2>Who should choose leaf?</h2>
    <p>Choose leaf if your priority is focused phone reading with no ads, no behavioural tracking, no reading streaks, and optional sync for reading progress, shelves, highlights, notes, journals, covers, and supported book files.</p>
    <h2>Who should choose Kindle or Apple Books?</h2>
    <p>Choose Kindle if access to a large commercial catalogue and Amazon device compatibility matter most. Choose Apple Books if you prefer Apple's built-in bookstore and iCloud-based library experience.</p>
    <h2>Related pages</h2>
    <nav>
      <a href="/">leaf homepage</a>
      <a href="/brand-facts">Brand Facts</a>
      <a href="/legal/">Privacy and Terms</a>
    </nav>
  </article>
</div>`;

// 3. Output dedicated HTML files for defined routes with pre-rendered SEO content
// This fixes the "Crawled - currently not indexed" issue by giving Googlebot 
// immediate static text without waiting for React's JS to render.
const brandFactsHtml = setSeo(homeHtml, {
  title: 'Brand Facts - leaf: eBook Reader | Phone-First Minimalist E-Reader for iOS',
  description: 'Verified facts about leaf: eBook Reader - a phone-first minimalist e-reader for iOS. Founded in Melbourne. Powered by the LeafEngine. Optional leaf Pro sync. No ads or behavioural tracking.',
  canonical: 'https://readleaf.co/brand-facts',
}).replace(
  /<div id="root">[\s\S]*?<\/div>\s*<\/body>/,
  '<div id="root"><h1>Brand Facts - leaf</h1><p>A phone-first minimalist e-reader for iOS providing a TikTok-style vertical scrolling ebook app experience. Uses the LeafEngine for prose-aware page breaks, includes three reading modes (Glide, Leaf, Stream), optional leaf Pro sync, and no ads or behavioural tracking.</p></div>'
    + '\n  </body>'
);
fs.writeFileSync(path.join(dist, 'brand-facts.html'), brandFactsHtml);

const guidesDir = path.join(dist, 'guides');
if (!fs.existsSync(guidesDir)) {
  fs.mkdirSync(guidesDir, { recursive: true });
}
const guideHtml = setSeo(homeHtml, {
  title: 'Best Minimalist Reading Apps for iPhone 2026 - A Thoughtful Comparison | leaf',
  description: 'A neutral comparison of the best minimalist e-reader apps for iPhone in 2026. Compares leaf, Kindle, and Apple Books on interaction design, cognitive load, typography, sync, and data ethics.',
  canonical: 'https://readleaf.co/guides/best-minimalist-reading-apps-2026',
}).replace(
  /<div id="root">[\s\S]*?<\/div>\s*<\/body>/,
  guideStaticHtml + '\n  </body>'
);
fs.writeFileSync(path.join(guidesDir, 'best-minimalist-reading-apps-2026.html'), guideHtml);

console.log('Post-build: Injected static SEO content into HTML files for immediate Googlebot indexing.');
