"use client";
import React, { useState } from 'react';
import { useDiscountPopup } from "@/components/popup/DiscountPopupContext";

// --- Type Definitions ---

/** Defines the structure for a package feature item. */
interface PackageFeature {
  text: string;
  highlighted?: boolean;
}

/** Defines the structure for a package section with features. */
interface PackageSection {
  title: string;
  features: PackageFeature[];
}

/** Defines the structure for a publishing package. */
interface PublishingPackage {
  name: string;
  badge?: string;
  regularPrice: number;
  discountedPrice: number;
  sections: PackageSection[];
  isPopular?: boolean;
}

// --- Component ---

const PublishingPackages: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { openDiscount } = useDiscountPopup?.() ?? { openDiscount: () => {} };
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
    <div style={{
      background: '#eeeae7',
      padding: '80px 20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Subtle Background Pattern */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        opacity: '0.03',
        backgroundImage: `
          linear-gradient(30deg, #0f252f 12%, transparent 12.5%, transparent 87%, #0f252f 87.5%, #0f252f),
          linear-gradient(150deg, #0f252f 12%, transparent 12.5%, transparent 87%, #0f252f 87.5%, #0f252f),
          linear-gradient(30deg, #0f252f 12%, transparent 12.5%, transparent 87%, #0f252f 87.5%, #0f252f),
          linear-gradient(150deg, #0f252f 12%, transparent 12.5%, transparent 87%, #0f252f 87.5%, #0f252f)
        `,
        backgroundSize: '80px 140px',
        backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px',
        pointerEvents: 'none'
      }} />

      <div className="packages-container" style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        position: 'relative', 
        zIndex: 1 
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 className="fw-bold mb-3" style={{ color: '#0f252f', letterSpacing: '-0.5px' }}>
            PUBLISHING PACKAGES
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#364a52',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Join us today and be a part of our{' '}
            <span style={{ 
              color: '#0f252f', 
              fontWeight: '700',
              fontSize: '22px'
            }}>1000+</span>{' '}
            Bestsellers list
          </p>
        </div>

        {/* Packages Grid */}
        <div className="packages-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '32px',
          marginBottom: '20px'
        }}>
          {packagesData.map((pkg, idx) => (
            <div
              key={idx}
              className="package-card"
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                border: pkg.isPopular ? '3px solid #0f252f' : '2px solid #d4d0cd',
                padding: '0',
                boxShadow: hoveredCard === idx 
                  ? '0 20px 60px rgba(15, 37, 47, 0.2)' 
                  : '0 8px 30px rgba(15, 37, 47, 0.08)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: hoveredCard === idx ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '750px'
              }}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Top Accent Line */}
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                height: '6px',
                background: pkg.isPopular 
                  ? 'linear-gradient(90deg, #0f252f 0%, #364a52 100%)' 
                  : '#364a52'
              }} />

              {/* Popular Badge */}
              {pkg.badge && (
                <div style={{
                  position: 'absolute',
                  top: '24px',
                  right: '-32px',
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                  color: '#0f252f',
                  padding: '6px 45px',
                  transform: 'rotate(45deg)',
                  fontSize: '11px',
                  fontWeight: '800',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  boxShadow: '0 4px 15px rgba(255, 165, 0, 0.4)',
                  zIndex: 10
                }}>
                  {pkg.badge}
                </div>
              )}

              {/* Header Section - Fixed */}
              <div style={{ 
                padding: '36px 32px 28px',
                borderBottom: '2px solid #eeeae7',
                background: pkg.isPopular ? '#f8f6f4' : '#fafafa'
              }}>
                <h3 style={{
                  fontSize: '26px',
                  fontWeight: '700',
                  color: '#0f252f',
                  marginBottom: '24px',
                  textAlign: 'center',
                  letterSpacing: '0.5px'
                }}>
                  {pkg.name}
                </h3>

                {/* Pricing */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '16px'
                  }}>
                    <div>
                      <div style={{
                        fontSize: '11px',
                        color: '#364a52',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginBottom: '4px',
                        fontWeight: '600'
                      }}>
                        Regular Price
                      </div>
                      <div style={{
                        fontSize: '20px',
                        color: '#999',
                        textDecoration: 'line-through',
                        fontWeight: '600'
                      }}>
                        ${pkg.regularPrice}
                      </div>
                    </div>
                    <div style={{
                      fontSize: '32px',
                      color: '#364a52',
                      fontWeight: '300'
                    }}>
                      →
                    </div>
                    <div>
                      <div style={{
                        fontSize: '11px',
                        color: '#0f252f',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginBottom: '4px',
                        fontWeight: '700'
                      }}>
                        Discounted Price
                      </div>
                      <div style={{
                        fontSize: '42px',
                        color: '#0f252f',
                        fontWeight: '800',
                        lineHeight: '1',
                        letterSpacing: '-1px'
                      }}>
                        ${pkg.discountedPrice}
                      </div>
                    </div>
                  </div>
                  <div style={{
                    display: 'inline-block',
                    background: 'linear-gradient(135deg, #0f252f 0%, #364a52 100%)',
                    color: '#fff',
                    padding: '6px 20px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '700',
                    letterSpacing: '0.5px'
                  }}>
                    Save ${pkg.regularPrice - pkg.discountedPrice}
                  </div>
                </div>
              </div>

              {/* Scrollable Content Section */}
              <div className="scrollable-content" style={{
                flex: 1,
                overflowY: 'auto',
                padding: '28px 32px',
                scrollbarWidth: 'thin',
                scrollbarColor: '#364a52 #eeeae7'
              }}>
                {pkg.sections.map((section, sIdx) => (
                  <div key={sIdx} style={{ marginBottom: '28px' }}>
                    <h4 style={{
                      fontSize: '15px',
                      fontWeight: '700',
                      color: '#0f252f',
                      marginBottom: '14px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.8px',
                      paddingBottom: '8px',
                      borderBottom: '2px solid #eeeae7',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <span style={{
                        width: '4px',
                        height: '16px',
                        background: 'linear-gradient(180deg, #0f252f 0%, #364a52 100%)',
                        borderRadius: '2px'
                      }} />
                      {section.title}
                    </h4>
                    <div>
                      {section.features.map((feature, fIdx) => (
                        <div
                          key={fIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '10px 0',
                            color: feature.highlighted ? '#0f252f' : '#364a52',
                            fontSize: '14.5px',
                            lineHeight: '1.5',
                            borderBottom: fIdx === section.features.length - 1 ? 'none' : '1px solid #f5f5f5'
                          }}
                        >
                          <span style={{
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            background: feature.highlighted 
                              ? 'linear-gradient(135deg, #0f252f 0%, #364a52 100%)' 
                              : '#eeeae7',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            fontSize: '10px',
                            color: '#fff',
                            fontWeight: '700'
                          }}>
                            {feature.highlighted ? '✓' : '•'}
                          </span>
                          <span style={{
                            fontWeight: feature.highlighted ? '600' : '400'
                          }}>
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer - Fixed */}
              <div style={{
                padding: '24px 32px',
                borderTop: '2px solid #eeeae7',
                background: '#fafafa'
              }}>
                <button onClick={openDiscount} style={{
                  width: '100%',
                  padding: '16px',
                  background: 'linear-gradient(135deg, #0f252f 0%, #364a52 100%)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '15px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(15, 37, 47, 0.2)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #364a52 0%, #0f252f 100%)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(15, 37, 47, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #0f252f 0%, #364a52 100%)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(15, 37, 47, 0.2)';
                }}
                >
                  Order Now →
                </button>

                <div style={{
                  marginTop: '20px',
                  paddingTop: '20px',
                  borderTop: '1px solid #eeeae7'
                }}>
                  <div style={{
                    fontSize: '11px',
                    color: '#364a52',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '12px',
                    fontWeight: '700',
                    textAlign: 'center'
                  }}>
                    Need More Info?
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '16px'
                  }}>
                    <div style={{ 
                      flex: 1,
                      textAlign: 'center',
                      padding: '10px',
                      background: '#fff',
                      borderRadius: '8px',
                      border: '1px solid #eeeae7'
                    }}>
                      <div style={{
                        fontSize: '10px',
                        color: '#364a52',
                        marginBottom: '4px',
                        fontWeight: '600'
                      }}>
                        📞 TALK TO US
                      </div>
                      <div style={{
                        fontSize: '12px',
                        color: '#0f252f',
                        fontWeight: '700'
                      }}>
                        <a href="tel:+18325585865" style={{ color: '#0f252f', textDecoration: 'none' }}>
                        +1 (832) 558-5865
                        </a>
                      </div>
                    </div>
                    <div style={{ 
                      flex: 1,
                      textAlign: 'center',
                      padding: '10px',
                      background: '#fff',
                      borderRadius: '8px',
                      border: '1px solid #eeeae7',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#fff';
                      e.currentTarget.style.borderColor = '#0f252f';
                      const text = e.currentTarget.querySelector('div:last-child') as HTMLElement;
                      if (text) text.style.color = '#364a52';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#fff';
                      e.currentTarget.style.borderColor = '#eeeae7';
                      const text = e.currentTarget.querySelector('div:last-child') as HTMLElement;
                      if (text) text.style.color = '#0f252f';
                    }}
                    >
                        <a href="/contact" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                      <div style={{
                        fontSize: '10px',
                        color: '#364a52',
                        marginBottom: '4px',
                        fontWeight: '600'
                      }}>
                        💬 FOR MORE DETAIL
                      </div>
                      <div style={{
                        fontSize: '12px',
                        color: '#0f252f',
                        fontWeight: '700',
                        transition: 'color 0.2s ease'
                      }}>
                        Chat With Us
                      </div>
                        </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Scrollbar and Responsive Styles */}
      <style jsx>{`
        /* Webkit browsers (Chrome, Safari, Edge) */
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

        /* Tablet and below */
        @media (max-width: 1200px) {
          .packages-grid {
            grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)) !important;
            gap: 28px !important;
          }
          
          .package-card {
            height: 700px !important;
          }
        }

        /* Mobile landscape and below */
        @media (max-width: 968px) {
          .packages-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          
          h2 {
            font-size: 40px !important;
          }
          
          h2 span {
            font-size: 34px !important;
          }
        }

        /* Mobile portrait */
        @media (max-width: 576px) {
          .packages-container {
            padding: 0 10px;
          }
          
          h2 {
            font-size: 32px !important;
            letter-spacing: 1.5px !important;
          }
          
          h2 span {
            font-size: 28px !important;
          }
          
          .packages-grid {
            gap: 24px !important;
          }
          
          .package-card {
            height: 650px !important;
            border-radius: 16px !important;
          }
          
          .package-card > div:first-of-type {
            padding: 28px 24px 20px !important;
          }
          
          .package-card h3 {
            font-size: 22px !important;
          }
          
          .scrollable-content {
            padding: 20px 24px !important;
          }
          
          .package-card > div:last-of-type {
            padding: 20px 24px !important;
          }
        }

        /* Extra small devices */
        @media (max-width: 400px) {
          .package-card {
            height: 600px !important;
          }
          
          h2 {
            font-size: 28px !important;
          }
          
          h2 span {
            font-size: 24px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PublishingPackages;