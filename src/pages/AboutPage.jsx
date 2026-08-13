import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/placeholderData';
import { aboutDisclaimer, aboutStory, missionData, coreValues } from '../data/about';
import { teamData } from '../data/team';
import SectionTitle from '../components/SectionTitle';
import ImagePlaceholder from '../components/ImagePlaceholder';
import TeamCard from '../components/TeamCard';

/**
 * AboutPage component for Little Sunshine Daycare (Small Daycare Refactor)
 * Features 5 compact sections including embedded 2-person team section.
 */
export default function AboutPage() {
  return (
    <div className="about-page">
      {/* 1. Page Hero */}
      <section className="page-hero-section">
        <div className="container text-center">
          <span className="section-badge">Who We Are</span>
          <h1 className="page-title">About {siteConfig.name}</h1>
          <p className="page-subtitle">
            A small, welcoming local daycare dedicated to providing attentive care, gentle learning, and a joyful environment for young children.
          </p>

          {/* Prototype Notice Disclaimer */}
          <div className="demo-notice-banner mt-6" role="note">
            <span className="notice-icon">ℹ️</span>
            <span>{aboutDisclaimer}</span>
          </div>
        </div>
      </section>

      {/* 2. Our Story & Mission Section */}
      <section className="section-padding">
        <div className="container grid grid-2 items-center story-grid">
          <div className="story-content">
            <SectionTitle
              badge="Our Story"
              title={aboutStory.title}
              centered={false}
            />
            <p className="section-text">{aboutStory.paragraph1}</p>
            <p className="section-text">{aboutStory.paragraph2}</p>
          </div>
          <div className="mission-card">
            <div className="mission-icon" aria-hidden="true">{missionData.icon}</div>
            <h3>{missionData.title}</h3>
            <p>{missionData.description}</p>
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="section-padding bg-surface">
        <div className="container">
          <SectionTitle
            badge="Core Values"
            title="The Principles That Guide Our Care"
            subtitle="Our core values shape every interaction, routine, and learning activity across our center."
          />
          <div className="grid grid-4 values-grid">
            {coreValues.map((value) => (
              <div key={value.id} className="value-card">
                <div className="value-icon" aria-hidden="true">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-desc">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Care Team Section (Embedded 2-Person Team) */}
      <section className="section-padding">
        <div className="container">
          <SectionTitle
            badge="Dedicated Caregivers"
            title="Our Care Team"
            subtitle="Meet the friendly, attentive educators who welcome your children every day."
          />
          <div className="about-team-grid">
            {teamData.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Environment Preview & Final CTA */}
      <section className="section-padding bg-surface">
        <div className="container">
          <div className="environment-preview-box">
            <div className="environment-preview-content">
              <span className="section-badge">Our Space</span>
              <h2>Designed For Joy, Safety & Discovery</h2>
              <p>
                From naturally lit classrooms with low activity centers to quiet rest nooks and enclosed outdoor play spaces, our environment is tailored to support every child's daily routine.
              </p>
              <div className="mt-4">
                <Link to="/contact" className="btn btn-primary">
                  Schedule a Visit Tour &rarr;
                </Link>
              </div>
            </div>
            <div className="environment-preview-visual grid grid-2">
              <ImagePlaceholder
                title="Classroom Learning Corner"
                aspect="4/3"
                icon="🏫"
              />
              <ImagePlaceholder
                title="Outdoor Play Area"
                aspect="4/3"
                icon="🌳"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="section-padding cta-section">
        <div className="container text-center">
          <div className="cta-box">
            <span className="cta-badge">Schedule A Visit Today</span>
            <h2 className="cta-title">Want to Learn More About {siteConfig.name}?</h2>
            <p className="cta-desc">
              We invite you to schedule a tour, meet our caring team, and explore our early learning programs.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Schedule a Visit Now
              </Link>
              <Link to="/programs" className="btn btn-outline-white btn-lg">
                Explore Our Programs &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
