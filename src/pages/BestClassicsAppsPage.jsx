import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const appRows = [
  {
    name: 'leaf',
    category: 'Best for vertical-swipe reading, free classics, and your own files',
    href: 'https://apps.apple.com/app/leaf-ebook-reader/id6758810936',
    access: 'Standard Ebooks, Project Gutenberg, EPUB/PDF/Markdown imports',
    bestUse: 'Reading classics with vertical swipes and built-in public-domain discovery',
    tradeoff: 'Not a large commercial bookstore',
  },
  {
    name: 'Standard Ebooks',
    category: 'Best for polished public-domain editions on the web',
    href: 'https://standardebooks.org/',
    access: 'Curated public-domain ebooks',
    bestUse: 'Downloading well-formatted classics',
    tradeoff: 'A library/source, not a full iPhone reading app',
  },
  {
    name: 'Project Gutenberg',
    category: 'Best for the largest free public-domain library',
    href: 'https://www.gutenberg.org/',
    access: '75,000+ free ebooks',
    bestUse: 'Finding public-domain texts, including obscure works',
    tradeoff: 'Edition quality and formatting vary',
  },
  {
    name: 'Libby',
    category: 'Best for borrowing classics from a public library',
    href: 'https://apps.apple.com/us/app/libby-the-library-app/id1076402606',
    access: 'Library ebooks, audiobooks, and magazines',
    bestUse: 'Borrowing free editions with a participating library card',
    tradeoff: 'Availability depends on your library',
  },
  {
    name: 'Apple Books',
    category: "Best for buying modern or annotated editions in Apple's ecosystem",
    href: 'https://www.apple.com/apple-books/',
    access: 'Apple Books Store, EPUB, PDF',
    bestUse: 'Buying polished editions and reading across Apple devices',
    tradeoff: 'Mostly a store-led experience',
  },
  {
    name: 'Kindle',
    category: 'Best for Amazon purchases, Kindle devices, and annotated editions',
    href: 'https://apps.apple.com/us/app/amazon-kindle/id302584613?l=en&platform=iphone',
    access: 'Kindle Store, Kindle Unlimited, personal documents',
    bestUse: 'Reading Amazon editions or syncing with Kindle hardware',
    tradeoff: "Best when you already use Amazon's book ecosystem",
  },
  {
    name: 'Kobo Books',
    category: 'Best for Kobo readers and Kobo store users',
    href: 'https://www.kobo.com/us/en/p/apps',
    access: 'Kobo Store and Kobo account sync',
    bestUse: 'Reading Kobo purchases on iPhone and Kobo devices',
    tradeoff: "Most useful inside Kobo's ecosystem",
  },
]

