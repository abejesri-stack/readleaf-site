import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const guideUrl = 'https://readleaf.co/guides/how-to-read-epub-files-on-iphone'

const workflows = [
  {
    name: 'Open in leaf',
    bestFor: 'Vertical-swipe reading and imported EPUB libraries',
    steps:
      'Save or download the EPUB on iPhone, open the share sheet, choose leaf, then keep the book in your library.',
    tradeoff:
      'Best when you want a dedicated reading app rather than a bookstore-first library.',
  },
  {
    name: 'Open in Apple Books',
    bestFor: 'A built-in Apple reading path',
    steps:
      'Download or receive an EPUB, open the iOS share sheet, then choose Books when it appears as an option.',
    tradeoff:
      'Convenient for occasional EPUBs, but less focused on imported-library workflows.',
  },
  {
    name: 'Use Send to Kindle',
    bestFor: 'Amazon libraries and Kindle devices',
    steps:
      'Send the file to your Kindle library, then read it in the Kindle app or on Kindle hardware.',
    tradeoff:
      'Useful for Amazon-centered readers, but less direct if you simply want to open a local EPUB.',
  },
  {
    name: 'Use a file manager first',
    bestFor: 'Downloads, folders, cloud storage, and mixed PDFs',
    steps:
      'Organize the file in Files, iCloud Drive, or a file manager, then open it in the reading app you prefer.',
    tradeoff:
      'Good for file-heavy libraries, but it adds a layer before the actual reading experience.',
  },
]

const formatRows = [
  {
    format: 'EPUB',
    use: 'Best default for books on iPhone',
    note: 'Reflows text, adapts to font settings, and works well in dedicated reading apps.',
  },
  {
    format: 'PDF',
    use: 'Best for fixed-layout documents',
    note: 'Preserves page layout, but can be cramped on a phone screen for long prose books.',
  },
  {
    format: 'Markdown',
    use: 'Best for plain text drafts and notes',
    note: 'Useful when your source is a manuscript, export, or lightweight text file.',
  },
  {
    format: 'Kindle / personal document',
    use: 'Best for Amazon ecosystem readers',
    note: 'Makes sense when you want the book in Kindle apps or on Kindle devices.',
  },
]

