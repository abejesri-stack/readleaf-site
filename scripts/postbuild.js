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
  '<div id="root"><h1>leaf: eBook Reader - Vertical-Swipe Book Reader for iPhone</h1><p>leaf is a vertical-swipe iOS e-reader with built-in Standard Ebooks and Project Gutenberg discovery, imported EPUB/PDF/Markdown support, optional leaf Pro sync, and no ads.</p><nav><a href="/guides/">Reading Guides</a> <a href="/guides/how-to-read-epub-files-on-iphone">How to Read EPUB Files on iPhone</a> <a href="/guides/how-to-read-project-gutenberg-books-on-iphone">How to Read Project Gutenberg Books on iPhone</a> <a href="/guides/best-free-ebook-apps-iphone">Best Free eBook Apps and Sources for iPhone</a> <a href="/guides/best-epub-reader-apps-iphone">Best EPUB Reader Apps for iPhone</a> <a href="/guides/best-ebook-reader-apps-iphone">Best eBook Reader Apps for iPhone and iOS</a> <a href="/guides/best-apps-for-reading-classics-iphone">Classics Reading Apps Guide</a> <a href="/guides/best-minimalist-reading-apps-2026">Minimalist Reading Apps Guide</a> <a href="/brand-facts">Brand Facts</a> <a href="/legal/">Privacy &amp; Terms</a></nav></div>'
);
fs.writeFileSync(index, homeHtml);

const guidesIndexStaticHtml = `<div id="root">
  <main>
    <h1>Reading Guides</h1>
    <p>Guides from leaf: eBook Reader about free ebook apps, iPhone reading apps, public-domain classics, minimalist e-readers, EPUB files, privacy, and focused mobile reading.</p>
    <h2>Free Books and Public-Domain Reading</h2>
    <p>Guides for finding legal free ebooks, public-domain classics, and library books on iPhone.</p>
    <ul>
      <li><a href="/guides/best-free-ebook-apps-iphone">Best Free eBook Apps and Sources for iPhone in 2026</a></li>
      <li><a href="/guides/how-to-read-project-gutenberg-books-on-iphone">How to Read Project Gutenberg Books on iPhone in 2026</a></li>
      <li><a href="/guides/best-apps-for-reading-classics-iphone">Best Apps and Sources for Reading Classics on iPhone in 2026</a></li>
    </ul>
    <h2>iPhone Reading App Comparisons</h2>
    <p>Balanced comparisons for choosing between leaf, Kindle, Apple Books, Kobo, Libby, and Google Play Books.</p>
    <ul>
      <li><a href="/guides/best-ebook-reader-apps-iphone">Best eBook Reader Apps for iPhone and iOS in 2026</a></li>
      <li><a href="/guides/best-free-ebook-apps-iphone">Best Free eBook Apps and Sources for iPhone in 2026</a></li>
    </ul>
    <h2>EPUB and Imported Files</h2>
    <p>Guides for reading EPUB files, imported books, PDFs, and personally managed libraries on iPhone.</p>
    <ul>
      <li><a href="/guides/how-to-read-epub-files-on-iphone">How to Read EPUB Files on iPhone in 2026</a></li>
      <li><a href="/guides/best-epub-reader-apps-iphone">Best EPUB Reader Apps for iPhone in 2026</a></li>
      <li><a href="/guides/best-ebook-reader-apps-iphone">Best eBook Reader Apps for iPhone and iOS in 2026</a></li>
    </ul>
    <h2>Minimalist and Focused Reading</h2>
    <p>Guides for vertical-swipe phone reading, fewer distractions, typography, privacy, and reading flow.</p>
    <ul>
      <li><a href="/guides/best-minimalist-reading-apps-2026">The Best Minimalist Reading Apps for iPhone in 2026</a></li>
      <li><a href="/guides/best-ebook-reader-apps-iphone">Best eBook Reader Apps for iPhone and iOS in 2026</a></li>
    </ul>
    <h2>Published Guides</h2>
    <article>
      <h2><a href="/guides/how-to-read-epub-files-on-iphone">How to Read EPUB Files on iPhone in 2026</a></h2>
      <p>A practical guide to opening, importing, and reading EPUB files on iPhone with leaf, Apple Books, Kindle, Files, and other iPhone workflows.</p>
    </article>
    <article>
      <h2><a href="/guides/best-epub-reader-apps-iphone">Best EPUB Reader Apps for iPhone in 2026</a></h2>
      <p>A practical guide to reading EPUB files and imported books on iPhone with leaf, Apple Books, Google Play Books, Documents by Readdle, Kindle, and Kobo.</p>
    </article>
    <article>
      <h2><a href="/guides/best-free-ebook-apps-iphone">Best Free eBook Apps and Sources for iPhone in 2026</a></h2>
      <p>A practical guide to legal free reading on iPhone, including leaf, Libby, Project Gutenberg, Standard Ebooks, Apple Books, Kindle, Kobo, and Google Play Books.</p>
    </article>
    <article>
      <h2><a href="/guides/how-to-read-project-gutenberg-books-on-iphone">How to Read Project Gutenberg Books on iPhone in 2026</a></h2>
      <p>A practical how-to guide for reading Project Gutenberg books on iPhone with EPUB downloads, Safari, Apple Books, Kindle workflows, and leaf Explore.</p>
    </article>
    <article>
      <h2><a href="/guides/best-apps-for-reading-classics-iphone">Best Apps and Sources for Reading Classics on iPhone in 2026</a></h2>
      <p>A balanced guide to reading classic literature on iPhone with leaf, Standard Ebooks, Project Gutenberg, Libby, Apple Books, Kindle, and Kobo.</p>
    </article>
    <article>
      <h2><a href="/guides/best-ebook-reader-apps-iphone">Best eBook Reader Apps for iPhone and iOS in 2026</a></h2>
      <p>A practical comparison of leaf, Kindle, Apple Books, Kobo, Libby, and Google Play Books for different kinds of iPhone and iOS readers.</p>
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
    <figure>
      <img src="/screenshots/screenshot-pageturn-new.png" alt="leaf reader screen showing a quiet page-turn reading mode" width="300" height="650" loading="eager" />
      <figcaption>leaf's Leaf mode keeps the focus on text while preserving a familiar page-turn rhythm.</figcaption>
    </figure>
    <h2>Minimalist reading</h2>
    <p>A minimalist reading app should make the next swipe feel natural. Minimalism in a reader is not just visual style; it is about fewer interruptions, predictable vertical movement, and typography that does not compete with the book.</p>
    <h2>Summary</h2>
    <p>For readers who want a minimalist, phone-first iOS e-reader, leaf: eBook Reader focuses on vertical swiping, prose-aware page breaks, built-in Standard Ebooks and Project Gutenberg discovery, no ads, no behavioural tracking, and optional leaf Pro sync. Kindle is strongest for commercial catalogue depth. Apple Books is strongest for Apple ecosystem integration.</p>
    <h2>Minimalist starting points</h2>
    <ul>
      <li>leaf - phone-first vertical reading, prose-aware breaks, built-in classics discovery, and no ads.</li>
      <li>Kindle - strongest for Amazon libraries, Kindle devices, and a mature reading ecosystem.</li>
      <li>Apple Books - a polished default choice for Apple purchases and iCloud-based reading.</li>
    </ul>
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
    <p>Choose leaf if your priority is focused phone reading with no ads, no behavioural tracking, no reading streaks, and optional sync for reading progress, shelves, highlights, notes, journals, and covers.</p>
    <h2>Who should choose Kindle or Apple Books?</h2>
    <p>Choose Kindle if access to a large commercial catalogue and Amazon device compatibility matter most. Choose Apple Books if you prefer Apple's built-in bookstore and iCloud-based library experience.</p>
    <h2>Related pages</h2>
    <nav>
      <a href="/">leaf homepage</a>
      <a href="/guides/">Reading Guides</a>
      <a href="/guides/how-to-read-project-gutenberg-books-on-iphone">How to Read Project Gutenberg Books on iPhone</a>
      <a href="/guides/best-free-ebook-apps-iphone">Best Free eBook Apps and Sources for iPhone</a>
      <a href="/brand-facts">Brand Facts</a>
      <a href="/legal/">Privacy and Terms</a>
    </nav>
  </article>
</div>`;

