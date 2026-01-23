"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useDiscountPopup } from "@/components/popup/DiscountPopupContext";
import { Button } from "react-bootstrap";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { openDiscount } = useDiscountPopup?.() ?? { openDiscount: () => {} };

  // Make elements animate in after mount
  useEffect(() => {
    const id = setTimeout(() => setIsVisible(true), 80);
    return () => clearTimeout(id);
  }, []);

  return (
    <section className="hero-container pattern-overlay-2" aria-labelledby="hero-heading">
      <div className="hero-background" aria-hidden="true">
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <div className="hero-left">
          <h1
            id="hero-heading"
            className={`hero-headline ${isVisible ? "visible" : ""}`}
          >
            Transform Your Story Into a Published Masterpiece in 90 Days
          </h1>

          <p className={`hero-subheadline ${isVisible ? "visible delay-1" : ""}`}>
            Professional book writing, editing, publishing & marketing from concept to bestseller.
            Everything you need under one roof. No middlemen. No hidden costs.
          </p>

          <div className={`hero-buttons ${isVisible ? "visible delay-2" : ""}`}>
            <Button onClick={openDiscount} className="primary-cta" type="button">
              <span>Start Your Publishing Journey FREE</span>
              <ArrowRight size={18} aria-hidden />
            </Button>

            <Button href="/calendly" target="_blank" className="secondary-cta" type="button">
              Schedule Free Publishing Consultation
            </Button>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image-container">
            <img
              src="/landing/6.png"
              alt="Author Legacy Program"
              width={500}
              height={600}
              className={`hero-image ${isVisible ? "slide-in" : ""}`}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Layout */
        .hero-container {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: linear-gradient(135deg, #eeeae7 0%, #aeadadff 100%);
        }

        .hero-background {
          position: absolute;
          inset: 0;
          z-index: -2;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23364a52' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          z-index: -1;
        }

        .hero-content {
          display: flex;
          flex: 1;
          gap: 40px;
          padding: 6% 8%;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          align-items: center;
          z-index: 1;
        }

        .hero-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-right: 20px;
        }

        .hero-right {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Typographic & controls */
        .hero-headline {
          font-size: 3rem;
          font-weight: 700;
          line-height: 1.08;
          color: #0f252f;
          margin: 0 0 18px 0;
          opacity: 0;
          transform: translateY(18px);
        }

        .hero-subheadline {
          font-size: 1.15rem;
          line-height: 1.5;
          color: #364a52;
          margin: 0 0 28px 0;
          opacity: 0;
          transform: translateY(18px);
        }

        .hero-buttons {
          display: flex;
          gap: 12px;
          align-items: center;
          margin-top: 6px;
          opacity: 0;
          transform: translateY(18px);
        }

        .primary-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #0f252f 0%, #364a52 100%);
          color: #eeeae7;
          font-weight: 600;
          padding: 12px 20px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }
        .primary-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
        }

        .secondary-cta {
          background: transparent;
          color: #364a52;
          font-weight: 600;
          padding: 12px 20px;
          border-radius: 8px;
          border: 1px solid rgba(238, 234, 231, 0.3);
          cursor: pointer;
        }
        .secondary-cta:hover {
          background: #364a52;
          color: #eeeae7;
        }

        /* Image */
        .hero-image-container {
          width: 100%;
          max-width: 520px;
        }
        .hero-image {
          width: 100%;
          height: auto;
          border-radius: 12px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.18);
          opacity: 0;
          transform: translateX(40px);
        }

        /* Animations */
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Visible class triggers animations (staggered) */
        .visible {
          animation-fill-mode: forwards;
        }
        .hero-headline.visible {
          animation: fadeUp 0.58s cubic-bezier(.2, .9, .2, 1) 0s forwards;
        }
        .hero-subheadline.visible.delay-1 {
          animation: fadeUp 0.58s cubic-bezier(.2, .9, .2, 1) 0.12s forwards;
        }
        .hero-buttons.visible.delay-2 {
          animation: fadeUp 0.58s cubic-bezier(.2, .9, .2, 1) 0.24s forwards;
        }
        .hero-image.slide-in {
          animation: slideIn 0.68s cubic-bezier(.2, .9, .2, 1) 0.28s forwards;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-content {
            flex-direction: column;
            padding: 8% 6%;
          }
          .hero-left {
            padding-right: 0;
            text-align: center;
            margin-bottom: 28px;
          }
          .hero-headline {
            font-size: 2.2rem;
          }
        }

        @media (max-width: 640px) {
          .hero-headline {
            font-size: 1.8rem;
          }
          .hero-subheadline {
            font-size: 1rem;
          }
          .hero-buttons {
            flex-direction: column;
            gap: 10px;
            width: 100%;
          }
          .primary-cta,
          .secondary-cta {
            width: 100%;
            justify-content: center;
          }
          .hero-image-container {
            max-width: 360px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
