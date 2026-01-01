'use client';
import { useEffect } from "react";

const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="calendly-section">
      <div className="header">
        <h2>Book a Free Consultation</h2>
        <p>Schedule a 30-minute session with our experts</p>
      </div>

      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/mediterraneanpublishing/30min"
      />

      <style jsx>{`
        .calendly-section {
          background-color: #eeeae7;
          padding: 8rem 1.5rem;
          border-radius: 16px;
        }

        .header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .header h2 {
          color: #0f252f;
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .header p {
          color: #364152;
          font-size: 1rem;
        }

        .calendly-inline-widget {
          min-width: 320px;
          height: 700px;
          border-radius: 16px;
          overflow: hidden;
          background: #ffffff;
          box-shadow: 0 10px 30px rgba(15, 37, 47, 0.15);
        }

        @media (max-width: 768px) {
          .calendly-section {
            padding: 6rem 1rem;
          }

          .header h2 {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </section>
  );
};

export default CalendlyWidget;
