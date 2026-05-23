import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const appRows = [
  {
    name: 'leaf',
    category: 'Best for vertical-swipe EPUB reading and imported files',
    href: 'https://apps.apple.com/app/leaf-ebook-reader/id6758810936',
    importModel: 'EPUB, PDF, Markdown, .leaf files, Standard Ebooks, Project Gutenberg',
    bestUse: 'Reading imported EPUBs in a vertical-swipe iPhone app',
    tradeoff: 'Not a large commercial bookstore',
  },
  {
    name: 'Apple Books',
    category: 'Best built-in EPUB option',
    href: 'https://www.apple.com/apple-books/',
    importModel: 'EPUB and PDF files through Apple workflows',
    bestUse: 'Opening EPUB files without installing another app',
    tradeoff: 'Less specialized for imported-library workflows',
  },
  {
    name: 'Google Play Books',
    category: 'Best for uploaded EPUB/PDF files across platforms',
    href: 'https://apps.apple.com/us/app/google-play-books-audiobooks/id400989007?l=en',
    importModel: 'Uploaded EPUB/PDF files in a Google account',
    bestUse: 'Reading uploaded files across iPhone, Android, and web',
    tradeoff: 'Account-library model rather than a vertical-swipe iPhone-native reader',
  },
  {
    name: 'Documents by Readdle',
    category: 'Best for file management and PDF-heavy libraries',
    href: 'https://readdle.com/products/documents',
    importModel: 'Files, folders, cloud storage, PDFs, and ePUBs',
    bestUse: 'Managing many downloaded files before or while reading',
    tradeoff: 'A file manager first, not a dedicated book-reading environment',
  },
  {
    name: 'Kindle',
    category: 'Best for Amazon libraries and Send to Kindle workflows',
    href: 'https://apps.apple.com/us/app/amazon-kindle/id302584613?l=en&platform=iphone',
    importModel: 'Kindle books and personal documents',
    bestUse: 'Keeping personal files alongside Amazon purchases',
    tradeoff: 'Not the simplest choice if your library is plain EPUB files',
  },
  {
    name: 'Kobo Books',
    category: 'Best for Kobo store readers and Kobo device owners',
    href: 'https://apps.apple.com/us/app/kobo-books-audiobooks/id301259483?platform=iphone',
    importModel: 'Kobo purchases and Kobo account library',
    bestUse: 'Reading Kobo books across iPhone and Kobo hardware',
    tradeoff: 'Most useful when your books already live in Kobo',
  },
]

