import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const guides = [
  {
    title: 'Best eBook Reader Apps for iPhone in 2026',
    description:
      'A practical comparison of leaf, Kindle, Apple Books, Kobo, Libby, and Google Play Books for different kinds of iPhone readers.',
    href: '/guides/best-ebook-reader-apps-iphone',
    updated: 'May 2026',
  },
  {
    title: 'The Best Minimalist Reading Apps for iPhone in 2026',
    description:
      'A comparison of leaf, Kindle, and Apple Books for readers who care about focus, legibility, privacy, sync, and phone-first reading.',
    href: '/guides/best-minimalist-reading-apps-2026',
    updated: 'May 2026',
  },
]

const upcomingGuides = [
  'Best apps for reading classics on iPhone',
  'How vertical scrolling changes phone reading',
  'Privacy-focused reading apps for iPhone',
]

export default function GuidesIndexPage() {
  useEffect(() => {
    document.title = 'Reading Guides - leaf: eBook Reader'

    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      document.head.appendChild(metaDescription)
    }
    metaDescription.content =
      'Reading guides from leaf: eBook Reader about iPhone reading apps, minimalist e-readers, vertical scrolling, classic literature, privacy, and focused mobile reading.'

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = 'https://readleaf.co/guides/'

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Reading Guides - leaf: eBook Reader',
      url: 'https://readleaf.co/guides/',
      description:
        'Guides about iPhone reading apps, minimalist e-readers, vertical scrolling, privacy, and focused mobile reading.',
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: guides.map((guide, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: `https://readleaf.co${guide.href}`,
          name: guide.title,
          description: guide.description,
        })),
      },
    }

    let el = document.getElementById('guides-index-schema')
    if (!el) {
      el = document.createElement('script')
      el.id = 'guides-index-schema'
      el.type = 'application/ld+json'
      document.head.appendChild(el)
    }
    el.textContent = JSON.stringify(schema)

    return () => document.getElementById('guides-index-schema')?.remove()
  }, [])

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-oatmeal)', color: 'var(--color-ink)' }}>
      <nav style={{ padding: 'var(--space-4) var(--space-6)', borderBottom: '1px solid rgba(43,43,43,0.08)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-ink)', textDecoration: 'none' }}>
            leaf
          </Link>
          <Link to="/brand-facts"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-ink-light)', textDecoration: 'none' }}>
            Brand Facts
          </Link>
        </div>
      </nav>

      <header style={{ padding: 'var(--space-16) var(--space-4) var(--space-8)', maxWidth: '820px', margin: '0 auto' }}>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-accent)', marginBottom: 'var(--space-4)' }}>
          Guides
        </p>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', lineHeight: 1.15, marginBottom: 'var(--space-6)' }}>
          Reading guides for quieter iPhone reading.
        </h1>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.125rem', color: 'var(--color-ink-light)', lineHeight: 1.7 }}>
          Practical comparisons and notes on minimalist e-readers, vertical scrolling, classic literature, privacy, and focused reading on a phone.
        </p>
      </header>

      <main style={{ maxWidth: '820px', margin: '0 auto', padding: '0 var(--space-4) var(--space-16)' }}>
        <section style={{ marginBottom: 'var(--space-12)' }}>
          {guides.map((guide) => (
            <Link
              key={guide.href}
              to={guide.href}
              style={{
                display: 'block',
                padding: 'var(--space-6) 0',
                borderTop: '1px solid rgba(43,43,43,0.1)',
                borderBottom: '1px solid rgba(43,43,43,0.1)',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-accent)', marginBottom: 'var(--space-3)' }}>
                Updated {guide.updated}
              </p>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: 'var(--space-3)' }}>
                {guide.title}
              </h2>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', lineHeight: 1.7, color: 'var(--color-ink-light)', margin: 0 }}>
                {guide.description}
              </p>
            </Link>
          ))}
        </section>

        <section style={{ paddingTop: 'var(--space-6)', borderTop: '1px solid rgba(43,43,43,0.08)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: 'var(--space-4)' }}>
            Planned guide topics
          </h2>
          <ul style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.9, color: 'var(--color-ink-light)', paddingLeft: '1.2rem', margin: 0 }}>
            {upcomingGuides.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}
