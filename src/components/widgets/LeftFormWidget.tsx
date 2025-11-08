import React, { useState } from "react";

const FloatingWidgets = () => {
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [isCallOpen, setIsCallOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: ""
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form submitted!");
    setFormData({ name: "", email: "", phone: "", project: "" });
  };

  return (
    <>
      {/* Font Awesome CDN */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

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
            e.currentTarget.style.transform = "translateY(-50%) translateX(3px)";
            e.currentTarget.style.boxShadow = "2px 6px 16px rgba(102, 126, 234, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(-50%)";
            e.currentTarget.style.boxShadow = "2px 4px 12px rgba(102, 126, 234, 0.4)";
          }}
        >
          <div style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>
            Get 50% OFF Now!
          </div>
          <i className={isLeftOpen ? "fas fa-chevron-left" : "fas fa-chevron-right"} style={{ fontSize: "14px" }}></i>
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
            Fill out the form below and we'll get back to you shortly.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
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
                e.target.style.borderColor = "#667eea";
                e.target.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e2e8f0";
                e.target.style.boxShadow = "none";
              }}
            />
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
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
                e.target.style.borderColor = "#667eea";
                e.target.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e2e8f0";
                e.target.style.boxShadow = "none";
              }}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
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
                e.target.style.borderColor = "#667eea";
                e.target.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e2e8f0";
                e.target.style.boxShadow = "none";
              }}
            />
            <textarea
              placeholder="Tell us about your project..."
              rows={4}
              value={formData.project}
              onChange={(e) => setFormData({...formData, project: e.target.value})}
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
                e.target.style.borderColor = "#667eea";
                e.target.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e2e8f0";
                e.target.style.boxShadow = "none";
              }}
            />
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "14px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                border: "none",
                borderRadius: "10px",
                fontSize: "15px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 16px rgba(102, 126, 234, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(102, 126, 234, 0.3)";
              }}
            >
              Submit Request
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
            e.currentTarget.style.transform = "translateY(-50%) translateX(-3px)";
            e.currentTarget.style.boxShadow = "-2px 6px 16px rgba(102, 126, 234, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(-50%)";
            e.currentTarget.style.boxShadow = "-2px 4px 12px rgba(102, 126, 234, 0.4)";
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
            <button
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
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 16px rgba(102, 126, 234, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(102, 126, 234, 0.3)";
              }}
            >
              Start Chat
            </button>
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
            e.currentTarget.style.transform = "translateY(-50%) translateX(-3px)";
            e.currentTarget.style.boxShadow = "-2px 6px 16px rgba(72, 187, 120, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(-50%)";
            e.currentTarget.style.boxShadow = "-2px 4px 12px rgba(72, 187, 120, 0.4)";
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
            <a
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
                e.currentTarget.style.color = "#2f855a";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#38a169";
              }}
            >
              +1 (240) 301-9114
            </a>
            <button
              onClick={() => window.location.href = "tel:+12403019114"}
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
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 16px rgba(48, 58, 52, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(72, 187, 120, 0.3)";
              }}
            >
              Call Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingWidgets;