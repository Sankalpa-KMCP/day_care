import React, { useState } from 'react';
import { spacesData } from '../data/spaces';
import PhotoGalleryModal from './PhotoGalleryModal';

export const CampusExplorer = ({ onOpenModal }) => {
  const [activeSpaceId, setActiveSpaceId] = useState(spacesData[0].id);
  const [selectedStationIndex, setSelectedStationIndex] = useState(0);
  const [modalImage, setModalImage] = useState(null);

  const activeSpace = spacesData.find((s) => s.id === activeSpaceId) || spacesData[0];

  const handleOpenPhoto = () => {
    const photoPayload = {
      src: activeSpace.image,
      title: activeSpace.name,
      alt: activeSpace.alt,
      desc: activeSpace.shortDesc,
    };
    if (onOpenModal) {
      onOpenModal(photoPayload);
    } else {
      setModalImage(photoPayload);
    }
  };

  return (
    <div className="campus-explorer" id="campus-explorer">
      <div className="campus-explorer-header">
        <div className="explorer-title-wrap">
          <span className="eyebrow-badge">Interactive Environment Tour</span>
          <h2>Rooms That Invite, Not Instruct</h2>
          <p className="explorer-subtitle">
            Explore our thoughtfully curated learning zones. Every surface, basket, and corner is designed to support natural independence, calm focus, and sensory joy.
          </p>
        </div>

        {/* Room Switcher Tabs */}
        <div className="explorer-tabs" role="tablist" aria-label="Campus Learning Environments">
          {spacesData.map((space) => (
            <button
              key={space.id}
              type="button"
              role="tab"
              aria-selected={activeSpaceId === space.id}
              aria-controls={`space-panel-${space.id}`}
              className={`explorer-tab-btn ${activeSpaceId === space.id ? 'is-active' : ''}`}
              data-accent={space.accent}
              onClick={() => {
                setActiveSpaceId(space.id);
                setSelectedStationIndex(0);
              }}
            >
              <span className="explorer-tab-tag">{space.tag}</span>
              <strong>{space.name}</strong>
            </button>
          ))}
        </div>
      </div>

      {/* Main Active Room Showcase */}
      <div
        id={`space-panel-${activeSpace.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeSpace.id}`}
        className="explorer-display-grid"
      >
        {/* Left / Top: Interactive Photo Card */}
        <div className="explorer-visual-col">
          <div className="explorer-image-card">
            <img
              src={activeSpace.image}
              alt={activeSpace.alt}
              className="explorer-main-img"
              loading="lazy"
              decoding="async"
            />
            <div className="explorer-image-overlay">
              <button
                type="button"
                className="explorer-zoom-btn"
                onClick={handleOpenPhoto}
                aria-label={`Enlarge photo of ${activeSpace.name}`}
              >
                <span>🔍 Tap to view high-res space</span>
              </button>
              <span className="explorer-category-badge">{activeSpace.category}</span>
            </div>
          </div>
          <blockquote className="explorer-pedagogy-quote">
            {activeSpace.pedagogyQuote}
          </blockquote>
        </div>

        {/* Right / Bottom: Station Highlights & Materials */}
        <div className="explorer-stations-col">
          <div className="explorer-stations-header">
            <h3>Curated Stations in {activeSpace.name}</h3>
            <p>{activeSpace.shortDesc}</p>
          </div>

          <div className="explorer-station-cards">
            {activeSpace.stations.map((station, idx) => (
              <div
                key={station.title}
                className={`explorer-station-item ${selectedStationIndex === idx ? 'is-highlighted' : ''}`}
                onClick={() => setSelectedStationIndex(idx)}
                tabIndex={0}
                role="button"
                aria-pressed={selectedStationIndex === idx}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedStationIndex(idx);
                  }
                }}
              >
                <div className="station-number" aria-hidden="true">
                  0{idx + 1}
                </div>
                <div className="station-content">
                  <h4>{station.title}</h4>
                  <p>{station.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="explorer-actions-foot">
            <span className="materials-note">✦ 100% natural, non-toxic, sustainable materials</span>
            <button
              type="button"
              className="button-ghost"
              onClick={handleOpenPhoto}
            >
              Expand photo gallery
            </button>
          </div>
        </div>
      </div>

      {modalImage && (
        <PhotoGalleryModal
          activeImage={modalImage}
          onClose={() => setModalImage(null)}
        />
      )}
    </div>
  );
};

export default CampusExplorer;
