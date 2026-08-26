import { photos, whyPoints } from '../../data/site.js'
import SectionHead from '../ui/SectionHead.jsx'
import Reveal from '../Reveal.jsx'
import Photo from '../Photo.jsx'

export default function WhyParkdale() {
  return (
    <section className="section why-section">
      <div className="container">
        <SectionHead
          kicker="Why families choose Parkdale"
          title={
            <>
              The things that make a day <em>feel right.</em>
            </>
          }
        />
        <div className="why-grid">
          <Reveal className="why-media">
            <Photo
              image={photos.why}
              ratio="3 / 3.8"
              showTag={false}
            />
            <p className="why-note hand">every day is an adventure</p>
          </Reveal>

          <div className="why-list">
            {whyPoints.map((point, i) => (
              <Reveal as="article" key={point.title} delay={i * 80} className="why-row">
                <span className="why-num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
