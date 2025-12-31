"use client";
import React, { KeyboardEvent, useState } from "react";
import {
  ChevronDown,
  User,
  Users,
  Lightbulb,
  DollarSign,
  Briefcase,
  Headphones,
  Check,
} from "lucide-react";
import { useDiscountPopup } from "@/components/popup/DiscountPopupContext";

const TargetAudience: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const { openDiscount } = useDiscountPopup();

  const audienceItems = [
    {
      icon: <User size={24} />,
      title: "You're an expert who wants to build credibility",
      description:
        "You're a coach, consultant, therapist, or business leader. Your expertise transforms lives. A professionally published book positions you as THE expert in your field. It opens doors with corporate clients, speaking engagements, and partnership opportunities.",
    },
    {
      icon: <Users size={24} />,
      title: "You want to build an author platform",
      description:
        "You're not just publishing one book—you're building an author brand. You want visibility, followers, speaking invitations, and media opportunities. Your book is the vehicle.",
    },
    {
      icon: <Lightbulb size={24} />,
      title: "You have valuable knowledge to share",
      description:
        "You're a thought leader with a message. Your audience spans continents. Your expertise deserves global reach. You want readers worldwide—not just in your country.",
    },
    {
      icon: <DollarSign size={24} />,
      title: "You want to monetize multiple ways",
      description:
        "Book royalties are one income stream. Speaking engagements from book visibility are another. Consulting contracts from credibility. Media appearances. Course launches. Your book unlocks them all.",
    },
    {
      icon: <Briefcase size={24} />,
      title: "You're building a business, not just publishing a book",
      description:
        "You understand that a published book is a business asset. It generates leads. It builds credibility. It creates opportunities. You're thinking strategically about ROI, not just 'getting published.'",
    },
    {
      icon: <Headphones size={24} />,
      title: "You want premium support and guidance",
      description:
        "You've heard horror stories about authors left alone after publishing. You want a partner who's invested in your success. You want VIP treatment, regular check-ins, and someone celebrating your wins with you.",
    },
  ];

  const toggleItem = (index: number) => {
    setActiveItem((prev) => (prev === index ? null : index));
  };

  // keyboard support for accessibility: Enter or Space toggles
  const onKeyToggle = (e: KeyboardEvent, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleItem(index);
    }
  };

  return (
    <div className="target-audience-container">
      <div className="target-audience-content">
        <div className="section-header">
          <h2>Is Author Legacy Your Goal?</h2>
          <p>If ANY of these describe you, Author&apos;s Legacy is your solution:</p>
        </div>

        <div className="audience-items">
          {audienceItems.map((item, index) => {
            const isActive = activeItem === index;
            return (
              <article
                key={index}
                className={`audience-item ${isActive ? "active" : ""}`}
                onClick={() => toggleItem(index)}
                onKeyDown={(e) => onKeyToggle(e, index)}
                tabIndex={0}
                role="button"
                aria-pressed={isActive}
                aria-expanded={isActive}
              >
                <div className="item-header" aria-hidden={false}>
                  <div className="item-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <div className={`chevron ${isActive ? "rotated" : ""}`}>
                    <ChevronDown size={20} />
                  </div>
                </div>

                <div
                  className={`item-content ${isActive ? "expanded" : ""}`}
                  aria-hidden={!isActive}
                >
                  <p>{item.description}</p>
                  <div className="item-check">
                    <Check size={18} />
                    <span>This is you</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="section-cta">
          <button onClick={openDiscount} className="primary-button">Discover Your Author Legacy</button>
        </div>
      </div>

      <style jsx>{`
        .target-audience-container {
          background-color: #eeeae7;
          padding: 60px 20px;
          position: relative;
        }

        .target-audience-container::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #364a52, #0f252f);
        }

        .target-audience-content {
          max-width: 1000px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .section-header h2 {
          font-size: 2.5rem;
          color: #0f252f;
          margin-bottom: 16px;
          position: relative;
          display: inline-block;
        }

        .section-header h2::after {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 25%;
          width: 50%;
          height: 3px;
          background: linear-gradient(90deg, #364a52, #0f252f);
        }

        .section-header p {
          font-size: 1.2rem;
          color: #364a52;
          max-width: 700px;
          margin: 0 auto;
        }

        /* Grid container */
        .audience-items {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
          align-items: start; /* prevent rows stretching to tallest item */
        }

        /* Card base: equal initial height, flex column layout */
        .audience-item {
          background-color: white;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(15, 37, 47, 0.08);
          overflow: hidden;
          transition: box-shadow 0.25s ease, transform 0.25s ease;
          cursor: pointer;

          display: flex;
          flex-direction: column;

          /* all cards have same initial height */
          height: 110px;
          align-self: start;
        }

        /* Hover behavior */
        .audience-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 24px rgba(15, 37, 47, 0.12);
        }

        /* Active card expands */
        .audience-item.active {
          height: auto; /* allow it to grow */
          box-shadow: 0 8px 24px rgba(15, 37, 47, 0.15);
        }

        .item-header {
          display: flex;
          align-items: center;
          padding: 20px;
          flex: 0 0 auto; /* remains at top and doesn't collapse */
        }

        .item-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: rgba(54, 74, 82, 0.1);
          margin-right: 16px;
          color: #364a52;
          flex-shrink: 0;
        }

        .audience-item.active .item-icon {
          background-color: #364a52;
          color: white;
        }

        .item-header h3 {
          font-size: 1.1rem;
          color: #0f252f;
          margin: 0;
          flex-grow: 1;
          line-height: 1.4;
        }

        .chevron {
          color: #364a52;
          transition: transform 0.3s ease;
        }

        .chevron.rotated {
          transform: rotate(180deg);
        }

        /* Collapsed content */
        .item-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.2, 0.8, 0.2, 1),
            padding 0.35s ease;
          padding: 0 20px 0 86px;
          flex: 0 0 auto; /* doesn't force height when collapsed */
        }

        /* Expanded content only for active card */
        .audience-item.active .item-content,
        .item-content.expanded {
          max-height: 420px; /* adjust if you need more room */
          padding: 20px 20px 20px 86px;
          flex: 1 1 auto;
        }

        .item-content p {
          color: #364a52;
          line-height: 1.6;
          margin: 0 0 16px 0;
        }

        .item-check {
          display: flex;
          align-items: center;
          color: #364a52;
          font-weight: 600;
        }

        .item-check svg {
          margin-right: 8px;
          color: #364a52;
        }

        .section-cta {
          text-align: center;
        }

        .primary-button {
          background: linear-gradient(135deg, #364a52 0%, #0f252f 100%);
          color: white;
          font-weight: 600;
          padding: 14px 28px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
          box-shadow: 0 4px 12px rgba(15, 37, 47, 0.2);
        }

        .primary-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(15, 37, 47, 0.3);
        }

        /* Responsive: stack in single column on small screens */
        @media (max-width: 768px) {
          .section-header h2 {
            font-size: 2rem;
          }

          .audience-items {
            grid-template-columns: 1fr;
          }

          /* smaller initial card height for mobile */
          .audience-item {
            height: 120px;
          }

          .audience-item.active {
            height: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default TargetAudience;
