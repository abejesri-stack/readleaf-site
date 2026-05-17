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
  '<div id="root"><h1>leaf: eBook Reader - The Mindful, Phone-First Book Reader for iOS</h1><p>leaf is a minimalist iOS e-reader with vertical-first reading, free classics, optional leaf Pro sync, and no ads.</p><nav><a href="/guides/">Reading Guides</a> <a href="/guides/best-ebook-reader-apps-iphone">Best eBook Reader Apps for iPhone</a> <a href="/guides/best-minimalist-reading-apps-2026">Minimalist Reading Apps Guide</a> <a href="/brand-facts">Brand Facts</a> <a href="/legal/">Privacy &amp; Terms</a></nav></div>'
);
fs.writeFileSync(index, homeHtml);

const guidesIndexStaticHtml = `<div id="root">
  <main>
    <h1>Reading Guides</h1>
    <p>Guides from leaf: eBook Reader about iPhone reading apps, minimalist e-readers, vertical scrolling, classic literature, privacy, and focused mobile reading.</p>
    <article>
      <h2><a href="/guides/best-ebook-reader-apps-iphone">Best eBook Reader Apps for iPhone in 2026</a></h2>
      <p>A practical comparison of leaf, Kindle, Apple Books, Kobo, Libby, and Google Play Books for different kinds of iPhone readers.</p>
    </article>
    <article>
      <h2><a href="/guides/best-minimalist-reading-apps-2026">The Best Minimalist Reading Apps for iPhone in 2026</a></h2>
      <p>A comparison of leaf, Kindle, and Apple Books for readers who care about focus, legibility, privacy, sync, and phone-first reading.</p>
    </article>
    <h2>Planned guide topics</h2>
    <ul>
      <li>Best apps for reading classics on iPhone</li>
      <li>How vertical scrolling changes phone reading</li>
      <li>Privacy-focused reading apps for iPhone</li>
    </ul>
    <nav>
      <a href="/">leaf homepage</a>
      <a href="/brand-facts">Brand Facts</a>
      <a href="/legal/">Privacy and Terms</a>
    </nav>
  </main>
</div>`;

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
      <a href="/guides/">Reading Guides</a>
      <a href="/brand-facts">Brand Facts</a>
      <a href="/legal/">Privacy and Terms</a>
    </nav>
  </article>
</div>`;

const bestEbookReaderAppsStaticHtml = `<div id="root">
  <article>
    <h1>Best eBook Reader Apps for iPhone in 2026</h1>
    <p>A practical comparison of the strongest iPhone reading apps, including leaf, Kindle, Apple Books, Kobo, Libby, and Google Play Books.</p>
    <h2>Quick verdict</h2>
    <p>There is no single best iPhone ebook reader for everyone. Choose leaf for calm reading, free classics, and your own files; Kindle for Amazon libraries; Apple Books for Apple-native purchases; Kobo for Kobo readers; Libby for public-library borrowing; and Google Play Books for Google account libraries.</p>
    <h2>What to compare</h2>
    <ul>
      <li>Catalogue access and where your books come from.</li>
      <li>File support for EPUB, PDF, Markdown, and personal documents.</li>
      <li>Reading experience, typography, themes, offline access, and interface noise.</li>
      <li>Notes, reading journals, highlights, and share cards.</li>
      <li>Sync across iPhone, iPad, Mac, e-readers, and web.</li>
      <li>Privacy posture, ads, analytics, and account requirements.</li>
    </ul>
    <h2>Best apps by reader type</h2>
    <p>Use leaf if you import your own books, read public-domain classics, keep reading journals, or want a calmer iPhone reading environment. Use Kindle if your library is mostly Amazon purchases. Use Apple Books if you prefer Apple's built-in bookstore and iCloud sync. Use Libby if your main goal is free borrowing through a participating library. Use Kobo if you prefer Kobo's store or e-reader ecosystem. Use Google Play Books if you keep books in a Google account across platforms.</p>
    <h2>App-by-app guide</h2>
    <ul>
      <li><a href="https://apps.apple.com/app/leaf-ebook-reader/id6758810936">leaf</a> - best for calm reading, free classics, and your own files. It supports imported EPUB/PDF/Markdown/.leaf files, Standard Ebooks and Project Gutenberg discovery, reading journals, highlights, notes, passage and completion share cards, themes, typography controls, and optional Pro sync.</li>
      <li><a href="https://apps.apple.com/us/app/amazon-kindle/id302584613?l=en&amp;platform=iphone">Kindle</a> - best for Amazon libraries and Kindle device owners. It is useful when your purchases, subscriptions, and reading devices already live in Amazon's ecosystem.</li>
      <li><a href="https://www.apple.com/apple-books/">Apple Books</a> - best for buying modern ebooks inside Apple's ecosystem. It is built in, polished, and syncs naturally across Apple devices.</li>
      <li><a href="https://www.kobo.com/us/en/p/apps">Kobo Books</a> - best for Kobo store readers and Kobo e-reader owners. It is a strong non-Amazon commercial ebook ecosystem.</li>
      <li><a href="https://apps.apple.com/us/app/libby-the-library-app/id1076402606">Libby</a> - best for borrowing ebooks and audiobooks from libraries. Availability depends on your local library system.</li>
      <li><a href="https://apps.apple.com/us/app/google-play-books-audiobooks/id400989007?l=en">Google Play Books</a> - best for Google account libraries across platforms, including Google purchases and uploaded EPUB/PDF files.</li>
    </ul>
    <h2>Related pages</h2>
    <nav>
      <a href="/">leaf homepage</a>
      <a href="/guides/">Reading Guides</a>
      <a href="/guides/best-minimalist-reading-apps-2026">Minimalist Reading Apps Guide</a>
      <a href="/brand-facts">Brand Facts</a>
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
const guidesIndexHtml = setSeo(homeHtml, {
  title: 'Reading Guides - leaf: eBook Reader',
  description: 'Reading guides from leaf: eBook Reader about iPhone reading apps, minimalist e-readers, vertical scrolling, classic literature, privacy, and focused mobile reading.',
  canonical: 'https://readleaf.co/guides/',
}).replace(
  /<div id="root">[\s\S]*?<\/div>\s*<\/body>/,
  guidesIndexStaticHtml + '\n  </body>'
);
fs.writeFileSync(path.join(guidesDir, 'index.html'), guidesIndexHtml);

const bestEbookReaderAppsHtml = setSeo(homeHtml, {
  title: 'Best eBook Reader Apps for iPhone in 2026 | leaf',
  description: 'A practical comparison of the best ebook reader apps for iPhone in 2026, including leaf, Kindle, Apple Books, Kobo, Libby, and Google Play Books.',
  canonical: 'https://readleaf.co/guides/best-ebook-reader-apps-iphone',
}).replace(
  /<div id="root">[\s\S]*?<\/div>\s*<\/body>/,
  bestEbookReaderAppsStaticHtml + '\n  </body>'
);
fs.writeFileSync(path.join(guidesDir, 'best-ebook-reader-apps-iphone.html'), bestEbookReaderAppsHtml);

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
