'use client'

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PortfolioSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const books = [
    {
      id: 1,
      title: "Whispers of the Aegean",
      subtitle: "A Tale of Ancient Secrets",
      author: "Elena Markos",
      image: "https://placehold.co/600x900/364a52/eeeae7"
    },
    {
      id: 2,
      title: "Beneath Olive Groves",
      subtitle: "Stories from the Coast",
      author: "Marco Santini",
      image: "https://placehold.co/300x450/0f252f/eeeae7"
    },
    {
      id: 3,
      title: "Sailing Home",
      subtitle: "A Journey Across Seas",
      author: "Sofia Valencia",
      image: "https://placehold.co/300x450/4a6572/eeeae7"
    },
    {
      id: 4,
      title: "The Last Voyage",
      subtitle: "Chronicles of Discovery",
      author: "Andreas Dimitri",
      image: "https://placehold.co/300x450/2a3f47/eeeae7"
    },
    {
      id: 5,
      title: "Mediterranean Dreams",
      subtitle: "Poems of the Coast",
      author: "Isabella Romano",
      image: "https://placehold.co/300x450/364a52/eeeae7"
    },
    {
      id: 6,
      title: "Tides of Fortune",
      subtitle: "A Merchant's Tale",
      author: "Nicolas Laurent",
      image: "https://placehold.co/300x450/0f252f/eeeae7"
    },
    {
      id: 7,
      title: "The Lighthouse Keeper",
      subtitle: "Stories of Solitude",
      author: "Maria Kostas",
      image: "https://placehold.co/300x450/4a6572/eeeae7"
    },
    {
      id: 8,
      title: "Beyond the Horizon",
      subtitle: "Tales of Adventure",
      author: "Thomas Beaumont",
      image: "https://placehold.co/300x450/2a3f47/eeeae7"
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrevSlide();
      } else if (e.key === 'ArrowRight') {
        handleNextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, isAnimating]);

  const booksPerSlide = isMobile ? 1 : 4;
  const totalSlides = Math.ceil(books.length / booksPerSlide);

  const handleSlideChange = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 400);
  };

  const handleNextSlide = () => {
    if (isAnimating) return;
    const nextSlide = (currentSlide + 1) % totalSlides;
    handleSlideChange(nextSlide);
  };

  const handlePrevSlide = () => {
    if (isAnimating) return;
    const prevSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
    handleSlideChange(prevSlide);
  };

  const getCurrentBooks = () => {
    const startIndex = currentSlide * booksPerSlide;
    return books.slice(startIndex, startIndex + booksPerSlide);
  };

  return (
    <>
      <section className="portfolio-section">
        <div className="container">
          {/* Header */}
          <div className="section-header">
            <h1 className="fw-bold mb-3" style={{ color: '#0f252f', letterSpacing: '-0.5px' }}>
              FEATURED <span className="title-accent">COLLECTION</span>
            </h1>
            <h5 className="section-description">
              Explore our curated collection of Mediterranean literature, where each story captures the essence of sun-drenched shores and timeless tales.
            </h5>
          </div>

          {/* Books Slider */}
          <div className="slider-container">
            <button 
              className="nav-button nav-button-left" 
              onClick={handlePrevSlide}
              disabled={isAnimating}
              aria-label="Previous books"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="books-grid">
              {getCurrentBooks().map((book, index) => (
                <div 
                  key={`${book.id}-${currentSlide}-${index}`} 
                  className={`book-card ${isAnimating ? 'animating' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="book-image-wrapper">
                    <img 
                      src={book.image} 
                      alt={book.title}
                      className="book-image"
                    />
                    <div className="book-overlay">
                      <div className="book-info">
                        <h3 className="book-title">{book.title}</h3>
                        <p className="book-subtitle">{book.subtitle}</p>
                        <div className="book-divider"></div>
                        <p className="book-author">by {book.author}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button 
              className="nav-button nav-button-right" 
              onClick={handleNextSlide}
              disabled={isAnimating}
              aria-label="Next books"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Navigation Dots */}
          <div className="dots-container">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                disabled={isAnimating}
                className={`dot ${index === currentSlide ? 'dot-active' : ''}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .portfolio-section {
          padding: 4rem 1rem;
          background: linear-gradient(135deg, #eeeae7 0%, #d4cfc9 50%, #eeeae7 100%);
          position: relative;
          overflow: hidden;
        }

        .portfolio-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: repeating-linear-gradient(
            45deg,
            #0f252f 0px,
            #0f252f 1px,
            transparent 1px,
            transparent 12px
          );
          opacity: 0.03;
          pointer-events: none;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-title {
          color: #0f252f;
          letter-spacing: 1px;
          margin-bottom: 1rem;
        }

        .title-accent {
          color: #364a52;
          font-weight: 600;
        }

        .section-description {
          max-width: 600px;
          margin: 0 auto;
          color: #0f252f;
          opacity: 0.85;
          line-height: 1.6;
        }

        .slider-container {
          position: relative;
          padding: 0 3rem;
        }

        .nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(54, 74, 82, 0.9);
          color: #eeeae7;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
          backdrop-filter: blur(10px);
        }

        .nav-button:hover:not(:disabled) {
          background: #364a52;
          transform: translateY(-50%) scale(1.1);
        }

        .nav-button:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .nav-button-left {
          left: 0;
        }

        .nav-button-right {
          right: 0;
        }

        .books-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          min-height: 400px;
        }

        .book-card {
          opacity: 0;
          animation: fadeInUp 0.4s ease forwards;
        }

        .book-card.animating {
          animation: fadeOut 0.4s ease forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-20px);
          }
        }

        .book-image-wrapper {
          position: relative;
          aspect-ratio: 2/3;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(15, 37, 47, 0.2);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .book-image-wrapper:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(15, 37, 47, 0.3);
        }

        .book-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .book-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(15, 37, 47, 0.95) 0%, rgba(15, 37, 47, 0.7) 60%, transparent 100%);
          padding: 1.5rem 1rem;
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }

        .book-image-wrapper:hover .book-overlay {
          transform: translateY(0);
        }

        .book-info {
          color: #eeeae7;
        }

        .book-title {
          margin-bottom: 0.25rem;
          letter-spacing: 0.5px;
          color: #eeeae7;
        }

        .book-subtitle {
          font-style: italic;
          opacity: 0.9;
          margin-bottom: 0.75rem;
        }

        .book-divider {
          width: 40px;
          height: 2px;
          background: #eeeae7;
          opacity: 0.5;
          margin-bottom: 0.5rem;
        }

        .book-author {
          font-style: italic;
          opacity: 0.95;
          margin: 0;
        }

        .dots-container {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-top: 2.5rem;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #d4cfc9;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .dot:hover:not(:disabled) {
          background: #364a52;
          transform: scale(1.2);
        }

        .dot:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .dot-active {
          background: #364a52;
          transform: scale(1.3);
        }

        @media (max-width: 1024px) {
          .books-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }

          .slider-container {
            padding: 0 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .portfolio-section {
            padding: 3rem 1rem;
          }

          .section-header {
            margin-bottom: 2rem;
          }

          .books-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            min-height: 450px;
          }

          .slider-container {
            padding: 0 2rem;
          }

          .nav-button {
            width: 36px;
            height: 36px;
          }

          .book-image-wrapper {
            max-width: 300px;
            margin: 0 auto;
          }

          .book-overlay {
            transform: translateY(0);
          }
        }

        @media (max-width: 480px) {
          .portfolio-section {
            padding: 2rem 0.5rem;
          }

          .slider-container {
            padding: 0 1.5rem;
          }

          .nav-button {
            width: 32px;
            height: 32px;
          }

          .section-description {
            padding: 0 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default PortfolioSection;