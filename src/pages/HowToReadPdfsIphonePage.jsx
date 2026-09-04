import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const guideUrl = 'https://readleaf.co/guides/how-to-read-pdfs-on-iphone'

const workflows = [
  {
    name: 'Open in leaf',
    bestFor: 'Long PDFs, papers, and multi-column documents',
    steps:
      'Save the PDF, open the share sheet, choose leaf, then read it with the same reading modes you use for books.',
    tradeoff:
      'Built for reading a PDF end to end rather than annotating forms or signing documents.',
  },
  {
    name: 'Open in Apple Books',
    bestFor: 'Occasional PDFs and a built-in Apple library',
    steps:
      'Tap the share button on the PDF and choose Books, or save it straight into your Books library.',
    tradeoff:
      'Shows the whole page scaled to the screen, so text on a dense page can end up small.',
  },
  {
    name: 'Preview in Files',
    bestFor: 'A quick look without importing anything',
    steps:
      'Tap the file in the Files app and read it in the built-in preview.',
    tradeoff:
      'Fine for a glance, but it keeps no reading position and no library.',
  },
  {
    name: 'Convert to EPUB first',
    bestFor: 'Prose books that were only ever published as PDF',
    steps:
      'Run the PDF through a converter, then import the resulting EPUB into a reading app.',
    tradeoff:
      'Text reflows properly afterwards, but conversion can scramble footnotes, tables, and figures.',
  },
]

const problemRows = [
  {
    problem: 'Text is too small to read',
    cause: 'A PDF page is a fixed layout, usually A4 or US Letter, scaled down to a phone screen.',
    fix: 'Use an app that crops to the text area instead of showing the whole page, or zoom and pan.',
  },
  {
    problem: 'You scroll sideways to finish a line',
    cause: 'You zoomed in far enough to read, so the line is now wider than the screen.',
    fix: 'Read one column at a time so a full line always fits the width of the screen.',
  },
  {
    problem: 'Two-column papers are unreadable',
    cause: 'Scrolling down a two-column page jumps you between unrelated columns.',
    fix: 'Use a reader that detects columns and follows them in reading order.',
  },
  {
    problem: 'You lose your place',
    cause: 'Quick-look previews do not remember where you stopped.',
    fix: 'Import the PDF into a reader that keeps a per-document reading position.',
  },
]

