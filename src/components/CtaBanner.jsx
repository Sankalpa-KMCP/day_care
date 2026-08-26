import { business } from '../data/site.js'
import ButtonLink from './ui/ButtonLink.jsx'
import Reveal from './Reveal.jsx'

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="cta-decor cta-decor--ring" aria-hidden="true" />
      <div className="cta-decor cta-decor--dot" aria-hidden="true" />
      <Reveal className="container cta-inner">
        <p className="kicker kicker--gold">Come say hello</p>
        <h2>Come see Parkdale for yourself.</h2>
        <p className="cta-copy">
          Choosing care for your child is a big decision — questions are welcome. Give us a call or
          drop by; we’d love to meet your family.
        </p>
        <div className="btn-row btn-row--center">
          <ButtonLink to="/contact" variant="light" arrow>
            Book a Visit
          </ButtonLink>
          <ButtonLink href={business.phone.tel} variant="outline-light">
            Call {business.phone.friendly}
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  )
}
