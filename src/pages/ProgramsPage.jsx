import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import ScheduleTimeline from '../components/ScheduleTimeline';
import BotanicalTrail from '../components/BotanicalTrail';
import { programsData } from '../data/programs';
import { editorialImage } from '../utils/assetPath';

const roomTones = ['nest', 'meadow', 'canopy'];

export default function ProgramsPage() {
  return (
    <div className="editorial-page storybook-page luxury-inner programs-luxury programs-storybook">
      <header className="inner-hero luxury-inner-hero programs-cover storybook-inner-hero programs-storybook-hero">
        <div className="container inner-hero-grid programs-hero-stage">
          <div className="programs-hero-copy">
            <p className="kicker">Programs in development</p>
            <h1>Different ages need different kinds of room.</h1>
            <p className="inner-deck">Three environments tuned to a child’s pace—held together by familiar relationships, long play, and time outdoors.</p>
            <p className="hero-margin-note"><span aria-hidden="true">01—03</span> A growing path through the early years</p>
          </div>
          <figure className="programs-hero-collage" aria-label="Illustrative concept images for the three proposed program rooms">
            <div className="programs-hero-photo programs-hero-photo--nest irregular-frame">
              <img src={programsData[0].image} alt={programsData[0].imageAlt} width="1400" height="1050" />
              <span aria-hidden="true">The Nest</span>
            </div>
            <div className="programs-hero-photo programs-hero-photo--meadow irregular-frame">
              <img src={programsData[1].image} alt={programsData[1].imageAlt} width="1400" height="1050" />
              <span aria-hidden="true">The Meadow</span>
            </div>
            <div className="programs-hero-photo programs-hero-photo--canopy irregular-frame">
              <img src={programsData[2].image} alt={programsData[2].imageAlt} width="1400" height="1050" />
              <span aria-hidden="true">The Canopy</span>
            </div>
            <figcaption>Illustrative concept images · proposed learning rooms</figcaption>
          </figure>
          <BotanicalTrail variant="meander" tone="pine" className="programs-hero-trail" />
        </div>
      </header>

      <section className="program-chapters luxury-chapters storybook-chapters">
        <div className="container programs-layout growth-path-layout">
          <nav className="chapter-rail growth-path-nav" aria-label="Program chapters">
            <div className="growth-path-nav-heading">
              <p>Growing path</p>
              <span>Follow at their pace</span>
            </div>
            <div className="growth-path-nav-links">
              {programsData.map((program, index) => (
                <a className={`room-link room-link--${roomTones[index]}`} href={`#${program.id}`} key={program.id}>
                  <span aria-hidden="true">0{index + 1}</span>
                  <strong>{program.title}</strong>
                  <small>{program.ageGroup}</small>
                </a>
              ))}
            </div>
            <BotanicalTrail variant="vertical" tone="pine" className="growth-path-trail" />
          </nav>
          <div className="chapters-column">
            {programsData.map((program, index) => (
              <Reveal as="article" className={`program-chapter luxury-chapter room-chapter room-tone room-tone--${roomTones[index]}`} id={program.id} key={program.id}>
                <figure className="chapter-media irregular-frame"><img src={program.image} alt={program.imageAlt} width="1400" height="1050" /><figcaption>Illustrative concept image · {program.category}</figcaption></figure>
                <div className="chapter-copy">
                  <div className="chapter-index field-note-number"><span aria-hidden="true">0{index + 1}</span><p>{program.ageGroup}<br />{program.ratio}</p></div>
                  <p className="kicker">{program.category}</p><h2>{program.title}</h2><p className="chapter-deck">{program.description}</p><p>{program.environmentFocus}</p>
                  <div className="focus-list"><p className="eyebrow">What fills the day</p><ul>{program.dailyFocusAreas.map((item) => <li key={item}>{item}</li>)}</ul></div>
                  <Link className="text-link room-inquiry-link" to="/contact" aria-label={`Ask about ${program.title}`}>Ask about {program.title} <span aria-hidden="true">↗</span></Link>
                </div>
                <BotanicalTrail variant={index === 1 ? 'arch' : 'meander'} tone={index === 0 ? 'clay' : index === 1 ? 'honey' : 'sage'} className="chapter-botanical-trail" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reveal as="section" className="section-editorial rhythm-section program-rhythm luxury-rhythm storybook-rhythm">
        <div className="container rhythm-storybook-stage">
          <ScheduleTimeline />
          <BotanicalTrail variant="meander" tone="sage" className="rhythm-botanical-trail" />
        </div>
      </Reveal>

      <Reveal as="section" className="section-editorial outdoor-feature luxury-outdoor storybook-outdoor">
        <div className="container outdoor-grid">
          <div className="outdoor-feature-copy"><p className="kicker light">One shared classroom</p><h2>The garden belongs to every age.</h2><p>Outdoor time is not a reward after learning. It is where balance, language, risk, cooperation, science, and calm meet naturally.</p><p className="concept-note">Proposed program principle · final facility plan is not yet complete.</p></div>
          <figure className="irregular-frame irregular-frame--landscape"><img src={editorialImage('outdoor-garden.webp')} alt="Illustrative children learning through play in a natural garden" width="1800" height="1200" /><figcaption>Illustrative concept image</figcaption></figure>
          <BotanicalTrail variant="arch" tone="parchment" className="outdoor-botanical-trail" />
        </div>
      </Reveal>

      <Reveal as="section" className="closing-invitation luxury-invitation storybook-invitation">
        <div className="container invitation-grid"><p className="kicker light">Still taking shape</p><h2>Tell us what your family needs from care.</h2><div><p>Age, schedule, hopes, worries—we would like to hear the whole picture.</p><Link className="button-light" to="/contact">Explore the inquiry</Link></div></div>
      </Reveal>
    </div>
  );
}
