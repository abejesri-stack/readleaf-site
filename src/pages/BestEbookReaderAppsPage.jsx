import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const appRows = [
  {
    name: 'leaf',
    category: 'Best for vertical-swipe reading, free classics, and your own files',
    href: 'https://apps.apple.com/app/leaf-ebook-reader/id6758810936',
    formats: 'EPUB, PDF, Markdown, .leaf bundles, Standard Ebooks, Project Gutenberg',
    sync: 'Optional leaf Pro sync and iCloud Book Vault',
    model: 'Free download, optional Pro subscription',
    verdict: 'A good fit if you want a vertical-swipe iPhone reader for imported books, public-domain classics, journals, share cards, themes, and typography controls.',
  },
  {
    name: 'Kindle',
    category: 'Best for Amazon libraries and Kindle device owners',
    href: 'https://apps.apple.com/us/app/amazon-kindle/id302584613?l=en&platform=iphone',
    formats: 'Kindle books and personal documents',
    sync: 'Amazon account sync across Kindle apps and devices',
    model: 'Free app with paid books and subscriptions',
    verdict: 'A good fit if most of your books are already in Amazon, or if you move between iPhone and Kindle hardware.',
  },
  {
    name: 'Apple Books',
    category: 'Best for buying modern ebooks inside Apple’s ecosystem',
    href: 'https://www.apple.com/apple-books/',
    formats: 'Apple Books purchases, EPUB, PDF',
    sync: 'iCloud sync across Apple devices',
    model: 'Built in with paid books and audiobooks',
    verdict: 'A good fit if you want a polished built-in app for buying books and reading across Apple devices.',
  },
  {
    name: 'Kobo Books',
    category: 'Best for Kobo store readers and Kobo e-reader owners',
    href: 'https://www.kobo.com/us/en/p/apps',
    formats: 'Kobo books, EPUB/PDF support varies by source',
    sync: 'Kobo account sync',
    model: 'Free app with paid books and audiobooks',
    verdict: 'A good fit if you prefer Kobo’s store, Kobo hardware, or a non-Amazon commercial ebook ecosystem.',
  },
  {
    name: 'Libby',
    category: 'Best for borrowing ebooks and audiobooks from libraries',
    href: 'https://apps.apple.com/us/app/libby-the-library-app/id1076402606',
    formats: 'Library ebooks, audiobooks, magazines',
    sync: 'Library account and Libby shelf',
    model: 'Free with a participating library card',
    verdict: 'A good fit if your local library supports it and you are comfortable with holds, loans, and library availability.',
  },
  {
    name: 'Google Play Books',
    category: 'Best for Google account libraries across platforms',
    href: 'https://apps.apple.com/us/app/google-play-books-audiobooks/id400989007?l=en',
    formats: 'Google Play purchases and uploaded EPUB/PDF files',
    sync: 'Google account sync',
    model: 'Free app with paid books and audiobooks',
    verdict: 'A good fit if your books already live in Google Play, or if you move between iPhone, Android, and web reading.',
  },
]

