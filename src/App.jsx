import { useEffect } from 'react'
import { motion as Motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { setPageMeta } from './seo.js'

// ─── App Store Badge ─────────────────────────────────────────────────────────
const AppStoreBadge = () => (
  <a
    href="https://apps.apple.com/app/leaf-ebook-reader/id6758810936"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Download leaf on the App Store"
    style={{ display: 'inline-block', transition: 'opacity 0.2s ease' }}
    onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
  >
    {/* Apple's official badge artwork: Apple's guidelines don't allow redrawing it */}
    <img
      src="/app-store-badge.svg"
      alt="Download on the App Store"
      width="162"
      height="54"
      style={{ display: 'block' }}
    />
  </a>
)

// ─── Animation helpers ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' } },
}
const fadeLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -28 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay } },
})
const fadeRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 28 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay } },
})

// ─── Feature badge ────────────────────────────────────────────────────────────
const FeatureBadge = ({ label, desc }) => (
  <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
    <div style={{
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      background: 'rgba(139,115,85,0.12)',
      border: '1px solid rgba(139,115,85,0.25)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      marginTop: '2px',
    }}>
      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
        <path d="M1 4l2.5 2.5L9 1" stroke="#8b7355" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    <div>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-ink)', margin: 0, marginBottom: '0.15rem', maxWidth: 'none' }}>
        {label}
      </p>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--color-ink-light)', margin: 0, lineHeight: 1.55, maxWidth: 'none' }}>
        {desc}
      </p>
    </div>
  </div>
)

