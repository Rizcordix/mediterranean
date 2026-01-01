"use client";
import React, { useRef, useState } from "react";
import {
  Quote,
  Star,
  Users,
  TrendingUp,
  Award,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useDiscountPopup } from "@/components/popup/DiscountPopupContext";

const AuthorSuccessStories = () => {
  const [activeStory, setActiveStory] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { openDiscount } = useDiscountPopup();

  const stories = [
    {
      id: 1,
      name: "Naomi J.",
      title: "Life Coach & Author",
      quote: "Book Published. Career Transformed. Speaking Tour Booked.",
      story:
        "I was a successful life coach with a growing local practice. But I wanted to expand nationally. Mediterranean Publishing's Author's Legacy program was exactly what I needed. They published my book professionally, positioned it strategically, and coordinated media outreach. Within 6 months, I'd been invited to speak at three national conferences. That speaking exposure led to 15+ new coaching clients. My book paid for itself in month one. The Author's Legacy investment was the best business decision I made that year.",
      achievements: [
        { icon: <Users size={16} />, text: "Now speaks nationally" },
        { icon: <Calendar size={16} />, text: "5,000+ coaching hours booked from book visibility" },
      ],
      image: "https://placehold.co/400x400",
    },
    {
      id: 2,
      name: "Michael C.",
      title: "Business Consultant & Author",
      quote: "From Unknown Consultant to Recognized Authority.",
      story:
        "I had 15 years of consulting experience but no visibility. My book combined my frameworks and case studies. Mediterranean Publishing's platform-building services—blog, website, social media strategy—positioned me as an expert. Within a year, I had 20,000 engaged followers, monthly speaking invitations, and corporate workshop contracts worth $200K+. The book was the catalyst. The Author's Legacy program was the accelerator.",
      achievements: [
        { icon: <Users size={16} />, text: "20,000+ platform followers" },
        { icon: <TrendingUp size={16} />, text: "$200K+ annual revenue from speaking/workshops" },
      ],
      image: "https://placehold.co/400x400",
    },
    {
      id: 3,
      name: "Jennifer K.",
      title: "Executive Coach & Author",
      quote: "Published Thought Leader. CEO Coach. International Consultant.",
      story:
        "As a corporate executive, I wanted to move into executive coaching. My book on leadership transformation positioned me perfectly. Mediterranean Publishing handled the entire process—publishing, marketing, PR, speaking coordination. My book became my calling card. I was invited to speak internationally. I started coaching C-level executives. I've earned more from speaking and coaching directly tied to my book than from my corporate position. My book became my personal brand.",
      achievements: [
        { icon: <Award size={16} />, text: "International speaker" },
        { icon: <Users size={16} />, text: "50+ C-level coaching clients" },
      ],
      image: "https://placehold.co/400x400",
    },
    {
      id: 4,
      name: "Dr. Amanda T.",
      title: "Therapist, Author, Course Creator",
      quote: "Book Published. Platform Built. Course Launched. Passive Income Created.",
      story:
        "I'm a therapist wanting to reach beyond my practice. My book on anxiety therapy became my digital product flagship. Mediterranean Publishing helped me build an email list of 5,000+ through my platform and marketing. I launched an online course based on my book. First year: $80K+ in course revenue. The book itself is nearly a break-even. But the course revenue from book platform = lifechanging income diversification.",
      achievements: [
        { icon: <Users size={16} />, text: "5,000+ email subscribers" },
        { icon: <TrendingUp size={16} />, text: "$80K+ year one course revenue" },
      ],
      image: "https://placehold.co/400x400",
    },
  ];

  const handleStoryChange = (index: number, scrollToTop = false) => {
    if (index !== activeStory && !isAnimating) {
      setIsAnimating(true);
      setActiveStory(index);

      // small guard to let animation state visually change — adjust duration to match your CSS transition (500ms used earlier)
      setTimeout(() => setIsAnimating(false), 500);

      if (scrollToTop && sectionRef.current) {
        // smooth scroll to top of the section — works on modern browsers / mobile
        // fallback: compute offset if needed (not included unless you have a fixed header)
        sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveStory((prevIndex) => (prevIndex + 1) % stories.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveStory((prevIndex) => (prevIndex - 1 + stories.length) % stories.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <div className="success-stories-container" ref={sectionRef}>
      <div className="success-stories-content">
        <div className="section-header">
          <h2>AUTHOR&apos;S LEGACY SUCCESS STORIES</h2>
        </div>

        <div className="stories-display">
          <div className="main-story">
            <div className={`story-image ${isAnimating ? "animating" : ""}`}>
              <img src={stories[activeStory].image} alt={stories[activeStory].name} />
              <div className="story-quote">
                <Quote size={20} />
                <p>{stories[activeStory].quote}</p>
              </div>
            </div>

            <div className={`story-content ${isAnimating ? "animating" : ""}`}>
              <div className="author-info">
                <h3>{stories[activeStory].name}</h3>
                <p>{stories[activeStory].title}</p>
              </div>

              <div className="story-text">
                <p>{stories[activeStory].story}</p>
              </div>

              <div className="story-achievements">
                {stories[activeStory].achievements.map((achievement, index) => (
                  <div key={index} className="achievement-item">
                    <div className="achievement-icon">{achievement.icon}</div>
                    <span>{achievement.text}</span>
                  </div>
                ))}
              </div>

              <div className="story-rating">
                <div className="rating-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="#d4af37" color="#d4af37" />
                  ))}
                </div>
                <span>Author&apos;s Legacy Success</span>
              </div>
            </div>
          </div>

          <div className="story-navigation">
            <button className="nav-btn" onClick={handlePrev} disabled={isAnimating}>
              <ChevronLeft size={20} />
            </button>

            <div className="story-indicators">
              {stories.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === activeStory ? "active" : ""}`}
                  onClick={() => handleStoryChange(index)}
                />
              ))}
            </div>

            <button className="nav-btn" onClick={handleNext} disabled={isAnimating}>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="other-stories">
          <h3>More Success Stories</h3>
          <div className="story-cards">
            {stories.map((story, idx) => {
              // skip rendering the currently active story
              if (idx === activeStory) return null;

              return (
                <div
                  key={story.id}
                  className="story-card"
                  // pass the original index so selection is always correct
                  onClick={() => handleStoryChange(idx, true)}
                >
                  <div className="card-image">
                    <img src={story.image} alt={story.name} />
                  </div>
                  <div className="card-content">
                    <h4>{story.name}</h4>
                    <p>{story.title}</p>
                    <div className="card-quote">
                      <Quote size={14} />
                      <span>{story.quote}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="section-cta">
          <button onClick={openDiscount} className="primary-button">Become Our Next Success Story</button>
        </div>
      </div>

      {/* Styles unchanged from original (kept for convenience) */}
      <style jsx>{`
        .success-stories-container {
          background-color: #eeeae7;
          padding: 60px 20px;
          position: relative;
        }
        .success-stories-container::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #364a52, #0f252f);
        }
        .success-stories-content {
          max-width: 1200px;
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
        .stories-display {
          background-color: white;
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(15, 37, 47, 0.08);
          overflow: hidden;
          margin-bottom: 40px;
        }
        .main-story {
          display: flex;
          flex-direction: column;
        }
        .story-image {
          position: relative;
          height: 300px;
          overflow: hidden;
        }
        .story-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .story-image.animating img {
          opacity: 0.7;
          transform: scale(1.05);
        }
        .story-quote {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(15, 37, 47, 0.9), rgba(15, 37, 47, 0.7) 70%, transparent);
          color: white;
          padding: 30px 20px 20px;
          display: flex;
          align-items: flex-start;
        }
        .story-quote svg {
          margin-right: 12px;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .story-quote p {
          font-size: 1.2rem;
          font-weight: 600;
          line-height: 1.4;
          margin: 0;
        }
        .story-content {
          padding: 30px;
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .story-content.animating {
          opacity: 0.7;
          transform: translateY(10px);
        }
        .author-info {
          margin-bottom: 20px;
        }
        .author-info h3 {
          font-size: 1.5rem;
          color: #0f252f;
          margin: 0 0 4px 0;
        }
        .author-info p {
          color: #364a52;
          font-weight: 500;
          margin: 0;
        }
        .story-text {
          color: #364a52;
          line-height: 1.6;
          margin-bottom: 24px;
        }
        .story-achievements {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 24px;
        }
        .achievement-item {
          display: flex;
          align-items: center;
          background-color: rgba(54, 74, 82, 0.05);
          border-radius: 8px;
          padding: 12px 16px;
        }
        .achievement-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: #364a52;
          color: white;
          margin-right: 12px;
          flex-shrink: 0;
        }
        .achievement-item span {
          color: #364a52;
          font-weight: 500;
          font-size: 0.9rem;
        }
        .story-rating {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .rating-stars {
          display: flex;
        }
        .story-rating span {
          color: #364a52;
          font-weight: 500;
        }
        .story-navigation {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 16px;
          background-color: rgba(54, 74, 82, 0.05);
        }
        .nav-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: white;
          border: 1px solid rgba(54, 74, 82, 0.2);
          cursor: pointer;
          transition: all 0.3s ease;
          color: #364a52;
        }
        .nav-btn:hover:not(:disabled) {
          background-color: #364a52;
          color: white;
        }
        .nav-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .story-indicators {
          display: flex;
          gap: 8px;
          margin: 0 16px;
        }
        .indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: rgba(54, 74, 82, 0.2);
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          padding: 0;
        }
        .indicator.active {
          width: 24px;
          border-radius: 4px;
          background-color: #364a52;
        }
        .other-stories {
          margin-bottom: 40px;
        }
        .other-stories h3 {
          font-size: 1.5rem;
          color: #0f252f;
          margin: 0 0 20px 0;
          text-align: center;
        }
        .story-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }
        .story-card {
          background-color: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(15, 37, 47, 0.08);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .story-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 24px rgba(15, 37, 47, 0.12);
        }
        .card-image {
          height: 150px;
          overflow: hidden;
        }
        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .story-card:hover .card-image img {
          transform: scale(1.05);
        }
        .card-content {
          padding: 16px;
        }
        .card-content h4 {
          font-size: 1.1rem;
          color: #0f252f;
          margin: 0 0 4px 0;
        }
        .card-content p {
          color: #364a52;
          font-size: 0.9rem;
          margin: 0 0 12px 0;
        }
        .card-quote {
          display: flex;
          align-items: flex-start;
          color: #364a52;
          font-size: 0.85rem;
          font-style: italic;
        }
        .card-quote svg {
          margin-right: 8px;
          flex-shrink: 0;
          margin-top: 2px;
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
        @media (max-width: 768px) {
          .section-header h2 {
            font-size: 2rem;
          }
          .story-image {
            height: 250px;
          }
          .story-quote p {
            font-size: 1rem;
          }
          .story-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default AuthorSuccessStories;
