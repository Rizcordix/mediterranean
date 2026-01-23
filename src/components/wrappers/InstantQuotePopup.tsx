"use client";
import React, { useState, useEffect } from "react";
import { X, ChevronRight, Clock } from "lucide-react";
import icon1 from "@/assets/images/icons/confidential.svg";
import icon2 from "@/assets/images/icons/ssl.svg";
import Image from "next/image";
import SuccessPopup from "@/components/SuccessPopup";

export default function InstantQuotePopup({ isOpen, onClose }: any) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    words: "",
    title: "",
    category: "",
    service: "",
    turnaround: "",
    customTime: "",
  });

  const [showCustomTime, setShowCustomTime] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  // Category data with icons
  const categories = [
    { id: "Ebook Writing", label: "Ebook Writing", icon: "📖" },
    { id: "Cover Design & Layout", label: "Cover Design & Layout", icon: "🎨" },
    { id: "Book Publishing", label: "Book Publishing", icon: "📚" },
    { id: "Book Video Trailer", label: "Book Video Trailer", icon: "🎬" },
    { id: "Book Marketing", label: "Book Marketing", icon: "📢" },
  ];

  // Services map
  const servicesMap: Record<string, string[]> = {
    "Ebook Writing": ["Book Writing", "eBook Ghostwriting", "Article Publication", "Editing", "Proofreading"],
    "Cover Design & Layout": ["Cover Design", "Book Printing", "Web Design SEO", "Editing"],
    "Book Publishing": ["Audio Books", "Article Publication", "Book Printing", "Editing", "Proofreading"],
    "Book Video Trailer": ["Book Video Trailer"],
    "Book Marketing": ["Book Marketing", "Blog Writing", "Website Content Writing", "Web Design SEO"],
  };

  const turnaroundOptions = ["4 hours", "8 hours", "12 hours", "24 hours", "48 hours", "72 hours", "1 week"];

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCategorySelect = (categoryId: string) => {
    setForm({ ...form, category: categoryId, service: "", turnaround: "" });
  };

  const handleServiceSelect = (service: string) => {
    setForm({ ...form, service, turnaround: "" });
  };

  const handleTurnaroundSelect = (time: string) => {
    setForm({ ...form, turnaround: time, customTime: "" });
    setShowCustomTime(false);
  };

  // toast auto-hide
  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 3500);
    return () => clearTimeout(t);
  }, [toast]);

  const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast({ message, type });
  };

  const handleSubmit = async () => {
    // Basic safety validation - the button is already disabled when fields are incomplete,
    // but double-check before sending.
    const { name, email, words, title, category, service, turnaround, customTime } = form;
    if (!email || !email.includes("@") || !category || !service || !turnaround) {
      showToast("⚠️ Please complete all required fields.", "error");
      return;
    }

    setSubmitting(true);

    try {
      const payload = {
        name,
        email,
        words,
        title,
        category,
        service,
        turnaround,
        customTime,
      };

      const res = await fetch("/api/sendEmail/getquote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setShowSuccessPopup(true);
        // reset form
        setForm({
          name: "",
          email: "",
          words: "",
          title: "",
          category: "",
          service: "",
          turnaround: "",
          customTime: "",
        });
        setShowCustomTime(false);
        // close popup after a short delay so user sees the popup briefly
        setTimeout(() => {
          try {
            onClose?.();
          } catch {
            // ignore
          }
        }, 4000);
        
      } else {
        console.error("GetQuote API error:", data?.message ?? data);
        showToast("❌ Unsuccessful — please try again later.", "error");
      }
    } catch (err) {
      console.error("GetQuote submit error:", err);
      showToast("❌ Unsuccessful — please try again later.", "error");
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const isSubmitDisabled = submitting || !form.category || !form.service || !form.turnaround || !form.email || !form.email.includes("@");

  return (
    <>
      <SuccessPopup
        isOpen={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
        formType="quote"
      />

      <div className="overlay">
        {/* toast */}
        {toast && (
          <div
            className={`popup-toast ${toast.type === "success" ? "toast-success" : "toast-error"}`}
            role="status"
            aria-live="polite"
          >
            {toast.message}
          </div>
        )}

        <div className="popup" role="dialog" aria-modal="true" aria-label="Instant quote">
          <button onClick={onClose} className="close-btn" aria-label="Close">
            <X size={24} />
          </button>

        <h2 className="title">Get an Instant Quote</h2>
        <p className="subtitle">Fill in your details to receive a customized quote</p>

        <div>
          {/* Basic Info */}
          <div className="form-grid">
            <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} className="input-field" />
            <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} required className="input-field" />
            <input type="number" name="words" placeholder="Number of Words" value={form.words} onChange={handleChange} className="input-field" />
            <input type="text" name="title" placeholder="Title (Optional)" value={form.title} onChange={handleChange} className="input-field" />
          </div>

          {/* Three-Step Selection */}
          <div className="selection-container">
            {/* Step 1: Category */}
            <div className={`selection-box ${form.category ? "completed" : ""}`}>
              <div className="box-header">
                <span className="step-number">1</span>
                <h3 className="box-title">Category</h3>
              </div>
              <div className="options-list">
                {categories.map((cat) => (
                  <div
                    key={cat.id}
                    className={`option-item ${form.category === cat.id ? "selected" : ""}`}
                    onClick={() => handleCategorySelect(cat.id)}
                  >
                    <span className="option-icon">{cat.icon}</span>
                    <span className="option-label">{cat.label}</span>
                    {form.category === cat.id && <ChevronRight size={18} className="check-icon" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Service */}
            <div className={`selection-box ${form.category ? "active" : "disabled"} ${form.service ? "completed" : ""}`}>
              <div className="box-header">
                <span className="step-number">2</span>
                <h3 className="box-title">Select a Service</h3>
              </div>
              {form.category ? (
                <div className="options-list">
                  {servicesMap[form.category]?.map((srv) => (
                    <div key={srv} className={`option-item ${form.service === srv ? "selected" : ""}`} onClick={() => handleServiceSelect(srv)}>
                      <span className="option-label">{srv}</span>
                      {form.service === srv && <ChevronRight size={18} className="check-icon" />}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <p>Please select a category first</p>
                </div>
              )}
            </div>

            {/* Step 3: Turnaround Time */}
            <div className={`selection-box ${form.service ? "active" : "disabled"} ${form.turnaround ? "completed" : ""}`}>
              <div className="box-header">
                <span className="step-number">3</span>
                <h3 className="box-title">Turnaround Time</h3>
              </div>
              {form.service ? (
                <>
                  <div className="options-list">
                    {turnaroundOptions.map((option) => (
                      <div
                        key={option}
                        className={`option-item turnaround-option ${form.turnaround === option ? "selected" : ""}`}
                        onClick={() => handleTurnaroundSelect(option)}
                      >
                        <Clock size={16} className="clock-icon" />
                        <span className="option-label">{option}</span>
                        {form.turnaround === option && <ChevronRight size={18} className="check-icon" />}
                      </div>
                    ))}
                  </div>

                  {!showCustomTime ? (
                    <button type="button" className="custom-time-btn" onClick={() => setShowCustomTime(true)}>
                      Need it faster?
                    </button>
                  ) : (
                    <div className="custom-time-input">
                      <input type="text" name="customTime" placeholder="Enter custom time (e.g., 2 hours)" value={form.customTime} onChange={handleChange} className="input-field" />
                      <button
                        type="button"
                        className="set-btn"
                        onClick={() => {
                          if (form.customTime) {
                            setForm({ ...form, turnaround: form.customTime });
                          }
                          setShowCustomTime(false);
                        }}
                      >
                        Set
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="empty-state">
                  <p>Please select a service first</p>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="footer">
            <div className="security-badges">
              <div className="badge">
                <Image src={icon1} alt="Confidential" width={170} />
              </div>
              <div className="badge">
                <Image src={icon2} alt="SSL Encrypted" width={114} />
              </div>
            </div>

            <button onClick={handleSubmit} className="submit-btn" disabled={isSubmitDisabled}>
              {submitting ? "Sending..." : "Get Instant Quote"}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(15, 37, 47, 0.75);
          backdrop-filter: blur(8px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          padding: 20px;
        }

        .popup {
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(15, 37, 47, 0.3);
          width: 100%;
          max-width: 1200px;
          padding: 40px;
          position: relative;
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          overflow-y: auto;
          max-height: 95vh;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          border: none;
          background: #eeeae7;
          cursor: pointer;
          color: #364a52;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }

        .close-btn:hover {
          background: #364a52;
          color: #ffffff;
        }

        .title {
          font-size: 32px;
          font-weight: 600;
          color: #0f252f;
          margin: 0 0 8px 0;
        }

        .subtitle {
          font-size: 15px;
          color: #6b7280;
          margin: 0 0 32px 0;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 32px;
        }

        .input-field {
          width: 100%;
          padding: 14px 16px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          font-size: 15px;
          color: #0f252f;
          transition: all 0.2s;
          background: #ffffff;
        }

        .input-field:focus {
          outline: none;
          border-color: #364a52;
          box-shadow: 0 0 0 3px rgba(54, 74, 82, 0.1);
        }

        .input-field::placeholder {
          color: #9ca3af;
        }

        .selection-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 32px;
        }

        .selection-box {
          background: #fafafa;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          padding: 20px;
          transition: all 0.3s;
          min-height: 320px;
          display: flex;
          flex-direction: column;
        }

        .selection-box.active {
          border-color: #364a52;
          background: #ffffff;
        }

        .selection-box.disabled {
          opacity: 0.5;
          pointer-events: none;
        }

        .selection-box.completed {
          border-color: #10b981;
        }

        .box-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          padding-bottom: 16px;
          border-bottom: 1px solid #e5e7eb;
        }

        .step-number {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #364a52;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 14px;
          flex-shrink: 0;
        }

        .selection-box.completed .step-number {
          background: #10b981;
        }

        .box-title {
          font-size: 16px;
          font-weight: 600;
          color: #0f252f;
          margin: 0;
        }

        .options-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
          overflow-y: auto;
        }

        .option-item {
          padding: 10px 14px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          cursor: pointer;
          background: #ffffff;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: #374151;
        }

        .option-item:hover {
          border-color: #364a52;
          background: #f9fafb;
        }

        .option-item.selected {
          border-color: #364a52;
          background: #eeeae7;
          color: #0f252f;
          font-weight: 500;
        }

        .option-icon {
          font-size: 18px;
          flex-shrink: 0;
        }

        .option-label {
          flex: 1;
        }

        .check-icon {
          color: #364a52;
          flex-shrink: 0;
        }

        .turnaround-option {
          gap: 8px;
        }

        .clock-icon {
          color: #6b7280;
          flex-shrink: 0;
        }

        .empty-state {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
          color: #9ca3af;
          font-size: 14px;
          text-align: center;
        }

        .custom-time-btn {
          margin-top: 12px;
          background: none;
          border: none;
          color: #364a52;
          font-size: 14px;
          cursor: pointer;
          text-align: right;
          padding: 8px 0;
          text-decoration: underline;
          transition: opacity 0.2s;
        }

        .custom-time-btn:hover {
          opacity: 0.7;
        }

        .custom-time-input {
          display: flex;
          gap: 8px;
          margin-top: 12px;
        }

        .custom-time-input .input-field {
          flex: 1;
        }

        .set-btn {
          background: #364a52;
          color: #ffffff;
          border: none;
          padding: 0 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 500;
          font-size: 14px;
          transition: all 0.2s;
          white-space: nowrap;
        }

        .set-btn:hover {
          background: #0f252f;
        }

        .footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 24px;
          border-top: 1px solid #e5e7eb;
        }

        .security-badges {
          display: flex;
          gap: 24px;
        }

        .badge {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #6b7280;
          font-size: 14px;
        }

        .badge svg {
          color: #364a52;
        }

        .submit-btn {
          background: #364a52;
          color: #ffffff;
          border: none;
          padding: 14px 32px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }

        .submit-btn:hover:not(:disabled) {
          background: #0f252f;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(15, 37, 47, 0.2);
        }

        .submit-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* toast styles */
        .popup-toast {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          padding: 12px 18px;
          border-radius: 8px;
          color: #000;
          font-weight: 600;
          font-size: 14px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
          z-index: 11000;
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
          from {
            opacity: 0;
            transform: translate(-50%, -20px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }

        @keyframes fadeOut {
          to {
            opacity: 0;
            transform: translate(-50%, -10px);
          }
        }

        @media (max-width: 1024px) {
          .selection-container {
            grid-template-columns: 1fr;
          }

          .selection-box {
            min-height: auto;
          }
        }

        @media (max-width: 768px) {
          .popup {
            padding: 24px;
          }

          .title {
            font-size: 24px;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .footer {
            flex-direction: column;
            gap: 20px;
            align-items: stretch;
          }

          .security-badges {
            flex-direction: column;
            gap: 12px;
          }

          .submit-btn {
            width: 100%;
          }
        }
      `}</style>
      </div>
    </>
  );
}
