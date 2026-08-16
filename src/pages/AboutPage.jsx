import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/placeholderData';
import { aboutStory, missionData, coreValues, safetyStandards } from '../data/about';
import { teamData } from '../data/team';
import SectionTitle from '../components/SectionTitle';
import ImagePlaceholder from '../components/ImagePlaceholder';
import TeamCard from '../components/TeamCard';

export default function AboutPage() {
  const getValIcon = (type) => {
    switch (type) {
      case 'heart':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        );
      case 'sparkles':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        );
      case 'users':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        );
      case 'message':
      default:
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        );
    }
  };

  const getSafetyIcon = (icon) => {
    switch (icon) {
      case 'shield':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        );
      case 'activity':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
        );
      case 'sparkles':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        );
      case 'sun':
      default:
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        );
    }
  };

  return (
    <div className="about-page">
      {/* 1. Page Hero */}
      <section className="page-hero-section">
        <div className="container text-center">
          <span className="section-badge">Who We Are</span>
          <h1 className="page-title">About {siteConfig.name}</h1>
          <p className="page-subtitle">
            An accredited early childhood academy providing attentive care, gentle learning, and a joyful community for infants, toddlers, and preschoolers.
          </p>
        </div>
      </section>

      {/* 2. Our Story & Mission Section */}
      <section className="section-padding bg-surface">
        <div className="container grid grid-2 items-center story-grid">
          <div className="story-content">
            <SectionTitle
              badge="Our Story"
              badgeVariant="terracotta"
              title={aboutStory.title}
              centered={false}
            />
            <p className="section-text">{aboutStory.paragraph1}</p>
            <p className="section-text">{aboutStory.paragraph2}</p>
          </div>
          <div className="mission-card">
            <div className="mission-icon-box" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
            </div>
            <h3>{missionData.title}</h3>
            <p>{missionData.description}</p>
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="section-padding bg-surface-muted">
        <div className="container">
          <SectionTitle
            badge="Guiding Principles"
            badgeVariant="sage"
            title="The Values That Guide Our Care"
            subtitle="Our core values shape every interaction, routine, and learning discovery across our center."
          />
          <div className="grid grid-4 values-grid">
            {coreValues.map((value) => (
              <div key={value.id} className={`value-card val-${value.variant || 'terracotta'}`}>
                <div className="value-icon-box" aria-hidden="true">
                  {getValIcon(value.iconSvg)}
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-desc">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Safety & Health Commitments */}
      <section className="section-padding bg-surface">
        <div className="container">
          <SectionTitle
            badge="Health & Safety"
            badgeVariant="amber"
            title="Our Uncompromising Safety Commitments"
            subtitle="Your child's physical safety, emotional comfort, and health are our highest priority every second of the day."
          />
          <div className="grid grid-2 safety-grid">
            {safetyStandards.map((item, idx) => (
              <div key={idx} className="safety-card">
                <div className="safety-icon-box" aria-hidden="true">
                  {getSafetyIcon(item.icon)}
                </div>
                <div className="safety-content">
                  <div className="safety-header-row">
                    <h4>{item.title}</h4>
                    {item.chip && <span className="safety-chip">{item.chip}</span>}
                  </div>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Care Team Section */}
      <section className="section-padding bg-surface-muted">
        <div className="container">
          <SectionTitle
            badge="Dedicated Educators"
            badgeVariant="terracotta"
            title="Meet Our Leadership & Faculty"
            subtitle="Passionate, background-checked, credentialed educators who foster a warm connection with your child."
          />
          <div className="about-team-grid">
            {teamData.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Campus & Space Preview */}
      <section className="section-padding bg-surface">
        <div className="container">
          <div className="environment-preview-box">
            <div className="environment-preview-content">
              <span className="section-badge badge-sage">Our Space</span>
              <h2>Designed for Joy, Safety & Discovery</h2>
              <p>
                From naturally lit classrooms with low sensory tables to quiet nap alcoves and secure outdoor sensory gardens, our campus supports every milestone.
              </p>
              <div>
                <Link to="/contact" className="btn btn-primary">
                  Schedule an In-Person Tour &rarr;
                </Link>
              </div>
            </div>
            <div className="environment-preview-visual grid grid-2">
              <ImagePlaceholder
                src="/images/preschool_art_play.jpg"
                alt="Classroom learning and creative corner"
                title="Art & Sensory Studio"
                aspect="4/3"
                tag="Art Studio"
              />
              <ImagePlaceholder
                src="/images/infant_toddler_room.jpg"
                alt="Infant and Toddler Nursery Suite"
                title="Sensory Play Room"
                aspect="4/3"
                tag="Nursery Room"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final CTA Banner */}
      <section className="section-padding cta-section">
        <div className="container text-center">
          <div className="cta-box">
            <span className="cta-badge">Visit Our Academy</span>
            <h2 className="cta-title">Want to Learn More About {siteConfig.name}?</h2>
            <p className="cta-desc">
              We invite you to schedule a tour, meet our caring educators, and explore our learning programs firsthand.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Schedule a Visit Now
              </Link>
              <Link to="/programs" className="btn btn-outline-white btn-lg">
                Explore Programs &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
