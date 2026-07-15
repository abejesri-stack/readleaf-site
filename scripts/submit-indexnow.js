import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { parseArgs } from 'node:util'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const sitemapPath = path.join(root, 'public', 'sitemap.xml')
const keyPath = path.join(root, 'public', 'indexnow-key.txt')
const host = 'readleaf.co'
const keyLocation = `https://${host}/indexnow-key.txt`
const routeBySourceFile = new Map([
  ['src/App.jsx', `https://${host}/`],
  ['src/pages/GuidesIndexPage.jsx', `https://${host}/guides/`],
  ['src/pages/HowToReadEpubFilesIphonePage.jsx', `https://${host}/guides/how-to-read-epub-files-on-iphone`],
  ['src/pages/StandardEbooksIphoneGuidePage.jsx', `https://${host}/guides/how-to-read-standard-ebooks-on-iphone`],
  ['src/pages/BestEbookReaderAppsPage.jsx', `https://${host}/guides/best-ebook-reader-apps-iphone`],
  ['src/pages/BestFreeEbookAppsPage.jsx', `https://${host}/guides/best-free-ebook-apps-iphone`],
  ['src/pages/BestEpubReaderAppsPage.jsx', `https://${host}/guides/best-epub-reader-apps-iphone`],
  ['src/pages/ProjectGutenbergIphoneGuidePage.jsx', `https://${host}/guides/how-to-read-project-gutenberg-books-on-iphone`],
  ['src/pages/BestClassicsAppsPage.jsx', `https://${host}/guides/best-apps-for-reading-classics-iphone`],
  ['src/pages/VerticalScrollingEbookAppsPage.jsx', `https://${host}/guides/best-vertical-scrolling-ebook-apps-iphone`],
  ['src/pages/GuidePage.jsx', `https://${host}/guides/best-minimalist-reading-apps-2026`],
  ['src/pages/BrandFactsPage.jsx', `https://${host}/brand-facts`],
])

const { values } = parseArgs({
  options: {
    all: { type: 'boolean', default: false },
    changed: { type: 'boolean', default: false },
    'dry-run': { type: 'boolean', default: false },
    url: { type: 'string', multiple: true },
  },
})

const decodeXml = (value) => value
  .replaceAll('&amp;', '&')
  .replaceAll('&lt;', '<')
  .replaceAll('&gt;', '>')
  .replaceAll('&quot;', '"')
  .replaceAll('&apos;', "'")

const parseSitemap = (xml) => {
  const entries = new Map()
  const urlPattern = /<url>\s*<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>[\s\S]*?<\/url>/g

  for (const match of xml.matchAll(urlPattern)) {
    entries.set(decodeXml(match[1].trim()), match[2].trim())
  }

  if (entries.size === 0) {
    throw new Error('No URL entries with lastmod values were found in public/sitemap.xml')
  }

  return entries
}

const currentSitemap = fs.readFileSync(sitemapPath, 'utf8')
const currentEntries = parseSitemap(currentSitemap)

const getChangedUrls = () => {
  try {
    const previousSitemap = execFileSync(
      'git',
      ['show', 'HEAD^:public/sitemap.xml'],
      { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] },
    )
    const previousEntries = parseSitemap(previousSitemap)
    const urlsWithNewLastmod = [...currentEntries]
      .filter(([url, lastmod]) => previousEntries.get(url) !== lastmod)
      .map(([url]) => url)
    const changedFiles = execFileSync(
      'git',
      ['diff', '--name-only', 'HEAD^', '--'],
      { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] },
    ).trim().split('\n').filter(Boolean)
    const urlsForChangedSources = changedFiles
      .map((file) => routeBySourceFile.get(file))
      .filter(Boolean)

    return [...new Set([...urlsWithNewLastmod, ...urlsForChangedSources])]
  } catch {
    console.warn('IndexNow: previous sitemap unavailable; submitting the current sitemap URLs.')
    return [...currentEntries.keys()]
  }
}

let urls
if (values.url?.length) {
  urls = values.url
} else if (values.all) {
  urls = [...currentEntries.keys()]
} else {
  urls = getChangedUrls()
}

urls = [...new Set(urls)]
for (const url of urls) {
  const parsed = new URL(url)
  if (parsed.protocol !== 'https:' || parsed.hostname !== host) {
    throw new Error(`IndexNow URL must use https://${host}: ${url}`)
  }
}

if (urls.length === 0) {
  console.log('IndexNow: no new or updated sitemap URLs to submit.')
  process.exit(0)
}

const key = fs.readFileSync(keyPath, 'utf8').trim()
const payload = { host, key, keyLocation, urlList: urls }

if (values['dry-run']) {
  console.log(JSON.stringify(payload, null, 2))
  process.exit(0)
}

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify(payload),
})

if (response.status !== 200 && response.status !== 202) {
  const body = await response.text()
  throw new Error(`IndexNow submission failed with HTTP ${response.status}${body ? `: ${body}` : ''}`)
}

console.log(`IndexNow: submitted ${urls.length} URL${urls.length === 1 ? '' : 's'} (HTTP ${response.status}).`)
