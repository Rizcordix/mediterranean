"use client";
import React, { useState, useEffect } from "react";
import {
  Gift,
  CheckCircle,
  Clock,
  Sparkles,
  TrendingUp,
  AlertCircle,
} from "lucide-react";

const LaunchOfferSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const bonuses = [
    {
      icon: <Gift size={20} />,
      title: "FREE Publishing Consultation",
      value: "$200",
    },
    {
      icon: <CheckCircle size={20} />,
      title: "Complimentary Manuscript Assessment",
      value: "$150",
    },
    {
      icon: <Sparkles size={20} />,
      title: "Free ISBN Registration",
      value: "$25",
    },
    {
      icon: <Clock size={20} />,
      title: "Priority Editing Timeline",
      value: "2-week",
    },
    {
      icon: <TrendingUp size={20} />,
      title: "Marketing Template Pack",
      value: "$75",
    },
    {
      icon: <AlertCircle size={20} />,
      title: "Author Platform Guide",
      value: "$100",
    },
  ];

  return (
    <div className="compact-offer-wrapper">
      <div className="offer-grid">
        {/* LEFT COLUMN: Headline, Timer, CTA */}
        <div className="left-panel">
          <div className="offer-badge">
            <Sparkles size={14} />
            <span>SPECIAL LAUNCH OFFER</span>
          </div>

          <h2 className="offer-headline">
            New Authors Special: Complete Publishing Package + Bonuses
          </h2>

          {/* Compact Countdown */}
          <div className="countdown-wrapper">
            <p className="countdown-label">Offer Expires In:</p>
            <div className="countdown-timer">
              <div className="time-block">
                <span className="time-number">{timeLeft.days}</span>
                <span className="time-label">DAYS</span>
              </div>
              <span className="time-separator">:</span>
              <div className="time-block">
                <span className="time-number">{String(timeLeft.hours).padStart(2, "0")}</span>
                <span className="time-label">HRS</span>
              </div>
              <span className="time-separator">:</span>
              <div className="time-block">
                <span className="time-number">{String(timeLeft.minutes).padStart(2, "0")}</span>
                <span className="time-label">MIN</span>
              </div>
              <span className="time-separator">:</span>
              <div className="time-block">
                <span className="time-number">{String(timeLeft.seconds).padStart(2, "0")}</span>
                <span className="time-label">SEC</span>
              </div>
            </div>
          </div>

          {/* Pricing Row */}
          <div className="pricing-row">
            <div className="pricing-group">
              <span className="price-label">Total Value:</span>
              <span className="price-strike">$550</span>
              <span className="price-final">FREE</span>
            </div>
            <button className="cta-button">
              <Gift size={18} />
              Claim Now
            </button>
          </div>

          {/* Urgency */}
          <div className="urgency-warning">
            <AlertCircle size={16} />
            <span>Limited to first 15 authors this week</span>
          </div>
        </div>

        {/* RIGHT COLUMN: Vertical Line of Bonuses */}
        <div className="right-panel">
          <div className="bonus-header">Included Bonuses</div>
          <div className="bonus-list-compact">
            {bonuses.map((bonus, index) => (
              <div key={index} className="bonus-item-compact">
                <div className="bonus-icon-row">{bonus.icon}</div>
                <div className="bonus-content">
                  <div className="bonus-title">{bonus.title}</div>
                </div>
                <div className="bonus-tag">{bonus.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Main Container */
        .compact-offer-wrapper {
          background: linear-gradient(135deg, #0f252f 0%, #1a3a47 100%);
          padding: 40px;
          border-radius: 12px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        /* Background Glow Effect */
        .compact-offer-wrapper::before {
          content: "";
          position: absolute;
          top: -50%;
          right: -20%;
          width: 50%;
          height: 150%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Grid Layout */
        .offer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Desktop Landscape Layout */
        @media (min-width: 950px) {
          .offer-grid {
            grid-template-columns: 1fr 0.8fr; /* Right panel narrower */
            align-items: start;
            gap: 50px;
          }
        }

        /* --- LEFT PANEL STYLES --- */
        .left-panel {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .offer-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: linear-gradient(135deg, #ff4757 0%, #e63946 100%);
          color: white;
          padding: 6px 14px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.75rem;
          letter-spacing: 1px;
          margin-bottom: 16px;
          width: fit-content;
          box-shadow: 0 4px 12px rgba(255, 71, 87, 0.4);
        }

        .offer-headline {
          font-size: 1.8rem;
          color: white;
          line-height: 1.1;
          margin-bottom: 24px;
          font-weight: 800;
        }

        /* Countdown */
        .countdown-wrapper {
          margin-bottom: 28px;
        }

        .countdown-label {
          color: #eeeae7;
          font-size: 0.75rem;
          margin-bottom: 8px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .countdown-timer {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .time-block {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 6px;
          padding: 8px 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 65px;
        }

        .time-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          line-height: 1;
        }

        .time-label {
          font-size: 0.6rem;
          color: #eeeae7;
          text-transform: uppercase;
        }

        .time-separator {
          font-size: 1.2rem;
          color: white;
          font-weight: 700;
        }

        /* Pricing Row */
        .pricing-row {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 20px;
        }

        @media (min-width: 600px) {
          .pricing-row {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }

        .pricing-group {
          display: flex;
          align-items: baseline;
          gap: 10px;
          flex-wrap: wrap;
        }

        .price-label {
          color: #eeeae7;
          font-size: 0.95rem;
        }

        .price-strike {
          color: #ff8a8a;
          text-decoration: line-through;
          font-size: 1.1rem;
        }

        .price-final {
          color: #4caf50;
          font-size: 2rem;
          font-weight: 800;
          line-height: 1;
        }

        .cta-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: linear-gradient(135deg, #ff4757 0%, #e63946 100%);
          color: white;
          font-weight: 700;
          font-size: 1rem;
          padding: 14px 28px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 4px 15px rgba(255, 71, 87, 0.4);
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 71, 87, 0.6);
        }

        .urgency-warning {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #eeeae7;
          font-size: 0.85rem;
          background: rgba(255, 71, 87, 0.15);
          border: 1px solid rgba(255, 71, 87, 0.3);
          padding: 10px 14px;
          border-radius: 8px;
          width: fit-content;
        }

        .urgency-warning span {
          color: #ff8a8a;
          font-weight: 500;
        }

        /* --- RIGHT PANEL STYLES (Vertical List) --- */
        .right-panel {
          border-left: 1px solid rgba(255, 255, 255, 0.1);
          padding-left: 0;
        }

        @media (min-width: 950px) {
          .right-panel {
            padding-left: 30px;
          }
        }

        .bonus-header {
          color: #eeeae7;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 16px;
          padding-bottom: 8px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Vertical Flex Layout */
        .bonus-list-compact {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .bonus-item-compact {
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 12px 14px;
          border-radius: 8px;
          transition: all 0.2s;
        }

        .bonus-item-compact:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateX(4px);
        }

        .bonus-icon-row {
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.2);
          width: 40px;
          height: 40px;
          border-radius: 8px;
          color: white;
          flex-shrink: 0;
        }

        .bonus-content {
          flex-grow: 1;
          margin: 0 12px;
        }

        .bonus-title {
          color: white;
          font-size: 0.9rem;
          font-weight: 500;
          line-height: 1.2;
        }

        .bonus-tag {
          font-size: 0.75rem;
          color: #4caf50;
          font-weight: 700;
          background: rgba(76, 175, 80, 0.15);
          padding: 4px 8px;
          border-radius: 4px;
          white-space: nowrap;
        }

        /* Mobile Adjustments */
        @media (max-width: 600px) {
          .compact-offer-wrapper {
            padding: 30px 20px;
          }

          .bonus-item-compact {
            padding: 10px 12px;
          }

          .bonus-title {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </div>
  );
};

export default LaunchOfferSection;