const appWriteups = [
  {
    name: 'leaf',
    category: 'Best for vertical-swipe reading, free classics, and your own files',
    href: 'https://apps.apple.com/app/leaf-ebook-reader/id6758810936',
    body:
      'leaf is a good fit for readers who want classic literature to feel natural on an iPhone. It is built around vertical swipes and the reading session rather than a store feed, so it works well for public-domain books, imported files, and readers who want fewer distractions around the text.',
    details:
      'Its curated Explore tab brings together Standard Ebooks and Project Gutenberg discovery/import. It also supports EPUB, PDF, and Markdown imports, reading journals, highlights, notes, passage and completion share cards, themes, fonts, custom TTF/OTF fonts with leaf Pro, optional leaf Pro sync, and iCloud Book Vault.',
    tradeoff:
      'The tradeoff is that leaf is not trying to replace a giant commercial bookstore. It is strongest when you want a vertical-swipe reading environment and already care about classics, imports, or free public-domain editions.',
  },
  {
    name: 'Standard Ebooks',
    category: 'Best for polished public-domain editions on the web',
    href: 'https://standardebooks.org/',
    body:
      'Standard Ebooks is one of the best places to get carefully prepared public-domain classics. Its editions are usually cleaner and more book-like than raw public-domain files, with better typography and metadata.',
    details:
      'Use it when you want a polished EPUB of a classic, then read that file in an app that supports imports. It pairs naturally with readers such as leaf or other EPUB-compatible apps.',
    tradeoff:
      'The tradeoff is that Standard Ebooks is a source library rather than a complete reading app with sync, journals, or iPhone reading controls.',
  },
  {
    name: 'Project Gutenberg',
    category: 'Best for the largest free public-domain library',
    href: 'https://www.gutenberg.org/',
    body:
      'Project Gutenberg is the broadest source for free public-domain ebooks. It is especially useful when you are looking for older, obscure, or less commercially available works.',
    details:
      'Its catalogue is much larger than most curated collections, and many books can be read online or downloaded in common formats. For classics readers, it is often the place to search first when a title is hard to find elsewhere.',
    tradeoff:
      'The tradeoff is consistency. Formatting, covers, metadata, and edition polish can vary, so some readers may prefer Standard Ebooks when a polished edition is available.',
  },
  {
    name: 'Libby',
    category: 'Best for borrowing classics from a public library',
    href: 'https://apps.apple.com/us/app/libby-the-library-app/id1076402606',
    body:
      'Libby is useful when your public library has the classics you want in ebook or audiobook form. It is especially strong for readers who prefer borrowing instead of buying.',
    details:
      'The app supports library loans, holds, offline downloads, tags, bookmarks, notes, highlights, and audiobook playback. Many libraries carry modern translations, annotated editions, and audiobook versions of major classics.',
    tradeoff:
      'The tradeoff is availability. Your catalogue, wait times, and loan rules depend entirely on your participating library system.',
  },
  {
    name: 'Apple Books',
    category: "Best for buying modern or annotated editions in Apple's ecosystem",
    href: 'https://www.apple.com/apple-books/',
    body:
      'Apple Books is a convenient choice when you want a polished commercial edition of a classic, especially if you already read across iPhone, iPad, and Mac.',
    details:
      'It is useful for buying modern translations, annotated editions, illustrated editions, and audiobooks. It can also handle EPUB and PDF files for simpler import workflows.',
    tradeoff:
      "The tradeoff is that the experience is centered around Apple's store and iCloud, not around public-domain discovery or a specialized classics-reading workflow.",
  },
  {
    name: 'Kindle',
    category: 'Best for Amazon purchases, Kindle devices, and annotated editions',
    href: 'https://apps.apple.com/us/app/amazon-kindle/id302584613?l=en&platform=iphone',
    body:
      'Kindle makes sense if you already buy books from Amazon or read on Kindle hardware. For classics, it is useful for inexpensive editions, annotated editions, translations, and books you want synced between iPhone and a Kindle device.',
    details:
      'The Kindle app is also practical for readers who already use Kindle Unlimited, Amazon samples, or Amazon personal documents. Its biggest advantage is ecosystem reach.',
    tradeoff:
      "The tradeoff is that it works best when your library is managed through Amazon, and buying Kindle books on iPhone usually involves Amazon's web store rather than in-app purchasing.",
  },
  {
    name: 'Kobo Books',
    category: 'Best for Kobo readers and Kobo store users',
    href: 'https://www.kobo.com/us/en/p/apps',
    body:
      "Kobo Books is worth considering if you prefer Kobo's store or own a Kobo e-reader. For classics, it gives you another commercial source for editions, translations, and audiobooks.",
    details:
      'It is most useful when Kobo is already your reading ecosystem, because purchases and reading progress can fit into your Kobo account and devices.',
    tradeoff:
      'The tradeoff is that externally managed files may not behave like Kobo purchases across every device and workflow.',
  },
]

const faqItems = [
  {
    q: 'What is the best app or source for reading classics on iPhone?',
    a: 'The best choice depends on how you get your books. leaf is useful as a vertical-swipe reading app for imported files and free classics from Standard Ebooks and Project Gutenberg. Standard Ebooks and Project Gutenberg are sources for public-domain books. Libby is best for library borrowing. Apple Books, Kindle, and Kobo are better when you want to buy modern, annotated, or ecosystem-specific editions.',
  },
  {
    q: 'Where can I read classic books for free on iPhone?',
    a: 'Project Gutenberg and Standard Ebooks are strong sources for free public-domain classics. Libby can also be free with a participating library card. leaf can help readers discover and import Standard Ebooks and Project Gutenberg classics inside a dedicated iPhone reading app.',
  },
  {
    q: 'Is Standard Ebooks better than Project Gutenberg?',
    a: 'Standard Ebooks is usually better when you want a polished, carefully formatted edition and the title is available there. Project Gutenberg is better when you want the largest catalogue and need to find less common public-domain works.',
  },
  {
    q: 'Can I import classic EPUB files into an iPhone reading app?',
    a: 'Yes. Several iPhone reading apps can open EPUB files. leaf is designed for imported books and supports EPUB, PDF, and Markdown files; Apple Books and Google Play Books can also support EPUB workflows depending on how you manage your files.',
  },
]

