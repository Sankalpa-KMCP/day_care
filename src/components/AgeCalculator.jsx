import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { programsData } from '../data/programs';

const options = [
  { label: 'Under 2', program: 0, accent: 'clay' },
  { label: '2–3 years', program: 1, accent: 'honey' },
  { label: '4–5 years', program: 2, accent: 'sage' },
];

export default function AgeCalculator() {
  const [selected, setSelected] = useState(1);
  const program = programsData[options[selected].program];
  const accent = options[selected].accent;
  return (
    <div className={`program-finder room-accent room-accent-${accent}`} data-room={program.id} data-accent={accent}>
      <div className="finder-intro"><p className="kicker">Find their place</p><h2>Where might your child begin?</h2><p>Choose an age to meet the room designed around that season of childhood.</p></div>
      <div className="finder-panel">
        <div className="age-tabs" role="group" aria-label="Choose a child age range">
          {options.map((option, index) => <button className={selected === index ? 'is-active' : undefined} data-accent={option.accent} data-room={programsData[option.program].id} key={option.label} type="button" onClick={() => setSelected(index)} aria-pressed={selected === index} aria-controls="age-finder-result">{option.label}</button>)}
        </div>
        <div className="finder-result" id="age-finder-result" data-room={program.id} data-accent={accent} aria-live="polite" aria-atomic="true">
          <p className="program-number">0{selected + 1}</p>
          <div><p className="eyebrow">A possible fit</p><h3>{program.title}</h3><p>{program.description}</p><Link className="text-link" to={`/programs#${program.id}`}>Explore {program.title} <span aria-hidden="true">→</span></Link></div>
        </div>
      </div>
    </div>
  );
}
