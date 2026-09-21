import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import LocalBusinessSchema from './components/LocalBusinessSchema.tsx'
import StickyMobileCta from './components/StickyMobileCta.tsx'
import Home from './pages/Home.tsx'
import AboutPage from './pages/AboutPage.tsx'
import ServicesPage from './pages/ServicesPage.tsx'
import CertificatesPage from './pages/CertificatesPage.tsx'
import SchedulePage from './pages/SchedulePage.tsx'
import ThankYouPage from './pages/ThankYouPage.tsx'
import BlogPage from './pages/BlogPage.tsx'
import BlogPostPage from './pages/BlogPostPage.tsx'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.tsx'
import TermsPage from './pages/TermsPage.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'

export default function App() {
  return (
    <>
      <LocalBusinessSchema />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicesPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  )
}
