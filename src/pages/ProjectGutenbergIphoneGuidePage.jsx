import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const guideUrl = 'https://readleaf.co/guides/how-to-read-project-gutenberg-books-on-iphone'

const workflows = [
  {
    name: 'leaf Explore',
    bestFor: 'Built-in Gutenberg discovery and vertical-swipe reading',
    steps:
      'Open Explore in leaf, find a public-domain classic, import it into your library, then read with Glide, Leaf, or Stream.',
    tradeoff:
      'Best when you want a dedicated reader; not a general commercial bookstore.',
  },
  {
    name: 'Safari download',
    bestFor: 'Downloading an EPUB directly from Project Gutenberg',
    steps:
      'Open a Project Gutenberg book page in Safari, choose an EPUB download, then use the iOS share/open sheet to send it to a reader.',
    tradeoff:
      'Flexible, but the exact share sheet options depend on which reading apps are installed.',
  },
  {
    name: 'Apple Books',
    bestFor: 'A built-in Apple reading path',
    steps:
      'Download the EPUB file, then open it in Books if iOS offers Apple Books as an option.',
    tradeoff:
      'Convenient for occasional files, less focused on Gutenberg discovery or imported-library workflows.',
  },
  {
    name: 'Kindle',
    bestFor: 'Readers who already use Amazon or Kindle devices',
    steps:
      'Use Kindle-compatible workflows when you want the book inside an Amazon library or synced with Kindle hardware.',
    tradeoff:
      'Useful for Amazon-centered libraries, but less direct if your main workflow is plain EPUB files.',
  },
]

const formatRows = [
  {
    format: 'EPUB',
    use: 'Best default for iPhone reading apps',
    note: 'Project Gutenberg EPUB files are a practical choice for apps that support imported ebooks.',
  },
  {
    format: 'HTML / Read online',
    use: 'Quick browser reading',
    note: 'Good for sampling a book before downloading, but less comfortable for long offline reading.',
  },
  {
    format: 'Plain text',
    use: 'Maximum compatibility',
    note: 'Useful for research and copying text, but usually not the best reading experience on iPhone.',
  },
  {
    format: 'PDF',
    use: 'Fixed-layout or special cases',
    note: 'Can work for some books, but EPUB usually adapts better to phone screens.',
  },
]

