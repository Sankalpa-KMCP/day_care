import { afterSchool } from '../../data/site.js'
import { IconStar } from '../decor.jsx'
import ButtonLink from '../ui/ButtonLink.jsx'
import Reveal from '../Reveal.jsx'

export default function AfterSchoolFeature() {
  return (
    <section className="afterschool">
      <div className="container afterschool-grid">
        <Reveal className="afterschool-copy">
          <p className="kicker kicker--gold">{afterSchool.kicker}</p>
          <h2>{afterSchool.title}</h2>
          <p className="afterschool-lead">{afterSchool.lead}</p>
          <ul className="tick-list">
            {afterSchool.points.map((point) => (
              <li key={point}>
                <IconStar size={15} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <ButtonLink to="/programs#after-school-care" variant="terra" arrow>
            Learn About After School Care
          </ButtonLink>
        </Reveal>

        <Reveal delay={140} className="ticket-wrap">
          <div className="ticket">
            <p className="ticket-heading hand">school-day afternoons</p>
            <div className="ticket-hr" aria-hidden="true" />
            <dl className="ticket-rows">
              {afterSchool.ticket.rows.map((row) => (
                <div key={row.label} className="leader-row">
                  <dt>{row.label}</dt>
                  <span className="leader-dots" aria-hidden="true" />
                  <dd>{row.value ?? 'To be confirmed'}</dd>
                </div>
              ))}
            </dl>
            <p className="ticket-foot">{afterSchool.ticket.footnote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
