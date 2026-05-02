import { useEffect } from 'react'
import { Link } from 'react-router-dom'

// ─── Structured data ──────────────────────────────────────────────────────────

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'leaf',
  alternateName: 'leaf app',
  url: 'https://readleaf.app',
  description:
    'A phone-first minimalist e-reader app featuring the LeafEngine - a prose-rhythm analysis engine that ensures every vertical page break ends on a completed thought. Designed as a digital sanctuary with no ads, no behavioural tracking, and optional leaf Pro sync.',
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
    "leaf Pro sync",
    "iCloud Book Vault",
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
    'A phone-first minimalist e-reader for iOS. Uses the LeafEngine for prose-aware page breaks, providing a TikTok-style vertical scrolling ebook app experience. Includes three reading modes (Glide, Leaf, Stream), optional leaf Pro sync, and a privacy-conscious reading model with no ads or behavioural tracking.',
  offers: [
    { '@type': 'Offer', price: '0', priceCurrency: 'AUD', description: 'Free download' },
    { '@type': 'Offer', description: 'Optional leaf Pro auto-renewable subscription for sync features' },
  ],
  url: 'https://readleaf.app',
  featureList: [
    'TikTok-style vertical scrolling ebook app experience',
    'LeafEngine prose-rhythm analysis for intelligent page breaks',
    'Three reading modes: Glide (vertical snap), Leaf (page-curl), Stream (continuous scroll)',
    'leaf Pro sync for progress, annotations, journals, shelves, covers, and supported book files',
    'iCloud Book Vault support for large original files',
    '70,000+ free public domain classics via EPUB',
    'Lora + Lexend Deca typography pairing',
    'Zero tracking, zero ads, zero reading streaks',
    'Hand-vetted LEAF Editions of classic literature',
    'EPUB import support',
    'Privacy-conscious reading model with no ads or behavioural tracking',
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
        text: 'leaf is a free-to-download, phone-first minimalist e-reader for iOS, built in Melbourne, Australia. It features the proprietary LeafEngine for prose-aware page breaks, three reading modes (Glide, Leaf, Stream), optional leaf Pro sync, and a privacy-conscious model with no ads or behavioural tracking.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does leaf sync across devices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. leaf Pro syncs library metadata, progress, annotations, journals, shelves, covers, and supported book files across your Apple devices. Large original files can remain available through iCloud Book Vault.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is leaf free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'leaf is free to download on the iOS App Store. leaf Pro is an optional auto-renewable subscription for cross-device sync features. leaf has no advertisements.',
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
      'Verified facts about leaf - a phone-first minimalist e-reader for iOS. Founded in Melbourne. Powered by the LeafEngine. Optional leaf Pro sync. No ads or behavioural tracking.'

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
    { label: 'Library Sync', value: 'leaf Pro sync for metadata, progress, annotations, journals, shelves, covers, and supported book files · iCloud Book Vault for large originals' },
    { label: 'Privacy Model', value: 'No ads or behavioural tracking · Optional account-backed sync for leaf Pro' },
    { label: 'Data Collection', value: 'No analytics SDKs. No reading streaks. No ads. leaf Pro sync stores the reading data needed to sync across devices.' },
    { label: 'Typography', value: 'Classic (EB Garamond), Modern (Public Sans/Lora), Lexend (Lexend Deca/Baskerville)' },
    { label: 'Aesthetic', value: 'Warm oatmeal-paper background, minimalist layout, digital silence' },
    { label: 'Supported Formats', value: 'EPUB' },
    { label: 'Curated Library', value: 'Hand-vetted LEAF Editions of classic literature' },
    { label: 'Price', value: 'Free download · Optional leaf Pro subscription' },
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
          Reference · Updated May 2026
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
            leaf is designed around quiet, private reading. It displays no advertisements, includes no behavioural analytics SDKs, and implements no gamification mechanics such as reading streaks or social sharing.
          </p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', lineHeight: 1.8, color: 'var(--color-ink-light)', marginBottom: 'var(--space-3)' }}>
            As of May 2026, leaf Pro supports account-backed sync for library metadata, progress, annotations, journals, shelves, covers, and supported book files. iCloud Book Vault can keep large original files available across Apple devices without uploading those originals through leaf sync.
          </p>
        </section>

        {/* leaf Pro Sync */}
        <section style={{
          marginBottom: 'var(--space-12)',
          padding: 'var(--space-6)',
          background: 'rgba(255,255,255,0.5)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid rgba(43,43,43,0.06)',
        }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: 'var(--space-4)' }}>
            leaf Pro Sync
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--color-ink-light)', marginBottom: 'var(--space-3)' }}>
            <strong style={{ color: 'var(--color-ink)' }}>leaf Pro:</strong> Syncs reading progress, bookmarks, highlights, notes, reading journals, shelves, covers, and supported book files through leaf’s sync service.
          </p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--color-ink-light)', marginBottom: 0 }}>
            <strong style={{ color: 'var(--color-ink)' }}>iCloud Book Vault:</strong> Large original book files can stay in iCloud Drive while leaf Pro sync keeps their metadata, progress, and annotations available across devices.
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
