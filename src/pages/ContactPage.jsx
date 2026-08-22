import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FaqAccordion from '../components/FaqAccordion';
import InquiryPostcard from '../components/InquiryPostcard';
import Reveal from '../components/Reveal';
import { siteConfig } from '../data/placeholderData';
import { programsData } from '../data/programs';

const tourTimeSlots = [
  { id: 'morning-930', label: 'Morning Discovery Walk (9:30 AM – 10:30 AM)' },
  { id: 'afternoon-330', label: 'Afternoon Tea Walk (3:30 PM – 4:30 PM)' },
  { id: 'weekend-sat', label: 'Saturday Open House (10:00 AM – 11:30 AM)' },
];

const inquiryTypes = [
  { id: 'tour', label: '🌿 Schedule a Campus Walkthrough' },
  { id: 'general', label: '💬 General Inquiry & Questions' },
  { id: 'waitlist', label: '📋 Join Founding Interest Pool' },
];

export default function ContactPage() {
  const location = useLocation();
  const stateRef = useRef(location.state);

  const [inquiryType, setInquiryType] = useState('tour');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    program: location.state?.prefilledProgram || programsData[1].id,
    scheduleDays: location.state?.prefilledDays || 'Full Week (Mon–Fri)',
    preferredDate: '',
    tourSlot: 'morning-930',
    dietaryNotes: '',
    message: '',
  });

  const [planBadge, setPlanBadge] = useState(
    location.state?.prefilledEstimate
      ? `Selected Care Plan: ${location.state.prefilledEstimate}`
      : null
  );
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submissionData, setSubmissionData] = useState(null);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const successRef = useRef(null);

  useEffect(() => {
    const currentState = location.state;
    if (currentState?.prefilledProgram && currentState !== stateRef.current) {
      stateRef.current = currentState;
      setForm((cur) => ({
        ...cur,
        program: currentState.prefilledProgram,
        scheduleDays: currentState.prefilledDays || cur.scheduleDays,
      }));
      if (currentState.prefilledEstimate) {
        setPlanBadge(`Selected Care Plan: ${currentState.prefilledEstimate}`);
      }
    }
  }, [location.state]);


  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
    setSubmitted(false);
  };

  const submit = (event) => {
    event.preventDefault();
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = 'Please provide your full name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (inquiryType === 'tour' && !form.preferredDate) {
      nextErrors.preferredDate = 'Please select a preferred date for your walkthrough.';
    }

    setErrors(nextErrors);
    setSubmitted(false);

    const firstInvalidField = ['name', 'email', 'preferredDate'].find((field) => nextErrors[field]);
    if (firstInvalidField) {
      const fieldRefs = { name: nameRef, email: emailRef };
      fieldRefs[firstInvalidField]?.current?.focus();
      return;
    }

    // Save snapshot of submission for personalized confirmation
    setSubmissionData({
      ...form,
      inquiryType,
      selectedRoom: programsData.find((p) => p.id === form.program)?.title || 'Selected Program',
      tourSlotLabel: tourTimeSlots.find((s) => s.id === form.tourSlot)?.label,
      submittedAt: new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    });

    setSubmitted(true);
    window.requestAnimationFrame(() => successRef.current?.focus());
  };

  const downloadCalendarInvite = () => {
    if (!submissionData?.preferredDate) return;
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//The Little Grove//Campus Tour//EN',
      'BEGIN:VEVENT',
      `SUMMARY:The Little Grove Campus Walkthrough (${submissionData.selectedRoom})`,
      `DESCRIPTION:Private family walkthrough at The Little Grove Early Learning House.\\nContact: hello@thelittlegrove.demo`,
      `LOCATION:${siteConfig.address}`,
      `DTSTART:${submissionData.preferredDate.replace(/-/g, '')}T093000Z`,
      `DTEND:${submissionData.preferredDate.replace(/-/g, '')}T103000Z`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'little-grove-tour.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const selectedRoomObj = programsData.find((p) => p.id === form.program);
  const selectedTourSlot = tourTimeSlots.find((s) => s.id === form.tourSlot);
  const errorCount = Object.values(errors).filter(Boolean).length;

  // Set min date to tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateStr = tomorrow.toISOString().split('T')[0];

  return (
    <div className="editorial-page contact-new luxury-inner contact-luxury storybook-page contact-storybook" data-page="contact">
      {/* 1. HEADER */}
      <header className="inner-hero contact-hero luxury-inner-hero storybook-hero">
        <div className="container inner-hero-grid">
          <div>
            <span className="eyebrow-badge">Founding Term Inquiries</span>
            <h1>Begin the Conversation with Our Care Team.</h1>
            <p className="inner-deck">
              Whether you’re planning ahead for infant care, seeking a joyful preschool meadow, or wanting to walk our garden sanctuary, we look forward to hearing your family’s story.
            </p>
          </div>
          <div className="contact-hero-aside">
            <div className="contact-quick-badge">
              <span className="badge-dot" aria-hidden="true" />
              <span>Founding Walkthroughs Open</span>
            </div>
            <p className="concept-note">
              Interactive inquiry system · Validates inputs and generates real-time confirmation cards and calendar reminders.
            </p>
          </div>
        </div>
      </header>

      {/* 2. MAIN INQUIRY & INTERACTIVE POSTCARD GRID */}
      <Reveal as="section" className="section-editorial inquiry-section luxury-inquiry" aria-label="Inquiry Form & Contact Details">
        <div className="container inquiry-grid">
          {/* Left Column: Campus Details & Live Updating Postcard */}
          <aside className="inquiry-aside storybook-panel">
            <div className="inquiry-aside-intro">
              <span className="eyebrow-badge eyebrow-badge--light">Visit & Connect</span>
              <h2>Campus Details</h2>
              <p>
                Our learning house is nestled in a quiet, tree-lined neighborhood designed for safe pedestrian arrivals and outdoor exploration.
              </p>
            </div>

            <dl className="contact-details-list">
              <div>
                <dt>Operating Hours</dt>
                <dd>Monday–Friday, 7:30 AM – 5:30 PM</dd>
              </div>
              <div>
                <dt>General Email</dt>
                <dd><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></dd>
              </div>
              <div>
                <dt>Main Desk Phone</dt>
                <dd><a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a></dd>
              </div>
              <div>
                <dt>Walkthrough Format</dt>
                <dd>Intimate 1-on-1 Visits (Mon, Wed, Fri & Select Sat)</dd>
              </div>
            </dl>

            {/* Live Interactive Postcard Preview */}
            <div className="postcard-preview-wrapper">
              <h3 className="postcard-preview-label">Your Live Inquiry Preview</h3>
              <InquiryPostcard
                form={form}
                roomTitle={selectedRoomObj?.title}
                tourSlotLabel={inquiryType === 'tour' ? selectedTourSlot?.label : null}
              />
            </div>
          </aside>

          {/* Right Column: Interactive Form */}
          <div className="inquiry-form-wrap postcard-form-wrap">
            {planBadge && (
              <div className="prefilled-plan-banner">
                <span className="banner-icon">✨</span>
                <span>{planBadge}</span>
                <button
                  type="button"
                  className="banner-dismiss-btn"
                  onClick={() => setPlanBadge(null)}
                  aria-label="Dismiss banner"
                >
                  ✕
                </button>
              </div>
            )}

            {/* Inquiry Type Tabs */}
            <div className="inquiry-type-selector" role="radiogroup" aria-label="Choose inquiry purpose">
              {inquiryTypes.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  role="radio"
                  aria-checked={inquiryType === type.id}
                  className={`inquiry-type-tab ${inquiryType === type.id ? 'is-active' : ''}`}
                  onClick={() => setInquiryType(type.id)}
                >
                  {type.label}
                </button>
              ))}
            </div>

            {errorCount > 0 && (
              <div className="form-error-summary" role="alert">
                <strong>Please check {errorCount === 1 ? '1 highlighted field' : `${errorCount} highlighted fields`} below.</strong>
                <p>We’ve placed focus on the first item requiring your attention.</p>
              </div>
            )}

            {/* Success State Box */}
            {submitted && submissionData && (
              <div
                className="demo-success-card"
                ref={successRef}
                role="status"
                aria-live="polite"
                tabIndex="-1"
              >
                <div className="success-header">
                  <span className="success-check-circle">✓</span>
                  <div>
                    <h3>Thank you, {submissionData.name.trim()}!</h3>
                    <p className="success-subtext">Your inquiry has been successfully generated.</p>
                  </div>
                </div>

                <div className="success-summary-box">
                  <h4>Inquiry Summary</h4>
                  <ul className="success-details-list">
                    <li><strong>Family:</strong> {submissionData.name} ({submissionData.email})</li>
                    <li><strong>Selected Room:</strong> {submissionData.selectedRoom}</li>
                    {submissionData.childAge && (
                      <li><strong>Child Age:</strong> {submissionData.childAge}</li>
                    )}
                    {submissionData.preferredDate && (
                      <li><strong>Preferred Walkthrough Date:</strong> {submissionData.preferredDate} ({submissionData.tourSlotLabel})</li>
                    )}
                  </ul>
                </div>

                <div className="success-actions-row">
                  {submissionData.preferredDate && (
                    <button
                      type="button"
                      className="button-solid btn-download-ics"
                      onClick={downloadCalendarInvite}
                    >
                      📅 Download Calendar Reminder (.ics)
                    </button>
                  )}
                  <button
                    type="button"
                    className="button-ghost"
                    onClick={() => {
                      setSubmitted(false);
                      setSubmissionData(null);
                    }}
                  >
                    Submit Another Note
                  </button>
                </div>
              </div>
            )}

            {/* Main Interactive Form */}
            {!submitted && (
              <form
                className="inquiry-form postcard-form"
                onSubmit={submit}
                noValidate
                aria-label="Family Interest & Walkthrough Form"
              >
                {/* Row 1: Name & Email */}
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="name">
                      Your Full Name <span className="req-star" aria-hidden="true">*</span>
                    </label>
                    <input
                      ref={nameRef}
                      id="name"
                      name="name"
                      autoComplete="name"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={form.name}
                      onChange={update}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <small className="field-error" id="name-error">{errors.name}</small>
                    )}
                  </div>

                  <div className="field">
                    <label htmlFor="email">
                      Email Address <span className="req-star" aria-hidden="true">*</span>
                    </label>
                    <input
                      ref={emailRef}
                      id="email"
                      name="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      required
                      placeholder="e.g. sarah@example.com"
                      value={form.email}
                      onChange={update}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <small className="field-error" id="email-error">{errors.email}</small>
                    )}
                  </div>
                </div>

                {/* Row 2: Phone & Child Info */}
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="phone">Phone Number (Optional)</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="e.g. (555) 019-2834"
                      value={form.phone}
                      onChange={update}
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="childAge">Child’s Age / Target Start Season</label>
                    <input
                      id="childAge"
                      name="childAge"
                      autoComplete="off"
                      placeholder="e.g. 2.5 yrs (Autumn Term)"
                      value={form.childAge}
                      onChange={update}
                    />
                  </div>
                </div>

                {/* Row 3: Room Selection & Schedule Preference */}
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="program">Classroom Environment</label>
                    <select
                      id="program"
                      name="program"
                      value={form.program}
                      onChange={update}
                    >
                      {programsData.map((prog) => (
                        <option value={prog.id} key={prog.id}>
                          {prog.title} ({prog.ageGroup}) · {prog.category}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="field">
                    <label htmlFor="scheduleDays">Schedule Preference</label>
                    <select
                      id="scheduleDays"
                      name="scheduleDays"
                      value={form.scheduleDays}
                      onChange={update}
                    >
                      <option value="Full Week (Mon–Fri)">5 Days · Full Week (Mon–Fri)</option>
                      <option value="3 Days (Mon/Wed/Fri)">3 Days · Mon / Wed / Fri</option>
                      <option value="2 Days (Tue/Thu)">2 Days · Tue / Thu</option>
                    </select>
                  </div>
                </div>

                {/* Walkthrough Options (if Tour selected) */}
                {inquiryType === 'tour' && (
                  <div className="tour-scheduling-block">
                    <div className="field-row">
                      <div className="field">
                        <label htmlFor="preferredDate">
                          Preferred Tour Date <span className="req-star" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="preferredDate"
                          name="preferredDate"
                          type="date"
                          min={minDateStr}
                          value={form.preferredDate}
                          onChange={update}
                          aria-invalid={Boolean(errors.preferredDate)}
                          aria-describedby={errors.preferredDate ? 'date-error' : undefined}
                        />
                        {errors.preferredDate && (
                          <small className="field-error" id="date-error">{errors.preferredDate}</small>
                        )}
                      </div>

                      <div className="field">
                        <label htmlFor="tourSlot">Preferred Time Slot</label>
                        <select
                          id="tourSlot"
                          name="tourSlot"
                          value={form.tourSlot}
                          onChange={update}
                        >
                          {tourTimeSlots.map((slot) => (
                            <option value={slot.id} key={slot.id}>{slot.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Message Textarea */}
                <div className="field">
                  <label htmlFor="message">
                    What would a good day of care feel like for your child?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={update}
                    placeholder="Tell us about your child's personality, sleep/meal rhythms, favorite play materials, or any specific questions..."
                  />
                </div>

                <div className="form-foot">
                  <p className="form-privacy-note">
                    🔒 Your information is treated with complete confidentiality and used solely for walkthrough coordination.
                  </p>
                  <button className="button-solid form-submit-btn" type="submit">
                    {inquiryType === 'tour' ? 'Confirm Campus Walkthrough' : 'Send Inquiry to Care Team'} <span aria-hidden="true">→</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Reveal>

      {/* 3. SEARCHABLE PARENT FAQ ACCORDION */}
      <Reveal as="section" className="section-editorial faq-section-wrapper" id="faq" aria-label="Frequently Asked Questions">
        <div className="container">
          <FaqAccordion initialCategory="all" />
        </div>
      </Reveal>
    </div>
  );
}
