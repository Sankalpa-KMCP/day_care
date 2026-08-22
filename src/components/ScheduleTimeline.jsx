import React, { useId, useRef, useState } from 'react';
import { ageSchedules } from '../data/programs';

const groups = [
  { key: 'infants', label: 'The Nest (Infants)', subtitle: '6 wk – 2 yr' },
  { key: 'toddlers', label: 'The Meadow (Toddlers)', subtitle: '2 – 4 yr' },
  { key: 'preschool', label: 'The Canopy (Pre-K)', subtitle: '4 – 5 yr' },
];

const phaseDetails = {
  infants: {
    arrival: 'One-on-one parent connection, soothing bottle or nursing snuggle, easing into natural floor movement.',
    midMorning: 'Grass and sunlight floor exploration, listening to acoustic melodies, feeling natural wooden and silk textures.',
    midday: 'Warm organic vegetable puree / solid finger foods, followed by peaceful sleep in the dim acoustic sanctuary.',
    afternoon: 'Fresh garden stroller walk, mirror peek-a-boo, and unhurried reconnection with parents at pickup.',
  },
  toddlers: {
    arrival: 'Gentle arrival ritual, placing coats in child-level cubbies, choosing morning discovery trays or book corner.',
    midMorning: 'Atelier clay making, watercolor blending, loose parts sorting, and communal circle time with song & movement.',
    midday: 'Family-style warm organic lunch (children pour water, pass bread), followed by nap or quiet listening.',
    afternoon: 'Long garden and mud kitchen play, balancing on cedar logs, followed by tea and daily handoff story.',
  },
  preschool: {
    arrival: 'Morning community circle to review student-led project plans, morning journaling, and independent literacy games.',
    midMorning: 'In-depth collaborative project time: building wood structures, shadow theatre, mathematical pattern discovery.',
    midday: 'Farm lunch with discussion on daily observations, mindful quiet rest with audiobooks or watercolor sketchbooks.',
    afternoon: 'Outdoor garden inquiry, harvesting herbs, scientific experiments, followed by daily reflection & reunion.',
  },
};

export default function ScheduleTimeline() {
  const [activeGroup, setActiveGroup] = useState('toddlers');
  const [selectedSlotIndex, setSelectedSlotIndex] = useState(0);
  const tabRefs = useRef([]);
  const generatedId = useId();
  const idBase = `rhythm-${generatedId.replace(/:/g, '')}`;
  const panelId = `${idBase}-panel`;

  const slots = ageSchedules[activeGroup] || ageSchedules.toddlers;
  const currentSlot = slots[selectedSlotIndex] || slots[0];

  const handleTabKeyDown = (event, currentIndex) => {
    let nextIndex;
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        nextIndex = (currentIndex + 1) % groups.length;
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        nextIndex = (currentIndex - 1 + groups.length) % groups.length;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = groups.length - 1;
        break;
      default:
        return;
    }
    event.preventDefault();
    setActiveGroup(groups[nextIndex].key);
    setSelectedSlotIndex(0);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <div className="rhythm-block enhanced-rhythm" id="schedule">
      <div className="rhythm-heading">
        <span className="eyebrow-badge">Daily Flow & Biological Rhythm</span>
        <h2>Enough Structure to Feel Safe. Enough Room to Wander.</h2>
        <p className="rhythm-subtitle">
          We don’t march children by arbitrary bells. Our daily cadence honors natural hunger, rest, and long blocks of deep play.
        </p>
      </div>

      {/* Group Switcher Tabs */}
      <div
        className="rhythm-tabs"
        role="tablist"
        aria-label="Daily rhythm by age group"
        aria-orientation="horizontal"
      >
        {groups.map((group, index) => (
          <button
            ref={(node) => { tabRefs.current[index] = node; }}
            id={`${idBase}-tab-${group.key}`}
            key={group.key}
            type="button"
            role="tab"
            aria-selected={activeGroup === group.key}
            aria-controls={panelId}
            tabIndex={activeGroup === group.key ? 0 : -1}
            className={`rhythm-tab-btn ${activeGroup === group.key ? 'is-active' : ''}`}
            onClick={() => {
              setActiveGroup(group.key);
              setSelectedSlotIndex(0);
            }}
            onKeyDown={(event) => handleTabKeyDown(event, index)}
          >
            <strong>{group.label}</strong>
            <small>{group.subtitle}</small>
          </button>
        ))}
      </div>

      {/* Main Interactive Rhythm Container */}
      <div
        className="rhythm-panel"
        id={panelId}
        role="tabpanel"
        aria-labelledby={`${idBase}-tab-${activeGroup}`}
        tabIndex={0}
      >
        <div className="rhythm-interactive-grid">
          {/* Left Column: Timeline Slot Cards */}
          <div className="rhythm-timeline-column">
            <ol className="rhythm-list">
              {slots.map((slot, index) => {
                const isSelected = selectedSlotIndex === index;
                return (
                  <li
                    key={slot.time + slot.title}
                    className={`rhythm-slot-card ${isSelected ? 'is-selected' : ''}`}
                    onClick={() => setSelectedSlotIndex(index)}
                    role="button"
                    tabIndex={0}
                    aria-pressed={isSelected}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedSlotIndex(index);
                      }
                    }}
                  >
                    <div className="slot-badge-col">
                      <span className="slot-num-badge">{slot.icon}</span>
                      {index < slots.length - 1 && <span className="slot-connector-line" aria-hidden="true" />}
                    </div>
                    <div className="slot-body">
                      <div className="slot-header-row">
                        <strong className="slot-title">{slot.title}</strong>
                        <span className="slot-time-chip">{slot.time}</span>
                      </div>
                      <p className="slot-summary">{slot.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Right Column: Deep-Dive Focus Card for the Active Slot */}
          <div className="rhythm-detail-column">
            <div className="rhythm-spotlight-card">
              <div className="spotlight-header">
                <span className="spotlight-tag">Phase Spotlight · {currentSlot.time}</span>
                <h3>{currentSlot.title}</h3>
              </div>
              <p className="spotlight-desc">{currentSlot.desc}</p>

              <div className="spotlight-pedagogy-box">
                <h4>Pedagogical Intention</h4>
                <p>
                  {activeGroup === 'infants'
                    ? phaseDetails.infants[selectedSlotIndex === 0 ? 'arrival' : selectedSlotIndex === 1 ? 'midMorning' : selectedSlotIndex === 2 ? 'midday' : 'afternoon']
                    : activeGroup === 'toddlers'
                    ? phaseDetails.toddlers[selectedSlotIndex === 0 ? 'arrival' : selectedSlotIndex === 1 ? 'midMorning' : selectedSlotIndex === 2 ? 'midday' : 'afternoon']
                    : phaseDetails.preschool[selectedSlotIndex === 0 ? 'arrival' : selectedSlotIndex === 1 ? 'midMorning' : selectedSlotIndex === 2 ? 'midday' : 'afternoon']}
                </p>
              </div>

              <div className="spotlight-footer-meta">
                <div className="meta-point">
                  <span className="meta-icon">🌿</span>
                  <span>Unhurried transitions without sirens or whistles</span>
                </div>
                <div className="meta-point">
                  <span className="meta-icon">💛</span>
                  <span>Individual rhythms respected for snacks & quiet</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="concept-note">
          Sample rhythm illustration · routines are customized dynamically based on individual child cues, seasonal weather, and family needs.
        </p>
      </div>
    </div>
  );
}
