import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const guideUrl = 'https://readleaf.co/guides/how-to-read-standard-ebooks-on-iphone'

const workflows = [
  {
    name: 'leaf Explore',
    bestFor: 'Built-in Standard Ebooks discovery and vertical-swipe reading',
    steps:
      'Open Explore in leaf, browse curated public-domain classics, import a Standard Ebooks title, then read it in your library.',
    tradeoff:
      'Best when you want discovery and reading in one iPhone app; not a commercial bookstore.',
  },
  {
    name: 'Standard Ebooks website',
    bestFor: 'Choosing a specific edition from the source',
    steps:
      'Open Standard Ebooks in Safari, search or browse for a book, download an EPUB, then open it in a compatible reading app.',
    tradeoff:
      'Flexible and source-direct, but the reader/import step happens outside the website.',
  },
  {
    name: 'Apple Books',
    bestFor: 'A built-in Apple import path',
    steps:
      'Download a Standard Ebooks EPUB, then use the iOS share sheet to open it in Books when available.',
    tradeoff:
      'Convenient for occasional imports, less focused on vertical-swipe reading or public-domain discovery.',
  },
  {
    name: 'Kindle',
    bestFor: 'Readers who want books in an Amazon library',
    steps:
      'Download a compatible EPUB and use Send to Kindle if you want the book in Kindle apps or on Kindle devices.',
    tradeoff:
      'Useful for Amazon-centered readers, but it adds an extra sending step.',
  },
]

