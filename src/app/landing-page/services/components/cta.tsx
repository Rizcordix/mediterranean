"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
// import Image from 'next/image';
import bookLeftImg from '@/assets/images/landingpage/left.png';
import bookRightImg from '@/assets/images/landingpage/right.png';
// import { PhoneCall } from 'lucide-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import author from '@/assets/images/thumbnails/John_Doe.jpg';

const CTASection = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    consent: false
  });

  const [submitting, setSubmitting] = useState(false);
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

      <div className="cta-section">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-4">
              <div className="cta-content">
                <h2 className="cta-title">We&apos;re here to help</h2>
                <p className="cta-subtitle">
                  Ready to share your story? Tell us what you need — we&apos;ll help bring your book to life
                </p>
              </div>
            </div>

            {/* Right Form */}
            <div className="col-lg-5 offset-lg-2">
              <div className="form-wrapper">
                {/* Left side books image */}
                <div className="books-image books-left">
                  <img 
                    src={bookLeftImg.src} 
                    alt="Books left"
                    className="books-img"
                  />
                </div>

                {/* Right side books image */}
                <div className="books-image books-right">
                  <img 
                    src={bookRightImg.src}
                    alt="Books right"
                    className="books-img"
                  />
                </div>

                <div className="form-card">
                  <h3 className="form-title">
                    Your story matters. Let&apos;s talk about how <span className="text-accent">to publish it.</span>
                  </h3>

                  {/* Testimonial */}
                  <div className="testimonial">
                    <div className="testimonial-content">
                      <div className="author-image">
                        <img 
                          src={author.src}
                          alt="James H."
                        />
                      </div>
                      <div className="testimonial-text">
                        <p className="quote">
                          <em>I was impressed with their innovation, they did everything quickly, effectively, pro-actively— they&apos;re good.</em>
                        </p>
                        <p className="author">
                          <strong>James H.</strong> author of Season
                        </p>
                      </div>
                    </div>
                  </div>
                  
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
                          <rect x="3" y="5" width="14" height="10" rx="2" stroke="#0f252f" strokeWidth="1.5"/>
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
                        id="consent-cta"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleInputChange}
                      />
                      <label className="form-check-label" htmlFor="consent-cta">
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

                  {/* IBPA Badge */}
                  {/* <div className="ibpa-badge">
                    <span className="ibpa-text">Members of</span>
                    <div className="ibpa-logo">
                      <img 
                        src="https://placehold.co/120x40/00d9a3/FFF?text=IBPA+Logo" 
                        alt="Independent Book Publishers Association"
                      />
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta-section {
          background: linear-gradient(135deg, #eeeae7 0%, #e0dcd9 100%);
          padding: 60px 0;
          position: relative;
          overflow: hidden;
        }

        .cta-content {
          padding-right: 40px;
        }

        .cta-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #0f252f;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .cta-subtitle {
          font-size: 1.15rem;
          color: #364a52;
          line-height: 1.6;
        }

        .form-wrapper {
          position: relative;
          max-width: 400px;
          margin-left: auto;
        }

        .books-image {
          position: absolute;
          pointer-events: none;
          z-index: 0;
          display: none;
        }

        @media (min-width: 992px) {
          .books-image {
            display: block;
          }
        }

        .books-left {
          left: -200px;
          top: 60%;
          transform: translateY(-50%);
          width: 250px;
          height: 350px;
        }

        .books-right {
          right: -200px;
          top: 60%;
          transform: translateY(-50%);
          width: 250px;
          height: 350px;
        }

        .books-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          opacity: 0.9;
        }

        .form-card {
          background: white;
          border-radius: 16px;
          padding: 24px 24px 20px;
          box-shadow: 0 12px 40px rgba(15, 37, 47, 0.12);
          position: relative;
          z-index: 1;
        }

        .form-title {
          font-size: 1.15rem;
          color: #0f252f;
          margin-bottom: 5px;
          font-weight: 600;
          line-height: 1.3;
          text-align: center;
        }

        .text-accent {
          color: #135874;
        }

        .testimonial {
          background: #f8f9fa;
          border-radius: 12px;
          padding: 14px 16px;
          margin-bottom: 8px;
        }

        .testimonial-content {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .author-image {
          flex-shrink: 0;
        }

        .author-image img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
        }

        .testimonial-text {
          flex: 1;
        }

        .quote {
          font-size: 0.7rem;
          line-height: 1.5;
          color: #364a52;
          margin-bottom: 8px;
          font-style: italic;
        }

        .author {
          font-size: 0.6rem;
          color: #666;
          margin: 0;
        }

        .author strong {
          color: #0f252f;
          font-weight: 600;
        }

        .form-container {
          width: 100%;
        }

        .form-group {
          margin-bottom: 4px;
          position: relative;
        }

        .input-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
          pointer-events: none;
        }

        .custom-input {
          padding: 10px 12px 10px 40px;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          font-size: 0.7rem;
          transition: all 0.2s ease;
          width: 100%;
          background: white;
        }

        .custom-input:focus {
          border-color: #0f252f;
          box-shadow: 0 0 0 3px rgba(0, 217, 163, 0.1);
          outline: none;
        }

        .custom-input::placeholder {
          color: #999;
        }

        .consent-check {
          margin-bottom: 4px;
          padding-left: 6px;
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .form-check-input {
          width: 14px;
          height: 14px;
          margin-top: 2px;
          cursor: pointer;
          border: 2px solid #0f252f;
          border-radius: 4px;
          flex-shrink: 0;
        }

        .form-check-input:checked {
          background-color: #0f252f;
          border-color: #0f252f;
        }

        .form-check-label {
          font-size: 0.7rem;
          color: #666;
          cursor: pointer;
          line-height: 1.5;
        }

        .text-link {
          color: #0f252f;
          text-decoration: underline;
          cursor: pointer;
        }

        .text-link:hover {
          color: #135874;
        }

        .btn-submit {
          width: 100%;
          padding: 12px;
          background: linear-gradient(135deg, #0f252f 0%, #135874 100%);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-bottom: 16px;
        }

        .btn-submit:hover {
          background: linear-gradient(135deg, #135874 0%, #0f252f 100%);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 217, 163, 0.3);
        }

        .ibpa-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding-top: 12px;
          border-top: 1px solid #e0e0e0;
        }

        .ibpa-text {
          font-size: 0.9rem;
          color: #666;
        }

        .ibpa-logo img {
          height: 28px;
          width: auto;
        }

        @media (max-width: 991px) {
          .cta-title {
            font-size: 2rem;
          }

          .cta-content {
            padding-right: 0;
            margin-bottom: 40px;
            text-align: center;
          }

          .form-wrapper {
            max-width: 100%;
          }
        }

        @media (max-width: 576px) {
          .cta-section {
            padding: 60px 0;
          }

          .cta-title {
            font-size: 1.75rem;
          }

          .form-card {
            padding: 24px 20px;
          }

          .testimonial {
            padding: 16px;
          }

          .testimonial-content {
            flex-direction: column;
            text-align: center;
          }

          .author-image {
            margin: 0 auto;
          }

          .author-image img {
            width: 50px;
            height: 50px;
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

export default CTASection;