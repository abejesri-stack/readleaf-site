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
  '<div id="root"><h1>leaf: eBook Reader - The Mindful, Phone-First Book Reader for iOS</h1><p>leaf is a minimalist iOS e-reader with vertical-first reading, free classics, optional leaf Pro sync, and no ads.</p><nav><a href="/guides/">Reading Guides</a> <a href="/guides/best-ebook-reader-apps-iphone">Best eBook Reader Apps for iPhone</a> <a href="/guides/best-apps-for-reading-classics-iphone">Classics Reading Apps Guide</a> <a href="/guides/best-minimalist-reading-apps-2026">Minimalist Reading Apps Guide</a> <a href="/brand-facts">Brand Facts</a> <a href="/legal/">Privacy &amp; Terms</a></nav></div>'
);
fs.writeFileSync(index, homeHtml);

const guidesIndexStaticHtml = `<div id="root">
  <main>
    <h1>Reading Guides</h1>
    <p>Guides from leaf: eBook Reader about iPhone reading apps, minimalist e-readers, vertical scrolling, classic literature, privacy, and focused mobile reading.</p>
    <article>
      <h2><a href="/guides/best-apps-for-reading-classics-iphone">Best Apps for Reading Classics on iPhone in 2026</a></h2>
      <p>A balanced guide to reading classic literature on iPhone with leaf, Standard Ebooks, Project Gutenberg, Libby, Apple Books, Kindle, and Kobo.</p>
    </article>
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
      <a href="/guides/best-apps-for-reading-classics-iphone">Best Apps for Reading Classics on iPhone</a>
      <a href="/guides/best-minimalist-reading-apps-2026">Minimalist Reading Apps Guide</a>
      <a href="/brand-facts">Brand Facts</a>
    </nav>
  </article>
</div>`;

