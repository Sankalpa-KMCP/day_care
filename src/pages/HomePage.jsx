import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/placeholderData';
import { programsData } from '../data/programs';
import { activitiesData } from '../data/activities';
import { testimonialsData, testimonialMeta } from '../data/testimonials';
import SectionTitle from '../components/SectionTitle';
import ProgramCard from '../components/ProgramCard';
import TestimonialCard from '../components/TestimonialCard';
import ImagePlaceholder from '../components/ImagePlaceholder';

export default function HomePage() {
  const trustPillars = [
    {
      icon: '🛡️',
      title: 'Safe & Hygienic Facilities',
      desc: 'Clean, secure, and child-proofed environments tailored for every developmental age.'
    },
    {
      icon: '🎨',
      title: 'Play-Based Curriculum',
      desc: 'Fostering creativity, problem-solving, and motor skills through active guided discovery.'
    },
    {
      icon: '❤️',
      title: 'Caring & Dedicated Team',
      desc: 'Experienced educators committed to nurturing each child’s emotional and cognitive growth.'
    },
    {
      icon: '💬',
      title: 'Parent Peace of Mind',
      desc: 'Open communication and daily check-ins so you stay connected to your child’s milestone moments.'
    }
  ];

  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <section className="hero-section" aria-label="Welcome banner">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-badge">Welcome to {siteConfig.name}</span>
            <h1 className="hero-title">
              Nurturing Young Minds with Care, Play & Discovery
            </h1>
            <p className="hero-subtitle">
              A warm, vibrant, and engaging early learning daycare center where every child is empowered to explore, learn, and grow with confidence.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Schedule a Visit
              </Link>
              <Link to="/programs" className="btn btn-outline btn-lg">
                Explore Programs
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <ImagePlaceholder
              title="Interactive Daycare Play & Learning Environment"
              aspect="4/3"
              icon="☀️"
            />
          </div>
        </div>
      </section>

      {/* 2. Trust & Key Benefits Section */}
      <section className="section-padding bg-surface">
        <div className="container">
          <SectionTitle
            badge="Why Families Choose Us"
            title="A Safe, Caring Place to Learn & Grow"
            subtitle="We provide a balanced early childhood foundation designed to nurture curiosity, friendship, and physical development."
          />
          <div className="grid grid-4 trust-grid">
            {trustPillars.map((pillar, index) => (
              <div key={index} className="trust-card">
                <div className="trust-icon" aria-hidden="true">{pillar.icon}</div>
                <h3 className="trust-card-title">{pillar.title}</h3>
                <p className="trust-card-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About Preview Section */}
      <section className="section-padding">
        <div className="container grid grid-2 items-center about-preview-grid">
          <div className="about-visual">
            <ImagePlaceholder
              title="Creative Classroom Learning Corner"
              aspect="16/10"
              icon="🏫"
            />
          </div>
          <div className="about-preview-content">
            <SectionTitle
              badge="About Our Center"
              title="Building Confidence & Curiosity Every Day"
              centered={false}
            />
            <p className="section-text">
              At {siteConfig.name}, we believe early childhood is a time of incredible discovery. Our programs blend structured early learning with imaginative play, supporting your child's social, emotional, and cognitive milestones.
            </p>
            <ul className="about-check-list">
              <li><span>✓</span> Age-appropriate learning zones and play equipment</li>
              <li><span>✓</span> Focus on kindness, sharing, and social confidence</li>
              <li><span>✓</span> Balanced daily routines with rest, play, and learning</li>
            </ul>
            <div className="mt-6">
              <Link to="/about" className="btn btn-primary">
                Learn More About Us &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Programs Preview Section */}
      <section className="section-padding bg-surface">
        <div className="container">
          <SectionTitle
            badge="Our Programs"
            title="Tailored Learning for Every Age"
            subtitle="From infants to pre-kindergarteners, our programs adapt to your child’s unique developmental stage."
          />
          <div className="grid grid-4 programs-grid">
            {programsData.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/programs" className="btn btn-secondary btn-lg">
              View Full Program Details &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Activities Preview Section */}
      <section className="section-padding">
        <div className="container">
          <SectionTitle
            badge="Daily Enrichment"
            title="Engaging Activities for Curious Minds"
            subtitle="Every day offers new opportunities to experiment with art, music, nature, and hands-on puzzles."
          />
          <div className="grid grid-4 activities-grid">
            {activitiesData.slice(0, 4).map((activity) => (
              <div key={activity.id} className="activity-card">
                <span className="activity-icon" aria-hidden="true">{activity.icon}</span>
                <h3 className="activity-title">{activity.title}</h3>
                <span className="activity-category">{activity.category}</span>
                <p className="activity-desc">{activity.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/activities" className="btn btn-primary">
              Discover Daily Activities & Schedule &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Facility & Environment Visual Section */}
      <section className="section-padding bg-surface">
        <div className="container">
          <div className="environment-banner-box">
            <div className="environment-content">
              <span className="section-badge">Our Space</span>
              <h2>Designed for Safe Exploration & Joy</h2>
              <p>
                Our facility features bright, naturally lit classrooms, dedicated quiet rest areas, and a spacious outdoor playground equipped for active, healthy play.
              </p>
              <div className="environment-tags">
                <span>Bright Classrooms</span>
                <span>Outdoor Playground</span>
                <span>Sensory Play Area</span>
                <span>Rest Corners</span>
              </div>
            </div>
            <div className="environment-visual">
              <ImagePlaceholder
                title="Outdoor Playground & Garden Area"
                aspect="16/9"
                icon="🌳"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Parent Testimonials Section */}
      <section className="section-padding">
        <div className="container">
          <SectionTitle
            badge="Parent Feedback"
            title="What Families Experience"
            subtitle="Read prototype feedback illustrating family experiences at our daycare center."
          />
          
          {/* Explicit Demo Disclaimer Notice */}
          <div className="demo-notice-banner" role="note">
            <span className="notice-icon">ℹ️</span>
            <span>{testimonialMeta.disclaimer}</span>
          </div>

          <div className="grid grid-3 testimonials-grid mt-6">
            {testimonialsData.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final Call to Action */}
      <section className="section-padding cta-section">
        <div className="container">
          <div className="cta-box">
            <span className="cta-badge">Schedule A Visit Today</span>
            <h2 className="cta-title">Ready to Experience {siteConfig.name}?</h2>
            <p className="cta-desc">
              We invite you to tour our center, meet our friendly educators, and learn how we can support your child's early learning journey.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Schedule a Visit Now
              </Link>
              <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="btn btn-outline-white btn-lg">
                Call Us: {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
