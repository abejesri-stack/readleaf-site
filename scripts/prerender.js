// Prerenders each route to static HTML after `vite build`.
//
// Each route is loaded in headless Chromium from the built site, entrance
// animations are played through, and the rendered document is written out:
// the page's own head tags (title, description, canonical, Open Graph,
// JSON-LD) and its full body text. Crawlers that don't run JavaScript get
// the real page, and nothing has to be kept in sync by hand. sitemap.xml and
// llms.txt are written from the same pages. /works/... pages load from the
// backend at runtime and are served by the 404.html fallback instead.
import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import http from 'node:http'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { chromium } from '@playwright/test'
import { prerenderedRoutes, routes, site } from './routes.js'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8')
if (!template.includes('<div id="root"></div>')) {
  throw new Error('dist/index.html is already prerendered; run `npm run build` instead')
}
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
const pages = new Map()
const browser = await chromium.launch()
try {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })
  // Fonts and other third-party requests don't change the markup.
  await page.route('**/*', (route) => (route.request().url().startsWith(origin) ? route.continue() : route.abort()))
  page.on('pageerror', (error) => problems.push(`page error: ${error.message}`))

  for (const { route, file } of prerenderedRoutes) {
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
    pages.set(route, head)

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

// lastmod is the date of the last commit to the page's source file. CI checks
// out the full history for this (deploy.yml, fetch-depth: 0).
const lastModified = (source) => execFileSync('git', ['log', '-1', '--format=%cs', '--', source], { cwd: root, encoding: 'utf-8' }).trim()
  || new Date().toISOString().slice(0, 10)
const sitemap = routes.map(({ route, source }) =>
  `  <url>\n    <loc>${site}${route}</loc>\n    <lastmod>${lastModified(source)}</lastmod>\n  </url>`)
fs.writeFileSync(path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemap.join('\n')}\n</urlset>\n`)

// llms.txt (llmstxt.org): a plain-text map of the site for AI tools, from the
// homepage description, the brand facts feature list, and each page's own
// title and description.
const facts = JSON.parse(fs.readFileSync(path.join(dist, '.well-known', 'brand-facts.json'), 'utf-8'))
const link = (route) => {
  const { title, description } = pages.get(route)
  return `- [${title}](${site}${route}): ${description}`
}
const guides = prerenderedRoutes.filter(({ route }) => route.startsWith('/guides/') && route !== '/guides/')
fs.writeFileSync(path.join(dist, 'llms.txt'), [
  `# leaf: eBook Reader`,
  '',
  `> ${pages.get('/').description}`,
  '',
  `leaf is free on the App Store (${facts.same_as.find((url) => url.includes('apps.apple.com'))}), with an optional leaf Pro subscription. Built in ${facts.founder_location}.`,
  '',
  ...facts.feature_list.map((feature) => `- ${feature}`),
  '',
  '## Guides',
  '',
  link('/guides/'),
  ...guides.map(({ route }) => link(route)),
  '',
  '## Facts',
  '',
  link('/brand-facts'),
  `- [Brand facts as JSON](${site}/.well-known/brand-facts.json): Machine-readable facts about leaf: features, reading modes, formats, themes, privacy, and pricing model.`,
  link('/'),
  '',
].join('\n'))

if (problems.length) {
  console.error(`Prerender found problems:\n  ${problems.join('\n  ')}`)
  process.exit(1)
}