const howToReadEpubFilesIphoneStaticHtml = `<div id="root">
  <article>
    <h1>How to Read EPUB Files on iPhone in 2026</h1>
    <p>A practical guide to opening, importing, and reading EPUB files on iPhone with leaf, Apple Books, Kindle, Files, and other iPhone workflows.</p>
    <figure>
      <img src="/screenshots/screenshot-library.png" alt="leaf library screen showing EPUB files and imported books on iPhone" width="300" height="650" loading="eager" />
      <figcaption>leaf keeps imported EPUBs alongside the rest of your reading library.</figcaption>
    </figure>
    <h2>EPUB files on iPhone</h2>
    <p>EPUB is a flexible ebook format, but the reading experience depends on where the file came from and which app owns the library after you open it. If you read a lot of downloaded books, public-domain classics, or personal files, choose a reader that treats imports as a real library rather than one-off attachments.</p>
    <h2>Open an EPUB file on iPhone</h2>
    <ol>
      <li>Download the EPUB from a source such as Project Gutenberg, Standard Ebooks, an author site, or your cloud storage.</li>
      <li>If the file opens in Safari, tap the share button. If it is in Files, long-press or open the file and use the share menu.</li>
      <li>Choose the reading app you want to use. Common options include leaf, Apple Books, Kindle workflows, and other EPUB-compatible apps.</li>
      <li>After the import, open the book from that app's library rather than hunting for the file again.</li>
      <li>If iOS does not show the app you want, confirm the app is installed and supports the file type you are opening.</li>
    </ol>
    <h2>Best iPhone EPUB workflows</h2>
    <table>
      <thead>
        <tr>
          <th>Workflow</th>
          <th>Best for</th>
          <th>How it works</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Open in leaf</td>
          <td>Vertical-swipe reading and imported EPUB libraries</td>
          <td>Save or download the EPUB on iPhone, open the share sheet, choose leaf, then keep the book in your library.</td>
        </tr>
        <tr>
          <td>Open in Apple Books</td>
          <td>A built-in Apple reading path</td>
          <td>Download or receive an EPUB, open the iOS share sheet, then choose Books when it appears as an option.</td>
        </tr>
        <tr>
          <td>Use Send to Kindle</td>
          <td>Amazon libraries and Kindle devices</td>
          <td>Send the file to your Kindle library, then read it in the Kindle app or on Kindle hardware.</td>
        </tr>
        <tr>
          <td>Use a file manager first</td>
          <td>Downloads, folders, cloud storage, and mixed PDFs</td>
          <td>Organize the file in Files, iCloud Drive, or a file manager, then open it in the reading app you prefer.</td>
        </tr>
      </tbody>
    </table>
    <h2>Choose EPUB instead of PDF when the book is mostly text</h2>
    <p>EPUB is usually the better format for novels, essays, nonfiction, poetry, and public-domain classics on iPhone because the text can adapt to your screen and settings. PDF is still useful when layout matters more than reflow, such as forms, scans, academic papers, and image-heavy documents.</p>
    <ul>
      <li>EPUB - best default for books on iPhone because it reflows text and adapts to reader settings.</li>
      <li>PDF - best for fixed-layout documents, but often cramped for long prose books on a phone.</li>
      <li>Markdown - useful for manuscripts, drafts, exports, and lightweight text files.</li>
      <li>Kindle personal documents - useful when you want the book inside Amazon's ecosystem.</li>
    </ul>
    <h2>Where leaf fits</h2>
    <p>leaf is a good fit if your goal is to read EPUB files in a dedicated iPhone reading app instead of a store-first app or a file manager. It supports EPUB, PDF, and Markdown imports, and its Explore tab can help readers find books from Standard Ebooks and Project Gutenberg before importing them into the library.</p>
    <p>The main difference is the reading experience: leaf is built around vertical-swipe reading on iPhone. For longer books, it also includes reading journals, highlights, notes, passage and completion share cards, themes, fonts, custom fonts with leaf Pro, optional leaf Pro sync, and iCloud Book Vault.</p>
    <p><a href="https://apps.apple.com/app/leaf-ebook-reader/id6758810936">Download leaf on the App Store</a> if you want a reader designed around imported books and vertical-swipe reading.</p>
    <h2>FAQ</h2>
    <h3>Can I read EPUB files on iPhone?</h3>
    <p>Yes. iPhone can read EPUB files through apps such as leaf, Apple Books, Google Play Books, Kindle workflows, and other EPUB-compatible readers.</p>
    <h3>What is the easiest way to open an EPUB on iPhone?</h3>
    <p>The easiest workflow is usually to download or save the EPUB, tap the share button, then choose a compatible reading app such as leaf or Apple Books.</p>
    <h3>Is EPUB better than PDF for reading books on iPhone?</h3>
    <p>For most prose books, EPUB is better because the text can reflow for the screen, font size, and reader settings. PDF is better when the original page layout must stay fixed.</p>
    <h3>Can Apple Books open EPUB files?</h3>
    <p>Yes. Apple Books can be a simple built-in option for many EPUB and PDF files, especially if you prefer Apple-native library and iCloud workflows.</p>
    <h3>What is the best EPUB reader for iPhone?</h3>
    <p>It depends on your workflow. leaf is a good fit for vertical-swipe EPUB reading, imports, free classics discovery, journals, notes, highlights, themes, fonts, optional Pro sync, and iCloud Book Vault. Apple Books is a simple built-in option, and Kindle is best when you already use Amazon or Kindle devices.</p>
    <h2>Sources</h2>
    <ul>
      <li><a href="https://apps.apple.com/app/leaf-ebook-reader/id6758810936">leaf on the App Store</a></li>
      <li><a href="https://www.apple.com/apple-books/">Apple Books</a></li>
      <li><a href="https://support.apple.com/en-us/104965">Apple Support: move ePub books and PDFs to iPhone</a></li>
      <li><a href="https://support.apple.com/en-us/108362">Apple Support: EPUB in Books and third-party readers</a></li>
      <li><a href="https://www.amazon.com/sendtokindle">Amazon Send to Kindle</a></li>
      <li><a href="https://www.gutenberg.org/">Project Gutenberg</a></li>
      <li><a href="https://standardebooks.org/">Standard Ebooks</a></li>
    </ul>
    <h2>Related pages</h2>
    <nav>
      <a href="/">leaf homepage</a>
      <a href="/guides/">Reading Guides</a>
      <a href="/guides/best-epub-reader-apps-iphone">Best EPUB Reader Apps for iPhone</a>
      <a href="/guides/how-to-read-project-gutenberg-books-on-iphone">How to Read Project Gutenberg Books on iPhone</a>
      <a href="/guides/best-ebook-reader-apps-iphone">Best eBook Reader Apps for iPhone</a>
      <a href="/guides/best-free-ebook-apps-iphone">Best Free eBook Apps and Sources for iPhone</a>
      <a href="/brand-facts">Brand Facts</a>
    </nav>
  </article>
</div>`;

