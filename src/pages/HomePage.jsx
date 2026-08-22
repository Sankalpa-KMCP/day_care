import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AgeCalculator from '../components/AgeCalculator';
import BotanicalTrail from '../components/BotanicalTrail';
import CampusExplorer from '../components/CampusExplorer';
import PhotoGalleryModal from '../components/PhotoGalleryModal';
import ProgramCard from '../components/ProgramCard';
import Reveal from '../components/Reveal';
import ScheduleTimeline from '../components/ScheduleTimeline';
import TuitionEstimator from '../components/TuitionEstimator';
import { programsData } from '../data/programs';
import { editorialImage } from '../utils/assetPath';

const commitments = [
  {
    title: 'Listen Closely',
    text: 'Care begins by noticing the whole child—their subtleties of mood, emerging passions, and unique sensory pace.',
    icon: '👂',
  },
  {
    title: 'Leave Room for Long Play',
    text: 'Uninterrupted deep play is where courage, deep concentration, peer collaboration, and resilience flourish.',
    icon: '🌱',
  },
  {
    title: 'Stay Connected in Real Partnership',
    text: 'Families deserve honest, warm, two-way communication every morning and evening, not late automated reports.',
    icon: '🤝',
  },
  {
    title: '100% Outdoor Life Daily',
    text: 'Rain or shine, children explore mud, seeds, trees, water, and open skies to build vital physical and emotional balance.',
    icon: '🌿',
  },
];

const familyVoices = [
  {
    quote: '“Finding a place that treats messy outdoor exploration and long storytelling as the foundation of early learning is a breath of fresh air.”',
    author: 'Hannah & David M.',
    child: 'Parents of Leo (3 yrs)',
    location: 'Founding Neighborhood Family',
  },
  {
    quote: '“The calm atmosphere and intimate educator ratios gave us immediate peace of mind for our infant’s first separation.”',
    author: 'Dr. Priya S.',
    child: 'Parent of Maya (9 mos)',
    location: 'Local Pediatric Resident',
  },
  {
    quote: '“Instead of rigid worksheets, they nurture real curiosity through wood, paint, plants, and conversation. It’s what childhood should be.”',
    author: 'Julian & Claire K.',
    child: 'Parents of Noah (4.5 yrs)',
    location: 'Early Years Educators',
  },
];

