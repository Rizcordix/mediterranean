'use client'

import React, { useState } from 'react';
import { X, ZoomIn, Palette } from 'lucide-react';

const CoverDesignSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCover, setCurrentCover] = useState<any>(null);

  const coverDesigns = [
    {
      id: 1,
      title: "The House You Build Within",
      subtitle: "A Guide to Building Your Inner Self",
      author: "Liam Green",
      image: "/portfolio_images/1_converted.avif",
      designStyle: "Minimalist Architecture",
      colorPalette: ["#FFD700", "#1E3A5F", "#8B4FBF", "#FF6B9D"]
    },
    {
      id: 2,
      title: "Marshall's Keep",
      subtitle: "Love is a Fortress.",
      author: "Ryan Marshall",
      image: "/portfolio_images/2_converted.avif",
      designStyle: "Gothic Romance",
      colorPalette: ["#4A5F6D", "#8FA5B0", "#D41F3C", "#2B3A42"]
    },
    {
      id: 3,
      title: "The Story of a Thief",
      subtitle: "Tony was born into a family of thieves.",
      author: "Hristina BloomField",
      image: "/portfolio_images/storyofathief.png",
      designStyle: "Urban Noir",
      colorPalette: ["#F5F0E8", "#1A1A1A", "#4A4A4A", "#8B7355"]
    },
    {
      id: 4,
      title: "Beyond The Resume",
      subtitle: "A 40-Year Framework for the Modern Professional.",
      author: "Joshua Sciascia",
      image: "/portfolio_images/4_converted.avif",
      designStyle: "Professional Modern",
      colorPalette: ["#7A8C99", "#C5A572", "#E8DCC4", "#3D4F5C"]
    },
    {
      id: 5,
      title: "The Last Good Liar",
      subtitle: "Followed by Millions. Hunted by One.",
      author: "Clara Monet",
      image: "/portfolio_images/thelastgoodliar_converted.avif",
      designStyle: "Thriller Suspense",
      colorPalette: ["#0A0A0A", "#C41E3A", "#E8E8E8", "#4A4A4A"]
    },
    {
      id: 6,
      title: "Before I Cheat",
      subtitle: "A forbidden romance between haunter and haunted.",
      author: "Meek White",
      image: "/portfolio_images/cheat.png",
      designStyle: "Contemporary Romance",
      colorPalette: ["#2D1B4E", "#9B7EC7", "#D4A5C7", "#E8D4E8"]
    },
    {
      id: 7,
      title: "PAX: Journey Home",
      subtitle: "A breathtaking novel about chosen families.",
      author: "Jon Klassen",
      image: "/portfolio_images/PAX.png",
      designStyle: "Illustrated Adventure",
      colorPalette: ["#C89B6E", "#8B6F47", "#E8D4B8", "#5F4A3D"]
    },
    {
      id: 8,
      title: "The Librarian of Lost Things",
      subtitle: "Every object holds a memory. Some are deadly.",
      author: "Jennifer Delmont",
      image: "/portfolio_images/6_converted.avif",
      designStyle: "Mystery Fantasy",
      colorPalette: ["#1A1A1A", "#D4A574", "#FFD700", "#4A3825"]
    },
    {
      id: 9,
      title: "The Last Station to Port Vance",
      subtitle: "Not all journeys have a destination.",
      author: "Ryan Marshall",
      image: "/portfolio_images/portvance.png",
      designStyle: "Atmospheric Journey",
      colorPalette: ["#3D5F6F", "#7A9BAF", "#C5D4DC", "#2B3E4A"]
    },
    {
      id: 10,
      title: "BILLI",
      subtitle: "A life forged in the fires of the Great Depression and WWII.",
      author: "Robert K. Bateman",
      image: "/portfolio_images/Billi_cover.jpg.jpeg",
      designStyle: "Historical Biography",
      colorPalette: ["#4A7C9E", "#E8D4B8", "#2B3F5C", "#8B9BB0"]
    },
    {
      id: 11,
      title: "Exiled",
      subtitle: "In a world of chaos and betrayal, one boy must fight.",
      author: "Joaquin Lopez",
      image: "/portfolio_images/exiled.png",
      designStyle: "Dark Fantasy Epic",
      colorPalette: ["#1A1A1A", "#4A4A4A", "#C89B6E", "#8B6F47"]
    },
    {
      id: 12,
      title: "The Buried",
      subtitle: "The world above us is gone.",
      author: "Melissa Grey",
      image: "/portfolio_images/buried.png",
      designStyle: "Post-Apocalyptic",
      colorPalette: ["#0A0A0A", "#C41E3A", "#4A4A4A", "#8B7355"]
    },
  ];

  const openModal = (cover: any) => {
    setCurrentCover(cover);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentCover(null);
  };

  return (
    <>
      <section className="cover-section">
        <div className="cover-container">
          {/* Header */}
          <div className="cover-section-header">
            <h1 className="fw-bold mb-3" style={{ color: '#0f252f', letterSpacing: '-0.5px' }}>
              COVER <span className="cover-title-accent">DESIGNS</span>
            </h1>
            <h5 className="cover-section-description">
              Explore our collection of stunning book cover designs, each crafted to capture the essence of its story.
            </h5>
          </div>

          {/* Cover Designs Grid */}
          <div className="cover-books-grid">
            {coverDesigns.map((cover) => (
              <div 
                key={cover.id}
                className="cover-book-card"
                onClick={() => openModal(cover)}
              >
                <div className="cover-book-image-wrapper">
                  <img 
                    src={cover.image} 
                    alt={cover.title}
                    className="cover-book-image"
                  />
                  <div className="cover-overlay">
                    <div className="cover-design-badge">
                      <Palette size={16} />
                      <span>{cover.designStyle}</span>
                    </div>
                    <div className="cover-zoom-button">
                      <ZoomIn size={40} strokeWidth={1.5} />
                    </div>
                    <div className="cover-info">
                      <h3 className="cover-card-title">{cover.title}</h3>
                      <p className="cover-card-author">by {cover.author}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cover Detail Modal */}
      {isModalOpen && currentCover && (
        <div className="cover-modal-overlay" onClick={closeModal}>
          <div className="cover-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="cover-modal-close" onClick={closeModal} aria-label="Close modal">
              <X size={24} />
            </button>

            <div className="cover-modal-layout">
              <div className="cover-modal-image-section">
                <img 
                  src={currentCover.image} 
                  alt={currentCover.title}
                  className="cover-modal-image"
                />
              </div>

              <div className="cover-modal-details">
                <div className="cover-modal-header">
                  <h2 className="cover-modal-title">{currentCover.title}</h2>
                  <p className="cover-modal-subtitle">{currentCover.subtitle}</p>
                  <p className="cover-modal-author">by {currentCover.author}</p>
                </div>

                <div className="cover-design-info">
                  <div className="cover-info-row">
                    <div className="cover-info-label">
                      <Palette size={18} />
                      <span>Design Style</span>
                    </div>
                    <div className="cover-info-value">{currentCover.designStyle}</div>
                  </div>

                  <div className="cover-info-row">
                    <div className="cover-info-label">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 2 L12 12 L17 17"/>
                      </svg>
                      <span>Color Palette</span>
                    </div>
                    <div className="cover-color-swatches">
                      {currentCover.colorPalette.map((color: string, index: number) => (
                        <div 
                          key={index}
                          className="cover-color-swatch"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .cover-section {
          padding: 4rem 1rem;
          background: linear-gradient(135deg, #eeeae7 0%, #d4cfc9 50%, #eeeae7 100%);
          position: relative;
          overflow: hidden;
        }

        .cover-section::before {
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

        .cover-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .cover-section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .cover-title-accent {
          color: #364a52;
          font-weight: 600;
        }

        .cover-section-description {
          max-width: 600px;
          margin: 0 auto;
          color: #0f252f;
          opacity: 0.85;
          line-height: 1.6;
        }

        .cover-books-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .cover-book-card {
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .cover-book-card:hover {
          transform: translateY(-8px);
        }

        .cover-book-image-wrapper {
          position: relative;
          aspect-ratio: 2/3;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(15, 37, 47, 0.2);
          transition: box-shadow 0.3s ease;
        }

        .cover-book-card:hover .cover-book-image-wrapper {
          box-shadow: 0 15px 40px rgba(15, 37, 47, 0.3);
        }

        .cover-book-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .cover-book-card:hover .cover-book-image {
          transform: scale(1.05);
        }

        .cover-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to top, rgba(15, 37, 47, 0.95) 0%, rgba(15, 37, 47, 0.6) 40%, transparent 100%);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .cover-book-card:hover .cover-overlay {
          opacity: 1;
        }

        .cover-design-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(238, 234, 231, 0.95);
          color: #0f252f;
          padding: 0.5rem 0.75rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          align-self: flex-start;
          backdrop-filter: blur(10px);
          transform: translateY(-10px);
          opacity: 0;
          transition: all 0.3s ease 0.1s;
        }

        .cover-book-card:hover .cover-design-badge {
          transform: translateY(0);
          opacity: 1;
        }

        .cover-zoom-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0.8);
          color: #eeeae7;
          opacity: 0;
          transition: all 0.3s ease 0.15s;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
        }

        .cover-book-card:hover .cover-zoom-button {
          transform: translate(-50%, -50%) scale(1);
          opacity: 1;
        }

        .cover-info {
          transform: translateY(10px);
          opacity: 0;
          transition: all 0.3s ease 0.2s;
        }

        .cover-book-card:hover .cover-info {
          transform: translateY(0);
          opacity: 1;
        }

        .cover-card-title {
          color: #eeeae7;
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
          line-height: 1.3;
        }

        .cover-card-author {
          color: #d4cfc9;
          font-size: 0.85rem;
          font-style: italic;
          margin: 0;
        }

        /* Modal Styles */
        .cover-modal-overlay {
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

        .cover-modal-content {
          background: #eeeae7;
          border-radius: 16px;
          max-width: 900px;
          width: 100%;
          padding: 2rem;
          position: relative;
          box-shadow: 0 20px 60px rgba(15, 37, 47, 0.4);
          max-height: 90vh;
          overflow-y: auto;
        }

        .cover-modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(15, 37, 47, 0.1);
          border: none;
          color: #0f252f;
          cursor: pointer;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          z-index: 10;
          border-radius: 50%;
          width: 40px;
          height: 40px;
        }

        .cover-modal-close:hover {
          background: rgba(15, 37, 47, 0.2);
          transform: scale(1.1);
        }

        .cover-modal-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .cover-modal-image-section {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cover-modal-image {
          width: 100%;
          max-width: 350px;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 10px 40px rgba(15, 37, 47, 0.3);
        }

        .cover-modal-details {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .cover-modal-header {
          margin-bottom: 2rem;
        }

        .cover-modal-title {
          color: #0f252f;
          margin-bottom: 0.75rem;
          font-size: 1.75rem;
          font-weight: 700;
          line-height: 1.3;
        }

        .cover-modal-subtitle {
          color: #364a52;
          font-style: italic;
          margin-bottom: 0.75rem;
          font-size: 1rem;
          line-height: 1.5;
        }

        .cover-modal-author {
          color: #0f252f;
          font-weight: 500;
          font-size: 1.1rem;
        }

        .cover-design-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .cover-info-row {
          background: #d4cfc9;
          padding: 1.25rem;
          border-radius: 12px;
        }

        .cover-info-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #0f252f;
          font-weight: 600;
          margin-bottom: 0.75rem;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .cover-info-value {
          color: #364a52;
          font-size: 1.1rem;
          font-weight: 500;
        }

        .cover-color-swatches {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .cover-color-swatch {
          width: 48px;
          height: 48px;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(15, 37, 47, 0.2);
          cursor: pointer;
          transition: transform 0.2s ease;
          border: 2px solid #eeeae7;
        }

        .cover-color-swatch:hover {
          transform: scale(1.1);
        }

        @media (max-width: 1024px) {
          .cover-books-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .cover-section {
            padding: 3rem 1rem;
          }

          .cover-section-header {
            margin-bottom: 2rem;
          }

          .cover-books-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .cover-modal-content {
            padding: 1.5rem;
          }

          .cover-modal-layout {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .cover-modal-image {
            max-width: 250px;
          }

          .cover-modal-title {
            font-size: 1.5rem;
          }

          .cover-overlay {
            opacity: 1;
            background: linear-gradient(to top, rgba(15, 37, 47, 0.85) 0%, rgba(15, 37, 47, 0.4) 40%, transparent 100%);
          }

          .cover-design-badge,
          .cover-zoom-button,
          .cover-info {
            opacity: 1;
            transform: none;
          }
        }

        @media (max-width: 480px) {
          .cover-section {
            padding: 2rem 0.5rem;
          }

          .cover-books-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .cover-section-description {
            padding: 0 1rem;
          }

          .cover-modal-content {
            padding: 1rem;
          }

          .cover-modal-title {
            font-size: 1.25rem;
          }

          .cover-info-row {
            padding: 1rem;
          }

          .cover-color-swatch {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </>
  );
};

export default CoverDesignSection;