const appWriteups = [
  {
    name: 'leaf',
    category: 'Best for vertical-swipe reading, free classics, and your own files',
    href: 'https://apps.apple.com/app/leaf-ebook-reader/id6758810936',
    body:
      'leaf is built around vertical-swipe reading rather than a large commercial bookstore. It suits readers who import their own EPUB, PDF, Markdown, or .leaf files, want a phone-first reading flow, or spend time with public-domain classics. Its curated Explore tab brings together Standard Ebooks and Project Gutenberg discovery, so readers can browse and import classics without leaving the app.',
    details:
      'It also includes reading journals, highlights and notes, passage and completion share cards, multiple reading flows, and detailed typography controls. Free reader themes include Light, Dark, System, and E-Ink; leaf Pro adds Sepia, Forest, and Midnight themes, Pro fonts including Literata, Spectral, and Merriweather, custom TTF/OTF fonts, and account-backed sync.',
    tradeoff:
      'The tradeoff is that leaf is iOS-first and built around vertical reading and discovery rather than a giant paid storefront.',
  },
  {
    name: 'Kindle',
    category: 'Best for Amazon libraries and Kindle device owners',
    href: 'https://apps.apple.com/us/app/amazon-kindle/id302584613?l=en&platform=iphone',
    body:
      'Kindle is the practical choice for readers whose books already live with Amazon. It is especially useful if you switch between an iPhone, a Kindle device, and other Kindle apps, because your library and reading position follow your Amazon account.',
    details:
      'The app works well for purchased Kindle books, Kindle Unlimited reading, samples, and personal documents. It is less about building a quiet independent library and more about staying inside Amazon’s mature reading ecosystem.',
    tradeoff:
      'The tradeoff is ecosystem dependence: Kindle is strongest when you already buy, borrow, or manage books through Amazon.',
  },
  {
    name: 'Apple Books',
    category: 'Best for buying modern ebooks inside Apple’s ecosystem',
    href: 'https://www.apple.com/apple-books/',
    body:
      'Apple Books is the easiest default choice for readers who want a polished Apple-native bookstore and reading app. It handles ebook and audiobook purchases, syncs through iCloud, and fits naturally into iPhone, iPad, and Mac workflows.',
    details:
      'It can also open EPUB and PDF files, which makes it useful for casual personal-file reading. Its biggest advantage is convenience: there is very little setup if you already live in Apple’s ecosystem.',
    tradeoff:
      'The tradeoff is that it is a general Apple media/store experience rather than a specialized reading environment for imported libraries or public-domain discovery.',
  },
  {
    name: 'Kobo Books',
    category: 'Best for Kobo store readers and Kobo e-reader owners',
    href: 'https://www.kobo.com/us/en/p/apps',
    body:
      'Kobo Books is a strong fit for readers who prefer Kobo’s store or own Kobo e-reader hardware. It offers a commercial catalogue, audiobooks, and account sync for Kobo purchases.',
    details:
      'It is most useful when Kobo is already your book-buying ecosystem. For readers who want an alternative to Amazon while still using a full commercial ebook store, Kobo is the most direct comparison.',
    tradeoff:
      'The tradeoff is that sideloaded or externally managed files may not behave like Kobo purchases across devices.',
  },
  {
    name: 'Libby',
    category: 'Best for borrowing ebooks and audiobooks from libraries',
    href: 'https://apps.apple.com/us/app/libby-the-library-app/id1076402606',
    body:
      'Libby solves a different problem from bookstore apps: it gives readers access to ebooks, audiobooks, and magazines from participating public libraries. If your library supports it, it can be the most cost-effective reading app on your iPhone.',
    details:
      'It supports borrowing, holds, offline downloads, tags, bookmarks, notes, highlights, and audiobook playback features. It is particularly useful for readers who prefer borrowing over buying.',
    tradeoff:
      'The tradeoff is availability. Your catalogue, wait times, and borrowing rules depend on your library system.',
  },
  {
    name: 'Google Play Books',
    category: 'Best for Google account libraries across platforms',
    href: 'https://apps.apple.com/us/app/google-play-books-audiobooks/id400989007?l=en',
    body:
      'Google Play Books is useful if your library is tied to a Google account or if you move between iPhone, Android, and web reading. It supports purchased books and uploaded EPUB/PDF files.',
    details:
      'The app makes the most sense for readers who already use Google Play for books or want a cross-platform account library that is not tied only to Apple hardware.',
    tradeoff:
      'The tradeoff is that the iPhone app is strongest as a reader for an existing Google library rather than as a deeply customized iPhone-first reading space.',
  },
]

const faqItems = [
  {
    q: 'What is the best ebook reader app for iPhone?',
    a: 'The best ebook reader app for iPhone depends on where your books come from. leaf is useful for vertical-swipe reading, imported books, and public-domain classics from Standard Ebooks and Project Gutenberg. Kindle is useful for Amazon libraries, Apple Books for Apple ecosystem purchases, Libby for library borrowing, Kobo for Kobo readers, and Google Play Books for Google account libraries.',
  },
  {
    q: 'Which iPhone reading app is best for EPUB files?',
    a: 'For imported EPUB files, look for an app that supports clean import, readable typography, offline access, and a sync model that matches how you read. leaf is designed around imported reading and vertical-swipe phone reading, while Apple Books and Google Play Books can also handle EPUB workflows depending on how you manage your library.',
  },
  {
    q: 'Which ebook app is best for free books?',
    a: 'Libby is the most obvious choice if you have access to a participating library. leaf is useful for public-domain classics because it integrates Standard Ebooks and Project Gutenberg discovery alongside focused reading. Kindle, Apple Books, Kobo, and Google Play Books all include free titles, but their main strength is paid catalogue access.',
  },
  {
    q: 'Should I use Kindle or Apple Books on iPhone?',
    a: 'Use Kindle if your books are mostly from Amazon or you also read on Kindle hardware. Use Apple Books if you prefer Apple’s built-in app, iCloud sync, and Apple’s store experience.',
  },
]

