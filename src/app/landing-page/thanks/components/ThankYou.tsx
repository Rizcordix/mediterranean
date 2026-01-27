"use client";
import React, { useState, useEffect } from "react";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
// import 

const ThankYou = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(id);
  }, []);

  return (
    <section className="thank-you-section" aria-labelledby="thank-you-heading">
      <div className="thank-you-container">
        {/* Checkmark Icon */}
        <div className={`thank-you-icon ${isVisible ? "visible" : ""}`}>
          <div className="checkmark-circle">
            <Check size={60} strokeWidth={3} />
          </div>
        </div>

        {/* Main Heading */}
        <h1
          id="thank-you-heading"
          className={`thank-you-title ${isVisible ? "visible" : ""}`}
        >
          Thank you!
        </h1>

        {/* Subtitle */}
        <p className={`thank-you-subtitle ${isVisible ? "visible delay-1" : ""}`}>
          For filling up the form. We&apos;ve Received you request and will respond quickly within 1 business day. Please Check your inbox for a 
          confirmation email. You can find more information on our website and social pages.
        </p>

        {/* Two Column Section */}
        <div className={`thank-you-grid ${isVisible ? "visible delay-2" : ""}`}>
          {/* Connect Section */}
          <div className="thank-you-card">
            <h2 className="card-title">Connect With Us</h2>
            <div className="social-links">
              <a
                href="https://www.facebook.com/share/17L6o8vpt1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-btn facebook"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/mediterraneanpublishing/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="instagram"
                className="social-btn instagram"
              >
                <i className="fab fa-instagram" style={{fontSize: 26}}/>
              </a>
              <a
                href="https://www.tiktok.com/@mediterranean.pub"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="social-btn tiktok"
              >
                <i className="fab fa-tiktok" style={{fontSize: 26}}/>
              </a>
              <a
                href="https://x.com/Med_publisher"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="social-btn twitter"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
              </a>
            </div>
          </div>

          {/* Visit Website Section */}
          <div className="thank-you-card">
            <h2 className="card-title">Visit Our Website</h2>
            <Link href="/" className="website-button">
              Visit Website
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .thank-you-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 20px;
          background: linear-gradient(135deg, #f5f7fa 0%, #fff 100%);
          position: relative;
          overflow: hidden;
        }

        .thank-you-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 80%, rgba(51, 74, 82, 0.05) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(19, 88, 116, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .thank-you-container {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }

        .thank-you-icon {
          margin-bottom: 40px;
          opacity: 0;
          animation: scaleIn 0.6s ease-out forwards;
        }

        .thank-you-icon.visible {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .checkmark-circle {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0f252f 0%, #135874 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          color: white;
          box-shadow: 0 10px 40px rgba(15, 37, 47, 0.15);
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 10px 40px rgba(15, 37, 47, 0.15);
          }
          50% {
            box-shadow: 0 10px 50px rgba(15, 37, 47, 0.25);
          }
        }

        .thank-you-title {
          font-size: clamp(2.5rem, 8vw, 3.5rem);
          font-weight: 700;
          color: #0f252f;
          margin: 30px 0 20px 0;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.2s forwards;
        }

        .thank-you-title.visible {
          animation: fadeInUp 0.8s ease-out 0.2s forwards;
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

        .thank-you-subtitle {
          font-size: 1.1rem;
          color: #555;
          max-width: 600px;
          margin: 0 auto 60px;
          line-height: 1.7;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.4s forwards;
        }

        .thank-you-subtitle.visible {
          animation: fadeInUp 0.8s ease-out 0.4s forwards;
        }

        .thank-you-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-top: 50px;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.6s forwards;
        }

        .thank-you-grid.visible {
          animation: fadeInUp 0.8s ease-out 0.6s forwards;
        }

        .thank-you-card {
          background: white;
          padding: 40px 30px;
          border-radius: 12px;
          box-shadow: 0 5px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .thank-you-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.12);
        }

        .card-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #0f252f;
          margin-bottom: 30px;
          letter-spacing: -0.5px;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .social-btn {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          font-size: 0;
          border: 2px solid transparent;
        }

        .social-btn.facebook {
          color: #1877f2;
          background: #f0f7ff;
          border-color: #e0ecff;
        }

        .social-btn.facebook:hover {
          background: #1877f2;
          color: white;
        }

        .social-btn.linkedin {
          color: #0a66c2;
          background: #f0f5ff;
          border-color: #e0ecff;
        }

        .social-btn.linkedin:hover {
          background: #0a66c2;
          color: white;
        }

        .social-btn.pinterest {
          color: #e60023;
          background: #ffe0e6;
          border-color: #ffcccc;
        }

        .social-btn.pinterest:hover {
          background: #e60023;
          color: white;
        }

        .social-btn.twitter {
          color: #1da1f2;
          background: #f0f7ff;
          border-color: #e0ecff;
        }

        .social-btn.twitter:hover {
          background: #1da1f2;
          color: white;
        }

        .social-btn.tiktok {
          color: #000;
          background: #fff;
          border-color: #ccc;
        }

        .social-btn.tiktok:hover {
          background: #000;
          color: white;
        }

        .social-btn.instagram {
          color: #e1306c;
          background: #fff;
          border-color: #e0e0e0;
        }

        .social-btn.instagram:hover {
          background: #e1306c;
          color: white;
        }

        .website-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background: linear-gradient(135deg, #0f252f 0%, #135874 100%);
          color: white;
          padding: 14px 32px;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 1rem;
          border: none;
          cursor: pointer;
        }

        .website-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(15, 37, 47, 0.3);
          background: linear-gradient(135deg, #135874 0%, #0f252f 100%);
        }

        .website-button:active {
          transform: translateY(-1px);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .thank-you-section {
            padding: 90px 20px;
            min-height: auto;
          }

          .thank-you-icon {
            margin-bottom: 30px;
          }

          .checkmark-circle {
            width: 80px;
            height: 80px;
          }

          .checkmark-circle svg {
            width: 45px;
            height: 45px;
          }

          .thank-you-title {
            font-size: 2rem;
            margin: 20px 0 15px 0;
          }

          .thank-you-subtitle {
            font-size: 1rem;
            margin-bottom: 40px;
          }

          .thank-you-grid {
            grid-template-columns: 1fr;
            gap: 30px;
            margin-top: 40px;
          }

          .thank-you-card {
            padding: 30px 20px;
          }

          .card-title {
            font-size: 1.2rem;
            margin-bottom: 20px;
          }

          .social-links {
            gap: 15px;
          }

          .social-btn {
            width: 48px;
            height: 48px;
          }

          .website-button {
            width: 100%;
            padding: 12px 24px;
          }
        }

        @media (max-width: 480px) {
          .thank-you-section {
            padding: 70px 15px;
          }

          .thank-you-title {
            font-size: 1.6rem;
            margin: 15px 0 10px 0;
          }

          .thank-you-subtitle {
            font-size: 0.95rem;
            margin-bottom: 30px;
          }

          .thank-you-grid {
            gap: 20px;
            margin-top: 30px;
          }

          .card-title {
            font-size: 1.05rem;
          }

          .checkmark-circle {
            width: 70px;
            height: 70px;
          }

          .checkmark-circle svg {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </section>
  );
};

export default ThankYou;
