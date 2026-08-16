import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/placeholderData';
import { programsData } from '../data/programs';
import SectionTitle from '../components/SectionTitle';
import ProgramCard from '../components/ProgramCard';
import ImagePlaceholder from '../components/ImagePlaceholder';
import AgeCalculator from '../components/AgeCalculator';
import ScheduleTimeline from '../components/ScheduleTimeline';
import PhotoGalleryModal from '../components/PhotoGalleryModal';

export default function HomePage() {
  const [activeGalleryImage, setActiveGalleryImage] = useState(null);

  const trustPillars = [
    {
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
      title: 'Nurturing & Sunlit Classrooms',
      desc: 'Clean, secure, and thoughtfully designed spaces tailored for gentle exploration, sensory discovery, and comfort.'
    },
    {
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path>
        </svg>
      ),
      title: 'Play-Based Discovery',
      desc: 'Fostering creativity, motor coordination, and curiosity through hands-on art, music, building, and nature play.'
    },
    {
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      ),
      title: 'Individualized Attention',
      desc: 'Low 1:4 infant caregiver ratio ensuring each child receives warm, attentive care tailored to their unique pace.'
    },
    {
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      ),
      title: 'Daily Parent Partnership',
      desc: 'Daily digital updates, feeding/nap check-ins, and photos so you feel connected to every milestone.'
    }
  ];

  const galleryItems = [
    {
      src: '/images/preschool_art_play.jpg',
      title: 'Creative Arts & Craft Studio',
      desc: 'Bright studio area with natural light for tactile texture exploration, clay modeling, and watercolor art.',
      aspect: '4/3',
      tag: 'Creative Play'
    },
    {
      src: '/images/prek_reading_nook.jpg',
      title: 'Literacy & Storytime Reading Nook',
      desc: 'Cozy padded cushions and low open bookshelves filled with rich picture storybooks and phonics games.',
      aspect: '4/3',
      tag: 'Literacy Corner'
    },
    {
      src: '/images/infant_toddler_room.jpg',
      title: 'Infant & Toddler Sensory Suite',
      desc: 'Ultra-hygienic soft crawl zone with tactile activity mirrors, wooden puzzles, and dedicated quiet rest cribs.',
      aspect: '4/3',
      tag: 'Sensory Nursery'
    }
  ];

  const parentReviews = [
    {
      name: 'Jessica M.',
      child: 'Parent of Liam (2 yrs)',
      text: 'Little Sunshine has been an absolute blessing for our family. The staff treats Liam like family, and he comes home every day excited to tell us about sensory art and sandbox games.',
      stars: 5,
      avatar: 'JM'
    },
    {
      name: 'David & Hannah K.',
      child: 'Parents of Maya (4 yrs)',
      text: 'The Pre-K curriculum prepared Maya so well for kindergarten routines! Her self-confidence in emergent reading, sharing, and problem-solving has blossomed tremendously.',
      stars: 5,
      avatar: 'DK'
    },
    {
      name: 'Rachel S.',
      child: 'Parent of Noah (10 mos)',
      text: 'As a first-time parent transitioning back to work, I was anxious. The real-time daily updates, feeding logs, and warm infant room caregivers gave me total peace of mind.',
      stars: 5,
      avatar: 'RS'
    }
  ];

  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <section className="hero-section" aria-label="Welcome banner">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
              Warm & Caring Early Childhood Academy
            </span>
            <h1 className="hero-title">
              Where Little Minds Bloom & Big Adventures Begin
            </h1>
            <p className="hero-subtitle">
              A loving, accredited daycare community where infants, toddlers, and preschool learners explore, play, and build lifelong confidence in a safe environment.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Schedule a Visit Today
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
              <Link to="/programs" className="btn btn-outline btn-lg">
                Explore Programs &rarr;
              </Link>
            </div>

            <div className="hero-trust-row">
              <div className="hero-trust-item">
                <div className="trust-check-bubble" aria-hidden="true">
                  <svg className="trust-check-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>State Licensed & Certified</span>
              </div>
              <div className="hero-trust-item">
                <div className="trust-check-bubble" aria-hidden="true">
                  <svg className="trust-check-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>Low 1:4 Care Ratio</span>
              </div>
              <div className="hero-trust-item">
                <div className="trust-check-bubble" aria-hidden="true">
                  <svg className="trust-check-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>4.9★ Parent Rating</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <div className="hero-image-backdrop" aria-hidden="true"></div>
              <div className="hero-image-frame">
                <img
                  src="/images/hero_daycare_play.jpg"
                  alt="Children playing with wooden blocks in a sunlit modern daycare room"
                  className="hero-main-img"
                />
                <div className="hero-floating-card">
                  <svg className="floating-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <div className="floating-text">
                    <strong>98% Parent Satisfaction</strong>
                    <span>Trusted by 150+ Local Families</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why Choose Us */}
      <section className="section-padding bg-surface">
        <div className="container">
          <SectionTitle
            badge="Why Families Choose Us"
            title="A Nurturing Early Childhood Foundation"
            subtitle="We create a warm, predictable daily flow focused on curiosity, friendship, health, and joyful exploration."
          />
          <div className="grid grid-4 trust-grid">
            {trustPillars.map((pillar, index) => (
              <div key={index} className="trust-card">
                <div className="trust-icon-bubble" aria-hidden="true">{pillar.iconSvg}</div>
                <h3 className="trust-card-title">{pillar.title}</h3>
                <p className="trust-card-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Interactive Age Calculator Widget */}
      <section className="section-padding bg-surface-muted">
        <div className="container">
          <AgeCalculator />
        </div>
      </section>

      {/* 4. Programs Preview */}
      <section className="section-padding bg-surface">
        <div className="container">
          <SectionTitle
            badge="Our Educational Programs"
            badgeVariant="terracotta"
            title="Tailored Care & Learning for Every Stage"
            subtitle="From gentle infant care to structured pre-K readiness, our curriculum adapts to your child's milestones."
          />
          <div className="grid grid-3 programs-grid">
            {programsData.slice(0, 3).map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/programs" className="btn btn-secondary btn-lg">
              View Complete Programs & Curriculum &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Interactive Schedule & Daily Routine */}
      <section className="section-padding bg-surface-muted">
        <div className="container">
          <ScheduleTimeline />
        </div>
      </section>

      {/* 6. Environment Preview & Interactive Photo Lightbox */}
      <section className="section-padding bg-surface">
        <div className="container">
          <SectionTitle
            badge="Campus Environment"
            badgeVariant="sage"
            title="Designed for Joy, Safety & Creative Play"
            subtitle="Click any learning space to explore our bright classrooms, quiet reading nooks, and sensory areas."
          />
          <div className="grid grid-3 environment-grid">
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                className="gallery-card-clickable"
                onClick={() => setActiveGalleryImage(item)}
                role="button"
                tabIndex={0}
                aria-label={`Open preview for ${item.title}`}
              >
                <ImagePlaceholder
                  src={item.src}
                  alt={item.title}
                  title={item.title}
                  aspect={item.aspect}
                  tag={item.tag}
                />
                <div className="gallery-card-overlay">
                  <span>Explore Room Features 🔍</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Parent Reviews */}
      <section className="section-padding bg-surface-muted">
        <div className="container">
          <SectionTitle
            badge="Parent Testimonials"
            badgeVariant="amber"
            title="Loved by Parents & Children Alike"
            subtitle={`Hear what local families have to say about their experience at ${siteConfig.name}.`}
          />
          <div className="grid grid-3 reviews-grid">
            {parentReviews.map((rev, idx) => (
              <div key={idx} className="review-card">
                <div className="review-stars">{'★'.repeat(rev.stars)}</div>
                <p className="review-quote">"{rev.text}"</p>
                <div className="review-author-row">
                  <div className="review-avatar">{rev.avatar}</div>
                  <div>
                    <h4 className="review-author-name">{rev.name}</h4>
                    <span className="review-child-tag">{rev.child}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="section-padding cta-section">
        <div className="container">
          <div className="cta-box">
            <span className="cta-badge">Schedule A Visit</span>
            <h2 className="cta-title">Ready to Experience {siteConfig.name}?</h2>
            <p className="cta-desc">
              We invite you to tour our campus, meet our passionate certified educators, and see our sunlit classrooms in person.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Book a Tour Today
              </Link>
              <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="btn btn-outline-white btn-lg">
                Call Main Desk: {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Lightbox Modal */}
      <PhotoGalleryModal
        activeImage={activeGalleryImage}
        onClose={() => setActiveGalleryImage(null)}
      />
    </div>
  );
}