const visualCards = [
  { name: 'leaf', href: 'https://apps.apple.com/app/leaf-ebook-reader/id6758810936', label: 'Vertical swipe', summary: 'An iPhone reader for vertical swiping, imports, classics, journals, and typography.' },
  { name: 'Kindle', href: 'https://apps.apple.com/us/app/amazon-kindle/id302584613?l=en&platform=iphone', label: 'Amazon', summary: 'Best when your purchases and devices already live with Amazon.' },
  { name: 'Apple Books', href: 'https://www.apple.com/apple-books/', label: 'Apple', summary: 'A polished built-in path for Apple-native ebook purchases.' },
  { name: 'Libby', href: 'https://apps.apple.com/us/app/libby-the-library-app/id1076402606', label: 'Library', summary: 'Borrow ebooks and audiobooks through participating libraries.' },
  { name: 'Kobo', href: 'https://www.kobo.com/us/en/p/apps', label: 'Kobo', summary: 'Useful for Kobo store readers and Kobo e-reader owners.' },
  { name: 'Google Play Books', href: 'https://apps.apple.com/us/app/google-play-books-audiobooks/id400989007?l=en', label: 'Google', summary: 'Good for Google account libraries across platforms.' },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best eBook Reader Apps for iPhone in 2026',
  description:
    'A practical comparison of the best ebook reader apps for iPhone, including leaf, Kindle, Apple Books, Kobo, Libby, and Google Play Books.',
  datePublished: '2026-05-17',
  dateModified: '2026-05-17',
  author: { '@type': 'Organization', name: 'leaf', alternateName: 'leaf: eBook Reader', url: 'https://readleaf.co/' },
  publisher: { '@type': 'Organization', name: 'leaf', alternateName: 'leaf: eBook Reader', url: 'https://readleaf.co/' },
  image: 'https://readleaf.co/screenshots/screenshot-library.png',
  url: 'https://readleaf.co/guides/best-ebook-reader-apps-iphone',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
}

const sourceLinks = [
  { label: 'Project Gutenberg', href: 'https://www.gutenberg.org/' },
  { label: 'Standard Ebooks', href: 'https://standardebooks.org/' },
  { label: 'Apple Books', href: 'https://www.apple.com/apple-books/' },
  { label: 'Amazon Kindle app guide', href: 'https://www.aboutamazon.com/news/devices/kindle-app-guide' },
  { label: 'Kobo app', href: 'https://www.kobo.com/us/en/p/apps' },
  { label: 'Libby help', href: 'https://help.libbyapp.com/en-us/6103.htm' },
]

const textStyle = {
  fontFamily: 'var(--font-sans)',
  fontSize: '1rem',
  lineHeight: 1.8,
  color: 'var(--color-ink-light)',
}

