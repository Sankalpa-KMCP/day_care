import React, { useState } from 'react';
import { siteConfig } from '../data/placeholderData';
import { programsData } from '../data/programs';
import { faqsData } from '../data/faqs';
import SectionTitle from '../components/SectionTitle';
import ImagePlaceholder from '../components/ImagePlaceholder';

/**
 * ContactPage component for Little Sunshine Daycare (Small Daycare Refactor)
 * Includes contact details, interactive inquiry form (demo submission), and Parent FAQ accordion.
 */
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childAge: '',
    program: 'infant-toddler',
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
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message or question.';
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
    setFormData({
      name: '',
      email: '',
      phone: '',
      childAge: '',
      program: 'infant-toddler',
      preferredDate: '',
      message: ''
    });
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
            <span className="section-badge">Get In Touch</span>
            <h1 className="page-title">Contact Us & Schedule a Visit</h1>
            <p className="page-subtitle">
              Have questions about our programs or want to tour our center? We’d love to welcome your family to {siteConfig.name}.
            </p>

            {/* Prototype Demo Banner */}
            <div className="demo-notice-banner mt-6" role="note">
              <span className="notice-icon">ℹ️</span>
              <span>
                <strong>Demonstration Notice:</strong> Form submissions and contact details on this page operate in frontend demonstration mode for prototype evaluation.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Contact Information & Operating Hours */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-2 contact-info-grid">
            {/* Contact Details Card */}
            <div className="contact-info-card">
              <h2 className="contact-card-title">
                <span aria-hidden="true">📞</span> Direct Contact Details
              </h2>
              <ul className="contact-detail-list">
                <li className="contact-detail-item">
                  <span className="contact-detail-icon" aria-hidden="true">📍</span>
                  <div className="contact-detail-content">
                    <strong>Facility Address</strong>
                    <address>{siteConfig.address}</address>
                  </div>
                </li>
                <li className="contact-detail-item">
                  <span className="contact-detail-icon" aria-hidden="true">☎️</span>
                  <div className="contact-detail-content">
                    <strong>Phone Line</strong>
                    <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}>
                      {siteConfig.phone}
                    </a>
                  </div>
                </li>
                <li className="contact-detail-item">
                  <span className="contact-detail-icon" aria-hidden="true">✉️</span>
                  <div className="contact-detail-content">
                    <strong>Email Address</strong>
                    <a href={`mailto:${siteConfig.email}`}>
                      {siteConfig.email}
                    </a>
                  </div>
                </li>
              </ul>
              <div className="mt-auto">
                <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="btn btn-primary btn-block">
                  Call Main Desk Now
                </a>
              </div>
            </div>

            {/* Hours & Location Card */}
            <div className="contact-hours-card">
              <h2 className="contact-card-title">
                <span aria-hidden="true">🕒</span> Hours & Location Preview
              </h2>
              <ul className="contact-detail-list">
                <li className="contact-detail-item">
                  <span className="contact-detail-icon" aria-hidden="true">⏰</span>
                  <div className="contact-detail-content">
                    <strong>Operating Hours</strong>
                    <span>{siteConfig.hours}</span>
                  </div>
                </li>
              </ul>
              <div className="mt-2">
                <ImagePlaceholder
                  title="Daycare Entryway & Parking Location"
                  aspect="16/9"
                  icon="🏫"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Inquiry & Visit Request Form */}
      <section className="section-padding bg-surface">
        <div className="container">
          <SectionTitle
            badge="Send A Message"
            title="Schedule a Tour or Inquiry"
            subtitle="Fill out the form below to request a tour time or ask a question."
          />

          <div className="contact-form-box">
            {isSubmitted && (
              <div className="demo-confirm-alert" role="status" aria-live="polite">
                <span className="demo-confirm-icon" aria-hidden="true">✅</span>
                <div>
                  <h3 className="demo-confirm-title">Inquiry Validated!</h3>
                  <p className="demo-confirm-desc">
                    <strong>Demo Notice:</strong> Thank you for testing the form! This is a demonstration website prototype, so your message was validated locally and no real email or personal data was transmitted.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate aria-label="Daycare contact and tour request form">
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
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    placeholder="e.g. Sarah Jenkins"
                  />
                  {errors.name && <span id="name-error" className="field-error-text">{errors.name}</span>}
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
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    placeholder="e.g. sarah@example.com"
                  />
                  {errors.email && <span id="email-error" className="field-error-text">{errors.email}</span>}
                </div>

                {/* Phone Number */}
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. (555) 000-0000"
                  />
                </div>

                {/* Child Age */}
                <div className="form-group">
                  <label htmlFor="childAge" className="form-label">
                    Child's Age / Stage
                  </label>
                  <input
                    type="text"
                    id="childAge"
                    name="childAge"
                    className="form-input"
                    value={formData.childAge}
                    onChange={handleChange}
                    placeholder="e.g. 18 months, 3 years"
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

                {/* Preferred Visit Date */}
                <div className="form-group">
                  <label htmlFor="preferredDate" className="form-label">
                    Preferred Visit Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    className="form-input"
                    value={formData.preferredDate}
                    onChange={handleChange}
                  />
                </div>

                {/* Message */}
                <div className="form-group form-group-full">
                  <label htmlFor="message" className="form-label">
                    Message / Questions <span className="required-star">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className={`form-textarea ${errors.message ? 'has-error' : ''}`}
                    value={formData.message}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    placeholder="Let us know any questions about availability or daily routines..."
                  />
                  {errors.message && <span id="message-error" className="field-error-text">{errors.message}</span>}
                </div>
              </div>

              <div className="mt-6 text-center">
                <button type="submit" className="btn btn-primary btn-lg">
                  Submit Inquiry (Demo)
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 4. Parent FAQ Accordion Section */}
      <section className="section-padding">
        <div className="container">
          <SectionTitle
            badge="Parent Information"
            title="Frequently Asked Questions"
            subtitle="Common questions about our daily routines, check-in, and parent communication."
          />

          <div className="faq-accordion-container">
            {faqsData.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div key={faq.id} className="faq-accordion-item">
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
