import { test, expect } from '@playwright/test'

test('EPUB guide route renders and loads its owned screenshot', async ({ page }) => {
  await page.goto('/guides/best-epub-reader-apps-iphone')

  await expect(page).toHaveTitle('Best EPUB Reader Apps for iPhone in 2026 | leaf')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Best EPUB Reader Apps for iPhone in 2026')
  await expect(page.getByRole('heading', { name: 'Best Starting Points' })).toBeVisible()

  const image = page.getByAltText('leaf library screen showing imported books and EPUB files on iPhone')
  await expect(image).toBeVisible()
  await expect(image).toHaveJSProperty('complete', true)
})

test('guide hub links to EPUB/imported files topic', async ({ page }) => {
  await page.goto('/guides')

  await expect(page.getByRole('heading', { name: 'EPUB and Imported Files' })).toBeVisible()
  await expect(page.locator('a[href="/guides/best-epub-reader-apps-iphone"]').first()).toBeVisible()
})
