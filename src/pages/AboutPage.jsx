import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/placeholderData';
import {
  aboutDisclaimer,
  aboutStory,
  missionVisionData,
  coreValues,
  carePhilosophy,
  whyChooseUs
} from '../data/about';
import SectionTitle from '../components/SectionTitle';
import ImagePlaceholder from '../components/ImagePlaceholder';

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* 1. Page Hero */}
      <section className="page-hero-section">
        <div className="container text-center">
          <span className="section-badge">Who We Are</span>
          <h1 className="page-title">About {siteConfig.name}</h1>
          <p className="page-subtitle">
            Dedicated to creating a warm, safe, and vibrant early learning environment where young children grow with confidence and joy.
          </p>

          {/* Prototype Notice Disclaimer */}
          <div className="demo-notice-banner mt-6" role="note">
            <span className="notice-icon">ℹ️</span>
            <span>{aboutDisclaimer}</span>
          </div>
        </div>
      </section>

      {/* 2. Our Story Section */}
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
            <div className="mt-6">
              <Link to="/programs" className="btn btn-primary">
                Explore Our Programs &rarr;
              </Link>
            </div>
          </div>
          <div className="story-visual">
            <ImagePlaceholder
              title="Warm & Welcoming Daycare Entryway"
              aspect="4/3"
              icon="☀️"
            />
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision Section */}
      <section className="section-padding bg-surface">
        <div className="container">
          <div className="grid grid-2 mission-vision-grid">
            <div className="mission-card">
              <div className="mission-icon" aria-hidden="true">{missionVisionData.mission.icon}</div>
              <h3>{missionVisionData.mission.title}</h3>
              <p>{missionVisionData.mission.description}</p>
            </div>
            <div className="vision-card">
              <div className="vision-icon" aria-hidden="true">{missionVisionData.vision.icon}</div>
              <h3>{missionVisionData.vision.title}</h3>
              <p>{missionVisionData.vision.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Values Section */}
      <section className="section-padding">
        <div className="container">
          <SectionTitle
            badge="Core Values"
            title="The Principles That Guide Our Care"
            subtitle="Our core values shape every interaction, routine, and learning activity across our center."
          />
          <div className="grid grid-3 values-grid">
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

      {/* 5. Educational & Care Philosophy */}
      <section className="section-padding bg-surface">
        <div className="container">
          <SectionTitle
            badge="Our Philosophy"
            title="How We Foster Growth & Joy"
            subtitle="Our child-centered approach blends active play, nurturing caregiver routines, and milestone-focused activities."
          />
          <div className="grid grid-2 philosophy-grid">
            {carePhilosophy.map((item) => (
              <div key={item.id} className="philosophy-card">
                <h3 className="philosophy-title">{item.title}</h3>
                <p className="philosophy-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Families Choose Us */}
      <section className="section-padding">
        <div className="container">
          <SectionTitle
            badge="Family Experience"
            title={`Why Parents Choose ${siteConfig.name}`}
            subtitle="We prioritize clear communication, clean facilities, and supportive relationships for peace of mind."
          />
          <div className="grid grid-4 why-grid">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="why-card">
                <div className="why-icon" aria-hidden="true">{item.icon}</div>
                <h3 className="why-title">{item.title}</h3>
                <p className="why-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Environment Visual Preview */}
      <section className="section-padding bg-surface">
        <div className="container">
          <div className="environment-preview-box">
            <div className="environment-preview-content">
              <span className="section-badge">Our Space</span>
              <h2>Designed For Joy, Safety & Discovery</h2>
              <p>
                From naturally lit classrooms with low activity centers to quiet sensory nooks and enclosed outdoor play yards, our environment is tailored to support every child's daily routine.
              </p>
              <div className="mt-4">
                <Link to="/contact" className="btn btn-secondary">
                  Schedule a Walkthrough Tour
                </Link>
              </div>
            </div>
            <div className="environment-preview-visual">
              <ImagePlaceholder
                title="Classroom & Outdoor Learning Environment"
                aspect="16/9"
                icon="🏫"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Call to Action Banner */}
      <section className="section-padding cta-section">
        <div className="container text-center">
          <div className="cta-box">
            <span className="cta-badge">Schedule A Visit Today</span>
            <h2 className="cta-title">Want to Learn More About {siteConfig.name}?</h2>
            <p className="cta-desc">
              We invite you to schedule a tour, meet our caring educators, and explore our learning programs.
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
