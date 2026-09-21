import Hero from '../components/Hero.tsx'
import About from '../components/About.tsx'
import Services from '../components/Services.tsx'
import CaseStudies from '../components/CaseStudies.tsx'
import BeforeAfterGallery from '../components/BeforeAfterGallery.tsx'
import BrandsStrip from '../components/BrandsStrip.tsx'
import WhyUs from '../components/WhyUs.tsx'
import Testimonials from '../components/Testimonials.tsx'
import Faq from '../components/Faq.tsx'
import CtaBanner from '../components/CtaBanner.tsx'
import Contact from '../components/Contact.tsx'
import { useHashScroll } from '../hooks/useHashScroll.ts'
import { useDocumentMeta } from '../hooks/useDocumentMeta.ts'

export default function Home() {
  useHashScroll()
  useDocumentMeta(
    'SD Gas',
    'Gas Safe registered gas engineer and plumber covering Fife. Boiler installation, servicing, and repair, available 24x7.',
    '/home',
  )

  return (
    <>
      <Hero />
      <About />
      <WhyUs />
      <Services />
      <CaseStudies />
      <BeforeAfterGallery />
      <CtaBanner />
      <BrandsStrip />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  )
}
