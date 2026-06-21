import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const appRows = [
  {
    name: 'leaf',
    category: 'Best for free classics, vertical-swipe reading, and imported files',
    href: 'https://apps.apple.com/app/leaf-ebook-reader/id6758810936',
    freeAccess: 'Standard Ebooks, Project Gutenberg, imported EPUB/PDF/Markdown files',
    bestUse: 'Building a swipe-friendly free classics library on iPhone',
    tradeoff: 'Not a commercial bookstore for new releases',
  },
  {
    name: 'Libby',
    category: 'Best for free library ebooks and audiobooks',
    href: 'https://apps.apple.com/us/app/libby-the-library-app/id1076402606',
    freeAccess: 'Participating public libraries',
    bestUse: 'Borrowing ebooks and audiobooks with a library card',
    tradeoff: 'Availability, holds, and loan periods depend on your library',
  },
  {
    name: 'Project Gutenberg',
    category: 'Best for the largest free public-domain catalogue',
    href: 'https://www.gutenberg.org/',
    freeAccess: 'Public-domain ebooks in multiple formats',
    bestUse: 'Finding free classics, older works, and obscure public-domain titles',
    tradeoff: 'Edition polish and formatting can vary',
  },
  {
    name: 'Standard Ebooks',
    category: 'Best for polished free public-domain editions',
    href: 'https://standardebooks.org/',
    freeAccess: 'Curated public-domain EPUBs',
    bestUse: 'Downloading clean, well-formatted classics',
    tradeoff: 'Smaller catalogue than Project Gutenberg',
  },
  {
    name: 'Apple Books',
    category: 'Best for occasional free titles in Apple Books',
    href: 'https://www.apple.com/apple-books/',
    freeAccess: 'Free books, samples, EPUB/PDF imports',
    bestUse: 'Reading inside Apple ecosystem without installing another reader',
    tradeoff: 'Free discovery is not as focused as dedicated public-domain sources',
  },
  {
    name: 'Kindle',
    category: 'Best for Amazon free titles and Kindle libraries',
    href: 'https://apps.apple.com/us/app/amazon-kindle/id302584613?l=en&platform=iphone',
    freeAccess: 'Free Kindle titles, samples, personal documents',
    bestUse: 'Reading free Amazon titles or syncing with Kindle hardware',
    tradeoff: 'Strongest when you are already in Amazon ecosystem',
  },
  {
    name: 'Kobo Books',
    category: 'Best for Kobo readers and free Kobo titles',
    href: 'https://www.kobo.com/us/en/p/apps',
    freeAccess: 'Free Kobo titles and Kobo account library',
    bestUse: 'Reading free or purchased Kobo books on iPhone and Kobo devices',
    tradeoff: 'Most useful if Kobo is already your ebook ecosystem',
  },
  {
    name: 'Google Play Books',
    category: 'Best for uploaded free EPUB/PDF files across platforms',
    href: 'https://apps.apple.com/us/app/google-play-books-audiobooks/id400989007?l=en',
    freeAccess: 'Uploaded EPUB/PDF files and free Google Play titles',
    bestUse: 'Keeping free files in a Google account across iPhone, Android, and web',
    tradeoff: 'Less focused on a vertical-swipe iPhone-native reading experience',
  },
]