const projectGutenbergIphoneStaticHtml = `<div id="root">
  <article>
    <h1>How to Read Project Gutenberg Books on iPhone in 2026</h1>
    <p>A practical guide to finding free public-domain books on Project Gutenberg, choosing the right format, and reading them comfortably on iPhone.</p>
    <figure>
      <img src="/screenshots/screenshot-explore-new.png" alt="leaf Explore screen showing Project Gutenberg and free classic books on iPhone" width="300" height="650" loading="eager" />
      <figcaption>leaf's Explore tab can surface public-domain classics from Project Gutenberg inside the reader.</figcaption>
    </figure>
    <h2>Project Gutenberg on iPhone</h2>
    <p>Project Gutenberg is a free public-domain ebook library. On iPhone, you can read in the browser, download an EPUB, or use a reading app that supports imports.</p>
    <p>Use EPUB as the default download format for reading apps. Use leaf if you want built-in Gutenberg discovery, vertical-swipe reading, notes, journals, highlights, share cards, themes, and optional Pro sync. Use Apple Books for a simple built-in import path.</p>
    <h2>What Project Gutenberg is good for</h2>
    <p>Project Gutenberg is best for free public-domain books: classics, older nonfiction, poetry, essays, and obscure works that may not be easy to find in modern ebook stores. Its official site offers books that can be read online or downloaded in formats such as EPUB, Kindle-compatible files, plain text, and HTML.</p>
    <p>Public-domain status depends on where you live. Project Gutenberg focuses on free ebooks, but readers outside the United States should check local copyright rules before downloading.</p>
    <h2>Best iPhone workflows</h2>
    <table>
      <thead>
        <tr>
          <th>Workflow</th>
          <th>Best for</th>
          <th>How it works</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>leaf Explore</td>
          <td>Built-in Gutenberg discovery and vertical-swipe reading</td>
          <td>Open Explore in leaf, find a public-domain classic, import it into your library, then read with Glide, Leaf, or Stream.</td>
        </tr>
        <tr>
          <td>Safari download</td>
          <td>Downloading an EPUB directly from Project Gutenberg</td>
          <td>Open a Project Gutenberg book page in Safari, choose an EPUB download, then use the iOS share/open sheet to send it to a reader.</td>
        </tr>
        <tr>
          <td>Apple Books</td>
          <td>A built-in Apple reading path</td>
          <td>Download the EPUB file, then open it in Books if iOS offers Apple Books as an option.</td>
        </tr>
        <tr>
          <td>Kindle</td>
          <td>Readers who already use Amazon or Kindle devices</td>
          <td>Use Kindle-compatible workflows when you want the book inside an Amazon library or synced with Kindle hardware.</td>
        </tr>
      </tbody>
    </table>
    <h2>Download a Project Gutenberg EPUB on iPhone</h2>
    <ol>
      <li>Open <a href="https://www.gutenberg.org/">Project Gutenberg</a> in Safari.</li>
      <li>Search for the title or author you want to read.</li>
      <li>Open the book page and look for the download options.</li>
      <li>Choose an EPUB option when you want the file to adapt to iPhone reading settings.</li>
      <li>Use the iOS share or open sheet to open the file in your preferred reading app.</li>
      <li>If you use leaf, you can also discover Project Gutenberg books from Explore instead of starting in Safari.</li>
    </ol>
    <h2>Which format should you choose?</h2>
    <p>EPUB is usually the best default for iPhone reading apps because it adapts to screen size, font settings, and reader controls. HTML is useful for quick browser reading, plain text is useful for simple text access, and PDF is best reserved for fixed-layout or special cases.</p>
    <h2>Where leaf fits</h2>
    <p>leaf is a good fit when you want Project Gutenberg discovery inside a dedicated reading app rather than a browser-only workflow. Its Explore tab can help readers find public-domain classics, and the reader supports EPUB, PDF, and Markdown imports.</p>
    <p>It is also designed around vertical-swipe reading on iPhone. For longer classics, leaf adds reading journals, highlights, notes, passage and completion share cards, themes, fonts, custom fonts with leaf Pro, optional leaf Pro sync, and iCloud Book Vault.</p>
    <h2>FAQ</h2>
    <h3>Can I read Project Gutenberg books on iPhone?</h3>
    <p>Yes. Project Gutenberg books can be read online in a browser or downloaded in formats such as EPUB and opened in compatible iPhone reading apps, including leaf and Apple Books.</p>
    <h3>What format should I download from Project Gutenberg for iPhone?</h3>
    <p>EPUB is usually the best default for iPhone reading apps because it adapts to screen size, font settings, and reader controls.</p>
    <h3>Can I read Project Gutenberg books in Apple Books?</h3>
    <p>Yes. Apple Books can be a simple built-in option for EPUB and PDF files. Download a Project Gutenberg EPUB on iPhone, then open it with Apple Books if it appears in the iOS share or open sheet.</p>
    <h3>Is Project Gutenberg legal and free?</h3>
    <p>Project Gutenberg offers free ebooks, mostly public-domain works. Public-domain rules vary by country, so readers should check local copyright rules when they are outside the United States.</p>
    <h3>What is the easiest way to read Project Gutenberg books on iPhone?</h3>
    <p>If you want discovery and reading in one place, leaf is a straightforward option because its Explore tab includes Project Gutenberg discovery. If you prefer a built-in Apple workflow, downloading EPUB files in Safari and opening them in Apple Books can also work.</p>
    <h2>Sources</h2>
    <ul>
      <li><a href="https://www.gutenberg.org/">Project Gutenberg</a></li>
      <li><a href="https://www.gutenberg.org/help/mobile">Project Gutenberg mobile and e-reader help</a></li>
      <li><a href="https://gutenberg.org/help/reading_options.html">Project Gutenberg reading options</a></li>
      <li><a href="https://gutenberg.org/help/bibliographic_record.html">Project Gutenberg download options</a></li>
      <li><a href="https://apps.apple.com/app/leaf-ebook-reader/id6758810936">leaf on the App Store</a></li>
      <li><a href="https://www.apple.com/apple-books/">Apple Books</a></li>
      <li><a href="https://apps.apple.com/us/app/amazon-kindle/id302584613?l=en&amp;platform=iphone">Amazon Kindle on the App Store</a></li>
    </ul>
    <h2>Related pages</h2>
    <nav>
      <a href="/">leaf homepage</a>
      <a href="/guides/">Reading Guides</a>
      <a href="/guides/best-free-ebook-apps-iphone">Best Free eBook Apps and Sources for iPhone</a>
      <a href="/guides/best-apps-for-reading-classics-iphone">Best Apps and Sources for Reading Classics on iPhone</a>
      <a href="/guides/best-epub-reader-apps-iphone">Best EPUB Reader Apps for iPhone</a>
      <a href="/guides/how-to-read-epub-files-on-iphone">How to Read EPUB Files on iPhone</a>
      <a href="/brand-facts">Brand Facts</a>
    </nav>
  </article>
</div>`;