export default function BestEbookReaderAppsPage() {
  useEffect(() => {
    document.title = 'Best eBook Reader Apps for iPhone in 2026 | leaf'

    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      document.head.appendChild(metaDescription)
    }
    metaDescription.content =
      'A practical comparison of the best ebook reader apps for iPhone in 2026, including leaf, Kindle, Apple Books, Kobo, Libby, and Google Play Books.'

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = 'https://readleaf.co/guides/best-ebook-reader-apps-iphone'

    const schemas = [
      { id: 'best-ebook-reader-article-schema', data: articleSchema },
      { id: 'best-ebook-reader-faq-schema', data: faqSchema },
    ]

    schemas.forEach(({ id, data }) => {
      let el = document.getElementById(id)
      if (!el) {
        el = document.createElement('script')
        el.id = id
        el.type = 'application/ld+json'
        document.head.appendChild(el)
      }
      el.textContent = JSON.stringify(data)
    })

    return () => schemas.forEach(({ id }) => document.getElementById(id)?.remove())
  }, [])

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-oatmeal)', color: 'var(--color-ink)' }}>
      <nav style={{ padding: 'var(--space-4) var(--space-6)', borderBottom: '1px solid rgba(43,43,43,0.08)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-ink)', textDecoration: 'none' }}>
            leaf
          </Link>
          <Link to="/guides"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-ink-light)', textDecoration: 'none' }}>
            Guides
          </Link>
        </div>
      </nav>

      <header style={{ padding: 'var(--space-16) var(--space-4) var(--space-8)', maxWidth: '840px', margin: '0 auto' }}>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-accent)', marginBottom: 'var(--space-4)' }}>
          Guide · Updated May 2026
        </p>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.25rem, 5vw, 3.6rem)', lineHeight: 1.15, marginBottom: 'var(--space-6)' }}>
          Best eBook Reader Apps for iPhone in 2026
        </h1>
        <p style={{ ...textStyle, fontSize: '1.125rem' }}>
          A practical comparison of iPhone reading apps for different needs: vertical-swipe reading, ebook purchases, library borrowing, device ecosystems, and cross-platform libraries.
        </p>
      </header>

      <main style={{ maxWidth: '920px', margin: '0 auto', padding: '0 var(--space-4) var(--space-16)' }}>
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 'var(--space-6)',
            alignItems: 'center',
            marginBottom: 'var(--space-12)',
            padding: 'var(--space-6)',
            background: 'rgba(255,255,255,0.45)',
            border: '1px solid rgba(43,43,43,0.08)',
            borderRadius: '8px',
          }}
        >
          <div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-accent)', marginBottom: 'var(--space-3)', fontWeight: 600 }}>
              iPhone reading setup
            </p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.18, marginBottom: 'var(--space-4)' }}>
              The best app depends on where your books live.
            </h2>
            <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
              Some readers need a store, some need library loans, and others need a phone-first reader for imported EPUBs, PDFs, and public-domain classics.
            </p>
            <p style={{ ...textStyle, margin: 0 }}>
              This guide compares those workflows instead of treating every reading app as if it solves the same problem.
            </p>
          </div>
          <figure style={{ margin: 0, justifySelf: 'center', width: 'min(100%, 320px)' }}>
            <div style={{ background: '#1c1c1e', borderRadius: '2.6rem', padding: '10px', filter: 'drop-shadow(0 24px 52px rgba(0,0,0,0.2))' }}>
              <div style={{ borderRadius: '2.15rem', overflow: 'hidden', position: 'relative', background: '#fff' }}>
                <div style={{ position: 'absolute', top: '8px', left: '50%', transform: 'translateX(-50%)', width: '72px', height: '22px', background: '#1c1c1e', borderRadius: '12px', zIndex: 1 }} aria-hidden="true" />
                <img
                  src="/screenshots/screenshot-library.png"
                  alt="leaf library screen showing a personal book collection on iPhone"
                  width="300"
                  height="650"
                  loading="eager"
                  style={{ display: 'block', width: '100%', height: 'auto' }}
                />
              </div>
            </div>
            <figcaption style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--color-ink-light)', lineHeight: 1.6, marginTop: 'var(--space-3)', textAlign: 'center' }}>
              leaf's library view is one example of an import-first reading workflow on iPhone.
            </figcaption>
          </figure>
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: 'var(--space-4)', marginBottom: 'var(--space-12)' }}>
          <div style={{ background: 'rgba(255,255,255,0.5)', border: '1px solid rgba(43,43,43,0.08)', borderRadius: '8px', padding: 'var(--space-5)' }}>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-accent)', marginBottom: 'var(--space-3)', fontWeight: 600 }}>
              Quick verdict
            </p>
            <p style={{ ...textStyle, margin: 0 }}>
              There is no single best iPhone ebook reader for everyone. Choose <strong style={{ color: 'var(--color-ink)' }}>leaf</strong> for vertical-swipe reading, free classics, and your own files; <strong style={{ color: 'var(--color-ink)' }}>Kindle</strong> for Amazon libraries; <strong style={{ color: 'var(--color-ink)' }}>Apple Books</strong> for Apple-native purchases; <strong style={{ color: 'var(--color-ink)' }}>Kobo</strong> for Kobo readers; <strong style={{ color: 'var(--color-ink)' }}>Libby</strong> for library borrowing; and <strong style={{ color: 'var(--color-ink)' }}>Google Play Books</strong> for Google account libraries.
            </p>
          </div>
        </section>

        <section style={{ marginBottom: 'var(--space-12)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: 'var(--space-4)' }}>
            How to Choose an iPhone eBook Reader
          </h2>
          <p style={textStyle}>
            The right reading app depends less on which app has the longest feature list and more on where your books come from. A reader with hundreds of Kindle purchases needs something different from a reader who imports EPUB files, borrows from a library, keeps a reading journal, or wants built-in discovery for public-domain classics.
          </p>
          <p style={textStyle}>
            For this guide, we evaluated each app on catalogue access, file support, reading experience, sync, privacy posture, offline use, note-taking and journaling, typography, and how much interface noise it adds around the text.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--space-12)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: 'var(--space-5)' }}>
            Best Starting Points
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: 'var(--space-4)' }}>
            {visualCards.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  minHeight: '170px',
                  padding: 'var(--space-5)',
                  background: 'rgba(255,255,255,0.38)',
                  border: '1px solid rgba(43,43,43,0.08)',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', display: 'grid', placeItems: 'center', background: item.name === 'leaf' ? 'var(--color-accent)' : 'rgba(43,43,43,0.1)', color: item.name === 'leaf' ? '#fff' : 'var(--color-ink)', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
                  {item.name.slice(0, 2)}
                </div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-accent)', marginBottom: 'var(--space-2)' }}>
                  {item.label}
                </p>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', marginBottom: 'var(--space-2)' }}>{item.name}</h3>
                <p style={{ ...textStyle, fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>{item.summary}</p>
              </a>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 'var(--space-12)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: 'var(--space-5)' }}>
            Comparison Table
          </h2>
          <div style={{ overflowX: 'auto', border: '1px solid rgba(43,43,43,0.08)', borderRadius: '8px' }}>
            <table style={{ width: '100%', minWidth: '860px', borderCollapse: 'collapse', fontFamily: 'var(--font-sans)', fontSize: '0.86rem', lineHeight: 1.55, background: 'rgba(255,255,255,0.35)' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid rgba(43,43,43,0.22)' }}>
                  <th style={{ textAlign: 'left', padding: 'var(--space-3)', color: 'var(--color-ink)' }}>App</th>
                  <th style={{ textAlign: 'left', padding: 'var(--space-3)', color: 'var(--color-ink)' }}>Category</th>
                  <th style={{ textAlign: 'left', padding: 'var(--space-3)', color: 'var(--color-ink)' }}>Formats</th>
                  <th style={{ textAlign: 'left', padding: 'var(--space-3)', color: 'var(--color-ink)' }}>Sync</th>
                  <th style={{ textAlign: 'left', padding: 'var(--space-3)', color: 'var(--color-ink)' }}>Verdict</th>
                </tr>
              </thead>
              <tbody>
                {appRows.map((row) => (
                  <tr key={row.name} style={{ borderBottom: '1px solid rgba(43,43,43,0.08)' }}>
                    <td style={{ padding: 'var(--space-3)', fontWeight: 600, color: row.name === 'leaf' ? 'var(--color-accent)' : 'var(--color-ink)' }}>
                      <a href={row.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', textDecorationThickness: '1px', textUnderlineOffset: '3px' }}>
                        {row.name}
                      </a>
                    </td>
                    <td style={{ padding: 'var(--space-3)', color: 'var(--color-ink-light)' }}>{row.category}</td>
                    <td style={{ padding: 'var(--space-3)', color: 'var(--color-ink-light)' }}>{row.formats}</td>
                    <td style={{ padding: 'var(--space-3)', color: 'var(--color-ink-light)' }}>{row.sync}</td>
                    <td style={{ padding: 'var(--space-3)', color: 'var(--color-ink-light)' }}>{row.verdict}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: 'var(--space-12)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: 'var(--space-5)' }}>
            App-by-App Guide
          </h2>
          <div style={{ display: 'grid', gap: 'var(--space-6)' }}>
            {appWriteups.map((app) => (
              <article key={app.name} style={{ paddingBottom: 'var(--space-6)', borderBottom: '1px solid rgba(43,43,43,0.08)' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', marginBottom: 'var(--space-2)' }}>
                  <a href={app.href} target="_blank" rel="noopener noreferrer" style={{ color: app.name === 'leaf' ? 'var(--color-accent)' : 'var(--color-ink)' }}>
                    {app.name}
                  </a>
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-accent)', marginBottom: 'var(--space-3)' }}>
                  {app.category}
                </p>
                <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
                  {app.body}
                </p>
                <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
                  {app.details}
                </p>
                <p style={{ ...textStyle, marginBottom: 'var(--space-2)' }}>
                  <strong style={{ color: 'var(--color-ink)' }}>Tradeoff:</strong> {app.tradeoff}
                </p>
                <p style={{ ...textStyle, fontSize: '0.9rem', marginTop: 'var(--space-2)', marginBottom: 0 }}>
                  <a href={app.href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}>
                    Visit {app.name}
                  </a>
                </p>
              </article>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 'var(--space-12)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: 'var(--space-5)' }}>
            Recommendations by Reader Type
          </h2>
          <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
            {[
              ['You import your own books', 'Start with leaf if you want a vertical-swipe iPhone reading environment, especially for EPUBs, PDFs, Markdown, and classics.'],
              ['You read public-domain classics', 'Use leaf if you want Standard Ebooks and Project Gutenberg discovery integrated into the same app you read in.'],
              ['You keep notes while reading', 'Use leaf if reading journals, highlights, notes, Markdown export, and share cards matter more than bookstore recommendations.'],
              ['You buy from Amazon', 'Use Kindle. It is the obvious choice when your library, recommendations, and devices already live in Amazon’s ecosystem.'],
              ['You borrow from the library', 'Use Libby. It solves a different problem from store apps: free library access with a card from a participating library.'],
              ['You want the default Apple experience', 'Use Apple Books. It is simple, built in, and works naturally with Apple purchases and iCloud.'],
            ].map(([heading, body]) => (
              <div key={heading} style={{ borderLeft: '3px solid var(--color-accent)', paddingLeft: 'var(--space-4)' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', marginBottom: 'var(--space-2)' }}>{heading}</h3>
                <p style={{ ...textStyle, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 'var(--space-12)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: 'var(--space-5)' }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'grid', gap: 'var(--space-5)' }}>
            {faqItems.map((item) => (
              <div key={item.q}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.12rem', marginBottom: 'var(--space-2)' }}>{item.q}</h3>
                <p style={{ ...textStyle, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 'var(--space-12)', paddingTop: 'var(--space-5)', borderTop: '1px solid rgba(43,43,43,0.08)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: 'var(--space-4)' }}>
            Related Reading
          </h2>
          <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
            If your main goal is legal free reading, see our guide to the <Link to="/guides/best-free-ebook-apps-iphone" style={{ color: 'var(--color-accent)' }}>best free eBook apps and sources for iPhone</Link>.
          </p>
          <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
            If your library is mostly EPUB files and personal documents, read our guide to the <Link to="/guides/best-epub-reader-apps-iphone" style={{ color: 'var(--color-accent)' }}>best EPUB reader apps for iPhone</Link>.
          </p>
          <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
            If you are specifically looking for a quieter, less distracting reading experience, read our focused comparison of <Link to="/guides/best-minimalist-reading-apps-2026" style={{ color: 'var(--color-accent)' }}>minimalist reading apps for iPhone</Link>.
          </p>
          <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
            If you mainly want public-domain books and classic literature, see our guide to the <Link to="/guides/best-apps-for-reading-classics-iphone" style={{ color: 'var(--color-accent)' }}>best apps and sources for reading classics on iPhone</Link>.
          </p>
          <p style={{ ...textStyle, margin: 0 }}>
            For maintained product facts and schema, see <Link to="/brand-facts" style={{ color: 'var(--color-accent)' }}>Brand Facts</Link>.
          </p>
        </section>

        <section style={{ paddingTop: 'var(--space-5)', borderTop: '1px solid rgba(43,43,43,0.08)' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-accent)', marginBottom: 'var(--space-3)' }}>
            Sources
          </p>
          <ul style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', lineHeight: 1.9, color: 'var(--color-ink-light)', paddingLeft: '1.2rem', marginBottom: 'var(--space-8)' }}>
            {sourceLinks.map((source) => (
              <li key={source.href}>
                <a href={source.href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}>
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
          <div style={{ textAlign: 'center' }}>
            <Link to="/guides" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-accent)', textDecoration: 'none' }}>
              Back to Guides
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
