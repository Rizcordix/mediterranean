"use client";
import React, { useState } from 'react';

interface PackageFeature {
  text: string;
  startUp: 'full' | 'partial' | 'none';
  standard: 'full' | 'partial' | 'none';
  elite: 'full' | 'partial' | 'none';
}

interface PackageCategory {
  title: string;
  features: PackageFeature[];
}

const PublishingPackagesComparison: React.FC = () => {
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(new Set());

  const toggleCategory = (index: number) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCategories(newExpanded);
  };

  const calculateCategoryPercentage = (features: PackageFeature[], packageType: 'startUp' | 'standard' | 'elite') => {
    const total = features.length;
    const available = features.filter(f => f[packageType] === 'full').length;
    const partial = features.filter(f => f[packageType] === 'partial').length;
    return {
      full: (available / total) * 100,
      partial: (partial / total) * 100,
      percentage: Math.round(((available + partial * 0.5) / total) * 100)
    };
  };

  const PieChart = ({ percentage, size = 60 }: { percentage: number; size?: number }) => {
    const strokeWidth = 6;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
      <svg width={size} height={size} className="pie-chart">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#eeeae7"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          className="pie-progress"
        />
        <text
          x={size / 2}
          y={size / 2}
          textAnchor="middle"
          dominantBaseline="middle"
          className="pie-text"
        >
          {percentage}%
        </text>
      </svg>
    );
  };

  const categoriesData: PackageCategory[] = [
    {
      title: 'Manuscript Preparation',
      features: [
        { text: 'Proofreading', startUp: 'full', standard: 'full', elite: 'full' },
        { text: 'Editing', startUp: 'full', standard: 'full', elite: 'full' },
        { text: 'Critique Author Review Report', startUp: 'none', standard: 'full', elite: 'none' },
        { text: 'Editorial Support', startUp: 'none', standard: 'full', elite: 'full' },
        { text: 'Interior Layout', startUp: 'full', standard: 'full', elite: 'none' },
        { text: 'Typesetting', startUp: 'none', standard: 'none', elite: 'full' },
        { text: 'Layout Adjustment', startUp: 'none', standard: 'none', elite: 'full' },
        { text: 'Basic Formatting', startUp: 'full', standard: 'none', elite: 'none' },
        { text: 'Publishing Standard Formatting', startUp: 'none', standard: 'full', elite: 'full' },
        { text: '2 Revisions Per Draft', startUp: 'full', standard: 'none', elite: 'none' },
        { text: '5 Revisions Per Draft', startUp: 'none', standard: 'full', elite: 'full' }
      ]
    },
    {
      title: 'Cover Preparation',
      features: [
        { text: 'Book Cover', startUp: 'full', standard: 'full', elite: 'none' },
        { text: 'Graphic OR Illustrated Design', startUp: 'none', standard: 'none', elite: 'full' },
        { text: 'Cover Layout', startUp: 'none', standard: 'none', elite: 'full' },
        { text: 'Cover Formatting', startUp: 'none', standard: 'none', elite: 'full' },
        { text: 'Front, Back & Spine', startUp: 'none', standard: 'none', elite: 'full' },
        { text: 'ISBN + Barcode (2X)', startUp: 'none', standard: 'none', elite: 'full' }
      ]
    },
    {
      title: 'Publication Setup',
      features: [
        { text: 'Account Creation', startUp: 'full', standard: 'full', elite: 'full' },
        { text: 'Account Verification', startUp: 'full', standard: 'full', elite: 'full' },
        { text: 'Account Optimization', startUp: 'none', standard: 'none', elite: 'full' },
        { text: 'Available on Amazon KDP', startUp: 'full', standard: 'none', elite: 'none' },
        { text: 'Available on Amazon & Kindle', startUp: 'none', standard: 'none', elite: 'full' },
        { text: 'Available on Barnes & Noble', startUp: 'none', standard: 'none', elite: 'full' },
        { text: 'Regional Publication (100+ Platforms)', startUp: 'none', standard: 'full', elite: 'none' },
        { text: 'eBook Format', startUp: 'full', standard: 'full', elite: 'full' },
        { text: 'Paperback Format', startUp: 'none', standard: 'full', elite: 'full' },
        { text: 'Hardcover Format', startUp: 'none', standard: 'none', elite: 'full' },
        { text: '30 - 60 Seconds Video Trailer', startUp: 'none', standard: 'full', elite: 'none' }
      ]
    },
    {
      title: 'Reports and Dashboard',
      features: [
        { text: 'Sales Register', startUp: 'partial', standard: 'full', elite: 'full' },
        { text: 'Sales Profitability Report', startUp: 'none', standard: 'full', elite: 'full' },
        { text: 'Sales Order Register', startUp: 'partial', standard: 'full', elite: 'full' },
        { text: 'Pending Sales Order', startUp: 'none', standard: 'full', elite: 'full' },
        { text: 'Customer Sales Register', startUp: 'partial', standard: 'none', elite: 'full' },
        { text: 'Purchase Register', startUp: 'none', standard: 'none', elite: 'full' },
        { text: 'Supplier Register', startUp: 'none', standard: 'none', elite: 'none' }
      ]
    },
    {
      title: 'Guarantees',
      features: [
        { text: 'No Royalties Share', startUp: 'full', standard: 'full', elite: 'full' },
        { text: '100% Ownership Rights', startUp: 'full', standard: 'full', elite: 'full' },
        { text: '100% Satisfaction', startUp: 'full', standard: 'full', elite: 'full' }
      ]
    }
  ];

  const renderFeatureIcon = (status: 'full' | 'partial' | 'none') => {
    if (status === 'full') {
      return <span className="icon-full">●</span>;
    } else if (status === 'partial') {
      return <span className="icon-partial">◐</span>;
    } else {
      return <span className="icon-none">✕</span>;
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
          {/* Table Header */}
          <div className="table-header">
            <div className="header-cell category-header">
              <div className="category-label">Features</div>
            </div>
            <div className="header-cell package-header">
              <div className="package-name">Start Up Package</div>
              <div className="package-pricing">
                <div className="original-price">$600</div>
                <div className="discounted-price">$149</div>
              </div>
            </div>
            <div className="header-cell package-header popular">
              <div className="popular-badge">MOST SOLD</div>
              <div className="package-name">Standard Package</div>
              <div className="package-pricing">
                <div className="original-price">$900</div>
                <div className="discounted-price">$299</div>
              </div>
            </div>
            <div className="header-cell package-header">
              <div className="package-name">Authors Elite</div>
              <div className="package-pricing">
                <div className="original-price">$3500</div>
                <div className="discounted-price">$1299</div>
              </div>
            </div>
          </div>

          {/* Table Body - Expandable Categories */}
          <div className="table-body">
            {categoriesData.map((category, index) => (
              <div key={index} className="category-section">
                {/* Category Header (Clickable) */}
                <div 
                  className={`category-row ${expandedCategories.has(index) ? 'expanded' : ''}`}
                  onClick={() => toggleCategory(index)}
                >
                  <div className="category-title-cell">
                    <span className="expand-icon">
                      {expandedCategories.has(index) ? '−' : '+'}
                    </span>
                    <span className="category-title">{category.title}</span>
                  </div>
                  <div className="category-indicator startup-col">
                    <PieChart 
                      percentage={calculateCategoryPercentage(category.features, 'startUp').percentage} 
                    />
                  </div>
                  <div className="category-indicator standard-col">
                    <PieChart 
                      percentage={calculateCategoryPercentage(category.features, 'standard').percentage} 
                    />
                  </div>
                  <div className="category-indicator elite-col">
                    <PieChart 
                      percentage={calculateCategoryPercentage(category.features, 'elite').percentage} 
                    />
                  </div>
                </div>

                {/* Features (Expandable) */}
                {expandedCategories.has(index) && (
                  <div className="features-section">
                    {category.features.map((feature, fIdx) => (
                      <div key={fIdx} className="feature-row">
                        <div className="feature-name-cell">{feature.text}</div>
                        <div className="feature-value-cell">
                          {renderFeatureIcon(feature.startUp)}
                        </div>
                        <div className="feature-value-cell popular-col">
                          {renderFeatureIcon(feature.standard)}
                        </div>
                        <div className="feature-value-cell">
                          {renderFeatureIcon(feature.elite)}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .comparison-wrapper {
          background: linear-gradient(135deg, #eeeae7 0%, #e5e1de 100%);
          padding: 80px 20px;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
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

        /* Comparison Table */
        .comparison-table {
          background: #ffffff;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 
            0 20px 60px rgba(15, 37, 47, 0.15),
            0 0 0 1px rgba(15, 37, 47, 0.05);
          border: none;
        }

        /* Table Header */
        .table-header {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          background: linear-gradient(135deg, #0f252f 0%, #1a3542 100%);
          border-bottom: none;
          padding: 8px 0;
        }

        .header-cell {
          padding: 36px 24px;
          text-align: center;
          border-right: 1px solid rgba(255, 255, 255, 0.1);
        }

        .header-cell:last-child {
          border-right: none;
        }

        .category-header {
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .category-label {
          color: #eeeae7;
          font-size: 1.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        .package-header {
          position: relative;
          background: transparent;
        }

        .package-header.popular {
          background: rgba(255, 255, 255, 0.05);
        }

        .popular-badge {
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
          color: #0f252f;
          padding: 6px 20px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          border-radius: 20px;
          box-shadow: 0 4px 15px rgba(255, 165, 0, 0.4);
        }

        .package-name {
          font-size: 20px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 16px;
          margin-top: 8px;
          letter-spacing: 0.3px;
        }

        .package-pricing {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .original-price {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.5);
          text-decoration: line-through;
          font-weight: 500;
        }

        .discounted-price {
          font-size: 32px;
          color: #ffffff;
          font-weight: 800;
          letter-spacing: -1px;
        }

        /* Table Body */
        .table-body {
          background: #ffffff;
        }

        .category-section {
          border-bottom: 1px solid #f0f0f0;
        }

        .category-section:last-child {
          border-bottom: none;
        }

        /* Category Row (Clickable) */
        .category-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          background: #fafafa;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 1px solid #f0f0f0;
        }

        .category-row:hover {
          background: #f5f5f5;
          box-shadow: inset 0 0 0 1px rgba(15, 37, 47, 0.05);
        }

        .category-row.expanded {
          background: #f8f6f4;
          border-bottom: 2px solid #0f252f;
        }

        .category-title-cell {
          padding: 24px 28px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .expand-icon {
          width: 28px;
          height: 28px;
          background: linear-gradient(135deg, #364a52 0%, #0f252f 100%);
          color: #ffffff;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 700;
          flex-shrink: 0;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(15, 37, 47, 0.15);
        }

        .category-row:hover .expand-icon {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(15, 37, 47, 0.25);
        }

        .category-row.expanded .expand-icon {
          background: linear-gradient(135deg, #0f252f 0%, #364a52 100%);
          transform: rotate(180deg);
        }

        .category-title {
          font-size: 16px;
          font-weight: 700;
          color: #0f252f;
          text-transform: uppercase;
          letter-spacing: 0.8px;
        }

        .category-indicator {
          border-right: 1px solid #f0f0f0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .category-indicator:last-child {
          border-right: none;
        }

        .startup-col {
          color: #e67e22;
        }

        .standard-col {
          background: rgba(15, 37, 47, 0.02);
          color: #27ae60;
        }

        .elite-col {
          color: #3498db;
        }

        /* Pie Chart */
        .pie-chart {
          filter: drop-shadow(0 2px 4px rgba(15, 37, 47, 0.1));
        }

        .pie-progress {
          transition: stroke-dashoffset 0.6s ease;
        }

        .pie-text {
          font-size: 14px;
          font-weight: 700;
          fill: currentColor;
        }

        /* Features Section */
        .features-section {
          background: #ffffff;
          animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 1000px;
          }
        }

        .feature-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          border-bottom: 1px solid #f8f8f8;
          transition: background 0.2s ease;
        }

        .feature-row:hover {
          background: #fafafa;
        }

        .feature-row:last-child {
          border-bottom: none;
        }

        .feature-name-cell {
          padding: 18px 28px 18px 72px;
          font-size: 14.5px;
          color: #364a52;
          display: flex;
          align-items: center;
          line-height: 1.5;
          font-weight: 500;
        }

        .feature-value-cell {
          padding: 18px 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-right: 1px solid #f8f8f8;
          font-size: 22px;
        }

        .feature-value-cell:last-child {
          border-right: none;
        }

        .feature-value-cell.popular-col {
          background: rgba(15, 37, 47, 0.02);
        }

        .icon-full {
          color: #0f252f;
          font-size: 24px;
          filter: drop-shadow(0 2px 4px rgba(15, 37, 47, 0.15));
        }

        .icon-partial {
          color: #364a52;
          font-size: 24px;
          filter: drop-shadow(0 2px 4px rgba(54, 74, 82, 0.15));
        }

        .icon-none {
          color: #d4d0cd;
          font-size: 18px;
          opacity: 0.6;
        }

        /* Responsive Styles */
        @media (max-width: 1200px) {
          .table-header,
          .category-row,
          .feature-row {
            grid-template-columns: 1.5fr 1fr 1fr 1fr;
          }

          .package-name {
            font-size: 18px;
          }

          .discounted-price {
            font-size: 28px;
          }
        }

        @media (max-width: 968px) {
          .comparison-wrapper {
            padding: 60px 15px;
          }

          .header-title {
            font-size: 2rem;
          }

          .table-header,
          .category-row,
          .feature-row {
            grid-template-columns: 1.2fr 1fr 1fr 1fr;
          }

          .header-cell {
            padding: 28px 16px;
          }

          .package-name {
            font-size: 16px;
          }

          .discounted-price {
            font-size: 24px;
          }

          .category-title-cell {
            padding: 20px 20px;
          }

          .feature-name-cell {
            padding: 16px 20px 16px 60px;
            font-size: 13px;
          }

          .feature-value-cell {
            padding: 16px 16px;
          }
        }

        @media (max-width: 768px) {
          .comparison-table {
            overflow-x: auto;
          }

          .table-header,
          .category-row,
          .feature-row {
            min-width: 700px;
          }
        }

        @media (max-width: 576px) {
          .comparison-wrapper {
            padding: 50px 10px;
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

          .bestsellers-count {
            font-size: 1.5rem;
          }

          .comparison-table {
            border-radius: 20px;
          }

          .table-header,
          .category-row,
          .feature-row {
            min-width: 650px;
          }
        }
      `}</style>
    </div>
  );
};

export default PublishingPackagesComparison;