const appWriteups = [
  {
    name: 'leaf',
    category: 'Best for vertical-swipe EPUB reading and imported files',
    href: 'https://apps.apple.com/app/leaf-ebook-reader/id6758810936',
    body:
      'leaf is a strong fit if your main library is made of EPUB files, PDFs, Markdown files, public-domain classics, or books you manage yourself. It is designed around the reading session rather than a store feed, so imported books feel like first-class books rather than attachments.',
    details:
      'leaf supports EPUB, PDF, Markdown, and .leaf imports. Its curated Explore tab can also help readers discover and import books from Standard Ebooks and Project Gutenberg. For imported libraries, the useful extras are reading journals, highlights, notes, passage and completion share cards, themes, fonts, custom TTF/OTF fonts with leaf Pro, optional leaf Pro sync, and iCloud Book Vault.',
    tradeoff:
      'The tradeoff is that leaf is not trying to replace a giant bookstore. It is best when you care about reading your own files in a vertical-swipe iPhone-native environment.',
  },
  {
    name: 'Apple Books',
    category: 'Best built-in EPUB option',
    href: 'https://www.apple.com/apple-books/',
    body:
      'Apple Books is the easiest place to start if you simply want to open an EPUB file on iPhone. It is already part of Apple ecosystem workflows and can handle casual EPUB and PDF reading without much setup.',
    details:
      'It is especially useful for readers who prefer iCloud, Apple purchases, and a built-in reading app. If your EPUB needs are occasional, Apple Books may be enough.',
    tradeoff:
      'The tradeoff is that Apple Books is a general bookstore and reader, not a purpose-built imported-library workspace.',
  },
  {
    name: 'Google Play Books',
    category: 'Best for uploaded EPUB/PDF files across platforms',
    href: 'https://apps.apple.com/us/app/google-play-books-audiobooks/id400989007?l=en',
    body:
      'Google Play Books is useful when you want uploaded EPUB and PDF files available across iPhone, Android, and web through a Google account.',
    details:
      'It is a practical choice for readers who switch platforms or already keep books in a Google library. It also works well if cross-platform account access matters more than iPhone-specific reading polish.',
    tradeoff:
      'The tradeoff is that it feels more like a cloud account library than a focused iPhone reading environment.',
  },
  {
    name: 'Documents by Readdle',
    category: 'Best for file management and PDF-heavy libraries',
    href: 'https://readdle.com/products/documents',
    body:
      'Documents by Readdle is worth considering if your EPUB problem is really a file-management problem. It is useful for downloading, organizing, moving, and opening many file types on iPhone.',
    details:
      'Its official product page describes support for reading ePUBs and managing files, folders, cloud services, and PDFs. For readers with scattered downloads, PDFs, and cloud folders, that file-management layer can be more important than book-specific features.',
    tradeoff:
      'The tradeoff is that Documents is a file manager first. Readers who want a dedicated book experience, journals, typography controls, or reading-focused sync may prefer a dedicated e-reader.',
  },
  {
    name: 'Kindle',
    category: 'Best for Amazon libraries and Send to Kindle workflows',
    href: 'https://apps.apple.com/us/app/amazon-kindle/id302584613?l=en&platform=iphone',
    body:
      'Kindle makes sense if your imported files need to live beside Amazon purchases, Kindle Unlimited reading, samples, and Kindle hardware.',
    details:
      'It is strongest for readers already inside Amazon ecosystem. If you mostly have standalone EPUB files and do not use Kindle devices, a direct EPUB reader may involve fewer steps.',
    tradeoff:
      'The tradeoff is ecosystem fit. Kindle is practical for Amazon-centered libraries, but it is not the most direct choice for a folder of EPUB files.',
  },
  {
    name: 'Kobo Books',
    category: 'Best for Kobo store readers and Kobo device owners',
    href: 'https://apps.apple.com/us/app/kobo-books-audiobooks/id301259483?platform=iphone',
    body:
      'Kobo Books is useful if you buy from Kobo or read on Kobo hardware. It gives Kobo readers an iPhone app that fits their existing account and device setup.',
    details:
      'For EPUB readers, Kobo is most attractive when your library is already connected to Kobo purchases or Kobo devices. It is less compelling if your main goal is a neutral imported-file reader.',
    tradeoff:
      'The tradeoff is that Kobo is strongest inside the Kobo ecosystem, not as a universal imported EPUB manager.',
  },
]

const faqItems = [
  {
    q: 'What is the best EPUB reader app for iPhone?',
    a: 'The best EPUB reader depends on how you manage files. leaf is best for vertical-swipe EPUB reading and imported libraries. Apple Books is the easiest built-in option. Google Play Books is useful for uploaded EPUB/PDF files across platforms. Documents by Readdle is useful when file management matters most.',
  },
  {
    q: 'Can iPhone read EPUB files?',
    a: 'Yes. iPhone can read EPUB files through apps such as leaf, Apple Books, Google Play Books, and other EPUB-compatible readers. The best app depends on whether you want a dedicated reading environment, Apple-native convenience, or cross-platform upload sync.',
  },
  {
    q: 'Is Apple Books good for EPUB files?',
    a: 'Apple Books is good for occasional EPUB files because it is built into Apple workflows and supports simple EPUB/PDF reading. Readers with larger imported libraries may prefer an app focused more directly on imported books, typography, notes, and file organization.',
  },
  {
    q: 'Can I import Project Gutenberg EPUB files on iPhone?',
    a: 'Yes. Project Gutenberg offers EPUB downloads, and those files can be opened in EPUB-compatible apps. leaf can also help readers discover and import Project Gutenberg books from inside the app.',
  },
]

const visualCards = [
  { name: 'leaf', href: 'https://apps.apple.com/app/leaf-ebook-reader/id6758810936', label: 'Imported reading', summary: 'Vertical-swipe EPUB, PDF, Markdown, and .leaf reading on iPhone.' },
  { name: 'Apple Books', href: 'https://www.apple.com/apple-books/', label: 'Built-in', summary: 'A simple Apple-native option for casual EPUB and PDF files.' },
  { name: 'Google Play Books', href: 'https://apps.apple.com/us/app/google-play-books-audiobooks/id400989007?l=en', label: 'Uploads', summary: 'Uploaded EPUB/PDF files across Google account devices.' },
  { name: 'Documents', href: 'https://readdle.com/products/documents', label: 'Files', summary: 'File management for downloads, PDFs, folders, cloud storage, and ePUBs.' },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best EPUB Reader Apps for iPhone in 2026',
  description:
    'A practical guide to the best iPhone apps for reading EPUB files and imported books, including leaf, Apple Books, Google Play Books, Documents by Readdle, Kindle, and Kobo.',
  datePublished: '2026-05-23',
  dateModified: '2026-05-23',
  author: { '@type': 'Organization', name: 'leaf', alternateName: 'leaf: eBook Reader', url: 'https://readleaf.co/' },
  publisher: { '@type': 'Organization', name: 'leaf', alternateName: 'leaf: eBook Reader', url: 'https://readleaf.co/' },
  image: 'https://readleaf.co/screenshots/screenshot-library.png',
  url: 'https://readleaf.co/guides/best-epub-reader-apps-iphone',
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
  { label: 'Google Play Books on the App Store', href: 'https://apps.apple.com/us/app/google-play-books-audiobooks/id400989007?l=en' },
  { label: 'Documents by Readdle', href: 'https://readdle.com/products/documents' },
  { label: 'Documents on the App Store', href: 'https://apps.apple.com/us/app/documents-file-manager-docs/id364901807?mt=8' },
  { label: 'Amazon Kindle on the App Store', href: 'https://apps.apple.com/us/app/amazon-kindle/id302584613?l=en&platform=iphone' },
  { label: 'Kobo Books on the App Store', href: 'https://apps.apple.com/us/app/kobo-books-audiobooks/id301259483?platform=iphone' },
]

const textStyle = {
  fontFamily: 'var(--font-sans)',
  fontSize: '1rem',
  lineHeight: 1.8,
  color: 'var(--color-ink-light)',
}