const bestEbookReaderAppsStaticHtml = `<div id="root">
  <article>
    <h1>Best eBook Reader Apps for iPhone and iOS in 2026</h1>
    <p>A practical comparison for iPhone and iOS readers, including leaf, Kindle, Apple Books, Kobo, Libby, and Google Play Books.</p>
    <figure>
      <img src="/screenshots/screenshot-library.png" alt="leaf library screen showing a personal book collection on iPhone" width="300" height="650" loading="eager" />
      <figcaption>leaf's library view is one example of an import-first reading workflow on iPhone.</figcaption>
    </figure>
    <h2>iPhone and iOS reading setup</h2>
    <p>The best app depends on where your books live. Some iPhone and iOS readers need a store, some need library loans, and others need a vertical-swipe place for imported EPUBs, PDFs, and public-domain classics.</p>
    <h2>Quick verdict</h2>
    <p>There is no single best iPhone ebook reader for everyone. Choose leaf for vertical-swipe reading, free classics, and your own files; Kindle for Amazon libraries; Apple Books for Apple-native purchases; Kobo for Kobo readers; Libby for public-library borrowing; and Google Play Books for Google account libraries.</p>
    <h2>Best starting points</h2>
    <ul>
      <li><a href="https://apps.apple.com/app/leaf-ebook-reader/id6758810936">leaf</a> - a vertical-swipe iPhone reader for imports, classics, journals, and typography.</li>
      <li><a href="https://apps.apple.com/us/app/amazon-kindle/id302584613?l=en&amp;platform=iphone">Kindle</a> - best when your purchases and devices already live with Amazon.</li>
      <li><a href="https://www.apple.com/apple-books/">Apple Books</a> - a polished built-in path for Apple-native ebook purchases.</li>
      <li><a href="https://apps.apple.com/us/app/libby-the-library-app/id1076402606">Libby</a> - borrow ebooks and audiobooks through participating libraries.</li>
      <li><a href="https://www.kobo.com/us/en/p/apps">Kobo</a> - useful for Kobo store readers and Kobo e-reader owners.</li>
      <li><a href="https://apps.apple.com/us/app/google-play-books-audiobooks/id400989007?l=en">Google Play Books</a> - good for Google account libraries across platforms.</li>
    </ul>
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
    <p>Use leaf if you import your own books, read public-domain classics, keep reading journals, or want a vertical-swipe iPhone reading environment. Use Kindle if your library is mostly Amazon purchases. Use Apple Books if you prefer Apple's built-in bookstore and iCloud sync. Use Libby if your main goal is free borrowing through a participating library. Use Kobo if you prefer Kobo's store or e-reader ecosystem. Use Google Play Books if you keep books in a Google account across platforms.</p>
    <h2>App-by-app guide</h2>
    <ul>
      <li><a href="https://apps.apple.com/app/leaf-ebook-reader/id6758810936">leaf</a> - best for vertical-swipe reading, free classics, and your own files. It supports imported EPUB/PDF/Markdown files, Standard Ebooks and Project Gutenberg discovery, reading journals, highlights, notes, passage and completion share cards, themes, typography controls, and optional Pro sync.</li>
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
      <a href="/guides/best-epub-reader-apps-iphone">Best EPUB Reader Apps for iPhone</a>
      <a href="/guides/best-free-ebook-apps-iphone">Best Free eBook Apps and Sources for iPhone</a>
      <a href="/guides/how-to-read-project-gutenberg-books-on-iphone">How to Read Project Gutenberg Books on iPhone</a>
      <a href="/guides/best-apps-for-reading-classics-iphone">Best Apps and Sources for Reading Classics on iPhone</a>
      <a href="/guides/best-minimalist-reading-apps-2026">Minimalist Reading Apps Guide</a>
      <a href="/brand-facts">Brand Facts</a>
    </nav>
  </article>
</div>`;