const appWriteups = [
  {
    name: 'leaf',
    category: 'Best for free classics, vertical-swipe reading, and imported files',
    href: 'https://apps.apple.com/app/leaf-ebook-reader/id6758810936',
    body:
      'leaf is the strongest fit if your idea of free ebooks is public-domain classics, imported EPUB files, and a vertical-swipe iPhone reading space. It is not trying to be a giant bookstore; it is built around reading books you already own or can legally download for free.',
    details:
      'Its curated Explore tab brings Standard Ebooks and Project Gutenberg discovery into the app. leaf also supports EPUB, PDF, and Markdown imports, plus reading journals, highlights, notes, share cards, themes, fonts, custom fonts with leaf Pro, optional Pro sync, and iCloud Book Vault.',
    tradeoff:
      'The tradeoff is that leaf is best for free classics and personal libraries, not for browsing a large commercial catalogue of current paid books.',
  },
  {
    name: 'Libby',
    category: 'Best for free library ebooks and audiobooks',
    href: 'https://apps.apple.com/us/app/libby-the-library-app/id1076402606',
    body:
      'Libby is often the best free ebook app if your local library participates. It gives you legal access to ebooks and audiobooks without buying them, including many modern books that are not in the public domain.',
    details:
      'It supports loans, holds, offline downloads, bookmarks, notes, highlights, tags, and audiobook playback. For many readers, Libby is the most useful free option because it includes both classics and current library titles.',
    tradeoff:
      'The tradeoff is that catalogue depth, wait times, loan periods, and availability depend entirely on your library system.',
  },
  {
    name: 'Project Gutenberg',
    category: 'Best for the largest free public-domain catalogue',
    href: 'https://www.gutenberg.org/',
    body:
      'Project Gutenberg is the most important source for free public-domain ebooks. It is especially useful for classics, older works, and obscure titles that may not appear in modern bookstores.',
    details:
      'Many books are available in EPUB, Kindle, plain text, and HTML formats. You can read online or download files to use in an iPhone reading app that supports imports.',
    tradeoff:
      'The tradeoff is consistency. Some books are beautifully prepared, while others have older formatting, limited metadata, or plain covers.',
  },
  {
    name: 'Standard Ebooks',
    category: 'Best for polished free public-domain editions',
    href: 'https://standardebooks.org/',
    body:
      'Standard Ebooks is smaller than Project Gutenberg but usually more polished. It is a good first stop when you want a classic that feels closer to a carefully produced ebook.',
    details:
      'Its public-domain editions typically have cleaner typography, covers, metadata, and EPUB packaging. Download a Standard Ebooks file, then read it in an EPUB-compatible app such as leaf.',
    tradeoff:
      'The tradeoff is catalogue size. If a title is not available on Standard Ebooks, Project Gutenberg is usually the broader search.',
  },
  {
    name: 'Apple Books',
    category: 'Best for occasional free titles in Apple Books',
    href: 'https://www.apple.com/apple-books/',
    body:
      'Apple Books can work for free reading if you want the default Apple app, free store titles, samples, or simple EPUB/PDF imports. It is convenient because it already fits into iPhone, iPad, and Mac.',
    details:
      'It is especially reasonable for casual readers who do not want to manage another app. For readers building a large free public-domain library, dedicated sources such as Standard Ebooks and Project Gutenberg are more focused.',
    tradeoff:
      'The tradeoff is discovery. Apple Books is a general bookstore and reader, not a purpose-built free classics workflow.',
  },
  {
    name: 'Kindle',
    category: 'Best for Amazon free titles and Kindle libraries',
    href: 'https://apps.apple.com/us/app/amazon-kindle/id302584613?l=en&platform=iphone',
    body:
      'Kindle is useful if you already read through Amazon or own Kindle hardware. It includes access to free Kindle titles, samples, public-domain editions, and personal documents.',
    details:
      'It is strongest when free reading is part of a broader Amazon library. If you mostly download EPUB files from public-domain sources, a more import-focused reader may be simpler.',
    tradeoff:
      'The tradeoff is ecosystem gravity. Kindle works best when Amazon is where you already manage books.',
  },
  {
    name: 'Kobo Books',
    category: 'Best for Kobo readers and free Kobo titles',
    href: 'https://www.kobo.com/us/en/p/apps',
    body:
      'Kobo Books is a useful free ebook option for readers who already prefer Kobo or own a Kobo e-reader. It gives you access to Kobo account reading on iPhone, including free and paid titles.',
    details:
      'It is a good alternative to Amazon if you want a commercial ebook ecosystem with an iPhone app and dedicated e-reader hardware.',
    tradeoff:
      'The tradeoff is that it is most useful when Kobo is already your store and device ecosystem.',
  },
  {
    name: 'Google Play Books',
    category: 'Best for uploaded free EPUB/PDF files across platforms',
    href: 'https://apps.apple.com/us/app/google-play-books-audiobooks/id400989007?l=en',
    body:
      'Google Play Books can be useful if you want to upload free EPUB or PDF files and read them across iPhone, Android, and the web with a Google account.',
    details:
      'It makes sense for readers who want cross-platform access more than a deeply customized iPhone reading interface.',
    tradeoff:
      'The tradeoff is that the app is strongest as a Google account library, not as a vertical-swipe iPhone reading environment.',
  },
]

const faqItems = [
  {
    q: 'What is the best free ebook app or source for iPhone?',
    a: 'The best choice depends on what you mean by free. Libby is best as a free library borrowing app. leaf is best as a reading app for free public-domain classics and imported files. Project Gutenberg and Standard Ebooks are best as legal free book sources, while Apple Books, Kindle, Kobo, and Google Play Books can be useful if you already use those ecosystems.',
  },
  {
    q: 'Where can I read free books legally on iPhone?',
    a: 'You can read free books legally through public-domain sources such as Project Gutenberg and Standard Ebooks, through library apps such as Libby with a participating library card, and through free titles offered by ebook stores. Public-domain availability varies by country, so check the source guidance if you are unsure.',
  },
  {
    q: 'Is Project Gutenberg free on iPhone?',
    a: 'Yes. Project Gutenberg offers free public-domain ebooks that can be read online or downloaded in formats such as EPUB. On iPhone, you can download those files and open them in an app that supports imports, such as leaf or Apple Books.',
  },
  {
    q: 'Can I import free EPUB files into an iPhone reading app?',
    a: 'Yes. Several iPhone reading apps can open EPUB files. leaf supports EPUB, PDF, and Markdown imports, while Apple Books and Google Play Books can also work for EPUB/PDF workflows depending on how you manage files.',
  },
  {
    q: 'Is Libby really free?',
    a: 'Libby is free to use with a card from a participating library. Your access depends on your library system, including which ebooks and audiobooks it licenses, how long loans last, and whether popular books have wait lists.',
  },
]

