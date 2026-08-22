import React, { useState } from 'react';
import { seasonalMenus, nutritionPillars } from '../data/menu';

const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
const dayLabels = {
  monday: 'Monday',
  tuesday: 'Tuesday',
  wednesday: 'Wednesday',
  thursday: 'Thursday',
  friday: 'Friday',
};

export default function MenuShowcase() {
  const [activeSeasonKey, setActiveSeasonKey] = useState('springSummer');
  const [activeWeekIndex, setActiveWeekIndex] = useState(0);

  const currentSeason = seasonalMenus[activeSeasonKey];
  const currentWeek = currentSeason.weeks[activeWeekIndex] || currentSeason.weeks[0];

  return (
    <div className="menu-showcase" id="menu-showcase">
      <div className="menu-showcase-header">
        <div className="menu-header-copy">
          <span className="eyebrow-badge">Whole Child Nutrition</span>
          <h2>Organic Farm-to-Table Table & Daily Kitchen</h2>
          <p className="menu-deck">
            We believe healthy food shapes calm bodies and curious minds. Our onsite chef prepares 100% organic, seasonal meals served family-style with love.
          </p>
        </div>

        {/* Season Selector */}
        <div className="season-toggle-wrap">
          <button
            type="button"
            className={`season-toggle-btn ${activeSeasonKey === 'springSummer' ? 'is-active' : ''}`}
            onClick={() => {
              setActiveSeasonKey('springSummer');
              setActiveWeekIndex(0);
            }}
          >
            🌸 Spring & Summer Harvest
          </button>
          <button
            type="button"
            className={`season-toggle-btn ${activeSeasonKey === 'autumnWinter' ? 'is-active' : ''}`}
            onClick={() => {
              setActiveSeasonKey('autumnWinter');
              setActiveWeekIndex(0);
            }}
          >
            🍂 Autumn & Winter Hearth
          </button>
        </div>
      </div>

      {/* Nutrition Pillars Cards */}
      <div className="nutrition-pillars-grid">
        {nutritionPillars.map((pillar) => (
          <div key={pillar.title} className="pillar-card">
            <span className="pillar-icon" aria-hidden="true">{pillar.icon}</span>
            <h4>{pillar.title}</h4>
            <p>{pillar.desc}</p>
          </div>
        ))}
      </div>

      {/* Weekly Menu Display */}
      <div className="weekly-menu-board">
        <div className="menu-board-top">
          <div>
            <h3>Sample Menu · {currentWeek.theme}</h3>
            <p className="season-flavor-note">{currentSeason.seasonNote}</p>
          </div>

          {currentSeason.weeks.length > 1 && (
            <div className="week-selector-pills">
              {currentSeason.weeks.map((week, idx) => (
                <button
                  key={week.weekNumber}
                  type="button"
                  className={`week-pill ${activeWeekIndex === idx ? 'is-active' : ''}`}
                  onClick={() => setActiveWeekIndex(idx)}
                >
                  {week.weekNumber}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="daily-menu-grid">
          {daysOfWeek.map((dayKey) => {
            const dayMenu = currentWeek[dayKey];
            if (!dayMenu) return null;
            return (
              <div key={dayKey} className="day-menu-card">
                <div className="day-card-header">
                  <strong>{dayLabels[dayKey]}</strong>
                </div>
                <div className="meal-section">
                  <span className="meal-type-tag">Breakfast</span>
                  <p>{dayMenu.breakfast}</p>
                </div>
                <div className="meal-section meal-section--lunch">
                  <span className="meal-type-tag meal-type-tag--main">Warm Lunch</span>
                  <p><strong>{dayMenu.lunch}</strong></p>
                </div>
                <div className="meal-section">
                  <span className="meal-type-tag">Afternoon Snack</span>
                  <p>{dayMenu.snack}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="menu-board-footer">
          <span>✦ Nut-free facility · Filtered spring water & organic oat/dairy milk offered with every meal.</span>
        </div>
      </div>
    </div>
  );
}
