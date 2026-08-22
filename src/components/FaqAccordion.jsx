import React, { useId, useState } from 'react';
import { faqsData, faqCategories } from '../data/faqs';

export default function FaqAccordion({ initialCategory = 'all' }) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const idPrefix = useId();

  const filteredFaqs = faqsData.filter((faq) => {
    const matchesCategory =
      selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch =
      !searchQuery.trim() ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  return (
    <div className="faq-searchable-block" id="faq-searchable-block">
      <div className="faq-block-header">
        <span className="eyebrow-badge">Parent Questions & Answers</span>
        <h2>Everything You Want to Know About The Little Grove</h2>
        <p className="faq-deck">
          Clear, honest information about our rhythm, meals, staffing, and enrollment.
        </p>

        {/* Search Input */}
        <div className="faq-search-wrapper">
          <label htmlFor={`${idPrefix}-search`} className="visually-hidden">
            Search questions
          </label>
          <div className="faq-search-input-box">
            <span className="search-icon" aria-hidden="true">🔍</span>
            <input
              id={`${idPrefix}-search`}
              type="search"
              className="faq-search-field"
              placeholder="Search by keyword (e.g. meals, naps, ratios, tours, tuition)..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setOpenFaqIndex(0);
              }}
            />
            {searchQuery && (
              <button
                type="button"
                className="faq-clear-search-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Pills */}
        <div className="faq-category-pills" role="tablist" aria-label="FAQ Categories">
          {faqCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat.id}
              className={`faq-cat-pill ${selectedCategory === cat.id ? 'is-active' : ''}`}
              onClick={() => {
                setSelectedCategory(cat.id);
                setOpenFaqIndex(0);
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion Results */}
      <div className="faq-accordion-container">
        {filteredFaqs.length === 0 ? (
          <div className="faq-empty-state">
            <p>No questions matched <strong>"{searchQuery}"</strong> in this category.</p>
            <button
              type="button"
              className="button-ghost"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
            >
              Reset filters & search
            </button>
          </div>
        ) : (
          <div className="faq-items-list">
            <div className="faq-results-count" aria-live="polite">
              Showing {filteredFaqs.length} {filteredFaqs.length === 1 ? 'question' : 'questions'}
            </div>
            {filteredFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              const questionId = `${idPrefix}-q-${index}`;
              const answerId = `${idPrefix}-a-${index}`;

              return (
                <article
                  key={faq.id}
                  className={`faq-accordion-row ${isOpen ? 'is-expanded' : ''}`}
                >
                  <button
                    id={questionId}
                    type="button"
                    className="faq-question-btn"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                  >
                    <span className="faq-question-text">{faq.question}</span>
                    <span className="faq-toggle-icon" aria-hidden="true">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    className="faq-answer-panel"
                    hidden={!isOpen}
                  >
                    <div className="faq-answer-inner">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
