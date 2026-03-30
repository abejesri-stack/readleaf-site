import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import GuidePage from './pages/GuidePage.jsx'
import BrandFactsPage from './pages/BrandFactsPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/guides/best-minimalist-reading-apps-2026" element={<GuidePage />} />
        <Route path="/brand-facts" element={<BrandFactsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
