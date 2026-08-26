import { useEffect, useRef, useState } from 'react'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import { business, meta } from '../data/site.js'
import PageHero from '../components/PageHero.jsx'
import ButtonLink from '../components/ui/ButtonLink.jsx'
import Reveal from '../components/Reveal.jsx'
import MapEmbed from '../components/MapEmbed.jsx'
import { IconPhone } from '../components/decor.jsx'

const initialValues = {
  name: '',
  email: '',
  phone: '',
  age: '',
  care: 'Not sure / General inquiry',
  start: '',
  message: '',
}

const careOptions = ['Daycare', 'After School Care', 'Not sure / General inquiry']

const nextSteps = [
  {
    title: 'We receive your note',
    text: 'Your inquiry goes straight to our team at the centre.',
  },
  {
    title: 'We reach out',
    text: 'We’ll get back to you as soon as we can during opening hours.',
  },
  {
    title: 'You come visit',
    text: 'Meet us, see the rooms and ask every question you have.',
  },
]

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please tell us your name.'
  if (!values.email.trim()) {
    errors.email = 'Please add an email so we can reply.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'That email doesn’t look quite right.'
  }
  if (values.phone.trim() && !/^[\d\s()+.-]{7,}$/.test(values.phone.trim())) {
    errors.phone = 'That phone number doesn’t look quite right.'
  }
  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = 'A sentence or two helps us help you.'
  }
  return errors
}

function Field({ id, label, optional = false, error, children }) {
  return (
    <div className={`field${error ? ' field--error' : ''}`}>
      <label htmlFor={id}>
        {label} {optional && <span className="field-optional">(optional)</span>}
      </label>
      {children}
      {error && (
        <p className="field-error" id={`${id}-error`} role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

export default function Contact() {
  useDocumentMeta(meta.contact.title, meta.contact.description)
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const successRef = useRef(null)

  useEffect(() => {
    if (submitted) successRef.current?.focus()
  }, [submitted])

  const setField = (name) => (e) => {
    const next = { ...values, [name]: e.target.value }
    setValues(next)
    if (errors[name]) setErrors({ ...errors, [name]: undefined })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    const firstError = Object.keys(nextErrors)[0]
    if (firstError) {
      document.getElementById(firstError)?.focus()
    } else {
      setSubmitted(true)
    }
  }

  return (
    <>
      <PageHero
        kicker="Contact"
        title={
          <>
            Let’s talk about <em>your little one.</em>
          </>
        }
        lead="Call us, drop by during opening hours, or send an inquiry below — whichever is easiest for you."
      />

      <section className="contact-info-section">
        <div className="container contact-info-grid">
          <div className="info-cell">
            <p className="info-label">Call</p>
            <a href={business.phone.tel} className="info-big">
              {business.phone.friendly}
            </a>
            <p className="info-sub">We’re happy to answer questions over the phone.</p>
          </div>
          <div className="info-cell">
            <p className="info-label">Visit</p>
            <p className="info-big info-big--sm">{business.address.street}</p>
            <p className="info-sub">
              {business.address.city}, {business.address.province} {business.address.postalCode}
            </p>
          </div>
          <div className="info-cell">
            <p className="info-label">Hours</p>
            <p className="info-big info-big--sm">{business.hours.time}</p>
            <p className="info-sub">{business.hours.days}</p>
          </div>
        </div>
      </section>

      <section className="section contact-main-section">
        <div className="container contact-grid">
          <Reveal className="contact-intro">
            <h2 className="section-title">
              Send us an <em>inquiry.</em>
            </h2>
            <p className="lead">
              Tell us a little about your family and what you’re looking for. We’ll reply with
              availability, program details or anything else you’d like to know.
            </p>
            <ol className="steps-list">
              {nextSteps.map((step, i) => (
                <li key={step.title}>
                  <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="contact-quick">
              <p>Prefer to talk right now?</p>
              <ButtonLink href={business.phone.tel}>
                <IconPhone size={16} />
                Call {business.phone.friendly}
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={130} className="form-card" aria-live="polite">
            {submitted ? (
              <div className="form-success">
                <span className="success-icon" aria-hidden="true">
                  ✓
                </span>
                <h2 ref={successRef} tabIndex={-1}>
                  Thanks, {values.name.split(' ')[0]}!
                </h2>
                <p>
                  Your inquiry about <strong>{values.care}</strong> has been noted. This demo form
                  isn’t connected to email yet — in the meantime, reach us directly at{' '}
                  <a href={business.phone.tel}>{business.phone.friendly}</a>.
                </p>
                <button
                  type="button"
                  className="text-link form-reset"
                  onClick={() => {
                    setValues(initialValues)
                    setSubmitted(false)
                  }}
                >
                  ← Write another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <div className="form-grid">
                  <Field id="name" label="Parent / Guardian Name" error={errors.name}>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={values.name}
                      onChange={setField('name')}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                  </Field>
                  <Field id="email" label="Email" error={errors.email}>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={setField('email')}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                  </Field>
                  <Field id="phone" label="Phone" optional error={errors.phone}>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="e.g. 780 555 0123"
                      value={values.phone}
                      onChange={setField('phone')}
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                  </Field>
                  <Field id="age" label="Child’s Age" optional>
                    <input
                      id="age"
                      name="age"
                      type="number"
                      min="0"
                      max="17"
                      placeholder="e.g. 3"
                      value={values.age}
                      onChange={setField('age')}
                    />
                  </Field>
                  <Field id="care" label="Care Needed">
                    <select id="care" name="care" value={values.care} onChange={setField('care')}>
                      {careOptions.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </Field>
                  <Field id="start" label="Desired Start Date" optional>
                    <input
                      id="start"
                      name="start"
                      type="date"
                      value={values.start}
                      onChange={setField('start')}
                    />
                  </Field>
                  <div className="form-span2">
                    <Field id="message" label="Message" error={errors.message}>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Tell us a little about your child and what days/times you need…"
                        value={values.message}
                        onChange={setField('message')}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      />
                    </Field>
                  </div>
                </div>
                <button type="submit" className="btn btn--primary form-submit">
                  <span>Send Inquiry</span>
                  <span className="btn__arrow" aria-hidden="true">
                    →
                  </span>
                </button>
                <p className="form-fineprint">
                  Prefer not to fill in forms? Just call {business.phone.friendly} — we’re around
                  weekdays, 7 AM – 6 PM.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <section className="section contact-map-section">
        <div className="container">
          <MapEmbed className="contact-map" />
          <div className="map-actions btn-row btn-row--center">
            <ButtonLink href={business.directionsUrl} target="_blank" rel="noreferrer" variant="ghost" arrow>
              Get Directions
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
