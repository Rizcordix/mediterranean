"use client";
import React, { KeyboardEvent, useState } from "react";
import {
  ChevronDown,
  Users,
  DollarSign,
  AlertCircle,
  Clock,
  TrendingDown,
  Check,
} from "lucide-react";
import { useDiscountPopup } from "@/components/popup/DiscountPopupContext";

const ProblemSolveSection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const { openDiscount } = useDiscountPopup();

  const problemItems = [
    {
      icon: <Users size={24} />,
      title: "The Freelancer Nightmare",
      description:
        "You're managing 5+ different people: a writer, editor, cover designer, formatter, and marketer. Each has different deadlines, communication styles, and invoices. Your book gets stuck in limbo. 8 months pass. Your motivation dies. Your manuscript collects dust.",
    },
    {
      icon: <DollarSign size={24} />,
      title: "The Cost Explosion",
      description:
        "Writing costs. Editing costs (usually $1,500+). Cover design costs. Formatting. ISBN. Printing setup. Distribution. By launch day, you've spent $5,000-$10,000 and sold zero copies. The ROI math makes you sick.",
    },
    {
      icon: <AlertCircle size={24} />,
      title: "Creative Control Issues",
      description:
        "You hire a 'complete package' agency. They deliver something that doesn't match your vision. You ask for revisions. They charge extra. The final book doesn't feel like yours anymore. It feels... compromised.",
    },
    {
      icon: <TrendingDown size={24} />,
      title: "Technical Overwhelm",
      description:
        "Amazon KDP is confusing. ISBN systems are a maze. Print specifications are technical. Distribution channels are numerous. You're spending 20 hours watching YouTube tutorials instead of writing your next book.",
    },
    {
      icon: <Clock size={24} />,
      title: "Slow Publishing Speed",
      description:
        "Traditional publishing? 2-3 years. Bad self-publishing platforms? 6-12 months. By the time your book launches, you've lost momentum, your marketing window has closed, and readers have moved on.",
    },
  ];

  const toggleItem = (index: number) => {
    setActiveItem((prev) => (prev === index ? null : index));
  };

  const onKeyToggle = (e: KeyboardEvent, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleItem(index);
    }
  };

  return (
    <div className="problem-solve-container">
      <div className="problem-solve-content">
        <div className="section-header">
          <h2>The Traditional Publishing Journey is Broken—We Fixed It</h2>
          <p className="agitation-text">
            You see other authors launching books... getting reviews... building their platform... 
            while yours is stuck in editing phase. You wonder if you made the wrong choice. 
            You wonder if you should just give up.
          </p>
        </div>

        <div className="problem-items">
          {problemItems.map((item, index) => {
            const isActive = activeItem === index;
            return (
              <article
                key={index}
                className={`problem-item ${isActive ? "active" : ""}`}
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
                </div>
              </article>
            );
          })}
        </div>

        <div className="solution-section">
          <div className="solution-header">
            <Check size={32} />
            <h3>There's a Better Way</h3>
          </div>
          <p className="solution-text">
            Say hello to Mediterranean Publishing—where your author legacy comes to life without the nightmare.
          </p>
        </div>

        <div className="section-cta">
          <button onClick={openDiscount} className="primary-button">
            Start Your Publishing Journey
          </button>
        </div>
      </div>

      <style jsx>{`
        .problem-solve-container {
          background-color: #eeeae7;
          padding: 60px 20px;
          position: relative;
        }

        .problem-solve-container::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #364a52, #0f252f);
        }

        .problem-solve-content {
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
          margin-bottom: 24px;
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

        .agitation-text {
          font-size: 1.2rem;
          color: #0f252f;
          max-width: 700px;
          margin: 0 auto;
          font-style: italic;
          line-height: 1.6;
        }

        .problem-items {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-bottom: 50px;
          align-items: start;
        }

        .problem-item {
          background-color: white;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(15, 37, 47, 0.08);
          overflow: hidden;
          transition: box-shadow 0.25s ease, transform 0.25s ease;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          height: 110px;
          align-self: start;
        }

        .problem-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 24px rgba(15, 37, 47, 0.12);
        }

        .problem-item.active {
          height: auto;
          box-shadow: 0 8px 24px rgba(15, 37, 47, 0.15);
        }

        .item-header {
          display: flex;
          align-items: center;
          padding: 20px;
          flex: 0 0 auto;
        }

        .item-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: rgba(220, 53, 69, 0.1);
          margin-right: 16px;
          color: #dc3545;
          flex-shrink: 0;
        }

        .problem-item.active .item-icon {
          background-color: #dc3545;
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

        .item-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.2, 0.8, 0.2, 1),
            padding 0.35s ease;
          padding: 0 20px 0 86px;
          flex: 0 0 auto;
        }

        .problem-item.active .item-content,
        .item-content.expanded {
          max-height: 420px;
          padding: 20px 20px 20px 86px;
          flex: 1 1 auto;
        }

        .item-content p {
          color: #364a52;
          line-height: 1.6;
          margin: 0;
        }

        .solution-section {
          background: linear-gradient(135deg, #364a52 0%, #0f252f 100%);
          border-radius: 16px;
          padding: 40px;
          text-align: center;
          margin-bottom: 40px;
          box-shadow: 0 8px 24px rgba(15, 37, 47, 0.15);
        }

        .solution-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .solution-header svg {
          color: #4caf50;
        }

        .solution-header h3 {
          font-size: 2rem;
          color: white;
          margin: 0;
        }

        .solution-text {
          font-size: 1.3rem;
          color: #eeeae7;
          margin: 0;
          line-height: 1.6;
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

        @media (max-width: 768px) {
          .section-header h2 {
            font-size: 2rem;
          }

          .agitation-text {
            font-size: 1.1rem;
          }

          .problem-items {
            grid-template-columns: 1fr;
          }

          .problem-item {
            height: 120px;
          }

          .problem-item.active {
            height: auto;
          }

          .solution-header h3 {
            font-size: 1.5rem;
          }

          .solution-text {
            font-size: 1.1rem;
          }

          .solution-section {
            padding: 30px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default ProblemSolveSection;