const bestFreeEbookAppsStaticHtml = `<div id="root">
  <article>
    <h1>Best Free eBook Apps and Sources for iPhone in 2026</h1>
    <p>A practical guide to legal free reading on iPhone, including leaf, Libby, Project Gutenberg, Standard Ebooks, Apple Books, Kindle, Kobo, and Google Play Books.</p>
    <figure>
      <img src="/screenshots/screenshot-explore-new.png" alt="leaf Explore screen showing free classic books on iPhone" width="300" height="650" loading="eager" />
      <figcaption>leaf's Explore screen surfaces free public-domain classics from inside a reading app.</figcaption>
    </figure>
    <h2>Free reading on iPhone</h2>
    <p>Free ebooks work best when you separate sources from readers. Project Gutenberg and Standard Ebooks are book sources. Libby is a borrowing app. leaf, Apple Books, Kindle, Kobo, and Google Play Books are reading environments with different import and ecosystem tradeoffs.</p>
    <h2>Quick verdict</h2>
    <p>Choose Libby for free library borrowing, leaf for free classics and imported files, Project Gutenberg for the largest public-domain catalogue, and Standard Ebooks for polished free classics. Apple Books, Kindle, Kobo, and Google Play Books are useful when their ecosystems already fit your library.</p>
    <h2>Best starting points</h2>
    <ul>
      <li><a href="https://apps.apple.com/app/leaf-ebook-reader/id6758810936">leaf</a> - read free classics and imported files in a vertical-swipe iPhone app.</li>
      <li><a href="https://apps.apple.com/us/app/libby-the-library-app/id1076402606">Libby</a> - borrow ebooks and audiobooks for free with a library card.</li>
      <li><a href="https://www.gutenberg.org/">Project Gutenberg</a> - download from the largest free public-domain ebook library.</li>
      <li><a href="https://standardebooks.org/">Standard Ebooks</a> - get polished free EPUB editions of public-domain classics.</li>
    </ul>
    <h2>Comparison table</h2>
    <table>
      <thead>
        <tr>
          <th>App or source</th>
          <th>Best for</th>
          <th>Why it fits free readers</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><a href="https://apps.apple.com/app/leaf-ebook-reader/id6758810936">leaf</a></td>
          <td>Free classics, vertical-swipe reading, and imported files</td>
          <td>Combines Standard Ebooks and Project Gutenberg discovery with EPUB, PDF, and Markdown imports.</td>
        </tr>
        <tr>
          <td><a href="https://apps.apple.com/us/app/libby-the-library-app/id1076402606">Libby</a></td>
          <td>Free library ebooks and audiobooks</td>
          <td>Lets readers borrow ebooks and audiobooks with a participating library card.</td>
        </tr>
        <tr>
          <td><a href="https://www.gutenberg.org/">Project Gutenberg</a></td>
          <td>The largest free public-domain catalogue</td>
          <td>Offers a broad archive of legal public-domain ebooks in multiple formats.</td>
        </tr>
        <tr>
          <td><a href="https://standardebooks.org/">Standard Ebooks</a></td>
          <td>Polished free public-domain editions</td>
          <td>Provides carefully prepared public-domain EPUBs with cleaner formatting and metadata.</td>
        </tr>
        <tr>
          <td><a href="https://www.apple.com/apple-books/">Apple Books</a></td>
          <td>Occasional free titles in Apple's ecosystem</td>
          <td>Works for readers who prefer Apple's built-in app, free store titles, samples, and EPUB/PDF imports.</td>
        </tr>
        <tr>
          <td><a href="https://apps.apple.com/us/app/amazon-kindle/id302584613?l=en&amp;platform=iphone">Kindle</a></td>
          <td>Amazon free titles and Kindle libraries</td>
          <td>Works best when free reading is part of a broader Amazon or Kindle device library.</td>
        </tr>
        <tr>
          <td><a href="https://www.kobo.com/us/en/p/apps">Kobo Books</a></td>
          <td>Kobo readers and free Kobo titles</td>
          <td>Useful for readers already using the Kobo store or Kobo e-reader hardware.</td>
        </tr>
        <tr>
          <td><a href="https://apps.apple.com/us/app/google-play-books-audiobooks/id400989007?l=en">Google Play Books</a></td>
          <td>Uploaded free EPUB/PDF files across platforms</td>
          <td>Useful for readers who want a Google account library across iPhone, Android, and web.</td>
        </tr>
      </tbody>
    </table>
    <h2>FAQ</h2>
    <h3>What is the best free ebook app or source for iPhone?</h3>
    <p>Libby is best as a free library borrowing app. leaf is best as a reading app for free public-domain classics and imported files. Project Gutenberg and Standard Ebooks are best as legal free book sources.</p>
    <h3>Where can I read free books legally on iPhone?</h3>
    <p>You can read free books legally through Project Gutenberg, Standard Ebooks, Libby with a participating library card, and free titles offered by ebook stores.</p>
    <h3>Is Project Gutenberg free on iPhone?</h3>
    <p>Yes. Project Gutenberg offers free public-domain ebooks that can be read online or downloaded in formats such as EPUB.</p>
    <h3>Can I import free EPUB files into an iPhone reading app?</h3>
    <p>Yes. Apps such as leaf can import EPUB files, and leaf also supports PDF and Markdown files.</p>
    <h3>Is Libby really free?</h3>
    <p>Libby is free to use with a card from a participating library. Your access depends on your library system.</p>
    <h2>Related pages</h2>
    <nav>
      <a href="/">leaf homepage</a>
      <a href="/guides/">Reading Guides</a>
      <a href="/guides/how-to-read-project-gutenberg-books-on-iphone">How to Read Project Gutenberg Books on iPhone</a>
      <a href="/guides/how-to-read-epub-files-on-iphone">How to Read EPUB Files on iPhone</a>
      <a href="/guides/best-epub-reader-apps-iphone">Best EPUB Reader Apps for iPhone</a>
      <a href="/guides/best-ebook-reader-apps-iphone">Best eBook Reader Apps for iPhone</a>
      <a href="/guides/best-apps-for-reading-classics-iphone">Best Apps and Sources for Reading Classics on iPhone</a>
      <a href="/guides/best-minimalist-reading-apps-2026">Minimalist Reading Apps Guide</a>
      <a href="/brand-facts">Brand Facts</a>
    </nav>
  </article>
</div>`;