const visualCards = [
  { name: 'leaf', href: 'https://apps.apple.com/app/leaf-ebook-reader/id6758810936', label: 'Reader', summary: 'Read free classics and imported files in a vertical-swipe iPhone app.' },
  { name: 'Libby', href: 'https://apps.apple.com/us/app/libby-the-library-app/id1076402606', label: 'Library', summary: 'Borrow ebooks and audiobooks for free with a library card.' },
  { name: 'Project Gutenberg', href: 'https://www.gutenberg.org/', label: 'Archive', summary: 'Download from the largest free public-domain ebook library.' },
  { name: 'Standard Ebooks', href: 'https://standardebooks.org/', label: 'Editions', summary: 'Get polished free EPUB editions of public-domain classics.' },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Free eBook Apps and Sources for iPhone in 2026',
  description:
    'A practical guide to the best free ebook apps and legal free book sources for iPhone, including leaf, Libby, Project Gutenberg, Standard Ebooks, Apple Books, Kindle, Kobo, and Google Play Books.',
  datePublished: '2026-05-23',
  dateModified: '2026-05-23',
  author: { '@type': 'Organization', name: 'leaf', alternateName: 'leaf: eBook Reader', url: 'https://readleaf.co/' },
  publisher: { '@type': 'Organization', name: 'leaf', alternateName: 'leaf: eBook Reader', url: 'https://readleaf.co/' },
  image: 'https://readleaf.co/screenshots/screenshot-explore-new.png',
  url: 'https://readleaf.co/guides/best-free-ebook-apps-iphone',
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
  { label: 'Libby on the App Store', href: 'https://apps.apple.com/us/app/libby-the-library-app/id1076402606' },
  { label: 'Project Gutenberg', href: 'https://www.gutenberg.org/' },
  { label: 'Standard Ebooks', href: 'https://standardebooks.org/' },
  { label: 'Apple Books', href: 'https://www.apple.com/apple-books/' },
  { label: 'Amazon Kindle on the App Store', href: 'https://apps.apple.com/us/app/amazon-kindle/id302584613?l=en&platform=iphone' },
  { label: 'Kobo apps', href: 'https://www.kobo.com/us/en/p/apps' },
  { label: 'Google Play Books on the App Store', href: 'https://apps.apple.com/us/app/google-play-books-audiobooks/id400989007?l=en' },
]

const textStyle = {
  fontFamily: 'var(--font-sans)',
  fontSize: '1rem',
  lineHeight: 1.8,
  color: 'var(--color-ink-light)',
}

export default function BestFreeEbookAppsPage() {
  useEffect(() => {
    document.title = 'Best Free eBook Apps and Sources for iPhone in 2026 | leaf'

    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      document.head.appendChild(metaDescription)
    }
    metaDescription.content =
      'A practical guide to the best free ebook apps and legal free book sources for iPhone, including leaf, Libby, Project Gutenberg, Standard Ebooks, Apple Books, Kindle, Kobo, and Google Play Books.'

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = 'https://readleaf.co/guides/best-free-ebook-apps-iphone'

    const schemas = [
      { id: 'best-free-ebook-apps-article-schema', data: articleSchema },
      { id: 'best-free-ebook-apps-faq-schema', data: faqSchema },
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
          Best Free eBook Apps and Sources for iPhone in 2026
        </h1>
        <p style={{ ...textStyle, fontSize: '1.125rem' }}>
          A practical guide to legal free reading on iPhone, from library borrowing and public-domain classics to imported EPUB files and free bookstore titles.
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
              Free reading on iPhone
            </p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.18, marginBottom: 'var(--space-4)' }}>
              Free ebooks work best when you separate sources from readers.
            </h2>
            <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
              Project Gutenberg and Standard Ebooks are book sources. Libby is a borrowing app. leaf, Apple Books, Kindle, Kobo, and Google Play Books are reading environments with different import and ecosystem tradeoffs.
            </p>
            <p style={{ ...textStyle, margin: 0 }}>
              The best setup often combines a legal free source with the reader that feels best for long sessions on your phone.
            </p>
          </div>
          <figure style={{ margin: 0, justifySelf: 'center', width: 'min(100%, 320px)' }}>
            <div style={{ background: '#1c1c1e', borderRadius: '2.6rem', padding: '10px', filter: 'drop-shadow(0 24px 52px rgba(0,0,0,0.2))' }}>
              <div style={{ borderRadius: '2.15rem', overflow: 'hidden', position: 'relative', background: '#fff' }}>
                <div style={{ position: 'absolute', top: '8px', left: '50%', transform: 'translateX(-50%)', width: '72px', height: '22px', background: '#1c1c1e', borderRadius: '12px', zIndex: 1 }} aria-hidden="true" />
                <img
                  src="/screenshots/screenshot-explore-new.png"
                  alt="leaf Explore screen showing free classic books on iPhone"
                  width="300"
                  height="650"
                  loading="eager"
                  style={{ display: 'block', width: '100%', height: 'auto' }}
                />
              </div>
            </div>
            <figcaption style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--color-ink-light)', lineHeight: 1.6, marginTop: 'var(--space-3)', textAlign: 'center' }}>
              leaf's Explore screen surfaces free public-domain classics from inside a reading app.
            </figcaption>
          </figure>
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: 'var(--space-4)', marginBottom: 'var(--space-12)' }}>
          <div style={{ background: 'rgba(255,255,255,0.5)', border: '1px solid rgba(43,43,43,0.08)', borderRadius: '8px', padding: 'var(--space-5)' }}>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-accent)', marginBottom: 'var(--space-3)', fontWeight: 600 }}>
              Quick verdict
            </p>
            <p style={{ ...textStyle, margin: 0 }}>
              Choose <strong style={{ color: 'var(--color-ink)' }}>Libby</strong> for free library borrowing, <strong style={{ color: 'var(--color-ink)' }}>leaf</strong> for free classics and imported files, <strong style={{ color: 'var(--color-ink)' }}>Project Gutenberg</strong> for the largest public-domain catalogue, and <strong style={{ color: 'var(--color-ink)' }}>Standard Ebooks</strong> for polished free classics. Apple Books, Kindle, Kobo, and Google Play Books are useful when their ecosystems already fit your library.
            </p>
          </div>
        </section>

        <section style={{ marginBottom: 'var(--space-12)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: 'var(--space-4)' }}>
            How to Choose a Free eBook App
          </h2>
          <p style={textStyle}>
            Free ebook reading on iPhone has three main paths: public-domain books, library borrowing, and free or uploaded files inside a bookstore ecosystem. Public-domain books are usually classics and older works. Library borrowing can include modern books, but availability depends on your library. Store ecosystems are convenient if your books already live there.
          </p>
          <p style={textStyle}>
            This guide separates legal free book sources from reading apps, then explains which combinations make the most sense for iPhone readers.
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
                  <th style={{ textAlign: 'left', padding: 'var(--space-3)', color: 'var(--color-ink)' }}>Free Access</th>
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
                    <td style={{ padding: 'var(--space-3)', color: 'var(--color-ink-light)' }}>{row.freeAccess}</td>
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
            If you are organizing downloaded EPUB files, read our guide to the <Link to="/guides/best-epub-reader-apps-iphone" style={{ color: 'var(--color-accent)' }}>best EPUB reader apps for iPhone</Link>.
          </p>
          <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
            For basic file-opening steps, read our guide to <Link to="/guides/how-to-read-epub-files-on-iphone" style={{ color: 'var(--color-accent)' }}>reading EPUB files on iPhone</Link>.
          </p>
          <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
            For a broader app comparison, read our guide to the <Link to="/guides/best-ebook-reader-apps-iphone" style={{ color: 'var(--color-accent)' }}>best eBook reader apps for iPhone</Link>.
          </p>
          <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
            For step-by-step Gutenberg instructions, read our guide to <Link to="/guides/how-to-read-project-gutenberg-books-on-iphone" style={{ color: 'var(--color-accent)' }}>reading Project Gutenberg books on iPhone</Link>.
          </p>
          <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
            For polished public-domain editions, read our guide to <Link to="/guides/how-to-read-standard-ebooks-on-iphone" style={{ color: 'var(--color-accent)' }}>reading Standard Ebooks on iPhone</Link>.
          </p>
          <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
            If you mainly want classics, see our guide to the <Link to="/guides/best-apps-for-reading-classics-iphone" style={{ color: 'var(--color-accent)' }}>best apps and sources for reading classics on iPhone</Link>.
          </p>
          <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
            If your priority is a quiet interface, read our guide to <Link to="/guides/best-minimalist-reading-apps-2026" style={{ color: 'var(--color-accent)' }}>minimalist reading apps for iPhone</Link>.
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
