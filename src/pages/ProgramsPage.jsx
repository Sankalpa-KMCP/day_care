import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/placeholderData';
import {
  programsData,
  programsDisclaimer,
  scheduleDisclaimer,
  activityHighlights,
  dailySchedule
} from '../data/programs';
import SectionTitle from '../components/SectionTitle';
import ProgramDetailCard from '../components/ProgramDetailCard';

/**
 * ProgramsPage component for Little Sunshine Daycare (Small Daycare Refactor)
 * Consolidated 3 program groups, activity highlights, and sample daily schedule.
 */
export default function ProgramsPage() {
  return (
    <div className="programs-page">
      {/* 1. Page Hero */}
      <section className="page-hero-section">
        <div className="container">
          <div className="page-hero-content text-center">
            <span className="section-badge">Educational Offerings</span>
            <h1 className="page-title">Early Learning & Care Programs</h1>
            <p className="page-subtitle">
              Discover age-tailored environments designed to nurture curiosity, play, social confidence, and foundational skills at {siteConfig.name}.
            </p>
            
            {/* Prototype Notice Banner */}
            <div className="demo-notice-banner mt-6" role="note">
              <span className="notice-icon">ℹ️</span>
              <span>{programsDisclaimer}</span>
            </div>
          </div>

          {/* Quick Jump Bar */}
          <div className="program-jump-bar mt-8">
            {programsData.map((p) => (
              <a key={p.id} href={`#${p.id}`} className="jump-link">
                <span className="jump-icon" aria-hidden="true">{p.icon}</span> {p.category}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Detailed Program List (3 Groups) */}
      <section className="section-padding">
        <div className="container">
          <SectionTitle
            badge="Our Programs"
            title="Tailored Environments for Every Stage"
            subtitle="Explore how each program adapts to your child’s developmental milestones."
          />
          
          <div className="program-details-list">
            {programsData.map((program, index) => (
              <ProgramDetailCard key={program.id} program={program} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Learning Through Play (Integrated Activities Highlights) */}
      <section className="section-padding bg-surface">
        <div className="container">
          <SectionTitle
            badge="Learning Through Play"
            title="Daily Enrichment & Activity Highlights"
            subtitle="Hands-on experiences woven into our everyday routines to foster creativity, motor skills, and curiosity."
          />
          <div className="grid grid-3 activity-highlights-grid">
            {activityHighlights.map((act) => (
              <div key={act.id} className="activity-highlight-card">
                <span className="activity-highlight-icon" aria-hidden="true">{act.icon}</span>
                <h3 className="activity-highlight-title">{act.title}</h3>
                <p className="activity-highlight-desc">{act.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Sample Daily Routine Timeline */}
      <section className="section-padding" id="daily-routine">
        <div className="container">
          <SectionTitle
            badge="Daily Routine"
            title="Sample Daycare Schedule"
            subtitle="A predictable daily flow balancing active play, quiet reading, outdoor recess, and rest."
          />
          
          <div className="demo-notice-banner mb-8" role="note">
            <span className="notice-icon">ℹ️</span>
            <span>{scheduleDisclaimer}</span>
          </div>

          <div className="timeline-container">
            {dailySchedule.map((item, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-marker" aria-hidden="true">{idx + 1}</div>
                <div className="timeline-content">
                  <span className="timeline-time">{item.time}</span>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Program Selection & Room Placement Guidance */}
      <section className="section-padding bg-surface">
        <div className="container">
          <div className="guidance-box">
            <div className="guidance-content">
              <SectionTitle
                badge="Finding the Right Fit"
                title="Room Placement & Transition Support"
                centered={false}
              />
              <p className="section-text">
                Every child develops at their own unique pace. During your center tour and registration discussion, our educators review your child's routine, developmental stage, and social comfort to recommend the most supportive environment.
              </p>
              <ul className="guidance-list">
                <li><span>1</span> <strong>Schedule a Tour:</strong> Visit our facility and meet our teaching team.</li>
                <li><span>2</span> <strong>Share Your Routine:</strong> Discuss nap times, dietary preferences, and learning goals.</li>
                <li><span>3</span> <strong>Gentle Transition:</strong> Support your child with orientation visits before full start.</li>
              </ul>
            </div>
            <div className="guidance-cta-card">
              <h3>Have Questions About Placement?</h3>
              <p>We are happy to walk you through room availability and daily routines.</p>
              <Link to="/contact" className="btn btn-primary btn-block mt-4">
                Schedule a Center Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="section-padding cta-section">
        <div className="container text-center">
          <div className="cta-box">
            <span className="cta-badge">Schedule A Visit Today</span>
            <h2 className="cta-title">Ready to Explore Our Programs in Person?</h2>
            <p className="cta-desc">
              Come tour our classrooms, see our daily routines in action, and meet our passionate educators.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Schedule a Visit Now
              </Link>
              <Link to="/about" className="btn btn-outline-white btn-lg">
                About Our Daycare &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
