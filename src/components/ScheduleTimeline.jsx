import React, { useId, useRef, useState } from 'react';
import { ageSchedules } from '../data/programs';

const groups = [
  { key: 'infants', label: 'Infants' },
  { key: 'toddlers', label: 'Toddlers' },
  { key: 'preschool', label: 'Pre-K' },
];

export default function ScheduleTimeline() {
  const [active, setActive] = useState('toddlers');
  const tabRefs = useRef([]);
  const generatedId = useId();
  const idBase = `rhythm-${generatedId.replace(/:/g, '')}`;
  const panelId = `${idBase}-panel`;

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
    setActive(groups[nextIndex].key);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <div className="rhythm-block" id="schedule">
      <div className="rhythm-heading"><p className="kicker">A gentle rhythm</p><h2>Enough structure to feel safe. Enough room to wander.</h2></div>
      <div className="rhythm-tabs" role="tablist" aria-label="Daily rhythm by age group" aria-orientation="horizontal">
        {groups.map((group, index) => (
          <button
            ref={(node) => { tabRefs.current[index] = node; }}
            id={`${idBase}-tab-${group.key}`}
            key={group.key}
            type="button"
            role="tab"
            aria-selected={active === group.key}
            aria-controls={panelId}
            tabIndex={active === group.key ? 0 : -1}
            onClick={() => setActive(group.key)}
            onKeyDown={(event) => handleTabKeyDown(event, index)}
          >
            {group.label}
          </button>
        ))}
      </div>
      <div className="rhythm-panel" id={panelId} role="tabpanel" aria-labelledby={`${idBase}-tab-${active}`} tabIndex={0}>
        <ol className="rhythm-list">
          {ageSchedules[active].map((slot) => <li key={slot.icon}><span>{slot.icon}</span><p><strong>{slot.title}</strong><small>{slot.time}</small></p><p>{slot.desc}</p></li>)}
        </ol>
        <p className="concept-note">Sample rhythm only · final routines will be shaped with educators and enrolled families.</p>
      </div>
    </div>
  );
}
