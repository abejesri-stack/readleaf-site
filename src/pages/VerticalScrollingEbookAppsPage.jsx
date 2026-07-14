import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const guideUrl = 'https://readleaf.co/guides/best-vertical-scrolling-ebook-apps-iphone'

const apps = [
  {
    name: 'leaf',
    bestFor: 'Vertical snap reading and free classics',
    motion: 'Glide vertical snap, Stream continuous scroll, or Leaf page turn',
    files: 'EPUB, PDF, and Markdown imports',
    link: 'https://apps.apple.com/app/leaf-ebook-reader/id6758810936',
  },
  {
    name: 'Apple Books',
    bestFor: 'The simplest built-in iPhone option',
    motion: 'Scroll, Curl, or Fast Fade for supported books',
    files: 'Apple purchases plus imported EPUB and PDF files',
    link: 'https://support.apple.com/guide/iphone/read-books-iphc1af7c57/ios',
  },
  {
    name: 'Kindle',
    bestFor: 'Amazon purchases and Kindle libraries',
    motion: 'Continuous scrolling or paginated reading for supported books',
    files: 'Kindle purchases and personal documents sent to Kindle',
    link: 'https://apps.apple.com/us/app/amazon-kindle/id302584613?platform=iphone',
  },
  {
    name: 'Kobo Books',
    bestFor: 'Kobo store customers and Kobo device owners',
    motion: 'Vertical scrolling or page turns, depending on book and app version',
    files: 'Kobo purchases and Kobo ecosystem reading',
    link: 'https://apps.apple.com/us/app/kobo-books-audiobooks/id301259483?platform=iphone',
  },
  {
    name: 'BookShelves',
    bestFor: 'Personal EPUB libraries across Apple devices',
    motion: 'Continuous scroll or paginated reading',
    files: 'EPUB, PDF, comics, and Calibre-connected libraries',
    link: 'https://getbookshelves.app/',
  },
]