const bestClassicsAppsStaticHtml = `<div id="root">
  <article>
    <h1>Best Apps for Reading Classics on iPhone in 2026</h1>
    <p>A practical guide to the best iPhone apps and sources for reading classic literature, including leaf, Standard Ebooks, Project Gutenberg, Libby, Apple Books, Kindle, and Kobo Books.</p>
    <figure>
      <img src="/screenshots/screenshot-explore-new.png" alt="leaf Explore screen showing a collection of classic books" width="300" height="650" loading="eager" />
      <figcaption>leaf's Explore screen is one way to discover public-domain classics from inside a reading app.</figcaption>
    </figure>
    <h2>Classics on iPhone</h2>
    <p>A good classics setup starts with the source. The best experience usually combines a reliable public-domain source with a reading app that makes long books comfortable on a phone.</p>
    <p>That is why this guide separates sources such as Standard Ebooks and Project Gutenberg from apps such as leaf, Libby, Apple Books, Kindle, and Kobo.</p>
    <h2>Quick verdict</h2>
    <p>Choose leaf if you want a calm iPhone reading app for free classics, Standard Ebooks and Project Gutenberg discovery, and imported EPUB, PDF, Markdown, or .leaf files. Choose Standard Ebooks on the web for polished public-domain editions. Choose Project Gutenberg for the widest free public-domain catalogue. Choose Libby for library borrowing, Apple Books or Kindle for modern and annotated editions, and Kobo if your library already lives in Kobo.</p>
    <h2>Best starting points</h2>
    <ul>
      <li><a href="https://apps.apple.com/app/leaf-ebook-reader/id6758810936">leaf</a> - calm iPhone reading, imports, and free classics discovery.</li>
      <li><a href="https://standardebooks.org/">Standard Ebooks</a> - polished public-domain editions with clean EPUB files.</li>
      <li><a href="https://www.gutenberg.org/">Project Gutenberg</a> - the broadest free public-domain catalogue.</li>
      <li><a href="https://apps.apple.com/us/app/libby-the-library-app/id1076402606">Libby</a> - borrow classics and audiobooks through public libraries.</li>
    </ul>
    <h2>Comparison table</h2>
    <table>
      <thead>
        <tr>
          <th>App or source</th>
          <th>Best for</th>
          <th>Why it fits classics readers</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><a href="https://apps.apple.com/app/leaf-ebook-reader/id6758810936">leaf</a></td>
          <td>Calm reading, free classics, and your own files</td>
          <td>Combines Standard Ebooks and Project Gutenberg discovery with imported EPUB, PDF, Markdown, and .leaf files, plus journals, highlights, notes, share cards, themes, fonts, custom fonts with leaf Pro, optional sync, and iCloud Book Vault.</td>
        </tr>
        <tr>
          <td><a href="https://standardebooks.org/">Standard Ebooks</a></td>
          <td>Polished public-domain editions on the web</td>
          <td>Offers carefully prepared public-domain ebooks with cleaner formatting and metadata than many archive files.</td>
        </tr>
        <tr>
          <td><a href="https://www.gutenberg.org/">Project Gutenberg</a></td>
          <td>The largest free public-domain library</td>
          <td>Provides a very large catalogue of free public-domain texts in multiple formats.</td>
        </tr>
        <tr>
          <td><a href="https://apps.apple.com/us/app/libby-the-library-app/id1076402606">Libby</a></td>
          <td>Borrowing classics from a public library</td>
          <td>Works well when your library offers classic novels, audiobooks, translations, or annotated editions.</td>
        </tr>
        <tr>
          <td><a href="https://www.apple.com/apple-books/">Apple Books</a></td>
          <td>Buying modern or annotated editions in Apple's ecosystem</td>
          <td>Best when you want native Apple purchases, iCloud sync, and bookstore editions.</td>
        </tr>
        <tr>
          <td><a href="https://apps.apple.com/us/app/amazon-kindle/id302584613?l=en&amp;platform=iphone">Kindle</a></td>
          <td>Amazon purchases, Kindle devices, and annotated editions</td>
          <td>Strong for readers whose library, subscriptions, and devices already live in Amazon's ecosystem.</td>
        </tr>
        <tr>
          <td><a href="https://www.kobo.com/us/en/p/apps">Kobo Books</a></td>
          <td>Kobo readers and Kobo store users</td>
          <td>A useful choice for readers who buy from Kobo or switch between the Kobo app and Kobo e-readers.</td>
        </tr>
      </tbody>
    </table>
    <h2>App-by-app notes</h2>
    <p>leaf is the best fit if your classics workflow mixes free public-domain discovery, imported book files, and focused reading on an iPhone. It can find books from Standard Ebooks and Project Gutenberg, import EPUB, PDF, Markdown, and .leaf files, and keep reading journals, highlights, notes, and share cards alongside your books. It also includes reading themes and fonts, with custom fonts available through leaf Pro, plus optional Pro sync and iCloud Book Vault.</p>
    <p>Standard Ebooks is best when you want a polished edition of a public-domain classic and are comfortable downloading or reading from the web. Project Gutenberg is best when breadth matters more than polish, especially for obscure works and older editions. Libby is best when a participating public library gives you access to classics, audiobooks, translations, and annotated editions without buying them.</p>
    <p>Apple Books, Kindle, and Kobo Books are better fits when you want a commercial bookstore, modern editions, publisher annotations, or device ecosystems. Apple Books is strongest for Apple-native purchases, Kindle is strongest for Amazon libraries and Kindle devices, and Kobo is strongest for Kobo store users and Kobo e-reader owners.</p>
    <h2>FAQ</h2>
    <h3>What is the best app for reading classics on iPhone?</h3>
    <p>For a calm reading app that works well with free classics and personal files, leaf is the best fit. For bookstore purchases, Apple Books, Kindle, and Kobo are better depending on where your library already lives.</p>
    <h3>Where can I read classic books for free on iPhone?</h3>
    <p>Standard Ebooks and Project Gutenberg are the most useful free sources for public-domain classics. Libby can also provide free classics through a participating library.</p>
    <h3>Is Standard Ebooks better than Project Gutenberg?</h3>
    <p>Standard Ebooks is usually better for polished editions, while Project Gutenberg is better for catalogue size and hard-to-find public-domain texts.</p>
    <h3>Can I import classic EPUB files into an iPhone reading app?</h3>
    <p>Yes. Apps such as leaf can import EPUB files, and leaf also supports PDF, Markdown, and .leaf files.</p>
    <h2>Related pages</h2>
    <nav>
      <a href="/">leaf homepage</a>
      <a href="/guides/">Reading Guides</a>
      <a href="/guides/best-ebook-reader-apps-iphone">Best eBook Reader Apps for iPhone</a>
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

const bestClassicsAppsHtml = setSeo(homeHtml, {
  title: 'Best Apps for Reading Classics on iPhone in 2026 | leaf',
  description: 'A balanced guide to the best iPhone apps and sources for reading classic literature, including leaf, Standard Ebooks, Project Gutenberg, Libby, Apple Books, Kindle, and Kobo.',
  canonical: 'https://readleaf.co/guides/best-apps-for-reading-classics-iphone',
}).replace(
  /<div id="root">[\s\S]*?<\/div>\s*<\/body>/,
  bestClassicsAppsStaticHtml + '\n  </body>'
);
fs.writeFileSync(path.join(guidesDir, 'best-apps-for-reading-classics-iphone.html'), bestClassicsAppsHtml);

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
