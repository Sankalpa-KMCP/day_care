import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import { meta } from '../data/site.js'
import Hero from '../components/home/Hero.jsx'
import InfoBand from '../components/home/InfoBand.jsx'
import Welcome from '../components/home/Welcome.jsx'
import WhyParkdale from '../components/home/WhyParkdale.jsx'
import AfterSchoolFeature from '../components/home/AfterSchoolFeature.jsx'
import ProgramsPreview from '../components/home/ProgramsPreview.jsx'
import PhilosophyBand from '../components/home/PhilosophyBand.jsx'
import ReviewsSection from '../components/home/ReviewsSection.jsx'
import LocationSection from '../components/LocationSection.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import GalleryGrid from '../components/GalleryGrid.jsx'
import SectionHead from '../components/ui/SectionHead.jsx'
import { galleryItems } from '../data/site.js'

export default function Home() {
  useDocumentMeta(meta.home.title, meta.home.description)

  return (
    <>
      <Hero />
      <InfoBand />
      <Welcome />
      <WhyParkdale />
      <AfterSchoolFeature />
      <ProgramsPreview />

      <section className="section gallery-section">
        <div className="container">
          <SectionHead
            kicker="Life at Parkdale"
            title={
              <>
                A peek inside <em>our days.</em>
              </>
            }
            lead="Bright rooms, busy hands and plenty of space to play — here’s a little taste of everyday life at Parkdale."
          />
          <GalleryGrid items={galleryItems} />
        </div>
      </section>

      <PhilosophyBand />
      <ReviewsSection />
      <LocationSection />
      <CtaBanner />
    </>
  )
}
