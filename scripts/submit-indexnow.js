import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { parseArgs } from 'node:util'
import { routes, site } from './routes.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const keyPath = path.join(root, 'public', 'indexnow-key.txt')
const host = new URL(site).hostname
const keyLocation = `${site}/indexnow-key.txt`
const allUrls = routes.map(({ route }) => site + route)

const { values } = parseArgs({
  options: {
    all: { type: 'boolean', default: false },
    changed: { type: 'boolean', default: false },
    'dry-run': { type: 'boolean', default: false },
    url: { type: 'string', multiple: true },
  },
})

// Pages whose source file changed in the last commit (see scripts/routes.js).
const getChangedUrls = () => {
  try {
    const changedFiles = new Set(execFileSync(
      'git',
      ['diff', '--name-only', 'HEAD^', '--'],
      { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] },
    ).trim().split('\n').filter(Boolean))
    return routes.filter(({ source }) => changedFiles.has(source)).map(({ route }) => site + route)
  } catch {
    console.warn('IndexNow: previous commit unavailable; submitting every page.')
    return allUrls
  }
}

let urls
if (values.url?.length) {
  urls = values.url
} else if (values.all) {
  urls = allUrls
} else {
  urls = getChangedUrls()
}

urls = [...new Set(urls)]
for (const url of urls) {
  const parsed = new URL(url)
  if (parsed.protocol !== 'https:' || parsed.hostname !== host) {
    throw new Error(`IndexNow URL must use ${site}: ${url}`)
  }
}

if (urls.length === 0) {
  console.log('IndexNow: no changed pages to submit.')
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