const visualCards = [
  { name: 'leaf', href: 'https://apps.apple.com/app/leaf-ebook-reader/id6758810936', label: 'App', summary: 'Vertical-swipe iPhone reading, imports, and free classics discovery.' },
  { name: 'Standard Ebooks', href: 'https://standardebooks.org/', label: 'Source', summary: 'Polished public-domain editions with clean EPUB files.' },
  { name: 'Project Gutenberg', href: 'https://www.gutenberg.org/', label: 'Source', summary: 'The broadest free public-domain catalogue.' },
  { name: 'Libby', href: 'https://apps.apple.com/us/app/libby-the-library-app/id1076402606', label: 'Library', summary: 'Borrow classics and audiobooks through public libraries.' },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Apps and Sources for Reading Classics on iPhone in 2026',
  description:
    'A balanced guide to the best iPhone apps and sources for reading classic literature, including leaf, Standard Ebooks, Project Gutenberg, Libby, Apple Books, Kindle, and Kobo.',
  datePublished: '2026-05-23',
  dateModified: '2026-05-23',
  author: { '@type': 'Organization', name: 'leaf', alternateName: 'leaf: eBook Reader', url: 'https://readleaf.co/' },
  publisher: { '@type': 'Organization', name: 'leaf', alternateName: 'leaf: eBook Reader', url: 'https://readleaf.co/' },
  image: 'https://readleaf.co/screenshots/screenshot-explore-new.png',
  url: 'https://readleaf.co/guides/best-apps-for-reading-classics-iphone',
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
  { label: 'leaf on the App Store', href: 'https://apps.apple.com/app/leaf-ebook-reader/id6758810936' },
  { label: 'Standard Ebooks', href: 'https://standardebooks.org/' },
  { label: 'Project Gutenberg', href: 'https://www.gutenberg.org/' },
  { label: 'Libby on the App Store', href: 'https://apps.apple.com/us/app/libby-the-library-app/id1076402606' },
  { label: 'Apple Books', href: 'https://www.apple.com/apple-books/' },
  { label: 'Amazon Kindle app guide', href: 'https://www.aboutamazon.com/news/devices/kindle-app-guide' },
  { label: 'Kobo apps', href: 'https://www.kobo.com/us/en/p/apps' },
]

const textStyle = {
  fontFamily: 'var(--font-sans)',
  fontSize: '1rem',
  lineHeight: 1.8,
  color: 'var(--color-ink-light)',
}

