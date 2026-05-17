import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import GuidesIndexPage from './pages/GuidesIndexPage.jsx'
import BestEbookReaderAppsPage from './pages/BestEbookReaderAppsPage.jsx'
import GuidePage from './pages/GuidePage.jsx'
import BrandFactsPage from './pages/BrandFactsPage.jsx'
import WorkPage from './pages/WorkPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/works/:authorHandle/:workSlug" element={<WorkPage />} />
        <Route path="/guides" element={<GuidesIndexPage />} />
        <Route path="/guides/best-ebook-reader-apps-iphone" element={<BestEbookReaderAppsPage />} />
        <Route path="/guides/best-minimalist-reading-apps-2026" element={<GuidePage />} />
        <Route path="/brand-facts" element={<BrandFactsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
