import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "react-bootstrap";

type FormData = {
  name: string;
  email: string;
  phone: string;
  project: string;
};

type Toast = { message: string; type: "success" | "error" } | null;

const FloatingWidgets: React.FC = () => {
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [isCallOpen, setIsCallOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    project: ""
  });
  const [toast, setToast] = useState<Toast>(null);
  const [submitting, setSubmitting] = useState(false);

  // auto-hide toast
  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 3500);
    return () => clearTimeout(t);
  }, [toast]);

  const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast({ message, type });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // basic validation (same logic as your popup)
    const { name, email, phone, project } = formData;
    if (!name || !email || !email.includes("@") || !phone || !project) {
      showToast("⚠️ Please fill in all fields with valid information.", "error");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/sendEmail/discountform", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          message: project // backend expects `message` in PopupCard example
        })
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        showToast("✅ Thank you! Your details have been sent.", "success");
        // reset
        setFormData({ name: "", email: "", phone: "", project: "" });
        // close the panel to match PopupCard behaviour
        setIsLeftOpen(false);
      } else {
        console.error("Email sending failed:", data?.message ?? data);
        showToast("❌ Unsuccessful — please try again later.", "error");
      }
    } catch (err) {
      console.error("Submit error:", err);
      showToast("❌ Unsuccessful — please try again later.", "error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      {/* toast */}
      {toast && (
        <div
          style={{
            position: "fixed",
            top: 20,
            left: "50%",
            transform: "translateX(-50%)",
            padding: "12px 18px",
            borderRadius: 10,
            zIndex: 11000,
            fontWeight: 600,
            boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
            background: toast.type === "success" ? "#d9fdd3" : "#f8d7da",
            color: toast.type === "success" ? "#0f5132" : "#842029"
          }}
          role="status"
          aria-live="polite"
        >
          {toast.message}
        </div>
      )}

      {/* LEFT FORM WIDGET */}
      <div
        style={{
          position: "fixed",
          top: "10%",
          left: 0,
          zIndex: 9999,
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: isLeftOpen ? "translateX(0)" : "translateX(-100%)",
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "-56px",
            transform: "translateY(-50%)",
            background: "linear-gradient(135deg, #304c55 50%, #032532 50%)",
            color: "#fff",
            fontWeight: "600",
            fontSize: "14px",
            padding: "20px 12px",
            borderRadius: "0 12px 12px 0",
            cursor: "pointer",
            boxShadow: "2px 4px 12px rgba(102, 126, 234, 0.4)",
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}
          onClick={() => setIsLeftOpen(!isLeftOpen)}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform =
              "translateY(-50%) translateX(3px)";
            (e.currentTarget as HTMLElement).style.boxShadow =
              "2px 6px 16px rgba(102, 126, 234, 0.5)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(-50%)";
            (e.currentTarget as HTMLElement).style.boxShadow =
              "2px 4px 12px rgba(102, 126, 234, 0.4)";
          }}
        >
          <div style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>
            Get 50% OFF Now!
          </div>
          <i
            className={
              isLeftOpen ? "fas fa-chevron-left" : "fas fa-chevron-right"
            }
            style={{ fontSize: "14px" }}
          ></i>
        </div>

        <div
          style={{
            width: "340px",
            background: "#ffffff",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.15)",
            padding: "32px 28px",
            borderRadius: "0 16px 16px 0"
          }}
        >
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "700",
              color: "#1a202c",
              marginBottom: "8px",
              lineHeight: "1.3"
            }}
          >
            Get 50% Off Today!
          </h3>
          <p
            style={{
              fontSize: "14px",
              color: "#718096",
              marginBottom: "24px",
              lineHeight: "1.5"
            }}
          >
            Fill out the form below and we&apos;ll get back to you shortly.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              style={{
                width: "100%",
                marginBottom: "14px",
                padding: "12px 16px",
                border: "1.5px solid #e2e8f0",
                borderRadius: "10px",
                fontSize: "14px",
                fontFamily: "inherit",
                transition: "all 0.2s ease",
                outline: "none"
              }}
              onFocus={(e) => {
                (e.target as HTMLInputElement).style.borderColor = "#304c55";
                (e.target as HTMLInputElement).style.boxShadow =
                  "0 0 0 3px rgba(102, 126, 234, 0.1)";
              }}
              onBlur={(e) => {
                (e.target as HTMLInputElement).style.borderColor = "#e2e8f0";
                (e.target as HTMLInputElement).style.boxShadow = "none";
              }}
            />
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              style={{
                width: "100%",
                marginBottom: "14px",
                padding: "12px 16px",
                border: "1.5px solid #e2e8f0",
                borderRadius: "10px",
                fontSize: "14px",
                fontFamily: "inherit",
                transition: "all 0.2s ease",
                outline: "none"
              }}
              onFocus={(e) => {
                (e.target as HTMLInputElement).style.borderColor = "#304c55";
                (e.target as HTMLInputElement).style.boxShadow =
                  "0 0 0 3px rgba(102, 126, 234, 0.1)";
              }}
              onBlur={(e) => {
                (e.target as HTMLInputElement).style.borderColor = "#e2e8f0";
                (e.target as HTMLInputElement).style.boxShadow = "none";
              }}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              style={{
                width: "100%",
                marginBottom: "14px",
                padding: "12px 16px",
                border: "1.5px solid #e2e8f0",
                borderRadius: "10px",
                fontSize: "14px",
                fontFamily: "inherit",
                transition: "all 0.2s ease",
                outline: "none"
              }}
              onFocus={(e) => {
                (e.target as HTMLInputElement).style.borderColor = "#304c55";
                (e.target as HTMLInputElement).style.boxShadow =
                  "0 0 0 3px rgba(102, 126, 234, 0.1)";
              }}
              onBlur={(e) => {
                (e.target as HTMLInputElement).style.borderColor = "#e2e8f0";
                (e.target as HTMLInputElement).style.boxShadow = "none";
              }}
            />
            <textarea
              placeholder="Tell us about your project..."
              rows={4}
              value={formData.project}
              onChange={(e) =>
                setFormData({ ...formData, project: e.target.value })
              }
              style={{
                width: "100%",
                marginBottom: "18px",
                padding: "12px 16px",
                border: "1.5px solid #e2e8f0",
                borderRadius: "10px",
                fontSize: "14px",
                fontFamily: "inherit",
                resize: "vertical",
                transition: "all 0.2s ease",
                outline: "none"
              }}
              onFocus={(e) => {
                (e.target as HTMLTextAreaElement).style.borderColor = "#304c55";
                (e.target as HTMLTextAreaElement).style.boxShadow =
                  "0 0 0 3px rgba(102, 126, 234, 0.1)";
              }}
              onBlur={(e) => {
                (e.target as HTMLTextAreaElement).style.borderColor = "#e2e8f0";
                (e.target as HTMLTextAreaElement).style.boxShadow = "none";
              }}
            />
            <button
              type="submit"
              disabled={submitting}
              style={{
                width: "100%",
                padding: "14px",
                background:
                  "linear-gradient(135deg, #032532 0%, #304c55 100%)",
                color: "white",
                border: "none",
                borderRadius: "10px",
                fontSize: "15px",
                fontWeight: "600",
                cursor: submitting ? "wait" : "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)",
                opacity: submitting ? 0.75 : 1
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 6px 16px rgba(102, 126, 234, 0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 4px 12px rgba(102, 126, 234, 0.3)";
              }}
            >
              {submitting ? "Sending..." : "Submit Request"}
            </button>
          </form>
        </div>
      </div>

      {/* RIGHT MESSAGE WIDGET */}
      <div
        style={{
          position: "fixed",
          top: "20%",
          right: 0,
          zIndex: 9999,
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: isMessageOpen ? "translateX(0)" : "translateX(100%)",
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "-56px",
            transform: "translateY(-50%)",
            background: "linear-gradient(135deg, #304c55 0%, #032532 100%)",
            color: "#fff",
            padding: "16px",
            borderRadius: "12px 0 0 12px",
            cursor: "pointer",
            boxShadow: "-2px 4px 12px rgba(102, 126, 234, 0.4)",
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          onClick={() => setIsMessageOpen(!isMessageOpen)}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform =
              "translateY(-50%) translateX(-3px)";
            (e.currentTarget as HTMLElement).style.boxShadow =
              "-2px 6px 16px rgba(102, 126, 234, 0.5)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(-50%)";
            (e.currentTarget as HTMLElement).style.boxShadow =
              "-2px 4px 12px rgba(102, 126, 234, 0.4)";
          }}
        >
          <i className={isMessageOpen ? "fas fa-times" : "fas fa-comments"} style={{ fontSize: "20px" }}></i>
        </div>

        <div
          style={{
            width: "280px",
            background: "#ffffff",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.15)",
            padding: "28px 24px",
            borderRadius: "16px 0 0 16px"
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                background: "linear-gradient(135deg, #032532 0%, #304c55 100%)",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
                boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)"
              }}
            >
              <i className="fas fa-comments" style={{ fontSize: "28px", color: "#fff" }}></i>
            </div>
            <h4
              style={{
                fontSize: "18px",
                fontWeight: "700",
                color: "#1a202c",
                marginBottom: "8px"
              }}
            >
              Message Us
            </h4>
            <p
              style={{
                fontSize: "14px",
                color: "#718096",
                lineHeight: "1.6",
                marginBottom: "20px"
              }}
            >
              Have a question? Our team is ready to help you anytime!
            </p>
            <Button
              href="/contact"
              style={{
                width: "100%",
                padding: "12px",
                background: "linear-gradient(135deg, #032532 0%, #304c55 100%)",
                color: "white",
                border: "none",
                borderRadius: "10px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)"
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 6px 16px rgba(102, 126, 234, 0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 4px 12px rgba(102, 126, 234, 0.3)";
              }}
            >
              Start Chat
            </Button>
          </div>
        </div>
      </div>

      {/* RIGHT CALL WIDGET */}
      <div
        style={{
          position: "fixed",
          top: "30%",
          right: 0,
          zIndex: 9999,
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: isCallOpen ? "translateX(0)" : "translateX(100%)",
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "-56px",
            transform: "translateY(-50%)",
            background: "linear-gradient(135deg, #032532 0%, #304c55 100%)",
            color: "#fff",
            padding: "16px",
            borderRadius: "12px 0 0 12px",
            cursor: "pointer",
            boxShadow: "-2px 4px 12px rgba(72, 187, 120, 0.4)",
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          onClick={() => setIsCallOpen(!isCallOpen)}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform =
              "translateY(-50%) translateX(-3px)";
            (e.currentTarget as HTMLElement).style.boxShadow =
              "-2px 6px 16px rgba(72, 187, 120, 0.5)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(-50%)";
            (e.currentTarget as HTMLElement).style.boxShadow =
              "-2px 4px 12px rgba(72, 187, 120, 0.4)";
          }}
        >
          <i className={isCallOpen ? "fas fa-times" : "fas fa-phone"} style={{ fontSize: "20px" }}></i>
        </div>

        <div
          style={{
            width: "280px",
            background: "#ffffff",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.15)",
            padding: "28px 24px",
            borderRadius: "16px 0 0 16px"
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                background: "linear-gradient(135deg, #032532 0%, #304c55 100%)",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
                boxShadow: "0 4px 12px rgba(72, 187, 120, 0.3)"
              }}
            >
              <i className="fas fa-phone" style={{ fontSize: "24px", color: "#fff" }}></i>
            </div>
            <h4
              style={{
                fontSize: "18px",
                fontWeight: "700",
                color: "#1a202c",
                marginBottom: "8px"
              }}
            >
              Call Us Now
            </h4>
            <p
              style={{
                fontSize: "14px",
                color: "#718096",
                lineHeight: "1.6",
                marginBottom: "16px"
              }}
            >
              Speak directly with our experts
            </p>
            <Link
              href="tel:+12403019114"
              style={{
                display: "block",
                fontSize: "20px",
                fontWeight: "700",
                color: "#38a169",
                textDecoration: "none",
                marginBottom: "20px",
                transition: "color 0.2s ease"
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#2f855a";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#38a169";
              }}
            >
              +1 (240) 301-9114
            </Link>
            <Button
              onClick={() => (window.location.href = "tel:+12403019114")}
              style={{
                width: "100%",
                padding: "12px",
                background: "linear-gradient(135deg, #032532 0%, #304c55 100%)",
                color: "white",
                border: "none",
                borderRadius: "10px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 12px rgba(72, 187, 120, 0.3)"
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 6px 16px rgba(48, 58, 52, 0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 4px 12px rgba(72, 187, 120, 0.3)";
              }}
            >
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingWidgets;
