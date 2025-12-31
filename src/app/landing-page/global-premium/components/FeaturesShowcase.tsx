"use client";
import React, { useState } from 'react';
import { BookOpen, Globe, Users, Target, Award, Headphones, Mic, DollarSign, Star, Check, ArrowRight, Sparkles } from 'lucide-react';
import { usePopup } from '@/components/wrappers/PopupContext';

const FeaturesShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const { openQuote } = usePopup();
  
  const features = [
    {
      id: 1,
      icon: <BookOpen size={28} />,
      headline: "Professional Publishing in Every Format",
      copy: "Your book reaches readers in the format THEY prefer. eBook readers want Kindle. Audiobook listeners want Audible. Some want physical books. Author's Legacy includes all three.",
      includes: [
        "Professional editing (developmental + line editing)",
        "Custom cover design (with variations)",
        "eBook publishing (Kindle + other platforms)",
        "Paperback & hardcover print publishing",
        "Professional audiobook production",
        "Global distribution (100+ channels)",
        "ISBN + LCCN registration"
      ],
      advantage: "Authors who publish in multiple formats see 3-5x higher sales than single-format publishers",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=600&fit=crop" // Replace with your image URL
    },
    {
      id: 2,
      icon: <Globe size={28} />,
      headline: "Sell Globally. Open New Revenue Streams.",
      copy: "Your expertise isn't limited to one country. Your message resonates with readers worldwide. Author's Legacy positions your book for international success.",
      includes: [
        "International market analysis",
        "Translation consultation and coordination",
        "Multi-language cover design variations",
        "International distribution setup",
        "Rights management guidance",
        "Foreign market positioning strategy"
      ],
      advantage: "International editions can increase annual royalties by 50-300%",
      image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      icon: <Users size={28} />,
      headline: "Become the Recognized Expert in Your Field",
      copy: "Your book establishes credibility. But a platform amplifies it. Author's Legacy builds your platform across multiple channels: blog, email list, social media, video, and community.",
      includes: [
        "Author website creation (professional, conversion-optimized)",
        "SEO-optimized blog writing (12 posts annually)",
        "Email marketing list building and campaigns",
        "Social media strategy and content creation",
        "Video book trailer production",
        "Monthly author newsletter template",
        "Goodreads author page optimization",
        "Amazon author central optimization"
      ],
      advantage: "Authors with strong platforms sell 10x more books than authors without",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      icon: <Target size={28} />,
      headline: "Your Book Reaches the Right Readers at the Right Time",
      copy: "Publishing is 10% of the work. Marketing is 90%. Author's Legacy includes strategic marketing: social media campaigns, email sequences, influencer outreach, paid advertising, and book launch management.",
      includes: [
        "90-day book launch strategy",
        "Social media marketing execution (all platforms)",
        "Email marketing campaign creation and execution",
        "Amazon advertising management and optimization",
        "Facebook/Instagram paid advertising",
        "BookBaby/Goodreads promotional coordination",
        "Book influencer and blogger outreach",
        "Monthly performance reporting and optimization"
      ],
      advantage: "Strategic marketing generates sustained sales momentum, not just launch day spikes",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    },
    {
      id: 5,
      icon: <Award size={28} />,
      headline: "Media Recognition. Speaking Invitations. Consulting Opportunities.",
      copy: "Your book gets written. Now you need media attention. Author's Legacy coordinates media outreach, press release distribution, podcast interview booking, speaking engagement coordination, and thought leadership positioning.",
      includes: [
        "Press release writing and distribution",
        "Podcast interview booking and coordination",
        "Media kit creation",
        "Speaking engagement coordination",
        "Interview training and media prep",
        "LinkedIn authority positioning",
        "Thought leadership content strategy",
        "Author bio and bio variations for speaking"
      ],
      advantage: "Authors who appear in media become consulting clients, speaking clients, and course students",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop"
    },
    {
      id: 6,
      icon: <Headphones size={28} />,
      headline: "Your Success is Our Mission. You're Never Alone.",
      copy: "You get a dedicated account manager who knows your book, your goals, your timeline, and your vision. Bi-weekly calls. Proactive problem-solving. Strategic guidance. This is white-glove service.",
      includes: [
        "Dedicated VIP account manager",
        "Bi-weekly strategy calls",
        "Email/phone support (4-hour response guarantee)",
        "Strategic planning sessions",
        "Performance review and optimization",
        "Problem-solving prioritization",
        "Direct access to specialists",
        "Quarterly business review meetings"
      ],
      advantage: "Authors with dedicated support see 2-3x higher success rates than those managing alone",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop"
    },
    {
      id: 7,
      icon: <Mic size={28} />,
      headline: "Get Booked on Stages. Build Your Speaking Career.",
      copy: "Your book positions you as a speaker. Author's Legacy helps you GET booked. We create speaker materials, help with speaking proposal writing, connect you with speaking opportunity networks, and coach media interviews.",
      includes: [
        "Professional speaker one-sheet creation",
        "Speaking proposal writing coaching",
        "Speaking opportunity network introductions",
        "Conference submission coordination",
        "Podcast interview booking assistance",
        "Media interview prep and coaching",
        "Speaking fee guidance",
        "Post-speaking follow-up strategy"
      ],
      advantage: "Speaking fees ($2K-$20K per engagement) often exceed book royalties—and drive book sales",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop"
    },
    {
      id: 8,
      icon: <DollarSign size={28} />,
      headline: "Your Book Opens Multiple Income Doors",
      copy: "One book = one revenue stream (royalties). But your book opens other doors: speaking fees, consulting contracts, course students, corporate training, podcasting, affiliate partnerships.",
      includes: [
        "Revenue opportunity analysis",
        "Course creation consultation (based on book content)",
        "Email list monetization strategy",
        "Corporate workshop development guidance",
        "Affiliate partnership opportunities",
        "Speaking opportunity conversion strategy",
        "Book-to-business acceleration framework",
        "Annual revenue planning and strategy"
      ],
      advantage: "Authors who diversify income earn 5-10x more than book-only authors",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop"
    },
    {
      id: 9,
      icon: <Star size={28} />,
      headline: "You Begin with Strategy, Not Execution",
      copy: "You don't dive into publishing. You begin with a comprehensive strategic planning session with our senior leadership. We understand your vision, goals, timeline, and ideal outcome.",
      includes: [
        "2-hour strategic planning session with director",
        "Comprehensive author assessment",
        "12-month publishing & platform roadmap",
        "Market opportunity analysis",
        "Competitive positioning assessment",
        "Revenue opportunity mapping",
        "Timeline and milestone planning",
        "Risk mitigation strategy"
      ],
      advantage: "Strategy-first approach prevents costly mistakes and ensures every investment has clear ROI",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
    },
    {
      id: 10,
      icon: <Users size={28} />,
      headline: "Connect with Fellow Published Authors",
      copy: "Your book becomes your introduction to an exclusive community of published authors, thought leaders, and experts. Monthly virtual meetups, private Slack community, exclusive trainings, and networking opportunities.",
      includes: [
        "Private author community access",
        "Monthly group coaching calls",
        "Exclusive trainings and workshops",
        "Networking event invitations",
        "Mastermind group opportunities",
        "Book launch peer support",
        "Collaboration opportunities with fellow authors",
        "Lifetime access to author resources"
      ],
      advantage: "Your author community becomes your support system and potential collaborators/partners",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop"
    }
  ];

  const currentFeature = features[activeFeature];

  return (
    <div className="features-showcase-wrapper">
      {/* Animated background elements */}
      <div className="background-overlay">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="features-container">
        {/* Header */}
        <div className="header-section">
          <div className="badge">
            <Sparkles size={16} />
            <span>Complete Transformation Package</span>
          </div>
          <h2 className="main-title">The Author&apos;s Legacy Program</h2>
          <p className="subtitle">From manuscript to authority—everything you need to succeed</p>
        </div>

        {/* Feature Navigation */}
        <div className="feature-nav-grid">
          {features.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(index)}
              className={`feature-nav-btn ${activeFeature === index ? 'active' : ''}`}
            >
              <div className="feature-nav-content">
                {feature.icon}
                <span className="feature-nav-label">Feature {feature.id}</span>
              </div>
              {activeFeature === index && <div className="pulse-overlay"></div>}
            </button>
          ))}
        </div>

        {/* Main Feature Display */}
        <div className="main-feature-card">
          <div className="feature-grid">
            {/* Left Column - Image */}
            <div className="feature-image-col">
              <div className="feature-image-container">
                <img 
                  src={currentFeature.image} 
                  alt={currentFeature.headline}
                  className="feature-image"
                />
                <div className="image-overlay"></div>
              </div>
              
              {/* Advantage Badge */}
              <div className="advantage-card">
                <div className="advantage-decoration"></div>
                <div className="advantage-content">
                  <Star size={24} />
                  <div>
                    <h4 className="advantage-title">Your Advantage</h4>
                    <p className="advantage-text">{currentFeature.advantage}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="feature-details-col">
              <div className="feature-header">
                <div className="feature-icon-box">
                  {currentFeature.icon}
                </div>
                <div className="feature-title-group">
                  <h3 className="feature-title">{currentFeature.headline}</h3>
                  <div className="feature-badge">
                    Feature {currentFeature.id}
                  </div>
                </div>
              </div>

              <p className="feature-description">{currentFeature.copy}</p>

              <div className="includes-card">
                <h4 className="includes-title">
                  What&apos;s Included
                  <ArrowRight size={20} />
                </h4>
                <div className="includes-list">
                  {currentFeature.includes.map((item, index) => (
                    <div key={index} className="include-item">
                      <div className="check-icon">
                        <Check size={14} />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="nav-dots">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`nav-dot ${activeFeature === index ? 'active' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="cta-section">
          <button onClick={openQuote} className="cta-button">
            <span>Get a Your Personalized Quote</span>
            <ArrowRight size={20} />
            <div className="cta-shine"></div>
          </button>
        </div>
      </div>

      <style jsx>{`
        .features-showcase-wrapper {
          min-height: 100vh;
          background-color: #0f252f;
          /* ADD YOUR BACKGROUND IMAGE HERE */
          background-image: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          padding: 80px 24px;
          position: relative;
          overflow: hidden;
        }

        /* Dark overlay over background image for better readability */
        .features-showcase-wrapper::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(15, 37, 47, 0.85);
          z-index: 1;
        }

        .background-overlay {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 2;
        }

        .blob {
          position: absolute;
          width: 288px;
          height: 288px;
          background-color: #364a52;
          border-radius: 50%;
          mix-blend-mode: multiply;
          filter: blur(60px);
          opacity: 0.2;
        }

        .blob-1 {
          top: 80px;
          left: 40px;
          animation: blob 7s infinite;
        }

        .blob-2 {
          top: 160px;
          right: 40px;
          background-color: #eeeae7;
          opacity: 0.1;
          animation: blob 7s infinite;
          animation-delay: 2s;
        }

        .blob-3 {
          bottom: 80px;
          left: 50%;
          animation: blob 7s infinite;
          animation-delay: 4s;
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .features-container {
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        .header-section {
          text-align: center;
          margin-bottom: 64px;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: rgba(54, 74, 82, 0.5);
          backdrop-filter: blur(8px);
          padding: 8px 16px;
          border-radius: 9999px;
          margin-bottom: 24px;
          border: 1px solid rgba(238, 234, 231, 0.2);
          color: #eeeae7;
          font-size: 14px;
          font-weight: 500;
        }

        .main-title {
          font-size: 3rem;
          color: #eeeae7;
          margin-bottom: 16px;
          letter-spacing: -0.025em;
          line-height: 1.1;
        }

        .subtitle {
          font-size: 1.25rem;
          color: rgba(238, 234, 231, 0.7);
          max-width: 672px;
          margin: 0 auto;
        }

        .feature-nav-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 12px;
          margin-bottom: 48px;
        }

        .feature-nav-btn {
          position: relative;
          padding: 16px;
          border-radius: 12px;
          border: 1px solid rgba(238, 234, 231, 0.1);
          background-color: rgba(54, 74, 82, 0.3);
          backdrop-filter: blur(8px);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .feature-nav-btn:hover {
          background-color: rgba(54, 74, 82, 0.5);
          transform: scale(1.02);
          border-color: rgba(238, 234, 231, 0.3);
        }

        .feature-nav-btn.active {
          background-color: #364a52;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
          transform: scale(1.05);
          border-color: #364a52;
        }

        .feature-nav-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: rgba(238, 234, 231, 0.6);
          transition: color 0.3s ease;
        }

        .feature-nav-btn:hover .feature-nav-content {
          color: #eeeae7;
        }

        .feature-nav-btn.active .feature-nav-content {
          color: #eeeae7;
        }

        .feature-nav-label {
          font-size: 12px;
          font-weight: 600;
          text-align: center;
        }

        .pulse-overlay {
          position: absolute;
          inset: 0;
          border-radius: 12px;
          background-color: rgba(238, 234, 231, 0.1);
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .main-feature-card {
          background-color: rgba(54, 74, 82, 0.4);
          backdrop-filter: blur(24px);
          border-radius: 24px;
          border: 1px solid rgba(238, 234, 231, 0.2);
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .feature-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
        }

        .feature-image-col {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding: 32px;
          background-color: rgba(15, 37, 47, 0.3);
        }

        .feature-image-container {
          position: relative;
          width: 100%;
          height: 400px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .feature-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .feature-image-container:hover .feature-image {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(15, 37, 47, 0.6) 0%, transparent 50%);
        }

        .advantage-card {
          position: relative;
          padding: 24px;
          border-radius: 16px;
          background-color: #364a52;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          overflow: hidden;
        }

        .advantage-decoration {
          position: absolute;
          top: 0;
          right: 0;
          width: 128px;
          height: 128px;
          background-color: rgba(238, 234, 231, 0.1);
          border-radius: 50%;
          margin-right: -64px;
          margin-top: -64px;
        }

        .advantage-content {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: #eeeae7;
        }

        .advantage-content > svg {
          flex-shrink: 0;
          margin-top: 4px;
        }

        .advantage-title {
          font-size: 1.125rem;
          font-weight: bold;
          color: #eeeae7;
          margin: 0 0 8px 0;
        }

        .advantage-text {
          color: rgba(238, 234, 231, 0.9);
          line-height: 1.75;
          margin: 0;
        }

        .feature-details-col {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding: 32px;
        }

        .feature-header {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .feature-icon-box {
          padding: 16px;
          border-radius: 16px;
          background-color: #364a52;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          flex-shrink: 0;
          color: #eeeae7;
        }

        .feature-title-group {
          flex: 1;
        }

        .feature-title {
          font-size: 1.875rem;
          font-weight: bold;
          color: #eeeae7;
          line-height: 1.25;
          margin: 0 0 8px 0;
        }

        .feature-badge {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 9999px;
          font-size: 12px;
          font-weight: 600;
          background-color: #364a52;
          color: #eeeae7;
        }

        .feature-description {
          font-size: 1.125rem;
          color: rgba(238, 234, 231, 0.8);
          line-height: 1.75;
          margin: 0;
        }

        .includes-card {
          background-color: rgba(15, 37, 47, 0.5);
          backdrop-filter: blur(8px);
          border-radius: 16px;
          padding: 24px;
          border: 1px solid rgba(238, 234, 231, 0.1);
          flex: 1;
        }

        .includes-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #eeeae7;
          margin: 0 0 20px 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .includes-title svg {
          color: rgba(238, 234, 231, 0.6);
        }

        .includes-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .include-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px;
          border-radius: 12px;
          background-color: rgba(54, 74, 82, 0.3);
          transition: all 0.3s ease;
        }

        .include-item:hover {
          background-color: rgba(54, 74, 82, 0.5);
        }

        .check-icon {
          padding: 4px;
          border-radius: 8px;
          background-color: #364a52;
          flex-shrink: 0;
          margin-top: 2px;
          color: #eeeae7;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .include-item span {
          color: rgba(238, 234, 231, 0.8);
          font-size: 14px;
          line-height: 1.75;
          transition: color 0.3s ease;
        }

        .include-item:hover span {
          color: #eeeae7;
        }

        .nav-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          padding-top: 8px;
        }

        .nav-dot {
          width: 12px;
          height: 12px;
          border-radius: 9999px;
          background-color: rgba(238, 234, 231, 0.2);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-dot:hover {
          background-color: rgba(238, 234, 231, 0.4);
        }

        .nav-dot.active {
          width: 48px;
          border-radius: 4px;
          background-color: #364a52;
        }

        .cta-section {
          margin-top: 48px;
          text-align: center;
        }

        .cta-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background-color: #364a52;
          color: #eeeae7;
          padding: 16px 32px;
          border-radius: 12px;
          border: none;
          font-weight: bold;
          font-size: 1.125rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .cta-button:hover {
          transform: scale(1.05);
          background-color: #0f252f;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
        }

        .cta-button svg {
          transition: transform 0.3s ease;
        }

        .cta-button:hover svg {
          transform: translateX(4px);
        }

        .cta-shine {
          position: absolute;
          inset: 0;
          border-radius: 12px;
          background: linear-gradient(90deg, rgba(238, 234, 231, 0) 0%, rgba(238, 234, 231, 0.1) 50%, rgba(238, 234, 231, 0) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .cta-button:hover .cta-shine {
          opacity: 1;
        }

        @media (max-width: 1024px) {
          .feature-nav-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .main-title {
            font-size: 3rem;
          }

          .feature-grid {
            grid-template-columns: 1fr;
          }

          .feature-image-container {
            height: 300px;
          }
        }

        @media (max-width: 768px) {
          .features-showcase-wrapper {
            padding: 40px 16px;
          }

          .main-title {
            font-size: 2.5rem;
          }

          .subtitle {
            font-size: 1rem;
          }

          .feature-nav-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .feature-image-col,
          .feature-details-col {
            padding: 20px;
          }

          .feature-image-container {
            height: 250px;
          }

          .feature-title {
            font-size: 1.5rem;
          }

          .feature-description {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default FeaturesShowcase;