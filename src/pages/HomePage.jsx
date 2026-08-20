import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AgeCalculator from '../components/AgeCalculator';
import BotanicalTrail from '../components/BotanicalTrail';
import PhotoGalleryModal from '../components/PhotoGalleryModal';
import ProgramCard from '../components/ProgramCard';
import Reveal from '../components/Reveal';
import ScheduleTimeline from '../components/ScheduleTimeline';
import { programsData } from '../data/programs';
import { editorialImage } from '../utils/assetPath';

const commitments = [
  ['Listen closely', 'Care begins by noticing the child in front of us.'],
  ['Leave room', 'Long play is where ideas, courage, and friendships grow.'],
  ['Stay connected', 'Families deserve honest conversation every day.'],
];

const spaces = [
  { src: editorialImage('preschool-art.webp'), title: 'The making table', alt: 'Illustrative children making art with natural materials', desc: 'A place where paint spills, ideas overlap, and process matters more than polish.', accent: 'clay' },
  { src: editorialImage('outdoor-garden.webp'), title: 'The garden', alt: 'Illustrative children exploring a natural play garden', desc: 'Weather, water, mud, herbs, balancing, and long stretches of fresh air.', accent: 'honey' },
  { src: editorialImage('prek-reading.webp'), title: 'The quiet corner', alt: 'Illustrative children reading together in a calm classroom corner', desc: 'Soft places for stories, conversation, wondering, and a little space alone.', accent: 'sage' },
];

export default function HomePage() {
  const [activeImage, setActiveImage] = useState(null);

  const moveStack = (event) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce), (pointer: coarse)').matches) return;
    const box = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--stack-x', `${((event.clientX - box.left) / box.width - 0.5) * 8}px`);
    event.currentTarget.style.setProperty('--stack-y', `${((event.clientY - box.top) / box.height - 0.5) * 8}px`);
  };

  const resetStack = (event) => {
    event.currentTarget.style.setProperty('--stack-x', '0px');
    event.currentTarget.style.setProperty('--stack-y', '0px');
  };

  return (
    <div className="editorial-page storybook-page home-storybook" data-page="home">
      <section className="gallery-hero storybook-home-hero">
        <div className="container-wide gallery-hero-shell hero-story-stage">
          <div className="gallery-hero-heading hero-story-copy">
            <p className="kicker hero-kicker">The Little Grove · A future early-learning house</p>
            <h1><span>Childhood,</span><em>beautifully unhurried.</em></h1>
            <p className="hero-story-deck">A small, play-led place imagined for children to feel deeply known, make a glorious mess, and grow in their own time.</p>
            <div className="hero-story-actions">
              <Link to="/contact" className="button-solid">Explore the inquiry</Link>
              <Link to="/programs" className="text-link">Meet the rooms <span aria-hidden="true">→</span></Link>
            </div>
          </div>

          <div className="gallery-stack hero-photo-story" onPointerMove={moveStack} onPointerLeave={resetStack}>
            <figure className="stack-frame stack-main irregular-frame">
              <img src={editorialImage('hero-classroom.webp')} alt="Illustrative children absorbed in open-ended classroom play" width="1800" height="1200" fetchPriority="high" />
              <figcaption>Morning light, loose parts, no rush.</figcaption>
            </figure>
            <figure className="stack-frame stack-small stack-infant irregular-frame" aria-hidden="true">
              <img src={editorialImage('infant-care.webp')} alt="" width="1400" height="1050" />
            </figure>
            <figure className="stack-frame stack-small stack-art irregular-frame" aria-hidden="true">
              <img src={editorialImage('preschool-art.webp')} alt="" width="1400" height="1050" />
            </figure>
            <p className="stack-caption">Illustrative concept imagery</p>
          </div>

          <BotanicalTrail variant="arch" tone="clay" className="home-hero-trail" />
          <p className="hero-margin-note home-hero-note"><span aria-hidden="true">01</span> Rooted in care · shaped by play</p>
        </div>
      </section>

      <Reveal as="section" className="belief-rail storybook-beliefs" aria-label="What guides us">
        <div className="container belief-story-grid">
          <div className="belief-intro-wrap">
            <p className="kicker">What guides us</p>
            <p className="belief-intro">Less like an institution. More like a thoughtful little community.</p>
          </div>
          <div className="belief-notes">
            {commitments.map(([title, text], index) => (
              <article key={title} className="belief-note">
                <span aria-hidden="true">0{index + 1}</span>
                <h2>{title}</h2>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section-editorial finder-section storybook-finder">
        <div className="container"><AgeCalculator /></div>
        <div className="container program-gallery-heading">
          <p className="kicker">Three rooms, one gentle thread</p>
          <p>Each environment changes with the child. The promise to notice, listen, and leave room stays the same.</p>
        </div>
        <div className="container-wide program-cards-compact storybook-program-cards">
          {programsData.map((program, index) => <ProgramCard key={program.id} program={program} index={index} />)}
        </div>
        <BotanicalTrail variant="meander" tone="pine" className="finder-botanical-trail" />
      </Reveal>

      <Reveal as="section" className="section-editorial rhythm-section storybook-rhythm">
        <div className="container rhythm-storybook-stage">
          <ScheduleTimeline />
          <BotanicalTrail variant="meander" tone="sage" className="rhythm-botanical-trail" />
        </div>
      </Reveal>

      <Reveal as="section" className="cinematic-spaces storybook-spaces">
        <div className="spaces-intro container">
          <p className="kicker light">Rooms that invite, not instruct</p>
          <h2>Texture, quiet corners,<br />and a garden that gets muddy.</h2>
          <p>Tap a frame to look closer at the atmosphere imagined for the future learning house.</p>
        </div>
        <div className="cinema-track container-wide">
          {spaces.map((space, index) => (
            <button type="button" className={`cinema-frame cinema-${index + 1}`} data-accent={space.accent} key={space.title} onClick={() => setActiveImage(space)} aria-label={`Open image: ${space.title}`}>
              <img src={space.src} alt={space.alt} width={index === 1 ? '1800' : '1400'} height={index === 1 ? '1200' : '1050'} loading="lazy" decoding="async" />
              <span><small>0{index + 1}</small><strong>{space.title}</strong></span>
            </button>
          ))}
        </div>
        <div className="container cinema-foot"><p>Illustrative concept images, not a completed facility.</p><Link className="text-link light-link" to="/about">Read our point of view <span aria-hidden="true">→</span></Link></div>
        <BotanicalTrail variant="arch" tone="honey" className="spaces-botanical-trail" />
      </Reveal>

      <Reveal as="section" className="closing-invitation storybook-invitation">
        <div className="container invitation-grid">
          <p className="kicker light">Opening plans in progress</p>
          <h2>Grow this little grove with us.</h2>
          <div><p>Explore the concept-stage inquiry and preview how future families could share what they need from care.</p><Link to="/contact" className="button-light">Explore the inquiry</Link></div>
        </div>
      </Reveal>

      <PhotoGalleryModal activeImage={activeImage} onClose={() => setActiveImage(null)} />
    </div>
  );
}