export default function BestEpubReaderAppsPage() {
  useEffect(() => {
    document.title = 'Best EPUB Reader Apps for iPhone in 2026 | leaf'

    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      document.head.appendChild(metaDescription)
    }
    metaDescription.content =
      'A practical guide to the best iPhone apps for reading EPUB files and imported books, including leaf, Apple Books, Google Play Books, Documents by Readdle, Kindle, and Kobo.'

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = 'https://readleaf.co/guides/best-epub-reader-apps-iphone'

    const schemas = [
      { id: 'best-epub-reader-apps-article-schema', data: articleSchema },
      { id: 'best-epub-reader-apps-faq-schema', data: faqSchema },
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
          Best EPUB Reader Apps for iPhone in 2026
        </h1>
        <p style={{ ...textStyle, fontSize: '1.125rem' }}>
          A practical guide to reading EPUB files and imported books on iPhone, whether you want a vertical-swipe dedicated reader, Apple-native convenience, cross-platform uploads, or file management.
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
              The right EPUB reader depends on how you manage files.
            </h2>
            <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
              Some readers want a dedicated reading app. Others want the simplest built-in option, cross-platform upload sync, or a stronger file manager for downloads and PDFs.
            </p>
            <p style={{ ...textStyle, margin: 0 }}>
              This guide focuses on imported-file workflows instead of bookstore catalogues.
            </p>
          </div>
          <figure style={{ margin: 0, justifySelf: 'center', width: 'min(100%, 320px)' }}>
            <div style={{ background: '#1c1c1e', borderRadius: '2.6rem', padding: '10px', filter: 'drop-shadow(0 24px 52px rgba(0,0,0,0.2))' }}>
              <div style={{ borderRadius: '2.15rem', overflow: 'hidden', position: 'relative', background: '#fff' }}>
                <div style={{ position: 'absolute', top: '8px', left: '50%', transform: 'translateX(-50%)', width: '72px', height: '22px', background: '#1c1c1e', borderRadius: '12px', zIndex: 1 }} aria-hidden="true" />
                <img
                  src="/screenshots/screenshot-library.png"
                  alt="leaf library screen showing imported books and EPUB files on iPhone"
                  width="300"
                  height="650"
                  loading="eager"
                  style={{ display: 'block', width: '100%', height: 'auto' }}
                />
              </div>
            </div>
            <figcaption style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--color-ink-light)', lineHeight: 1.6, marginTop: 'var(--space-3)', textAlign: 'center' }}>
              leaf treats imported books as a first-class library, not just files to open once.
            </figcaption>
          </figure>
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: 'var(--space-4)', marginBottom: 'var(--space-12)' }}>
          <div style={{ background: 'rgba(255,255,255,0.5)', border: '1px solid rgba(43,43,43,0.08)', borderRadius: '8px', padding: 'var(--space-5)' }}>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-accent)', marginBottom: 'var(--space-3)', fontWeight: 600 }}>
              Quick verdict
            </p>
            <p style={{ ...textStyle, margin: 0 }}>
              Choose <strong style={{ color: 'var(--color-ink)' }}>leaf</strong> for vertical-swipe EPUB reading and imported files, <strong style={{ color: 'var(--color-ink)' }}>Apple Books</strong> for the easiest built-in option, <strong style={{ color: 'var(--color-ink)' }}>Google Play Books</strong> for uploaded EPUB/PDF files across platforms, and <strong style={{ color: 'var(--color-ink)' }}>Documents by Readdle</strong> when file management matters more than book-specific reading features.
            </p>
          </div>
        </section>

        <section style={{ marginBottom: 'var(--space-12)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: 'var(--space-4)' }}>
            How to Choose an EPUB Reader
          </h2>
          <p style={textStyle}>
            EPUB is a common ebook format, but the right iPhone app depends on your workflow. A reader with a few downloaded novels may be happy with Apple Books. A reader with many personal files may want better import support, notes, journals, typography, and sync. A reader managing many PDFs and cloud folders may care more about file organization.
          </p>
          <p style={textStyle}>
            For this guide, we evaluated each app on import support, reading comfort, file management, notes, cross-device behavior, and whether it treats imported books as a core workflow.
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
                  <th style={{ textAlign: 'left', padding: 'var(--space-3)', color: 'var(--color-ink)' }}>Import Model</th>
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
                    <td style={{ padding: 'var(--space-3)', color: 'var(--color-ink-light)' }}>{row.importModel}</td>
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
            For a broader app comparison, read our guide to the <Link to="/guides/best-ebook-reader-apps-iphone" style={{ color: 'var(--color-accent)' }}>best eBook reader apps for iPhone</Link>.
          </p>
          <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
            If you want legal free downloads and library books, see our guide to the <Link to="/guides/best-free-ebook-apps-iphone" style={{ color: 'var(--color-accent)' }}>best free eBook apps and sources for iPhone</Link>.
          </p>
          <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
            If your EPUB files are mostly classics, read our guide to the <Link to="/guides/best-apps-for-reading-classics-iphone" style={{ color: 'var(--color-accent)' }}>best apps and sources for reading classics on iPhone</Link>.
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
