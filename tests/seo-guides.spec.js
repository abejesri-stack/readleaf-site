import { test, expect } from '@playwright/test'

const expectModifiedDate = async (page, schemaSelector) => {
  const schemaText = await page.locator(schemaSelector).evaluate((element) => element.textContent)
  expect(JSON.parse(schemaText).dateModified).toBe('2026-07-15')
}

test('vertical scrolling guide renders with its feature image', async ({ page }) => {
  await page.goto('/guides/best-vertical-scrolling-ebook-apps-iphone', { waitUntil: 'domcontentloaded' })

  await expect(page).toHaveTitle('Best Vertical Scrolling eBook Apps for iPhone in 2026 | leaf')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Best Vertical Scrolling eBook Apps for iPhone in 2026')
  await expect(page.getByText('Quick answer', { exact: true })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Vertical snap and continuous scroll are not the same' })).toBeVisible()
  await expectModifiedDate(page, '#vertical-scroll-article-schema')

  const image = page.getByAltText('leaf vertical scrolling ebook reader shown on an iPhone')
  await expect(image).toBeVisible()
  await expect(image).toHaveJSProperty('complete', true)
})

test('guide hub links to vertical scrolling guide', async ({ page }) => {
  await page.goto('/guides', { waitUntil: 'domcontentloaded' })

  await expect(page.locator('a[href="/guides/best-vertical-scrolling-ebook-apps-iphone"]').first()).toBeVisible()
})

test('minimalist guide uses focused ebook reader targeting', async ({ page }) => {
  await page.goto('/guides/best-minimalist-reading-apps-2026', { waitUntil: 'domcontentloaded' })

  await expect(page).toHaveTitle('Best Minimalist eBook Reader Apps for iPhone in 2026 | leaf')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Best Minimalist eBook Reader Apps for iPhone in 2026')
  await expect(page.locator('a[href="/guides/best-vertical-scrolling-ebook-apps-iphone"]')).toBeVisible()
})

test('broader ebook reader guide targets iPhone and iOS queries', async ({ page }) => {
  await page.goto('/guides/best-ebook-reader-apps-iphone', { waitUntil: 'domcontentloaded' })

  await expect(page).toHaveTitle('Best eBook Reader Apps for iPhone and iOS in 2026 | leaf')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Best eBook Reader Apps for iPhone and iOS in 2026')
  await expect(page.getByText('iPhone and iOS readers').first()).toBeVisible()
})

test('EPUB guide route renders and loads its owned screenshot', async ({ page }) => {
  await page.goto('/guides/best-epub-reader-apps-iphone', { waitUntil: 'domcontentloaded' })

  await expect(page).toHaveTitle('Best EPUB Reader Apps for iPhone in 2026 | leaf')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Best EPUB Reader Apps for iPhone in 2026')
  await expect(page.getByRole('heading', { name: 'Best Starting Points' })).toBeVisible()

  const image = page.getByAltText('leaf library screen showing imported books and EPUB files on iPhone')
  await expect(image).toBeVisible()
  await expect(image).toHaveJSProperty('complete', true)
})

test('guide hub links to EPUB/imported files topic', async ({ page }) => {
  await page.goto('/guides', { waitUntil: 'domcontentloaded' })

  await expect(page.getByRole('heading', { name: 'EPUB and Imported Files' })).toBeVisible()
  await expect(page.locator('a[href="/guides/best-epub-reader-apps-iphone"]').first()).toBeVisible()
})

test('how to read EPUB files guide route renders and loads its screenshot', async ({ page }) => {
  await page.goto('/guides/how-to-read-epub-files-on-iphone', { waitUntil: 'domcontentloaded' })

  await expect(page).toHaveTitle('How to Read EPUB Files on iPhone in 2026 | leaf')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('How to Read EPUB Files on iPhone in 2026')
  await expect(page.getByText('Quick answer', { exact: true })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Open an EPUB file on iPhone' })).toBeVisible()
  await expectModifiedDate(page, '#how-to-read-epub-files-iphone-article-schema')

  const image = page.getByAltText('leaf library screen showing EPUB files and imported books on iPhone')
  await expect(image).toBeVisible()
  await expect(image).toHaveJSProperty('complete', true)
})

test('how to read Standard Ebooks guide route renders and loads its screenshot', async ({ page }) => {
  await page.goto('/guides/how-to-read-standard-ebooks-on-iphone', { waitUntil: 'domcontentloaded' })

  await expect(page).toHaveTitle('How to Read Standard Ebooks on iPhone in 2026 | leaf')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('How to Read Standard Ebooks on iPhone in 2026')
  await expect(page.getByRole('heading', { name: 'Read Standard Ebooks on iPhone', exact: true })).toBeVisible()

  const image = page.getByAltText('leaf Explore screen showing Standard Ebooks and classic books on iPhone')
  await expect(image).toBeVisible()
  await expect(image).toHaveJSProperty('complete', true)
})

test('guide hub links to Standard Ebooks how-to guide', async ({ page }) => {
  await page.goto('/guides', { waitUntil: 'domcontentloaded' })

  await expect(page.locator('a[href="/guides/how-to-read-standard-ebooks-on-iphone"]').first()).toBeVisible()
})

test('guide hub links to how to read EPUB files guide', async ({ page }) => {
  await page.goto('/guides', { waitUntil: 'domcontentloaded' })

  await expect(page.locator('a[href="/guides/how-to-read-epub-files-on-iphone"]').first()).toBeVisible()
})

test('Project Gutenberg guide route renders and loads its Explore screenshot', async ({ page }) => {
  await page.goto('/guides/how-to-read-project-gutenberg-books-on-iphone', { waitUntil: 'domcontentloaded' })

  await expect(page).toHaveTitle('How to Read Project Gutenberg Books on iPhone in 2026 | leaf')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('How to Read Project Gutenberg Books on iPhone in 2026')
  await expect(page.getByText('Quick answer', { exact: true })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Download a Project Gutenberg EPUB on iPhone' })).toBeVisible()
  await expectModifiedDate(page, '#project-gutenberg-iphone-article-schema')

  const image = page.getByAltText('leaf Explore screen showing Project Gutenberg and free classic books on iPhone')
  await expect(image).toBeVisible()
  await expect(image).toHaveJSProperty('complete', true)
})

test('guide hub links to Project Gutenberg how-to guide', async ({ page }) => {
  await page.goto('/guides', { waitUntil: 'domcontentloaded' })

  await expect(page.locator('a[href="/guides/how-to-read-project-gutenberg-books-on-iphone"]').first()).toBeVisible()
})