const faqItems = [
  {
    q: 'Can I read EPUB files on iPhone?',
    a: 'Yes. iPhone can read EPUB files through apps such as leaf, Apple Books, Google Play Books, Kindle workflows, and other EPUB-compatible readers.',
  },
  {
    q: 'What is the easiest way to open an EPUB on iPhone?',
    a: 'The easiest workflow is usually to download or save the EPUB, tap the share button, then choose a compatible reading app such as leaf or Apple Books.',
  },
  {
    q: 'Is EPUB better than PDF for reading books on iPhone?',
    a: 'For most prose books, EPUB is better because the text can reflow for the screen, font size, and reader settings. PDF is better when the original page layout must stay fixed.',
  },
  {
    q: 'Can Apple Books open EPUB files?',
    a: 'Yes. Apple Books can be a simple built-in option for many EPUB and PDF files, especially if you prefer Apple-native library and iCloud workflows.',
  },
  {
    q: 'What is the best EPUB reader for iPhone?',
    a: 'It depends on your workflow. leaf is a good fit for vertical-swipe EPUB reading, imports, free classics discovery, journals, notes, highlights, themes, fonts, optional Pro sync, and iCloud Book Vault. Apple Books is a simple built-in option, and Kindle is best when you already use Amazon or Kindle devices.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Read EPUB Files on iPhone in 2026',
  description:
    'A practical guide to opening, importing, and reading EPUB files on iPhone with leaf, Apple Books, Kindle, Files, and other iPhone workflows.',
  datePublished: '2026-06-20',
  dateModified: '2026-06-20',
  author: { '@type': 'Organization', name: 'leaf', alternateName: 'leaf: eBook Reader', url: 'https://readleaf.co/' },
  publisher: { '@type': 'Organization', name: 'leaf', alternateName: 'leaf: eBook Reader', url: 'https://readleaf.co/' },
  image: 'https://readleaf.co/screenshots/screenshot-library.png',
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
  { label: 'leaf on the App Store', href: 'https://apps.apple.com/app/leaf-ebook-reader/id6758810936' },
  { label: 'Apple Books', href: 'https://www.apple.com/apple-books/' },
  { label: 'Apple Support: move ePub books and PDFs to iPhone', href: 'https://support.apple.com/en-us/104965' },
  { label: 'Apple Support: EPUB in Books and third-party readers', href: 'https://support.apple.com/en-us/108362' },
  { label: 'Amazon Send to Kindle', href: 'https://www.amazon.com/sendtokindle' },
  { label: 'Project Gutenberg', href: 'https://www.gutenberg.org/' },
  { label: 'Standard Ebooks', href: 'https://standardebooks.org/' },
]

const textStyle = {
  fontFamily: 'var(--font-sans)',
  fontSize: '1rem',
  lineHeight: 1.8,
  color: 'var(--color-ink-light)',
}

export default function HowToReadEpubFilesIphonePage() {
  useEffect(() => {
    document.title = 'How to Read EPUB Files on iPhone in 2026 | leaf'

    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      document.head.appendChild(metaDescription)
    }
    metaDescription.content =
      'A practical guide to opening, importing, and reading EPUB files on iPhone with leaf, Apple Books, Kindle, Files, and other iPhone workflows.'

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = guideUrl

    const schemas = [
      { id: 'how-to-read-epub-files-iphone-article-schema', data: articleSchema },
      { id: 'how-to-read-epub-files-iphone-faq-schema', data: faqSchema },
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
          How to Read EPUB Files on iPhone in 2026
        </h1>
        <p style={{ ...textStyle, fontSize: '1.125rem' }}>
          A practical guide to opening EPUB files on iPhone, choosing the right app, and deciding when Apple Books, Kindle, Files, or a dedicated reader like leaf makes the most sense.
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
              EPUB files on iPhone
            </p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.18, marginBottom: 'var(--space-4)' }}>
              The file is only half the workflow.
            </h2>
            <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
              EPUB is a flexible ebook format, but the reading experience depends on where the file came from and which app owns the library after you open it.
            </p>
            <p style={textStyle}>
              If you read a lot of downloaded books, public-domain classics, or personal files, choose a reader that treats imports as a real library rather than one-off attachments.
            </p>
          </div>
          <figure style={{ margin: 0, textAlign: 'center' }}>
            <img
              src="/screenshots/screenshot-library.png"
              alt="leaf library screen showing EPUB files and imported books on iPhone"
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
              leaf keeps imported EPUBs alongside the rest of your reading library.
            </figcaption>
          </figure>
        </section>

        <section style={{ marginBottom: 'var(--space-10)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: 'var(--space-4)' }}>
            Open an EPUB file on iPhone
          </h2>
          <ol style={{ ...textStyle, paddingLeft: '1.3rem' }}>
            <li>Download the EPUB from a source such as Project Gutenberg, Standard Ebooks, an author site, or your cloud storage.</li>
            <li>If the file opens in Safari, tap the share button. If it is in Files, long-press or open the file and use the share menu.</li>
            <li>Choose the reading app you want to use. Common options include leaf, Apple Books, Kindle workflows, and other EPUB-compatible apps.</li>
            <li>After the import, open the book from that app's library rather than hunting for the file again.</li>
            <li>If iOS does not show the app you want, confirm the app is installed and supports the file type you are opening.</li>
          </ol>
        </section>

        <section style={{ marginBottom: 'var(--space-10)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: 'var(--space-4)' }}>
            Best iPhone EPUB workflows
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
            Choose EPUB instead of PDF when the book is mostly text
          </h2>
          <p style={{ ...textStyle, marginBottom: 'var(--space-4)' }}>
            EPUB is usually the better format for novels, essays, nonfiction, poetry, and public-domain classics on iPhone because the text can adapt to your screen and settings. PDF is still useful when layout matters more than reflow, such as forms, scans, academic papers, and image-heavy documents.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--space-4)' }}>
            {formatRows.map((row) => (
              <div key={row.format} style={{ padding: 'var(--space-5)', background: 'rgba(255,255,255,0.38)', border: '1px solid rgba(43,43,43,0.08)', borderRadius: '8px' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: 'var(--space-2)' }}>{row.format}</h3>
                <p style={{ ...textStyle, fontWeight: 700, color: 'var(--color-ink)', marginBottom: 'var(--space-2)' }}>{row.use}</p>
                <p style={{ ...textStyle, fontSize: '0.95rem' }}>{row.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 'var(--space-10)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: 'var(--space-4)' }}>
            Where leaf fits
          </h2>
          <p style={{ ...textStyle, marginBottom: 'var(--space-4)' }}>
            leaf is a good fit if your goal is to read EPUB files in a dedicated iPhone reading app instead of a store-first app or a file manager. It supports EPUB, PDF, and Markdown imports, and its Explore tab can help readers find books from Standard Ebooks and Project Gutenberg before importing them into the library.
          </p>
          <p style={{ ...textStyle, marginBottom: 'var(--space-4)' }}>
            The main difference is the reading experience: leaf is built around vertical-swipe reading on iPhone. For longer books, it also includes reading journals, highlights, notes, passage and completion share cards, themes, fonts, custom fonts with leaf Pro, optional leaf Pro sync, and iCloud Book Vault.
          </p>
          <p style={textStyle}>
            <a href="https://apps.apple.com/app/leaf-ebook-reader/id6758810936" style={{ color: 'var(--color-accent)' }}>
              Download leaf on the App Store
            </a>{' '}
            if you want a reader designed around imported books and vertical-swipe reading.
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
            For a broader app comparison, see our guide to the <Link to="/guides/best-epub-reader-apps-iphone" style={{ color: 'var(--color-accent)' }}>best EPUB reader apps for iPhone</Link>.
          </p>
          <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
            If you want free public-domain books, read our guide to <Link to="/guides/how-to-read-project-gutenberg-books-on-iphone" style={{ color: 'var(--color-accent)' }}>reading Project Gutenberg books on iPhone</Link>.
          </p>
          <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
            If you are choosing an app more generally, read our guide to the <Link to="/guides/best-ebook-reader-apps-iphone" style={{ color: 'var(--color-accent)' }}>best eBook reader apps for iPhone</Link>.
          </p>
          <p style={textStyle}>
            Browse every article in the <Link to="/guides" style={{ color: 'var(--color-accent)' }}>leaf reading guides hub</Link>.
          </p>
        </section>
      </main>
    </div>
  )
}