export default function BestClassicsAppsPage() {
  useEffect(() => {
    document.title = 'Best Apps and Sources for Reading Classics on iPhone in 2026 | leaf'

    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      document.head.appendChild(metaDescription)
    }
    metaDescription.content =
      'A balanced guide to the best iPhone apps and sources for reading classic literature, including leaf, Standard Ebooks, Project Gutenberg, Libby, Apple Books, Kindle, and Kobo.'

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = 'https://readleaf.co/guides/best-apps-for-reading-classics-iphone'

    const schemas = [
      { id: 'best-classics-apps-article-schema', data: articleSchema },
      { id: 'best-classics-apps-faq-schema', data: faqSchema },
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
          Guide - Updated May 2026
        </p>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.25rem, 5vw, 3.6rem)', lineHeight: 1.15, marginBottom: 'var(--space-6)' }}>
          Best Apps and Sources for Reading Classics on iPhone in 2026
        </h1>
        <p style={{ ...textStyle, fontSize: '1.125rem' }}>
          A practical guide to reading classic literature on iPhone, whether you want free public-domain books, polished editions, library loans, or a vertical-swipe app for your own files.
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
              Classics on iPhone
            </p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.18, marginBottom: 'var(--space-4)' }}>
              A good classics setup starts with the source.
            </h2>
            <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
              The best experience usually combines a reliable public-domain source with a reading app that makes long books comfortable on a phone.
            </p>
            <p style={{ ...textStyle, margin: 0 }}>
              That is why this guide separates sources such as Standard Ebooks and Project Gutenberg from apps such as leaf, Libby, Apple Books, Kindle, and Kobo.
            </p>
          </div>
          <figure style={{ margin: 0, justifySelf: 'center', width: 'min(100%, 320px)' }}>
            <div style={{ background: '#1c1c1e', borderRadius: '2.6rem', padding: '10px', filter: 'drop-shadow(0 24px 52px rgba(0,0,0,0.2))' }}>
              <div style={{ borderRadius: '2.15rem', overflow: 'hidden', position: 'relative', background: '#fff' }}>
                <div style={{ position: 'absolute', top: '8px', left: '50%', transform: 'translateX(-50%)', width: '72px', height: '22px', background: '#1c1c1e', borderRadius: '12px', zIndex: 1 }} aria-hidden="true" />
                <img
                  src="/screenshots/screenshot-explore-new.png"
                  alt="leaf Explore screen showing a collection of classic books"
                  width="300"
                  height="650"
                  loading="eager"
                  style={{ display: 'block', width: '100%', height: 'auto' }}
                />
              </div>
            </div>
            <figcaption style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--color-ink-light)', lineHeight: 1.6, marginTop: 'var(--space-3)', textAlign: 'center' }}>
              leaf's Explore screen is one way to discover public-domain classics from inside a reading app.
            </figcaption>
          </figure>
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: 'var(--space-4)', marginBottom: 'var(--space-12)' }}>
          <div style={{ background: 'rgba(255,255,255,0.5)', border: '1px solid rgba(43,43,43,0.08)', borderRadius: '8px', padding: 'var(--space-5)' }}>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-accent)', marginBottom: 'var(--space-3)', fontWeight: 600 }}>
              Quick verdict
            </p>
            <p style={{ ...textStyle, margin: 0 }}>
              Choose <strong style={{ color: 'var(--color-ink)' }}>leaf</strong> for vertical-swipe reading, free classics, and imported files; <strong style={{ color: 'var(--color-ink)' }}>Standard Ebooks</strong> for polished public-domain EPUBs; <strong style={{ color: 'var(--color-ink)' }}>Project Gutenberg</strong> for the largest free catalogue; <strong style={{ color: 'var(--color-ink)' }}>Libby</strong> for library borrowing; and Apple Books, Kindle, or Kobo when you want commercial or annotated editions.
            </p>
          </div>
        </section>

        <section style={{ marginBottom: 'var(--space-12)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: 'var(--space-4)' }}>
            How to Choose a Classics Reading App
          </h2>
          <p style={textStyle}>
            Classic literature has a different set of tradeoffs from new-release fiction. Many titles are free in the public domain, but edition quality varies. Some readers want the cleanest free EPUB. Others want notes, translations, audiobooks, library loans, or a vertical-swipe place to read long works on a phone.
          </p>
          <p style={textStyle}>
            For this guide, we evaluated each option on public-domain access, edition quality, import support, reading comfort, annotations, library borrowing, ecosystem sync, and whether the app or source is better for reading, buying, borrowing, or downloading classics.
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
                  <th style={{ textAlign: 'left', padding: 'var(--space-3)', color: 'var(--color-ink)' }}>App or Source</th>
                  <th style={{ textAlign: 'left', padding: 'var(--space-3)', color: 'var(--color-ink)' }}>Category</th>
                  <th style={{ textAlign: 'left', padding: 'var(--space-3)', color: 'var(--color-ink)' }}>Access</th>
                  <th style={{ textAlign: 'left', padding: 'var(--space-3)', color: 'var(--color-ink)' }}>Best Use</th>
                  <th style={{ textAlign: 'left', padding: 'var(--space-3)', color: 'var(--color-ink)' }}>Tradeoff</th>
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
                    <td style={{ padding: 'var(--space-3)', color: 'var(--color-ink-light)' }}>{row.access}</td>
                    <td style={{ padding: 'var(--space-3)', color: 'var(--color-ink-light)' }}>{row.bestUse}</td>
                    <td style={{ padding: 'var(--space-3)', color: 'var(--color-ink-light)' }}>{row.tradeoff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: 'var(--space-12)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: 'var(--space-5)' }}>
            App and Source Guide
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
            If your priority is free legal reading more broadly, read our guide to the <Link to="/guides/best-free-ebook-apps-iphone" style={{ color: 'var(--color-accent)' }}>best free eBook apps and sources for iPhone</Link>.
          </p>
          <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
            For a practical download workflow, read our guide to <Link to="/guides/how-to-read-project-gutenberg-books-on-iphone" style={{ color: 'var(--color-accent)' }}>reading Project Gutenberg books on iPhone</Link>.
          </p>
          <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
            If you download classics as EPUB files, see our guide to the <Link to="/guides/best-epub-reader-apps-iphone" style={{ color: 'var(--color-accent)' }}>best EPUB reader apps for iPhone</Link>.
          </p>
          <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
            For the import steps, read our guide to <Link to="/guides/how-to-read-epub-files-on-iphone" style={{ color: 'var(--color-accent)' }}>reading EPUB files on iPhone</Link>.
          </p>
          <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
            For a broader app comparison, read our guide to the <Link to="/guides/best-ebook-reader-apps-iphone" style={{ color: 'var(--color-accent)' }}>best eBook reader apps for iPhone</Link>.
          </p>
          <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
            If your priority is focus and minimal interface noise, see our guide to <Link to="/guides/best-minimalist-reading-apps-2026" style={{ color: 'var(--color-accent)' }}>minimalist reading apps for iPhone</Link>.
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
