import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { setPageMeta } from '../seo.js'

const guideUrl = 'https://readleaf.co/guides/how-to-have-books-read-aloud-on-iphone'

const options = [
  {
    name: 'Speak Screen (built into iPhone)',
    cost: 'Free',
    voices: "Apple's voices, on your iPhone",
    bestFor: 'Hearing almost anything on screen, in any app, with no setup beyond one setting.',
    limit: 'A general accessibility tool rather than a reading mode: you start it with a gesture each time, and it does not keep your place in a book.',
  },
  {
    name: 'Apple Books',
    cost: 'Free',
    voices: "Apple's voices, through Speak Screen",
    bestFor: 'Books you already keep in Apple Books. Speak Screen turns the pages for you as it reads.',
    limit: 'No read-aloud mode of its own, apart from children’s books that come with recorded narration.',
  },
  {
    name: 'Kindle (Assistive Reader)',
    cost: 'Free with the Kindle app',
    voices: "Apple's voices, on your iPhone",
    bestFor: 'Kindle books. It highlights as it reads and has speed and rewind controls.',
    limit: 'Only for Kindle books that support it, so not your own EPUB files.',
  },
  {
    name: 'ElevenReader',
    cost: '10 free hours a month, then $11/month or $99/year',
    voices: 'AI voices from ElevenLabs, generated in the cloud',
    bestFor: 'The most natural-sounding voices available, plus a large audiobook catalogue.',
    limit: 'Free listening is metered. Offline listening is a paid feature, and your text is processed on their servers.',
  },
  {
    name: 'Speechify',
    cost: 'Free plan, premium voices by subscription',
    voices: 'AI voices, generated in the cloud',
    bestFor: 'Documents, web pages, and study material, across phone and computer.',
    limit: 'Built for getting through text rather than for reading books; the best voices are paid.',
  },
  {
    name: 'Voice Dream Reader',
    cost: 'Subscription',
    voices: "Apple's voices plus optional extra voices",
    bestFor: 'Long-time favourite of blind and low-vision readers, with very deep controls.',
    limit: 'Moved from a one-time purchase to a subscription in 2024.',
  },
  {
    name: 'leaf',
    cost: 'Free, unlimited',
    voices: "Apple's voices, on your iPhone",
    bestFor: 'EPUB books and free classics, read aloud while each line lights up as you follow.',
    limit: 'Ebooks only, not PDFs yet, and it uses the voices on your iPhone rather than cloud AI voices.',
  },
]

