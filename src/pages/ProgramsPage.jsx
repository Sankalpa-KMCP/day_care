import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/placeholderData';
import { programsData, programsDisclaimer } from '../data/programs';
import SectionTitle from '../components/SectionTitle';
import ProgramDetailCard from '../components/ProgramDetailCard';

export default function ProgramsPage() {
  const learningPillars = [
    {
      icon: '🧩',
      title: 'Play-Based Discovery',
      desc: 'Hands-on games, puzzles, and sensory centers that foster problem-solving and natural curiosity.'
    },
    {
      icon: '🤝',
      title: 'Social & Emotional Growth',
      desc: 'Guided interactions building kindness, empathy, self-regulation, and collaborative group play.'
    },
    {
      icon: '🎨',
      title: 'Creative Expression',
      desc: 'Daily exposure to painting, music, dramatic play, and storytelling to unlock imagination.'
    },
    {
      icon: '🌿',
      title: 'Physical & Outdoor Health',
      desc: 'Supervised playground play, outdoor nature games, and gross motor coordination exercises.'
    }
  ];

  return (
    <div className="programs-page">
      {/* 1. Page Hero / Header */}
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
                <span className="jump-icon">{p.icon}</span> {p.category}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Detailed Program List */}
      <section className="section-padding">
        <div className="container">
          <SectionTitle
            badge="Comprehensive Programs"
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

      {/* 3. Learning Approach / What Children Experience */}
      <section className="section-padding bg-surface">
        <div className="container">
          <SectionTitle
            badge="Our Philosophy"
            title="How Children Experience Learning Every Day"
            subtitle="Our everyday routines combine structured group activities with open child-directed play."
          />
          <div className="grid grid-4 pillars-grid">
            {learningPillars.map((pillar, idx) => (
              <div key={idx} className="pillar-card">
                <div className="pillar-icon" aria-hidden="true">{pillar.icon}</div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Program Selection Guidance */}
      <section className="section-padding">
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
                <li><span>2</span> <strong>Share Your Routine:</strong> Discuss nap times, dietary needs, and learning goals.</li>
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

      {/* 5. Final CTA */}
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
              <Link to="/activities" className="btn btn-outline-white btn-lg">
                Explore Daily Activities &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
