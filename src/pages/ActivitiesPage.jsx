import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/placeholderData';
import {
  activitiesData,
  activityCategories,
  dailySchedule,
  activitiesDisclaimer,
  parentActivityTips
} from '../data/activities';
import SectionTitle from '../components/SectionTitle';
import ImagePlaceholder from '../components/ImagePlaceholder';

export default function ActivitiesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredActivities = activeCategory === 'all'
    ? activitiesData
    : activitiesData.filter(act => act.category === activeCategory);

  const dayFlowPillars = [
    {
      icon: '🌅',
      title: 'Morning Circle & Discovery',
      desc: 'Welcoming morning greetings, storytime, songs, and literacy stations start the day with energy.'
    },
    {
      icon: '🏃',
      title: 'Active Physical Recess',
      desc: 'Supervised playground play, running games, and fresh air build gross motor strength and friendships.'
    },
    {
      icon: '🥗',
      title: 'Balanced Meals & Rest',
      desc: 'Calm lunchtime and dedicated quiet rest/nap time allow children to recharge peacefully.'
    },
    {
      icon: '🧩',
      title: 'Afternoon Creative Stations',
      desc: 'Puzzles, art painting, music instruments, and free table play conclude the afternoon.'
    }
  ];

  return (
    <div className="activities-page">
      {/* 1. Page Hero */}
      <section className="page-hero-section">
        <div className="container text-center">
          <span className="section-badge">Center Life</span>
          <h1 className="page-title">Daily Activities & Schedule</h1>
          <p className="page-subtitle">
            Explore how play, hands-on learning, creative expression, and outdoor discovery come together every day at {siteConfig.name}.
          </p>

          {/* Prototype Disclaimer Banner */}
          <div className="demo-notice-banner mt-6" role="note">
            <span className="notice-icon">ℹ️</span>
            <span>{activitiesDisclaimer}</span>
          </div>
        </div>
      </section>

      {/* 2. Activity Filtering & Overview */}
      <section className="section-padding">
        <div className="container">
          <SectionTitle
            badge="Enrichment Offerings"
            title="Hands-On Activities & Learning Centers"
            subtitle="Children rotate through engaging stations designed for social, creative, and cognitive growth."
          />

          {/* Filter Bar */}
          <div className="filter-bar" role="toolbar" aria-label="Activity category filters">
            {activityCategories.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`filter-btn ${isSelected ? 'is-active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                  aria-pressed={isSelected}
                >
                  {cat.label}
                  {isSelected && <span className="sr-only"> (selected)</span>}
                </button>
              );
            })}
          </div>

          {/* Activities Grid */}
          <div className="grid grid-3 activities-grid-full mt-8">
            {filteredActivities.map((activity) => (
              <div key={activity.id} className="activity-detail-card">
                <div className="activity-card-header">
                  <span className="activity-detail-icon" aria-hidden="true">{activity.icon}</span>
                  <span className="activity-category-badge">{activity.category}</span>
                </div>
                <h3 className="activity-detail-title">{activity.title}</h3>
                <p className="activity-detail-desc">{activity.description}</p>
                {activity.learningFocus && (
                  <div className="activity-focus-box">
                    <span className="focus-label">Learning Focus:</span>
                    <span className="focus-text">{activity.learningFocus}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Sample Daily Schedule */}
      <section className="section-padding bg-surface" id="schedule">
        <div className="container">
          <SectionTitle
            badge="Daily Routine"
            title="Sample Daily Schedule"
            subtitle="A balanced 7:00 AM - 6:00 PM prototype timeline combining active learning, outdoor play, meals, and quiet rest."
          />

          <div className="timeline-container">
            {dailySchedule.map((item, index) => (
              <div key={item.id} className="timeline-item">
                <div className="timeline-marker">
                  <span className="marker-number">{index + 1}</span>
                </div>
                <div className="timeline-content">
                  <span className="timeline-time">{item.time}</span>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Learning Through the Day */}
      <section className="section-padding">
        <div className="container">
          <SectionTitle
            badge="Daily Flow"
            title="How Play & Routine Fit Together"
            subtitle="Our structured daily routine gives children security while leaving ample time for spontaneous play."
          />
          <div className="grid grid-4 flow-grid">
            {dayFlowPillars.map((item, idx) => (
              <div key={idx} className="flow-card">
                <div className="flow-icon" aria-hidden="true">{item.icon}</div>
                <h3 className="flow-title">{item.title}</h3>
                <p className="flow-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Environment / Activity Visual */}
      <section className="section-padding bg-surface">
        <div className="container">
          <div className="activity-visual-box">
            <div className="activity-visual-content">
              <span className="section-badge">Creative Environments</span>
              <h2>Spaces Built for Active Hands & Imaginations</h2>
              <p>
                Whether building block towers, painting murals, or discovering nature outdoors, our rooms are arranged for hands-on learning.
              </p>
              <div className="mt-4">
                <Link to="/programs" className="btn btn-primary">
                  View Our Age Programs &rarr;
                </Link>
              </div>
            </div>
            <div className="activity-visual-surface">
              <ImagePlaceholder
                title="Activity Centers & Outdoor Playground"
                aspect="16/9"
                icon="🎨"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Parent-Oriented Guidance */}
      <section className="section-padding">
        <div className="container">
          <SectionTitle
            badge="Parent Tips"
            title="Preparing Your Child for Daily Fun"
            subtitle="Simple tips for helping your child feel ready and comfortable for daily activities."
          />
          <div className="grid grid-3 tips-grid">
            {parentActivityTips.map((tip, idx) => (
              <div key={idx} className="tip-card">
                <div className="tip-icon" aria-hidden="true">{tip.icon}</div>
                <h3 className="tip-title">{tip.title}</h3>
                <p className="tip-desc">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Call To Action Banner */}
      <section className="section-padding cta-section">
        <div className="container text-center">
          <div className="cta-box">
            <span className="cta-badge">Schedule A Visit Today</span>
            <h2 className="cta-title">See Our Activities in Action</h2>
            <p className="cta-desc">
              Come tour our center during morning activity hours, meet our educators, and see how our daily routine supports early learning.
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
