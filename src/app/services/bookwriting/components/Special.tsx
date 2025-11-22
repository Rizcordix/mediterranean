"use client";
import React from 'react';
import { Clock, RefreshCw, ArrowRight, Check, Sparkles, Package } from 'lucide-react';

type Service = {
  id: number;
  title: string;
  tagLine: string;
  fullDescription: string;
  highlights: string[];
  perfectFor: string[];
  deliverables: string[];
  eta: string;
};

const SERVICES = [
  {
    id: 1,
    title: "Book Writing",
    tagLine: "Turning Your Creativity into Timeless Stories",
    fullDescription:
      "Professional book writing services that transform raw ideas into captivating narratives across fiction, non-fiction, memoirs, business books and more.",
    highlights: [
      "Genre Experts: Writers specialized in 50+ genres who understand market trends and reader expectations",
      "Your Voice, Amplified: We capture your unique tone, style, and message throughout the manuscript",
      "Collaborative Process: Regular check-ins and chapter reviews ensure your vision stays intact",
      "Research-Backed Content: For non-fiction, we conduct thorough research to ensure accuracy and credibility",
      "Fast Turnaround: Most manuscripts completed in 8–12 weeks without compromising quality",
      "Unlimited Revisions: We refine until you're 100% satisfied"
    ],
    perfectFor: [
      "First-time authors with a story to tell",
      "Busy entrepreneurs and professionals who lack writing time",
      "Experts wanting to establish thought leadership",
      "Creative minds seeking professional writing support",
      "Anyone with a message worth sharing"
    ],
    deliverables: [
      "Complete manuscript (10,000 - 100,000+ words)",
      "Chapter-by-chapter development",
      "Professional formatting",
      "Multiple revision rounds",
      "Full copyright ownership",
      "Editable source files"
    ],
    eta: "8-12 weeks"
  }, /* :contentReference[oaicite:2]{index=2} */

  {
    id: 2,
    title: "Audio Books",
    tagLine: "Engaging Audio Books For All Genres",
    fullDescription:
      "From voice casting to final mastering — studio-quality audiobook production and distribution-ready files for Audible, Apple Books, Google Play and more.",
    highlights: [
      "Professional Voice Talent: Access to 100+ voice actors with diverse accents, ages, and styles",
      "Studio-Quality Recording: State-of-the-art equipment ensures crystal-clear audio",
      "Expert Audio Engineering: Professional editing, mastering, and sound enhancement",
      "Multiple Format Delivery: Compatible with all major platforms",
      "Character Distinction: Multiple voices for dialogue when appropriate",
      "Royalty Management: Track your earnings across distribution channels"
    ],
    perfectFor: [
      "Authors wanting to expand into audio market",
      "Publishers diversifying content formats",
      "Self-publishers seeking additional revenue streams",
      "Authors with existing books ready for audio conversion",
      "Content creators building multi-platform presence"
    ],
    deliverables: [
      "Professionally narrated audiobook",
      "Studio-quality audio mastering",
      "Chapter markers and metadata",
      "Distribution-ready files for all platforms",
      "Audio cover artwork",
      "ISBN for audiobook (if needed)"
    ],
    eta: "2-4 weeks (typical prod timeline noted in file)"
  }, /* :contentReference[oaicite:3]{index=3} */

  {
    id: 3,
    title: "Blog Writing",
    tagLine: "Bespoke Blog Writing Services",
    fullDescription:
      "SEO-optimized blog content and content strategy to grow your author platform, drive organic traffic and repurpose content for socials/newsletters.",
    highlights: [
      "SEO Mastery: Posts optimized with keyword research, meta descriptions and linking",
      "Audience Understanding: Tailored content to target readers' interests",
      "Consistent Voice: Maintain your unique brand voice",
      "Engagement Focus: Designed to spark comments, shares and interaction",
      "Multi-Purpose Content: Easily repurposed for social media and marketing",
      "Content Strategy: Topic planning that supports author goals"
    ],
    perfectFor: [
      "Authors building their platform before launch",
      "Published authors maintaining reader engagement",
      "Thought leaders sharing expertise",
      "Fiction authors creating immersive story worlds",
      "Non-fiction authors establishing credibility"
    ],
    deliverables: [
      "SEO-optimized blog posts (500–2500 words)",
      "Keyword research and integration",
      "Meta titles and descriptions",
      "Social media snippets",
      "Image suggestions/sourcing",
      "Publishing schedule recommendations"
    ],
    eta: "Ongoing / by schedule"
  }, /* :contentReference[oaicite:4]{index=4} */

  {
    id: 4,
    title: "eBook Ghostwriting",
    tagLine: "Your Ideas, Our Words, Your eBooks",
    fullDescription:
      "Confidential ghostwriting that captures your voice and delivers a ready-to-publish eBook while you retain full credit and rights.",
    highlights: [
      "Complete Confidentiality: Strict NDAs",
      "Your Voice, Perfected: Interviews + collaboration to capture tone",
      "Zero Credit Required: We remain invisible; you are the author",
      "Flexible Lengths: From short guides to full books",
      "Any Genre Expertise: Fiction, non-fiction, memoir, business",
      "100% Original & Rights Transfer"
    ],
    perfectFor: [
      "Busy CEOs and executives",
      "Entrepreneurs building authority",
      "Influencers and celebrities",
      "Professionals with limited writing time",
      "Anyone with a story that deserves to be told"
    ],
    deliverables: [
      "Fully written eBook manuscript",
      "Professional formatting",
      "Unlimited revisions",
      "Complete confidentiality (NDA)",
      "Full copyright ownership",
      "Source files in all formats",
      "Publishing-ready manuscript"
    ],
    eta: "Varies by scope (process includes discovery, outline, writing sprints)"
  }, /* :contentReference[oaicite:5]{index=5} */

  {
    id: 5,
    title: "Book Printing",
    tagLine: "Affordable Book Printing Solutions",
    fullDescription:
      "Print-on-demand and bulk printing options (paperback, hardcover, special editions) with global facilities and eco options.",
    highlights: [
      "Print-on-Demand: No minimum orders",
      "Multiple Format Options: Paperback, hardcover, coil, leather",
      "Premium Paper & Binding Options",
      "Global Distribution: Faster/cheaper shipping",
      "Eco-Friendly Options",
      "Quality Guarantee: Inspection before shipping"
    ],
    perfectFor: [
      "Self-published authors needing physical copies",
      "Authors for events and signings",
      "Publishers managing inventory",
      "Businesses creating branded books",
      "Gift books and educational materials"
    ],
    deliverables: [
      "Professionally printed books",
      "High-quality binding and paper stock",
      "Accurate color reproduction",
      "Fast production turnaround",
      "Global shipping and bulk discounts"
    ],
    eta: "Production timelines vary (typical fast turnarounds noted)"
  }, /* :contentReference[oaicite:6]{index=6} */

  {
    id: 6,
    title: "Book Marketing",
    tagLine: "Promoting Your Authors",
    fullDescription:
      "Multi-channel, data-driven marketing: Amazon, social, PR, paid ads and launch management to maximize visibility and sales.",
    highlights: [
      "Multi-Channel Approach: Amazon, social, email, PR",
      "Data-Driven Strategies: Analytics and testing",
      "Genre-Specific Expertise",
      "Launch Specialists: Max impact on release day",
      "Organic + Paid: SEO + ads blend",
      "Influencer Partnerships & Measurable Reporting"
    ],
    perfectFor: [
      "New releases needing launch momentum",
      "Backlist revival campaigns",
      "Authors wanting hands-off marketing",
      "Series launches and continuity campaigns"
    ],
    deliverables: [
      "Comprehensive marketing strategy and campaign management",
      "Social media content and posting",
      "Email marketing campaigns",
      "Ad campaign creation and optimization",
      "Performance analytics and reporting"
    ],
    eta: "Campaigns often launch within 1 week; full programs vary"
  }, /* :contentReference[oaicite:7]{index=7} */

  {
    id: 7,
    title: "Article Publication",
    tagLine: "Establishing Your Authority",
    fullDescription:
      "Write, optimize and place high-quality articles on reputable outlets to build credibility, backlinks and audience reach.",
    highlights: [
      "Premium Outlet Access: Major publications and industry blogs",
      "SEO-Optimized Content for ranking",
      "Thought Leadership Positioning",
      "Byline Articles with full credit",
      "Link Building & Media Kit creation"
    ],
    perfectFor: [
      "Non-fiction authors building credibility",
      "Professionals seeking media visibility",
      "Consultants and coaches attracting clients",
      "Authors promoting book topics"
    ],
    deliverables: [
      "Professionally written articles (500–2000 words)",
      "Publication on high-authority websites",
      "Author byline and backlinks",
      "Shareable links and PDFs",
      "Performance metrics"
    ],
    eta: "Placement timelines vary by outlet"
  }, /* :contentReference[oaicite:8]{index=8} */

  {
    id: 8,
    title: "Book Video Trailer",
    tagLine: "Bringing Creativity to Life Through Videos",
    fullDescription:
      "Cinematic book trailers (30–90s) with voiceover, licensed music and platform-optimized versions for YouTube, Instagram, TikTok and more.",
    highlights: [
      "Cinematic Quality: Hollywood-style production values",
      "Genre-Specific Styles for strongest impact",
      "Multi-Platform Optimized aspect ratios",
      "Professional Voiceover and licensed music",
      "Fast Turnaround: most completed in 2–3 weeks",
      "Revision rounds included"
    ],
    perfectFor: [
      "Book launches and pre-release campaigns",
      "Social media advertising and promo",
      "Website and landing page videos",
      "Crowdfunding and virtual tours"
    ],
    deliverables: [
      "Professional book video trailer (multiple lengths)",
      "HD/4K files, multiple aspect ratios",
      "Source/project files and thumbnails",
      "Posting and optimization guide"
    ],
    eta: "2-3 weeks"
  }, /* :contentReference[oaicite:9]{index=9} */

  {
    id: 9,
    title: "Book Illustration",
    tagLine: "Painting Your Words in Color",
    fullDescription:
      "Professional illustrations for children's books, graphic novels, infographics and more—print-ready and style-consistent artwork.",
    highlights: [
      "Diverse Art Styles: watercolor, digital, cartoon, realistic",
      "Character Design & Scene Composition",
      "Age-Appropriate Tone & Unlimited Revisions",
      "Print-Ready Files and Style Consistency"
    ],
    perfectFor: [
      "Children's book authors",
      "Graphic novel creators",
      "Cookbooks and illustrated guides",
      "Educational and specialty projects"
    ],
    deliverables: [
      "High-resolution illustration files (300 DPI)",
      "Print-ready CMYK and web RGB versions",
      "Character sheets and source files (PSD/AI)",
      "Style guide for consistency"
    ],
    eta: "Varies by scope (process provided)"
  }, /* :contentReference[oaicite:10]{index=10} */

  {
    id: 10,
    title: "Cover Design",
    tagLine: "Stunning Book Cover Designs For Your Books",
    fullDescription:
      "Market-aware, genre-specific cover design with multiple concepts, psychological color/typography choices and print/digital deliverables.",
    highlights: [
      "Market Research driven concepts",
      "Multiple initial design options (3–5)",
      "Genre Expertise and psychology-driven choices",
      "Print & Digital optimization and unlimited revisions"
    ],
    perfectFor: [
      "Self-published authors needing professional covers",
      "Publishers rebranding older books",
      "Series launches requiring cohesive design"
    ],
    deliverables: [
      "Front, spine, and back layouts",
      "Print-ready PDFs and eBook optimized cover",
      "3D mockups and source files (PSD/AI)",
      "Series templates if needed"
    ],
    eta: "1–2 weeks (typical design cycles)"
  }, /* :contentReference[oaicite:11]{index=11} */

  {
    id: 11,
    title: "Web Design & SEO",
    tagLine: "Creating Beautiful Web Designs",
    fullDescription:
      "Author-focused websites (mobile-first, SEO-optimized, e-commerce enabled) that convert visitors into readers.",
    highlights: [
      "Author-Focused Design and mobile-first approach",
      "SEO Optimized: technical + on-page + schema",
      "E-commerce & newsletter integration",
      "Fast loading and easy CMS management"
    ],
    perfectFor: [
      "Authors launching a website",
      "Published authors rebranding",
      "Self-publishers selling directly",
      "Publishers needing microsites"
    ],
    deliverables: [
      "Fully designed & developed website (responsive)",
      "SEO optimization setup and CMS integration",
      "Newsletter & analytics setup",
      "Training and 30-day support"
    ],
    eta: "2–4 weeks (typical)"
  }, /* :contentReference[oaicite:12]{index=12} */

  {
    id: 12,
    title: "Website Content Writing",
    tagLine: "Content that Fuels Your Online Presence",
    fullDescription:
      "Conversion-focused, SEO-optimized website copy (home, about, books, blog, contact) that engages readers and drives actions.",
    highlights: [
      "Conversion-Focused copy that guides visitors to action",
      "SEO-Optimized with keyword research and meta data",
      "Brand Voice Development and reader psychology",
      "Scannable formatting and compelling CTAs"
    ],
    perfectFor: [
      "New author websites needing complete content",
      "Existing sites needing a refresh",
      "Authors rebranding or launching new books"
    ],
    deliverables: [
      "Homepage headlines and value propositions",
      "About and books page copy",
      "Service pages and blog posts",
      "Meta titles & descriptions, CTA microcopy",
      "Content strategy & style guide"
    ],
    eta: "Delivery per agreed project timeline (typical website content workflows)"
  } /* :contentReference[oaicite:13]{index=13} */
];

