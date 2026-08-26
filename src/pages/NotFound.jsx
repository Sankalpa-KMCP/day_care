import { Link } from 'react-router-dom'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import { business, meta } from '../data/site.js'
import PageHero from '../components/PageHero.jsx'
import ButtonLink from '../components/ui/ButtonLink.jsx'
import Reveal from '../components/Reveal.jsx'

export default function NotFound() {
  useDocumentMeta(meta.notFound.title, meta.notFound.description)

  return (
    <>
      <PageHero
        kicker="404 · Page not found"
        title={
          <>
            Looks like this page <em>wandered off.</em>
          </>
        }
        lead="The page you’re looking for isn’t here — but there’s plenty more to see. Let’s get you back on track."
      />
      <section className="section notfound-section">
        <div className="container">
          <Reveal>
            <div className="btn-row btn-row--center">
              <ButtonLink to="/" arrow>
                Back to Home
              </ButtonLink>
              <ButtonLink to="/programs" variant="ghost">
                View Programs
              </ButtonLink>
            </div>
            <p className="notfound-help">
              Prefer to talk to a human? Call{' '}
              <a href={business.phone.tel}>{business.phone.friendly}</a> or{' '}
              <Link to="/contact">send an inquiry</Link>.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
