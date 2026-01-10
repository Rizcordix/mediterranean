"use client";
import React, { useState } from "react";
import {
  BookOpen,
  Edit3,
  Image,
  Globe,
  Headphones,
  FileText,
  TrendingUp,
  Target,
  ChevronRight,
  Check,
} from "lucide-react";

const PublishingFeatures: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0);

  const features = [
    {
      icon: <BookOpen size={28} />,
      title: "Professional Book Writing",
      headline: "Your Story, Professionally Told",
      description:
        "Whether you have a detailed outline or just an idea, our experienced writers transform your vision into a captivating manuscript. We specialize in 50+ genres—fiction, non-fiction, memoir, business, fantasy, romance, thrillers, and more.",
      benefits: [
        "Genre-specialist writers matched to your book type",
        "Your voice, amplified (not replaced)",
        "Chapter-by-chapter feedback loops",
        "8-12 week average completion",
        "Unlimited revisions until perfect",
        "Full copyright ownership",
      ],
      perfectFor: "First-time authors, busy professionals, anyone struggling to write their book",
    },
    {
      icon: <Edit3 size={28} />,
      title: "Expert Editing & Proofreading",
      headline: "Professional Polish. Publishable Quality.",
      description:
        "Your manuscript is the foundation. Professional editing is what makes it shine. Our award-winning editors provide developmental feedback, line editing, copy editing, and proofreading. This isn't quick grammar checking—it's professional editorial expertise.",
      benefits: [
        "Developmental editing (story structure, pacing)",
        "Line editing (prose quality, readability)",
        "Copy editing (grammar, consistency, style)",
        "Proofreading (final polish)",
        "Comprehensive editing report",
        "Multiple revision rounds",
      ],
      perfectFor: "Authors who've written drafts, professionals sharing expertise, thought leaders",
    },
    {
      icon: <Image size={28} />,
      title: "Stunning Cover Design",
      headline: "Your Cover Gets Noticed. Your Book Gets Sold.",
      description:
        "Your cover is your book's first impression. A generic cover gets ignored. A professional cover gets purchased. Our design team creates covers that stop scrollers and sell books. We combine AI-assisted design with human creativity.",
      benefits: [
        "Custom cover design (not templates)",
        "Genre-appropriate aesthetics",
        "Print and digital optimization",
        "Unlimited design revisions",
        "High-resolution files for all formats",
        "Amazon and print-ready specifications",
      ],
      perfectFor: "Self-published authors, debut novelists, anyone wanting bookstore-quality covers",
    },
    {
      icon: <Globe size={28} />,
      title: "Book Publishing & Distribution",
      headline: "Your Book Reaches Readers Everywhere",
      description:
        "Publishing your book shouldn't require managing multiple platforms. We handle Amazon KDP, IngramSpark, Apple Books, Google Play, and 95+ other retailers. One submission from us. Your book appears globally.",
      benefits: [
        "Multi-format publishing (eBook, paperback, hardcover)",
        "Global distribution (100+ channels)",
        "ISBN management",
        "Metadata optimization for each platform",
        "Print on-demand integration",
        "Royalty tracking and reporting",
      ],
      perfectFor: "Authors wanting maximum reach, anyone selling internationally",
    },
    {
      icon: <Headphones size={28} />,
      title: "Audiobook Production",
      headline: "Reach Listeners. Expand Your Audience. Double Your Revenue.",
      description:
        "Audiobook listeners are growing 25% annually. Professional audiobook production opens new revenue streams. Our team handles voice casting, studio recording, audio engineering, and distribution to Audible, Apple Books, and Google Play.",
      benefits: [
        "Professional voice talent selection",
        "Studio-quality recording",
        "Expert audio mastering",
        "Chapter markers and metadata",
        "Distribution to Audible, Apple, Google Play",
        "Royalty tracking by platform",
      ],
      perfectFor: "Fiction authors, self-help authors, business professionals, thought leaders",
    },
    {
      icon: <FileText size={28} />,
      title: "Ghost Writing Services",
      headline: "Your Ideas. Your Vision. Your Name. Our Words.",
      description:
        "You have brilliant ideas but zero time to write. Our confidential ghostwriters transform your concepts into polished books. You maintain complete creative control and ownership. You get 100% author credit. We work behind the scenes.",
      benefits: [
        "Complete confidentiality (NDA)",
        "Interview-based content discovery",
        "Full manuscript written",
        "Unlimited revisions",
        "Complete copyright ownership",
        "Publishing ready manuscript",
      ],
      perfectFor: "Busy executives, entrepreneurs building authority, thought leaders",
    },
    {
      icon: <TrendingUp size={28} />,
      title: "SEO-Optimized Blog Writing",
      headline: "Build Your Author Platform. Drive Book Sales Organically.",
      description:
        "Your book doesn't sell itself—it sells when readers know about it. Consistent, high-quality blog content builds your author platform, establishes authority, and drives organic traffic to your book sales pages.",
      benefits: [
        "SEO keyword research and optimization",
        "Genre-appropriate content strategies",
        "Social media snippets included",
        "Consistent publishing schedule",
        "Performance tracking",
        "Content calendar management",
      ],
      perfectFor: "Authors building platforms, business authors, thought leaders",
    },
    {
      icon: <Target size={28} />,
      title: "Comprehensive Book Marketing",
      headline: "Your Book Deserves an Audience. Let's Find Them.",
      description:
        "Publishing your book is step one. Marketing it is steps two through ten. Our targeted marketing strategies include social media campaigns, email marketing, influencer partnerships, book blogger outreach, and strategic advertising.",
      benefits: [
        "Social media marketing strategy",
        "Email campaign creation",
        "Book blogger outreach",
        "Influencer partnership identification",
        "Amazon advertising optimization",
        "Sales tracking and optimization",
      ],
      perfectFor: "Authors serious about sales, thought leaders, business professionals, debut novelists",
    },
  ];

  return (
    <div className="features-container">
      <div className="features-content">
        <div className="section-header">
          <h2>Our Complete Publishing Solution</h2>
          <p className="subtitle">One Vision. One Team. Real Results.</p>
        </div>

        <div className="features-layout">
          {/* Left sidebar navigation */}
          <div className="features-nav">
            {features.map((feature, index) => (
              <button
                key={index}
                className={`nav-item ${activeFeature === index ? "active" : ""}`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="nav-icon">{feature.icon}</div>
                <span className="nav-title">{feature.title}</span>
                <ChevronRight size={18} className="nav-arrow" />
              </button>
            ))}
          </div>

          {/* Right content area */}
          <div className="feature-content">
            <div className="content-icon">{features[activeFeature].icon}</div>
            <h3 className="content-headline">{features[activeFeature].headline}</h3>
            <p className="content-description">{features[activeFeature].description}</p>

            <div className="benefits-section">
              <h4>What&apos;s Included:</h4>
              <ul className="benefits-list">
                {features[activeFeature].benefits.map((benefit, idx) => (
                  <li key={idx}>
                    <Check size={18} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="perfect-for">
              <strong>Perfect For:</strong> {features[activeFeature].perfectFor}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .features-container {
          background-color: #f8f6f4;
          padding: 80px 20px;
          position: relative;
        }

        .features-container::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #364a52, #0f252f);
        }

        .features-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-header h2 {
          font-size: 2.8rem;
          color: #0f252f;
          margin-bottom: 16px;
          position: relative;
          display: inline-block;
        }

        .section-header h2::after {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 20%;
          width: 60%;
          height: 3px;
          background: linear-gradient(90deg, #364a52, #0f252f);
        }

        .subtitle {
          font-size: 1.3rem;
          color: #364a52;
          margin: 0;
        }

        .features-layout {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 40px;
          align-items: start;
        }

        /* Navigation Sidebar */
        .features-nav {
          display: flex;
          flex-direction: column;
          gap: 12px;
          position: sticky;
          top: 20px;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: white;
          border: 2px solid transparent;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
          width: 100%;
        }

        .nav-item:hover {
          border-color: #364a52;
          transform: translateX(5px);
          box-shadow: 0 4px 12px rgba(15, 37, 47, 0.1);
        }

        .nav-item.active {
          background: linear-gradient(135deg, #364a52 0%, #0f252f 100%);
          color: white;
          border-color: #0f252f;
          box-shadow: 0 6px 16px rgba(15, 37, 47, 0.2);
        }

        .nav-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background-color: rgba(54, 74, 82, 0.1);
          color: #364a52;
          flex-shrink: 0;
        }

        .nav-item.active .nav-icon {
          background-color: rgba(255, 255, 255, 0.2);
          color: white;
        }

        .nav-title {
          flex-grow: 1;
          font-weight: 600;
          font-size: 0.95rem;
          color: #0f252f;
        }

        .nav-item.active .nav-title {
          color: white;
        }

        .nav-arrow {
          color: #364a52;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .nav-item:hover .nav-arrow,
        .nav-item.active .nav-arrow {
          opacity: 1;
          color: white;
        }

        /* Content Area */
        .feature-content {
          background: white;
          padding: 40px;
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(15, 37, 47, 0.08);
          min-height: 500px;
        }

        .content-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          border-radius: 12px;
          background: linear-gradient(135deg, #364a52 0%, #0f252f 100%);
          color: white;
          margin-bottom: 24px;
        }

        .content-headline {
          font-size: 2rem;
          color: #0f252f;
          margin-bottom: 16px;
          line-height: 1.3;
        }

        .content-description {
          font-size: 1.1rem;
          color: #364a52;
          line-height: 1.7;
          margin-bottom: 32px;
        }

        .benefits-section h4 {
          font-size: 1.3rem;
          color: #0f252f;
          margin-bottom: 16px;
        }

        .benefits-list {
          list-style: none;
          padding: 0;
          margin: 0 0 32px 0;
          display: grid;
          gap: 12px;
        }

        .benefits-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 1rem;
          color: #364a52;
          line-height: 1.6;
        }

        .benefits-list li svg {
          color: #4caf50;
          flex-shrink: 0;
          margin-top: 3px;
        }

        .perfect-for {
          padding: 20px;
          background-color: #eeeae7;
          border-left: 4px solid #364a52;
          border-radius: 8px;
          font-size: 1rem;
          color: #364a52;
          line-height: 1.6;
        }

        .perfect-for strong {
          color: #0f252f;
        }

        /* Responsive Design */
        @media (max-width: 968px) {
          .features-layout {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .features-nav {
            position: static;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 12px;
          }

          .nav-item {
            padding: 12px;
          }

          .nav-title {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 768px) {
          .section-header h2 {
            font-size: 2rem;
          }

          .subtitle {
            font-size: 1.1rem;
          }

          .features-nav {
            grid-template-columns: 1fr;
          }

          .feature-content {
            padding: 24px;
          }

          .content-headline {
            font-size: 1.5rem;
          }

          .content-description {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default PublishingFeatures;