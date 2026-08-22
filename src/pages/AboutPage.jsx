import React from 'react';
import { Link } from 'react-router-dom';
import BotanicalTrail from '../components/BotanicalTrail';
import MenuShowcase from '../components/MenuShowcase';
import Reveal from '../components/Reveal';
import TeamCard from '../components/TeamCard';
import { teamData } from '../data/team';
import { editorialImage } from '../utils/assetPath';

const principles = [
  {
    title: 'Care Before Curriculum',
    desc: 'A child who feels securely attached and respected can explore with deep confidence. Relationship and emotional safety always come first.',
    icon: '💛',
  },
  {
    title: 'Fewer, Authentic Materials',
    desc: 'Open-ended natural elements—clay, cedar blocks, wool, running water, and garden soil—invite richer creative inquiry than plastic toys with prescribed instructions.',
    icon: '🪵',
  },
  {
    title: 'Real Daily Life as the Teacher',
    desc: 'Washing organic carrots, watering seedlings, folding soft cloth, setting the communal table, and repairing broken clay are profound learning moments.',
    icon: '🌱',
  },
  {
    title: 'Families as Equal Partners',
    desc: 'We foster daily authentic dialogue, family workshops, and transparent care notes so home and the learning house exist in seamless harmony.',
    icon: '🤝',
  },
];

const safetyCommitments = [
  {
    title: 'Continuous Fresh Air & HEPA Filtration',
    desc: 'Medical-grade air purifiers and constant fresh outdoor air circulation across all sleep and play zones.',
    chip: 'Health Standard',
  },
  {
    title: '100% Pediatric CPR & First Aid Certified',
    desc: 'Every single educator holds active certified emergency pediatric credentials and annual safety renewals.',
    chip: 'Caregiver Standard',
  },
  {
    title: 'Biometric / Secure Keypad Entry',
    desc: 'Controlled double-vestibule campus entry with real-time visitor logging and secure perimeter cedar fencing.',
    chip: 'Security Standard',
  },
  {
    title: 'Non-Toxic & Sustainable Finishes',
    desc: 'Zero-VOC paints, natural beeswax wood sealers, organic cotton linens, and biodegradable cleaning agents.',
    chip: 'Eco Standard',
  },
];

