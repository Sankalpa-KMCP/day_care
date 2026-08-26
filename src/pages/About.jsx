import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import { approachItems, aboutSpaceItems, teamMembers } from '../data/site.js'
import PageHero from '../components/PageHero.jsx'
import GalleryGrid from '../components/GalleryGrid.jsx'
import LocationSection from '../components/LocationSection.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import SectionHead from '../components/ui/SectionHead.jsx'
import ButtonLink from '../components/ui/ButtonLink.jsx'
import Reveal from '../components/Reveal.jsx'
import Photo from '../components/Photo.jsx'
import { Squiggle, Sparkle, SunMark, IconHeart, IconSprout, IconSun } from '../components/decor.jsx'

const iconFor = {
  heart: IconHeart,
  sparkle: Sparkle,
  sprout: IconSprout,
  sun: IconSun,
}

const tileTints = ['tile--sage', 'tile--gold', 'tile--terra']

export default function About() {
  useDocumentMeta(meta.about.title, meta.about.description)

  return (
    <>
      <PageHero
        kicker="About us"
        title={
          <>
            A warm welcome <em>from Parkdale.</em>
          </>
        }
        lead="Get to know the people and the place behind Parkdale Daycare — a neighbourhood childcare centre in central Edmonton."
      />

      <section className="section day-section">
        <div className="container day-grid">
          <Reveal className="day-photo">
            <Photo
              image={{ src: null, alt: 'Inside Parkdale Daycare', variant: 1 }}
              ratio="4 / 4.8"
              eager
            />
          </Reveal>
          <Reveal delay={130} className="day-body">
            <p className="kicker">Our daycare</p>
            <h2 className="section-title">
              Small centre feeling, <em>big-hearted care.</em>
            </h2>
            <p>
              Parkdale Daycare sits in the Parkdale neighbourhood of central Edmonton, welcoming
              children and families from across the city. Inside you’ll find bright play spaces,
              cozy corners for quieter moments, and a gentle routine that gives children the comfort
              of knowing what comes next.
            </p>
            <p>
              We’re a hands-on team that believes good childcare is mostly made of small, consistent
              things: a hello at the door, a lap for a story, a patient moment at clean-up time. Put
              enough of those together and you get a place where children are happy to arrive — and
              hard to leave at the end of the day.
            </p>
            <blockquote className="pull-line">
              “Children remember how a place felt.”
              <Squiggle width={120} />
            </blockquote>
            <ButtonLink to="/programs" variant="ghost" arrow>
              See Our Programs
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      <section className="section approach-section">
        <div className="container">
          <SectionHead
            kicker="Our approach"
            title={
              <>
                Simple ideas, <em>done every day.</em>
              </>
            }
            lead="No grand theories — just steady care, good materials and grown-ups who genuinely enjoy being around children."
          />
          <div className="values-grid">
            {approachItems.map((item, i) => {
              const Icon = iconFor[item.icon]
              return (
                <Reveal key={item.title} delay={(i % 2) * 100} className="value-cell">
                  <span className="value-icon">
                    <Icon size={20} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section space-section">
        <div className="container">
          <SectionHead
            kicker="Our space"
            title={
              <>
                Rooms made for <em>real childhood.</em>
              </>
            }
            lead="Spaces to build, paint, read, climb and rest — plus room outdoors to run off the wiggles."
          />
          <GalleryGrid items={aboutSpaceItems} compact />
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <SectionHead
            align="center"
            kicker="Meet our team"
            title={
              <>
                The grown-ups behind <em>the fun.</em>
              </>
            }
          />
          <Reveal className="team-note-wrap">
            <p className="hand team-note">real faces &amp; names coming soon!</p>
          </Reveal>
          <div className="team-grid">
            {teamMembers.map((member, i) => (
              <Reveal key={member.id} delay={i * 90} className="team-card">
                <div className={`team-tile ${tileTints[i % tileTints.length]}`}>
                  <SunMark size={54} />
                  <span className="ph-tag">Add photo</span>
                </div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <LocationSection />
      <CtaBanner />
    </>
  )
}
