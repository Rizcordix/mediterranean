"use client";
import React, { useState } from 'react';
import { ArrowDown, Zap, Clock, BookOpen, Mic, Map, CheckCircle } from 'lucide-react';
import { Button } from 'react-bootstrap';

const AuthorsLegacyDifference = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const problemSolutionPairs = [
    {
      icon: <Zap size={24} />,
      problem: "Publishing Alone Isn't Enough",
      problemDescription: "You publish a book on a generic platform. It goes live on Amazon. Nobody knows it exists. You sell 20 copies to friends and family. Then... silence.",
      solution: "Author's Legacy includes strategic book launch, platform building, and authority positioning. Your book becomes a business development tool."
    },
    {
      icon: <Clock size={24} />,
      problem: "DIY Marketing Wastes Your Time",
      problemDescription: "You try managing your own marketing. You don't know which social media platforms work best for authors. You waste weeks learning tactics instead of writing or coaching.",
      solution: "Our comprehensive marketing strategy and execution means you focus on your expertise; we handle visibility and positioning."
    },
    {
      icon: <BookOpen size={24} />,
      problem: "You Can't Scale Without Multiple Books",
      problemDescription: "One book is good. But your authority really grows with multiple published works, multiple languages, multiple formats. Managing all of that independently is a nightmare.",
      solution: "Author's Legacy program positions you for rapid scaling. First book. Second book. Audiobooks. International editions. We have a system."
    },
    {
      icon: <Mic size={24} />,
      problem: "You're Missing Corporate/Speaking Opportunities",
      problemDescription: "Authors who leverage their books get invited to corporate events, speaking tours, consulting gigs. But opportunities require visibility and positioning.",
      solution: "Our PR and media outreach services get your book—and you—in front of decision-makers who hire speakers and consultants."
    },
    {
      icon: <Map size={24} />,
      problem: "You're Overwhelmed by Choices",
      problemDescription: "Should I do an audiobook? Multiple languages? Paid ads? A website? All of it is confusing. You end up doing nothing strategic.",
      solution: "Author's Legacy provides a clear, expert-guided roadmap. Each decision is strategic. Each investment has clear ROI."
    }
  ];

  const handleTabClick = (index: number) => {
    if (index !== activeIndex && !isAnimating) {
      setIsAnimating(true);
      setActiveIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prevIndex) => (prevIndex + 1) % problemSolutionPairs.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prevIndex) => (prevIndex - 1 + problemSolutionPairs.length) % problemSolutionPairs.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <div className="difference-container">
      <div className="difference-content">
        <div className="section-header">
          <h2>The Author&apos;s Legacy Difference</h2>
          <h3>Complete Book-to-Authority Transformation</h3>
        </div>
        
        <div className="difference-visual">
          <div className="problem-solution-carousel">
            <div className="problem-tabs">
              {problemSolutionPairs.map((item, index) => (
                <div
                  key={index}
                  className={`problem-tab ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => handleTabClick(index)}
                >
                  <div className="tab-icon">{item.icon}</div>
                  <span className="tab-text">{item.problem}</span>
                </div>
              ))}
            </div>
            
            <div className="content-display">
              <div className={`problem-content ${isAnimating ? 'animating' : ''}`}>
                <div className="problem-header">
                  <div className="problem-icon">{problemSolutionPairs[activeIndex].icon}</div>
                  <h4>{problemSolutionPairs[activeIndex].problem}</h4>
                </div>
                <p className="problem-description">{problemSolutionPairs[activeIndex].problemDescription}</p>
              </div>
              
              <div className="solution-divider">
                <div className="solution-arrow">
                  <ArrowDown size={24} />
                </div>
              </div>
              
              <div className={`solution-content ${isAnimating ? 'animating' : ''}`} style={{ alignContent: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <h4>Our Solution</h4>
                <p>{problemSolutionPairs[activeIndex].solution}</p>
                <div className="solution-features">
                  <div className="feature-item">
                    <CheckCircle size={18} />
                    <span>Strategic Implementation</span>
                  </div>
                  <div className="feature-item">
                    <CheckCircle size={18} />
                    <span>Expert Guidance</span>
                  </div>
                  <div className="feature-item">
                    <CheckCircle size={18} />
                    <span>Measurable Results</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="carousel-controls">
              <button className="control-btn" onClick={handlePrev} disabled={isAnimating}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="#364a52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="indicators">
                {problemSolutionPairs.map((_, index) => (
                  <div
                    key={index}
                    className={`indicator ${index === activeIndex ? 'active' : ''}`}
                    onClick={() => handleTabClick(index)}
                  />
                ))}
              </div>
              <button className="control-btn" onClick={handleNext} disabled={isAnimating}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="#364a52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="section-cta">
          <Button href="/calendly" target="_blank" className="primary-button">
            Discover Your Transformation Path
          </Button>
        </div>
      </div>
      
      <style jsx>{`
        .difference-container {
          background-color: #eeeae7;
          padding: 60px 20px;
          position: relative;
        }
        
        .difference-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #364a52, #0f252f);
        }
        
        .difference-content {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 40px;
        }
        
        .section-header h2 {
          font-size: 2.5rem;
          color: #0f252f;
          margin-bottom: 8px;
          position: relative;
          display: inline-block;
        }
        
        .section-header h2::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 25%;
          width: 50%;
          height: 3px;
          background: linear-gradient(90deg, #364a52, #0f252f);
        }
        
        .section-header h3 {
          font-size: 1.5rem;
          color: #364a52;
          font-weight: 500;
          margin-top: 16px;
        }
        
        .difference-visual {
          margin-bottom: 40px;
        }
        
        .problem-solution-carousel {
          background-color: white;
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(15, 37, 47, 0.08);
          overflow: hidden;
        }
        
        .problem-tabs {
          display: flex;
          flex-wrap: wrap;
          background-color: rgba(54, 74, 82, 0.05);
          padding: 16px;
          gap: 12px;
        }
        
        .problem-tab {
          display: flex;
          align-items: center;
          justify-content: center;

          padding: 12px 16px;
          border-radius: 8px;
          border: 1px solid #364a52;
          cursor: pointer;
          transition: all 0.3s ease;
          flex: 1 1 calc(33.333% - 12px);
          min-width: 200px;
        }
        
        .problem-tab:hover {
          background-color: rgba(54, 74, 82, 0.1);
        }
        
        .problem-tab.active {
          background-color: #364a52;
          color: white;
        }
        
        .tab-icon {
          margin-right: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .tab-text {
          font-weight: 600;
          font-size: 0.9rem;
          line-height: 1.3;
        }
        
        .content-display {
          display: flex;
          flex-direction: column;
          padding: 30px;
          min-height: 350px;
        }
        
        .problem-content, .solution-content {
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .problem-content.animating, .solution-content.animating {
          opacity: 0;
          transform: translateY(10px);
        }
        
        .problem-header {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        
        .problem-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: rgba(54, 74, 82, 0.1);
          margin-right: 16px;
          color: #364a52;
        }
        
        .problem-header h4 {
          font-size: 1.5rem;
          color: #0f252f;
          margin: 0;
        }
        
        .problem-description {
          color: #364a52;
          line-height: 1.6;
          margin-bottom: 24px;
          font-style: italic;
          text-align: center;
        }
        
        .solution-divider {
          display: flex;
          justify-content: center;
          margin: 10px 0;
        }
        
        .solution-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: #364a52;
          color: white;
        }
        
        .solution-content h4 {
          font-size: 1.5rem;
          color: #0f252f;
          margin: 0 0 16px 0;
        }
        
        .solution-content p {
          color: #364a52;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        
        .solution-features {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          align-items: center;
            justify-content: center;

        }
        
        .feature-item {
          display: flex;
          align-items: center;
          color: #364a52;
          font-weight: 500;
        }
        
        .feature-item svg {
          margin-right: 8px;
          color: #364a52;
        }
        
        .carousel-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 16px;
          background-color: rgba(54, 74, 82, 0.05);
        }
        
        .control-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: white;
          border: 1px solid rgba(54, 74, 82, 0.2);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .control-btn:hover:not(:disabled) {
          background-color: #eeeaef;
        }
        
        .control-btn:hover:not(:disabled) svg {
          stroke: white;
        }
        
        .control-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .indicators {
          display: flex;
          gap: 8px;
          margin: 0 16px;
        }
        
        .indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: rgba(54, 74, 82, 0.2);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .indicator.active {
          width: 24px;
          border-radius: 4px;
          background-color: #364a52;
        }
        
        .section-cta {
          text-align: center;
        }
        
        .primary-button {
          background: linear-gradient(135deg, #364a52 0%, #0f252f 100%);
          color: white;
          font-weight: 600;
          padding: 14px 28px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
          box-shadow: 0 4px 12px rgba(15, 37, 47, 0.2);
        }
        
        .primary-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(15, 37, 47, 0.3);
        }
        
        @media (max-width: 768px) {
          .section-header h2 {
            font-size: 2rem;
          }
          
          .section-header h3 {
            font-size: 1.2rem;
          }
          
          .problem-tabs {
            flex-direction: column;
          }
          
          .problem-tab {
            flex: 1 1 100%;
          }
          
          .content-display {
            padding: 20px;
          }
          
          .problem-header h4, .solution-content h4 {
            font-size: 1.2rem;
          }
          
          .solution-features {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default AuthorsLegacyDifference;