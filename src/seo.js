// Sets a page's head tags. The prerender step captures them into each
// route's static HTML, so this is the single source of a page's title,
// description, canonical URL, and the Open Graph and Twitter cards that
// link previews read.
const upsert = (selector, create) => {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = create()
    document.head.appendChild(element)
  }
  return element
}

const setMeta = (attribute, key, content) => {
  upsert(`meta[${attribute}="${key}"]`, () => {
    const meta = document.createElement('meta')
    meta.setAttribute(attribute, key)
    return meta
  }).setAttribute('content', content)
}

export function setPageMeta({ title, description, canonical, ogDescription = description }) {
  document.title = title
  setMeta('name', 'description', description)
  upsert('link[rel="canonical"]', () => {
    const link = document.createElement('link')
    link.rel = 'canonical'
    return link
  }).href = canonical
  setMeta('property', 'og:title', title)
  setMeta('property', 'og:description', ogDescription)
  setMeta('property', 'og:url', canonical)
  setMeta('name', 'twitter:title', title)
  setMeta('name', 'twitter:description', ogDescription)
}
