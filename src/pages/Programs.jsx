import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import { business, meta, programs } from '../data/site.js'
import PageHero from '../components/PageHero.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import ButtonLink from '../components/ui/ButtonLink.jsx'
import Reveal from '../components/Reveal.jsx'
import Photo from '../components/Photo.jsx'

function ProgramBlock({ program, flip = false }) {
  return (
    <article
      id={program.id}
      className={`program${program.featured ? ' program--featured' : ''}${
        flip ? ' program--flip' : ''
      }`}
    >
      <div className="container program-grid">
        <Reveal className="program-media">
          <span className="program-badge">{program.kicker}</span>
          <Photo image={program.image} ratio="4 / 3.1" />
        </Reveal>

        <Reveal delay={130} className="program-body">
          <h2>{program.name}</h2>
          <p className="program-blurb">{program.blurb}</p>
          <ul className="chip-list">
            {program.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <dl className="spec-list">
            {program.specs.map((spec) => (
              <div key={spec.label} className="leader-row">
                <dt>{spec.label}</dt>
                <span className="leader-dots" aria-hidden="true" />
                <dd>
                  {spec.value ?? <em className="spec-tbd">to be confirmed — please ask us</em>}
                </dd>
              </div>
            ))}
          </dl>
          <div className="btn-row">
            <ButtonLink to="/contact" arrow>
              Ask About {program.name}
            </ButtonLink>
            <ButtonLink href={business.phone.tel} variant="ghost">
              Call Us
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </article>
  )
}

export default function Programs() {
  useDocumentMeta(meta.programs.title, meta.programs.description)
  const [childCare, afterSchool] = programs

  return (
    <>
      <PageHero
        kicker="Our programs"
        title={
          <>
            The right fit for <em>your family.</em>
          </>
        }
        lead="From full days for little ones to easy afternoons for school-aged kids — here’s how Parkdale can help with your week."
      />

      <section className="section program-section">
        <ProgramBlock program={childCare} />
        <ProgramBlock program={afterSchool} flip />
      </section>

      <section className="question-strip-wrap">
        <Reveal className="container">
          <div className="question-strip">
            <div>
              <h2>Not sure which program fits?</h2>
              <p>
                Every child is different. Give us a call and we’ll happily talk through what your
                child’s days at Parkdale could look like.
              </p>
            </div>
            <div className="btn-row">
              <ButtonLink href={business.phone.tel} variant="terra">
                {business.phone.display}
              </ButtonLink>
              <ButtonLink to="/contact" variant="ghost" arrow>
                Send an Inquiry
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </section>

      <CtaBanner />
    </>
  )
}
