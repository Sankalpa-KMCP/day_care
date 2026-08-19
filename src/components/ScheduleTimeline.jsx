import React, { useState } from 'react';
import { ageSchedules } from '../data/programs';

const groups = [
  { key: 'infants', label: 'Infants' },
  { key: 'toddlers', label: 'Toddlers' },
  { key: 'preschool', label: 'Pre-K' },
];

export default function ScheduleTimeline() {
  const [active, setActive] = useState('toddlers');
  return (
    <div className="rhythm-block" id="schedule">
      <div className="rhythm-heading"><p className="kicker">A gentle rhythm</p><h2>Enough structure to feel safe. Enough room to wander.</h2></div>
      <div className="rhythm-tabs" role="tablist" aria-label="Daily rhythm by age group">
        {groups.map((group) => <button key={group.key} role="tab" aria-selected={active === group.key} onClick={() => setActive(group.key)}>{group.label}</button>)}
      </div>
      <ol className="rhythm-list">
        {ageSchedules[active].map((slot) => <li key={slot.icon}><span>{slot.icon}</span><p><strong>{slot.title}</strong><small>{slot.time}</small></p><p>{slot.desc}</p></li>)}
      </ol>
      <p className="concept-note">Sample rhythm only · final routines will be shaped with educators and enrolled families.</p>
    </div>
  );
}
