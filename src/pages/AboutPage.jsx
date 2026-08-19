import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import TeamCard from '../components/TeamCard';
import { teamData } from '../data/team';
import { editorialImage } from '../utils/assetPath';

const principles = [
  ['Care before curriculum', 'A child who feels safe can explore. Relationships come first, every time.'],
  ['Fewer, better things', 'Open-ended materials invite more thought than a room crowded with instructions.'],
  ['Real life belongs here', 'Folding cloth, watering herbs, sharing food, and repairing mistakes are meaningful learning.'],
  ['Families are partners', 'We want regular conversation, not a polished report that arrives too late.'],
];

const plannedStandards = [
  ['Consistent caregivers', 'Thoughtful staffing and familiar adults who have time to know each child.'],
  ['Safe, calm rooms', 'Secure entry, careful supervision, clean materials, and places to retreat from noise.'],
  ['Daily outdoor life', 'A garden designed for water, sand, growing, balancing, and every kind of weather.'],
  ['Open communication', 'Simple, useful notes about food, rest, play, mood, and moments worth remembering.'],
];

export default function AboutPage() {
  return (
    <div className="editorial-page luxury-inner about-luxury">
      <header className="inner-hero luxury-inner-hero">
        <div className="container inner-hero-grid"><div><p className="kicker">Why The Little Grove</p><h1>A slower, more human kind of early learning.</h1></div><p className="inner-deck">A future neighborhood place where care is personal, play has breathing room, and childhood is not treated like a race.</p></div>
      </header>

      <Reveal as="section" className="section-editorial about-manifesto">
        <div className="container manifesto-grid">
          <figure className="manifesto-photo"><img src={editorialImage('outdoor-garden.webp')} alt="Illustrative children and a guide exploring a natural play garden" width="1800" height="1200" /><figcaption>Illustrative concept image · proposed outdoor life</figcaption></figure>
          <div className="manifesto-copy"><p className="kicker">The beginning</p><h2>Built from one simple question.</h2><p className="pull-quote">“What if a childcare day felt warm, capable, and genuinely unhurried?”</p><p>The Little Grove is a future-business concept shaped around that question: small groups, beautiful ordinary materials, educators with time to listen, and a close rhythm between home and the learning house.</p><p>This site is an honest sketch of the intention—not a claim that the team, facility, or final operating details already exist.</p></div>
        </div>
        <div className="container manifesto-principles">
          <p className="kicker">What we return to</p>
          <ol>{principles.map(([title, text], index) => <li key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol>
        </div>
      </Reveal>

      <Reveal as="section" className="section-editorial standards-section luxury-standards"><div className="container"><div className="section-lead offset-lead"><p className="kicker">Planned standards</p><h2>Trust should come from what happens every day.</h2><p>These are design commitments for the future program. Licensing, policies, staffing, and ratios will be published only when finalized.</p></div><div className="standards-list">{plannedStandards.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></Reveal>

      <Reveal as="section" className="section-editorial guides-section luxury-guides"><div className="container"><div className="section-lead"><p className="kicker">The people we hope to gather</p><h2>Warm guides. Serious observers. Play partners.</h2><p>The profiles below are illustrative—not current employees. They show the character and range we hope to hire for.</p></div><div className="guides-grid">{teamData.map((member) => <TeamCard key={member.id} member={member} />)}</div></div></Reveal>

      <Reveal as="section" className="about-finale"><figure><img src={editorialImage('infant-care.webp')} alt="Illustrative gentle sensory play in a future infant room" width="1400" height="1050" /></figure><div className="container about-finale-copy"><p className="kicker light">The feeling</p><h2>Soft voices.<br />Useful beauty.<br />Time to try again.</h2><p>Not spotless for the photograph. Not busy for the sake of looking educational. Just thoughtful rooms where children can belong.</p><Link className="text-link light-link" to="/programs">Explore the program idea <span aria-hidden="true">→</span></Link></div><span className="photo-disclosure">Illustrative concept image</span></Reveal>

      <Reveal as="section" className="closing-invitation luxury-invitation"><div className="container invitation-grid"><p className="kicker light">Add your voice</p><h2>A future place should listen to future families.</h2><div><p>Share your needs, questions, and hopes for care in your neighborhood.</p><Link className="button-light" to="/contact">Start a conversation</Link></div></div></Reveal>
    </div>
  );
}
