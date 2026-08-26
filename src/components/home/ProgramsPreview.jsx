import { Link } from 'react-router-dom'
import { business, programsPreview } from '../../data/site.js'
import { Sparkle } from '../decor.jsx'
import SectionHead from '../ui/SectionHead.jsx'
import ButtonLink from '../ui/ButtonLink.jsx'
import Reveal from '../Reveal.jsx'
import Photo from '../Photo.jsx'

export default function ProgramsPreview() {
  return (
    <section className="section preview-section">
      <div className="container">
        <div className="preview-top">
          <SectionHead
            kicker="Our programs"
            title={
              <>
                Room to grow, <em>every age &amp; stage.</em>
              </>
            }
            className="preview-head"
          />
          <ButtonLink to="/programs" variant="ghost" arrow className="preview-all">
            Explore Our Programs
          </ButtonLink>
        </div>

        <div className="preview-grid">
          <Reveal className="preview-card preview-card--photo">
            <Photo image={programsPreview.childCare.image} ratio="16 / 10.5" showTag={false} />
            <div className="preview-body">
              <h3>{programsPreview.childCare.name}</h3>
              <p>{programsPreview.childCare.blurb}</p>
              <Link className="text-link" to="/programs#child-care">
                Explore child care →
              </Link>
            </div>
          </Reveal>

          <Reveal delay={130} className="preview-card preview-card--tint">
            <Sparkle className="preview-sparkle" size={30} />
            <p className="hand preview-note">{programsPreview.afterSchool.note}</p>
            <div className="preview-body">
              <h3>{programsPreview.afterSchool.name}</h3>
              <p>{programsPreview.afterSchool.blurb}</p>
              <Link className="text-link" to="/programs#after-school-care">
                Explore after school care →
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80} className="preview-strip">
          <p>
            <strong>Wondering which program fits your child?</strong> Call us — we’ll happily talk
            it through.
          </p>
          <a href={business.phone.tel} className="text-link">
            {business.phone.friendly} →
          </a>
        </Reveal>
      </div>
    </section>
  )
}