const faqItems = [
  {
    q: 'Can you read PDFs on iPhone?',
    a: 'Yes. iPhone can open PDFs in Apple Books, the Files app preview, and third-party reading apps such as leaf. The harder question is not whether a PDF opens, but whether it is comfortable to read a long one on a phone screen.',
  },
  {
    q: 'Why are PDFs so hard to read on a phone?',
    a: 'A PDF is a fixed layout. Unlike an EPUB, the text does not reflow to fit a smaller screen, so a page designed for A4 or US Letter gets scaled down until the type is very small. Zooming in makes the type readable but pushes each line wider than the screen, which is why you end up scrolling sideways.',
  },
  {
    q: 'How do you read a two-column PDF on iPhone?',
    a: 'Two-column documents such as academic papers are the hardest case, because scrolling straight down a page moves you between two unrelated columns. The comfortable approach is a reader that detects the columns and shows one at a time in reading order. leaf does this automatically, so the text is larger and you never scroll sideways to finish a line.',
  },
  {
    q: 'Should you convert a PDF to EPUB to read it on iPhone?',
    a: 'It depends on the document. For a prose book that only exists as a PDF, converting to EPUB gives you reflowing text and full control over font size. For anything where the layout carries meaning, such as papers with figures and tables, sheet music, or scanned documents, conversion tends to scramble the page and reading the original is better.',
  },
  {
    q: 'What is the best PDF reader app for iPhone?',
    a: 'It depends what you are doing. For reading a long PDF end to end, leaf treats a PDF like a book: it detects columns so text stays large, offers the same three reading modes as ebooks, follows your light or dark theme, and remembers your position per document. Apple Books is a reasonable built-in option for occasional PDFs, and dedicated annotation apps are better if your main task is marking up, filling in, or signing documents.',
  },
  {
    q: 'Does leaf remember where you stopped in a PDF?',
    a: 'Yes. leaf keeps a reading position for each PDF, including which part of the page you were on, so reopening a long document returns you to where you were rather than to page one.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Read PDFs on iPhone in 2026',
  description:
    'A practical guide to reading PDFs on iPhone, including why fixed-layout pages are hard on a phone, how to handle two-column papers, and when to convert to EPUB.',
  datePublished: '2026-09-02',
  dateModified: '2026-09-02',
  author: { '@type': 'Organization', name: 'leaf', alternateName: 'leaf: eBook Reader', url: 'https://readleaf.co/' },
  publisher: { '@type': 'Organization', name: 'leaf', alternateName: 'leaf: eBook Reader', url: 'https://readleaf.co/' },
  image: 'https://readleaf.co/screenshots/screenshot-pdf-column.png',
  url: guideUrl,
  mainEntityOfPage: guideUrl,
  citation: [
    'https://support.apple.com/en-us/104965',
    'https://support.apple.com/guide/iphone/view-files-and-folders-iph2ba7e83b3/ios',
    'https://www.apple.com/apple-books/',
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

const sourceLinks = [
  { label: 'leaf on the App Store', href: 'https://apps.apple.com/app/leaf-ebook-reader/id6758810936' },
  { label: 'Apple Support: move ePub books and PDFs to iPhone', href: 'https://support.apple.com/en-us/104965' },
  { label: 'Apple Support: view files and folders in Files', href: 'https://support.apple.com/guide/iphone/view-files-and-folders-iph2ba7e83b3/ios' },
  { label: 'Apple Books', href: 'https://www.apple.com/apple-books/' },
]

const textStyle = {
  fontFamily: 'var(--font-sans)',
  fontSize: '1rem',
  lineHeight: 1.8,
  color: 'var(--color-ink-light)',
}

const headingStyle = { fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: 'var(--space-4)' }

const eyebrowStyle = {
  fontFamily: 'var(--font-sans)',
  fontSize: '0.75rem',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  color: 'var(--color-accent)',
  marginBottom: 'var(--space-3)',
  fontWeight: 600,
}

const cellStyle = { padding: '0.9rem', borderBottom: '1px solid rgba(43,43,43,0.08)' }
const headCellStyle = { textAlign: 'left', padding: '0.9rem', borderBottom: '1px solid rgba(43,43,43,0.16)' }

export default function HowToReadPdfsIphonePage() {
  useEffect(() => {
    document.title = 'How to Read PDFs on iPhone in 2026 | leaf'

    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      document.head.appendChild(metaDescription)
    }
    metaDescription.content =
      'A practical guide to reading PDFs on iPhone, including why fixed-layout pages are hard on a phone, how to handle two-column papers, and when to convert to EPUB.'

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = guideUrl

    const schemas = [
      { id: 'how-to-read-pdfs-iphone-article-schema', data: articleSchema },
      { id: 'how-to-read-pdfs-iphone-faq-schema', data: faqSchema },
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
          Guide - Updated September 2026
        </p>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.25rem, 5vw, 3.6rem)', lineHeight: 1.15, marginBottom: 'var(--space-6)' }}>
          How to Read PDFs on iPhone in 2026
        </h1>
        <p style={{ ...textStyle, fontSize: '1.125rem' }}>
          Opening a PDF on iPhone is easy. Reading a long one comfortably is not. This guide covers why fixed-layout pages fight a phone screen, what to do about two-column papers, and when converting to EPUB is worth it.
        </p>
        <p style={{ ...textStyle, fontSize: '0.82rem', marginTop: 'var(--space-4)' }}>
          Reviewed by the leaf team on September 2, 2026. File-handling steps were checked against the official sources linked below.
        </p>
      </header>

      <main style={{ maxWidth: '920px', margin: '0 auto', padding: '0 var(--space-4) var(--space-16)' }}>
        <section style={{ padding: 'var(--space-6)', marginBottom: 'var(--space-10)', background: 'rgba(255,255,255,0.5)', border: '1px solid rgba(43,43,43,0.08)', borderRadius: '8px' }}>
          <p style={eyebrowStyle}>Quick answer</p>
          <p style={{ ...textStyle, color: 'var(--color-ink)', margin: 0 }}>
            To read a PDF on iPhone, save the file, tap Share, and open it in a reading app. For short documents Apple Books or the Files preview is fine. For a long PDF, and especially a two-column one, use a reader that crops to the text and follows the columns, so the type stays large and you never scroll sideways to finish a line.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--space-10)' }}>
          <h2 style={headingStyle}>Why PDFs are hard to read on a phone</h2>
          <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
            A PDF is a fixed layout. Every line break, column, and margin was decided when the document was made, usually for a sheet of A4 or US Letter paper. An EPUB reflows to whatever screen it lands on; a PDF cannot.
          </p>
          <p style={textStyle}>
            So a phone has two options, and both are uncomfortable. It can show you the whole page, which makes the type very small. Or you can zoom until the type is readable, at which point each line is wider than the screen and you have to drag left and right to read it. That is the entire problem, and most of the advice below is a way around it.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--space-10)' }}>
          <h2 style={headingStyle}>Open a PDF on iPhone</h2>
          <ol style={{ ...textStyle, paddingLeft: '1.3rem' }}>
            <li>Save or download the PDF from Safari, Mail, Messages, or your cloud storage.</li>
            <li>Tap the share button. In the Files app, long-press the file and choose Share.</li>
            <li>Pick the app you want to read it in. Apple Books, leaf, and other reading apps appear here.</li>
            <li>Open the document from that app&rsquo;s library afterwards, so it keeps your position instead of starting over.</li>
            <li>If the app you want is missing from the share sheet, confirm it is installed and that it accepts PDFs.</li>
          </ol>
        </section>

        <section style={{ marginBottom: 'var(--space-10)' }}>
          <h2 style={headingStyle}>Common problems, and what actually fixes them</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              <thead>
                <tr>
                  <th style={headCellStyle}>Problem</th>
                  <th style={headCellStyle}>Why it happens</th>
                  <th style={headCellStyle}>What helps</th>
                </tr>
              </thead>
              <tbody>
                {problemRows.map((row) => (
                  <tr key={row.problem}>
                    <td style={{ ...cellStyle, fontWeight: 700 }}>{row.problem}</td>
                    <td style={{ ...cellStyle, color: 'var(--color-ink-light)' }}>{row.cause}</td>
                    <td style={{ ...cellStyle, color: 'var(--color-ink-light)' }}>{row.fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 'var(--space-6)',
            alignItems: 'center',
            marginBottom: 'var(--space-10)',
            padding: 'var(--space-6)',
            background: 'rgba(255,255,255,0.45)',
            border: '1px solid rgba(43,43,43,0.08)',
            borderRadius: '8px',
          }}
        >
          <div>
            <p style={eyebrowStyle}>Two-column documents</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.18, marginBottom: 'var(--space-4)' }}>
              One column at a time.
            </h2>
            <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
              Academic papers are the worst case. Scroll straight down a two-column page and you alternate between two unrelated arguments, so you end up zooming into the left column, scrolling to the bottom, then hunting back up for the top of the right one.
            </p>
            <p style={textStyle}>
              leaf reads the layout of the page, finds the columns, and shows them one at a time in reading order. Because a column is roughly a third the width of the page, the text can be much larger and a full line still fits the screen. In testing, a two-column paper went from around 10pt to an effective 17pt with no sideways scrolling.
            </p>
          </div>
          <figure style={{ margin: 0, textAlign: 'center' }}>
            <img
              src="/screenshots/screenshot-pdf-column.png"
              alt="A two-column academic paper open in leaf on iPhone, showing one column filling the screen with the figure kept whole above it"
              width="300"
              height="650"
              loading="lazy"
              style={{
                width: 'min(100%, 300px)',
                height: 'auto',
                borderRadius: '24px',
                boxShadow: '0 24px 60px rgba(43,43,43,0.16)',
                border: '1px solid rgba(43,43,43,0.08)',
              }}
            />
            <figcaption style={{ ...textStyle, fontSize: '0.88rem', lineHeight: 1.5, marginTop: 'var(--space-3)' }}>
              One column fills the screen, and the figure above it stays whole.
            </figcaption>
          </figure>
        </section>

        <section style={{ marginBottom: 'var(--space-10)' }}>
          <h2 style={headingStyle}>Ways to read a PDF on iPhone</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              <thead>
                <tr>
                  <th style={headCellStyle}>Workflow</th>
                  <th style={headCellStyle}>Best for</th>
                  <th style={headCellStyle}>Tradeoff</th>
                </tr>
              </thead>
              <tbody>
                {workflows.map((workflow) => (
                  <tr key={workflow.name}>
                    <td style={{ ...cellStyle, fontWeight: 700 }}>{workflow.name}</td>
                    <td style={{ ...cellStyle, color: 'var(--color-ink-light)' }}>
                      <strong style={{ color: 'var(--color-ink)' }}>{workflow.bestFor}</strong>
                      <br />
                      {workflow.steps}
                    </td>
                    <td style={{ ...cellStyle, color: 'var(--color-ink-light)' }}>{workflow.tradeoff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: 'var(--space-10)' }}>
          <h2 style={headingStyle}>Should you convert the PDF to EPUB?</h2>
          <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
            Sometimes. If the document is plain prose that only ever existed as a PDF, converting it to EPUB is the cleanest answer: the text reflows, you control the font size, and it behaves like any other book.
          </p>
          <p style={textStyle}>
            If the layout carries meaning, keep the original. Papers with figures and tables, sheet music, comics, slides, forms, and scans all lose something in conversion, and footnotes in particular tend to scatter. For those, a reader that presents the original page well is better than a converted file that reads badly.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--space-10)' }}>
          <h2 style={headingStyle}>Frequently asked questions</h2>
          {faqItems.map((item) => (
            <div key={item.q} style={{ marginBottom: 'var(--space-5)' }}>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', fontWeight: 600, marginBottom: 'var(--space-2)' }}>{item.q}</h3>
              <p style={{ ...textStyle, margin: 0 }}>{item.a}</p>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 'var(--space-10)' }}>
          <h2 style={headingStyle}>Sources</h2>
          <ul style={{ ...textStyle, paddingLeft: '1.3rem' }}>
            {sourceLinks.map((link) => (
              <li key={link.href} style={{ marginBottom: 'var(--space-2)' }}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-ink)' }}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section style={{ padding: 'var(--space-8)', background: 'rgba(255,255,255,0.5)', border: '1px solid rgba(43,43,43,0.08)', borderRadius: '8px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: 'var(--space-3)' }}>
            Read PDFs like books.
          </h2>
          <p style={{ ...textStyle, maxWidth: '52ch', margin: '0 auto var(--space-5)' }}>
            leaf finds the columns, keeps the text large, follows your theme, and remembers where you stopped. Free on the App Store.
          </p>
          <a
            href="https://apps.apple.com/app/leaf-ebook-reader/id6758810936"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--color-ink)', textDecoration: 'underline' }}
          >
            Download leaf on the App Store
          </a>
        </section>

        <p style={{ ...textStyle, fontSize: '0.9rem', marginTop: 'var(--space-8)' }}>
          <Link to="/guides" style={{ color: 'var(--color-ink)' }}>Back to all guides</Link>
        </p>
      </main>
    </div>
  )
}
