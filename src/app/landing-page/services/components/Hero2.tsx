"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import trustpilot from '@/assets/images/icons/trustpilot.svg';
import googlereviews from '@/assets/images/icons/google-reviews.svg';
import BackgroungImage from '@/assets/images/banner/lp_bg.png';
import SuccessPopup from '@/components/SuccessPopup';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const HeroSection = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    consent: false
  });

  const [submitting, setSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 3500);
    return () => clearTimeout(t);
  }, [toast]);

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handlePhoneChange = (phone: string) => {
    setFormData(prev => ({
      ...prev,
      phone
    }));
  };

  const handleSubmit = async () => {
    // Validation
    if (!formData.fullName || !formData.email || !formData.phone) {
      showToast('⚠️ Please fill in all fields.', 'error');
      return;
    }

    if (!formData.email.includes('@')) {
      showToast('⚠️ Please enter a valid email.', 'error');
      return;
    }

        setSubmitting(true);

try {
  const hubspotRes = await fetch('/api/hubspot/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      consent: formData.consent,
    }),
  });

  const hubspotData = await hubspotRes.json();

  if (!hubspotRes.ok) {
    throw new Error(
      hubspotData?.message || 'HubSpot submission failed'
    );
  }

  // ONLY send email if HubSpot succeeded
  const emailRes = await fetch('/api/sendEmail/landingpageform', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
    }),
  });

  if (!emailRes.ok) {
    throw new Error('Email sending failed');
  }

  setFormData({ fullName: '', email: '', phone: '', consent: false });
  router.push('/landing-page/thanks');

} catch (error: any) {
  console.error('Submission error:', error);
  showToast(`❌ ${error.message}`, 'error');
} finally {
  setSubmitting(false);
}
  };

  return (
    <>
      {/* Success Popup */}
      <SuccessPopup 
        isOpen={showSuccessPopup} 
        onClose={() => setShowSuccessPopup(false)} 
        formType="contact" 
      />

      {/* Toast */}
      {toast && (
        <div
          style={{
            position: 'fixed',
            top: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '12px 18px',
            borderRadius: 10,
            zIndex: 11000,
            fontWeight: 600,
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            background: toast.type === 'success' ? '#d9fdd3' : '#f8d7da',
            color: toast.type === 'success' ? '#0f5132' : '#842029',
          }}
          role="status"
          aria-live="polite"
        >
          {toast.message}
        </div>
      )}

      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${BackgroungImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Bottom fade overlay */}
        <div className="hero-fade-overlay"></div>
        
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-7">
              <div className="hero-content">
                <h1 className="hero-title">Bring Your Book to Life</h1>
                <p className="hero-subtitle">Experience easier publishing with one powerful platform:</p>
                
                <ul className="features-list">
                  <li>Premium Print, Ebook & Audiobook</li>
                  <li>Global Distribution Up to 100 Top-Tier Channels</li>
                  <li>Your Own Expert Publishing Team</li>
                  <li>100% Rights. Unlimited Revisions.</li>
                  <li>Stunning Cover Design Built on Bestsellers Data</li>
                </ul>

                {/* Trust Badges */}
                <div className="trust-badges">
                  <div className="badge-item">
                    <Image src={trustpilot} alt="Trustpilot" width={100} height={24} className="badge-logo" />
                    <div className="badge-text">Excellent</div>
                  </div>
                  
                  <div className="badge-divider"></div>

                  <div className="badge-item">
                    <Image src={googlereviews} alt="Google Reviews" width={100} height={24} className="badge-logo" />
                    <div className="badge-text">Excellent</div>
                  </div>
                  
                  <div className="badge-divider"></div>

                  <div className="badge-item">
                    <div className="stat-number">2,800+</div>
                    <div className="badge-text">Published Books</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="col-lg-5">
              <div className="form-wrapper">
                {/* Horizontal sliding books background - Replace this image with your GIF */}
                <div className="books-background">
                  <img 
                    src="/landing/bookbg.png" 
                    alt="Book covers slider"
                    className="books-slider-image"
                  />
                </div>

                <div className="form-card">
                  <h3 className="form-title">
                    Your story matters. Let&apos;s talk about how <span className="text-accent">to publish it.</span>
                  </h3>
                  
                  <div className="form-container">
                    <div className="form-group">
                      <div className="input-icon">
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                          <circle cx="10" cy="7" r="3.5" stroke="#364a52" strokeWidth="1.5"/>
                          <path d="M4 18c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#364a52" strokeWidth="1.5"/>
                        </svg>
                      </div>
                      <input
                        type="text"
                        name="fullName"
                        className="form-control custom-input"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <div className="input-icon">
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                          <rect x="3" y="5" width="14" height="10" rx="2" stroke="#364a52" strokeWidth="1.5"/>
                          <path d="M3 7l7 4 7-4" stroke="#364a52" strokeWidth="1.5"/>
                        </svg>
                      </div>
                      <input
                        type="email"
                        name="email"
                        className="form-control custom-input"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="form-group phone-group">
                      <PhoneInput
                        country={'us'}
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        placeholder="Phone Number"
                        containerClass="phone-input-container"
                        inputClass="form-control custom-input phone-input"
                        buttonClass="phone-flag-btn"
                      />
                    </div>


                    <div className="consent-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleInputChange}
                      />
                      <label className="form-check-label" htmlFor="consent">
                        I consent to the <a href='/text-message-consent-agreement' target='_blank' className="text-link">text messages agreement</a>
                      </label>
                    </div>

                    <button 
                      type="button" 
                      onClick={handleSubmit} 
                      className="btn btn-submit"
                      disabled={submitting}
                      style={{ opacity: submitting ? 0.8 : 1, cursor: submitting ? 'wait' : 'pointer' }}
                    >
                      {submitting ? 'Submitting...' : 'Get a Unique Offer →'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          background: linear-gradient(135deg, #eeeae7 0%, #e0dcd9 100%);
          padding: 160px 0;
          padding-bottom: 80px;
          min-height: auto;
          position: relative;
          overflow: hidden;
        }

        /* Bottom fade overlay for seamless integration */
        .hero-fade-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 120px;
          background: linear-gradient(to bottom, 
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.3) 25%,
            rgba(255, 255, 255, 0.6) 50%,
            rgba(255, 255, 255, 0.85) 75%,
            rgba(255, 255, 255, 1) 100%
          );
          pointer-events: none;
          z-index: 1;
        }

        .container {
          position: relative;
          z-index: 2;
        }

        .hero-content {
          padding-right: 20px;
        }

        .hero-title {
          font-size: 2.75rem;
          font-weight: 700;
          color: #0f252f;
          margin-bottom: 16px;
          line-height: 1.15;
        }

        .hero-subtitle {
          font-size: 1.1rem;
          color: #364a52;
          margin-bottom: 10px;
          font-weight: 500;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin-bottom: 34px;
        }

        .features-list li {
          font-size: 0.95rem;
          font-weight: 500;
          color: #364a52;
          margin-bottom: 5px;
          padding-left: 24px;
          position: relative;
          line-height: 1.5;
        }

        .features-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #0f252f;
          font-size: 0.95rem;
          font-weight: bold;
        }

        .trust-badges {
          display: flex;
          gap: 24px;
          flex-wrap: nowrap;
          align-items: center;
          overflow-x: auto;
        }

        .badge-item {
          text-align: center;
          flex-shrink: 0;
        }

        .badge-divider {
          width: 1.5px;
          height: 50px;
          background-color: #0f252f;
          flex-shrink: 0;
        }

        .badge-logo {
          margin-bottom: 6px;
          display: block;
        }

        .badge-text {
          font-size: 0.85rem;
          color: #364a52;
          font-weight: 600;
        }

        .stat-number {
          font-size: 2.2rem;
          font-weight: 700;
          color: #0f252f;
          line-height: 1;
          margin-bottom: 4px;
        }

        .form-wrapper {
          position: relative;
          max-width: 480px;
          margin-left: auto;

          display: flex;
          justify-content: center;
        }

        .books-background {
          position: absolute;
          width: 150%;
          height: 100%;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
          display: none;
        }

        @media (min-width: 992px) {
          .books-background {
            display: block;
          }
        }

        .books-slider-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          opacity: 1;
        }

        .form-card {
          background: white;
          border-radius: 14px;
          padding: 28px 24px;
          box-shadow: 0 10px 35px rgba(15, 37, 47, 0.1);
          position: relative;
          z-index: 1;
          max-width: 380px;
          margin-left: auto;
          margin-right: auto;
        }

        .form-title {
          font-size: 1.2rem;
          color: #0f252f;
          margin-bottom: 10px;
          font-weight: 600;
          line-height: 1.1;
        }

        .text-accent {
          color: #10688b;
        }

        .form-container {
          width: 100%;
        }

        .form-group {
          margin-bottom: 6px;
          position: relative;
        }

        .input-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
          pointer-events: none;
        }

        .custom-input {
          padding: 11px 12px 8px 38px;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-size: 0.9rem;
          transition: all 0.2s ease;
          width: 100%;
          background: white;
        }

        .custom-input:focus {
          border-color: #364a52;
          box-shadow: 0 0 0 3px rgba(54, 74, 82, 0.08);
          outline: none;
        }

        .custom-input::placeholder {
          color: #999;
        }

        .consent-check {
          margin-bottom: 18px;
          display: flex;
          align-items: flex-start;
          padding-left: 4px;
          gap: 8px;
        }

        .form-check-input {
          width: 16px;
          height: 16px;
          margin-top: 2px;
          cursor: pointer;
          border: 2px solid #364a52;
          border-radius: 3px;
          flex-shrink: 0;
        }

        .form-check-input:checked {
          background-color: #364a52;
          border-color: #364a52;
        }

        .form-check-label {
          font-size: 0.8rem;
          color: #666;
          cursor: pointer;
          line-height: 1.4;
        }

        .text-link {
          color: #364a52;
          text-decoration: underline;
          cursor: pointer;
        }

        .text-link:hover {
          color: #0f252f;
        }

        .btn-submit {
          width: 100%;
          padding: 13px;
          background: linear-gradient(135deg, #0f252f 0%, #135874 100%);
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-submit:hover {
          background: linear-gradient(135deg, #135874 0%, #0f252f 100%);
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(0, 217, 163, 0.25);
        }

        @media (max-width: 991px) {
          .hero-title {
            font-size: 2.2rem;
          }

          .hero-content {
            padding-right: 0;
            margin-bottom: 40px;
          }

          .trust-badges {
            justify-content: flex-start;
          }

          .form-wrapper {
            max-width: 100%;
          }

          .form-card {
            max-width: 100%;
          }

          .hero-fade-overlay {
            height: 80px;
          }
        }

        @media (max-width: 576px) {
          .hero-section {
            padding: 100px 0;
          }

          .hero-title {
            font-size: 1.85rem;
          }

          .form-card {
            padding: 24px 20px;
          }

          .trust-badges {
            gap: 16px;
            flex-wrap: nowrap;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }

          .trust-badges::-webkit-scrollbar {
            display: none;
          }

          .badge-divider {
            height: 40px;
          }

          .stat-number {
            font-size: 1.8rem;
          }

          .hero-fade-overlay {
            height: 60px;
          }
        }

        /* === PHONE INPUT: FIXED TO MATCH OTHER INPUTS === */

        .phone-group {
          position: relative;
        }

        /* Force full width like other inputs */
        :global(.phone-input-container) {
          width: 100% !important;
        }

        /* Phone input field - match other inputs exactly */
        :global(.phone-input) {
          width: 100% !important;
          height: auto !important;
          padding: 11px 12px 8px 50px !important;
          border: 1px solid #ddd !important;
          border-radius: 5px !important;
          font-size: 0.9rem !important;
          background: white !important;
        }

        /* Focus effect (same as others) */
        :global(.phone-input:focus) {
          border-color: #364a52 !important;
          box-shadow: 0 0 0 3px rgba(54, 74, 82, 0.08) !important;
          outline: none !important;
        }

        /* Country flag dropdown button */
        :global(.phone-flag-btn) {
          border: none !important;
          background: transparent !important;
          position: absolute !important;
          left: 0 !important;
          top: 0 !important;
          bottom: 0 !important;
          width: 50px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }

        /* Flag dropdown container */
        :global(.flag-dropdown) {
          border: none !important;
          background: transparent !important;
        }

        /* Selected flag styling */
        :global(.selected-flag) {
          padding: 14px !important;
          background: transparent !important;
          width: 100% !important;
        }

        /* Remove arrow from flag button */
        :global(.selected-flag .arrow) {
          display: none !important;
        }

        /* Country list dropdown positioning */
        :global(.country-list) {
          max-height: 200px !important;
        }

      `}</style>
    </>
  );
};

export default HeroSection;