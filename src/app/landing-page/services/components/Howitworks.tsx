"use client";
import React, { useState } from 'react';
// Make sure these paths are correct for your project structure
import image1 from '@/assets/images/landingpage/Steps/1.png';
import image2 from '@/assets/images/landingpage/Steps/2.png';
import image3 from '@/assets/images/landingpage/Steps/3.png';
import image4 from '@/assets/images/landingpage/Steps/4.png';
import { usePopup } from '@/components/wrappers/PopupContext'

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { openQuote } = usePopup()

  const steps = [
    {
      id: 1,
      title: 'Upload Your Manuscript',
      subtitle: 'With A Few Clicks',
      icon: '☁️',
      image: image1,
      features: [
        {
          icon: '📤',
          text: "Easily upload your manuscript with Mediterranean Publishing's user-friendly dashboard. Just fill in a few detail boxes, like book title, author's name, and category."
        },
        {
          icon: '©️',
          text: 'Instantly receive a copyright certificate for your book. Instantly receive a copyright certificate for your book.'
        }
      ]
    },
    {
      id: 2,
      title: 'Edit & Perfect Your Book',
      subtitle: 'AI-Powered Manuscript Scans for Smarter Editing',
      icon: '✨',
      image: image2,
      features: [
        {
          icon: '🤖',
          text: 'Mediterranean Publishing scans your manuscript using built-in AI to understand your audience, genre, and writing style. It then automatically identifies grammar mistakes and areas for improvement—making the editing process faster and smarter.'
        },
        {
          icon: '👥',
          text: 'If needed, you can also connect with professional editors for an added layer of refinement.'
        }
      ]
    },
    {
      id: 3,
      title: 'Design Your Cover & Layout',
      subtitle: 'Custom Covers Tailored to Your Book & Style',
      icon: '🎨',
      image: image3,
      features: [
        {
          icon: '🖼️',
          text: 'Choose from a wide range of custom-made cover designs, tailored to your book and personal style preferences. If you already have a cover, we can enhance it with our cover tool - or simply upload and use your own.'
        },
        {
          icon: '📐',
          text: "Customize your book's interior formatting in real time to match your style and genre."
        }
      ]
    },
    {
      id: 4,
      title: 'Publish & Distribute',
      subtitle: 'Publish Easily & Reach Readers Worldwide',
      icon: '🌍',
      image: image4,
      features: [
        {
          icon: '🌐',
          text: 'Hit publish, and Mediterranean Publishing takes care of the rest. Your book will be distributed across major platforms, reaching readers worldwide.'
        },
        {
          icon: '📢',
          text: 'Set up automatic ad campaigns on Amazon, Facebook, and Instagram, while having your own personalized author platform to showcase and sell your book.'
        }
      ]
    }
  ];

  return (
    <section className="how-it-works-section">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <p className="section-label">HOW IT WORKS</p>
          <h2 className="section-title">How to Publish with Mediterranean Publishing</h2>
          <h3 className="section-subtitle">in just four simple steps</h3>
          <p className="section-description">
            Mediterranean Publishing handles editing, cover design, formatting, and global<br />
            distribution—making publishing simple, professional, and profitable.
          </p>
        </div>

        {/* New Integrated Container 
          wraps both navigation and content 
        */}
        <div className="integrated-container">
          
          {/* Step Navigation */}
          <div className="steps-nav">
            <div className="row gx-3"> {/* Added gx-3 for better spacing between tabs */}
              {steps.map((step, index) => (
                <div key={step.id} className="col-6 col-md-3 mb-3 mb-md-0">
                  <button
                    className={`step-nav-btn ${activeStep === index ? 'active' : ''}`}
                    onClick={() => setActiveStep(index)}
                  >
                    <span className="step-number">Step {step.id}</span>
                    <span className="step-nav-title">{step.title}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Active Step Content */}
          <div className="step-content">
            <div className="row align-items-center gy-5">
              <div className="col-lg-5 order-2 order-lg-1">
                <h3 className="step-main-title">{steps[activeStep].subtitle}</h3>
                
                <div className="features-list mt-4">
                  {steps[activeStep].features.map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      <div className="feature-icon">{feature.icon}</div>
                      <p className="feature-text">{feature.text}</p>
                    </div>
                  ))}
                </div>

                <button onClick={openQuote} className="btn-get-started mt-5">
                  Get Started →
                </button>
              </div>

              <div className="col-lg-7 order-1 order-lg-2 mb-4 mb-lg-0">
                <div className="step-image-container">
                  <img 
                    src={steps[activeStep].image.src} 
                    alt={steps[activeStep].title}
                    className="img-fluid step-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        .how-it-works-section {
          background: linear-gradient(180deg, #eeeae7 0%, #f5f3f1 100%);
          padding: 80px 0;
        }

        .section-label {
          color: #0f252f;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 2px;
          margin-bottom: 16px;
          text-transform: uppercase;
        }

        .section-title {
          color: #0f252f;
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 8px;
          line-height: 1.2;
        }

        .section-subtitle {
          color: #364a52;
          font-size: 32px;
          font-weight: 400;
          margin-bottom: 24px;
        }

        .section-description {
          color: #364a52;
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 0;
        }

        /* === New Integrated Container Styles === */
        .integrated-container {
          background: white;
          border-radius: 24px;
          padding: 40px; /* Padding for the whole white box */
          box-shadow: 0 8px 30px rgba(15, 37, 47, 0.08);
          margin-top: 60px;
        }

        /* === Navigation Styles === */
        .steps-nav {
          margin-bottom: 50px; /* Space between tabs and content content */
        }

        .step-nav-btn {
          width: 100%;
          /* Changed: removed border and background for inactive state */
          background: transparent;
          border: none; 
          border-radius: 12px;
          padding: 16px 20px;
          text-align: left;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        /* Hover state for inactive tabs */
        .step-nav-btn:not(.active):hover {
           background: rgba(15, 37, 47, 0.05);
        }
        
        /* Changed: Active state mimics Mediterranean Publishing but uses your dark blue color */
        .step-nav-btn.active {
          background: #0f252f;
          box-shadow: 0 4px 12px rgba(15, 37, 47, 0.15);
          transform: translateY(-2px);
        }

        .step-number {
          font-size: 13px;
          font-weight: 600;
          color: #364a52; /* Lighter color for inactive state */
          opacity: 0.8;
          display: block;
          transition: all 0.3s ease;
        }

        .step-nav-btn.active .step-number {
          color: #eeeae7;
          opacity: 1;
        }

        .step-nav-title {
          font-size: 16px;
          font-weight: 700;
          color: #0f252f;
          display: block;
          transition: all 0.3s ease;
        }

        .step-nav-btn.active .step-nav-title {
          color: white;
        }

        /* === Content Styles === */
        .step-content {
          /* Changed: Removed previous container styles as it's now inside wrapper */
          background: transparent;
          box-shadow: none;
          border-radius: 0;
          padding: 0 10px; /* Added slight horizontal padding for inner alignment */
          margin-top: 0;
        }

        .step-main-title {
          color: #0f252f;
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 30px;
          line-height: 1.3;
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .feature-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .feature-icon {
          font-size: 24px;
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f4f2f0; /* Slightly darker inner bg for contrast on white */
          border-radius: 10px;
          color: #0f252f;
        }

        .feature-text {
          color: #364a52;
          font-size: 16px;
          line-height: 1.6;
          margin: 0;
          padding-top: 4px;
        }

        .btn-get-started {
          background: #0f252f;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 14px 36px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-get-started:hover {
          background: #364a52;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(15, 37, 47, 0.2);
        }

        .step-image-container {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          /* Subtle shadow for image to pop slightly from white background */
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
        }

        .step-image {
          width: 100%;
          height: auto;
          display: block;
        }

        @media (max-width: 991px) {
          .section-title { font-size: 32px; }
          .section-subtitle { font-size: 24px; }
          
          .integrated-container {
              padding: 30px 20px;
          }
          
          .step-main-title { font-size: 26px; text-align: center; }
          .features-list { margin-top: 20px; }
          .btn-get-started { width: 100%; margin-top: 30px !important; }
          .step-content { padding: 0; }
           /* On tablet/mobile, image goes on top (handled by bootstrap order classes) */
        }

        @media (max-width: 767px) {
          .how-it-works-section { padding: 60px 0; }
          .section-title { font-size: 28px; }
          .section-subtitle { font-size: 20px; }
          .section-description { font-size: 16px; }
          
          .integrated-container { margin-top: 40px; }

          .step-nav-btn { padding: 12px; border-radius: 10px;}
          .step-nav-title { font-size: 14px; }
          
          .step-main-title { font-size: 22px; }
          .feature-text { font-size: 15px; }
        }
      `}</style>
    </section>
  );
};

export default HowItWorksSection;