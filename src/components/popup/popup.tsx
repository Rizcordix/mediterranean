import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";

type Props = {
  showOnEveryVisit?: boolean;
  delayMs?: number;
};

type Toast = { message: string; type: "success" | "error" } | null;

const PopupCard: React.FC<Props> = ({ showOnEveryVisit = true, delayMs = 600 }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [toast, setToast] = useState<Toast>(null);
  const mountedRef = useRef<boolean>(false);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    mountedRef.current = true;
    const alreadySeen = false;

    if (showOnEveryVisit || !alreadySeen) {
      const t = window.setTimeout(() => {
        setIsOpen(true);
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
    window.setTimeout(() => setToast(null), 3500);
  };

  const handleSubmit = async () => {
    if (!name || !email || !email.includes("@") || !phone || !message) {
      showToast("⚠️ Please fill in all fields with valid information.", "error");
      return;
    }

    try {
      const response = await fetch("/api/sendEmail/discountform", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });

      const data = await response.json();

      if (response.ok) {
        showToast("✅ Thank you! Your details have been sent.", "success");
        setIsOpen(false);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        console.error("Email sending failed:", data?.message ?? data);
        showToast("❌ Unsuccessful — please try again later.", "error");
      }
    } catch (err) {
      console.error("Submit error:", err);
      showToast("❌ Unsuccessful — please try again later.", "error");
    }
  };

  if (typeof document === "undefined") return null;

  return createPortal(
    <>
      {toast && (
        <div
          className={`popup-toast ${
            toast.type === "success" ? "toast-success" : "toast-error"
          }`}
        >
          {toast.message}
        </div>
      )}

      <style>{`
        .popup-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 37, 47, 0.85);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; } 
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .popup-card {
          background: white;
          border-radius: 8px;
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          overflow: visible;
          box-shadow: 0 25px 70px rgba(15, 37, 47, 0.4);
          position: relative;
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .popup-close {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 36px;
          height: 36px;
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
          transition: all 0.25s ease;
          font-weight: 400;
          line-height: 1;
        }

        .popup-close:hover {
          background: #0f252f;
          transform: rotate(90deg) scale(1.1);
        }

        .popup-content {
          display: flex;
          padding: 0;
          gap: 0;
          overflow: visible;
          border-radius: 8px;
        }

        .popup-left {
          flex: 0 0 40%;
          background: #0f252f;
          padding: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: visible;
        }

        .popup-book-image {
          width: 120%;
          max-width: none;
          height: auto;
          object-fit: contain;
          margin-left: -20%;
          filter: drop-shadow(0 25px 50px rgba(0, 0, 0, 0.4));
          transform: scale(1.08);
        }

        .popup-discount-badge {
          position: absolute;
          top: 30px;
          right: -10px;
          background: #ff4444;
          color: white;
          padding: 10px 18px;
          border-radius: 25px;
          font-weight: 700;
          font-size: 15px;
          text-transform: uppercase;
          box-shadow: 0 4px 12px rgba(255, 68, 68, 0.5);
          z-index: 5;
        }

        .popup-right {
          flex: 1;
          background: #eeeae7;
          padding: 40px;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          border-radius: 0 8px 8px 0;
        }

        .popup-heading {
          font-size: 20px;
          font-weight: 600;
          color: #0f252f;
          margin-bottom: 8px;
          line-height: 1.3;
          text-transform: uppercase;
          text-align: center;
        }

        .popup-subheading {
          font-size: 28px;
          font-weight: 700;
          color: #364a52;
          margin-bottom: 8px;
          line-height: 1.2;
          text-align: center;
        }

        .popup-description {
          font-size: 16px;
          color: #364a52;
          margin-bottom: 24px;
          line-height: 1.5;
          text-align: center;
          font-weight: 600;
        }

        .popup-form-section {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .popup-input,
        .popup-textarea {
          width: 100%;
          padding: 14px 16px;
          border: 1px solid #364a52;
          border-radius: 4px;
          font-size: 14px;
          transition: all 0.2s;
          font-family: inherit;
          box-sizing: border-box;
          color: #0f252f;
          background: white;
        }

        .popup-textarea {
          resize: vertical;
          min-height: 100px;
          font-family: inherit;
        }

        .popup-input::placeholder,
        .popup-textarea::placeholder {
          color: #999;
        }

        .popup-input:focus,
        .popup-textarea:focus {
          outline: none;
          border-color: #364a52;
          box-shadow: 0 0 0 2px rgba(54, 74, 82, 0.1);
        }
        
        .popup-input,
        .popup-input:focus,
        .popup-input:-webkit-autofill,
        .popup-input:-webkit-autofill:focus,
        .popup-input:-webkit-autofill:hover,
        .popup-textarea,
        .popup-textarea:focus {
          color: #0f252f !important;
          -webkit-text-fill-color: #0f252f !important;
        }

        .popup-input,
        .popup-textarea {
          -webkit-appearance: none;
          appearance: none;
        }

        .popup-input:-webkit-autofill,
        .popup-textarea:-webkit-autofill {
          -webkit-box-shadow: 0 0 0px 1000px white inset !important;
          box-shadow: 0 0 0px 1000px white inset !important;
          transition: background-color 5000s ease-in-out 0s;
        }

        .popup-submit {
          width: 100%;
          padding: 16px;
          background: #364a52;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-top: 6px;
        }

        .popup-submit:hover {
          background: #0f252f;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(54, 74, 82, 0.3);
        }

        .popup-submit:active {
          transform: translateY(0);
        }

        .popup-footer {
          text-align: center;
          margin-top: 16px;
          font-size: 11px;
          color: #666;
          line-height: 1.6;
        }

        .popup-footer a {
          color: #364a52;
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .popup-backdrop {
            padding: 10px;
            align-items: flex-start;
            padding-top: 20px;
          }

          .popup-card {
            max-height: 95vh;
            border-radius: 6px;
          }

          .popup-content {
            flex-direction: column;
          }
          
          .popup-left {
            display: none;
          }

          .popup-right {
            padding: 28px 20px 24px;
            overflow-y: auto;
            max-height: 95vh;
          }

          .popup-heading {
            font-size: 16px;
            margin-bottom: 6px;
          }

          .popup-subheading {
            font-size: 22px;
            margin-bottom: 6px;
          }

          .popup-description {
            font-size: 13px;
            margin-bottom: 20px;
          }

          .popup-form-section {
            gap: 12px;
          }

          .popup-input,
          .popup-textarea {
            padding: 12px 14px;
            font-size: 13px;
          }

          .popup-textarea {
            min-height: 80px;
          }

          .popup-submit {
            padding: 14px;
            font-size: 14px;
            margin-top: 4px;
          }

          .popup-footer {
            margin-top: 14px;
            font-size: 10px;
          }

          .popup-close { 
            top: 12px; 
            right: 12px; 
            width: 32px; 
            height: 32px; 
            font-size: 18px;
          }
        }

        @media (max-width: 640px) {
          .popup-backdrop { 
            padding: 8px; 
            padding-top: 15px;
          }
          
          .popup-right {
            padding: 24px 16px 20px;
          }

          .popup-heading {
            font-size: 15px;
          }

          .popup-subheading {
            font-size: 20px;
          }
        }

        .popup-toast {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          padding: 14px 24px;
          border-radius: 8px;
          color: #000;
          font-weight: 600;
          font-size: 14px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
          z-index: 10000;
          animation: slideDown 0.4s ease, fadeOut 0.4s ease 3s forwards;
          font-family: system-ui, sans-serif;
          max-width: 90%;
        }

        .toast-success { 
          background: #d9fdd3; 
          border: 1px solid #b7e6b2; 
          color: #0f5132; 
        }
        
        .toast-error { 
          background: #f8d7da; 
          border: 1px solid #f5c2c7; 
          color: #842029; 
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translate(-50%, -20px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }

        @keyframes fadeOut {
          to { opacity: 0; transform: translate(-50%, -10px); }
        }
      `}</style>

      {isOpen && (
        <div
          className="popup-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-heading"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div className="popup-card" role="document">
            <button
              aria-label="Close"
              className="popup-close"
              onClick={() => setIsOpen(false)}
              ref={closeBtnRef}
            >
              ✕
            </button>

            <div className="popup-content">
              <div className="popup-left">
                <div className="popup-discount-badge">50% OFF</div>
                <img 
                  src="https://placehold.co/1200x1440" 
                  alt="Book Cover" 
                  className="popup-book-image"
                />
              </div>

              <div className="popup-right">
                <h2 id="popup-heading" className="popup-heading">Signup Now To Avail</h2>
                <p className="popup-subheading">THE 50% DISCOUNT OFFER</p>
                <p className="popup-description">GET A FREE CONSULTATION CALL</p>

                <div className="popup-form-section">
                  <input
                    type="text"
                    className="popup-input"
                    placeholder="Enter Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="email"
                    className="popup-input"
                    placeholder="Enter Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="tel"
                    className="popup-input"
                    placeholder="Enter Phone No"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <textarea
                    className="popup-textarea"
                    placeholder="Brief Discussion about your book*"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <button className="popup-submit" onClick={handleSubmit}>
                    Submit
                  </button>
                </div>

                <div className="popup-footer">
                  I agree to receive communications by text message about my Customer Care from Mediterranean Publishing. You may opt-out by replying STOP or ask for more information by replying HELP. Message frequency varies. Message and data rates may apply. <a href="/privacy">Privacy Policy</a> & <a href="/terms">Terms</a>.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>,
    document.body
  );
};

export default PopupCard;