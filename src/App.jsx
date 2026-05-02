import { useEffect } from 'react'
import { motion as Motion } from 'framer-motion'
import { Link } from 'react-router-dom'

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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="160"
      height="54"
      viewBox="0 0 160 54"
      role="img"
      aria-label="Download on the App Store"
    >
      {/* Badge background */}
      <rect width="160" height="54" rx="9" fill="#000" />
      <rect x="0.75" y="0.75" width="158.5" height="52.5" rx="8.25" stroke="rgba(255,255,255,0.2)" strokeWidth="0.75" fill="none" />

      {/* Apple logo - canonical path, positioned left-center */}
      {/*
        Standard Apple logo path in a ~170×205 unit space.
        Scaled to ~22px tall, centered vertically in the 54px badge.
        translate(16, 16) scale(0.107) puts it at roughly 18×22px.
      */}
      <g transform="translate(16, 15.5) scale(0.108)">
        {/* Leaf */}
        <path
          d="M 113.0,0.0
             C 104.8,0.5 95.1,6.2 89.4,13.5
               83.9,20.6 79.2,32.1 81.1,43.2
               92.3,43.6 103.9,37.5 109.4,30.1
               114.8,22.9 118.9,11.3 113.0,0.0 Z"
          fill="white"
        />
        {/* Body */}
        <path
          d="M 111.0,44.4
             C 95.7,44.4 88.4,54.0 76.8,54.0
               65.5,54.0 55.7,44.7 42.1,44.7
               19.8,44.7 0.0,63.4 0.0,97.8
               0.0,119.8 8.3,142.9 18.6,158.7
               27.4,172.2 35.1,183.0 46.4,183.0
               57.5,183.0 62.2,175.8 75.6,175.8
               89.1,175.8 93.6,183.0 104.9,183.0
               116.3,183.0 124.0,172.0 132.6,159.7
               138.5,151.2 140.8,145.7 143.7,137.8
               118.9,127.4 114.8,91.7 140.0,79.6
               132.4,64.5 121.2,44.4 111.0,44.4 Z"
          fill="white"
        />
      </g>

      {/* "Download on the" */}
      <text
        x="45"
        y="22"
        fontFamily="-apple-system, 'Helvetica Neue', Arial, sans-serif"
        fontSize="10.5"
        fontWeight="400"
        letterSpacing="0.15"
        fill="white"
      >
        Download on the
      </text>

      {/* "App Store" */}
      <text
        x="44"
        y="39"
        fontFamily="-apple-system, 'Helvetica Neue', Arial, sans-serif"
        fontSize="21"
        fontWeight="600"
        letterSpacing="-0.4"
        fill="white"
      >
        App Store
      </text>
    </svg>
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
    document.title = 'leaf - Vertical Scrolling Ebook App for iOS'

    // Meta description
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    meta.content =
      'leaf is a minimalist iOS e-reader with vertical-first reading, 70,000+ free classics, and optional leaf Pro sync for your library, progress, highlights, notes, and journals.'

    // Open Graph
    const ogTags = [
      { property: 'og:title', content: 'leaf - Vertical Scrolling Ebook App for iOS' },
      { property: 'og:description', content: 'A quieter ebook app for iPhone. Vertical-first reading, free classics, and optional leaf Pro sync across devices.' },
      { property: 'og:image', content: 'https://readleaf.app/leaf-app-icon.png' },
      { property: 'og:url', content: 'https://readleaf.app' },
      { property: 'og:type', content: 'website' },
    ]
    ogTags.forEach(({ property, content }) => {
      let el = document.querySelector(`meta[property="${property}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('property', property)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    })

    // SoftwareApplication JSON-LD for AEO
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'leaf',
      operatingSystem: 'iOS',
      applicationCategory: 'BookApplication',
      description:
        'A phone-first minimalist e-reader for iOS. Features the LeafEngine for prose-aware page breaks, three reading modes (Glide, Leaf, Stream), and optional leaf Pro sync for library metadata, progress, annotations, journals, covers, and supported book files.',
      offers: [
        { '@type': 'Offer', price: '0', priceCurrency: 'AUD', description: 'Free download' },
        { '@type': 'Offer', description: 'Optional leaf Pro auto-renewable subscription for sync features' },
      ],
      url: 'https://readleaf.app',
      featureList: [
        'LeafEngine prose-rhythm analysis for intelligent page breaks',
        'Three reading modes: Glide, Leaf, Stream',
        'leaf Pro sync for library metadata, progress, annotations, journals, covers, and supported book files',
        'iCloud Book Vault support for large original files',
        '70,000+ free public domain classics',
        'Zero tracking, zero ads, zero reading streaks',
        'EPUB import support',
        'Privacy-conscious reading model with no ads or behavioural tracking',
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
              A quieter way<br />to <em>read.</em>
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
              Vertical-first scrolling. 70,000 free classics.<br />
              Optional leaf Pro sync. No noise.
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
              Reading on your phone<br />should feel like reading.
            </h2>
            <div style={{ marginTop: 'var(--space-8)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <p style={{ maxWidth: 'none' }}>
                Most reading apps were built around the technology, not around you. They borrow the page from a physical book and force it onto a screen you hold vertically, in one hand.
              </p>
              <p style={{ maxWidth: 'none' }}>
                You get cut off mid-thought. The flow breaks. leaf was built to fix that — by bringing a fluid, natural vertical-first scrolling experience to reading.
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
                title: 'Glide',
                subtitle: 'Smooth vertical snap',
                desc: 'Swipe up. Each page settles perfectly in place, landing exactly where the thought ends. Fast, fluid, and surprisingly satisfying.',
                bg: 'rgba(255,255,255,0.55)',
              },
              {
                title: 'Leaf',
                subtitle: 'Tactile page-curl',
                desc: 'The classic page-turn, reimagined for the phone. Marks your progress and brings the feel of a real book to your screen.',
                bg: 'rgba(255,255,255,0.35)',
              },
              {
                title: 'Stream',
                subtitle: 'Continuous scroll',
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
                New · leaf Pro Sync
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
                  desc="Under-limit book files can sync through leaf; large originals can remain available through iCloud Book Vault."
                />
                <FeatureBadge
                  label="No ads or tracking"
                  desc="leaf Pro adds sync, not feeds, streaks, advertising, or behavioural analytics."
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
              A Quiet Place<br />for Great Thoughts.
            </h2>
            <div style={{ marginTop: 'var(--space-8)' }}>
              <p style={{ color: 'rgba(244,241,234,0.8)', maxWidth: 'none' }}>
                <em>leaf</em> is designed for total digital silence. No distractions pulling you away, no streaks or notifications nudging you back.
              </p>
              <p style={{ color: 'rgba(244,241,234,0.8)', maxWidth: 'none' }}>
                Every detail - the warm paper-toned background, the carefully chosen typefaces - is designed to fade away so the writing can take over.
              </p>
              <p style={{ color: 'var(--color-white)', marginTop: 'var(--space-6)', maxWidth: 'none' }}>
                And with hand-vetted editions of 70,000+ classics - from Marcus Aurelius's <em>Meditations</em> to Emily Brontë's <em>Wuthering Heights</em> - there's always something great to read next.
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
              Free on the App Store. leaf Pro is optional for cross-device sync. No ads.
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
