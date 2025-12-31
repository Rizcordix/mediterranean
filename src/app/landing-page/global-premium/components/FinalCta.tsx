"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Globe, Users, Headphones } from 'lucide-react';
import { useDiscountPopup } from '@/components/popup/DiscountPopupContext';

export default function FinalCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // small delay to let layout settle if needed
    const id = setTimeout(() => setIsVisible(true), 80);
    return () => clearTimeout(id);
  }, []);

  const trustItems = [
    { icon: <Star size={18} />, text: '98% satisfaction rate' },
    { icon: <Users size={18} />, text: '5,000+ successfully published' },
    { icon: <Globe size={18} />, text: 'Distribution in 100+ countries' },
    { icon: <Headphones size={18} />, text: 'Dedicated VIP support' }
  ];

  const { openDiscount } = useDiscountPopup();

  return (
    <section className="final-cta-container" aria-labelledby="final-cta-heading">
      <div className="cta-background" aria-hidden>
        <div className="background-overlay" />
        <img
          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          alt="Books on shelf"
          className="background-image"
        />
      </div>

      <div className={`cta-content ${isVisible ? 'visible' : 'hidden'}`}>
        <div className={`cta-text ${isVisible ? 'fade-in' : ''}`}>
          <h2 id="final-cta-heading" style={{color: 'white'}}>Ready to Build Your Author Legacy?</h2>
          <p className="cta-subtitle">Don&apos;t just publish. Build a legacy.</p>

          <div className="cta-buttons" role="group" aria-label="Call to action buttons">
            <button onClick={openDiscount} className="primary-cta" aria-label="Build your author legacy">
              <span>Build Your Author Legacy</span>
              <ArrowRight size={16} aria-hidden />
            </button>

            <button className="secondary-cta" aria-label="Schedule VIP consultation">Schedule VIP Consultation</button>
          </div>
        </div>

        <div className={`trust-section ${isVisible ? 'fade-in-delay' : ''}`}>
          <p className="trust-lead">Join an elite community of published thought leaders and experts</p>

          <div className="trust-indicators">
            {trustItems.map((item, index) => (
              <div key={index} className="trust-item" aria-hidden={false}>
                <div className="trust-icon">{item.icon}</div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .final-cta-container {
          position: relative;
          height: 520px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 30px 16px;
        }

        .cta-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -2;
        }

        .background-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: brightness(0.48) saturate(1.4);
        }

        .background-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(15,37,47,0.88) 0%, rgba(54,74,82,0.82) 100%);
          z-index: -1;
        }

        .cta-content {
          width: 100%;
          max-width: 980px;
          margin: 0 auto;
          padding: 40px 20px;
          text-align: center;
          z-index: 1;
          color: #eeeae7;
        }

        /* CHILDREN INITIAL STATE */
        .cta-text h2,
        .cta-subtitle,
        .cta-buttons,
        .trust-section {
          opacity: 0;
          transform: translateY(18px);
        }

        .cta-text h2 {
          font-size: 2.6rem;
          font-weight: 700;
          margin: 0 0 12px 0;
          line-height: 1.12;
        }

        .cta-subtitle {
          font-size: 1.15rem;
          margin: 0 0 28px 0;
          font-weight: 400;
        }

        .cta-buttons {
          display: flex;
          flex-direction: row;
          gap: 14px;
          align-items: center;
          justify-content: center;
          margin-bottom: 36px;
        }

        /* Buttons */
        .primary-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #364a52 0%, #0f252f 100%);
          color: #eeeae7;
          font-weight: 600;
          padding: 12px 22px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          transition: transform 0.24s ease, box-shadow 0.24s ease;
          box-shadow: 0 6px 18px rgba(15,37,47,0.18);
          font-size: 1rem;
        }

        .primary-cta:focus {
          outline: 3px solid rgba(255,255,255,0.12);
        }

        .primary-cta:hover { transform: translateY(-3px); }

        .secondary-cta {
          background: transparent;
          color: #eeeae7;
          font-weight: 600;
          padding: 10px 18px;
          border-radius: 999px;
          border: 1px solid rgba(238,234,231,0.18);
          cursor: pointer;
          transition: background-color 0.18s ease, border-color 0.18s ease, transform 0.18s ease;
          font-size: 0.98rem;
        }

        .secondary-cta:hover { transform: translateY(-2px); background: rgba(255,255,255,0.04); }

        .trust-lead {
          margin: 8px 0 20px 0;
          font-size: 1rem;
          opacity: 0.95;
        }

        .trust-indicators {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 999px;
          background-color: rgba(255,255,255,0.06);
          backdrop-filter: blur(4px);
          transition: transform 0.16s ease, background-color 0.16s ease;
          border: 1px solid rgba(255,255,255,0.06);
        }

        .trust-item:hover { transform: translateY(-3px); background-color: rgba(255,255,255,0.09); }

        .trust-icon { color: #d4af37; display:flex; align-items:center; }
        .trust-item span { color: #eeeae7; font-weight: 500; font-size: 0.92rem; }

        /* KEYFRAMES */
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }

        /* PARENT VISIBLE STATE ANIMATIONS (staggered) */
        .visible .cta-text h2 { animation: fadeInUp 0.6s cubic-bezier(.2,.9,.2,1) 0s forwards; }
        .visible .cta-subtitle { animation: fadeInUp 0.6s cubic-bezier(.2,.9,.2,1) 0.12s forwards; }
        .visible .cta-buttons { animation: fadeInUp 0.6s cubic-bezier(.2,.9,.2,1) 0.24s forwards; }

        .visible .trust-section { animation: fadeInUp 0.6s cubic-bezier(.2,.9,.2,1) 0.36s forwards; }
        .visible .trust-item { opacity: 1; transform: none; }

        /* legacy class names kept for compatibility */
        .fade-in { /* unused but preserved */ }
        .fade-in-delay { /* unused but preserved */ }

        /* RESPONSIVE */
        @media (max-width: 820px) {
          .final-cta-container { height: 680px; }
          .cta-text h2 { font-size: 2rem; }
          .cta-buttons { flex-direction: column; }
          .cta-buttons button { width: 100%; max-width: 360px; }
          .trust-indicators { flex-direction: column; align-items: center; }
          .trust-item { width: 100%; max-width: 320px; justify-content: center; }
        }

        @media (max-width: 420px) {
          .final-cta-container { height: auto; padding: 40px 12px 60px; }
          .cta-text h2 { font-size: 1.6rem; }
        }
      `}</style>
    </section>
  );
}
