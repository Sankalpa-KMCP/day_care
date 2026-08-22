import React, { useState } from 'react';
import { curriculumDomains } from '../data/curriculum';

const rooms = [
  { id: 'infant-toddler', name: 'The Nest', age: '6 weeks – 2 years' },
  { id: 'preschool-learning', name: 'The Meadow', age: '2 – 4 years' },
  { id: 'pre-k-readiness', name: 'The Canopy', age: '4 – 5 years' },
];

export default function CurriculumDomains() {
  const [selectedRoom, setSelectedRoom] = useState('preschool-learning');
  const [activeDomainId, setActiveDomainId] = useState(curriculumDomains[0].id);

  const currentRoomObj = rooms.find((r) => r.id === selectedRoom) || rooms[1];
  const activeDomain = curriculumDomains.find((d) => d.id === activeDomainId) || curriculumDomains[0];

  return (
    <div className="curriculum-framework" id="curriculum-framework">
      <div className="curriculum-header">
        <span className="eyebrow-badge">Pedagogical Framework</span>
        <h2>How Learning Unfolds at Every Age</h2>
        <p className="curriculum-deck">
          We honor child-led inquiry through five core developmental domains. Choose a room to see how each domain meets your child where they are.
        </p>

        {/* Room Switcher */}
        <div className="curriculum-room-tabs" role="tablist" aria-label="Select Classroom Level">
          {rooms.map((room) => (
            <button
              key={room.id}
              type="button"
              role="tab"
              aria-selected={selectedRoom === room.id}
              className={`room-pill-tab ${selectedRoom === room.id ? 'is-active' : ''}`}
              onClick={() => setSelectedRoom(room.id)}
            >
              <strong>{room.name}</strong>
              <small>{room.age}</small>
            </button>
          ))}
        </div>
      </div>

      {/* Domain Navigation Pills */}
      <div className="domain-tabs-row" role="tablist" aria-label="Developmental Domains">
        {curriculumDomains.map((domain) => (
          <button
            key={domain.id}
            type="button"
            role="tab"
            aria-selected={activeDomainId === domain.id}
            className={`domain-pill-btn ${activeDomainId === domain.id ? 'is-active' : ''}`}
            onClick={() => setActiveDomainId(domain.id)}
          >
            <span className="domain-icon" aria-hidden="true">{domain.icon}</span>
            <span>{domain.title.split(' ')[0]}</span>
          </button>
        ))}
      </div>

      {/* Main Framework Showcase Card */}
      <div className="domain-feature-card">
        <div className="domain-feature-header">
          <div className="domain-title-badge">
            <span className="domain-large-icon" aria-hidden="true">{activeDomain.icon}</span>
            <div>
              <h3>{activeDomain.title}</h3>
              <p>{activeDomain.summary}</p>
            </div>
          </div>
          <div className="current-room-indicator">
            <span>Viewing for</span>
            <strong>{currentRoomObj.name} ({currentRoomObj.age})</strong>
          </div>
        </div>

        <div className="domain-content-grid">
          <div className="domain-focus-box">
            <h4>Core Developmental Focus</h4>
            <p className="focus-lead-text">
              {activeDomain.progression[selectedRoom].focus}
            </p>
          </div>

          <div className="domain-examples-box">
            <h4>Everyday Classroom Invitations & Materials</h4>
            <p className="examples-detail-text">
              {activeDomain.progression[selectedRoom].examples}
            </p>
          </div>
        </div>

        {/* 3-Room Comparison Grid at a Glance */}
        <div className="domain-progression-timeline">
          <h4 className="timeline-title">The Whole Journey: Across All 3 Rooms</h4>
          <div className="progression-steps-grid">
            {rooms.map((room) => {
              const prog = activeDomain.progression[room.id];
              const isCurrent = room.id === selectedRoom;
              return (
                <div
                  key={room.id}
                  className={`progression-step-card ${isCurrent ? 'is-current' : ''}`}
                  onClick={() => setSelectedRoom(room.id)}
                >
                  <div className="step-header">
                    <span className="step-room-tag">{room.name}</span>
                    <small>{room.age}</small>
                  </div>
                  <strong className="step-focus-highlight">{prog.focus}</strong>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
