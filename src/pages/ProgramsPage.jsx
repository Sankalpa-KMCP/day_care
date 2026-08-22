import React from 'react';
import { Link } from 'react-router-dom';
import BotanicalTrail from '../components/BotanicalTrail';
import CurriculumDomains from '../components/CurriculumDomains';
import Reveal from '../components/Reveal';
import ScheduleTimeline from '../components/ScheduleTimeline';
import TuitionEstimator from '../components/TuitionEstimator';
import { programsData } from '../data/programs';
import { editorialImage } from '../utils/assetPath';

const roomTones = ['nest', 'meadow', 'canopy'];

export default function ProgramsPage() {
  return (
    <div className="editorial-page storybook-page luxury-inner programs-luxury programs-storybook" data-page="programs">
      {/* 1. HERO */}
      <header className="inner-hero luxury-inner-hero programs-cover storybook-inner-hero programs-storybook-hero">
        <div className="container inner-hero-grid programs-hero-stage">
          <div className="programs-hero-copy">
            <span className="eyebrow-badge">Continuum of Care (6wk – 5yr)</span>
            <h1>Different Ages Need Different Kinds of Room.</h1>
            <p className="inner-deck">
              Three intentionally curated learning environments tuned to your child’s developmental season—held together by familiar relationships, long play, and daily outdoor life.
            </p>
            <p className="hero-margin-note">
              <span aria-hidden="true">01—03</span> Three Rooms · One Gentle Thread
            </p>
          </div>

          <figure className="programs-hero-collage" aria-label="Illustrative photos of the three learning rooms">
            <div className="programs-hero-photo programs-hero-photo--nest irregular-frame">
              <img src={programsData[0].image} alt={programsData[0].imageAlt} width="1400" height="1050" fetchPriority="high" />
              <span className="room-collage-tag">The Nest (Infants)</span>
            </div>
            <div className="programs-hero-photo programs-hero-photo--meadow irregular-frame">
              <img src={programsData[1].image} alt={programsData[1].imageAlt} width="1400" height="1050" />
              <span className="room-collage-tag">The Meadow (Toddlers)</span>
            </div>
            <div className="programs-hero-photo programs-hero-photo--canopy irregular-frame">
              <img src={programsData[2].image} alt={programsData[2].imageAlt} width="1400" height="1050" />
              <span className="room-collage-tag">The Canopy (Pre-K)</span>
            </div>
            <figcaption>Illustrative classroom environments · The Little Grove</figcaption>
          </figure>
          <BotanicalTrail variant="meander" tone="pine" className="programs-hero-trail" />
        </div>
      </header>

      {/* 2. IN-DEPTH ROOM CHAPTERS */}
      <section className="program-chapters luxury-chapters storybook-chapters" aria-label="Detailed Program Rooms">
        <div className="container programs-layout growth-path-layout">
          {/* Quick-Jump Sidebar */}
          <nav className="chapter-rail growth-path-nav" aria-label="Program chapters jump navigation">
            <div className="growth-path-nav-heading">
              <p>Growing Path</p>
              <span>Follow at their pace</span>
            </div>
            <div className="growth-path-nav-links">
              {programsData.map((program, index) => (
                <a
                  className={`room-link room-link--${roomTones[index]}`}
                  href={`#${program.id}`}
                  key={program.id}
                >
                  <span aria-hidden="true">0{index + 1}</span>
                  <div>
                    <strong>{program.title}</strong>
                    <small>{program.ageGroup}</small>
                  </div>
                </a>
              ))}
              <a className="room-link room-link--framework" href="#curriculum-framework">
                <span aria-hidden="true">✦</span>
                <div>
                  <strong>Curriculum Domains</strong>
                  <small>5 Core Pillars</small>
                </div>
              </a>
              <a className="room-link room-link--tuition" href="#tuition-estimator">
                <span aria-hidden="true">$</span>
                <div>
                  <strong>Tuition Estimator</strong>
                  <small>Calculate Fees</small>
                </div>
              </a>
            </div>
            <BotanicalTrail variant="vertical" tone="pine" className="growth-path-trail" />
          </nav>

          {/* Room Chapters List */}
          <div className="chapters-column">
            {programsData.map((program, index) => (
              <Reveal
                as="article"
                className={`program-chapter luxury-chapter room-chapter room-tone room-tone--${roomTones[index]}`}
                id={program.id}
                key={program.id}
              >
                <figure className="chapter-media irregular-frame">
                  <img
                    src={program.image}
                    alt={program.imageAlt}
                    width="1400"
                    height="1050"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>{program.title} · {program.category}</figcaption>
                </figure>
                <div className="chapter-copy">
                  <div className="chapter-index field-note-number">
                    <span aria-hidden="true">0{index + 1}</span>
                    <div>
                      <strong>{program.ageGroup}</strong>
                      <span className="chapter-ratio-badge">{program.ratio}</span>
                    </div>
                  </div>
                  <span className="kicker">{program.category}</span>
                  <h2>{program.title}</h2>
                  <p className="chapter-deck">{program.description}</p>
                  
                  <div className="chapter-detail-block">
                    <h4 className="eyebrow">Classroom Sanctuary</h4>
                    <p>{program.environmentFocus}</p>
                  </div>

                  <div className="focus-list">
                    <p className="eyebrow">Daily Learning Highlights</p>
                    <ul>
                      {program.dailyFocusAreas.map((item) => (
                        <li key={item}>
                          <span className="bullet-leaf" aria-hidden="true">🌱</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="chapter-actions-row">
                    <Link
                      className="button-solid chapter-inquire-btn"
                      to="/contact"
                      state={{ prefilledProgram: program.id }}
                    >
                      Inquire About {program.title} <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
                <BotanicalTrail
                  variant={index === 1 ? 'arch' : 'meander'}
                  tone={index === 0 ? 'clay' : index === 1 ? 'honey' : 'sage'}
                  className="chapter-botanical-trail"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE DEVELOPMENTAL DOMAINS FRAMEWORK */}
      <Reveal as="section" className="section-editorial curriculum-section" aria-label="Developmental Framework">
        <div className="container">
          <CurriculumDomains />
        </div>
      </Reveal>

      {/* 4. DAILY SCHEDULE & CADENCE */}
      <Reveal as="section" className="section-editorial rhythm-section program-rhythm luxury-rhythm storybook-rhythm" aria-label="Daily Cadence">
        <div className="container rhythm-storybook-stage">
          <ScheduleTimeline />
          <BotanicalTrail variant="meander" tone="sage" className="rhythm-botanical-trail" />
        </div>
      </Reveal>

      {/* 5. INTERACTIVE TUITION & SCHEDULE ESTIMATOR */}
      <Reveal as="section" className="section-editorial programs-tuition-section" aria-label="Tuition Estimator">
        <div className="container">
          <TuitionEstimator initialRoom="preschool-learning" />
        </div>
      </Reveal>

      {/* 6. OUTDOOR NATURE SANCTUARY FEATURE */}
      <Reveal as="section" className="section-editorial outdoor-feature luxury-outdoor storybook-outdoor" aria-label="Outdoor Sanctuary">
        <div className="container outdoor-grid">
          <div className="outdoor-feature-copy">
            <span className="eyebrow-badge eyebrow-badge--light">One Shared Sanctuary</span>
            <h2>The Garden Belongs to Every Single Age.</h2>
            <p>
              Outdoor exploration is never treated as a brief recess or reward after instruction. It is our largest classroom—where balance, physical courage, ecology, cooperative mud building, and calm wonder flourish together.
            </p>
            <div className="outdoor-badges-list">
              <span className="outdoor-pill">🌿 Raised Organic Herb & Veggie Beds</span>
              <span className="outdoor-pill">🪵 Cedar Tree Balance Trunks</span>
              <span className="outdoor-pill">🥣 Rainwater Mud Kitchen</span>
            </div>
          </div>
          <figure className="irregular-frame irregular-frame--landscape">
            <img
              src={editorialImage('outdoor-garden.webp')}
              alt="Children playing collaboratively in a lush natural garden"
              width="1800"
              height="1200"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Daily outdoor life · Rain, snow, or sun</figcaption>
          </figure>
          <BotanicalTrail variant="arch" tone="parchment" className="outdoor-botanical-trail" />
        </div>
      </Reveal>

      {/* 7. CLOSING CTA */}
      <Reveal as="section" className="closing-invitation luxury-invitation storybook-invitation" aria-label="Schedule a Tour">
        <div className="container invitation-grid">
          <div>
            <span className="eyebrow-badge eyebrow-badge--light">Founding Term Tours</span>
            <h2>Find the Right Room for Your Child.</h2>
          </div>
          <div className="invitation-action-col">
            <p>
              Schedule a personalized walkthrough or ask about availability, age readiness, and part-time schedules.
            </p>
            <div className="invitation-btn-group">
              <Link className="button-light" to="/contact">
                Schedule a Visit & Inquire <span aria-hidden="true">→</span>
              </Link>
              <Link className="button-ghost button-ghost--light" to="/about">
                Read About Our Guiding Principles
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