const faqItems = [
  {
    question: 'What is the best vertical scrolling eBook app for iPhone?',
    answer: 'leaf is the strongest fit if you want a vertical swipe to advance one screen at a time, plus an optional continuous Stream mode. Apple Books is the easiest built-in option, Kindle and Kobo are best for their store ecosystems, and BookShelves is useful for personal libraries.',
  },
  {
    question: 'Does Apple Books have vertical scrolling?',
    answer: 'Yes. For supported books, open Themes & Settings, tap the page-turn control, and choose Scroll. Apple also provides a Vertical Scrolling option for PDFs, manga, and other fixed-layout documents.',
  },
  {
    question: 'What is the difference between vertical snap and continuous scroll?',
    answer: 'Vertical snap advances the book one screen at a time and stops at a defined reading position. Continuous scroll moves through the text freely, like a web page. Snap offers clearer stopping points, while continuous scroll gives the reader more control over movement.',
  },
  {
    question: 'Can the Kindle app scroll vertically on iPhone?',
    answer: 'The Kindle app offers continuous scrolling for supported reflowable books. Availability can depend on the book format, so the control may not appear for every title or document.',
  },
  {
    question: 'Which vertical scrolling app is best for EPUB files?',
    answer: 'leaf is a good fit for EPUB readers who want vertical snap or continuous scroll, built-in free classics discovery, and reading tools in one iPhone app. Apple Books is the simplest built-in choice, while BookShelves is useful for larger personal libraries.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Vertical Scrolling eBook Apps for iPhone in 2026',
  description: 'A practical comparison of vertical scrolling ebook apps for iPhone, including leaf, Apple Books, Kindle, Kobo Books, and BookShelves.',
  datePublished: '2026-07-15',
  dateModified: '2026-07-15',
  author: { '@type': 'Organization', name: 'leaf', alternateName: 'leaf: eBook Reader', url: 'https://readleaf.co/' },
  publisher: { '@type': 'Organization', name: 'leaf', alternateName: 'leaf: eBook Reader', url: 'https://readleaf.co/' },
  image: 'https://readleaf.co/screenshots/leaf_slide.png',
  url: guideUrl,
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
}

const bodyStyle = {
  fontFamily: 'var(--font-sans)',
  fontSize: '1rem',
  lineHeight: 1.8,
  color: 'var(--color-ink-light)',
}

const headingStyle = {
  fontFamily: 'var(--font-serif)',
  fontSize: '1.75rem',
  lineHeight: 1.25,
  marginBottom: 'var(--space-4)',
}

const linkStyle = { color: 'var(--color-accent)' }

export default function VerticalScrollingEbookAppsPage() {
  useEffect(() => {
    document.title = 'Best Vertical Scrolling eBook Apps for iPhone in 2026 | leaf'

    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      document.head.appendChild(metaDescription)
    }
    metaDescription.content =
      'Compare the best vertical scrolling ebook apps for iPhone in 2026, including vertical snap, continuous scroll, EPUB support, libraries, and sync.'

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = guideUrl

    const schemas = [
      { id: 'vertical-scroll-article-schema', data: articleSchema },
      { id: 'vertical-scroll-faq-schema', data: faqSchema },
    ]
    schemas.forEach(({ id, data }) => {
      let element = document.getElementById(id)
      if (!element) {
        element = document.createElement('script')
        element.id = id
        element.type = 'application/ld+json'
        document.head.appendChild(element)
      }
      element.textContent = JSON.stringify(data)
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
          <Link to="/guides" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-ink-light)', textDecoration: 'none' }}>
            Reading Guides
          </Link>
        </div>
      </nav>

      <header style={{ padding: 'var(--space-16) var(--space-4) var(--space-8)', maxWidth: '860px', margin: '0 auto' }}>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-accent)', marginBottom: 'var(--space-4)' }}>
          Guide - Updated July 2026
        </p>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.18, marginBottom: 'var(--space-6)' }}>
          Best Vertical Scrolling eBook Apps for iPhone in 2026
        </h1>
        <p style={{ ...bodyStyle, fontSize: '1.125rem', maxWidth: '720px' }}>
          Vertical reading can mean a free-moving continuous scroll or a controlled upward swipe that advances one screen at a time. This guide compares both approaches so you can choose an iPhone reader that matches how you actually hold and move through a book.
        </p>
      </header>

      <main style={{ maxWidth: '860px', margin: '0 auto', padding: '0 var(--space-4) var(--space-16)' }}>
        <figure style={{ margin: '0 0 var(--space-12)', maxWidth: '760px' }}>
          <img
            src="/screenshots/leaf_slide.png"
            alt="leaf vertical scrolling ebook reader shown on an iPhone"
            width="1200"
            height="1501"
            loading="eager"
            style={{ display: 'block', width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 24px 60px rgba(43,43,43,0.14)' }}
          />
          <figcaption style={{ ...bodyStyle, fontSize: '0.82rem', lineHeight: 1.6, marginTop: 'var(--space-3)' }}>
            leaf is designed around vertical phone reading, with both one-screen-at-a-time Glide mode and continuous Stream mode.
          </figcaption>
        </figure>

        <section style={{ padding: 'var(--space-6)', marginBottom: 'var(--space-12)', background: 'rgba(255,255,255,0.5)', border: '1px solid rgba(43,43,43,0.08)', borderRadius: '8px' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-accent)', marginBottom: 'var(--space-3)', fontWeight: 600 }}>
            Quick answer
          </p>
          <p style={{ ...bodyStyle, color: 'var(--color-ink)', margin: 0 }}>
            Choose <strong>leaf</strong> if you want vertical snap reading as the main interaction, continuous scroll as an option, and direct discovery of free classics. Choose <strong>Apple Books</strong> for the easiest built-in Scroll mode, <strong>Kindle</strong> or <strong>Kobo</strong> for books already purchased in those stores, and <strong>BookShelves</strong> for a personal EPUB library across Apple devices.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--space-12)' }}>
          <h2 style={headingStyle}>Vertical snap and continuous scroll are not the same</h2>
          <p style={{ ...bodyStyle, marginBottom: 'var(--space-3)' }}>
            A continuous reader behaves like a long web page. You control exactly how far the text moves, and you can stop anywhere. This feels familiar, but the reading position can drift and short accidental movements can shift the text.
          </p>
          <p style={{ ...bodyStyle, marginBottom: 'var(--space-3)' }}>
            A vertical snap reader still moves upward with your thumb, but each gesture settles on a defined screen of text. It combines the direction of phone scrolling with the stable stopping points of pagination. Neither method is universally better: continuous scroll is fluid, while vertical snap is easier to resume and track one screen at a time.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--space-12)' }}>
          <h2 style={headingStyle}>Vertical scrolling eBook apps compared</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', minWidth: '720px', borderCollapse: 'collapse', fontFamily: 'var(--font-sans)', fontSize: '0.88rem', lineHeight: 1.55 }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--color-ink)' }}>
                  {['App', 'Best for', 'Vertical reading', 'Library and files'].map((label) => (
                    <th key={label} style={{ textAlign: 'left', padding: 'var(--space-3)', fontWeight: 600 }}>{label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {apps.map((app) => (
                  <tr key={app.name} style={{ borderBottom: '1px solid rgba(43,43,43,0.1)', verticalAlign: 'top' }}>
                    <td style={{ padding: 'var(--space-4) var(--space-3)', fontWeight: 600 }}>
                      <a href={app.link} target="_blank" rel="noopener noreferrer" style={linkStyle}>{app.name}</a>
                    </td>
                    <td style={{ padding: 'var(--space-4) var(--space-3)', color: 'var(--color-ink-light)' }}>{app.bestFor}</td>
                    <td style={{ padding: 'var(--space-4) var(--space-3)', color: 'var(--color-ink-light)' }}>{app.motion}</td>
                    <td style={{ padding: 'var(--space-4) var(--space-3)', color: 'var(--color-ink-light)' }}>{app.files}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ ...bodyStyle, fontSize: '0.82rem', marginTop: 'var(--space-4)' }}>
            Scrolling controls can vary by book format and app version. Fixed-layout books, comics, and PDFs may use different settings from reflowable EPUB or store books.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--space-12)' }}>
          <h2 style={headingStyle}>App-by-app recommendations</h2>

          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: 'var(--space-3)' }}>
            <a href="https://apps.apple.com/app/leaf-ebook-reader/id6758810936" target="_blank" rel="noopener noreferrer" style={linkStyle}>leaf</a>: best for vertical snap reading and built-in classics
          </h3>
          <p style={{ ...bodyStyle, marginBottom: 'var(--space-3)' }}>
            leaf treats vertical movement as the core reading model rather than a secondary setting. Glide moves upward one composed screen at a time, Stream provides continuous scrolling, and Leaf retains a conventional page-turn option. This makes it the clearest choice when the upward swipe itself is what you want to change about phone reading.
          </p>
          <p style={{ ...bodyStyle, marginBottom: 'var(--space-6)' }}>
            It also brings Standard Ebooks, Project Gutenberg, and a curated Explore tab into the app. You can import EPUB, PDF, and Markdown books; keep highlights, notes, reading journals, and share cards; change themes and fonts; add custom fonts with leaf Pro; and optionally sync reading data with leaf Pro while using iCloud Book Vault for original files.
          </p>

          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: 'var(--space-3)' }}>
            <a href="https://support.apple.com/guide/iphone/read-books-iphc1af7c57/ios" target="_blank" rel="noopener noreferrer" style={linkStyle}>Apple Books</a>: best built-in option
          </h3>
          <p style={{ ...bodyStyle, marginBottom: 'var(--space-6)' }}>
            Apple Books is the lowest-friction option if you already buy books from Apple or occasionally open an EPUB. Its reading controls let supported books switch between Scroll, Curl, and Fast Fade, while fixed-layout documents expose a separate Vertical Scrolling setting. It is less differentiated as a vertical reader, but it is polished and already integrated with iPhone and iCloud.
          </p>

          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: 'var(--space-3)' }}>
            <a href="https://apps.apple.com/us/app/amazon-kindle/id302584613?platform=iphone" target="_blank" rel="noopener noreferrer" style={linkStyle}>Kindle</a>: best for Amazon libraries
          </h3>
          <p style={{ ...bodyStyle, marginBottom: 'var(--space-6)' }}>
            Kindle is the practical choice when your purchases, Kindle Unlimited titles, or hardware already live in Amazon's ecosystem. Continuous scrolling is available for supported reflowable books, but it remains one reading option inside a catalogue-first app rather than the organizing idea of the experience.
          </p>

          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: 'var(--space-3)' }}>
            <a href="https://apps.apple.com/us/app/kobo-books-audiobooks/id301259483?platform=iphone" target="_blank" rel="noopener noreferrer" style={linkStyle}>Kobo Books</a>: best for Kobo customers
          </h3>
          <p style={{ ...bodyStyle, marginBottom: 'var(--space-6)' }}>
            Kobo fits readers who buy from the Kobo store or alternate between the iPhone app and Kobo hardware. Its iOS reader supports vertical reading alongside page-based navigation, although the available control can depend on the title, format, and current app version.
          </p>

          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: 'var(--space-3)' }}>
            <a href="https://getbookshelves.app/" target="_blank" rel="noopener noreferrer" style={linkStyle}>BookShelves</a>: best for personal libraries across Apple devices
          </h3>
          <p style={{ ...bodyStyle, marginBottom: 0 }}>
            BookShelves is aimed at readers who manage their own files and want both continuous scroll and pagination. It supports EPUB, PDF, comic formats, iCloud sync, and Calibre-oriented library workflows, making it a stronger fit than store apps for larger personal collections.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--space-12)' }}>
          <h2 style={headingStyle}>How to turn on vertical scrolling</h2>
          <ol style={{ ...bodyStyle, paddingLeft: '1.4rem' }}>
            <li style={{ marginBottom: 'var(--space-3)' }}><strong>leaf:</strong> open a book and choose Glide for one-screen vertical swipes or Stream for continuous scrolling from the reading-mode controls.</li>
            <li style={{ marginBottom: 'var(--space-3)' }}><strong>Apple Books:</strong> open a supported book, tap the reading menu, open Themes &amp; Settings, tap the page-turn control, and select Scroll.</li>
            <li style={{ marginBottom: 'var(--space-3)' }}><strong>Kindle:</strong> open a supported book, open the Aa reading settings, choose Layout, and enable Continuous Scrolling when the option is available.</li>
            <li style={{ marginBottom: 'var(--space-3)' }}><strong>Kobo Books:</strong> open the reading settings and select vertical scrolling when it is available for that book and app version.</li>
            <li><strong>BookShelves:</strong> open the reader appearance controls and switch from paginated reading to continuous scroll.</li>
          </ol>
        </section>

        <section style={{ marginBottom: 'var(--space-12)' }}>
          <h2 style={headingStyle}>Which style should you choose?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 'var(--space-4)' }}>
            <div style={{ padding: 'var(--space-5)', border: '1px solid rgba(43,43,43,0.08)', borderRadius: '8px', background: 'rgba(255,255,255,0.35)' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: 'var(--space-3)' }}>Choose vertical snap</h3>
              <p style={{ ...bodyStyle, fontSize: '0.92rem', margin: 0 }}>Best when you want a clear reading position, one-handed upward gestures, and a short pause after each composed screen.</p>
            </div>
            <div style={{ padding: 'var(--space-5)', border: '1px solid rgba(43,43,43,0.08)', borderRadius: '8px', background: 'rgba(255,255,255,0.35)' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: 'var(--space-3)' }}>Choose continuous scroll</h3>
              <p style={{ ...bodyStyle, fontSize: '0.92rem', margin: 0 }}>Best when you dislike page boundaries, want precise movement, or read long passages at a self-directed pace.</p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: 'var(--space-12)' }}>
          <h2 style={headingStyle}>Frequently asked questions</h2>
          {faqItems.map(({ question, answer }) => (
            <div key={question} style={{ padding: 'var(--space-5) 0', borderBottom: '1px solid rgba(43,43,43,0.08)' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', lineHeight: 1.35, marginBottom: 'var(--space-3)' }}>{question}</h3>
              <p style={{ ...bodyStyle, fontSize: '0.95rem', margin: 0 }}>{answer}</p>
            </div>
          ))}
        </section>

        <section style={{ paddingTop: 'var(--space-6)', borderTop: '1px solid rgba(43,43,43,0.08)' }}>
          <h2 style={headingStyle}>Related reading guides</h2>
          <p style={{ ...bodyStyle, marginBottom: 'var(--space-3)' }}>
            Compare quieter interfaces in our <Link to="/guides/best-minimalist-reading-apps-2026" style={linkStyle}>minimalist eBook reader apps guide</Link>.
          </p>
          <p style={{ ...bodyStyle, marginBottom: 'var(--space-3)' }}>
            For a wider market comparison, see the <Link to="/guides/best-ebook-reader-apps-iphone" style={linkStyle}>best eBook reader apps for iPhone and iOS</Link>.
          </p>
          <p style={{ ...bodyStyle, marginBottom: 'var(--space-3)' }}>
            If you manage your own books, read our guides to <Link to="/guides/best-epub-reader-apps-iphone" style={linkStyle}>EPUB reader apps</Link> and <Link to="/guides/how-to-read-epub-files-on-iphone" style={linkStyle}>opening EPUB files on iPhone</Link>.
          </p>
          <p style={{ ...bodyStyle, fontSize: '0.85rem', fontStyle: 'italic', marginTop: 'var(--space-6)' }}>
            This guide was prepared by the leaf team using publicly available product information as of July 2026. Reading controls can change, and leaf is included as a product made by the publisher of this guide.
          </p>
        </section>
      </main>
    </div>
  )
}
