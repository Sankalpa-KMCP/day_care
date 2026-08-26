import { photos, whyPoints } from '../../data/site.js'
import { IconSprout, IconSun, IconHeart } from '../decor.jsx'
import SectionHead from '../ui/SectionHead.jsx'
import Reveal from '../Reveal.jsx'
import Photo from '../Photo.jsx'

const whyIcons = [IconSprout, IconSun, IconHeart]

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
            {whyPoints.map((point, i) => {
              const Icon = whyIcons[i % whyIcons.length]
              return (
                <Reveal as="article" key={point.title} delay={i * 80} className="why-row">
                  <span className="why-icon">
                    <Icon size={24} />
                  </span>
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