// ─── App ─────────────────────────────────────────────────────────────────────
function App() {
  useEffect(() => {
    // The OG card image and og:type come from index.html.
    setPageMeta({
      title: 'leaf: eBook Reader - Vertical-Swipe Book Reader for iPhone',
      description: 'A vertical-swipe ebook reader for iPhone that reads aloud for free, offline. Free classics from Standard Ebooks and Project Gutenberg, your own EPUB, PDF and Markdown files, and no ads.',
      ogDescription: 'Swipe through ebooks on iPhone, or let leaf read them aloud for free, offline. Free classics, your own files, and optional leaf Pro sync.',
      canonical: 'https://readleaf.co/',
    })

    // SoftwareApplication JSON-LD for AEO
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'leaf: eBook Reader',
      alternateName: 'leaf',
      operatingSystem: 'iOS',
      applicationCategory: 'BookApplication',
      description:
        'A vertical-swipe ebook reader for iOS. Features the LeafEngine for prose-aware page breaks, read-along with free on-device narration, built-in Standard Ebooks and Project Gutenberg discovery, EPUB/PDF/Markdown imports, three reading modes (Slide, Page Curl, Continuous), and optional leaf Pro sync for library metadata, progress, annotations, journals, shelves, and covers.',
      offers: [
        { '@type': 'Offer', price: '0', priceCurrency: 'AUD', description: 'Free download' },
        { '@type': 'Offer', description: 'Optional leaf Pro auto-renewable subscription for sync features' },
      ],
      url: 'https://readleaf.co/',
      featureList: [
        'LeafEngine prose-rhythm analysis for intelligent page breaks',
        'Built-in Standard Ebooks and Project Gutenberg discovery',
        'Three reading modes: Slide, Page Curl, Continuous',
        'Read-along mode that lights each line as you read',
        'Free read-aloud narration with the voices built into iPhone: unlimited, offline, and private, with lock-screen and headphone controls',
        'Custom reading themes: design up to six of your own with leaf Pro',
        'leaf Pro sync for library metadata, progress, annotations, journals, shelves, and covers',
        'iCloud Book Vault support for large original files',
        'Standard Ebooks and Project Gutenberg discovery through Explore',
        'Zero content tracking, zero ads, zero reading streaks',
        'EPUB, PDF, and Markdown import support',
        'Privacy-conscious reading model with no ads, no content tracking, and optional anonymous product analytics',
        'Lora + Lexend Deca curated typography',
      ],
    }
    let sw = document.getElementById('home-sw-schema')
    if (!sw) {
      sw = document.createElement('script')
      sw.id = 'home-sw-schema'
      sw.type = 'application/ld+json'
      document.head.appendChild(sw)
    }
    sw.textContent = JSON.stringify(schema)

    return () => {
      document.getElementById('home-sw-schema')?.remove()
    }
  }, [])

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          HERO - split layout matching brand slide reference
          ═══════════════════════════════════════════════════════ */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          background: 'var(--color-oatmeal)',
          padding: '0 clamp(1.5rem, 5vw, 5rem)',
          paddingBottom: 'clamp(3rem, 6vw, 5rem)',
        }}
      >
        {/* ── Nav ── */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 'var(--space-4) 0',
            borderBottom: '1px solid rgba(43,43,43,0.07)',
            marginBottom: 'var(--space-8)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <img src="/leaf-app-icon.png" alt="leaf" width="28" height="28"
              style={{ borderRadius: '7px', objectFit: 'cover' }} />
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--color-ink)' }}>
              leaf
            </span>
          </div>
          <a
            href="https://apps.apple.com/app/leaf-ebook-reader/id6758810936"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.72rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--color-ink-light)',
              padding: '0.4rem 1rem',
              border: '1px solid rgba(43,43,43,0.15)',
              borderRadius: 'var(--radius-full)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-ink)'; e.currentTarget.style.color = 'var(--color-oatmeal)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-ink-light)' }}
          >
            Download Free
          </a>
        </nav>

        {/* ── Split content ── */}
        <div className="hero-grid" style={{ flex: 1, maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          {/* Left: copy */}
          <Motion.div
            className="hero-copy"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.8rem, 5.5vw, 5.5rem)',
              lineHeight: 1.05,
              color: 'var(--color-ink)',
              marginBottom: 'var(--space-5)',
              letterSpacing: '-0.01em',
            }}>
              Swipe through<br /><em>books.</em>
            </h1>

            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.9rem, 1.1vw, 1.05rem)',
              color: 'var(--color-ink-light)',
              lineHeight: 1.75,
              maxWidth: '36ch',
              marginBottom: 'var(--space-8)',
              marginTop: 0,
            }}>
              Vertical-swipe reading. Built-in free classics.<br />
              And a voice that reads along with you, free.
            </p>

            <AppStoreBadge />
          </Motion.div>

          {/* Right: phone screenshot */}
          <Motion.div
            className="hero-phone"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.35 }}
            style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}
          >
            <div style={{
              background: '#1c1c1e',
              borderRadius: '3rem',
              padding: '10px',
              maxWidth: '300px',
              width: '100%',
              filter: 'drop-shadow(0 30px 70px rgba(0,0,0,0.22))',
            }}>
              <div style={{ borderRadius: '2.5rem', overflow: 'hidden', position: 'relative' }}>
                <div style={{
                  position: 'absolute', top: '8px', left: '50%',
                  transform: 'translateX(-50%)',
                  width: '72px', height: '22px',
                  background: '#1c1c1e', borderRadius: '12px', zIndex: 10,
                }} aria-hidden="true" />
                <img
                  src="/screenshots/screenshot-cover-new.png"
                  alt="leaf app displaying the Wuthering Heights book cover by Emily Brontë"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </Motion.div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          CORE PROBLEM
          ═══════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: 'rgba(255,255,255,0.35)' }}>
        <div className="container">
          <Motion.div
            initial="hidden" whileInView="show" variants={fadeUp}
            viewport={{ once: true, margin: '-80px' }}
            style={{ maxWidth: '800px', margin: '0 auto' }}
          >
            <h2 className="text-center" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Reading on iPhone<br />should move vertically.
            </h2>
            <div style={{ marginTop: 'var(--space-8)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <p style={{ maxWidth: 'none' }}>
                Most ebook apps still borrow the page from a physical book. On a phone you hold vertically, horizontal page turns can feel like a convention carried over from another device.
              </p>
              <p style={{ maxWidth: 'none' }}>
                leaf was built around thumb-driven vertical swipes. Slide snaps each screen into place, Continuous lets you scroll freely, and Page Curl keeps a familiar page-turn feel when you want it.
              </p>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.5rem', color: 'var(--color-ink)', textAlign: 'center', marginTop: 'var(--space-8)', maxWidth: 'none' }}>
                The best reading experience is one you don't notice.
              </p>
            </div>
          </Motion.div>
        </div>
      </section>

      <div className="spacer-md" />


      {/* ═══════════════════════════════════════════════════════
          LEAFENGINE
          ═══════════════════════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-12)', alignItems: 'center' }}>

            <Motion.div initial="hidden" whileInView="show" variants={fadeLeft()} viewport={{ once: true }}>
              <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>
                Every page ends<br />on a complete thought.
              </h2>
              <p>Most reading apps cut off wherever the screen runs out - right in the middle of a sentence, a thought, a moment.</p>
              <p>leaf reads the natural rhythm of the prose and always pauses at the right place. Every swipe lands where the thought ends. You stay in the story.</p>
              <p style={{ color: 'var(--color-ink)', fontWeight: 500, maxWidth: 'none' }}>
                No interruptions. Just flow.
              </p>
            </Motion.div>

            <Motion.div initial="hidden" whileInView="show" variants={fadeRight()} viewport={{ once: true }}
              style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{
                background: '#1c1c1e',
                borderRadius: '3rem',
                padding: '10px',
                maxWidth: '280px',
                width: '100%',
                filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.18))',
              }}>
                <div style={{ borderRadius: '2.5rem', overflow: 'hidden', position: 'relative' }}>
                  <div style={{
                    position: 'absolute', top: '8px', left: '50%',
                    transform: 'translateX(-50%)',
                    width: '72px', height: '22px',
                    background: '#1c1c1e', borderRadius: '12px', zIndex: 10,
                  }} aria-hidden="true" />
                  <img
                    src="/screenshots/screenshot-pageturn-new.png"
                    alt="leaf reader showing the page-curl Leaf mode - The First Breath"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              </div>
            </Motion.div>

          </div>
        </div>
      </section>

      <div className="spacer-md" />


      {/* ═══════════════════════════════════════════════════════
          THREE FLOWS
          ═══════════════════════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <Motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', marginBottom: 'var(--space-3)' }}>
              Three Ways to Read.
            </h2>
            <p style={{ margin: '0 auto', maxWidth: '48ch', textAlign: 'center' }}>
              Every reader has a rhythm. leaf offers three distinct flows - pick the one that fits yours.
            </p>
          </Motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-5)' }}>
            {[
              {
                title: 'Slide',
                subtitle: 'Smooth vertical snap',
                desc: 'Swipe up. Each page settles perfectly in place, landing exactly where the thought ends. Fast, fluid, and surprisingly satisfying.',
                bg: 'rgba(255,255,255,0.55)',
              },
              {
                title: 'Page Curl',
                subtitle: 'A real page, turned',
                desc: 'The classic page-turn, reimagined for the phone. Marks your progress and brings the feel of a real book to your screen.',
                bg: 'rgba(255,255,255,0.35)',
              },
              {
                title: 'Continuous',
                subtitle: 'Scroll without breaks',
                desc: 'Scroll freely through the text without boundaries or breaks. Great for when you just want to lose yourself in a book.',
                bg: 'rgba(255,255,255,0.45)',
              },
            ].map((flow, i) => (
              <Motion.div
                key={flow.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                style={{
                  background: flow.bg,
                  borderRadius: '1.5rem',
                  padding: 'var(--space-8) var(--space-6)',
                  textAlign: 'left',
                  border: '1px solid rgba(43,43,43,0.07)',
                  backdropFilter: 'blur(4px)',
                }}
              >
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.68rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  color: 'var(--color-accent)',
                  marginBottom: 'var(--space-2)',
                  fontWeight: 600,
                  maxWidth: 'none',
                }}>
                  {flow.subtitle}
                </p>
                <h3 style={{ fontSize: '2rem', marginBottom: 'var(--space-4)' }}>{flow.title}</h3>
                <p style={{ fontSize: '0.95rem', margin: 0, lineHeight: 1.75, maxWidth: 'none' }}>
                  {flow.desc}
                </p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="spacer-md" />


      {/* ═══════════════════════════════════════════════════════
          READ ALONG
          ═══════════════════════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-12)', alignItems: 'center' }}>

            <Motion.div initial="hidden" whileInView="show" variants={fadeLeft()} viewport={{ once: true }}>
              <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>
                For the days<br />you can&rsquo;t settle.
              </h2>
              <p>Some days you want to read and your attention keeps sliding off the page. You read the same paragraph three times and give up.</p>
              <p>Tap play. leaf sets a gentle pace and lights up each line as you go, so the book keeps moving and you do too. Change the speed whenever you like, pause with a tap, or step back a sentence.</p>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.35rem', color: 'var(--color-ink)', marginTop: 'var(--space-6)', maxWidth: 'none' }}>
                Nothing disappears. You can always look back.
              </p>
            </Motion.div>

            <Motion.div initial="hidden" whileInView="show" variants={fadeRight()} viewport={{ once: true }}
              style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{
                background: '#1c1c1e',
                borderRadius: '3rem',
                padding: '10px',
                maxWidth: '250px',
                width: '100%',
                filter: 'drop-shadow(0 32px 64px rgba(0,0,0,0.22))',
              }}>
                <div style={{ borderRadius: '2.5rem', overflow: 'hidden', background: '#1c1c1c' }}>
                  <img
                    src="/screenshots/screenshot-readalong.png"
                    alt="leaf read along mode, with the current line lit and the rest of the page softened"
                    style={{ width: '100%', display: 'block' }}
                    loading="lazy"
                  />
                </div>
              </div>
            </Motion.div>

          </div>
        </div>
      </section>


      <div className="spacer-md" />


      {/* ═══════════════════════════════════════════════════════
          READ ALOUD
          ═══════════════════════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <Motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.68rem',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'var(--color-accent)',
              marginBottom: 'var(--space-3)',
              fontWeight: 600,
              textAlign: 'center',
              maxWidth: 'none',
            }}>
              New · Read aloud
            </p>
            <h2 className="text-center" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', marginBottom: 'var(--space-3)' }}>
              The reader that<br />reads to you.
            </h2>
            <p style={{ margin: '0 auto var(--space-8)', maxWidth: '52ch', textAlign: 'center' }}>
              Turn on the voice in read-along and leaf reads the page aloud while the line lights up beside it. Read with your eyes, your ears, or both, and switch whenever you like.
            </p>
          </Motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: 'var(--space-8)', maxWidth: '760px', margin: '0 auto' }}>
            <FeatureBadge
              label="Free, with no meter"
              desc="Listen to a chapter or a whole book. There are no hours to count and no account to make."
            />
            <FeatureBadge
              label="Private and offline"
              desc="The voice runs on your iPhone. Your books are never uploaded, and it works without a connection."
            />
            <FeatureBadge
              label="Keeps going when you lock"
              desc="Pause, play, or skip back 15 seconds from the lock screen or your headphones."
            />
            <FeatureBadge
              label="Natural voices"
              desc="leaf picks a voice in the book's language. Apple's Enhanced and Premium voices are a free download and sound the most natural."
            />
          </div>
        </div>
      </section>


      <div className="spacer-md" />


      {/* ═══════════════════════════════════════════════════════
          PDFs
          ═══════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: 'rgba(255,255,255,0.4)' }}>
        <div className="container">
          <Motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }}>
            <h2 className="text-center" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', marginBottom: 'var(--space-3)' }}>
              PDFs that fit<br />the phone.
            </h2>
            <p style={{ margin: '0 auto var(--space-8)', maxWidth: '52ch', textAlign: 'center' }}>
              Most readers hand you a whole A4 page shrunk to fit a screen, and you pinch and drag your way through it. leaf finds the columns and shows you one at a time, so the text is bigger and you never scroll sideways to finish a line.
            </p>
          </Motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--space-8)', maxWidth: '900px', margin: '0 auto' }}>
            <FeatureBadge
              label="The same three flows"
              desc="Read PDFs with Slide, Page Curl, or Continuous, exactly like any other book."
            />
            <FeatureBadge
              label="Follows your theme"
              desc="Pages switch to light or dark with the rest of the app, automatically."
            />
            <FeatureBadge
              label="Picks up where you left off"
              desc="Your position is kept per document, including which part of the page you were on."
            />
          </div>
        </div>
      </section>


      <div className="spacer-md" />


      {/* ═══════════════════════════════════════════════════════
          LEAF PRO SYNC
          ═══════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: 'rgba(255,255,255,0.4)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-12)', alignItems: 'center' }}>

            {/* Phone mockup - left */}
            <Motion.div initial="hidden" whileInView="show" variants={fadeLeft()} viewport={{ once: true }}
              style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{
                background: '#1c1c1e',
                borderRadius: '3rem',
                padding: '10px',
                maxWidth: '250px',
                width: '100%',
                filter: 'drop-shadow(0 32px 64px rgba(0,0,0,0.22))',
              }}>
                <div style={{
                  borderRadius: '2.5rem',
                  overflow: 'hidden',
                  position: 'relative',
                  background: '#1c1c1c',
                }}>
                  {/* Dynamic Island */}
                  <div style={{
                    position: 'absolute',
                    top: '8px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '72px',
                    height: '22px',
                    background: '#1c1c1e',
                    borderRadius: '12px',
                    zIndex: 10,
                  }} aria-hidden="true" />
                  <img
                    src="/screenshots/screenshot-library.png"
                    alt="leaf Library screen showing your book collection"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              </div>
            </Motion.div>

            {/* Copy - right */}
            <Motion.div initial="hidden" whileInView="show" variants={fadeRight()} viewport={{ once: true }}>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.68rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'var(--color-accent)',
                marginBottom: 'var(--space-3)',
                fontWeight: 600,
                maxWidth: 'none',
              }}>
                leaf Pro
              </p>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: 'var(--space-5)' }}>
                Pick up where<br />you left off.
              </h2>
              <p>
              You can sync your books across Apple devices with iCloud for free. 
              </p>
              <p>
              With leaf Pro your reading progress, shelves, highlights, notes, and reading journals all stay in sync without the need for iCloud.
              </p>
              <div style={{ marginTop: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <FeatureBadge
                  label="Account-backed sync"
                  desc="Progress, shelves, bookmarks, highlights, notes, and reading journals sync through leaf Pro."
                />
                <FeatureBadge
                  label="Book file fallback"
                  desc="Sync reading progress, annotations, journals, shelves, and covers; large originals can remain available through iCloud Book Vault."
                />
                <FeatureBadge
                  label="Make it yours"
                  desc="Six more themes or design up to six of your own, three more typefaces or import your own, and control over line, paragraph, and letter spacing."
                />
                <FeatureBadge
                  label="No ads or content tracking"
                  desc="leaf Pro adds sync and customisation, not feeds, streaks, advertising, or book-content tracking."
                />
              </div>
            </Motion.div>

          </div>
        </div>
      </section>

      <div className="spacer-md" />


      {/* ═══════════════════════════════════════════════════════
          AESTHETIC / LIBRARY
          ═══════════════════════════════════════════════════════ */}
      <section className="section" style={{ backgroundColor: 'var(--color-ink)', color: 'var(--color-oatmeal)' }}>
        <div className="container text-center">
          <Motion.div
            initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }}
            style={{ maxWidth: '800px', margin: '0 auto' }}
          >
            <h2 style={{ color: 'var(--color-white)', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Free classics<br />built in.
            </h2>
            <div style={{ marginTop: 'var(--space-8)' }}>
              <p style={{ color: 'rgba(244,241,234,0.8)', maxWidth: 'none' }}>
                Explore brings public-domain discovery into the reader, so you can find classics without digging through archive pages first.
              </p>
              <p style={{ color: 'rgba(244,241,234,0.8)', maxWidth: 'none' }}>
                Standard Ebooks and Project Gutenberg discovery sit beside your imported EPUB, PDF, and Markdown files.
              </p>
              <p style={{ color: 'var(--color-white)', marginTop: 'var(--space-6)', maxWidth: 'none' }}>
                The result is still quiet: no ads, no streaks, no social feed, just a better way to swipe through long books on your phone.
              </p>
            </div>

            <Motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ marginTop: 'var(--space-12)', display: 'flex', justifyContent: 'center' }}
            >
              <div style={{
                background: '#1c1c1e',
                borderRadius: '3rem',
                padding: '10px',
                maxWidth: '250px',
                width: '100%',
                filter: 'drop-shadow(0 24px 56px rgba(0,0,0,0.55))',
              }}>
                <div style={{ borderRadius: '2.5rem', overflow: 'hidden', position: 'relative' }}>
                  <div style={{
                    position: 'absolute', top: '8px', left: '50%',
                    transform: 'translateX(-50%)',
                    width: '72px', height: '22px',
                    background: '#1c1c1e', borderRadius: '12px', zIndex: 10,
                  }} aria-hidden="true" />
                  <img
                    src="/screenshots/screenshot-explore-new.png"
                    alt="leaf Explore screen showing the leaf Collection of classic books"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              </div>
            </Motion.div>
          </Motion.div>
        </div>
      </section>

      <div className="spacer-md" />


      {/* ═══════════════════════════════════════════════════════
          FOUNDER
          ═══════════════════════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <Motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 1 }}
            style={{
              maxWidth: '600px',
              margin: '0 auto',
              borderLeft: '2px solid rgba(139,115,85,0.3)',
              paddingLeft: 'var(--space-8)',
            }}
          >
            <h2>Built by a single reader.</h2>
            <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', marginTop: 'var(--space-6)' }}>
              <p>leaf was not engineered in a boardroom. It was crafted by hand, born out of a personal frustration with the noise and friction of modern digital reading.</p>
              <p>I wanted a space that revered the written word - a mindful reading app and pocket-sized retreat tailored to the cadence of great literature. Built with absolute intent for those who seek depth over distraction.</p>
              <p style={{ fontFamily: 'var(--font-sans)', fontStyle: 'normal', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 'var(--space-6)', color: 'var(--color-ink)', maxWidth: 'none' }}>
                - From the Developer.
              </p>
            </div>
          </Motion.div>
        </div>
      </section>

      <div className="spacer-md" />


      {/* ═══════════════════════════════════════════════════════
          FINAL CTA
          ═══════════════════════════════════════════════════════ */}
      <section
        id="download"
        className="section"
        style={{
          minHeight: '55vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          background: 'linear-gradient(to bottom, var(--color-oatmeal), #f9f7f2)',
        }}
      >
        <div className="container">
          <Motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Start reading more,<br />starting today.
            </h2>
            <p style={{ margin: 'var(--space-5) auto var(--space-8)', maxWidth: '40ch', textAlign: 'center' }}>
              Free on the App Store, read-aloud included. leaf Pro is optional for sync and customisation. No ads.
            </p>
            <AppStoreBadge />
          </Motion.div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════════════════════ */}
      <footer style={{
        padding: 'var(--space-8) var(--space-4)',
        textAlign: 'center',
        background: '#f9f7f2',
        borderTop: '1px solid rgba(43,43,43,0.06)',
      }}>
        <div style={{ marginBottom: 'var(--space-3)', display: 'flex', justifyContent: 'center', gap: 'var(--space-6)', flexWrap: 'wrap' }}>
          <Link to="/guides"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(43,43,43,0.4)' }}>
            Guides
          </Link>
          <Link to="/guides/best-vertical-scrolling-ebook-apps-iphone"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(43,43,43,0.4)' }}>
            Vertical Reading
          </Link>
          <Link to="/brand-facts"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(43,43,43,0.4)' }}>
            Brand Facts
          </Link>
          <a href="/legal/"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(43,43,43,0.4)' }}>
            Privacy & Terms
          </a>
        </div>
        <p style={{ margin: 0, fontFamily: 'var(--font-sans)', color: 'rgba(43,43,43,0.35)', fontSize: '0.82rem', maxWidth: 'none' }}>
          © {new Date().getFullYear()} leaf. Made with intent in Melbourne.
        </p>
      </footer>
    </>
  )
}

export default App