const faqItems = [
  {
    q: 'Can I read Standard Ebooks on iPhone?',
    a: 'Yes. Standard Ebooks can be read on iPhone by downloading EPUB files from the Standard Ebooks website or by using an app such as leaf that includes Standard Ebooks discovery through Explore.',
  },
  {
    q: 'What format should I download from Standard Ebooks for iPhone?',
    a: 'EPUB is usually the best choice for iPhone reading apps because it adapts to screen size, fonts, and reader controls. Kindle users can use a compatible workflow such as Send to Kindle.',
  },
  {
    q: 'Is Standard Ebooks free?',
    a: 'Yes. Standard Ebooks is a volunteer-driven project that produces free public-domain ebook editions. Public-domain rules can vary by country, so readers should consider local copyright rules.',
  },
  {
    q: 'Is Standard Ebooks better than Project Gutenberg?',
    a: 'Standard Ebooks is often better when you want polished formatting, covers, metadata, and carefully prepared editions. Project Gutenberg is better when you want the largest public-domain catalogue.',
  },
  {
    q: 'What is the easiest way to read Standard Ebooks on iPhone?',
    a: 'The easiest workflow depends on where you want the book to live. leaf is straightforward if you want built-in discovery plus vertical-swipe reading. Safari downloads and Apple Books can work well for occasional imports.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Read Standard Ebooks on iPhone in 2026',
  description:
    'A practical guide to reading Standard Ebooks on iPhone, including leaf Explore, Safari EPUB downloads, Apple Books imports, and Kindle workflows.',
  datePublished: '2026-06-21',
  dateModified: '2026-06-21',
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
  { label: 'Standard Ebooks', href: 'https://standardebooks.org/' },
  { label: 'Browse Standard Ebooks', href: 'https://standardebooks.org/ebooks' },
  { label: 'How to use Standard Ebooks', href: 'https://standardebooks.org/help/how-to-use-our-ebooks' },
  { label: 'About Standard Ebooks', href: 'https://standardebooks.org/about' },
  { label: 'Standard Ebooks and the public domain', href: 'https://standardebooks.org/about/standard-ebooks-and-the-public-domain' },
  { label: 'leaf on the App Store', href: 'https://apps.apple.com/app/leaf-ebook-reader/id6758810936' },
  { label: 'Apple Books', href: 'https://www.apple.com/apple-books/' },
  { label: 'Amazon Send to Kindle', href: 'https://www.amazon.com/sendtokindle' },
]

const textStyle = {
  fontFamily: 'var(--font-sans)',
  fontSize: '1rem',
  lineHeight: 1.8,
  color: 'var(--color-ink-light)',
}

export default function StandardEbooksIphoneGuidePage() {
  useEffect(() => {
    document.title = 'How to Read Standard Ebooks on iPhone in 2026 | leaf'

    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      document.head.appendChild(metaDescription)
    }
    metaDescription.content =
      'A practical guide to reading Standard Ebooks on iPhone, including leaf Explore, Safari EPUB downloads, Apple Books imports, and Kindle workflows.'

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = guideUrl

    const schemas = [
      { id: 'standard-ebooks-iphone-article-schema', data: articleSchema },
      { id: 'standard-ebooks-iphone-faq-schema', data: faqSchema },
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
          Guide - Updated June 2026
        </p>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.25rem, 5vw, 3.6rem)', lineHeight: 1.15, marginBottom: 'var(--space-6)' }}>
          How to Read Standard Ebooks on iPhone in 2026
        </h1>
        <p style={{ ...textStyle, fontSize: '1.125rem' }}>
          A practical guide to reading polished public-domain editions from Standard Ebooks on iPhone, whether you start inside leaf Explore or download EPUB files from Safari.
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
              Standard Ebooks on iPhone
            </p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.18, marginBottom: 'var(--space-4)' }}>
              Start with a better public-domain edition.
            </h2>
            <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
              Standard Ebooks is useful when you want classic literature with cleaner formatting, covers, and metadata than many raw archive files.
            </p>
            <p style={textStyle}>
              On iPhone, the main choice is workflow: discover inside a reading app, download from Safari, or import into the ecosystem where your books already live.
            </p>
          </div>
          <figure style={{ margin: 0, textAlign: 'center' }}>
            <img
              src="/screenshots/screenshot-explore-new.png"
              alt="leaf Explore screen showing Standard Ebooks and classic books on iPhone"
              width="300"
              height="650"
              loading="eager"
              style={{
                width: 'min(100%, 300px)',
                height: 'auto',
                borderRadius: '24px',
                boxShadow: '0 24px 60px rgba(43,43,43,0.16)',
                border: '1px solid rgba(43,43,43,0.08)',
              }}
            />
            <figcaption style={{ ...textStyle, fontSize: '0.88rem', lineHeight: 1.5, marginTop: 'var(--space-3)' }}>
              leaf Explore can surface Standard Ebooks titles from inside the reading app.
            </figcaption>
          </figure>
        </section>

        <section style={{ marginBottom: 'var(--space-10)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: 'var(--space-4)' }}>
            Read Standard Ebooks on iPhone
          </h2>
          <p style={{ ...textStyle, marginBottom: 'var(--space-4)' }}>
            Standard Ebooks produces carefully prepared editions of public-domain books. For iPhone readers, the easiest path is usually EPUB: download the file, then open it in an app that handles imported books well.
          </p>
          <ol style={{ ...textStyle, paddingLeft: '1.3rem' }}>
            <li>Open Standard Ebooks in Safari, or open Explore in leaf.</li>
            <li>Search or browse for the author or title you want.</li>
            <li>Choose an EPUB download when starting from the website.</li>
            <li>Use the iOS share sheet to open the file in leaf, Apple Books, or another compatible reader.</li>
            <li>After import, read from the app library rather than reopening the downloaded file.</li>
          </ol>
        </section>

        <section style={{ marginBottom: 'var(--space-10)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: 'var(--space-4)' }}>
            Best iPhone workflows
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '0.9rem', borderBottom: '1px solid rgba(43,43,43,0.16)' }}>Workflow</th>
                  <th style={{ textAlign: 'left', padding: '0.9rem', borderBottom: '1px solid rgba(43,43,43,0.16)' }}>Best for</th>
                  <th style={{ textAlign: 'left', padding: '0.9rem', borderBottom: '1px solid rgba(43,43,43,0.16)' }}>Tradeoff</th>
                </tr>
              </thead>
              <tbody>
                {workflows.map((workflow) => (
                  <tr key={workflow.name}>
                    <td style={{ padding: '0.9rem', borderBottom: '1px solid rgba(43,43,43,0.08)', fontWeight: 700 }}>{workflow.name}</td>
                    <td style={{ padding: '0.9rem', borderBottom: '1px solid rgba(43,43,43,0.08)', color: 'var(--color-ink-light)' }}>
                      <strong style={{ color: 'var(--color-ink)' }}>{workflow.bestFor}</strong>
                      <br />
                      {workflow.steps}
                    </td>
                    <td style={{ padding: '0.9rem', borderBottom: '1px solid rgba(43,43,43,0.08)', color: 'var(--color-ink-light)' }}>{workflow.tradeoff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: 'var(--space-10)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: 'var(--space-4)' }}>
            Where leaf fits
          </h2>
          <p style={{ ...textStyle, marginBottom: 'var(--space-4)' }}>
            leaf is a good fit if you want Standard Ebooks discovery and reading in the same iPhone app. Explore helps readers find public-domain classics, and imported books can live beside EPUB, PDF, and Markdown files in the library.
          </p>
          <p style={{ ...textStyle, marginBottom: 'var(--space-4)' }}>
            For long classics, leaf adds vertical-swipe reading, reading journals, highlights, notes, passage and completion share cards, themes, fonts, custom fonts with leaf Pro, optional leaf Pro sync, and iCloud Book Vault.
          </p>
          <p style={textStyle}>
            <a href="https://apps.apple.com/app/leaf-ebook-reader/id6758810936" style={{ color: 'var(--color-accent)' }}>
              Download leaf on the App Store
            </a>{' '}
            if you want a reader built around imported books, free classics, and vertical-swipe reading.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--space-10)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: 'var(--space-4)' }}>
            FAQ
          </h2>
          {faqItems.map((item) => (
            <div key={item.q} style={{ marginBottom: 'var(--space-5)' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: 'var(--space-2)' }}>{item.q}</h3>
              <p style={textStyle}>{item.a}</p>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 'var(--space-10)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: 'var(--space-4)' }}>
            Sources
          </h2>
          <ul style={{ ...textStyle, paddingLeft: '1.2rem' }}>
            {sourceLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} style={{ color: 'var(--color-accent)' }}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section style={{ paddingTop: 'var(--space-8)', borderTop: '1px solid rgba(43,43,43,0.1)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', marginBottom: 'var(--space-4)' }}>
            Related Reading
          </h2>
          <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
            For broader free-reading options, see our guide to the <Link to="/guides/best-free-ebook-apps-iphone" style={{ color: 'var(--color-accent)' }}>best free eBook apps and sources for iPhone</Link>.
          </p>
          <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
            For the largest public-domain source, read our guide to <Link to="/guides/how-to-read-project-gutenberg-books-on-iphone" style={{ color: 'var(--color-accent)' }}>reading Project Gutenberg books on iPhone</Link>.
          </p>
          <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
            If you are choosing a reader for downloaded files, read our guide to <Link to="/guides/how-to-read-epub-files-on-iphone" style={{ color: 'var(--color-accent)' }}>reading EPUB files on iPhone</Link>.
          </p>
          <p style={textStyle}>
            Browse every article in the <Link to="/guides" style={{ color: 'var(--color-accent)' }}>leaf reading guides hub</Link>.
          </p>
        </section>
      </main>
    </div>
  )
}