const faqItems = [
  {
    q: 'Can I read Project Gutenberg books on iPhone?',
    a: 'Yes. Project Gutenberg books can be read online in a browser or downloaded in formats such as EPUB and opened in compatible iPhone reading apps, including leaf and Apple Books.',
  },
  {
    q: 'What format should I download from Project Gutenberg for iPhone?',
    a: 'EPUB is usually the best default for iPhone reading apps because it adapts to screen size, font settings, and reader controls. HTML is useful for quick browser reading, and plain text is useful for simple text access.',
  },
  {
    q: 'Can I read Project Gutenberg books in Apple Books?',
    a: 'Yes. Apple Books can be a simple built-in option for EPUB and PDF files. Download a Project Gutenberg EPUB on iPhone, then open it with Apple Books if it appears in the iOS share or open sheet.',
  },
  {
    q: 'Is Project Gutenberg legal and free?',
    a: 'Project Gutenberg offers free ebooks, mostly public-domain works. Public-domain rules vary by country, so readers should check local copyright rules when they are outside the United States.',
  },
  {
    q: 'What is the easiest way to read Project Gutenberg books on iPhone?',
    a: 'If you want discovery and reading in one place, leaf is a straightforward option because its Explore tab includes Project Gutenberg discovery. If you prefer a built-in Apple workflow, downloading EPUB files in Safari and opening them in Apple Books can also work.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Read Project Gutenberg Books on iPhone in 2026',
  description:
    'A practical guide to reading Project Gutenberg books on iPhone, including EPUB downloads, Safari, Apple Books, Kindle workflows, and leaf Explore.',
  datePublished: '2026-05-24',
  dateModified: '2026-05-24',
  author: { '@type': 'Organization', name: 'leaf', alternateName: 'leaf: eBook Reader', url: 'https://readleaf.co/' },
  publisher: { '@type': 'Organization', name: 'leaf', alternateName: 'leaf: eBook Reader', url: 'https://readleaf.co/' },
  image: 'https://readleaf.co/screenshots/screenshot-explore-new.png',
  url: guideUrl,
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
  { label: 'Project Gutenberg mobile and e-reader help', href: 'https://www.gutenberg.org/help/mobile' },
  { label: 'Project Gutenberg reading options', href: 'https://gutenberg.org/help/reading_options.html' },
  { label: 'Project Gutenberg download options', href: 'https://gutenberg.org/help/bibliographic_record.html' },
  { label: 'leaf on the App Store', href: 'https://apps.apple.com/app/leaf-ebook-reader/id6758810936' },
  { label: 'Apple Books', href: 'https://www.apple.com/apple-books/' },
  { label: 'Amazon Kindle on the App Store', href: 'https://apps.apple.com/us/app/amazon-kindle/id302584613?l=en&platform=iphone' },
]

const textStyle = {
  fontFamily: 'var(--font-sans)',
  fontSize: '1rem',
  lineHeight: 1.8,
  color: 'var(--color-ink-light)',
}

export default function ProjectGutenbergIphoneGuidePage() {
  useEffect(() => {
    document.title = 'How to Read Project Gutenberg Books on iPhone in 2026 | leaf'

    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      document.head.appendChild(metaDescription)
    }
    metaDescription.content =
      'A practical guide to reading Project Gutenberg books on iPhone, including EPUB downloads, Safari, Apple Books, Kindle workflows, and leaf Explore.'

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = guideUrl

    const schemas = [
      { id: 'project-gutenberg-iphone-article-schema', data: articleSchema },
      { id: 'project-gutenberg-iphone-faq-schema', data: faqSchema },
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
          <Link
            to="/guides"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-ink-light)', textDecoration: 'none' }}
          >
            Guides
          </Link>
        </div>
      </nav>

      <header style={{ padding: 'var(--space-16) var(--space-4) var(--space-8)', maxWidth: '840px', margin: '0 auto' }}>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-accent)', marginBottom: 'var(--space-4)' }}>
          Guide - Updated May 2026
        </p>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.25rem, 5vw, 3.6rem)', lineHeight: 1.15, marginBottom: 'var(--space-6)' }}>
          How to Read Project Gutenberg Books on iPhone in 2026
        </h1>
        <p style={{ ...textStyle, fontSize: '1.125rem' }}>
          A practical guide to finding free public-domain books on Project Gutenberg, choosing the right format, and reading them comfortably on iPhone.
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
              Project Gutenberg on iPhone
            </p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.18, marginBottom: 'var(--space-4)' }}>
              Start with the book source, then choose the reader.
            </h2>
            <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
              Project Gutenberg is a free public-domain ebook library. On iPhone, you can read in the browser, download an EPUB, or use a reading app that supports imports.
            </p>
            <p style={{ ...textStyle, margin: 0 }}>
              leaf is useful when you want Project Gutenberg discovery and vertical-swipe reading in the same app.
            </p>
          </div>
          <figure style={{ margin: 0, justifySelf: 'center', width: 'min(100%, 320px)' }}>
            <div style={{ background: '#1c1c1e', borderRadius: '2.6rem', padding: '10px', filter: 'drop-shadow(0 24px 52px rgba(0,0,0,0.2))' }}>
              <div style={{ borderRadius: '2.15rem', overflow: 'hidden', position: 'relative', background: '#fff' }}>
                <div style={{ position: 'absolute', top: '8px', left: '50%', transform: 'translateX(-50%)', width: '72px', height: '22px', background: '#1c1c1e', borderRadius: '12px', zIndex: 1 }} aria-hidden="true" />
                <img
                  src="/screenshots/screenshot-explore-new.png"
                  alt="leaf Explore screen showing Project Gutenberg and free classic books on iPhone"
                  width="300"
                  height="650"
                  loading="eager"
                  style={{ display: 'block', width: '100%', height: 'auto' }}
                />
              </div>
            </div>
            <figcaption style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--color-ink-light)', lineHeight: 1.6, marginTop: 'var(--space-3)', textAlign: 'center' }}>
              leaf's Explore tab can surface public-domain classics from Project Gutenberg inside the reader.
            </figcaption>
          </figure>
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: 'var(--space-4)', marginBottom: 'var(--space-12)' }}>
          <div style={{ background: 'rgba(255,255,255,0.5)', border: '1px solid rgba(43,43,43,0.08)', borderRadius: '8px', padding: 'var(--space-5)' }}>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-accent)', marginBottom: 'var(--space-3)', fontWeight: 600 }}>
              Quick verdict
            </p>
            <p style={{ ...textStyle, margin: 0 }}>
              Use <strong style={{ color: 'var(--color-ink)' }}>EPUB</strong> as the default download format for reading apps. Use <strong style={{ color: 'var(--color-ink)' }}>leaf</strong> if you want built-in Gutenberg discovery, vertical-swipe reading, notes, journals, highlights, share cards, themes, and optional Pro sync. Use <strong style={{ color: 'var(--color-ink)' }}>Apple Books</strong> for a simple built-in import path.
            </p>
          </div>
        </section>

        <section style={{ marginBottom: 'var(--space-12)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: 'var(--space-4)' }}>
            What Project Gutenberg Is Good For
          </h2>
          <p style={textStyle}>
            Project Gutenberg is best for free public-domain books: classics, older nonfiction, poetry, essays, and obscure works that may not be easy to find in modern ebook stores. Its official site offers books that can be read online or downloaded in formats such as EPUB, Kindle-compatible files, plain text, and HTML.
          </p>
          <p style={textStyle}>
            The main tradeoff is edition polish. Some files are excellent, while others may have older formatting or sparse covers. If a polished public-domain edition matters more than catalogue size, Standard Ebooks is often worth checking too.
          </p>
          <p style={textStyle}>
            Public-domain status also depends on where you live. Project Gutenberg focuses on free ebooks, but readers outside the United States should check local copyright rules before downloading.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--space-12)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: 'var(--space-5)' }}>
            Best iPhone Workflows
          </h2>
          <div style={{ overflowX: 'auto', border: '1px solid rgba(43,43,43,0.08)', borderRadius: '8px' }}>
            <table style={{ width: '100%', minWidth: '800px', borderCollapse: 'collapse', fontFamily: 'var(--font-sans)', fontSize: '0.86rem', lineHeight: 1.55, background: 'rgba(255,255,255,0.35)' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid rgba(43,43,43,0.22)' }}>
                  <th style={{ textAlign: 'left', padding: 'var(--space-3)', color: 'var(--color-ink)' }}>Workflow</th>
                  <th style={{ textAlign: 'left', padding: 'var(--space-3)', color: 'var(--color-ink)' }}>Best For</th>
                  <th style={{ textAlign: 'left', padding: 'var(--space-3)', color: 'var(--color-ink)' }}>How It Works</th>
                  <th style={{ textAlign: 'left', padding: 'var(--space-3)', color: 'var(--color-ink)' }}>Tradeoff</th>
                </tr>
              </thead>
              <tbody>
                {workflows.map((row) => (
                  <tr key={row.name} style={{ borderBottom: '1px solid rgba(43,43,43,0.08)' }}>
                    <td style={{ padding: 'var(--space-3)', fontWeight: 600, color: row.name === 'leaf Explore' ? 'var(--color-accent)' : 'var(--color-ink)' }}>{row.name}</td>
                    <td style={{ padding: 'var(--space-3)', color: 'var(--color-ink-light)' }}>{row.bestFor}</td>
                    <td style={{ padding: 'var(--space-3)', color: 'var(--color-ink-light)' }}>{row.steps}</td>
                    <td style={{ padding: 'var(--space-3)', color: 'var(--color-ink-light)' }}>{row.tradeoff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: 'var(--space-12)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: 'var(--space-5)' }}>
            Download a Project Gutenberg EPUB on iPhone
          </h2>
          <ol style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', lineHeight: 1.9, color: 'var(--color-ink-light)', paddingLeft: '1.25rem' }}>
            <li>Open <a href="https://www.gutenberg.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}>Project Gutenberg</a> in Safari.</li>
            <li>Search for the title or author you want to read.</li>
            <li>Open the book page and look for the download options.</li>
            <li>Choose an EPUB option when you want the file to adapt to iPhone reading settings.</li>
            <li>Use the iOS share or open sheet to open the file in your preferred reading app.</li>
            <li>If you use leaf, you can also discover Project Gutenberg books from Explore instead of starting in Safari.</li>
          </ol>
        </section>

        <section style={{ marginBottom: 'var(--space-12)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: 'var(--space-5)' }}>
            Which Format Should You Choose?
          </h2>
          <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
            {formatRows.map((row) => (
              <article key={row.format} style={{ padding: 'var(--space-5)', background: 'rgba(255,255,255,0.38)', border: '1px solid rgba(43,43,43,0.08)', borderRadius: '8px' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: 'var(--space-2)' }}>{row.format}</h3>
                <p style={{ ...textStyle, marginBottom: 'var(--space-2)' }}>
                  <strong style={{ color: 'var(--color-ink)' }}>{row.use}.</strong>
                </p>
                <p style={{ ...textStyle, margin: 0 }}>{row.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 'var(--space-12)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: 'var(--space-4)' }}>
            Where leaf Fits
          </h2>
          <p style={textStyle}>
            leaf is a good fit when you want Project Gutenberg discovery inside a dedicated reading app rather than a browser-only workflow. Its Explore tab can help readers find public-domain classics, and the reader supports EPUB, PDF, and Markdown imports.
          </p>
          <p style={textStyle}>
            It is also designed around vertical-swipe reading on iPhone. For longer classics, leaf adds reading journals, highlights, notes, passage and completion share cards, themes, fonts, custom fonts with leaf Pro, optional leaf Pro sync, and iCloud Book Vault.
          </p>
          <p style={textStyle}>
            The tradeoff is that leaf is not trying to replace a paid bookstore. If you want new releases, annotated commercial editions, or a library tied to Kindle hardware, Apple Books or Kindle may be the better fit.
          </p>
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
            For a broader free-reading comparison, read our guide to the <Link to="/guides/best-free-ebook-apps-iphone" style={{ color: 'var(--color-accent)' }}>best free eBook apps and sources for iPhone</Link>.
          </p>
          <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
            If you mostly read classics, see our guide to the <Link to="/guides/best-apps-for-reading-classics-iphone" style={{ color: 'var(--color-accent)' }}>best apps and sources for reading classics on iPhone</Link>.
          </p>
          <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
            If you manage downloaded files, read our guide to the <Link to="/guides/best-epub-reader-apps-iphone" style={{ color: 'var(--color-accent)' }}>best EPUB reader apps for iPhone</Link>.
          </p>
          <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
            For the general import workflow, read our guide to <Link to="/guides/how-to-read-epub-files-on-iphone" style={{ color: 'var(--color-accent)' }}>reading EPUB files on iPhone</Link>.
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
