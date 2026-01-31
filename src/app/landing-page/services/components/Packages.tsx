"use client";
import React, { useState } from 'react';

interface PackageFeature {
  text: string;
  highlighted?: boolean;
}

interface PackageSection {
  title: string;
  features: PackageFeature[];
}

interface PublishingPackage {
  name: string;
  badge?: string;
  regularPrice: number;
  discountedPrice: number;
  sections: PackageSection[];
  isPopular?: boolean;
}

const PublishingPackages: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const openDiscount = () => {
    // Replace with your actual discount popup logic
  };

  const packagesData: PublishingPackage[] = [
    {
      name: 'Start Up Package',
      regularPrice: 600,
      discountedPrice: 130,
      sections: [
        {
          title: 'Manuscript Preparation',
          features: [
            { text: 'Proofreading' },
            { text: 'Editing' },
            { text: 'Interior Layout' },
            { text: 'Basic Formatting' },
            { text: '2 Revisions Per Draft' }
          ]
        },
        {
          title: 'Cover Preparation',
          features: [
            { text: 'Book Cover' }
          ]
        },
        {
          title: 'Publication Setup',
          features: [
            { text: 'Account Creation' },
            { text: 'Account Verification' },
            { text: 'Available on Amazon KDP' },
            { text: 'eBook Format' }
          ]
        },
        {
          title: 'Guarantees',
          features: [
            { text: 'No Royalties Share' },
            { text: '100% Ownership Rights' },
            { text: '100% Satisfaction' }
          ]
        }
      ]
    },
    {
      name: 'Standard Package',
      regularPrice: 900,
      discountedPrice: 250,
      isPopular: true,
      badge: 'MOST SOLD',
      sections: [
        {
          title: 'Manuscript Preparation',
          features: [
            { text: 'Critique Author Review Report' },
            { text: 'Editorial Support' },
            { text: 'Proofreading' },
            { text: 'Editing' },
            { text: 'Interior Layout' },
            { text: 'Publishing Standard Formatting', highlighted: true },
            { text: '5 Revisions Per Draft', highlighted: true }
          ]
        },
        {
          title: 'Cover Preparation',
          features: [
            { text: 'Book Cover' }
          ]
        },
        {
          title: 'Publication Setup',
          features: [
            { text: 'Account Creation' },
            { text: 'Account Verification' },
            { text: 'Regional Publication (100+ Platforms)', highlighted: true },
            { text: 'eBook Format' },
            { text: 'Paperback Format', highlighted: true },
            { text: '30 - 60 Seconds Video Trailer', highlighted: true }
          ]
        },
        {
          title: 'Guarantees',
          features: [
            { text: 'No Royalties Share' },
            { text: '100% Ownership Rights' },
            { text: '100% Satisfaction' }
          ]
        }
      ]
    },
    {
      name: 'Authors Elite',
      regularPrice: 3500,
      discountedPrice: 1749,
      sections: [
        {
          title: 'Manuscript Preparation',
          features: [
            { text: 'Editorial Support' },
            { text: 'Proofreading' },
            { text: 'Typesetting' },
            { text: 'Layout Adjustment', highlighted: true },
            { text: 'Publishing Standard Formatting', highlighted: true },
            { text: '5 Revisions Per Draft', highlighted: true }
          ]
        },
        {
          title: 'Cover Preparation',
          features: [
            { text: 'Graphic OR Illustrated Design', highlighted: true },
            { text: 'Cover Layout' },
            { text: 'Cover Formatting' },
            { text: 'Front, Back & Spine', highlighted: true },
            { text: 'ISBN + Barcode (2X)', highlighted: true }
          ]
        },
        {
          title: 'Publication Setup',
          features: [
            { text: 'Account Creation' },
            { text: 'Account Verification' },
            { text: 'Account Optimization', highlighted: true },
            { text: 'Available on Amazon & Kindle', highlighted: true },
            { text: 'Available on Barnes & Noble', highlighted: true },
            { text: 'eBook Format' },
            { text: 'Paperback Format' },
            { text: 'Hardcover Format', highlighted: true }
          ]
        },
        {
          title: 'Guarantees',
          features: [
            { text: 'No Royalties Share' },
            { text: '100% Ownership Rights' },
            { text: '100% Satisfaction' }
          ]
        }
      ]
    }
  ];

  return (
    <div className="packages-wrapper">
      <div className="background-pattern" />

      <div className="packages-container">
        {/* Header */}
        <div className="header">
          <h1 className="header-title">PUBLISHING PACKAGES</h1>
          <p className="header-subtitle">
            Join us today and be a part of our{' '}
            <span className="bestsellers-count">1000+</span>{' '}
            Bestsellers list
          </p>
        </div>

        {/* Packages Grid */}
        <div className="packages-grid">
          {packagesData.map((pkg, idx) => (
            <div
              key={idx}
              className={`package-card ${pkg.isPopular ? 'popular' : ''} ${hoveredCard === idx ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="top-accent" />

              {pkg.badge && (
                <div className="badge">{pkg.badge}</div>
              )}

              {/* Header Section */}
              <div className={`card-header ${pkg.isPopular ? 'popular-header' : ''}`}>
                <h3 className="package-name">{pkg.name}</h3>

                {/* Pricing */}
                <div className="pricing-container">
                  <div className="pricing-row">
                    <div className="price-box">
                      <div className="price-label">Regular Price</div>
                      <div className="regular-price">${pkg.regularPrice}</div>
                    </div>
                    <div className="arrow">→</div>
                    <div className="price-box">
                      <div className="price-label discount-label">Discounted Price</div>
                      <div className="discounted-price">${pkg.discountedPrice}</div>
                    </div>
                  </div>
                  <div className="savings-badge">
                    Save ${pkg.regularPrice - pkg.discountedPrice}
                  </div>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="scrollable-content">
                {pkg.sections.map((section, sIdx) => (
                  <div key={sIdx} className="section">
                    <h4 className="section-title">
                      <span className="title-accent" />
                      {section.title}
                    </h4>
                    <div className="features-list">
                      {section.features.map((feature, fIdx) => (
                        <div
                          key={fIdx}
                          className={`feature-item ${feature.highlighted ? 'highlighted' : ''} ${fIdx === section.features.length - 1 ? 'last' : ''}`}
                        >
                          <span className="feature-icon">
                            {feature.highlighted ? '✓' : '•'}
                          </span>
                          <span className="feature-text">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="card-footer">
                <button onClick={openDiscount} className="order-button">
                  Order Now →
                </button>

                <div className="contact-section">
                  <div className="contact-title">Need More Info?</div>
                  <div className="contact-options">
                    <div className="contact-box">
                      <div className="contact-label">📞 TALK TO US</div>
                      <div className="contact-value">
                        <a href="tel:+12812470786">+1 281-247-0786</a>
                      </div>
                    </div>
                    <div className="contact-box clickable">
                      <a href="/contact" target="_blank" rel="noopener noreferrer">
                        <div className="contact-label">💬 FOR MORE DETAIL</div>
                        <div className="contact-value">Chat With Us</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .packages-wrapper {
          background: #eeeae7;
          padding: 80px 20px;
          position: relative;
          overflow: hidden;
        }

        .background-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.03;
          background-image: 
            linear-gradient(30deg, #0f252f 12%, transparent 12.5%, transparent 87%, #0f252f 87.5%, #0f252f),
            linear-gradient(150deg, #0f252f 12%, transparent 12.5%, transparent 87%, #0f252f 87.5%, #0f252f),
            linear-gradient(30deg, #0f252f 12%, transparent 12.5%, transparent 87%, #0f252f 87.5%, #0f252f),
            linear-gradient(150deg, #0f252f 12%, transparent 12.5%, transparent 87%, #0f252f 87.5%, #0f252f);
          background-size: 80px 140px;
          background-position: 0 0, 0 0, 40px 70px, 40px 70px;
          pointer-events: none;
        }

        .packages-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* Header */
        .header {
          text-align: center;
          margin-bottom: 60px;
        }

        .header-title {
          color: #0f252f;
          letter-spacing: -0.5px;
          font-weight: 700;
          margin-bottom: 1rem;
          font-size: 2.5rem;
        }

        .header-subtitle {
          font-size: 20px;
          color: #364a52;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .bestsellers-count {
          color: #0f252f;
          font-weight: 700;
          font-size: 22px;
        }

        /* Grid */
        .packages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 32px;
          margin-bottom: 20px;
        }

        /* Card */
        .package-card {
          background: #ffffff;
          border-radius: 20px;
          border: 2px solid #d4d0cd;
          padding: 0;
          box-shadow: 0 8px 30px rgba(15, 37, 47, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateY(0) scale(1);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 750px;
        }

        .package-card.popular {
          border: 3px solid #0f252f;
        }

        .package-card.hovered {
          box-shadow: 0 20px 60px rgba(15, 37, 47, 0.2);
          transform: translateY(-8px) scale(1.02);
        }

        .top-accent {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 6px;
          background: #364a52;
        }

        .package-card.popular .top-accent {
          background: linear-gradient(90deg, #0f252f 0%, #364a52 100%);
        }

        .badge {
          position: absolute;
          top: 24px;
          right: -32px;
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
          color: #0f252f;
          padding: 6px 45px;
          transform: rotate(45deg);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          box-shadow: 0 4px 15px rgba(255, 165, 0, 0.4);
          z-index: 10;
        }

        /* Card Header */
        .card-header {
          padding: 36px 32px 28px;
          border-bottom: 2px solid #eeeae7;
          background: #fafafa;
        }

        .card-header.popular-header {
          background: #f8f6f4;
        }

        .package-name {
          font-size: 26px;
          font-weight: 700;
          color: #0f252f;
          margin-bottom: 24px;
          text-align: center;
          letter-spacing: 0.5px;
        }

        .pricing-container {
          text-align: center;
        }

        .pricing-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .price-box {
          display: flex;
          flex-direction: column;
        }

        .price-label {
          font-size: 11px;
          color: #364a52;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 4px;
          font-weight: 600;
        }

        .discount-label {
          color: #0f252f;
          font-weight: 700;
        }

        .regular-price {
          font-size: 20px;
          color: #999;
          text-decoration: line-through;
          font-weight: 600;
        }

        .arrow {
          font-size: 32px;
          color: #364a52;
          font-weight: 300;
        }

        .discounted-price {
          font-size: 42px;
          color: #0f252f;
          font-weight: 800;
          line-height: 1;
          letter-spacing: -1px;
        }

        .savings-badge {
          display: inline-block;
          background: linear-gradient(135deg, #0f252f 0%, #364a52 100%);
          color: #fff;
          padding: 6px 20px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        /* Scrollable Content */
        .scrollable-content {
          flex: 1;
          overflow-y: auto;
          padding: 28px 32px;
          scrollbar-width: thin;
          scrollbar-color: #364a52 #eeeae7;
        }

        .scrollable-content::-webkit-scrollbar {
          width: 6px;
        }

        .scrollable-content::-webkit-scrollbar-track {
          background: #eeeae7;
          border-radius: 10px;
        }

        .scrollable-content::-webkit-scrollbar-thumb {
          background: #364a52;
          border-radius: 10px;
          transition: background 0.2s ease;
        }

        .scrollable-content::-webkit-scrollbar-thumb:hover {
          background: #0f252f;
        }

        .section {
          margin-bottom: 28px;
        }

        .section-title {
          font-size: 15px;
          font-weight: 700;
          color: #0f252f;
          margin-bottom: 14px;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          padding-bottom: 8px;
          border-bottom: 2px solid #eeeae7;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .title-accent {
          width: 4px;
          height: 16px;
          background: linear-gradient(180deg, #0f252f 0%, #364a52 100%);
          border-radius: 2px;
        }

        .features-list {
          display: flex;
          flex-direction: column;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 0;
          color: #364a52;
          font-size: 14.5px;
          line-height: 1.5;
          border-bottom: 1px solid #f5f5f5;
        }

        .feature-item.last {
          border-bottom: none;
        }

        .feature-item.highlighted {
          color: #0f252f;
        }

        .feature-icon {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #eeeae7;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 10px;
          color: #fff;
          font-weight: 700;
        }

        .feature-item.highlighted .feature-icon {
          background: linear-gradient(135deg, #0f252f 0%, #364a52 100%);
        }

        .feature-text {
          font-weight: 400;
        }

        .feature-item.highlighted .feature-text {
          font-weight: 600;
        }

        /* Card Footer */
        .card-footer {
          padding: 24px 32px;
          border-top: 2px solid #eeeae7;
          background: #fafafa;
        }

        .order-button {
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, #0f252f 0%, #364a52 100%);
          color: #fff;
          border: none;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(15, 37, 47, 0.2);
        }

        .order-button:hover {
          background: linear-gradient(135deg, #364a52 0%, #0f252f 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(15, 37, 47, 0.3);
        }

        .contact-section {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #eeeae7;
        }

        .contact-title {
          font-size: 11px;
          color: #364a52;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 12px;
          font-weight: 700;
          text-align: center;
        }

        .contact-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }

        .contact-box {
          flex: 1;
          text-align: center;
          padding: 10px;
          background: #fff;
          border-radius: 8px;
          border: 1px solid #eeeae7;
          transition: all 0.2s ease;
        }

        .contact-box.clickable {
          cursor: pointer;
        }

        .contact-box.clickable:hover {
          background: #fff;
          border-color: #0f252f;
        }

        .contact-box a {
          color: inherit;
          text-decoration: none;
          display: block;
        }

        .contact-label {
          font-size: 10px;
          color: #364a52;
          margin-bottom: 4px;
          font-weight: 600;
        }

        .contact-value {
          font-size: 12px;
          color: #0f252f;
          font-weight: 700;
          transition: color 0.2s ease;
        }

        .contact-box.clickable:hover .contact-value {
          color: #364a52;
        }

        /* Responsive Styles */
        @media (max-width: 1200px) {
          .packages-grid {
            grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
            gap: 28px;
          }

          .package-card {
            height: 700px;
          }
        }

        @media (max-width: 968px) {
          .packages-wrapper {
            padding: 60px 20px;
          }

          .packages-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .header-title {
            font-size: 2rem;
          }

          .bestsellers-count {
            font-size: 1.75rem;
          }
        }

        @media (max-width: 576px) {
          .packages-wrapper {
            padding: 50px 15px;
          }

          .packages-container {
            padding: 0 10px;
          }

          .header {
            margin-bottom: 40px;
          }

          .header-title {
            font-size: 1.75rem;
            letter-spacing: 1.5px;
          }

          .header-subtitle {
            font-size: 18px;
          }

          .bestsellers-count {
            font-size: 1.5rem;
          }

          .packages-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .package-card {
            height: 650px;
            border-radius: 16px;
          }

          .card-header {
            padding: 28px 24px 20px;
          }

          .package-name {
            font-size: 22px;
          }

          .pricing-row {
            flex-wrap: wrap;
            gap: 8px;
          }

          .arrow {
            font-size: 24px;
          }

          .discounted-price {
            font-size: 36px;
          }

          .scrollable-content {
            padding: 20px 24px;
          }

          .card-footer {
            padding: 20px 24px;
          }

          .contact-options {
            flex-direction: column;
            gap: 12px;
          }

          .contact-box {
            width: 100%;
          }
        }

        @media (max-width: 400px) {
          .packages-grid {
            grid-template-columns: 1fr;
          }

          .package-card {
            height: 600px;
          }

          .header-title {
            font-size: 1.5rem;
          }

          .bestsellers-count {
            font-size: 1.25rem;
          }

          .card-header {
            padding: 24px 20px 16px;
          }

          .package-name {
            font-size: 20px;
          }

          .discounted-price {
            font-size: 32px;
          }

          .scrollable-content {
            padding: 16px 20px;
          }

          .card-footer {
            padding: 16px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default PublishingPackages;