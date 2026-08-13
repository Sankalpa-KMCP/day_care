import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/placeholderData';
import { programsData } from '../data/programs';
import SectionTitle from '../components/SectionTitle';
import ProgramCard from '../components/ProgramCard';
import ImagePlaceholder from '../components/ImagePlaceholder';

/**
 * HomePage component for Little Sunshine Daycare (Small Daycare Refactor)
 * Compact, personal 5-section layout.
 */
export default function HomePage() {
  const trustPillars = [
    {
      icon: '🏠',
      title: 'Nurturing Environment',
      desc: 'Clean, warm, and child-friendly spaces designed for gentle early exploration and comfort.'
    },
    {
      icon: '🎨',
      title: 'Play-Based Discovery',
      desc: 'Fostering creativity, motor skills, and imagination through guided hands-on activities.'
    },
    {
      icon: '❤️',
      title: 'Personal Attention',
      desc: 'Caring educators dedicated to understanding each child’s individual growth pace.'
    },
    {
      icon: '💬',
      title: 'Family Partnership',
      desc: 'Open daily communication and check-ins so parents feel connected and supported.'
    }
  ];

  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <section className="hero-section" aria-label="Welcome banner">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-badge">Welcome to {siteConfig.name}</span>
            <h1 className="hero-title">
              Nurturing Young Minds with Care, Play & Discovery
            </h1>
            <p className="hero-subtitle">
              A warm, nurturing local daycare where young children explore, play, and build early confidence in a supportive environment.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Schedule a Visit
              </Link>
              <Link to="/programs" className="btn btn-outline btn-lg">
                View Our Programs
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <ImagePlaceholder
              title="Warm & Engaging Daycare Play Environment"
              aspect="4/3"
              icon="☀️"
            />
          </div>
        </div>
      </section>

      {/* 2. Why Choose Us */}
      <section className="section-padding bg-surface">
        <div className="container">
          <SectionTitle
            badge="Why Families Choose Us"
            title="A Caring Place to Learn & Grow"
            subtitle="We provide a warm early childhood foundation focused on curiosity, friendship, and play."
          />
          <div className="grid grid-4 trust-grid">
            {trustPillars.map((pillar, index) => (
              <div key={index} className="trust-card">
                <div className="trust-icon" aria-hidden="true">{pillar.icon}</div>
                <h3 className="trust-card-title">{pillar.title}</h3>
                <p className="trust-card-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Programs Preview */}
      <section className="section-padding">
        <div className="container">
          <SectionTitle
            badge="Our Programs"
            title="Tailored Learning for Every Age"
            subtitle="From gentle infant care to pre-K learning, our programs support your child's growth."
          />
          <div className="grid grid-3 programs-grid">
            {programsData.slice(0, 3).map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/programs" className="btn btn-secondary btn-lg">
              View All Programs &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Environment Preview */}
      <section className="section-padding bg-surface">
        <div className="container">
          <SectionTitle
            badge="Our Daycare Environment"
            title="Designed for Play, Safety & Joy"
            subtitle="Take a peek at our learning spaces created to inspire curiosity and comfort."
          />
          <div className="grid grid-3 environment-grid">
            <ImagePlaceholder
              title="Learning & Creative Play Corner"
              aspect="4/3"
              icon="🎨"
            />
            <ImagePlaceholder
              title="Quiet Reading & Rest Nook"
              aspect="4/3"
              icon="📚"
            />
            <ImagePlaceholder
              title="Outdoor Play Yard"
              aspect="4/3"
              icon="🌳"
            />
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="section-padding cta-section">
        <div className="container">
          <div className="cta-box">
            <span className="cta-badge">Schedule A Visit Today</span>
            <h2 className="cta-title">Ready to Experience {siteConfig.name}?</h2>
            <p className="cta-desc">
              We invite you to tour our daycare, meet our caring team, and see our warm learning spaces in person.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Schedule a Visit Now
              </Link>
              <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="btn btn-outline-white btn-lg">
                Call Us: {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