export default function Component({ id = 1 }: { id?: number }) {
  const service = SERVICES.find((s) => s.id === id) ?? SERVICES[0];

  return (
    <section className="service-wrapper">
      <div className="service-container">

        {/* Main Content Grid */}
        <div className="content-grid">
          {/* Left Sidebar - Quick Info */}
          <aside className="sidebar">
            <div className="info-card">
              <div className="info-item">
                <div className="info-icon">
                  <Clock size={20} />
                </div>
                <div className="info-content">
                  <div className="info-label">Estimated Timeline</div>
                  <div className="info-value">{service.eta}</div>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <RefreshCw size={20} />
                </div>
                <div className="info-content">
                  <div className="info-label">Revisions</div>
                  <div className="info-value">Unlimited</div>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Package size={20} />
                </div>
                <div className="info-content">
                  <div className="info-label">Deliverables</div>
                  <div className="info-value">{service.deliverables.length} items</div>
                </div>
              </div>
            </div>

            <div className="cta-section">
              <button className="btn-primary">
                <span>Book a Free Demo</span>
                <ArrowRight size={16} />
              </button>
              <button className="btn-secondary">
                View Samples
              </button>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="main-content">
            {/* Highlights Section */}
            <div className="content-card">
              <h2 className="card-title">What Makes Us Special</h2>
              <ul className="highlights-list">
                {service.highlights.map((highlight, idx) => (
                  <li key={idx} className="highlight-item">
                    <div className="check-icon">
                      <Check size={16} />
                    </div>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Two Column Section */}
            <div className="two-column">
              <div className="content-card">
                <h3 className="card-subtitle">Perfect For</h3>
                <ul className="detail-list">
                  {service.perfectFor.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="content-card">
                <h3 className="card-subtitle">What You'll Receive</h3>
                <ul className="detail-list">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer Note */}
            <div className="footer-note">
              <Sparkles size={14} />
              <span>All packages include a dedicated project manager and complete source files</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .service-wrapper {
          min-height: 100vh;
        //   background: linear-gradient(135deg, #eeeae7 0%, #f8f6f4 100%);
          padding: 60px 24px;
        }

        .service-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Hero Banner */
        .hero-banner {
          background: linear-gradient(135deg, #364a52 0%, #0f252f 100%);
          border-radius: 24px;
          padding: 48px;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 48px;
          align-items: center;
          margin-bottom: 40px;
          box-shadow: 0 20px 60px rgba(15, 37, 47, 0.2);
          position: relative;
          overflow: hidden;
        }

        .hero-banner::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          height: 100%;
          background: radial-gradient(circle at top right, rgba(238, 234, 231, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 1;
        }

        .service-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(238, 234, 231, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(238, 234, 231, 0.2);
          color: #eeeae7;
          padding: 8px 16px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .service-title {
          color: #eeeae7;
          font-size: 42px;
          font-weight: 700;
          margin: 0 0 12px 0;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .service-tagline {
          color: rgba(238, 234, 231, 0.9);
          font-size: 20px;
          font-weight: 500;
          margin: 0 0 16px 0;
        }

        .service-description {
          color: rgba(238, 234, 231, 0.75);
          font-size: 15px;
          line-height: 1.6;
          margin: 0;
        }

        .hero-image {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          position: relative;
          z-index: 1;
        }

        .hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Content Grid */
        .content-grid {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 32px;
          align-items: start;
        }

        /* Sidebar */
        .sidebar {
          position: sticky;
          top: 12%;
        }

        .info-card {
          background: white;
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 4px 20px rgba(15, 37, 47, 0.08);
          margin-bottom: 20px;
        }

        .info-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 16px 0;
          border-bottom: 1px solid rgba(54, 74, 82, 0.1);
        }

        .info-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .info-item:first-child {
          padding-top: 0;
        }

        .info-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(54, 74, 82, 0.1), rgba(15, 37, 47, 0.05));
          display: flex;
          align-items: center;
          justify-content: center;
          color: #364a52;
          flex-shrink: 0;
        }

        .info-content {
          flex: 1;
        }

        .info-label {
          font-size: 13px;
          color: rgba(15, 37, 47, 0.6);
          margin-bottom: 4px;
          font-weight: 500;
        }

        .info-value {
          font-size: 16px;
          color: #0f252f;
          font-weight: 700;
        }

        /* CTA Section */
        .cta-section {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .btn-primary {
          width: 100%;
          background: linear-gradient(135deg, #364a52 0%, #0f252f 100%);
          color: #eeeae7;
          border: none;
          padding: 16px 24px;
          border-radius: 14px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 8px 24px rgba(15, 37, 47, 0.25);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(15, 37, 47, 0.35);
        }

        .btn-primary:active {
          transform: translateY(0);
        }

        .btn-secondary {
          width: 100%;
          background: white;
          color: #364a52;
          border: 2px solid rgba(54, 74, 82, 0.15);
          padding: 14px 24px;
          border-radius: 14px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .btn-secondary:hover {
          border-color: #364a52;
          background: rgba(54, 74, 82, 0.03);
          transform: translateY(-1px);
        }

        /* Main Content */
        .main-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .content-card {
          background: white;
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 4px 20px rgba(15, 37, 47, 0.08);
          transition: all 0.3s ease;
        }

        .content-card:hover {
          box-shadow: 0 8px 32px rgba(15, 37, 47, 0.12);
        }

        .card-title {
          color: #0f252f;
          font-size: 24px;
          font-weight: 700;
          margin: 0 0 24px 0;
          letter-spacing: -0.01em;
        }

        .card-subtitle {
          color: #364a52;
          font-size: 18px;
          font-weight: 700;
          margin: 0 0 16px 0;
        }

        /* Highlights List */
        .highlights-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 16px;
        }

        .highlight-item {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          padding: 16px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(54, 74, 82, 0.03), rgba(238, 234, 231, 0.3));
          transition: all 0.3s ease;
        }

        .highlight-item:hover {
          background: linear-gradient(135deg, rgba(54, 74, 82, 0.06), rgba(238, 234, 231, 0.5));
          transform: translateX(4px);
        }

        .check-icon {
          width: 24px;
          height: 24px;
          border-radius: 8px;
          background: linear-gradient(135deg, #364a52, #0f252f);
          color: #eeeae7;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .highlight-item span {
          color: #0f252f;
          font-size: 15px;
          line-height: 1.6;
        }

        /* Two Column Layout */
        .two-column {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .detail-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .detail-list li {
          padding: 12px 0;
          padding-left: 24px;
          position: relative;
          color: rgba(15, 37, 47, 0.85);
          font-size: 14px;
          line-height: 1.6;
          border-bottom: 1px solid rgba(54, 74, 82, 0.06);
          transition: all 0.2s ease;
        }

        .detail-list li:last-child {
          border-bottom: none;
        }

        .detail-list li:hover {
          color: #0f252f;
          padding-left: 28px;
        }

        .detail-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 18px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: linear-gradient(135deg, #364a52, #0f252f);
        }

        /* Footer Note */
        .footer-note {
          background: linear-gradient(135deg, rgba(54, 74, 82, 0.05), rgba(238, 234, 231, 0.4));
          border-left: 4px solid #364a52;
          padding: 20px 24px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(15, 37, 47, 0.8);
          font-size: 14px;
          font-weight: 500;
        }

        .footer-note :global(svg) {
          color: #364a52;
          flex-shrink: 0;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .content-grid {
            grid-template-columns: 1fr;
          }

          .sidebar {
            position: static;
            order: 2;
          }

          .main-content {
            order: 1;
          }

          .two-column {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .service-wrapper {
            padding: 32px 16px;
          }

          .hero-banner {
            grid-template-columns: 1fr;
            padding: 32px 24px;
            gap: 32px;
          }

          .service-title {
            font-size: 32px;
          }

          .service-tagline {
            font-size: 18px;
          }

          .content-card {
            padding: 24px;
          }

          .card-title {
            font-size: 20px;
          }
        }
      `}</style>
    </section>
  );
}