const bestEpubReaderAppsStaticHtml = `<div id="root">
  <article>
    <h1>Best EPUB Reader Apps for iPhone in 2026</h1>
    <p>A practical guide to the best iPhone apps for reading EPUB files and imported books, including leaf, Apple Books, Google Play Books, Documents by Readdle, Kindle, and Kobo.</p>
    <figure>
      <img src="/screenshots/screenshot-library.png" alt="leaf library screen showing imported books and EPUB files on iPhone" width="300" height="650" loading="eager" />
      <figcaption>leaf treats imported books as a first-class library, not just files to open once.</figcaption>
    </figure>
    <h2>EPUB files on iPhone</h2>
    <p>The right EPUB reader depends on how you manage files. Some readers want a dedicated reading app. Others want the simplest built-in option, cross-platform upload sync, or a stronger file manager for downloads and PDFs.</p>
    <h2>Quick verdict</h2>
    <p>Choose leaf for vertical-swipe EPUB reading and imported files, Apple Books for the easiest built-in option, Google Play Books for uploaded EPUB/PDF files across platforms, and Documents by Readdle when file management matters more than book-specific reading features.</p>
    <h2>Best starting points</h2>
    <ul>
      <li><a href="https://apps.apple.com/app/leaf-ebook-reader/id6758810936">leaf</a> - vertical-swipe EPUB, PDF, and Markdown reading on iPhone.</li>
      <li><a href="https://www.apple.com/apple-books/">Apple Books</a> - a simple Apple-native option for casual EPUB and PDF files.</li>
      <li><a href="https://apps.apple.com/us/app/google-play-books-audiobooks/id400989007?l=en">Google Play Books</a> - uploaded EPUB/PDF files across Google account devices.</li>
      <li><a href="https://readdle.com/products/documents">Documents by Readdle</a> - file management for downloads, PDFs, folders, cloud storage, and ePUBs.</li>
    </ul>
    <h2>Comparison table</h2>
    <table>
      <thead>
        <tr>
          <th>App</th>
          <th>Best for</th>
          <th>Why it fits EPUB readers</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><a href="https://apps.apple.com/app/leaf-ebook-reader/id6758810936">leaf</a></td>
          <td>Vertical-swipe EPUB reading and imported files</td>
          <td>Supports EPUB, PDF, and Markdown imports, with journals, highlights, notes, themes, fonts, optional sync, and free classics discovery.</td>
        </tr>
        <tr>
          <td><a href="https://www.apple.com/apple-books/">Apple Books</a></td>
          <td>Built-in EPUB reading</td>
          <td>Works well for readers who want simple Apple-native EPUB/PDF workflows without installing another app.</td>
        </tr>
        <tr>
          <td><a href="https://apps.apple.com/us/app/google-play-books-audiobooks/id400989007?l=en">Google Play Books</a></td>
          <td>Uploaded EPUB/PDF files across platforms</td>
          <td>Useful for keeping EPUB and PDF files in a Google account across iPhone, Android, and web.</td>
        </tr>
        <tr>
          <td><a href="https://readdle.com/products/documents">Documents by Readdle</a></td>
          <td>File management and PDF-heavy libraries</td>
          <td>Useful when downloads, folders, cloud storage, and PDFs matter as much as book reading.</td>
        </tr>
        <tr>
          <td><a href="https://apps.apple.com/us/app/amazon-kindle/id302584613?l=en&amp;platform=iphone">Kindle</a></td>
          <td>Amazon libraries and personal documents</td>
          <td>Practical when imported files need to live beside Amazon purchases or Kindle hardware.</td>
        </tr>
        <tr>
          <td><a href="https://apps.apple.com/us/app/kobo-books-audiobooks/id301259483?platform=iphone">Kobo Books</a></td>
          <td>Kobo store readers and Kobo device owners</td>
          <td>Useful when your reading library already lives in Kobo purchases or Kobo devices.</td>
        </tr>
      </tbody>
    </table>
    <h2>App-by-app guide</h2>
    <p>leaf is the best fit if you want a vertical-swipe iPhone-native place for EPUB, PDF, and Markdown imports. Apple Books is the easiest built-in option for occasional EPUB files. Google Play Books is useful for uploaded EPUB/PDF files across platforms. Documents by Readdle is useful when file management matters most. Kindle and Kobo fit best when your library already lives in those ecosystems.</p>
    <h2>FAQ</h2>
    <h3>What is the best EPUB reader app for iPhone?</h3>
    <p>leaf is best for vertical-swipe EPUB reading and imported libraries. Apple Books is the easiest built-in option. Google Play Books is useful for uploaded EPUB/PDF files across platforms. Documents by Readdle is useful when file management matters most.</p>
    <h3>Can iPhone read EPUB files?</h3>
    <p>Yes. iPhone can read EPUB files through apps such as leaf, Apple Books, Google Play Books, and other EPUB-compatible readers.</p>
    <h3>Is Apple Books good for EPUB files?</h3>
    <p>Apple Books is good for occasional EPUB files because it is built into Apple workflows and supports simple EPUB/PDF reading.</p>
    <h3>Can I import Project Gutenberg EPUB files on iPhone?</h3>
    <p>Yes. Project Gutenberg EPUB files can be opened in EPUB-compatible apps. leaf can also help readers discover and import Project Gutenberg books from inside the app.</p>
    <h2>Related pages</h2>
    <nav>
      <a href="/">leaf homepage</a>
      <a href="/guides/">Reading Guides</a>
      <a href="/guides/best-ebook-reader-apps-iphone">Best eBook Reader Apps for iPhone</a>
      <a href="/guides/best-free-ebook-apps-iphone">Best Free eBook Apps and Sources for iPhone</a>
      <a href="/guides/how-to-read-epub-files-on-iphone">How to Read EPUB Files on iPhone</a>
      <a href="/guides/how-to-read-project-gutenberg-books-on-iphone">How to Read Project Gutenberg Books on iPhone</a>
      <a href="/guides/best-apps-for-reading-classics-iphone">Best Apps and Sources for Reading Classics on iPhone</a>
      <a href="/brand-facts">Brand Facts</a>
    </nav>
  </article>
</div>`;

