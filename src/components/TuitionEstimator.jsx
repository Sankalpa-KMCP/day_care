import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { tuitionPlans } from '../data/tuition';

export default function TuitionEstimator({ initialRoom = 'preschool-learning', compact = false }) {
  const navigate = useNavigate();
  const [selectedRoom, setSelectedRoom] = useState(initialRoom);
  const [selectedDays, setSelectedDays] = useState('5-day');
  const [selectedHours, setSelectedHours] = useState('core');

  const currentPlan = tuitionPlans[selectedRoom] || tuitionPlans['preschool-learning'];
  const rateInfo = currentPlan.rates[selectedDays] || currentPlan.rates['5-day'];
  const hoursInfo = currentPlan.hoursOptions[selectedHours] || currentPlan.hoursOptions.core;

  const monthlyTotal = rateInfo.monthly + hoursInfo.surcharge;
  const estimatedDaily = Math.round(monthlyTotal / (rateInfo.days * 4.33));
  const weeklyHours = selectedHours === 'extended' ? rateInfo.days * 10 : rateInfo.days * 7;

  const handleInquire = () => {
    navigate('/contact', {
      state: {
        prefilledProgram: selectedRoom,
        prefilledDays: rateInfo.label,
        prefilledHours: hoursInfo.label,
        prefilledEstimate: `$${monthlyTotal.toLocaleString()}/mo`,
      },
    });
  };

  return (
    <div className={`tuition-estimator ${compact ? 'tuition-estimator--compact' : ''}`} id="tuition-estimator">
      <div className="tuition-header">
        <div className="tuition-title-group">
          <span className="eyebrow-badge">Transparent Planning Tool</span>
          <h2>Care Plan & Tuition Estimator</h2>
          <p className="tuition-deck">
            Select your child’s age, schedule, and hours to view a clear monthly breakdown. All meals, diapers, and atelier materials are included with zero hidden fees.
          </p>
        </div>
      </div>

      <div className="tuition-calculator-grid">
        {/* Controls Column */}
        <div className="tuition-controls-card">
          {/* Step 1: Room / Age */}
          <fieldset className="tuition-fieldset">
            <legend className="tuition-legend">
              <span className="step-badge">1</span>
              <span>Select Age Stage</span>
            </legend>
            <div className="tuition-toggle-group" role="radiogroup" aria-label="Select Age Stage">
              {Object.entries(tuitionPlans).map(([roomId, plan]) => (
                <button
                  key={roomId}
                  type="button"
                  role="radio"
                  aria-checked={selectedRoom === roomId}
                  className={`tuition-toggle-btn ${selectedRoom === roomId ? 'is-active' : ''}`}
                  onClick={() => setSelectedRoom(roomId)}
                >
                  <strong>{plan.name}</strong>
                  <small>{plan.ageRange}</small>
                </button>
              ))}
            </div>
          </fieldset>

          {/* Step 2: Schedule Days */}
          <fieldset className="tuition-fieldset">
            <legend className="tuition-legend">
              <span className="step-badge">2</span>
              <span>Select Weekly Schedule</span>
            </legend>
            <div className="tuition-toggle-group tuition-toggle-group--days" role="radiogroup" aria-label="Select Weekly Schedule">
              {Object.entries(currentPlan.rates).map(([daysKey, rate]) => (
                <button
                  key={daysKey}
                  type="button"
                  role="radio"
                  aria-checked={selectedDays === daysKey}
                  className={`tuition-toggle-btn ${selectedDays === daysKey ? 'is-active' : ''}`}
                  onClick={() => setSelectedDays(daysKey)}
                >
                  <strong>{rate.days} Days / Week</strong>
                  <small>{rate.label}</small>
                </button>
              ))}
            </div>
          </fieldset>

          {/* Step 3: Hours Option */}
          <fieldset className="tuition-fieldset">
            <legend className="tuition-legend">
              <span className="step-badge">3</span>
              <span>Daily Hours Tier</span>
            </legend>
            <div className="tuition-toggle-group tuition-toggle-group--hours" role="radiogroup" aria-label="Daily Hours Tier">
              {Object.entries(currentPlan.hoursOptions).map(([hourKey, option]) => (
                <button
                  key={hourKey}
                  type="button"
                  role="radio"
                  aria-checked={selectedHours === hourKey}
                  className={`tuition-toggle-btn ${selectedHours === hourKey ? 'is-active' : ''}`}
                  onClick={() => setSelectedHours(hourKey)}
                >
                  <strong>{hourKey === 'core' ? 'Core Day (7 hrs)' : 'Extended Day (10 hrs)'}</strong>
                  <small>{option.label}</small>
                </button>
              ))}
            </div>
          </fieldset>
        </div>

        {/* Live Calculation Output Card */}
        <div className="tuition-summary-card">
          <div className="tuition-summary-header">
            <div className="tuition-summary-tag">{currentPlan.name} · {rateInfo.days} Days</div>
            <div className="tuition-price-display">
              <span className="currency">$</span>
              <span className="amount">{monthlyTotal.toLocaleString()}</span>
              <span className="period">/ month</span>
            </div>
            <div className="tuition-price-subtext">
              Estimated ~${estimatedDaily} per day attended · {weeklyHours} hours of care weekly
            </div>
          </div>

          <div className="tuition-metrics-row">
            <div className="metric-pill">
              <span className="metric-label">Educator Ratio</span>
              <strong className="metric-value">{currentPlan.ratio.split(' ')[0]}</strong>
            </div>
            <div className="metric-pill">
              <span className="metric-label">Max Group</span>
              <strong className="metric-value">{currentPlan.maxGroupSize.split(' ')[0]} children</strong>
            </div>
            <div className="metric-pill">
              <span className="metric-label">All-Inclusive</span>
              <strong className="metric-value">100% Meals & Supplies</strong>
            </div>
          </div>

          <div className="tuition-inclusions-list">
            <h4>Every Plan Inclusions:</h4>
            <ul>
              {currentPlan.inclusions.map((item, idx) => (
                <li key={idx}>
                  <span className="check-icon" aria-hidden="true">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="tuition-cta-wrap">
            <button
              type="button"
              className="button-solid tuition-apply-btn"
              onClick={handleInquire}
            >
              Inquire with this Care Plan <span aria-hidden="true">→</span>
            </button>
            <p className="tuition-disclaimer">
              * Rates shown are illustrative planning figures for our founding term. Finalized tuition schedules and sibling discounts will be provided during private walkthroughs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
