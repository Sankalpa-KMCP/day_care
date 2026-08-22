import React from 'react';
import { siteConfig } from '../data/placeholderData';

export default function InquiryPostcard({ form, roomTitle, tourSlotLabel }) {
  const hasContent = Boolean(form.name || form.email || form.message || form.childAge);

  return (
    <div className="inquiry-live-postcard" aria-hidden="true">
      <div className="postcard-header">
        <div className="postcard-stamp">
          <span className="stamp-sun">✦</span>
          <span className="stamp-text">THE LITTLE GROVE</span>
          <span className="stamp-city">EARLY LEARNING</span>
        </div>
        <div className="postcard-airmail">
          <span>PAR AVION · INQUIRY PREVIEW</span>
        </div>
      </div>

      <div className="postcard-body">
        <div className="postcard-message-side">
          <p className="postcard-dear">
            Dear Elena & Care Team,
          </p>
          <p className="postcard-text">
            {form.message
              ? form.message
              : '“We are exploring care options for our child and would love to learn more about your unhurried daily rhythm, outdoor garden life, and classroom community...”'}
          </p>
          <div className="postcard-meta-notes">
            {form.childAge && (
              <p><strong>Child:</strong> {form.childAge}</p>
            )}
            <p><strong>Room:</strong> {roomTitle || 'General Interest'}</p>
            {form.scheduleDays && (
              <p><strong>Schedule:</strong> {form.scheduleDays}</p>
            )}
            {tourSlotLabel && (
              <p><strong>Tour Preference:</strong> {tourSlotLabel}</p>
            )}
          </div>
        </div>

        <div className="postcard-address-side">
          <div className="postcard-address-lines">
            <div className="address-line">
              <span className="line-label">Family:</span>
              <strong>{form.name || 'Your Name'}</strong>
            </div>
            <div className="address-line">
              <span className="line-label">Contact:</span>
              <span>{form.email || 'your.email@example.com'}</span>
            </div>
            {form.phone && (
              <div className="address-line">
                <span className="line-label">Phone:</span>
                <span>{form.phone}</span>
              </div>
            )}
            <div className="address-line address-line--dest">
              <span className="line-label">To:</span>
              <span>{siteConfig.fullName}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="postcard-footer">
        <span className="postcard-notice">
          {hasContent
            ? 'Interactive draft preview · updates as you type'
            : 'Interactive postcard draft'}
        </span>
      </div>
    </div>
  );
}
