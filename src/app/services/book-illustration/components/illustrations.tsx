'use client'

import React, { useState } from 'react';
import { X } from 'lucide-react';

const IllustrationsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIllustration, setCurrentIllustration] = useState<any>(null);

  const illustrations = [
    {
      id: 1,
      image: "/illustrations/1.png",
      title: "Illustration 1"
    },
    {
      id: 2,
      image: "/illustrations/2.png",
      title: "Illustration 2"
    },
    {
      id: 3,
      image: "/illustrations/3.png",
      title: "Illustration 3"
    },
    {
      id: 4,
      image: "/illustrations/4.png",
      title: "Illustration 4"
    },
    {
      id: 5,
      image: "/illustrations/5.png",
      title: "Illustration 5"
    },
    {
      id: 6,
      image: "/illustrations/6.png",
      title: "Illustration 6"
    },
    {
      id: 7,
      image: "/illustrations/7.png",
      title: "Illustration 7"
    },
    {
      id: 8,
      image: "/illustrations/8.png",
      title: "Illustration 8"
    },
    {
      id: 9,
      image: "/illustrations/9.png",
      title: "Illustration 9"
    },
    {
      id: 10,
      image: "/illustrations/10.png",
      title: "Illustration 10"
    },
    {
      id: 11,
      image: "/illustrations/11.png",
      title: "Illustration 11"
    },
    {
      id: 12,
      image: "/illustrations/12.png",
      title: "Illustration 12"
    },
    {
      id: 13,
      image: "/illustrations/13.png",
      title: "Illustration 13"
    },
    {
      id: 14,
      image: "/illustrations/14.png",
      title: "Illustration 14"
    },
    {
      id: 15,
      image: "/illustrations/15.png",
      title: "Illustration 15"
    }
  ];

  const openModal = (illustration: any) => {
    setCurrentIllustration(illustration);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentIllustration(null);
  };

  return (
    <>
      <section className="illustrations-section">
        <div className="illustrations-container">
          {/* Header */}
          <div className="illustrations-section-header">
            <h1 className="fw-bold mb-3" style={{ color: '#0f252f', letterSpacing: '-0.5px' }}>
              CUSTOM <span className="illustrations-title-accent">ILLUSTRATIONS</span>
            </h1>
            <h5 className="illustrations-section-description">
              Discover our collection of bespoke illustrations, bringing stories and concepts to life through artistic vision.
            </h5>
          </div>

          {/* Illustrations Grid */}
          <div className="illustrations-grid">
            {illustrations.map((illustration) => (
              <div 
                key={illustration.id}
                className="illustration-card"
                onClick={() => openModal(illustration)}
              >
                <div className="illustration-image-wrapper">
                  <img 
                    src={illustration.image} 
                    alt={illustration.title}
                    className="illustration-image"
                  />
                  <div className="illustration-overlay">
                    <div className="illustration-view-text">View</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Illustration Modal */}
      {isModalOpen && currentIllustration && (
        <div className="illustration-modal-overlay" onClick={closeModal}>
          <div className="illustration-modal-content" onClick={(e) => e.stopPropagation()}>
            {/* <button className="illustration-modal-close" onClick={closeModal} aria-label="Close modal">
              <X size={24} />
            </button> */}

            <div className="illustration-modal-image-container">
              <img 
                src={currentIllustration.image} 
                alt={currentIllustration.title}
                className="illustration-modal-image"
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .illustrations-section {
          padding: 4rem 1rem;
          background: linear-gradient(135deg, #eeeae7 0%, #d4cfc9 50%, #eeeae7 100%);
          position: relative;
          overflow: hidden;
        }

        .illustrations-section::before {
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

        .illustrations-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .illustrations-section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .illustrations-title-accent {
          color: #364a52;
          font-weight: 600;
        }

        .illustrations-section-description {
          max-width: 600px;
          margin: 0 auto;
          color: #0f252f;
          opacity: 0.85;
          line-height: 1.6;
        }

        .illustrations-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 2rem;
        }

        .illustration-card {
          width: 100%;
          max-width: 280px;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .illustration-card:hover {
          transform: translateY(-5px);
        }


        .illustration-image-wrapper {
          position: relative;
          aspect-ratio: 1;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(15, 37, 47, 0.15);
          transition: box-shadow 0.3s ease;
        }

        .illustration-card:hover .illustration-image-wrapper {
          box-shadow: 0 12px 32px rgba(15, 37, 47, 0.25);
        }

        .illustration-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .illustration-card:hover .illustration-image {
          transform: scale(1.05);
        }

        .illustration-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 37, 47, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .illustration-card:hover .illustration-overlay {
          opacity: 1;
        }

        .illustration-view-text {
          color: #eeeae7;
          font-size: 1.25rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        /* Modal Styles */
        .illustration-modal-overlay {
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
          padding: 6rem 2rem 2rem 2rem;
          backdrop-filter: blur(10px);
        }

        .illustration-modal-content {
          position: relative;
          max-width: 50vw;
          max-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .illustration-modal-close {
          position: absolute;
          top: -3.5rem;
          right: 0;
          background: rgba(238, 234, 231, 0.95);
          border: none;
          color: #0f252f;
          cursor: pointer;
          padding: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          z-index: 10;
          border-radius: 50%;
          width: 48px;
          height: 48px;
        }

        .illustration-modal-close:hover {
          background: #eeeae7;
          transform: scale(1.1);
        }

        .illustration-modal-image-container {
          background: #eeeae7;
          padding: 1rem;
          border-radius: 8px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
          max-width: 100%;
          max-height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .illustration-modal-image {
          max-width: 100%;
          max-height: calc(75vh - 5rem);
          width: auto;
          height: auto;
          border-radius: 4px;
          display: block;
        }

        @media (max-width: 1024px) {
          .illustrations-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }

          /* Reset default positioning */
          .illustration-card:nth-child(13),
          .illustration-card:nth-child(14),
          .illustration-card:nth-child(15) {
            grid-column: auto;
          }

          /* Center last 3 items for 3-column layout */
          .illustration-card:nth-child(13) {
            grid-column: 1;
            grid-row: 5;
          }

          .illustration-card:nth-child(14) {
            grid-column: 2;
            grid-row: 5;
          }

          .illustration-card:nth-child(15) {
            grid-column: 3;
            grid-row: 5;
          }
        }

        @media (max-width: 768px) {
          .illustrations-section {
            padding: 3rem 1rem;
          }

          .illustrations-section-header {
            margin-bottom: 2rem;
          }

          .illustrations-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem;
          }

          /* Reset all custom positioning */
          .illustration-card:nth-child(13),
          .illustration-card:nth-child(14),
          .illustration-card:nth-child(15) {
            grid-column: auto;
            grid-row: auto;
          }

          .illustration-card {
            max-width: 100%;
          }

          .illustration-overlay {
            opacity: 1;
            background: rgba(15, 37, 47, 0.3);
          }

          .illustration-view-text {
            opacity: 0;
          }

          .illustration-card:hover .illustration-view-text {
            opacity: 1;
          }

          .illustration-modal-overlay {
            padding: 5rem 1rem 1rem 1rem;
          }

          .illustration-modal-content {
            max-width: 85vw;
            max-height: 80vh;
          }

          .illustration-modal-close {
            top: -3rem;
            right: 0;
          }

          .illustration-modal-image {
            max-height: calc(80vh - 2rem);
          }
        }

        @media (max-width: 480px) {
          .illustrations-section {
            padding: 2rem 0.5rem;
          }

          .illustrations-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          /* Reset all custom positioning for single column */
          .illustration-card:nth-child(13),
          .illustration-card:nth-child(14),
          .illustration-card:nth-child(15) {
            grid-column: auto;
            grid-row: auto;
          }

          .illustrations-section-description {
            padding: 0 1rem;
          }

          .illustration-modal-overlay {
            padding: 4rem 1rem 1rem 1rem;
          }

          .illustration-modal-content {
            max-width: 90vw;
            max-height: 85vh;
          }

          .illustration-modal-close {
            top: -2.5rem;
            right: 0;
            width: 40px;
            height: 40px;
            padding: 0.5rem;
          }

          .illustration-modal-image-container {
            padding: 0.5rem;
          }

          .illustration-modal-image {
            max-height: calc(85vh - 1rem);
          }
        }
      `}</style>
    </>
  );
};

export default IllustrationsSection;