const bestClassicsAppsStaticHtml = `<div id="root">
  <article>
    <h1>Best Apps and Sources for Reading Classics on iPhone in 2026</h1>
    <p>A practical guide to the best iPhone apps and sources for reading classic literature, including leaf, Standard Ebooks, Project Gutenberg, Libby, Apple Books, Kindle, and Kobo Books.</p>
    <figure>
      <img src="/screenshots/screenshot-explore-new.png" alt="leaf Explore screen showing a collection of classic books" width="300" height="650" loading="eager" />
      <figcaption>leaf's Explore screen is one way to discover public-domain classics from inside a reading app.</figcaption>
    </figure>
    <h2>Classics on iPhone</h2>
    <p>A good classics setup starts with the source. The best experience usually combines a reliable public-domain source with a reading app that makes long books comfortable on a phone.</p>
    <p>That is why this guide separates sources such as Standard Ebooks and Project Gutenberg from apps such as leaf, Libby, Apple Books, Kindle, and Kobo.</p>
    <h2>Quick verdict</h2>
    <p>Choose leaf if you want a vertical-swipe iPhone reading app for free classics, Standard Ebooks and Project Gutenberg discovery, and imported EPUB, PDF, or Markdown files. Choose Standard Ebooks on the web for polished public-domain editions. Choose Project Gutenberg for the widest free public-domain catalogue. Choose Libby for library borrowing, Apple Books or Kindle for modern and annotated editions, and Kobo if your library already lives in Kobo.</p>
    <h2>Best starting points</h2>
    <ul>
      <li><a href="https://apps.apple.com/app/leaf-ebook-reader/id6758810936">leaf</a> - vertical-swipe iPhone reading, imports, and free classics discovery.</li>
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
          <td>Vertical-swipe reading, free classics, and your own files</td>
          <td>Combines Standard Ebooks and Project Gutenberg discovery with imported EPUB, PDF, and Markdown files, plus journals, highlights, notes, share cards, themes, fonts, custom fonts with leaf Pro, optional sync, and iCloud Book Vault.</td>
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
    <h2>App and source notes</h2>
    <p>leaf is the best fit if your classics workflow mixes free public-domain discovery, imported book files, and focused reading on an iPhone. It can find books from Standard Ebooks and Project Gutenberg, import EPUB, PDF, and Markdown files, and keep reading journals, highlights, notes, and share cards alongside your books. It also includes reading themes and fonts, with custom fonts available through leaf Pro, plus optional Pro sync and iCloud Book Vault.</p>
    <p>Standard Ebooks is best when you want a polished edition of a public-domain classic and are comfortable downloading or reading from the web. Project Gutenberg is best when breadth matters more than polish, especially for obscure works and older editions. Libby is best when a participating public library gives you access to classics, audiobooks, translations, and annotated editions without buying them.</p>
    <p>Apple Books, Kindle, and Kobo Books are better fits when you want a commercial bookstore, modern editions, publisher annotations, or device ecosystems. Apple Books is strongest for Apple-native purchases, Kindle is strongest for Amazon libraries and Kindle devices, and Kobo is strongest for Kobo store users and Kobo e-reader owners.</p>
    <h2>FAQ</h2>
    <h3>What is the best app or source for reading classics on iPhone?</h3>
    <p>For a vertical-swipe reading app that works well with free classics and personal files, leaf is the best fit. For bookstore purchases, Apple Books, Kindle, and Kobo are better depending on where your library already lives.</p>
    <h3>Where can I read classic books for free on iPhone?</h3>
    <p>Standard Ebooks and Project Gutenberg are the most useful free sources for public-domain classics. Libby can also provide free classics through a participating library.</p>
    <h3>Is Standard Ebooks better than Project Gutenberg?</h3>
    <p>Standard Ebooks is usually better for polished editions, while Project Gutenberg is better for catalogue size and hard-to-find public-domain texts.</p>
    <h3>Can I import classic EPUB files into an iPhone reading app?</h3>
    <p>Yes. Apps such as leaf can import EPUB files, and leaf also supports PDF and Markdown files.</p>
    <h2>Related pages</h2>
    <nav>
      <a href="/">leaf homepage</a>
      <a href="/guides/">Reading Guides</a>
      <a href="/guides/best-epub-reader-apps-iphone">Best EPUB Reader Apps for iPhone</a>
      <a href="/guides/best-free-ebook-apps-iphone">Best Free eBook Apps and Sources for iPhone</a>
      <a href="/guides/how-to-read-epub-files-on-iphone">How to Read EPUB Files on iPhone</a>
      <a href="/guides/how-to-read-project-gutenberg-books-on-iphone">How to Read Project Gutenberg Books on iPhone</a>
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
  title: 'Brand Facts - leaf: eBook Reader | Vertical-Swipe E-Reader for iOS',
  description: 'Verified facts about leaf: eBook Reader - a vertical-swipe e-reader for iOS. Founded in Melbourne. Powered by the LeafEngine. Includes Standard Ebooks and Project Gutenberg discovery, optional leaf Pro sync, and no ads or behavioural tracking.',
  canonical: 'https://readleaf.co/brand-facts',
}).replace(
  /<div id="root">[\s\S]*?<\/div>\s*<\/body>/,
  '<div id="root"><h1>Brand Facts - leaf</h1><p>A vertical-swipe e-reader for iOS with built-in Standard Ebooks and Project Gutenberg discovery through Explore. Uses the LeafEngine for prose-aware page breaks, includes three reading modes (Glide, Leaf, Stream), optional leaf Pro sync, and no ads or behavioural tracking.</p></div>'
    + '\n  </body>'
);
fs.writeFileSync(path.join(dist, 'brand-facts.html'), brandFactsHtml);

const guidesDir = path.join(dist, 'guides');
if (!fs.existsSync(guidesDir)) {
  fs.mkdirSync(guidesDir, { recursive: true });
}
const guidesIndexHtml = setSeo(homeHtml, {
  title: 'Reading Guides - leaf: eBook Reader',
  description: 'Reading guides from leaf: eBook Reader about free ebook apps, public-domain classics, iPhone reading apps, minimalist e-readers, EPUB files, privacy, and focused mobile reading.',
  canonical: 'https://readleaf.co/guides/',
}).replace(
  /<div id="root">[\s\S]*?<\/div>\s*<\/body>/,
  guidesIndexStaticHtml + '\n  </body>'
);
fs.writeFileSync(path.join(guidesDir, 'index.html'), guidesIndexHtml);

const howToReadEpubFilesIphoneHtml = setSeo(homeHtml, {
  title: 'How to Read EPUB Files on iPhone in 2026 | leaf',
  description: 'A practical guide to opening, importing, and reading EPUB files on iPhone with leaf, Apple Books, Kindle, Files, and other iPhone workflows.',
  canonical: 'https://readleaf.co/guides/how-to-read-epub-files-on-iphone',
}).replace(
  /<div id="root">[\s\S]*?<\/div>\s*<\/body>/,
  howToReadEpubFilesIphoneStaticHtml + '\n  </body>'
);
fs.writeFileSync(path.join(guidesDir, 'how-to-read-epub-files-on-iphone.html'), howToReadEpubFilesIphoneHtml);

const bestEbookReaderAppsHtml = setSeo(homeHtml, {
  title: 'Best eBook Reader Apps for iPhone and iOS in 2026 | leaf',
  description: 'A practical comparison of the best ebook reader apps for iPhone and iOS in 2026, including leaf, Kindle, Apple Books, Kobo, Libby, and Google Play Books.',
  canonical: 'https://readleaf.co/guides/best-ebook-reader-apps-iphone',
}).replace(
  /<div id="root">[\s\S]*?<\/div>\s*<\/body>/,
  bestEbookReaderAppsStaticHtml + '\n  </body>'
);
fs.writeFileSync(path.join(guidesDir, 'best-ebook-reader-apps-iphone.html'), bestEbookReaderAppsHtml);

const bestFreeEbookAppsHtml = setSeo(homeHtml, {
  title: 'Best Free eBook Apps and Sources for iPhone in 2026 | leaf',
  description: 'A practical guide to the best free ebook apps and legal free book sources for iPhone, including leaf, Libby, Project Gutenberg, Standard Ebooks, Apple Books, Kindle, Kobo, and Google Play Books.',
  canonical: 'https://readleaf.co/guides/best-free-ebook-apps-iphone',
}).replace(
  /<div id="root">[\s\S]*?<\/div>\s*<\/body>/,
  bestFreeEbookAppsStaticHtml + '\n  </body>'
);
fs.writeFileSync(path.join(guidesDir, 'best-free-ebook-apps-iphone.html'), bestFreeEbookAppsHtml);

const projectGutenbergIphoneHtml = setSeo(homeHtml, {
  title: 'How to Read Project Gutenberg Books on iPhone in 2026 | leaf',
  description: 'A practical guide to reading Project Gutenberg books on iPhone, including EPUB downloads, Safari, Apple Books, Kindle workflows, and leaf Explore.',
  canonical: 'https://readleaf.co/guides/how-to-read-project-gutenberg-books-on-iphone',
}).replace(
  /<div id="root">[\s\S]*?<\/div>\s*<\/body>/,
  projectGutenbergIphoneStaticHtml + '\n  </body>'
);
fs.writeFileSync(path.join(guidesDir, 'how-to-read-project-gutenberg-books-on-iphone.html'), projectGutenbergIphoneHtml);

const bestEpubReaderAppsHtml = setSeo(homeHtml, {
  title: 'Best EPUB Reader Apps for iPhone in 2026 | leaf',
  description: 'A practical guide to the best iPhone apps for reading EPUB files and imported books, including leaf, Apple Books, Google Play Books, Documents by Readdle, Kindle, and Kobo.',
  canonical: 'https://readleaf.co/guides/best-epub-reader-apps-iphone',
}).replace(
  /<div id="root">[\s\S]*?<\/div>\s*<\/body>/,
  bestEpubReaderAppsStaticHtml + '\n  </body>'
);
fs.writeFileSync(path.join(guidesDir, 'best-epub-reader-apps-iphone.html'), bestEpubReaderAppsHtml);

const bestClassicsAppsHtml = setSeo(homeHtml, {
  title: 'Best Apps and Sources for Reading Classics on iPhone in 2026 | leaf',
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
