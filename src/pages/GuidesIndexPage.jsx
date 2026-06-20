import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const guides = [
  {
    title: 'How to Read EPUB Files on iPhone in 2026',
    description:
      'A practical guide to opening, importing, and reading EPUB files on iPhone with leaf, Apple Books, Kindle, Files, and other iPhone workflows.',
    href: '/guides/how-to-read-epub-files-on-iphone',
    updated: 'June 2026',
    topics: ['EPUB files', 'Imports', 'iPhone workflows'],
  },
  {
    title: 'Best EPUB Reader Apps for iPhone in 2026',
    description:
      'A practical guide to reading EPUB files and imported books on iPhone with leaf, Apple Books, Google Play Books, Documents by Readdle, Kindle, and Kobo.',
    href: '/guides/best-epub-reader-apps-iphone',
    updated: 'May 2026',
    topics: ['EPUB files', 'Imported books', 'File management'],
  },
  {
    title: 'Best Free eBook Apps and Sources for iPhone in 2026',
    description:
      'A practical guide to legal free reading on iPhone, including leaf, Libby, Project Gutenberg, Standard Ebooks, Apple Books, Kindle, Kobo, and Google Play Books.',
    href: '/guides/best-free-ebook-apps-iphone',
    updated: 'May 2026',
    topics: ['Free books', 'Public domain', 'Library borrowing'],
  },
  {
    title: 'How to Read Project Gutenberg Books on iPhone in 2026',
    description:
      'A practical how-to guide for reading Project Gutenberg books on iPhone with EPUB downloads, Safari, Apple Books, Kindle workflows, and leaf Explore.',
    href: '/guides/how-to-read-project-gutenberg-books-on-iphone',
    updated: 'May 2026',
    topics: ['Project Gutenberg', 'EPUB files', 'Free classics'],
  },
  {
    title: 'Best Apps and Sources for Reading Classics on iPhone in 2026',
    description:
      'A balanced guide to reading classic literature on iPhone with leaf, Standard Ebooks, Project Gutenberg, Libby, Apple Books, Kindle, and Kobo.',
    href: '/guides/best-apps-for-reading-classics-iphone',
    updated: 'May 2026',
    topics: ['Classics', 'Public domain', 'iPhone apps'],
  },
  {
    title: 'Best eBook Reader Apps for iPhone in 2026',
    description:
      'A practical comparison of leaf, Kindle, Apple Books, Kobo, Libby, and Google Play Books for different kinds of iPhone readers.',
    href: '/guides/best-ebook-reader-apps-iphone',
    updated: 'May 2026',
    topics: ['App comparisons', 'EPUB readers', 'iPhone apps'],
  },
  {
    title: 'The Best Minimalist Reading Apps for iPhone in 2026',
    description:
      'A comparison of leaf, Kindle, and Apple Books for readers who care about focus, legibility, privacy, sync, and phone-first reading.',
    href: '/guides/best-minimalist-reading-apps-2026',
    updated: 'May 2026',
    topics: ['Minimalist reading', 'Focus', 'Phone-first reading'],
  },
]

const topicSections = [
  {
    title: 'Free Books and Public-Domain Reading',
    description: 'Guides for finding legal free ebooks, public-domain classics, and library books on iPhone.',
    guideHrefs: ['/guides/best-free-ebook-apps-iphone', '/guides/how-to-read-project-gutenberg-books-on-iphone', '/guides/best-apps-for-reading-classics-iphone'],
  },
  {
    title: 'EPUB and Imported Files',
    description: 'Guides for reading EPUB files, imported books, PDFs, and personally managed libraries on iPhone.',
    guideHrefs: ['/guides/how-to-read-epub-files-on-iphone', '/guides/best-epub-reader-apps-iphone', '/guides/best-ebook-reader-apps-iphone'],
  },
  {
    title: 'iPhone Reading App Comparisons',
    description: 'Balanced comparisons for choosing between leaf, Kindle, Apple Books, Kobo, Libby, and Google Play Books.',
    guideHrefs: ['/guides/best-ebook-reader-apps-iphone', '/guides/best-free-ebook-apps-iphone'],
  },
  {
    title: 'Minimalist and Focused Reading',
    description: 'Guides for vertical-swipe phone reading, fewer distractions, typography, privacy, and reading flow.',
    guideHrefs: ['/guides/best-minimalist-reading-apps-2026', '/guides/best-ebook-reader-apps-iphone'],
  },
]

const upcomingGuides = [
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
      'Reading guides from leaf: eBook Reader about free ebook apps, public-domain classics, iPhone reading apps, minimalist e-readers, EPUB files, privacy, and focused mobile reading.'

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
        'Guides about free ebook apps, iPhone reading apps, public-domain classics, minimalist e-readers, vertical scrolling, privacy, and focused mobile reading.',
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
          Reading guides for vertical-swipe iPhone reading.
        </h1>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.125rem', color: 'var(--color-ink-light)', lineHeight: 1.7 }}>
          Practical comparisons and notes on vertical-swipe reading, free ebook apps, public-domain classics, minimalist e-readers, EPUB files, privacy, and focused reading on a phone.
        </p>
      </header>

      <main style={{ maxWidth: '820px', margin: '0 auto', padding: '0 var(--space-4) var(--space-16)' }}>
        <section style={{ marginBottom: 'var(--space-12)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.7rem', marginBottom: 'var(--space-5)' }}>
            Start by Topic
          </h2>
          <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
            {topicSections.map((section) => (
              <div
                key={section.title}
                style={{
                  padding: 'var(--space-5)',
                  background: 'rgba(255,255,255,0.38)',
                  border: '1px solid rgba(43,43,43,0.08)',
                  borderRadius: '8px',
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: 'var(--space-2)' }}>
                  {section.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--color-ink-light)', marginBottom: 'var(--space-4)' }}>
                  {section.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
                  {section.guideHrefs.map((href) => {
                    const guide = guides.find((item) => item.href === href)
                    return (
                      <Link
                        key={href}
                        to={href}
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.86rem',
                          color: 'var(--color-accent)',
                          textDecoration: 'none',
                          borderBottom: '1px solid currentColor',
                          paddingBottom: '2px',
                        }}
                      >
                        {guide.title}
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 'var(--space-12)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.7rem', marginBottom: 'var(--space-5)' }}>
            Published Guides
          </h2>
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
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', lineHeight: 1.7, color: 'var(--color-ink-light)', marginTop: 'var(--space-3)', marginBottom: 0 }}>
                {guide.topics.join(' / ')}
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
