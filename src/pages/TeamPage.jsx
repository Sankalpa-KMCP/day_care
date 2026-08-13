import React from 'react';
import { Link } from 'react-router-dom';
import { teamData } from '../data/team';
import TeamCard from '../components/TeamCard';
import SectionTitle from '../components/SectionTitle';
import ImagePlaceholder from '../components/ImagePlaceholder';

/**
 * TeamPage component
 * Renders the complete Our Team page at /team
 */
export default function TeamPage() {
  const supportPrinciples = [
    {
      icon: '💬',
      title: 'Warm Communication',
      desc: 'Attentive, positive interactions that encourage children to express themselves, ask questions, and build confidence.'
    },
    {
      icon: '🕒',
      title: 'Consistent Routines',
      desc: 'Predictable daily structures and supportive transitions that help young learners feel secure and comfortable.'
    },
    {
      icon: '🎨',
      title: 'Guided Exploration',
      desc: 'Facilitating hands-on play, creative arts, and age-appropriate learning opportunities tailored to early development.'
    },
    {
      icon: '🌱',
      title: 'Observation & Encouragement',
      desc: 'Noticing each child’s unique interests and offering thoughtful encouragement as they master new skills.'
    },
    {
      icon: '🤝',
      title: 'Family Partnership',
      desc: 'Maintaining open dialogue with parents and guardians to support alignment and continuity between home and care.'
    },
    {
      icon: '☀️',
      title: 'Collaborative Care',
      desc: 'Working together across classrooms to foster a welcoming, well-organized, and joyful learning environment.'
    }
  ];

  return (
    <main className="team-page">
      {/* 1. Page Hero */}
      <section className="team-hero">
        <div className="container">
          <div className="team-hero-content">
            <span className="section-badge">Caring Educators</span>
            <h1 className="team-hero-title">Meet Our Dedicated Daycare Team</h1>
            <p className="team-hero-subtitle">
              Our team focuses on creating a safe, nurturing, and engaging environment where early learners can grow, explore, and thrive every day.
            </p>

            {/* Prototype Notice Banner */}
            <div className="prototype-notice-banner" role="region" aria-label="Prototype Notice">
              <span className="prototype-notice-icon" aria-hidden="true">💡</span>
              <div className="prototype-notice-text">
                <strong>Demonstration Prototype Notice:</strong> The names, roles, biographies, and visual placeholders shown on this page are fictional demonstration entries. Little Sunshine Daycare will update this section with official team profiles once verified personnel information is established.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Team Member Grid */}
      <section className="team-section" aria-labelledby="team-grid-heading">
        <div className="container">
          <SectionTitle
            badge="Team Profiles"
            title="Our Early Education Team"
            subtitle="Explore our fictional staff profiles representing the diverse care roles within our daycare program."
          />
          <div className="team-grid" id="team-grid-heading">
            {teamData.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. How the Team Supports Children */}
      <section className="team-section team-section-alt">
        <div className="container">
          <SectionTitle
            badge="Care Philosophy"
            title="How Our Team Supports Children"
            subtitle="Core practices that guide daily interactions, classroom organization, and child encouragement."
          />

          <div className="support-grid">
            {supportPrinciples.map((item, idx) => (
              <div className="support-card" key={idx}>
                <div className="support-icon" aria-hidden="true">{item.icon}</div>
                <h3 className="support-title">{item.title}</h3>
                <p className="support-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Working Together With Families */}
      <section className="team-section">
        <div className="container">
          <div className="family-collab-box">
            <div className="family-collab-content">
              <span className="section-badge">Family Partnership</span>
              <h2>Working Together With Families</h2>
              <p>
                We believe that clear, open communication between families and caregivers provides a strong foundation for every child’s growth. By sharing daily observations, routine updates, and learning moments, we maintain continuity between home and daycare.
              </p>
              <ul className="family-collab-points">
                <li className="family-collab-point">
                  <span className="family-collab-icon" aria-hidden="true">✓</span>
                  <span>Regular daily updates on child routines, naps, and meals</span>
                </li>
                <li className="family-collab-point">
                  <span className="family-collab-icon" aria-hidden="true">✓</span>
                  <span>Collaborative discussions regarding individual learning milestones</span>
                </li>
                <li className="family-collab-point">
                  <span className="family-collab-icon" aria-hidden="true">✓</span>
                  <span>Welcoming, approachable team atmosphere for parent inquiries</span>
                </li>
              </ul>
            </div>
            <div className="family-collab-visual">
              <ImagePlaceholder
                title="Family & Caregiver Collaboration"
                aspect="4/3"
                icon="👨‍👩‍👧‍👦"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Future Staff Photography Area */}
      <section className="team-section team-section-alt">
        <div className="container">
          <div className="photo-showcase-box">
            <SectionTitle
              badge="Visual Showcase"
              title="Classroom Environment & Team Spaces"
              subtitle="Safe presentation placeholders showcasing our learning settings and future staff photography areas."
            />

            <div className="photo-showcase-grid">
              <ImagePlaceholder
                title="Infant Care Space"
                aspect="4/3"
                icon="👶"
              />
              <ImagePlaceholder
                title="Toddler Activity Room"
                aspect="4/3"
                icon="🎨"
              />
              <ImagePlaceholder
                title="Preschool Learning Center"
                aspect="4/3"
                icon="📚"
              />
            </div>

            <p className="photo-showcase-note">
              * Photography areas utilize non-employee presentation placeholders. Approved staff photography will replace these placeholders upon official launch.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="team-section">
        <div className="container">
          <div className="team-cta-banner">
            <div className="team-cta-content">
              <h2 className="team-cta-title">Ready to Learn More About Little Sunshine?</h2>
              <p className="team-cta-desc">
                We invite you to schedule a tour, visit our facilities, and see our warm learning environments in person.
              </p>
              <div className="team-cta-buttons">
                <Link to="/contact" className="btn-primary">
                  Schedule a Visit
                </Link>
                <Link to="/about" className="btn-secondary">
                  Learn About Our Approach
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
