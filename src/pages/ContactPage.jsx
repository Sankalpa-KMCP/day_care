import React, { useRef, useState } from 'react';
import Reveal from '../components/Reveal';
import { programsData } from '../data/programs';
import { siteConfig } from '../data/placeholderData';
import { editorialImage } from '../utils/assetPath';

const questions = [
  ['Is The Little Grove open yet?', 'Not yet. This is a future-business concept. Dates, location, licensing, staffing, and enrollment details are still being developed.'],
  ['What happens when I submit this form?', 'This prototype validates the form and shows a confirmation on this page. It does not send, store, or share your information.'],
  ['Are the people and spaces on the site real?', 'No. Generated images and sample profiles are clearly labeled and illustrate the intended atmosphere, not an existing team or facility.'],
  ['Can I ask about a particular age group?', 'Yes. Choose the closest program and use the note field to share your child’s age, schedule, and what matters most to your family.'],
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', childAge: '', program: programsData[0].id, message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const successRef = useRef(null);

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
    setSubmitted(false);
  };

  const submit = (event) => {
    event.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = 'Please add your name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Please enter a valid email address.';
    setErrors(next);
    setSubmitted(false);

    const firstInvalidField = ['name', 'email'].find((field) => next[field]);
    if (firstInvalidField) {
      const fieldRefs = { name: nameRef, email: emailRef };
      fieldRefs[firstInvalidField].current?.focus();
      return;
    }

    setSubmitted(true);
    window.requestAnimationFrame(() => successRef.current?.focus());
  };

  const errorCount = Object.values(errors).filter(Boolean).length;

  return (
    <div className="editorial-page contact-new luxury-inner contact-luxury storybook-page contact-storybook" data-page="contact">
      <header className="inner-hero contact-hero luxury-inner-hero storybook-hero">
        <div className="container inner-hero-grid">
          <div><p className="kicker">Opening plans in progress</p><h1>Help us understand the care families are looking for.</h1></div>
          <div className="inner-deck"><p>This is a concept-stage inquiry—not a tour booking. Share what matters to you and see how the future experience could work.</p><p className="concept-note">Demo form · nothing is transmitted or stored.</p></div>
        </div>
        <svg className="botanical-path botanical-path-contact" viewBox="0 0 480 160" aria-hidden="true" focusable="false">
          <path d="M-12 146C74 132 86 64 162 78s74 69 152 39 73-87 178-75" />
          <path d="M104 96c-22-23-46-20-58-4 24 7 42 7 58 4Zm173 30c-17-27-41-31-58-18 20 13 38 19 58 18Zm103-37c9-28 30-39 50-32-13 20-28 31-50 32Z" />
        </svg>
      </header>

      <Reveal as="section" className="section-editorial inquiry-section luxury-inquiry">
        <div className="container inquiry-grid">
          <aside className="inquiry-aside storybook-panel"><div><p className="kicker light">A future hello</p><h2>Begin with the real questions.</h2><p>Tell us about rhythm, transitions, food, naps, outdoor time, or anything else that shapes a good day.</p></div><figure><img src={editorialImage('preschool-art.webp')} alt="Illustrative children making art together at a classroom table" width="1400" height="1050" /><figcaption>Illustrative concept image</figcaption></figure><dl><div><dt>Status</dt><dd>{siteConfig.statusLabel}</dd></div><div><dt>Location</dt><dd>{siteConfig.address}</dd></div><div><dt>Planned hours</dt><dd>{siteConfig.hours.replace('Planned hours · ', '')}</dd></div><div><dt>Demo email</dt><dd><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></dd></div></dl></aside>
          <div className="inquiry-form-wrap postcard-form-wrap">
            <div className="demo-disclosure" id="demo-form-disclosure">
              <p className="eyebrow">A safe-to-try prototype</p>
              <p>Explore the inquiry below. Submitting only previews a confirmation on this page; your answers never leave this browser and are not stored.</p>
            </div>
            {errorCount > 0 && <div className="form-error-summary" role="alert"><strong>There {errorCount === 1 ? 'is one detail' : `are ${errorCount} details`} to check.</strong><p>We moved focus to the first field that needs attention.</p></div>}
            {submitted && <div className="demo-success" ref={successRef} role="status" aria-live="polite" tabIndex="-1"><strong>That worked—inside the demo.</strong><p>Thanks, {form.name.trim()}. No information was sent or saved.</p></div>}
            <form className="inquiry-form postcard-form" onSubmit={submit} noValidate aria-label="Concept-stage family interest form" aria-describedby="demo-form-disclosure form-submit-note">
              <div className="field-row"><div className="field"><label htmlFor="name">Your name <span aria-hidden="true">*</span></label><input ref={nameRef} id="name" name="name" autoComplete="name" required value={form.name} onChange={update} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} />{errors.name && <small className="field-error" id="name-error">{errors.name}</small>}</div><div className="field"><label htmlFor="email">Email <span aria-hidden="true">*</span></label><input ref={emailRef} id="email" name="email" type="email" inputMode="email" autoComplete="email" required value={form.email} onChange={update} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />{errors.email && <small className="field-error" id="email-error">{errors.email}</small>}</div></div>
              <div className="field-row"><div className="field"><label htmlFor="childAge">Child’s age or expected start</label><input id="childAge" name="childAge" autoComplete="off" value={form.childAge} onChange={update} placeholder="For example: 2 years, autumn 2027" /></div><div className="field"><label htmlFor="program">Room of interest</label><select id="program" name="program" autoComplete="off" value={form.program} onChange={update}>{programsData.map((program) => <option value={program.id} key={program.id}>{program.title} · {program.ageGroup}</option>)}</select></div></div>
              <div className="field"><label htmlFor="message">What would a good day of care feel like?</label><textarea id="message" name="message" rows="5" autoComplete="off" value={form.message} onChange={update} placeholder="There is no perfect answer. Tell us what matters." /></div>
              <div className="form-foot"><p id="form-submit-note">Prototype only. This button creates no network request.</p><button className="button-solid" type="submit">Explore the demo inquiry</button></div>
            </form>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section-editorial faq-new luxury-faq" id="faq">
        <div className="container faq-grid"><div><p className="kicker">Clear answers</p><h2>Before you ask.</h2></div><div className="faq-list">{questions.map(([question, answer], index) => <article key={question} className={openFaq === index ? 'is-open' : ''}><button id={`question-${index}`} type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index} aria-controls={`answer-${index}`}><span>{question}</span><span aria-hidden="true">{openFaq === index ? '−' : '+'}</span></button><div id={`answer-${index}`} role="region" aria-labelledby={`question-${index}`} hidden={openFaq !== index}><p>{answer}</p></div></article>)}</div></div>
      </Reveal>
    </div>
  );
}
