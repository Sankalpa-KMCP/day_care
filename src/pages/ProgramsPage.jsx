import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/placeholderData';
import {
  programsData,
  activityHighlights
} from '../data/programs';
import SectionTitle from '../components/SectionTitle';
import ProgramDetailCard from '../components/ProgramDetailCard';
import ScheduleTimeline from '../components/ScheduleTimeline';

export default function ProgramsPage() {
  const getActivitySvg = (type) => {
    switch (type) {
      case 'palette':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
            <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
            <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
            <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
          </svg>
        );
      case 'book':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg>
        );
      case 'music':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18V5l12-2v13"></path>
            <circle cx="6" cy="18" r="3"></circle>
            <circle cx="18" cy="16" r="3"></circle>
          </svg>
        );
      case 'sun':
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
      case 'puzzle':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19.439 7.85c-.049-.322-.059-.659-.059-1a3 3 0 0 0-3-3c-.341 0-.678.01-1 .059V3a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v.909c-.322-.049-.659-.059-1-.059a3 3 0 0 0-3 3c0 .341.01.678.059 1H3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h.909c-.049.322-.059.659-.059 1a3 3 0 0 0 3 3c.341 0 .678-.01 1-.059V21a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-.909c.322.049.659.059 1 .059a3 3 0 0 0 3-3c0-.341-.01-.678-.059-1H21a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-.561z"></path>
          </svg>
        );
      case 'sparkles':
      default:
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        );
    }
  };

  return (
    <div className="programs-page">
      {/* 1. Page Hero */}
      <section className="page-hero-section">
        <div className="container">
          <div className="page-hero-content text-center">
            <span className="section-badge">Curriculum & Age Groups</span>
            <h1 className="page-title">Early Learning & Care Programs</h1>
            <p className="page-subtitle">
              Discover age-tailored environments designed to nurture curiosity, play, social confidence, and foundational skills at {siteConfig.name}.
            </p>
          </div>

          {/* Quick Jump Bar */}
          <div className="program-jump-bar mt-8">
            {programsData.map((p) => (
              <a key={p.id} href={`#${p.id}`} className="jump-link">
                <span>{p.category} ({p.ageGroup})</span>
                <span aria-hidden="true">&darr;</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Detailed Program List */}
      <section className="section-padding bg-surface">
        <div className="container">
          <SectionTitle
            badge="Tailored Milestones"
            badgeVariant="terracotta"
            title="Environments Built for Every Developmental Stage"
            subtitle="Explore how each room adapts to your child’s growth, sensory needs, and emergent learning pace."
          />
          
          <div className="program-details-list">
            {programsData.map((program, index) => (
              <ProgramDetailCard key={program.id} program={program} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Interactive Schedule & Daily Routine */}
      <section className="section-padding bg-surface-muted">
        <div className="container">
          <ScheduleTimeline />
        </div>
      </section>

      {/* 4. Learning Through Play (Integrated Activities Highlights) */}
      <section className="section-padding bg-surface">
        <div className="container">
          <SectionTitle
            badge="Learning Through Play"
            badgeVariant="sage"
            title="Daily Enrichment & Activity Highlights"
            subtitle="Hands-on experiences woven into our everyday routines to foster creativity, motor skills, and curiosity."
          />
          <div className="grid grid-3 activity-highlights-grid">
            {activityHighlights.map((act) => (
              <div key={act.id} className="activity-highlight-card">
                <div className="activity-highlight-icon-box" aria-hidden="true">
                  {getActivitySvg(act.iconSvg)}
                </div>
                <h3 className="activity-highlight-title">{act.title}</h3>
                <p className="activity-highlight-desc">{act.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Program Selection & Room Placement Guidance */}
      <section className="section-padding bg-surface-muted">
        <div className="container">
          <div className="guidance-box">
            <div className="guidance-content">
              <SectionTitle
                badge="Finding the Right Fit"
                badgeVariant="amber"
                title="Room Placement & Gentle Transition Support"
                centered={false}
              />
              <p className="section-text">
                Every child develops at their own unique pace. During your tour and enrollment consultation, our early education director reviews your child's home routines, dietary rhythms, and developmental stage to recommend the ideal placement.
              </p>
              <ul className="guidance-list">
                <li><span className="guidance-num">1</span> <div><strong>Schedule an In-Person Tour:</strong> Tour classrooms, observe routines, and meet teachers.</div></li>
                <li><span className="guidance-num">2</span> <div><strong>Share Your Child's Rhythm:</strong> Discuss feeding schedules, nap habits, and special interests.</div></li>
                <li><span className="guidance-num">3</span> <div><strong>Gentle Gradual Transition:</strong> We offer flexible trial drop-in mornings to build security.</div></li>
              </ul>
            </div>
            <div className="guidance-cta-card">
              <h3>Have Questions About Placement?</h3>
              <p>We are here to help you find the perfect room and schedule for your family.</p>
              <Link to="/contact" className="btn btn-primary btn-block mt-4">
                Book an Admissions Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="section-padding cta-section">
        <div className="container text-center">
          <div className="cta-box">
            <span className="cta-badge">Schedule A Visit</span>
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
