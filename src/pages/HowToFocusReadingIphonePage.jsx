import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const guideUrl = 'https://readleaf.co/guides/how-to-focus-while-reading-on-iphone'

const approaches = [
  {
    name: 'Silence the interruptions',
    helps: 'Notifications, badges, and other apps a swipe away',
    limit: 'Does nothing if your attention drifts on its own, with no interruption to blame.',
  },
  {
    name: 'Read for a set time, not a set amount',
    helps: 'The size of the commitment',
    limit: 'Ten minutes is easy to agree to. A chapter is an unknown quantity.',
  },
  {
    name: 'Listen to an audiobook',
    helps: 'Momentum, because a voice keeps moving whether you do or not',
    limit: 'You are listening rather than reading, which is a different experience and a different kind of attention.',
  },
  {
    name: 'Read along at a set pace',
    helps: 'Momentum while still reading the text yourself',
    limit: 'A pace set too fast feels rushed. It is adjustable, but you have to actually adjust it.',
  },
  {
    name: 'Larger text, less on screen',
    helps: 'Effort, if the type is genuinely too small',
    limit: 'Cosmetic if the problem is attention rather than legibility.',
  },
]

const faqItems = [
  {
    q: 'Why is it so hard to focus when reading on a phone?',
    a: 'Two different problems get blamed on the same thing. The first is interruption: notifications, and every other app being one swipe away. The second is momentum: a page of text sits still and asks you to supply all the forward motion yourself. Most advice addresses only the first, which is why turning off notifications often does not fix it.',
  },
  {
    q: 'What is read-along reading?',
    a: 'Read-along sets a steady pace through the text and highlights your position as it moves, so the page keeps going without you having to scroll. You are still reading the words yourself, unlike an audiobook. It is the same idea as the synchronised text used in reading-support tools, where following a moving position makes it easier to stay on the line.',
  },
  {
    q: 'Is read-along the same as speed reading?',
    a: 'No, and the difference matters. Speed-reading apps usually flash one word at a time in a fixed position, replacing each word with the next. That removes your ability to glance back, which is something skilled readers do constantly without noticing, and comprehension tends to suffer. Read-along in leaf never hides or replaces anything: the surrounding lines stay on screen and readable, so you can look back whenever you want, and you can pause or step back a sentence.',
  },
  {
    q: 'Does leaf read books out loud?',
    a: 'Not yet. Read-along in leaf is silent: it sets the pace and highlights the line, but there is no narration. If you want a voice reading to you, an audiobook app or a text-to-speech reader is the right tool today.',
  },
  {
    q: 'How long should a reading session be?',
    a: 'Short enough that you will actually start. For someone who has been bouncing off books, ten or fifteen minutes is a far more useful target than a chapter, because a chapter is an unknown quantity that might run forty minutes. Momentum tends to carry you past the target anyway.',
  },
  {
    q: 'Does reading on a phone hurt comprehension?',
    a: 'The phone itself is not really the problem; the conditions usually are. Reading in short interrupted bursts, on a screen that also delivers notifications, is harder than reading undisturbed. Removing the interruptions and giving yourself a reason to keep going matter more than the size of the screen.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Focus While Reading on iPhone in 2026',
  description:
    'Why reading on a phone is hard to sustain, what actually helps, and how read-along pacing differs from speed reading and audiobooks.',
  datePublished: '2026-09-04',
  dateModified: '2026-09-04',
  author: { '@type': 'Organization', name: 'leaf', alternateName: 'leaf: eBook Reader', url: 'https://readleaf.co/' },
  publisher: { '@type': 'Organization', name: 'leaf', alternateName: 'leaf: eBook Reader', url: 'https://readleaf.co/' },
  image: 'https://readleaf.co/screenshots/screenshot-readalong.png',
  url: guideUrl,
  mainEntityOfPage: guideUrl,
  citation: [
    'https://support.apple.com/en-us/HT213302',
    'https://support.apple.com/en-us/HT208982',
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
  { label: 'Apple Support: use Focus on iPhone', href: 'https://support.apple.com/en-us/HT212608' },
  { label: 'Apple Support: Screen Time', href: 'https://support.apple.com/en-us/HT208982' },
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

export default function HowToFocusReadingIphonePage() {
  useEffect(() => {
    document.title = 'How to Focus While Reading on iPhone in 2026 | leaf'

    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      document.head.appendChild(metaDescription)
    }
    metaDescription.content =
      'Why reading on a phone is hard to sustain, what actually helps, and how read-along pacing differs from speed reading and audiobooks.'

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = guideUrl

    const schemas = [
      { id: 'how-to-focus-reading-iphone-article-schema', data: articleSchema },
      { id: 'how-to-focus-reading-iphone-faq-schema', data: faqSchema },
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
          How to Focus While Reading on iPhone in 2026
        </h1>
        <p style={{ ...textStyle, fontSize: '1.125rem' }}>
          If you keep opening a book on your phone and closing it four paragraphs later, the problem probably is not willpower. This guide separates the two things that actually get in the way, and covers what helps with each.
        </p>
        <p style={{ ...textStyle, fontSize: '0.82rem', marginTop: 'var(--space-4)' }}>
          Written by the leaf team, September 4, 2026.
        </p>
      </header>

      <main style={{ maxWidth: '920px', margin: '0 auto', padding: '0 var(--space-4) var(--space-16)' }}>
        <section style={{ padding: 'var(--space-6)', marginBottom: 'var(--space-10)', background: 'rgba(255,255,255,0.5)', border: '1px solid rgba(43,43,43,0.08)', borderRadius: '8px' }}>
          <p style={eyebrowStyle}>Quick answer</p>
          <p style={{ ...textStyle, color: 'var(--color-ink)', margin: 0 }}>
            Cut the interruptions, shrink the commitment, and give yourself momentum. Turn on a Focus mode, decide to read for ten minutes rather than a chapter, and use something that keeps the text moving instead of asking you to push it along yourself.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--space-10)' }}>
          <h2 style={headingStyle}>Two different problems</h2>
          <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
            &ldquo;I can&rsquo;t focus when I read&rdquo; usually covers two things that need different answers.
          </p>
          <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
            The first is <strong style={{ color: 'var(--color-ink)' }}>interruption</strong>. A phone is a reading device that also delivers messages, and every other app is one swipe away. This one has obvious fixes and most advice stops here.
          </p>
          <p style={textStyle}>
            The second is <strong style={{ color: 'var(--color-ink)' }}>momentum</strong>, and it is the one people rarely name. A page of text sits perfectly still. Every bit of forward motion has to come from you, and if your attention is already frayed there is nothing pulling you along. That is why you can turn off every notification, sit in a quiet room, and still read the same paragraph three times.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--space-10)' }}>
          <h2 style={headingStyle}>What helps, and what each thing misses</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              <thead>
                <tr>
                  <th style={headCellStyle}>Approach</th>
                  <th style={headCellStyle}>What it helps with</th>
                  <th style={headCellStyle}>What it misses</th>
                </tr>
              </thead>
              <tbody>
                {approaches.map((row) => (
                  <tr key={row.name}>
                    <td style={{ ...cellStyle, fontWeight: 700 }}>{row.name}</td>
                    <td style={{ ...cellStyle, color: 'var(--color-ink-light)' }}>{row.helps}</td>
                    <td style={{ ...cellStyle, color: 'var(--color-ink-light)' }}>{row.limit}</td>
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
            <p style={eyebrowStyle}>Read along</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.18, marginBottom: 'var(--space-4)' }}>
              Something to follow.
            </h2>
            <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
              In leaf you tap play and the text starts moving at a pace you set, lighting each line as it goes. You are still reading the words yourself &mdash; but you are following something rather than pushing it.
            </p>
            <p style={textStyle}>
              Nothing is hidden. The lines around the one you are on stay on screen and readable, so you can glance back whenever you lose the thread, pause with a tap, or step back a sentence. That is the difference between this and speed reading, and it is the whole reason it does not cost you comprehension.
            </p>
          </div>
          <figure style={{ margin: 0, textAlign: 'center' }}>
            <img
              src="/screenshots/screenshot-readalong.png"
              alt="Read-along mode in leaf on iPhone, with the current line at full strength and the surrounding text softened but still readable"
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
              The line you are on is lit. Everything else stays readable.
            </figcaption>
          </figure>
        </section>

        <section style={{ marginBottom: 'var(--space-10)' }}>
          <h2 style={headingStyle}>What none of this fixes</h2>
          <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
            If you are exhausted, no pacing will help; sleep will. If the book is genuinely not for you, finishing it is not a focus problem and putting it down is a reasonable answer. And a reading app is not a treatment for anything &mdash; if difficulty concentrating is affecting your work or your life more broadly, that is worth raising with a professional rather than solving with software.
          </p>
          <p style={textStyle}>
            What tools can do is make starting easier and make continuing require less of you. That is a narrow claim, and it is the honest one.
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
            For the days you can&rsquo;t settle.
          </h2>
          <p style={{ ...textStyle, maxWidth: '52ch', margin: '0 auto var(--space-5)' }}>
            Read along is free in leaf, along with the rest of the reader. No streaks, no goals, no ads.
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
