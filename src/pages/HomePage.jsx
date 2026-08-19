import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AgeCalculator from '../components/AgeCalculator';
import PhotoGalleryModal from '../components/PhotoGalleryModal';
import ProgramCard from '../components/ProgramCard';
import Reveal from '../components/Reveal';
import ScheduleTimeline from '../components/ScheduleTimeline';
import { programsData } from '../data/programs';
import { editorialImage } from '../utils/assetPath';

const spaces = [
  { src: editorialImage('preschool-art.webp'), title: 'The making table', alt: 'Illustrative children making art with natural materials', desc: 'A place where paint spills, ideas overlap, and process matters more than polish.' },
  { src: editorialImage('outdoor-garden.webp'), title: 'The garden', alt: 'Illustrative children exploring a natural play garden', desc: 'Weather, water, mud, herbs, balancing, and long stretches of fresh air.' },
  { src: editorialImage('prek-reading.webp'), title: 'The quiet corner', alt: 'Illustrative children reading together in a calm classroom corner', desc: 'Soft places for stories, conversation, wondering, and a little space alone.' },
];

export default function HomePage() {
  const [activeImage, setActiveImage] = useState(null);

  const moveStack = (event) => {
    const box = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--stack-x', `${((event.clientX - box.left) / box.width - 0.5) * 10}px`);
    event.currentTarget.style.setProperty('--stack-y', `${((event.clientY - box.top) / box.height - 0.5) * 8}px`);
  };

  const resetStack = (event) => {
    event.currentTarget.style.setProperty('--stack-x', '0px');
    event.currentTarget.style.setProperty('--stack-y', '0px');
  };

  return (
    <div className="editorial-page luxury-home">
      <section className="gallery-hero">
        <div className="container gallery-hero-shell">
          <div className="gallery-hero-heading">
            <p className="kicker hero-kicker">The Little Grove · A future early-learning house</p>
            <h1><span>Childhood,</span><em>beautifully unhurried.</em></h1>
          </div>

          <div className="gallery-stack" onPointerMove={moveStack} onPointerLeave={resetStack}>
            <figure className="stack-frame stack-main">
              <img src={editorialImage('hero-classroom.webp')} alt="Illustrative children absorbed in open-ended classroom play" width="1800" height="1200" />
              <figcaption>Morning light, loose parts, no rush.</figcaption>
            </figure>
            <figure className="stack-frame stack-small stack-infant" aria-hidden="true">
              <img src={editorialImage('infant-care.webp')} alt="" width="1400" height="1050" />
            </figure>
            <figure className="stack-frame stack-small stack-art" aria-hidden="true">
              <img src={editorialImage('preschool-art.webp')} alt="" width="1400" height="1050" />
            </figure>
            <svg className="hero-leaf-line" viewBox="0 0 180 250" aria-hidden="true">
              <path d="M31 231C46 151 90 71 156 18M75 150C55 135 40 113 38 87M77 148c29 0 52-10 68-30M107 98c-8-19-8-38-1-57" />
            </svg>
            <p className="stack-caption">Illustrative concept imagery</p>
          </div>

          <div className="gallery-hero-foot">
            <p>A small, play-led place imagined for children to feel deeply known, make a glorious mess, and grow in their own time.</p>
            <div><Link to="/contact" className="button-solid">Join the interest list</Link><Link to="/programs" className="text-link">Meet the rooms <span aria-hidden="true">→</span></Link></div>
          </div>
        </div>
        <span className="hero-index" aria-hidden="true">01 / 05</span>
      </section>

      <Reveal as="section" className="belief-rail luxury-beliefs" aria-label="What guides us">
        <div className="container belief-grid">
          <p className="belief-intro">Less like an institution. More like a thoughtful little community.</p>
          <div><span>Listen closely</span><p>Care begins by noticing the child in front of us.</p></div>
          <div><span>Leave room</span><p>Long play is where ideas, courage, and friendships grow.</p></div>
          <div><span>Stay connected</span><p>Families deserve honest conversation every day.</p></div>
        </div>
      </Reveal>

      <Reveal as="section" className="section-editorial finder-section luxury-finder">
        <div className="container"><AgeCalculator /></div>
        <div className="container program-cards-compact">{programsData.map((program, index) => <ProgramCard key={program.id} program={program} index={index} />)}</div>
      </Reveal>

      <Reveal as="section" className="section-editorial rhythm-section luxury-rhythm"><div className="container"><ScheduleTimeline /></div></Reveal>

      <Reveal as="section" className="cinematic-spaces">
        <div className="spaces-intro container"><p className="kicker light">Rooms that invite, not instruct</p><h2>Texture, quiet corners,<br />and a garden that gets muddy.</h2></div>
        <div className="cinema-track">
          {spaces.map((space, index) => (
            <button type="button" className={`cinema-frame cinema-${index + 1}`} key={space.title} onClick={() => setActiveImage(space)} aria-label={`Open image: ${space.title}`}>
              <img src={space.src} alt={space.alt} width={index === 1 ? '1800' : '1400'} height={index === 1 ? '1200' : '1050'} />
              <span><small>0{index + 1}</small>{space.title}</span>
            </button>
          ))}
        </div>
        <div className="container cinema-foot"><p>Illustrative concept images, not a completed facility.</p><Link className="text-link light-link" to="/about">Read our point of view <span aria-hidden="true">→</span></Link></div>
      </Reveal>

      <Reveal as="section" className="closing-invitation luxury-invitation"><div className="container invitation-grid"><p className="kicker light">Opening plans in progress</p><h2>Grow this little grove with us.</h2><div><p>Tell us what your family is looking for. Your questions will help shape the next chapter.</p><Link to="/contact" className="button-light">Share your interest</Link></div></div></Reveal>

      <PhotoGalleryModal activeImage={activeImage} onClose={() => setActiveImage(null)} />
    </div>
  );
}
