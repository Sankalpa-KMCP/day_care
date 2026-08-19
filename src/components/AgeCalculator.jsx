import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { programsData } from '../data/programs';

const options = [
  { label: 'Under 2', program: 0 },
  { label: '2–3 years', program: 1 },
  { label: '4–5 years', program: 2 },
];

export default function AgeCalculator() {
  const [selected, setSelected] = useState(1);
  const program = programsData[options[selected].program];
  return (
    <div className="program-finder">
      <div className="finder-intro"><p className="kicker">Find their place</p><h2>Where might your child begin?</h2><p>Choose an age to meet the room designed around that season of childhood.</p></div>
      <div className="finder-panel">
        <div className="age-tabs" role="group" aria-label="Choose a child age range">
          {options.map((option, index) => <button key={option.label} type="button" onClick={() => setSelected(index)} aria-pressed={selected === index}>{option.label}</button>)}
        </div>
        <div className="finder-result" aria-live="polite">
          <p className="program-number">0{selected + 1}</p>
          <div><p className="eyebrow">A possible fit</p><h3>{program.title}</h3><p>{program.description}</p><Link className="text-link" to={`/programs#${program.id}`}>Explore {program.title} <span aria-hidden="true">→</span></Link></div>
        </div>
      </div>
    </div>
  );
}
