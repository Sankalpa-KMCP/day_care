import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import ScheduleTimeline from '../components/ScheduleTimeline';
import { programsData } from '../data/programs';
import { editorialImage } from '../utils/assetPath';

export default function ProgramsPage() {
  return (
    <div className="editorial-page luxury-inner programs-luxury">
      <header className="inner-hero luxury-inner-hero programs-cover">
        <div className="container inner-hero-grid"><div><p className="kicker">Programs in development</p><h1>Different ages need different kinds of room.</h1></div><p className="inner-deck">Three environments tuned to a child’s pace—held together by familiar relationships, long play, and time outdoors.</p></div>
      </header>

      <section className="program-chapters luxury-chapters">
        <div className="container programs-layout">
          <nav className="chapter-rail" aria-label="Program chapters">
            <p>Rooms</p>
            {programsData.map((program, index) => <a href={`#${program.id}`} key={program.id}><span>0{index + 1}</span>{program.title}</a>)}
          </nav>
          <div className="chapters-column">
            {programsData.map((program, index) => (
              <Reveal as="article" className="program-chapter luxury-chapter" id={program.id} key={program.id}>
                <figure><img src={program.image} alt={program.imageAlt} width="1400" height="1050" /><figcaption>Illustrative concept image · {program.category}</figcaption></figure>
                <div className="chapter-copy">
                  <div className="chapter-index"><span>0{index + 1}</span><p>{program.ageGroup}<br />{program.ratio}</p></div>
                  <p className="kicker">{program.category}</p><h2>{program.title}</h2><p className="chapter-deck">{program.description}</p><p>{program.environmentFocus}</p>
                  <div className="focus-list"><p className="eyebrow">What fills the day</p><ul>{program.dailyFocusAreas.map((item) => <li key={item}>{item}</li>)}</ul></div>
                  <Link className="text-link" to="/contact">Ask about this room <span aria-hidden="true">↗</span></Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reveal as="section" className="section-editorial rhythm-section program-rhythm luxury-rhythm"><div className="container"><ScheduleTimeline /></div></Reveal>

      <Reveal as="section" className="section-editorial outdoor-feature luxury-outdoor"><div className="container outdoor-grid"><div><p className="kicker light">One shared classroom</p><h2>The garden belongs to every age.</h2><p>Outdoor time is not a reward after learning. It is where balance, language, risk, cooperation, science, and calm meet naturally.</p><p className="concept-note">Proposed program principle · final facility plan is not yet complete.</p></div><figure><img src={editorialImage('outdoor-garden.webp')} alt="Illustrative children learning through play in a natural garden" width="1800" height="1200" /><figcaption>Illustrative concept image</figcaption></figure></div></Reveal>

      <Reveal as="section" className="closing-invitation luxury-invitation"><div className="container invitation-grid"><p className="kicker light">Still taking shape</p><h2>Tell us what your family needs from care.</h2><div><p>Age, schedule, hopes, worries—we would like to hear the whole picture.</p><Link className="button-light" to="/contact">Share your interest</Link></div></div></Reveal>
    </div>
  );
}