export default function AboutPage() {
  return (
    <div className="editorial-page storybook-page luxury-inner about-luxury about-storybook" data-page="about">
      {/* 1. HERO */}
      <header className="inner-hero luxury-inner-hero storybook-inner-hero about-storybook-hero">
        <div className="container inner-hero-grid about-hero-stage">
          <div className="about-hero-copy">
            <span className="eyebrow-badge">Our Story & Purpose</span>
            <h1>A Slower, More Human Kind of Early Learning.</h1>
            <p className="inner-deck">
              A neighborhood learning house where childhood is protected, educators have time to truly listen, and days are shaped by curiosity, fresh air, and deep connection.
            </p>
            <p className="hero-margin-note">
              <span aria-hidden="true">✦</span> Founding Early Learning Community
            </p>
          </div>
          <figure className="about-hero-image irregular-frame irregular-frame--portrait">
            <img
              src={editorialImage('hero-classroom.webp')}
              alt="Educators and children engaged in natural exploration in a sunlit classroom"
              width="1800"
              height="1200"
              fetchPriority="high"
            />
            <figcaption>Sunlit morning discovery · The Little Grove</figcaption>
          </figure>
          <BotanicalTrail variant="arch" tone="clay" className="about-hero-trail" />
        </div>
      </header>

      {/* 2. MANIFESTO & ORIGIN */}
      <Reveal as="section" className="section-editorial about-manifesto" aria-label="Our Manifesto">
        <div className="container manifesto-grid">
          <figure className="manifesto-photo irregular-frame irregular-frame--landscape">
            <img
              src={editorialImage('outdoor-garden.webp')}
              alt="Children and guides exploring natural planting beds in the outdoor garden"
              width="1800"
              height="1200"
            />
            <figcaption>The garden sanctuary · Daily outdoor exploration</figcaption>
          </figure>
          <div className="manifesto-copy field-note field-note--origin">
            <span className="field-note-number" aria-hidden="true">Field Note 01</span>
            <span className="kicker">The Founding Question</span>
            <h2>Built from One Simple Conviction.</h2>
            <blockquote className="pull-quote">
              “What if early childhood care felt warm, deeply capable, and genuinely unhurried?”
            </blockquote>
            <p>
              In a culture that often rushes children into premature academic drills, The Little Grove exists as a calm sanctuary. We believe that true executive function, empathy, and creative problem solving emerge when children have the freedom of uninterrupted play.
            </p>
            <p>
              By keeping our group sizes intimate and our staff ratios low, our educators have the emotional bandwidth to observe each child’s unique developmental pace.
            </p>
          </div>
          <BotanicalTrail variant="meander" tone="sage" className="manifesto-trail" />
        </div>

        {/* 4 Guiding Principles */}
        <div className="container manifesto-principles">
          <div className="manifesto-principles-heading">
            <span className="field-note-number" aria-hidden="true">Field Note 02</span>
            <span className="kicker">Core Convictions</span>
            <h2>What We Return to Every Single Day</h2>
          </div>
          <div className="principles-grid">
            {principles.map((item, index) => (
              <div className="principle-card" key={item.title}>
                <div className="principle-card-top">
                  <span className="principle-num" aria-hidden="true">0{index + 1}</span>
                  <span className="principle-icon" aria-hidden="true">{item.icon}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* 3. SAFETY, HEALTH & CARE STANDARDS */}
      <Reveal as="section" className="section-editorial standards-section luxury-standards storybook-standards" aria-label="Safety Standards">
        <div className="container standards-storybook-layout">
          <div className="section-lead offset-lead field-note field-note--standards">
            <span className="field-note-number" aria-hidden="true">Field Note 03</span>
            <span className="kicker">Health & Peace of Mind</span>
            <h2>Safety Is Woven into Every Detail of Our Space.</h2>
            <p>
              We maintain rigorous protocols for physical safety, indoor air purity, and emotional well-being so parents can rest easy throughout their workday.
            </p>
          </div>
          <div className="standards-list">
            {safetyCommitments.map((std, index) => (
              <article className="standard-note" key={std.title}>
                <div className="standard-note-header">
                  <span className="standard-note-number" aria-hidden="true">0{index + 1}</span>
                  <span className="standard-chip">{std.chip}</span>
                </div>
                <h3>{std.title}</h3>
                <p>{std.desc}</p>
              </article>
            ))}
          </div>
          <BotanicalTrail variant="vertical" tone="pine" className="standards-trail" />
        </div>
      </Reveal>

      {/* 4. SEASONAL NUTRITION & KITCHEN SHOWCASE */}
      <Reveal as="section" className="section-editorial about-nutrition-section" aria-label="Nutrition & Meals">
        <div className="container">
          <MenuShowcase />
        </div>
      </Reveal>

      {/* 5. CARE TEAM & EDUCATORS */}
      <Reveal as="section" className="section-editorial guides-section luxury-guides storybook-guides" aria-label="Our Educators">
        <div className="container">
          <div className="section-lead guides-heading field-note">
            <span className="field-note-number" aria-hidden="true">Field Note 04</span>
            <span className="kicker">The People Guiding Your Child</span>
            <h2>Warm Mentors. Serious Observers. Play Partners.</h2>
            <p className="guides-lead-desc">
              Our team consists of passionate early childhood specialists who bring deep pedagogical knowledge, calm emotional presence, and genuine joy to daily care.
            </p>
          </div>
          <div className="guides-grid">
            {teamData.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </Reveal>

      {/* 6. CLOSING CTA */}
      <Reveal as="section" className="closing-invitation luxury-invitation storybook-invitation" aria-label="Join Us">
        <div className="container invitation-grid">
          <div>
            <span className="eyebrow-badge eyebrow-badge--light">Shape the Community</span>
            <h2>A Thoughtful Sanctuary for Your Family.</h2>
          </div>
          <div className="invitation-action-col">
            <p>
              Share your family’s hopes, schedule needs, and child’s personality with our founding team.
            </p>
            <div className="invitation-btn-group">
              <Link className="button-light" to="/contact">
                Schedule a Visit & Inquire <span aria-hidden="true">→</span>
              </Link>
              <Link className="button-ghost button-ghost--light" to="/programs">
                View Learning Programs
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
