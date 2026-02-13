"use client";
import React from 'react';

interface PackageFeature {
  name: string;
  deal1: string | boolean;
  deal2: string | boolean;
  deal3: string | boolean;
}

const PublishingPackagesComparison: React.FC = () => {
  const features: PackageFeature[] = [
    { name: 'Price', deal1: '$175', deal2: '$275', deal3: '$775' },
    { name: 'Proofreading', deal1: 'no', deal2: 'Basic', deal3: 'Professional' },
    { name: 'Formatting', deal1: 'Ebook', deal2: 'Ebook + Paperback', deal3: 'All Format' },
    { name: 'Custom cover design', deal1: true, deal2: 'y', deal3: true },
    { name: 'Revisions', deal1: 'no', deal2: '2', deal3: 'Unlimited' },
    { name: 'Publishing platforms', deal1: 'Amazon', deal2: 'Amazon + 5', deal3: '10+ Platforms' },
    { name: 'Printed copy', deal1: false, deal2: '1', deal3: '2' },
    { name: 'Access to author copy', deal1: true, deal2: true, deal3: true },
    { name: 'Isbn', deal1: 'Asin', deal2: '1x Standard', deal3: '2x Standard' },
    { name: 'Audio book', deal1: false, deal2: false, deal3: true },
    { name: 'Book trailer', deal1: false, deal2: false, deal3: '30 Sec Video Trailer' },
    { name: 'Account creation and formation', deal1: true, deal2: true, deal3: true },
    { name: 'Ownership', deal1: '100%', deal2: '100%', deal3: '100%' },
    { name: 'Social media posting', deal1: false, deal2: false, deal3: 'Limited' },
  ];

  const capitalizeFirstLetter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const renderValue = (value: string | boolean, isPrice: boolean = false) => {
    if (value === true || value === 'yes' || value === 'y') {
      return <span className="check-icon">✓</span>;
    } else if (value === false || value === 'no') {
      return <span className="dash-icon">-</span>;
    } else {
      return <span className={`text-value ${isPrice ? 'price-text' : ''}`}>{value}</span>;
    }
  };

  return (
    <div className="comparison-wrapper">
      <div className="background-pattern" />

      <div className="comparison-container">
        {/* Header */}
        <div className="header">
          <h1 className="header-title">PUBLISHING PACKAGES</h1>
          <p className="header-subtitle">
            Join us today and be a part of our{' '}
            <span className="bestsellers-count">1000+</span>{' '}
            Bestsellers list
          </p>
        </div>

        {/* Comparison Table */}
        <div className="comparison-table">
          {/* Desktop View */}
          <div className="desktop-table">
            {/* Table Header */}
            <div className="table-header">
              <div className="header-cell features-header">
                <span>Features</span>
              </div>
              <div className="header-cell package-header">
                <div className="package-name">Start Up Package</div>
              </div>
              <div className="header-cell package-header popular-header">
                <div className="popular-badge">MOST POPULAR</div>
                <div className="package-name package-name-split">
                  <span style={{fontSize: '20px'}}>Standard</span>
                  <span>Package</span>
                </div>
              </div>
              <div className="header-cell package-header">
                <div className="package-name">Authors Elite</div>
              </div>
            </div>

            {/* Table Body */}
            <div className="table-body">
              {features.map((feature, index) => (
                <div key={index} className={`feature-row ${index === 0 ? 'price-row' : ''}`}>
                  <div className="feature-name">{capitalizeFirstLetter(feature.name)}</div>
                  <div className="feature-value">
                    {renderValue(feature.deal1, index === 0)}
                  </div>
                  <div className="feature-value popular-col">
                    {renderValue(feature.deal2, index === 0)}
                  </div>
                  <div className="feature-value">
                    {renderValue(feature.deal3, index === 0)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile View */}
          <div className="mobile-cards">
            {/* Start Up Package Card */}
            <div className="mobile-card">
              <div className="card-header">
                <h3 className="card-title">Start Up Package</h3>
              </div>
              <div className="card-body">
                {features.map((feature, index) => (
                  <div key={index} className={`card-feature ${index === 0 ? 'price-feature' : ''}`}>
                    <span className="card-feature-name">{capitalizeFirstLetter(feature.name)}</span>
                    <span className="card-feature-value">
                      {renderValue(feature.deal1, index === 0)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Standard Package Card */}
            <div className="mobile-card popular-card">
              <div className="popular-badge-mobile">MOST POPULAR</div>
              <div className="card-header">
                <h3 className="card-title card-title-split">
                  <span>Standard</span>
                  <span>Package</span>
                </h3>
              </div>
              <div className="card-body">
                {features.map((feature, index) => (
                  <div key={index} className={`card-feature ${index === 0 ? 'price-feature' : ''}`}>
                    <span className="card-feature-name">{capitalizeFirstLetter(feature.name)}</span>
                    <span className="card-feature-value">
                      {renderValue(feature.deal2, index === 0)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Authors Elite Card */}
            <div className="mobile-card">
              <div className="card-header">
                <h3 className="card-title">Authors Elite</h3>
              </div>
              <div className="card-body">
                {features.map((feature, index) => (
                  <div key={index} className={`card-feature ${index === 0 ? 'price-feature' : ''}`}>
                    <span className="card-feature-name">{capitalizeFirstLetter(feature.name)}</span>
                    <span className="card-feature-value">
                      {renderValue(feature.deal3, index === 0)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* =============================================
           WRAPPER & BACKGROUND
           ============================================= */
        .comparison-wrapper {
          background: linear-gradient(135deg, #eeeae7 0%, #e5e1de 100%);
          padding: 50px 20px;
          position: relative;
          overflow: hidden;
        }

        .background-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.02;
          background-image: 
            linear-gradient(30deg, #0f252f 12%, transparent 12.5%, transparent 87%, #0f252f 87.5%, #0f252f),
            linear-gradient(150deg, #0f252f 12%, transparent 12.5%, transparent 87%, #0f252f 87.5%, #0f252f),
            linear-gradient(30deg, #0f252f 12%, transparent 12.5%, transparent 87%, #0f252f 87.5%, #0f252f),
            linear-gradient(150deg, #0f252f 12%, transparent 12.5%, transparent 87%, #0f252f 87.5%, #0f252f);
          background-size: 80px 140px;
          background-position: 0 0, 0 0, 40px 70px, 40px 70px;
          pointer-events: none;
        }

        .comparison-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* =============================================
           HEADER SECTION
           ============================================= */
        .header {
          text-align: center;
          margin-bottom: 40px;
        }

        .header-title {
          color: #0f252f;
          letter-spacing: -0.5px;
          font-weight: 700;
          margin-bottom: 0.75rem;
          font-size: 2rem;
        }

        .header-subtitle {
          font-size: 18px;
          color: #364a52;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.5;
        }

        .bestsellers-count {
          color: #0f252f;
          font-weight: 700;
          font-size: 20px;
        }

        /* =============================================
           MAIN TABLE CONTAINER
           ============================================= */
        .comparison-table {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 
            0 20px 60px rgba(15, 37, 47, 0.15),
            0 0 0 1px rgba(15, 37, 47, 0.05);
        }

        /* =============================================
           DESKTOP TABLE
           ============================================= */
        .desktop-table {
          display: block;
        }

        /* TABLE HEADER */
        .table-header {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr 1fr;
          background: linear-gradient(135deg, #0f252f 0%, #1a3542 100%);
          padding: 0;
        }

        .header-cell {
          padding: 14px 20px;
          text-align: center;
          border-right: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .header-cell:last-child {
          border-right: none;
        }

        .features-header {
          font-size: 16px;
          font-weight: 800;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        .package-header {
          position: relative;
        }

        .popular-header {
          background: rgba(255, 255, 255, 0.05);
        }

        .popular-badge {
          position: absolute;
          top: 6px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
          color: #0f252f;
          padding: 3px 14px;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(255, 165, 0, 0.4);
        }

        .package-name {
          font-size: 17px;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 0.5px;
          margin-top: 8px;
        }

        .package-name-split {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-top: 8px;
        }

        /* TABLE BODY */
        .table-body {
          background: #ffffff;
        }

        .feature-row {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr 1fr;
          border-bottom: 1px solid #f0f0f0;
          transition: background 0.2s ease;
        }

        .feature-row:hover {
          background: #fafafa;
        }

        .feature-row:last-child {
          border-bottom: none;
        }

        /* PRICE ROW - Special Styling */
        .price-row {
          background: #f8f6f4 !important;
        }

        .price-row:hover {
          background: #f5f3f1 !important;
        }

        .price-row .feature-name {
          font-weight: 800;
          font-size: 16px !important;
          color: #0f252f;
        }

        .price-row .feature-value {
          font-size: 36px !important;
          font-weight: 900 !important;
          padding: 20px 24px !important;
        }

        .price-row .text-value {
          font-size: 36px !important;
          font-weight: 900 !important;
          color: #0f252f !important;
        }

        .price-row .price-text {
          font-size: 26px !important;
          font-weight: 900 !important;
          color: #0f252f !important;
        }

        /* REGULAR FEATURE ROW */
        .feature-name {
          padding: 14px 24px;
          font-size: 14px;
          color: #0f252f;
          font-weight: 600;
          display: flex;
          align-items: center;
        }

        .feature-value {
          padding: 14px 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-right: 3px solid #eeeae7;
          font-size: 14px;
          font-weight: 700;
        }

        .feature-value:last-child {
          border-right: none;
        }

        .feature-value.popular-col {
          background: rgba(15, 37, 47, 0.02);
        }

        /* VALUE DISPLAY STYLES */
        .check-icon {
          color: #0f252f;
          font-size: 13px;
          font-weight: 900;
        }

        .dash-icon {
          color: #5f5e5e;
          font-size: 13px;
          font-weight: 900;
        }

        .text-value {
          color: #364a52;
          font-weight: 600;
          text-align: center;
          font-size: 13px;
        }

        /* =============================================
           MOBILE CARDS
           ============================================= */
        .mobile-cards {
          display: none;
        }

        .mobile-card {
          background: #ffffff;
          border-radius: 12px;
          margin-bottom: 24px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(15, 37, 47, 0.1);
          position: relative;
        }

        .mobile-card.popular-card {
          border: 2px solid #FFD700;
          box-shadow: 0 6px 24px rgba(255, 215, 0, 0.3);
        }

        .popular-badge-mobile {
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
          color: #0f252f;
          padding: 6px 16px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          text-align: center;
        }

        .card-header {
          background: linear-gradient(135deg, #0f252f 0%, #1a3542 100%);
          padding: 24px 20px;
          text-align: center;
        }

        .card-title {
          font-size: 20px;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
        }

        .card-title-split {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .card-body {
          padding: 0;
        }

        .card-feature {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          border-bottom: 1px solid #f0f0f0;
        }

        .card-feature:last-child {
          border-bottom: none;
        }

        /* MOBILE PRICE FEATURE */
        .card-feature.price-feature {
          background: #f8f6f4;
          padding: 20px !important;
        }

        .price-feature .card-feature-name {
          font-weight: 800;
          font-size: 16px !important;
        }

        .price-feature .card-feature-value {
          font-size: 36px !important;
          font-weight: 900 !important;
        }

        .price-feature .text-value {
          font-size: 16px !important;
          font-weight: 900 !important;
          color: #0f252f !important;
        }

        .price-feature .price-text {
          font-size: 36px !important;
          font-weight: 900 !important;
          color: #0f252f !important;
        }

        /* REGULAR CARD FEATURE */
        .card-feature-name {
          font-size: 14px;
          color: #0f252f;
          font-weight: 500;
        }

        .card-feature-value {
          font-size: 14px;
          font-weight: 600;
          color: #364a52;
          text-align: right;
        }

        /* =============================================
           RESPONSIVE - TABLET
           ============================================= */
        @media (max-width: 968px) {
          .comparison-wrapper {
            padding: 40px 15px;
          }

          .header-title {
            font-size: 1.75rem;
          }

          .table-header {
            grid-template-columns: 1.2fr 1fr 1fr 1fr;
          }

          .feature-row {
            grid-template-columns: 1.2fr 1fr 1fr 1fr;
          }

          .header-cell {
            padding: 20px 12px;
          }

          .package-name {
            font-size: 15px;
          }

          .feature-name {
            padding: 12px 16px;
            font-size: 13px;
          }

          .feature-value {
            padding: 12px 12px;
          }
        }

        /* =============================================
           RESPONSIVE - MOBILE
           ============================================= */
        @media (max-width: 768px) {
          .desktop-table {
            display: none;
          }

          .mobile-cards {
            display: block;
          }

          .comparison-wrapper {
            padding: 50px 15px;
          }

          .header {
            margin-bottom: 40px;
          }

          .header-title {
            font-size: 1.75rem;
          }

          .header-subtitle {
            font-size: 18px;
          }

          .comparison-table {
            background: transparent;
            box-shadow: none;
          }
        }

        /* =============================================
           RESPONSIVE - SMALL MOBILE
           ============================================= */
        @media (max-width: 576px) {
          .comparison-wrapper {
            padding: 40px 10px;
          }

          .header-title {
            font-size: 1.5rem;
          }

          .header-subtitle {
            font-size: 16px;
          }

          .bestsellers-count {
            font-size: 18px;
          }

          .mobile-card {
            margin-bottom: 20px;
          }

          .card-header {
            padding: 20px 16px;
          }

          .card-title {
            font-size: 18px;
          }

          .card-feature {
            padding: 14px 16px;
          }

          .card-feature-name {
            font-size: 13px;
          }

          .card-feature-value {
            font-size: 13px;
          }

          .price-feature .card-feature-value {
            font-size: 28px !important;
          }

          .price-feature .text-value {
            font-size: 28px !important;
          }

          .price-feature .price-text {
            font-size: 28px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PublishingPackagesComparison;