import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { programsData } from '../data/programs';

export default function AgeCalculator() {
  const [selectedAge, setSelectedAge] = useState('18m');

  const ageOptions = [
    { label: '6 - 12 Months', value: '8m', programId: 'infant-toddler', category: 'Infants' },
    { label: '1 - 2 Years', value: '18m', programId: 'infant-toddler', category: 'Toddlers' },
    { label: '3 Years', value: '3y', programId: 'preschool-learning', category: 'Preschool' },
    { label: '4 - 5 Years', value: '4y', programId: 'pre-k-readiness', category: 'Pre-K' },
  ];

  const activeOption = ageOptions.find((opt) => opt.value === selectedAge) || ageOptions[1];
  const matchedProgram = programsData.find((p) => p.id === activeOption.programId) || programsData[0];

  return (
    <div className="age-calculator-widget">
      <div className="age-calc-header">
        <span className="section-badge badge-amber">Interactive Program Finder</span>
        <h3 className="age-calc-title">Find the Right Room For Your Child</h3>
        <p className="age-calc-subtitle">
          Select your child's current age stage to explore our tailored early childhood room placement and key milestones.
        </p>
      </div>

      <div className="age-options-grid" role="group" aria-label="Select age range">
        {ageOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            className={`age-option-btn ${selectedAge === option.value ? 'is-selected' : ''}`}
            onClick={() => setSelectedAge(option.value)}
            aria-pressed={selectedAge === option.value}
          >
            <span className="age-option-label">{option.label}</span>
            <span className="age-option-cat">{option.category} Stage</span>
            {selectedAge === option.value && (
              <span className="age-option-arrow" aria-hidden="true">▼</span>
            )}
          </button>
        ))}
      </div>

      <div key={activeOption.value} className="matched-program-card animate-fade-in">
        <div className="matched-program-header">
          <div className="matched-program-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-primary)' }}>
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>Recommended: {matchedProgram.title} ({matchedProgram.ageGroup})</span>
          </div>
          {matchedProgram.ratio && (
            <span className="matched-ratio-tag">{matchedProgram.ratio}</span>
          )}
        </div>

        <p className="matched-program-desc">{matchedProgram.description}</p>
        
        <div className="matched-highlights-row">
          {matchedProgram.highlights.slice(0, 3).map((item, idx) => (
            <div key={idx} className="matched-pill">
              <svg className="matched-check-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="matched-cta">
          <Link to={`/programs#${matchedProgram.id}`} className="btn btn-primary">
            Explore {matchedProgram.title} &rarr;
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Schedule a Room Tour
          </Link>
        </div>
      </div>
    </div>
  );
}
