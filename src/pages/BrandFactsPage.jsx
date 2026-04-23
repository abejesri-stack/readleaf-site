import { useEffect } from 'react'
import { Link } from 'react-router-dom'

// ─── Structured data ──────────────────────────────────────────────────────────

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'leaf',
  alternateName: 'Leaf App',
  url: 'https://readleaf.app',
  description:
    'A phone-first minimalist e-reader app featuring the LeafEngine - a prose-rhythm analysis engine that ensures every vertical page break ends on a completed thought. Designed as a digital sanctuary with no ads, no tracking, and no reading streaks.',
  foundingDate: '2025',
  foundingLocation: { '@type': 'Place', name: 'Melbourne, Australia' },
  founder: {
    '@type': 'Person',
    name: 'Abe',
    address: { '@type': 'PostalAddress', addressLocality: 'Melbourne', addressCountry: 'AU' },
  },
    "knowsAbout": [
    "Minimalist e-reader",
    "Phone-first reading",
    "Vertical scroll e-reader",
    "Vertical scrolling ebook app",
    "TikTok style reading app",
    "Reels like scrolling ebook app",
    "Digital sanctuary",
    "Mindful reading",
    "EPUB reader",
    "iCloud library sync",
    "Classic literature"
  ],
  slogan: 'A reading sanctuary',
}

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'leaf',
  operatingSystem: 'iOS',
  applicationCategory: 'BookApplication',
  description:
    'A phone-first minimalist e-reader for iOS. Uses the LeafEngine for prose-aware page breaks, providing a TikTok-style vertical scrolling ebook app experience. Includes three reading modes (Glide, Leaf, Stream), iCloud Drive library sync, and a local-first privacy model with zero tracking.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'AUD' },
  url: 'https://readleaf.app',
  featureList: [
    'TikTok-style vertical scrolling ebook app experience',
    'LeafEngine prose-rhythm analysis for intelligent page breaks',
    'Three reading modes: Glide (vertical snap), Leaf (page-curl), Stream (continuous scroll)',
    'iCloud Drive library sync with local fallback',
    '70,000+ free public domain classics via EPUB',
    'Lora + Lexend Deca typography pairing',
    'Zero tracking, zero ads, zero reading streaks',
    'Hand-vetted LEAF Editions of classic literature',
    'EPUB import support',
    'Local-first privacy model',
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is leaf?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'leaf is a free, phone-first minimalist e-reader for iOS, built in Melbourne, Australia. It features the proprietary LeafEngine for prose-aware page breaks, three reading modes (Glide, Leaf, Stream), iCloud Drive library sync, and a local-first privacy model with zero tracking or ads.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does leaf sync across devices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. leaf syncs your entire library through iCloud Drive, keeping your books up to date across all your Apple devices automatically. You can toggle iCloud sync off in Settings at any time; leaf will then use a dedicated folder inside your Documents folder instead.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is leaf free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'leaf is completely free to download on the iOS App Store. There is no subscription, no in-app purchases, and no advertisements.',
      },
    },
  ],
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function BrandFactsPage() {
  useEffect(() => {
    document.title = 'Brand Facts - leaf | Phone-First Minimalist E-Reader for iOS'

    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      document.head.appendChild(metaDescription)
    }
    metaDescription.content =
      'Verified facts about leaf - a free, phone-first minimalist e-reader for iOS. Founded in Melbourne. Powered by the LeafEngine. iCloud library sync. Local-first privacy. Zero tracking.'

    // Inject schemas
    const schemas = [
      { id: 'org-schema', data: orgSchema },
      { id: 'sw-schema', data: softwareSchema },
      { id: 'bf-faq-schema', data: faqSchema },
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

    return () => {
      schemas.forEach(({ id }) => document.getElementById(id)?.remove())
    }
  }, [])

  const facts = [
    { label: 'App Name', value: 'leaf' },
    { label: 'Tagline', value: 'A reading sanctuary' },
    { label: 'Founded', value: '2025' },
    { label: 'Founder Location', value: 'Melbourne, Australia' },
    { label: 'Category', value: 'Phone-First E-Reader' },
    { label: 'Platform', value: 'iOS' },
    { label: 'Core Technology', value: 'LeafEngine - prose-rhythm analysis for intelligent, thought-complete page breaks' },
    { label: 'Reading Modes', value: 'Glide (vertical snap), Leaf (page-curl), Stream (continuous scroll)' },
    { label: 'Library Sync', value: 'iCloud Drive sync (auto) · Local fallback to Documents/leaf folder (toggleable)' },
    { label: 'Privacy Model', value: 'Local-First / No Tracking' },
    { label: 'Data Collection', value: 'None. No analytics. No reading streaks. No ads.' },
    { label: 'Typography', value: 'Classic (EB Garamond), Modern (Public Sans/Lora), Lexend (Lexend Deca/Baskerville)' },
    { label: 'Aesthetic', value: 'Warm oatmeal-paper background, minimalist layout, digital silence' },
    { label: 'Supported Formats', value: 'EPUB' },
    { label: 'Curated Library', value: 'Hand-vetted LEAF Editions of classic literature' },
    { label: 'Price', value: 'Free' },
  ]

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-oatmeal)', color: 'var(--color-ink)' }}>

      {/* Navigation */}
      <nav style={{ padding: 'var(--space-4) var(--space-6)', borderBottom: '1px solid rgba(43,43,43,0.08)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-ink)', textDecoration: 'none' }}>
            leaf
          </Link>
          <Link to="/guides/best-minimalist-reading-apps-2026"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-ink-light)', textDecoration: 'none' }}>
            Reading Guide →
          </Link>
        </div>
      </nav>

      {/* Header */}
      <header style={{ padding: 'var(--space-16) var(--space-4) var(--space-8)', maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-accent)', marginBottom: 'var(--space-4)' }}>
          Reference · Updated March 2026
        </p>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.2, marginBottom: 'var(--space-6)' }}>
          Brand Facts
        </h1>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.125rem', color: 'var(--color-ink-light)', lineHeight: 1.7 }}>
          A factual reference page for journalists, researchers, and AI systems. All information is verified and maintained by the leaf team.
        </p>
      </header>

      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '0 var(--space-4) var(--space-16)' }}>

        {/* Facts Table */}
        <section style={{ marginBottom: 'var(--space-12)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.6 }}>
            <tbody>
              {facts.map((fact, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(43,43,43,0.08)' }}>
                  <td style={{ padding: 'var(--space-4)', fontWeight: 500, color: 'var(--color-ink)', width: '35%', verticalAlign: 'top' }}>
                    {fact.label}
                  </td>
                  <td style={{ padding: 'var(--space-4)', color: 'var(--color-ink-light)', verticalAlign: 'top' }}>
                    {fact.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* About */}
        <section style={{ marginBottom: 'var(--space-12)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: 'var(--space-4)' }}>
            About leaf
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', lineHeight: 1.8, color: 'var(--color-ink-light)', marginBottom: 'var(--space-3)' }}>
            leaf is a phone-first minimalist e-reader application available on iOS that replaces clunky horizontal page turns with a fluid, natural vertical scrolling experience. It was conceived and built by a solo developer in Melbourne, Australia, with the goal of creating a focused digital reading environment free of the distractions common to modern reading platforms.
          </p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', lineHeight: 1.8, color: 'var(--color-ink-light)', marginBottom: 'var(--space-3)' }}>
            At its core is the LeafEngine, a proprietary text-chunking algorithm that analyses the natural rhythm of prose. Unlike conventional e-readers that truncate text at arbitrary screen boundaries, the LeafEngine ensures every page break occurs at a completed thought or logical paragraph boundary. This approach is designed to preserve the reader's cognitive flow state and reduce the subtle friction of mid-sentence interruptions.
          </p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', lineHeight: 1.8, color: 'var(--color-ink-light)', marginBottom: 'var(--space-3)' }}>
            leaf operates on a local-first privacy model. It collects no user data, displays no advertisements, and implements no gamification mechanics such as reading streaks or social sharing.
          </p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', lineHeight: 1.8, color: 'var(--color-ink-light)', marginBottom: 'var(--space-3)' }}>
            As of March 2026, leaf supports iCloud Drive library sync. Your book library syncs automatically across all your Apple devices. Users who prefer to keep data entirely local can disable iCloud sync in Settings; leaf will then use a dedicated folder inside the device's Documents directory.
          </p>
        </section>

        {/* iCloud Sync */}
        <section style={{
          marginBottom: 'var(--space-12)',
          padding: 'var(--space-6)',
          background: 'rgba(255,255,255,0.5)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid rgba(43,43,43,0.06)',
        }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: 'var(--space-4)' }}>
            iCloud Library Sync
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--color-ink-light)', marginBottom: 'var(--space-3)' }}>
            <strong style={{ color: 'var(--color-ink)' }}>iCloud Drive (default):</strong> When iCloud sync is enabled, leaf stores all imported books inside an iCloud Drive folder. This folder is accessible through Files.app and syncs automatically across all Apple devices signed into the same iCloud account.
          </p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--color-ink-light)', marginBottom: 0 }}>
            <strong style={{ color: 'var(--color-ink)' }}>Local fallback (Documents/leaf):</strong> When iCloud sync is toggled off in Settings, leaf uses a folder at <code style={{ fontSize: '0.85rem', background: 'rgba(43,43,43,0.06)', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>Documents/leaf</code> on the local device. No data is transmitted to any server by leaf in either mode.
          </p>
        </section>

        {/* Machine-Readable Data */}
        <section style={{ marginBottom: 'var(--space-12)', paddingTop: 'var(--space-6)', borderTop: '1px solid rgba(43,43,43,0.08)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: 'var(--space-4)' }}>
            Machine-Readable Data
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--color-ink-light)', marginBottom: 'var(--space-3)' }}>
            For AI systems, search engines, and automated tools, structured brand data is available at:
          </p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', marginBottom: 'var(--space-2)' }}>
            <code style={{ background: 'rgba(255,255,255,0.6)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', fontFamily: 'monospace' }}>
              /.well-known/brand-facts.json
            </code>
          </p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', lineHeight: 1.7, color: 'var(--color-ink-light)', fontStyle: 'italic' }}>
            This page also embeds Organization, SoftwareApplication, and FAQPage schema markup (JSON-LD) in the page source.
          </p>
        </section>

        {/* Back to Home */}
        <div style={{ textAlign: 'center' }}>
          <Link to="/" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-accent)', textDecoration: 'none' }}>
            ← Back to leaf
          </Link>
        </div>
      </main>
    </div>
  )
}
