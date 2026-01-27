import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import SuccessPopup from "@/components/SuccessPopup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { User, Mail, MessageSquare } from "lucide-react";

type Props = {
  showOnEveryVisit?: boolean;
  delayMs?: number;
};

type Toast = { message: string; type: "success" | "error" } | null;

const PopupCard = ({ showOnEveryVisit = true, delayMs = 600 }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<Toast>(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const mountedRef = useRef(false);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    mountedRef.current = true;
    const alreadyShown = sessionStorage.getItem("popupShown") === "true";

    if (showOnEveryVisit && !alreadyShown) {
      const t = window.setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("popupShown", "true");
      }, delayMs);
      return () => clearTimeout(t);
    }
  }, [showOnEveryVisit, delayMs]);

  useEffect(() => {
    if (!mountedRef.current) return;
    const originalOverflow = document?.documentElement?.style?.overflow;
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = originalOverflow || "";
    }
    return () => {
      document.documentElement.style.overflow = originalOverflow || "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!mountedRef.current) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && closeBtnRef.current) {
      closeBtnRef.current.focus();
    }
  }, [isOpen]);

  const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast({ message, type });
    window.setTimeout(() => setToast(null), 3000);
  };

  const handleSubmit = async () => {
    if (!name || !email || !email.includes("@") || !phone || !message) {
      showToast("Please fill all fields correctly.", "error");
      return;
    }

    if (!consent) {
      showToast("Please consent to the text messages agreement.", "error");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/sendEmail/discountform", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setShowSuccessPopup(true);
        setIsOpen(false);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setConsent(false);
      } else {
        console.error("Email sending failed:", data?.message ?? data);
        showToast("Submission failed. Try again.", "error");
      }
    } catch (err) {
      console.error("Submit error:", err);
      showToast("Submission failed. Try again.", "error");
    } finally {
      setSubmitting(false);
    }
  };

  if (typeof document === "undefined") return null;

  return createPortal(
    <>
      <SuccessPopup
        isOpen={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
        formType="discount"
      />

      {toast && (
        <div className={`popup-toast ${toast.type === "success" ? "toast-success" : "toast-error"}`}>
          {toast.message}
        </div>
      )}

      <style>{`
        * {
          box-sizing: border-box;
        }

        .popup-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 37, 47, 0.85);
          backdrop-filter: blur(2px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
          overflow-y: auto;
        }

        .popup-container {
          background: white;
          border-radius: 16px;
          max-width: 550px;
          width: 100%;
          max-height: 80vh;
          overflow-y: auto;
          box-shadow: 0 20px 50px rgba(15, 37, 47, 0.4);
          position: relative;
          animation: slideUp 0.3s ease;
          margin: auto;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .popup-close {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: none;
          background: #364a52;
          color: white;
          font-size: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: background 0.2s ease;
        }

        .popup-close:hover {
          background: #0f252f;
        }

        .popup-content {
          padding: 32px 28px 28px;
          display: block;
        }

        .popup-badge-wrapper {
          text-align: center;
          margin-bottom: 16px;
        }

        .popup-badge {
          display: inline-block;
          background: #ff4444;
          color: white;
          padding: 8px 20px;
          border-radius: 20px;
          font-weight: 700;
          font-size: 14px;
        }

        .popup-title {
          font-size: 1.15rem;
          color: #0f252f;
          margin: 0 0 16px 0;
          padding: 0;
          font-weight: 600;
          line-height: 1.4;
          text-align: center;
        }

        .text-accent {
          color: #135874;
        }

        .testimonial {
          background: #f8f9fa;
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 20px;
        }

        .testimonial-content {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .author-image {
          flex-shrink: 0;
          width: 50px;
          height: 50px;
        }

        .author-image img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          background: #364a52;
          display: block;
        }

        .testimonial-text {
          flex: 1;
          min-width: 0;
        }

        .quote {
          font-size: 0.75rem;
          line-height: 1.5;
          color: #364a52;
          margin: 0 0 8px 0;
          font-style: italic;
        }

        .author {
          font-size: 0.65rem;
          color: #666;
          margin: 0;
        }

        .author strong {
          color: #0f252f;
          font-weight: 600;
        }

        .popup-form {
          display: block;
        }

        .form-group {
          margin-bottom: 12px;
          position: relative;
        }

        .input-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
          pointer-events: none;
          color: #364a52;
        }

        .textarea-icon {
          top: 14px;
          transform: none;
        }

        .custom-input,
        .custom-textarea {
          padding: 12px 14px 12px 42px;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          font-size: 0.8rem;
          transition: all 0.2s ease;
          width: 100%;
          background: white;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          display: block;
        }

        .custom-textarea {
          min-height: 80px;
          resize: vertical;
        }

        .custom-input:focus,
        .custom-textarea:focus {
          border-color: #0f252f;
          box-shadow: 0 0 0 3px rgba(15, 37, 47, 0.1);
          outline: none;
        }

        .custom-input::placeholder,
        .custom-textarea::placeholder {
          color: #999;
        }

        .consent-check {
          margin-bottom: 16px;
          padding-left: 0;
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .form-check-input {
          width: 16px;
          height: 16px;
          margin-top: 2px;
          cursor: pointer;
          border: 2px solid #0f252f;
          border-radius: 4px;
          flex-shrink: 0;
          appearance: none;
          -webkit-appearance: none;
        }

        .form-check-input:checked {
          background-color: #0f252f;
          border-color: #0f252f;
        }

        .form-check-input:checked::after {
          content: '✓';
          color: white;
          font-size: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }

        .form-check-label {
          font-size: 0.75rem;
          color: #666;
          cursor: pointer;
          line-height: 1.5;
          flex: 1;
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
          padding: 14px;
          background: linear-gradient(135deg, #0f252f 0%, #135874 100%);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          margin: 0;
          display: block;
        }

        .btn-submit:hover:not(:disabled) {
          background: linear-gradient(135deg, #135874 0%, #0f252f 100%);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(15, 37, 47, 0.3);
        }

        .btn-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .popup-toast {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          z-index: 10001;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .toast-success { 
          background: #d9fdd3; 
          color: #0f5132; 
        }
        
        .toast-error { 
          background: #f8d7da; 
          color: #842029; 
        }

        /* === PHONE INPUT STYLING === */
        .phone-group {
          position: relative;
          margin-bottom: 12px;
          z-index: 1;
        }

        /* Phone input container */
        .popup-phone-container {
          width: 100% !important;
          position: relative !important;
        }

        /* Phone input field - match other inputs */
        .popup-phone-input {
          width: 100% !important;
          height: auto !important;
          padding: 12px 14px 12px 52px !important;
          border: 2px solid #e0e0e0 !important;
          border-radius: 8px !important;
          font-size: 0.8rem !important;
          background: white !important;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif !important;
          transition: all 0.2s ease !important;
        }

        /* Focus effect */
        .popup-phone-input:focus {
          border-color: #0f252f !important;
          box-shadow: 0 0 0 3px rgba(15, 37, 47, 0.1) !important;
          outline: none !important;
        }

        /* Flag button */
        .popup-phone-flag {
          border: none !important;
          background: transparent !important;
          position: absolute !important;
          left: 0 !important;
          top: 0 !important;
          bottom: 0 !important;
          width: 52px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          z-index: 2 !important;
        }

        /* Flag dropdown */
        .popup-phone-container .flag-dropdown {
          border: none !important;
          background: transparent !important;
          position: absolute !important;
        }

        /* Selected flag */
        .popup-phone-container .selected-flag {
          padding: 14px !important;
          background: transparent !important;
          width: 100% !important;
        }

        /* Remove arrow */
        .popup-phone-container .selected-flag .arrow {
          // display: none !important;
        }

        /* Country list dropdown - ensure it's visible */
        .popup-phone-container .country-list {
          position: absolute !important;
          z-index: 9999 !important;
          background: white !important;
          border: 1px solid #e0e0e0 !important;
          border-radius: 8px !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
          overflow-y: auto !important;
          width: 300% !important;
          left: 30% !important;
          top: 100% !important;
          margin-top: 4px !important;
        }

        @media (max-width: 576px) {
          .popup-container {
            max-width: calc(100% - 24px);
            border-radius: 12px;
            max-height: 95vh;
          }

          .popup-content {
            padding: 28px 20px 20px;
          }

          .popup-title {
            font-size: 1rem;
          }

          .testimonial-content {
            flex-direction: column;
            text-align: center;
            align-items: center;
          }

          .author-image {
            margin: 0 auto;
          }

          .form-group {
            margin-bottom: 10px;
          }

          .custom-input,
          .custom-textarea {
            padding: 11px 12px 11px 40px;
            font-size: 0.75rem;
          }

          .custom-textarea {
            min-height: 70px;
          }

          .btn-submit {
            padding: 13px;
            font-size: 0.85rem;
          }

          .popup-phone-input {
            padding: 11px 12px 11px 50px !important;
            font-size: 0.75rem !important;
          }
        }
      `}</style>

      {isOpen && (
        <div
          className="popup-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div className="popup-container" role="document">
            <button
              aria-label="Close"
              className="popup-close"
              onClick={() => setIsOpen(false)}
              ref={closeBtnRef}
            >
              ✕
            </button>

            <div className="popup-content">
              <h3 id="popup-title" className="popup-title">
                Your story matters. Let&apos;s talk about how <span className="text-accent">to publish it.</span>
              </h3>

              <div className="testimonial">
                <div className="testimonial-content">
                  <div className="author-image">
                    <img 
                      src="https://placehold.co/80x80/364a52/FFF?text=Author" 
                      alt="Tom Gilroy"
                    />
                  </div>
                  <div className="testimonial-text">
                    <p className="quote">
                      <em>I was impressed with their innovation, they did everything quickly, effectively, pro-actively— they&apos;re good.</em>
                    </p>
                    <p className="author">
                      <strong>Tom Gilroy</strong> author of Season
                    </p>
                  </div>
                </div>
              </div>

              <form className="popup-form" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                <div className="form-group">
                  <User size={16} className="input-icon" />
                  <input
                    type="text"
                    className="custom-input"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <Mail size={16} className="input-icon" />
                  <input
                    type="email"
                    className="custom-input"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="phone-group">
                  <PhoneInput
                    country={'us'}
                    value={phone}
                    onChange={setPhone}
                    placeholder="Phone"
                    containerClass="popup-phone-container"
                    inputClass="popup-phone-input"
                    buttonClass="popup-phone-flag"
                  />
                </div>

                <div className="form-group">
                  <MessageSquare size={16} className="input-icon textarea-icon" />
                  <textarea
                    className="custom-textarea"
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <div className="consent-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="consent-popup"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="consent-popup">
                    I consent to the <a href='/text-message-consent-agreement' target='_blank' className="text-link">text messages agreement</a>
                  </label>
                </div>

                <button 
                  type="submit"
                  className="btn-submit"
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Get a Unique Offer →"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>,
    document.body
  );
};

export default PopupCard;