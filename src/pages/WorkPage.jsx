import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const supabaseURL = import.meta.env.VITE_SUPABASE_URL
const appStoreURL = 'https://apps.apple.com/app/leaf-ebook-reader/id6758810936'

const formatBytes = size => {
  if (!Number.isFinite(size)) return null
  const formatter = new Intl.NumberFormat('en', {
    maximumFractionDigits: size >= 1024 * 1024 ? 1 : 0,
  })
  if (size >= 1024 * 1024) return `${formatter.format(size / (1024 * 1024))} MB`
  if (size >= 1024) return `${formatter.format(size / 1024)} KB`
  return `${formatter.format(size)} bytes`
}

const formatLabel = format => {
  if (format === 'leaf') return 'Leaf bundle'
  if (format === 'epub') return 'EPUB'
  if (format === 'markdown') return 'Markdown'
  return 'Shared work'
}

function WorkPage() {
  const { authorHandle, workSlug } = useParams()
  const [work, setWork] = useState(null)
  const [state, setState] = useState('loading')
  const [error, setError] = useState('')

  const canonicalURL = useMemo(() => {
    const path = `/works/${authorHandle}/${workSlug}`
    return `https://readleaf.co${path}`
  }, [authorHandle, workSlug])

  useEffect(() => {
    document.title = work
      ? `${work.title} by ${work.authorName} | leaf`
      : 'Shared work | leaf'

    const description = work?.description || 'A shared work from readleaf.co.'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) metaDescription.setAttribute('content', description)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalURL)
  }, [canonicalURL, work])

  useEffect(() => {
    let cancelled = false

    const load = async () => {
      if (!supabaseURL) {
        setState('error')
        setError('This shared work page is not configured yet.')
        return
      }

      setState('loading')
      setError('')

      try {
        const base = supabaseURL.replace(/\/$/, '')
        const url = `${base}/functions/v1/published_work_manifest/${encodeURIComponent(authorHandle)}/${encodeURIComponent(workSlug)}`
        const response = await fetch(url)
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('This shared work could not be found.')
          }
          throw new Error('This shared work could not be loaded.')
        }
        const json = await response.json()
        if (!cancelled) {
          setWork(json)
          setState('ready')
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || 'This shared work could not be loaded.')
          setState('error')
        }
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [authorHandle, workSlug])

  const fileInfo = work
    ? [formatLabel(work.format), formatBytes(work.fileSize)].filter(Boolean).join(' - ')
    : ''

  return (
    <main style={{
      minHeight: '100vh',
      padding: 'var(--space-5) var(--space-4)',
      display: 'flex',
      alignItems: 'center',
    }}>
      <section style={{
        width: '100%',
        maxWidth: '1040px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'minmax(220px, 320px) minmax(0, 1fr)',
        gap: 'var(--space-8)',
        alignItems: 'center',
      }} className="work-page-grid">
        <div style={{
          aspectRatio: '2 / 3',
          width: '100%',
          maxWidth: '300px',
          justifySelf: 'center',
          borderRadius: '8px',
          overflow: 'hidden',
          border: '1px solid rgba(43,43,43,0.12)',
          background: 'rgba(255,255,255,0.38)',
          boxShadow: '0 24px 60px rgba(43,43,43,0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {work?.coverURL ? (
            <img
              src={work.coverURL}
              alt={`${work.title} cover`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <div style={{
              padding: 'var(--space-5)',
              textAlign: 'center',
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-ink)',
            }}>
              {work?.title || 'leaf'}
            </div>
          )}
        </div>

        <div>
          <Link to="/" style={{
            display: 'inline-flex',
            marginBottom: 'var(--space-5)',
            fontSize: '0.85rem',
            color: 'var(--color-accent)',
          }}>
            leaf
          </Link>

          {state === 'loading' && (
            <>
              <p style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem' }}>
                Loading shared work
              </p>
              <h1 style={{ fontSize: 'clamp(2.4rem, 6vw, 4.8rem)' }}>Opening the shelf.</h1>
            </>
          )}

          {state === 'error' && (
            <>
              <p style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem' }}>
                Shared work unavailable
              </p>
              <h1 style={{ fontSize: 'clamp(2.4rem, 6vw, 4.8rem)' }}>This link is quiet.</h1>
              <p>{error}</p>
              <a className="btn" href={appStoreURL}>Download leaf</a>
            </>
          )}

          {state === 'ready' && work && (
            <>
              <p style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem' }}>
                Shared on readleaf.co
              </p>
              <h1 style={{ fontSize: 'clamp(2.4rem, 6vw, 4.8rem)' }}>{work.title}</h1>
              <p style={{ color: 'var(--color-ink)', fontSize: '1.2rem' }}>by {work.authorName}</p>
              {work.description && <p>{work.description}</p>}
              {fileInfo && (
                <p style={{
                  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                  fontSize: '0.85rem',
                  color: 'var(--color-ink-light)',
                }}>
                  {fileInfo}
                </p>
              )}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'var(--space-3)',
                marginTop: 'var(--space-5)',
              }}>
                <a className="btn" href={canonicalURL}>View in Leaf</a>
                <a className="btn" href={appStoreURL} style={{
                  backgroundColor: 'transparent',
                  color: 'var(--color-ink)',
                  border: '1px solid rgba(43,43,43,0.24)',
                }}>
                  Download leaf
                </a>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  )
}

export default WorkPage