export default function HomePage() {
  const [activeImage, setActiveImage] = useState(null);

  const moveStack = (event) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce), (pointer: coarse)').matches) return;
    const box = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--stack-x', `${((event.clientX - box.left) / box.width - 0.5) * 10}px`);
    event.currentTarget.style.setProperty('--stack-y', `${((event.clientY - box.top) / box.height - 0.5) * 10}px`);
  };

  const resetStack = (event) => {
    event.currentTarget.style.setProperty('--stack-x', '0px');
    event.currentTarget.style.setProperty('--stack-y', '0px');
  };

  return (
    <div className="editorial-page storybook-page home-storybook" data-page="home">
      {/* 1. HERO SECTION */}
      <section className="gallery-hero storybook-home-hero" aria-label="Hero Introduction">
        <div className="container-wide gallery-hero-shell hero-story-stage">
          <div className="gallery-hero-heading hero-story-copy">
            <div className="hero-badge-row">
              <span className="kicker hero-kicker">The Little Grove · Early Learning House</span>
              <span className="concept-pill-badge">Founding Term</span>
            </div>
            <h1>
              <span>Childhood,</span>
              <em>beautifully unhurried.</em>
            </h1>
            <p className="hero-story-deck">
              A warm, nature-infused learning house where children are deeply known, make a glorious mess with natural materials, and grow at their own developmental rhythm.
            </p>
            <div className="hero-story-actions">
              <Link to="/contact" className="button-solid">
                Schedule a Visit & Inquire <span aria-hidden="true">→</span>
              </Link>
              <Link to="/programs" className="text-link">
                Explore the Three Rooms <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="hero-trust-metrics">
              <div className="trust-metric-item">
                <strong>1:3 – 1:8</strong>
                <span>Intimate Adult-to-Child Ratios</span>
              </div>
              <div className="trust-metric-item">
                <strong>100% Organic</strong>
                <span>Scratch-Cooked Daily Meals</span>
              </div>
              <div className="trust-metric-item">
                <strong>Daily Garden</strong>
                <span>Outdoor Mud & Nature Life</span>
              </div>
            </div>
          </div>

          <div
            className="gallery-stack hero-photo-story"
            onPointerMove={moveStack}
            onPointerLeave={resetStack}
            aria-label="Classroom photo gallery preview"
          >
            <figure className="stack-frame stack-main irregular-frame">
              <img
                src={editorialImage('hero-classroom.webp')}
                alt="Children absorbed in open-ended wooden block building in a sunlit classroom"
                width="1800"
                height="1200"
                fetchPriority="high"
              />
              <figcaption>Morning light, loose parts, unhurried discovery.</figcaption>
            </figure>
            <figure className="stack-frame stack-small stack-infant irregular-frame" aria-hidden="true">
              <img
                src={editorialImage('infant-care.webp')}
                alt=""
                width="1400"
                height="1050"
              />
            </figure>
            <figure className="stack-frame stack-small stack-art irregular-frame" aria-hidden="true">
              <img
                src={editorialImage('preschool-art.webp')}
                alt=""
                width="1400"
                height="1050"
              />
            </figure>
            <p className="stack-caption">Illustrative concept imagery · Founding house</p>
          </div>

          <BotanicalTrail variant="arch" tone="clay" className="home-hero-trail" />
          <p className="hero-margin-note home-hero-note">
            <span aria-hidden="true">01</span> Rooted in Care · Shaped by Play
          </p>
        </div>
      </section>

      {/* 2. CORE GUIDING COMMITMENTS */}
      <Reveal as="section" className="belief-rail storybook-beliefs" aria-label="What guides us">
        <div className="container belief-story-grid">
          <div className="belief-intro-wrap">
            <span className="eyebrow-badge">Our Guiding Pillars</span>
            <p className="belief-intro">
              Less like an institution. More like a thoughtful, loving neighborhood sanctuary.
            </p>
          </div>
          <div className="belief-notes">
            {commitments.map((commitment, index) => (
              <article key={commitment.title} className="belief-note">
                <div className="belief-card-top">
                  <span className="belief-num" aria-hidden="true">0{index + 1}</span>
                  <span className="belief-icon" aria-hidden="true">{commitment.icon}</span>
                </div>
                <h2>{commitment.title}</h2>
                <p>{commitment.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      {/* 3. INTERACTIVE AGE CALCULATOR & ROOM PREVIEW */}
      <Reveal as="section" className="section-editorial finder-section storybook-finder" aria-label="Room Finder">
        <div className="container">
          <AgeCalculator />
        </div>
        <div className="container program-gallery-heading">
          <span className="eyebrow-badge">Three Purpose-Built Rooms</span>
          <h2>A Seamless Continuum of Care</h2>
          <p>
            From the soft sensory nest of infancy to the expansive project studios of pre-kindergarten, our environments evolve as your child grows.
          </p>
        </div>
        <div className="container-wide program-cards-compact storybook-program-cards">
          {programsData.map((program, index) => (
            <ProgramCard key={program.id} program={program} index={index} />
          ))}
        </div>
        <BotanicalTrail variant="meander" tone="pine" className="finder-botanical-trail" />
      </Reveal>

      {/* 4. INTERACTIVE CAMPUS & SPACE EXPLORER */}
      <Reveal as="section" className="section-editorial campus-tour-section" aria-label="Campus Tour">
        <div className="container">
          <CampusExplorer onOpenModal={(img) => setActiveImage(img)} />
        </div>
      </Reveal>

      {/* 5. INTERACTIVE SCHEDULE & RHYTHM SIMULATOR */}
      <Reveal as="section" className="section-editorial rhythm-section storybook-rhythm" aria-label="Daily Schedule Rhythm">
        <div className="container rhythm-storybook-stage">
          <ScheduleTimeline />
          <BotanicalTrail variant="meander" tone="sage" className="rhythm-botanical-trail" />
        </div>
      </Reveal>

      {/* 6. TRANSPARENT TUITION & CARE PLAN ESTIMATOR */}
      <Reveal as="section" className="section-editorial tuition-preview-section" aria-label="Tuition Estimator">
        <div className="container">
          <TuitionEstimator compact={false} />
        </div>
      </Reveal>

      {/* 7. PARENT & FAMILY VOICES */}
      <Reveal as="section" className="section-editorial family-voices-section" aria-label="Family Perspectives">
        <div className="container">
          <div className="voices-header">
            <span className="eyebrow-badge">Community Trust</span>
            <h2>Voices from Our Founding Families</h2>
            <p>What parents and educators value about our unhurried approach to early learning.</p>
          </div>
          <div className="voices-grid">
            {familyVoices.map((voice) => (
              <blockquote key={voice.author} className="voice-card">
                <p className="voice-quote">{voice.quote}</p>
                <footer className="voice-footer">
                  <cite className="voice-author">{voice.author}</cite>
                  <span className="voice-child">{voice.child}</span>
                  <span className="voice-tag">{voice.location}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </Reveal>

      {/* 8. CLOSING INVITATION CTA */}
      <Reveal as="section" className="closing-invitation storybook-invitation" aria-label="Closing Invitation">
        <div className="container invitation-grid">
          <div>
            <span className="eyebrow-badge eyebrow-badge--light">Founding Inquiries Open</span>
            <h2>Grow This Little Grove With Us.</h2>
          </div>
          <div className="invitation-action-col">
            <p>
              Join our family interest pool, schedule an intimate walkthrough of our learning rooms, and shape the founding community.
            </p>
            <div className="invitation-btn-group">
              <Link to="/contact" className="button-light">
                Schedule a Visit & Inquire <span aria-hidden="true">→</span>
              </Link>
              <Link to="/about" className="button-ghost button-ghost--light">
                Read Our Story & Philosophy
              </Link>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Lightbox Modal */}
      <PhotoGalleryModal activeImage={activeImage} onClose={() => setActiveImage(null)} />
    </div>
  );
}
