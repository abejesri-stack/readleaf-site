// Prerenders each route to static HTML after `vite build`.
//
// Each route is loaded in headless Chromium from the built site, entrance
// animations are played through, and the rendered document is written out:
// the page's own head tags (title, description, canonical, Open Graph,
// JSON-LD) and its full body text. Crawlers that don't run JavaScript get
// the real page, and nothing has to be kept in sync by hand.
import fs from 'node:fs'
import http from 'node:http'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { chromium } from '@playwright/test'

const dist = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist')
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8')
if (!template.includes('<div id="root"></div>')) {
  throw new Error('dist/index.html is already prerendered; run `npm run build` instead')
}
const site = 'https://readleaf.co'

// Every static route in src/main.jsx. /works/... pages load from the backend
// at runtime and are served by the 404.html fallback instead.
const routes = [
  { route: '/', file: 'index.html' },
  { route: '/brand-facts', file: 'brand-facts.html' },
  { route: '/guides/', file: 'guides/index.html' },
  ...[
    'best-apps-for-reading-classics-iphone',
    'best-ebook-reader-apps-iphone',
    'best-epub-reader-apps-iphone',
    'best-free-ebook-apps-iphone',
    'best-minimalist-reading-apps-2026',
    'best-vertical-scrolling-ebook-apps-iphone',
    'how-to-focus-while-reading-on-iphone',
    'how-to-read-epub-files-on-iphone',
    'how-to-read-pdfs-on-iphone',
    'how-to-read-project-gutenberg-books-on-iphone',
    'how-to-read-standard-ebooks-on-iphone',
  ].map((slug) => ({ route: `/guides/${slug}`, file: `guides/${slug}.html` })),
]

const contentTypes = {
  '.css': 'text/css',
  '.html': 'text/html',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain',
  '.webp': 'image/webp',
}

// Serves built assets, and the untouched template for every route, so a
// route never loads an already-prerendered file.
const server = http.createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname)
  const file = path.join(dist, pathname)
  if (file.startsWith(dist) && path.extname(file) && fs.existsSync(file) && fs.statSync(file).isFile()) {
    response.writeHead(200, { 'Content-Type': contentTypes[path.extname(file)] ?? 'application/octet-stream' })
    fs.createReadStream(file).pipe(response)
    return
  }
  response.writeHead(200, { 'Content-Type': 'text/html' })
  response.end(template)
})
await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve))
const origin = `http://127.0.0.1:${server.address().port}`

// Plays every scroll-triggered entrance animation, then waits until nothing
// is left part-faded, so the captured page is the fully visible one.
const settle = async (page) => {
  await page.evaluate(async () => {
    const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
    for (let y = 0; y < document.documentElement.scrollHeight; y += window.innerHeight / 2) {
      window.scrollTo({ top: y, behavior: 'instant' }) // the site sets smooth scrolling
      await pause(60)
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  })
  await page.waitForFunction(() => [...document.querySelectorAll('#root [style*="opacity"]')]
    .every((element) => Number(getComputedStyle(element).opacity) === 1), null, { timeout: 10_000 })
}

const problems = []
const browser = await chromium.launch()
try {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })
  // Fonts and other third-party requests don't change the markup.
  await page.route('**/*', (route) => (route.request().url().startsWith(origin) ? route.continue() : route.abort()))
  page.on('pageerror', (error) => problems.push(`page error: ${error.message}`))

  for (const { route, file } of routes) {
    await page.goto(origin + route, { waitUntil: 'networkidle' })
    await page.locator('#root h1').first().waitFor()
    await settle(page)

    const head = await page.evaluate(() => ({
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.content,
      canonical: document.querySelector('link[rel="canonical"]')?.href,
      ogUrl: document.querySelector('meta[property="og:url"]')?.content,
    }))
    const expected = site + route
    if (!head.title) problems.push(`${route}: no title`)
    if (!head.description) problems.push(`${route}: no description`)
    if (head.canonical !== expected) problems.push(`${route}: canonical is ${head.canonical}, expected ${expected}`)
    if (head.ogUrl !== expected) problems.push(`${route}: og:url is ${head.ogUrl}, expected ${expected}`)

    // main.jsx keeps the static copy hidden until React has replaced it.
    await page.evaluate(() => document.getElementById('root').setAttribute('data-prerendered', ''))
    const html = '<!doctype html>\n' + await page.evaluate(() => document.documentElement.outerHTML)
    fs.mkdirSync(path.dirname(path.join(dist, file)), { recursive: true })
    fs.writeFileSync(path.join(dist, file), html)
    console.log(`Prerendered ${route} → ${file}: ${head.title}`)
  }
} finally {
  await browser.close()
  server.close()
}

// Unknown paths (including /works/...) get the plain app shell.
fs.writeFileSync(path.join(dist, '404.html'), template)

if (problems.length) {
  console.error(`Prerender found problems:\n  ${problems.join('\n  ')}`)
  process.exit(1)
}
