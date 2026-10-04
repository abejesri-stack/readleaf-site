// Every public page on readleaf.co. Drives the prerender, sitemap.xml,
// llms.txt and IndexNow, so adding a page here is the only bookkeeping.
//   route   the URL path
//   source  the file whose git history dates the page (sitemap lastmod) and
//           whose changes trigger an IndexNow ping
//   file    where the prerendered HTML is written in dist (React routes only)
export const site = 'https://readleaf.co'

const guide = (slug, source) => ({
  route: `/guides/${slug}`,
  source: `src/pages/${source}`,
  file: `guides/${slug}.html`,
})

export const routes = [
  { route: '/', source: 'src/App.jsx', file: 'index.html' },
  { route: '/guides/', source: 'src/pages/GuidesIndexPage.jsx', file: 'guides/index.html' },
  guide('how-to-read-epub-files-on-iphone', 'HowToReadEpubFilesIphonePage.jsx'),
  guide('how-to-read-pdfs-on-iphone', 'HowToReadPdfsIphonePage.jsx'),
  guide('how-to-focus-while-reading-on-iphone', 'HowToFocusReadingIphonePage.jsx'),
  guide('how-to-read-standard-ebooks-on-iphone', 'StandardEbooksIphoneGuidePage.jsx'),
  guide('best-ebook-reader-apps-iphone', 'BestEbookReaderAppsPage.jsx'),
  guide('best-free-ebook-apps-iphone', 'BestFreeEbookAppsPage.jsx'),
  guide('best-epub-reader-apps-iphone', 'BestEpubReaderAppsPage.jsx'),
  guide('how-to-read-project-gutenberg-books-on-iphone', 'ProjectGutenbergIphoneGuidePage.jsx'),
  guide('best-apps-for-reading-classics-iphone', 'BestClassicsAppsPage.jsx'),
  guide('best-vertical-scrolling-ebook-apps-iphone', 'VerticalScrollingEbookAppsPage.jsx'),
  guide('best-minimalist-reading-apps-2026', 'GuidePage.jsx'),
  { route: '/brand-facts', source: 'src/pages/BrandFactsPage.jsx', file: 'brand-facts.html' },
  // Static pages from public/, not React routes.
  { route: '/legal/', source: 'public/legal/index.html' },
  { route: '/plot/legal/', source: 'public/plot/legal/index.html' },
]

export const prerenderedRoutes = routes.filter((page) => page.file)
