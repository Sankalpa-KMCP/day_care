import React, { useState } from 'react';
import { ageSchedules } from '../data/programs';
import { Link } from 'react-router-dom';

export default function ScheduleTimeline() {
  const [activeGroup, setActiveGroup] = useState('toddlers');

  const tabs = [
    { key: 'infants', label: 'Infants & Crawlers', age: '6 Weeks - 18 Mos', ratio: '1:4 Ratio' },
    { key: 'toddlers', label: 'Toddlers & Explorers', age: '18 Mos - 3 Years', ratio: '1:6 Ratio' },
    { key: 'preschool', label: 'Preschool & Pre-K', age: '3 - 5 Years', ratio: '1:10 Ratio' },
  ];

  const currentSchedule = ageSchedules[activeGroup] || ageSchedules['toddlers'];

  return (
    <div className="schedule-timeline-container" id="schedule">
      <div className="schedule-header text-center">
        <span className="section-badge badge-sage">Daily Flow & Routine</span>
        <h2 className="section-title">A Day in the Life at Little Sunshine</h2>
        <p className="section-subtitle">
          We blend predictable daily rhythm with joyful exploration, ensuring every child feels secure, engaged, and well-nourished.
        </p>

        {/* Age Group Switcher Tabs */}
        <div className="schedule-tabs-wrapper">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              className={`schedule-tab-btn ${activeGroup === tab.key ? 'is-active' : ''}`}
              onClick={() => setActiveGroup(tab.key)}
            >
              <span className="tab-title">{tab.label}</span>
              <span className="tab-meta">{tab.age} • {tab.ratio}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Flow */}
      <div className="timeline-card">
        <div className="timeline-items-flow">
          {currentSchedule.map((slot, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-time-col">
                <span className="timeline-time-badge">{slot.time}</span>
              </div>
              <div className="timeline-marker-col" aria-hidden="true">
                <div className="timeline-dot"></div>
                {index < currentSchedule.length - 1 && <div className="timeline-line"></div>}
              </div>
              <div className="timeline-content-col">
                <h3 className="timeline-slot-title">{slot.title}</h3>
                <p className="timeline-slot-desc">{slot.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="timeline-footer">
          <div className="timeline-footer-info">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="info-icon">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <span>All meals and snacks are 100% organic, allergy-conscious, and prepared fresh daily on-site.</span>
          </div>
          <Link to="/contact" className="btn btn-primary btn-sm">
            Book a Tour to Experience a Day &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
