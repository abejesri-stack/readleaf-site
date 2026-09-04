import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import GuidesIndexPage from './pages/GuidesIndexPage.jsx'
import BestEbookReaderAppsPage from './pages/BestEbookReaderAppsPage.jsx'
import BestClassicsAppsPage from './pages/BestClassicsAppsPage.jsx'
import BestFreeEbookAppsPage from './pages/BestFreeEbookAppsPage.jsx'
import BestEpubReaderAppsPage from './pages/BestEpubReaderAppsPage.jsx'
import HowToReadEpubFilesIphonePage from './pages/HowToReadEpubFilesIphonePage.jsx'
import HowToReadPdfsIphonePage from './pages/HowToReadPdfsIphonePage.jsx'
import HowToFocusReadingIphonePage from './pages/HowToFocusReadingIphonePage.jsx'
import ProjectGutenbergIphoneGuidePage from './pages/ProjectGutenbergIphoneGuidePage.jsx'
import StandardEbooksIphoneGuidePage from './pages/StandardEbooksIphoneGuidePage.jsx'
import VerticalScrollingEbookAppsPage from './pages/VerticalScrollingEbookAppsPage.jsx'
import GuidePage from './pages/GuidePage.jsx'
import BrandFactsPage from './pages/BrandFactsPage.jsx'
import WorkPage from './pages/WorkPage.jsx'

// Client-side navigation keeps the previous scroll position, so a link clicked
// part-way down one page opens the next one already scrolled. Reset on route
// change, but leave in-page anchor links alone.
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/works/:authorHandle/:workSlug" element={<WorkPage />} />
        <Route path="/guides" element={<GuidesIndexPage />} />
        <Route path="/guides/best-ebook-reader-apps-iphone" element={<BestEbookReaderAppsPage />} />
        <Route path="/guides/best-free-ebook-apps-iphone" element={<BestFreeEbookAppsPage />} />
        <Route path="/guides/best-epub-reader-apps-iphone" element={<BestEpubReaderAppsPage />} />
        <Route path="/guides/how-to-read-epub-files-on-iphone" element={<HowToReadEpubFilesIphonePage />} />
        <Route path="/guides/how-to-read-pdfs-on-iphone" element={<HowToReadPdfsIphonePage />} />
        <Route path="/guides/how-to-focus-while-reading-on-iphone" element={<HowToFocusReadingIphonePage />} />
        <Route path="/guides/how-to-read-standard-ebooks-on-iphone" element={<StandardEbooksIphoneGuidePage />} />
        <Route path="/guides/best-vertical-scrolling-ebook-apps-iphone" element={<VerticalScrollingEbookAppsPage />} />
        <Route path="/guides/how-to-read-project-gutenberg-books-on-iphone" element={<ProjectGutenbergIphoneGuidePage />} />
        <Route path="/guides/best-apps-for-reading-classics-iphone" element={<BestClassicsAppsPage />} />
        <Route path="/guides/best-minimalist-reading-apps-2026" element={<GuidePage />} />
        <Route path="/brand-facts" element={<BrandFactsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
