'use client'

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';

const VideoBookSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<any>(null);

  const videoBooks = [
    {
      id: 1,
      title: "The House You Build Within",
      subtitle: "A Guide to Building Your Inner Self",
      author: "Liam Green",
      image: "/portfolio_images/1_converted.avif",
      youtubeUrl: "https://youtu.be/rqlW57_y7qs"
    },
    {
      id: 2,
      title: "Marshall's Keep",
      subtitle: "Love is a Fortress.",
      author: "Ryan Marshall",
      image: "/portfolio_images/2_converted.avif",
      youtubeUrl: "https://www.youtu.be/NVjCwgGM3MY"
    },
    {
      id: 3,
      title: "The Story of a Thief",
      subtitle: "Tony was born into a family of thieves. His life seems predestined, until his girlfriend Eva disappears suddenly.",
      author: "Hristina BloomField",
      image: "/portfolio_images/storyofathief.png",
      youtubeUrl: "https://www.youtu.be/JpaN6ZXxv6M"
    },
    {
      id: 4,
      title: "Beyond The Resume:",
      subtitle: "A 40-Year Framework for the Modern Professional.",
      author: "Joshua Sciascia",
      image: "/portfolio_images/4_converted.avif",
      youtubeUrl: "https://youtu.be/oDq5KDsTbY8"
    },
    {
      id: 5,
      title: "The Last Good Liar",
      subtitle: "Followed by Millions. Hunted by One.",
      author: "Clara Monet",
      image: "/portfolio_images/thelastgoodliar_converted.avif",
      youtubeUrl: "https://youtu.be/TSLXxeWuMlw"
    },
    {
      id: 6,
      title: "Before I Cheat",
      subtitle: "Nolan must haunt Harriet, but realizes she is not the person needing redemption, leading to a forbidden romance.",
      author: "Meek White",
      image: "/portfolio_images/cheat.png",
      youtubeUrl: "https://youtu.be/PgprsepKhR0"
    },
    {
      id: 7,
      title: "PAX: Journey Home",
      subtitle: "Both boy and fox find themselves on journeys toward home, healing – and each other. A breathtaking novel about chosen families and the healing power of love.",
      author: "Jon Klassen",
      image: "/portfolio_images/PAX.png",
      youtubeUrl: "https://youtu.be/XNcFc5lmHuA"
    },
    {
      id: 8,
      title: "The Librarian of Lost Things",
      subtitle: "Every object holds a memory. Some are deadly.",
      author: "Jennifer Delmont",
      image: "/portfolio_images/6_converted.avif",
      youtubeUrl: "https://youtu.be/LIQMaH_zDu4"
    },
    {
      id: 9,
      title: "The Last Station to Port Vance",
      subtitle: "Not all journeys have a destination. Some only have an end.",
      author: "Ryan Marshall",
      image: "/portfolio_images/portvance.png",
      youtubeUrl: "https://youtu.be/2w0_zKsHW_c"
    },
    {
      id: 10,
      title: "BILLI",
      subtitle: "Discover the extraordinary journey of Alma Billi Jampolli, a woman whose life was forged in the fires of the Great Depression and World War II. ",
      author: "Robert K. Bateman",
      image: "/portfolio_images/Billi_cover.jpg.jpeg",
      youtubeUrl: "https://youtu.be/adfKr2No3wQ"
    },
    {
      id: 11,
      title: "Exiled",
      subtitle: "In a world of chaos and betrayal, one boy must fight to survive.",
      author: "Joaquin Lopez",
      image: "/portfolio_images/exiled.png",
      youtubeUrl: "https://youtu.be/P9_3sMbVBoI"
    },
    {
      id: 12,
      title: "The Buried",
      subtitle: "The world above us is gone. But we, the chosen few, have survived.",
      author: "Melissa Grey",
      image: "/portfolio_images/buried.png",
      youtubeUrl: "https://youtu.be/qq_69yHaFI4"
    }, 
  ];

  // Convert YouTube URL to embed format
  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split('/').pop()?.split('?')[0];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  };

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
      if (isModalOpen) {
        if (e.key === 'Escape') {
          closeModal();
        }
      } else {
        if (e.key === 'ArrowLeft') {
          handlePrevSlide();
        } else if (e.key === 'ArrowRight') {
          handleNextSlide();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, isAnimating, isModalOpen]);

  const booksPerSlide = isMobile ? 1 : 4;
  const totalSlides = Math.ceil(videoBooks.length / booksPerSlide);

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
    return videoBooks.slice(startIndex, startIndex + booksPerSlide);
  };

  const openModal = (videoBook: any) => {
    setCurrentVideo(videoBook);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo(null);
  };

  return (
    <>
      <section className="videobook-section">
        <div className="videobook-container">
          {/* Header */}
          <div className="videobook-section-header">
            <h1 className="fw-bold mb-3" style={{ color: '#0f252f', letterSpacing: '-0.5px' }}>
              VIDEO BOOK <span className="videobook-title-accent">TRAILERS</span>
            </h1>
            <h5 className="videobook-section-description">
              Experience captivating book trailers that bring stories to life through stunning visuals and compelling narratives.
            </h5>
          </div>

          {/* Video Books Slider */}
          <div className="videobook-slider-container">
            <button 
              className="videobook-nav-button videobook-nav-button-left" 
              onClick={handlePrevSlide}
              disabled={isAnimating}
              aria-label="Previous video trailers"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="videobook-books-grid">
              {getCurrentBooks().map((videoBook, index) => (
                <div 
                  key={videoBook.id}
                  className={`videobook-book-card ${isAnimating ? 'videobook-animating' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="videobook-book-image-wrapper">
                    <img 
                      src={videoBook.image} 
                      alt={videoBook.title}
                      className="videobook-book-image"
                    />
                    <div className="videobook-play-overlay">
                      <button 
                        className="videobook-play-button"
                        onClick={() => openModal(videoBook)}
                        aria-label={`Watch trailer for ${videoBook.title}`}
                      >
                        <Play size={48} fill="#eeeae7" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button 
              className="videobook-nav-button videobook-nav-button-right" 
              onClick={handleNextSlide}
              disabled={isAnimating}
              aria-label="Next video trailers"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Navigation Dots */}
          <div className="videobook-dots-container">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                disabled={isAnimating}
                className={`videobook-dot ${index === currentSlide ? 'videobook-dot-active' : ''}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isModalOpen && currentVideo && (
        <div className="videobook-modal-overlay" onClick={closeModal}>
          <div className="videobook-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="videobook-modal-close" onClick={closeModal} aria-label="Close modal">
              <X size={24} />
            </button>

            <div className="videobook-modal-header">
              <h2 className="videobook-modal-title">{currentVideo.title}</h2>
              <p className="videobook-modal-subtitle">{currentVideo.subtitle}</p>
              <p className="videobook-modal-author">by {currentVideo.author}</p>
            </div>

            <div className="videobook-modal-video">
              <div className="videobook-video-wrapper">
                <iframe
                  src={getYouTubeEmbedUrl(currentVideo.youtubeUrl)}
                  title={currentVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="videobook-iframe"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .videobook-section {
          padding: 4rem 1rem;
          background: linear-gradient(135deg, #eeeae7 0%, #d4cfc9 50%, #eeeae7 100%);
          position: relative;
          overflow: hidden;
        }

        .videobook-section::before {
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

        .videobook-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .videobook-section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .videobook-title-accent {
          color: #364a52;
          font-weight: 600;
        }

        .videobook-section-description {
          max-width: 600px;
          margin: 0 auto;
          color: #0f252f;
          opacity: 0.85;
          line-height: 1.6;
        }

        .videobook-slider-container {
          position: relative;
          padding: 0 3rem;
        }

        .videobook-nav-button {
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

        .videobook-nav-button:hover:not(:disabled) {
          background: #364a52;
          transform: translateY(-50%) scale(1.1);
        }

        .videobook-nav-button:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .videobook-nav-button-left {
          left: 0;
        }

        .videobook-nav-button-right {
          right: 0;
        }

        .videobook-books-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          min-height: 400px;
        }

        .videobook-book-card.videobook-animating {
          opacity: 0;
          transform: translateY(-20px);
        }

        .videobook-book-image-wrapper {
          position: relative;
          aspect-ratio: 2/3;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(15, 37, 47, 0.2);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .videobook-book-image-wrapper:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(15, 37, 47, 0.3);
        }

        .videobook-book-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .videobook-play-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 37, 47, 0.75);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .videobook-book-image-wrapper:hover .videobook-play-overlay {
          opacity: 1;
        }

        .videobook-play-button {
          background: none;
          border: none;
          color: #eeeae7;
          cursor: pointer;
          transition: transform 0.3s ease;
          padding: 1rem;
        }

        .videobook-play-button:hover {
          transform: scale(1.15);
        }

        .videobook-dots-container {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-top: 2.5rem;
        }

        .videobook-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #d4cfc9;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .videobook-dot:hover:not(:disabled) {
          background: #364a52;
          transform: scale(1.2);
        }

        .videobook-dot:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .videobook-dot-active {
          background: #364a52;
          transform: scale(1.3);
        }

        /* Modal Styles */
        .videobook-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 37, 47, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
          backdrop-filter: blur(10px);
        }

        .videobook-modal-content {
          background: #eeeae7;
          border-radius: 16px;
          max-width: 900px;
          width: 100%;
          padding: 2rem;
          position: relative;
          box-shadow: 0 20px 60px rgba(15, 37, 47, 0.4);
        }

        .videobook-modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          color: #0f252f;
          cursor: pointer;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease;
          z-index: 10;
        }

        .videobook-modal-close:hover {
          transform: scale(1.1);
        }

        .videobook-modal-header {
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .videobook-modal-title {
          color: #0f252f;
          margin-bottom: 0.5rem;
          font-size: 1.75rem;
          font-weight: 700;
        }

        .videobook-modal-subtitle {
          color: #364a52;
          font-style: italic;
          margin-bottom: 0.75rem;
          font-size: 0.95rem;
        }

        .videobook-modal-author {
          color: #0f252f;
          font-weight: 500;
        }

        .videobook-modal-video {
          background: #d4cfc9;
          border-radius: 12px;
          padding: 1rem;
        }

        .videobook-video-wrapper {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%; /* 16:9 aspect ratio */
          border-radius: 8px;
          overflow: hidden;
          background: #0f252f;
        }

        .videobook-iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
          border-radius: 8px;
        }

        @media (max-width: 1024px) {
          .videobook-books-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }

          .videobook-slider-container {
            padding: 0 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .videobook-section {
            padding: 3rem 1rem;
          }

          .videobook-section-header {
            margin-bottom: 2rem;
          }

          .videobook-books-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            min-height: 450px;
          }

          .videobook-slider-container {
            padding: 0 2rem;
          }

          .videobook-nav-button {
            width: 36px;
            height: 36px;
          }

          .videobook-book-image-wrapper {
            max-width: 300px;
            margin: 0 auto;
          }

          .videobook-play-overlay {
            opacity: 1;
            background: rgba(15, 37, 47, 0.4);
          }

          .videobook-modal-content {
            padding: 1.5rem;
            max-width: 95%;
          }

          .videobook-modal-title {
            font-size: 1.5rem;
          }

          .videobook-modal-video {
            padding: 0.75rem;
          }
        }

        @media (max-width: 480px) {
          .videobook-section {
            padding: 2rem 0.5rem;
          }

          .videobook-slider-container {
            padding: 0 1.5rem;
          }

          .videobook-nav-button {
            width: 32px;
            height: 32px;
          }

          .videobook-section-description {
            padding: 0 1rem;
          }

          .videobook-modal-content {
            padding: 1rem;
          }

          .videobook-modal-title {
            font-size: 1.25rem;
          }

          .videobook-modal-video {
            padding: 0.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default VideoBookSection;