"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePopup } from '@/components/wrappers/PopupContext';
import { Button } from 'react-bootstrap';

// --- Type Definitions ---

/** Defines the structure for a single pricing plan feature list item. */
interface PricingPlan {
  title: string;
  subtitle?: string; // Optional for plans like marketing
  price: number | null; // Can be a number or null if price is not displayed/needs a quote
  features: string[];
  isPopular?: boolean; // Optional, used for styling a "popular" plan
}

/** Defines the structure for the overall pricing data object, mapping tab IDs to an array of PricingPlan. */
interface PricingData {
  ebook: PricingPlan[];
  cover: PricingPlan[];
  publishing: PricingPlan[];
  video: PricingPlan[];
  marketing: PricingPlan[];
}

/** Defines the structure for a tab object. */
interface Tab {
  id: keyof PricingData; // Ensures id is one of the keys in PricingData
  label: string;
}

// --- Component ---

const PricingComponent: React.FC = () => {
  // Use a type assertion to specify the possible states for activeTab
  const [activeTab, setActiveTab] = useState<keyof PricingData | null>(null);

  const pricingData: PricingData = {
    ebook: [
      {
        title: '50 PAGES',
        price: null,
        features: [
          'Producing /updating the outline',
          'Finishing a complete book of 50-100 Pages as per the requests/plan',
          'Adjusting the layout and presentation for the publishing standards',
          'Unlimited Free revisions',
          'A devoted team of professional writers',
          'Free Editing, Proofreading, formatting & Structuring',
          'Get Free Unique Cover design'
        ]
      },
      {
        title: '100 PAGES',
        price: null,
        features: [
          'Producing /updating the outline',
          'Finishing a complete book of 100-200 Pages as per the requests/plan',
          'Adjusting the layout and presentation for the publishing standards',
          'Unlimited Free revisions',
          'A devoted team of professional writers',
          'Free Editing, Proofreading, formatting & Structuring',
          'Get Free Unique Cover design'
        ]
      },
      {
        title: '200 PAGES',
        price: null,
        features: [
          'Producing /updating the outline',
          'Finishing a complete book of 200-250 Pages as per the requests/plan',
          'Adjusting the layout and presentation for the publishing standards',
          'Unlimited Free revisions',
          'A devoted team of professional writers',
          'Free Editing, Proofreading, formatting & Structuring',
          'Get Free Unique Cover design'
        ]
      }
    ],
    cover: [
      {
        title: 'SILVER',
        price: 479,
        features: [
          'Custom, professional ebook cover design',
          'First concept delivered within 14 days',
          'Unlimited royalty free images + textures',
          'Unlimited changes',
          'Free 3D images for marketing + promotion',
          'Additional marketing add-ons available',
          'No image fees',
          'Upload-ready, high resolution ebook cover',
          'Keep all rights and profit (no royalties)'
        ]
      },
      {
        title: 'GOLD',
        price: 595,
        isPopular: true,
        features: [
          'Includes everything in the custom ebook cover design package',
          'Turnaround time: first concepts delivered within 14 days',
          'Unlimited changes',
          'Includes front, spine and back cover design',
          'One high resolution, print-ready file for paperback (300 DPI)',
          'Free mockup for marketing and promotion',
          'Additional marketing add-ons available'
        ]
      }
    ],
    publishing: [
      {
        title: 'DEBUTANT',
        price: 599,
        features: [
          'Amazon Publication',
          'Digital EBook Version',
          'Paperback & Hardcover',
          'Page Layout Services',
          'Typesetting',
          'Professional Formatting',
          'Authors Central Page',
          'Books Profile',
          'Finalized Digital Files',
          'Book Cover'
        ]
      },
      {
        title: 'FIRESTARTER',
        price: 1000,
        features: [
          'Publishing (Top 2 Platforms)',
          'Amazon Publication',
          'Barnes & Nobel Publication',
          'Digital EBook Version',
          'Paperback, and hardcover',
          'Professional Editing',
          'Proofreading',
          'Page Layout Services',
          'Typesetting',
          'Professional Formatting'
        ]
      },
      {
        title: 'BEST SELLER',
        price: 1500,
        isPopular: true,
        features: [
          'Publishing (Top 4 Platforms)',
          'Amazon Publication',
          'Barnes & Nobel Publication',
          'Kobo Publication',
          'Google Books Publication',
          'Digital EBook Version',
          'Paperback & Hardcover',
          'Proofreading',
          'Page Layout Services'
        ]
      },
      {
        title: 'HEADLINER',
        price: 2000,
        features: [
          'Publishing (Top 10 Platforms)',
          'Amazon Publication',
          'Barnes & Nobel Publication',
          'Waterstones Publication',
          'Google Books Publication',
          'Kobo Publication',
          'Lulu Publication',
          'Reedsу Publication',
          'Ingram Spark Publication'
        ]
      }
    ],
    video: [
      {
        title: 'Basic Videos',
        price: null,
        features: [
          '30 Seconds Video Duration',
          'Unlimited Storyboard Revisions',
          'Custom Artwork; No Stolen Images',
          'Background Music',
          'Exotic Animations',
          'HD Video Production',
          'Add Video Script',
          '3 Weeks Delivery Time',
          '100% Ownership Rights'
        ]
      },
      {
        title: 'Premium Videos',
        price: null,
        features: [
          '30 Seconds Video Duration',
          'Unlimited Storyboard Revisions',
          'Custom Artwork; No Stolen Images',
          'Professional Voice - Over',
          'Background Music',
          'Exotic Animations',
          'HD Video Production',
          'Add Video Script',
          '3 Weeks Delivery Time'
        ]
      },
      {
        title: 'Ninja Videos',
        price: null,
        features: [
          '2D Video',
          '30 Seconds Video Duration',
          'Unlimited Storyboard Revisions',
          'Custom Artwork; No Stolen Images',
          'Professional Voice - Over',
          'Background Music',
          'Exotic Animations',
          'HD Video Production',
          'Add Video Script'
        ]
      }
    ],
    marketing: [
      {
        title: 'BEGINNER',
        subtitle: '1 Month',
        price: null,
        features: [
          'Social Media Marketing for 1 month',
          'Marketing Strategy Call - 80 Min',
          'Google Preview Book',
          'Search Engine Optimization - (1 Month)',
          'Complete Optimization on Amazon',
          'Promotional Bookmarks Design- 3 each',
          'Complete Author Website Setup- 1',
          'Blogs written and posted on high authority Express Book Writing platforms'
        ]
      },
      {
        title: 'EXPERT',
        subtitle: '3 Months',
        price: null,
        features: [
          'Social Media Marketing for 3 months',
          'Marketing Strategy Call - 80 Min',
          'Google Preview Book',
          'Search Engine Optimization - (3 Month)',
          'Complete Optimization on Amazon',
          'Promotional Bookmarks Design- 5 each',
          'Complete Author Website Setup- 1',
          'Blogs written and posted on high authority Express Book Writing platforms'
        ]
      },
      {
        title: 'ADVANCED',
        subtitle: '6 Months',
        price: null,
        features: [
          'Social Media Marketing for 6 months',
          'Marketing Strategy Call - 90 Min',
          'Google Preview Book',
          'Search Engine Optimization - (6 Month)',
          'Complete Optimization on Amazon',
          'Promotional Bookmarks Design- 10 each',
          'Complete Author Website Setup- 1',
          'Blogs written and posted on high authority Express Book Writing platforms'
        ]
      }
    ]
  };

  const tabs: Tab[] = [
    { id: 'ebook', label: 'eBook Writing' },
    { id: 'cover', label: 'Cover Design & Layout' },
    { id: 'publishing', label: 'Book Publishing' },
    { id: 'video', label: 'Book Video Trailer' },
    { id: 'marketing', label: 'Book Marketing' }
  ];

  const { openQuote } = usePopup();

  return (
    <div style={{
      backgroundColor: '#f8f9fa',
      padding: '60px 20px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#364a52',
            marginBottom: '15px'
          }}>
            From The Blank Sheet To The Best-Selling Book!
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6c757d',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            With Our Reasonably Priced Packages, Become a Successful Writer and Publish Your Book Today!
          </p>
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '40px',
          borderBottom: '2px solid #e9ecef',
          paddingBottom: '10px'
        }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(activeTab === tab.id ? null : tab.id)}
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                fontWeight: '600',
                border: 'none',
                background: activeTab === tab.id ? '#364a52' : 'transparent',
                color: activeTab === tab.id ? '#fff' : '#364a52',
                borderRadius: '8px 8px 0 0',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div style={{
                  position: 'absolute',
                  bottom: '-12px',
                  left: '0',
                  right: '0',
                  height: '4px',
                  background: '#364a52',
                  borderRadius: '2px 2px 0 0'
                }} />
              )}
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        {activeTab && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: activeTab === 'cover' 
            ? 'repeat(2, 1fr)' 
            : activeTab === 'publishing'
            ? 'repeat(4, 1fr)'
            : `repeat(auto-fit, minmax(280px, 1fr))`,
          gap: '30px',
          marginBottom: '40px',
          maxWidth: activeTab === 'cover' ? '800px' : '100%',
          margin: activeTab === 'cover' ? '0 auto 40px auto' : '0 0 40px 0'
        }}>
          {pricingData[activeTab].map((plan, idx) => (
            <div
              key={idx}
              style={{
                background: '#fff',
                borderRadius: '12px',
                padding: '30px',
                boxShadow: plan.isPopular
                  ? '0 10px 40px rgba(54, 74, 82, 0.2)'
                  : '0 4px 6px rgba(0, 0, 0, 0.1)',
                border: plan.isPopular ? '3px solid #364a52' : '1px solid #e9ecef',
                position: 'relative',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
              // Add explicit types to event handlers
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 48px rgba(54, 74, 82, 0.25)';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = plan.isPopular
                  ? '0 10px 40px rgba(54, 74, 82, 0.2)'
                  : '0 4px 6px rgba(0, 0, 0, 0.1)';
              }}
            >
              {plan.isPopular && (
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '20px',
                  background: 'linear-gradient(135deg, #364a52 0%, #0f252f 100%)',
                  color: '#fff',
                  padding: '8px 20px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '700',
                  letterSpacing: '1px'
                }}>
                  BEST SELLER
                </div>
              )}

              <div style={{ marginBottom: '20px' }}>
                <h5 style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#0f252f',
                  letterSpacing: '1px',
                  marginBottom: '8px'
                }}>
                  {plan.title}
                </h5>
                {plan.subtitle && (
                  <p style={{
                    fontSize: '28px',
                    fontWeight: '700',
                    color: '#364a52',
                    margin: '0'
                  }}>
                    {plan.subtitle}
                  </p>
                )}
                {plan.price !== null && ( // Check for null explicitly
                  <div style={{ margin: '15px 0' }}>
                    <span style={{
                      fontSize: '42px',
                      fontWeight: '700',
                      color: '#364a52'
                    }}>
                      ${plan.price}
                    </span>
                  </div>
                )}
              </div>

              <div style={{
                fontSize: '13px',
                fontWeight: '600',
                color: '#364a52',
                marginBottom: '15px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                THE ABOVE PACKAGE INCLUDES:
              </div>

              <div style={{
                flex: 1,
                maxHeight: '320px',
                overflowY: 'auto',
                marginBottom: '20px',
                paddingRight: '10px'
              }}>
                <style>
                  {`
                    div::-webkit-scrollbar {
                      width: 6px;
                    }
                    div::-webkit-scrollbar-track {
                      background: #f1f1f1;
                      border-radius: 10px;
                    }
                    div::-webkit-scrollbar-thumb {
                      background: #364a52;
                      border-radius: 10px;
                    }
                    div::-webkit-scrollbar-thumb:hover {
                      background: #0f252f;
                    }
                  `}
                </style>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {plan.features.map((feature, fIdx) => (
                    <li
                      key={fIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        marginBottom: '12px',
                        fontSize: '14px',
                        color: '#495057',
                        lineHeight: '1.6'
                      }}
                    >
                      {/* Using a placeholder for the icon as Font Awesome (fa) isn't included */}
                      <span style={{
                        color: '#364a52',
                        marginRight: '10px',
                        marginTop: '2px',
                        flexShrink: 0
                      }}>
                        {/* Placeholder for <i className="fa fa-check" /> */}
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: 'auto', alignItems: 'center', justifyContent: 'center' }}>
                <Button onClick={openQuote} className=" btn btn-m btn-grad text-white mb-0 w-100">
                Get Quote
              </Button>
                {/* <Link href="/contact" >
                <button
                  style={{
                    padding: '14px 20px',
                    fontSize: '15px',
                    fontWeight: '600',
                    border: '2px solid #364a52',
                    borderRadius: '8px',
                    background: '#fff',
                    color: '#364a52',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.currentTarget.style.background = '#364a52';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.currentTarget.style.background = '#fff';
                    e.currentTarget.style.color = '#364a52';
                  }}
                >
                  💬 Contact Now!
                </button>
                </Link> */}
              </div>
            </div>
          ))}
        </div>
        )}

        {/* Footer */}
        <div style={{
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '30px 20px',
          background: '#fff',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <h6 style={{
            fontSize: '16px',
            color: '#364a52',
            fontWeight: '600',
            lineHeight: '1.6',
            margin: 0
          }}>
            If you&apos;re not exactly sure which pricing strategy will work for your business. <span style={{color: '#aeb7b8'}}><Link href="/contact" style={{ color: '#aeb7b8' }} >Contact us</Link></span> we will help you to choose your best pricing plan.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;