const faqItems = [
  {
    q: 'Can an iPhone read a book aloud for free?',
    a: 'Yes. Speak Screen is built into every iPhone: turn it on in Settings, then Accessibility, then Spoken Content, and swipe down from the top of the screen with two fingers to hear whatever is showing. In Apple Books it turns the pages as it goes. Reading apps such as leaf and the Kindle app also read aloud for free using the same voices built into your iPhone.',
  },
  {
    q: 'What is the most natural free text-to-speech voice on iPhone?',
    a: "Apple's Enhanced and Premium voices, which are a free download. Go to Settings, then Accessibility, then Spoken Content, then Voices, choose your language, and download one marked Enhanced or Premium. They sound far more natural than the default voices, work offline, and any app that uses Apple's voices, including Speak Screen, Kindle, and leaf, can use them. Cloud AI voices like ElevenReader's still sound more expressive, but they are metered or paid.",
  },
  {
    q: 'Can I listen to a book with the screen locked?',
    a: 'It depends on the app. leaf keeps reading with the screen locked and shows pause, play, and skip back on the lock screen and through headphones, the same way a podcast app does. ElevenReader and Speechify also play in the background. Speak Screen is designed around what is on screen, so it is better suited to listening while the book is open.',
  },
  {
    q: 'Does text-to-speech work offline on iPhone?',
    a: "Apple's own voices run on the iPhone, so Speak Screen, the Kindle app's Assistive Reader, and leaf all read aloud without a connection once the book is on your phone. Cloud AI voices need a connection to generate audio, so offline listening in those apps means downloading audio in advance, which ElevenReader includes in its paid plan.",
  },
  {
    q: 'Is text-to-speech the same as an audiobook?',
    a: 'No. An audiobook is a recording of a person reading, with their timing and character voices. Text-to-speech generates the voice from the text as you listen, so it works on any book you have, including free classics that were never recorded. Modern voices are good, but a skilled human narrator is still better for dialogue-heavy fiction.',
  },
  {
    q: 'Can leaf read PDFs aloud?',
    a: 'Not yet. Narration in leaf works with EPUB and Markdown books and the free classics in its Explore tab. PDFs keep their original page layout in leaf, so they are read visually for now. For a PDF, Speak Screen is the simplest free option.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Have Books Read Aloud on iPhone in 2026',
  description:
    'Every way to have an ebook read aloud on iPhone in 2026, from the built-in Speak Screen to Kindle, ElevenReader, Speechify, Voice Dream, and leaf, with what each costs and where it falls short.',
  datePublished: '2026-10-04',
  dateModified: '2026-10-04',
  author: { '@type': 'Organization', name: 'leaf', alternateName: 'leaf: eBook Reader', url: 'https://readleaf.co/' },
  publisher: { '@type': 'Organization', name: 'leaf', alternateName: 'leaf: eBook Reader', url: 'https://readleaf.co/' },
  image: 'https://readleaf.co/screenshots/screenshot-readalong.png',
  url: guideUrl,
  mainEntityOfPage: guideUrl,
  citation: [
    'https://support.apple.com/guide/iphone/hear-iphone-speak-the-screen-selected-text-iph96b214f0/ios',
    'https://www.amazon.com/gp/help/customer/display.html?nodeId=TqLHvK6eo6O7DJVQoZ',
    'https://elevenreader.io/blog/best-pricing-more-value',
    'https://elevenlabs.io/docs/help-center/product/mobile-apps/eleven-reader/how-do-offline-downloads-work',
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
  { label: 'Apple Support: hear iPhone speak the screen and selected text', href: 'https://support.apple.com/guide/iphone/hear-iphone-speak-the-screen-selected-text-iph96b214f0/ios' },
  { label: 'Amazon: use Assistive Reader to read aloud in Kindle apps', href: 'https://www.amazon.com/gp/help/customer/display.html?nodeId=TqLHvK6eo6O7DJVQoZ' },
  { label: 'ElevenReader: pricing', href: 'https://elevenreader.io/blog/best-pricing-more-value' },
  { label: 'ElevenReader: how offline downloads work', href: 'https://elevenlabs.io/docs/help-center/product/mobile-apps/eleven-reader/how-do-offline-downloads-work' },
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

const cellStyle = { padding: '0.9rem', borderBottom: '1px solid rgba(43,43,43,0.08)', verticalAlign: 'top' }
const headCellStyle = { textAlign: 'left', padding: '0.9rem', borderBottom: '1px solid rgba(43,43,43,0.16)' }
const strong = { color: 'var(--color-ink)' }

export default function HowToHaveBooksReadAloudIphonePage() {
  useEffect(() => {
    setPageMeta({
      title: 'How to Have Books Read Aloud on iPhone in 2026 | leaf',
      description: 'Every way to have an ebook read aloud on iPhone in 2026, from the built-in Speak Screen to Kindle, ElevenReader, Speechify, Voice Dream, and leaf, with what each costs and where it falls short.',
      canonical: guideUrl,
    })

    const schemas = [
      { id: 'books-read-aloud-iphone-article-schema', data: articleSchema },
      { id: 'books-read-aloud-iphone-faq-schema', data: faqSchema },
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
          Guide - Updated October 2026
        </p>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.25rem, 5vw, 3.6rem)', lineHeight: 1.15, marginBottom: 'var(--space-6)' }}>
          How to Have Books Read Aloud on iPhone in 2026
        </h1>
        <p style={{ ...textStyle, fontSize: '1.125rem' }}>
          Your iPhone can already read a book to you, and so can several apps. They differ in what they cost, how natural they sound, whether they work offline, and whether they are built for reading or just for listening. This guide covers each of them honestly, including where leaf fits and where it does not.
        </p>
        <p style={{ ...textStyle, fontSize: '0.82rem', marginTop: 'var(--space-4)' }}>
          Written by the leaf team, October 4, 2026. Prices and features checked against each company&rsquo;s own pages, linked below.
        </p>
      </header>

      <main style={{ maxWidth: '920px', margin: '0 auto', padding: '0 var(--space-4) var(--space-16)' }}>
        <section style={{ padding: 'var(--space-6)', marginBottom: 'var(--space-10)', background: 'rgba(255,255,255,0.5)', border: '1px solid rgba(43,43,43,0.08)', borderRadius: '8px' }}>
          <p style={eyebrowStyle}>Quick answer</p>
          <p style={{ ...textStyle, color: 'var(--color-ink)', margin: 0 }}>
            For anything on screen, turn on Speak Screen in Settings and swipe down with two fingers. For Kindle books, use the Kindle app&rsquo;s Assistive Reader. For EPUB books and free classics, leaf reads aloud for free and offline while each line lights up. If voice quality matters most and you don&rsquo;t mind paying, ElevenReader&rsquo;s AI voices sound the most natural.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--space-10)' }}>
          <h2 style={headingStyle}>Two kinds of voices</h2>
          <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
            Every option here uses one of two kinds of voice, and that one choice decides most of the trade-offs.
          </p>
          <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
            <strong style={strong}>Voices on your iPhone.</strong> Apple ships text-to-speech voices with iOS. They run on the phone itself, so they are free, work offline, and your books never leave the device. The default voices sound flat, but Apple&rsquo;s Enhanced and Premium voices, a free download, are much better.
          </p>
          <p style={textStyle}>
            <strong style={strong}>Cloud AI voices.</strong> Apps like ElevenReader and Speechify generate speech on their own servers with AI models. They are the most expressive voices available, especially for dialogue. The costs are that free listening is limited, the best voices are paid, offline listening means downloading audio ahead of time, and your text is sent to the company&rsquo;s servers.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--space-10)' }}>
          <h2 style={headingStyle}>The options compared</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', minWidth: '760px', borderCollapse: 'collapse', fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              <thead>
                <tr>
                  <th style={headCellStyle}>Option</th>
                  <th style={headCellStyle}>Cost</th>
                  <th style={headCellStyle}>Voices</th>
                  <th style={headCellStyle}>Best for</th>
                  <th style={headCellStyle}>Watch out for</th>
                </tr>
              </thead>
              <tbody>
                {options.map((row) => (
                  <tr key={row.name}>
                    <td style={{ ...cellStyle, fontWeight: 700 }}>{row.name}</td>
                    <td style={{ ...cellStyle, color: 'var(--color-ink-light)' }}>{row.cost}</td>
                    <td style={{ ...cellStyle, color: 'var(--color-ink-light)' }}>{row.voices}</td>
                    <td style={{ ...cellStyle, color: 'var(--color-ink-light)' }}>{row.bestFor}</td>
                    <td style={{ ...cellStyle, color: 'var(--color-ink-light)' }}>{row.limit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: 'var(--space-10)' }}>
          <h2 style={headingStyle}>Built into iPhone: Speak Screen</h2>
          <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
            Speak Screen is an accessibility feature that reads whatever is on screen. It costs nothing and works in most apps, including Safari, Mail, Notes, and Apple Books.
          </p>
          <ol style={{ ...textStyle, paddingLeft: '1.3rem', marginBottom: 'var(--space-3)' }}>
            <li>Open Settings, then Accessibility, then Spoken Content.</li>
            <li>Turn on Speak Screen. Turn on Highlight Content too if you want to follow along.</li>
            <li>Open your book and swipe down from the top of the screen with two fingers.</li>
            <li>Use the small controller to pause, skip, or change the speed.</li>
          </ol>
          <p style={textStyle}>
            In Apple Books, Speak Screen turns the pages as it reads, which makes it a decent free way to listen to a book you already keep there. It is a general tool rather than a reading mode, so you start it each time and it does not remember where you were.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--space-10)' }}>
          <h2 style={headingStyle}>Make Apple&rsquo;s voices sound better</h2>
          <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
            Most people judge iPhone text-to-speech by the default voice, which is the weakest one. The Enhanced and Premium versions are free and noticeably more natural.
          </p>
          <ol style={{ ...textStyle, paddingLeft: '1.3rem', marginBottom: 'var(--space-3)' }}>
            <li>Open Settings, then Accessibility, then Spoken Content, then Voices.</li>
            <li>Choose your language.</li>
            <li>Pick a voice and download its Enhanced or Premium version. Premium voices are larger downloads.</li>
          </ol>
          <p style={textStyle}>
            Every app that uses Apple&rsquo;s voices can use the ones you download, including Speak Screen, Kindle&rsquo;s Assistive Reader, and leaf.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--space-10)' }}>
          <h2 style={headingStyle}>Kindle and Apple Books</h2>
          <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
            The Kindle app has its own read-aloud mode, Assistive Reader. Open a book, tap the screen, tap Aa, then More, and turn it on. It highlights as it reads and has speed and rewind controls. It uses your iPhone&rsquo;s voices and works with Kindle books that support it, so it will not read EPUB files you have downloaded elsewhere.
          </p>
          <p style={textStyle}>
            Apple Books has no read-aloud mode of its own beyond children&rsquo;s books with recorded narration, but Speak Screen works well in it and turns the pages automatically.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--space-10)' }}>
          <h2 style={headingStyle}>ElevenReader</h2>
          <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
            ElevenReader is made by ElevenLabs, whose AI voices are widely considered the most natural available. If you want a book to sound as close to a human narrator as text-to-speech gets, it is the one to try. It also imports PDFs, web pages, and documents, and includes a large catalogue of audiobooks.
          </p>
          <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
            The free plan includes 10 hours of AI listening a month, roughly one novel. Unlimited listening is part of Ultra, at $11 a month or $99 a year, and Ultra is also where offline listening lives: you download audio in advance, within a monthly allowance. Because the voices are generated in the cloud, the books and documents you import are processed on ElevenLabs&rsquo; servers.
          </p>
          <p style={textStyle}>
            It is designed first as a listening app. You can follow the text as it plays, but it is not trying to be a full ebook reader with reading layouts and typography. For people who mostly want to listen, that is exactly right.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--space-10)' }}>
          <h2 style={headingStyle}>Speechify and Voice Dream Reader</h2>
          <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
            <strong style={strong}>Speechify</strong> is built for getting through a lot of text: documents, web pages, email, and study material, on phone and computer. There is a free plan, and the more natural voices and higher speeds come with a subscription.
          </p>
          <p style={textStyle}>
            <strong style={strong}>Voice Dream Reader</strong> has been a favourite of blind and low-vision readers for over a decade, with extensive controls over voices, pronunciation, and navigation. It moved to a subscription in 2024.
          </p>
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
            <p style={eyebrowStyle}>leaf</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.18, marginBottom: 'var(--space-4)' }}>
              The reader that reads to you.
            </h2>
            <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
              leaf is an ebook reader first. Turn on the voice in read-along and it reads the page aloud while the line you are on lights up, so you can read with your eyes, your ears, or both, and switch whenever you like.
            </p>
            <p style={{ ...textStyle, marginBottom: 'var(--space-3)' }}>
              It uses the voices on your iPhone, so narration is free and unlimited, works offline, and your books are never uploaded. It keeps reading with the screen locked, with pause, play, and skip back on the lock screen and your headphones. It picks a voice in the book&rsquo;s language, and the Enhanced and Premium voices above make a real difference.
            </p>
            <p style={textStyle}>
              It reads EPUB and Markdown files and the 70,000+ free classics in its Explore tab. It does not read PDFs aloud yet, and its voices are Apple&rsquo;s rather than cloud AI voices.
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
              The line being read is lit. Everything else stays readable.
            </figcaption>
          </figure>
        </section>

        <section style={{ marginBottom: 'var(--space-10)' }}>
          <h2 style={headingStyle}>Which one to use</h2>
          <ul style={{ ...textStyle, paddingLeft: '1.3rem' }}>
            <li style={{ marginBottom: 'var(--space-2)' }}><strong style={strong}>Something quick, nothing to install:</strong> Speak Screen.</li>
            <li style={{ marginBottom: 'var(--space-2)' }}><strong style={strong}>Your Kindle library:</strong> the Kindle app&rsquo;s Assistive Reader.</li>
            <li style={{ marginBottom: 'var(--space-2)' }}><strong style={strong}>EPUB books and free classics, read and listened to together, free and offline:</strong> leaf.</li>
            <li style={{ marginBottom: 'var(--space-2)' }}><strong style={strong}>The most natural voice, and you mostly listen:</strong> ElevenReader.</li>
            <li style={{ marginBottom: 'var(--space-2)' }}><strong style={strong}>Documents and study across phone and computer:</strong> Speechify.</li>
            <li><strong style={strong}>Deep accessibility controls:</strong> Voice Dream Reader.</li>
          </ul>
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
            Read it, or hear it.
          </h2>
          <p style={{ ...textStyle, maxWidth: '52ch', margin: '0 auto var(--space-5)' }}>
            Narration is free in leaf, with no hours to count and no account to make. No streaks, no goals, no ads.
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
