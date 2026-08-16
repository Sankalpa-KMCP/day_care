import React, { useState } from 'react';
import { siteConfig } from '../data/placeholderData';
import { programsData } from '../data/programs';
import { faqsData } from '../data/faqs';
import SectionTitle from '../components/SectionTitle';
import ImagePlaceholder from '../components/ImagePlaceholder';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childAge: '',
    program: 'infant-toddler',
    tourType: 'in-person',
    timeSlot: 'morning',
    preferredDate: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqId, setOpenFaqId] = useState('faq-1');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your parent/guardian name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!formData.email.includes('@') || !formData.email.includes('.')) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a contact phone number.';
    }
    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred tour date.';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  const toggleFaq = (id) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="contact-page">
      {/* 1. Contact Hero */}
      <section className="contact-hero-section">
        <div className="container">
          <div className="contact-hero-content text-center">
            <span className="section-badge">Admissions & Visits</span>
            <h1 className="page-title">Schedule a Tour & Connect with Us</h1>
            <p className="page-subtitle">
              We would love to welcome your family for a private walkthrough. Meet our certified educators, observe our sunlit classrooms, and get all your questions answered.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Contact Information & Operating Hours */}
      <section className="section-padding bg-surface">
        <div className="container">
          <div className="grid grid-2 contact-info-grid">
            {/* Contact Details Card */}
            <div className="contact-info-card">
              <h2 className="contact-card-title">
                <svg className="contact-title-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Facility Contact Details
              </h2>
              <ul className="contact-detail-list">
                <li className="contact-detail-item">
                  <div className="contact-detail-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="contact-detail-content">
                    <strong>Campus Address</strong>
                    <address>{siteConfig.address}</address>
                  </div>
                </li>
                <li className="contact-detail-item">
                  <div className="contact-detail-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="contact-detail-content">
                    <strong>Admissions Phone Line</strong>
                    <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}>
                      {siteConfig.phone}
                    </a>
                  </div>
                </li>
                <li className="contact-detail-item">
                  <div className="contact-detail-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div className="contact-detail-content">
                    <strong>Admissions Email</strong>
                    <a href={`mailto:${siteConfig.email}`}>
                      {siteConfig.email}
                    </a>
                  </div>
                </li>
              </ul>
              <div className="mt-auto">
                <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="btn btn-secondary btn-block">
                  Call Main Desk: {siteConfig.phone}
                </a>
              </div>
            </div>

            {/* Hours & Location Card */}
            <div className="contact-hours-card">
              <h2 className="contact-card-title">
                <svg className="contact-title-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                Operating Hours & Campus
              </h2>
              <ul className="contact-detail-list">
                <li className="contact-detail-item">
                  <div className="contact-detail-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div className="contact-detail-content">
                    <strong>Facility Operating Hours</strong>
                    <span>{siteConfig.hours}</span>
                  </div>
                </li>
              </ul>
              <div>
                <ImagePlaceholder
                  src="/images/hero_daycare_play.jpg"
                  alt="Daycare center facility entrance and grounds"
                  title="Daycare Entryway & Grounds"
                  aspect="16/9"
                  tag="Daycare Campus"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Inquiry & Tour Booking Form */}
      <section className="section-padding bg-surface-muted">
        <div className="container">
          <SectionTitle
            badge="Private Tour Booking"
            badgeVariant="terracotta"
            title="Book Your Guided Campus Walkthrough"
            subtitle="Choose a convenient date and time to experience our classrooms in action."
          />

          <div className="contact-form-box">
            {isSubmitted && (
              <div className="tour-confirm-alert" role="status" aria-live="polite">
                <div className="tour-confirm-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="tour-confirm-title">Tour Request Received!</h3>
                  <p className="tour-confirm-desc">
                    Thank you, <strong>{formData.name || 'Parent'}</strong>! Our admissions coordinator will confirm your {formData.tourType === 'in-person' ? 'in-person visit' : 'virtual tour'} on <strong>{formData.preferredDate}</strong> ({formData.timeSlot === 'morning' ? '9:00 AM - 11:00 AM' : '2:00 PM - 4:00 PM'}) via email at <strong>{formData.email}</strong>.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate aria-label="Daycare tour booking and inquiry form">
              <div className="form-grid">
                {/* Parent Name */}
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Parent / Guardian Name <span className="required-star">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`form-input ${errors.name ? 'has-error' : ''}`}
                    value={formData.name}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    placeholder="e.g. Sarah Jenkins"
                  />
                  {errors.name && <span className="field-error-text">{errors.name}</span>}
                </div>

                {/* Email Address */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address <span className="required-star">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-input ${errors.email ? 'has-error' : ''}`}
                    value={formData.email}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    placeholder="e.g. sarah@example.com"
                  />
                  {errors.email && <span className="field-error-text">{errors.email}</span>}
                </div>

                {/* Phone Number */}
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number <span className="required-star">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className={`form-input ${errors.phone ? 'has-error' : ''}`}
                    value={formData.phone}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                    placeholder="e.g. (555) 123-4567"
                  />
                  {errors.phone && <span className="field-error-text">{errors.phone}</span>}
                </div>

                {/* Child Age */}
                <div className="form-group">
                  <label htmlFor="childAge" className="form-label">
                    Child's Current Age / Target Start Date
                  </label>
                  <input
                    type="text"
                    id="childAge"
                    name="childAge"
                    className="form-input"
                    value={formData.childAge}
                    onChange={handleChange}
                    placeholder="e.g. 18 months • Starting Sept 2026"
                  />
                </div>

                {/* Program Selection */}
                <div className="form-group">
                  <label htmlFor="program" className="form-label">
                    Program of Interest
                  </label>
                  <select
                    id="program"
                    name="program"
                    className="form-select"
                    value={formData.program}
                    onChange={handleChange}
                  >
                    {programsData.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.title} ({p.ageGroup})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Tour Format */}
                <div className="form-group">
                  <label htmlFor="tourType" className="form-label">
                    Tour Format
                  </label>
                  <select
                    id="tourType"
                    name="tourType"
                    className="form-select"
                    value={formData.tourType}
                    onChange={handleChange}
                  >
                    <option value="in-person">In-Person Campus Walkthrough</option>
                    <option value="virtual">Virtual Live Video Tour</option>
                  </select>
                </div>

                {/* Preferred Visit Date */}
                <div className="form-group">
                  <label htmlFor="preferredDate" className="form-label">
                    Preferred Visit Date <span className="required-star">*</span>
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    className={`form-input ${errors.preferredDate ? 'has-error' : ''}`}
                    value={formData.preferredDate}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.preferredDate}
                  />
                  {errors.preferredDate && <span className="field-error-text">{errors.preferredDate}</span>}
                </div>

                {/* Time Slot */}
                <div className="form-group">
                  <label htmlFor="timeSlot" className="form-label">
                    Preferred Time Window
                  </label>
                  <select
                    id="timeSlot"
                    name="timeSlot"
                    className="form-select"
                    value={formData.timeSlot}
                    onChange={handleChange}
                  >
                    <option value="morning">Morning Circle Time (9:00 AM - 11:00 AM)</option>
                    <option value="afternoon">Afternoon Play & Music (2:00 PM - 4:00 PM)</option>
                  </select>
                </div>

                {/* Message */}
                <div className="form-group form-group-full">
                  <label htmlFor="message" className="form-label">
                    Questions or Dietary/Routine Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Let us know any questions regarding open spots, sibling enrollment, or specific routine requirements..."
                  />
                </div>
              </div>

              <div className="mt-8 text-center">
                <button type="submit" className="btn btn-primary btn-lg">
                  Confirm Tour Booking Request &rarr;
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 4. Parent FAQ Accordion Section */}
      <section className="section-padding bg-surface" id="faq">
        <div className="container">
          <SectionTitle
            badge="Parent Answers"
            badgeVariant="sage"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about enrollment, daily communications, nutrition, and pickup."
          />

          <div className="faq-accordion-container">
            {faqsData.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div key={faq.id} className={`faq-accordion-item ${isOpen ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    className={`faq-accordion-header ${isOpen ? 'is-open' : ''}`}
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${faq.id}`}
                    id={`faq-header-${faq.id}`}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-icon-badge" aria-hidden="true">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${faq.id}`}
                    className="faq-panel"
                    hidden={!isOpen}
                    role="region"
                    aria-labelledby={`faq-header-${faq.id}`}
                  >
                    <p className="faq-panel-text">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
