"use client";
import React from 'react';

// --- Type Definitions ---

/** Defines the structure for a timeline item in the publishing process. */
interface TimelineItem {
  period: string;
  description: string;
}

/** Defines the structure for a highlight metric (cost, headaches, etc.). */
interface HighlightMetric {
  label: string;
  value: string;
}

/** Defines the structure for a publishing path comparison card. */
interface PublishingPath {
  badge: string;
  title: string;
  timeline: string;
  timelineItems: TimelineItem[];
  highlights: HighlightMetric[];
  result: string;
  resultIcon: string;
  badgeColor: string;
  accentColor: string;
  borderColor: string;
}

// --- Component ---

const PublishingComparison: React.FC = () => {
  const comparisonData: PublishingPath[] = [
    {
      badge: 'Traditional DIY Path',
      title: 'WITHOUT Mediterranean Publishing',
      timeline: '6-12+ months',
      timelineItems: [
        { period: 'Weeks 1-2:', description: 'Find freelance editor ($1,500-3,000)' },
        { period: 'Weeks 3-8:', description: 'Editing and revisions' },
        { period: 'Weeks 9-10:', description: 'Find cover designer ($500-1,500)' },
        { period: 'Weeks 11-14:', description: 'Cover revision cycles' },
        { period: 'Weeks 15-16:', description: 'Learn formatting (DIY) or hire ($300-500)' },
        { period: 'Weeks 17-20:', description: 'Navigate Amazon KDP, IngramSpark' },
        { period: 'Weeks 21-24:', description: 'Finally published (but 6 months have passed!)' }
      ],
      highlights: [
        { label: 'Total Cost:', value: '$3,800-$7,200+' },
        { label: 'Headaches:', value: 'Countless' },
        { label: 'Coordination:', value: 'Nightmare' }
      ],
      result: 'Published late, momentum lost, sales suffer',
      resultIcon: '📉',
      badgeColor: '#364a52',
      accentColor: 'linear-gradient(90deg, #364a52 0%, #0f252f 100%)',
      borderColor: '#364a52'
    },
    {
      badge: 'Mediterranean Solution',
      title: 'WITH Mediterranean Publishing',
      timeline: '90 days average',
      timelineItems: [
        { period: 'Week 1:', description: 'Consultation and planning' },
        { period: 'Weeks 2-6:', description: 'Writing/editing happens simultaneously' },
        { period: 'Weeks 5-8:', description: 'Cover design and final proofs' },
        { period: 'Weeks 7-10:', description: 'Final formatting and publishing setup' },
        { period: 'Week 11-12:', description: 'Publish to Amazon + global distribution' },
        { period: 'Week 13:', description: 'Celebrate with book in hand! 🎉' }
      ],
      highlights: [
        { label: 'Total Cost:', value: '$1,299-$8,999' },
        { label: 'Headaches:', value: '0' },
        { label: 'Contact Points:', value: 'One Team' }
      ],
      result: 'Published on schedule, momentum maintained, marketing begins immediately',
      resultIcon: '📈',
      badgeColor: '#0f252f',
      accentColor: 'linear-gradient(90deg, #0f252f 0%, #364a52 100%)',
      borderColor: '#0f252f'
    }
  ];

  return (
    <div style={{
      backgroundColor: '#fff',
      padding: '60px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{
            fontSize: '40px',
            fontWeight: '700',
            color: '#0f252f',
            marginBottom: '16px'
          }}>
            The Publishing Path Comparison
          </h2>
          <p style={{
            fontSize: '20px',
            color: '#364a52',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            See how Mediterranean Publishing transforms your journey
          </p>
        </div>

        {/* Comparison Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          {comparisonData.map((path, idx) => (
            <div
              key={idx}
              style={{
                background: '#eeeae7',
                borderRadius: '16px',
                padding: '40px',
                boxShadow: '0 4px 20px rgba(15, 37, 47, 0.08)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(15, 37, 47, 0.15)';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(15, 37, 47, 0.08)';
              }}
            >
              {/* Top accent bar */}
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                height: '6px',
                background: path.accentColor
              }} />

              {/* Badge */}
              <span style={{
                display: 'inline-block',
                background: path.badgeColor,
                color: '#fff',
                padding: '8px 20px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '24px',
                width: 'fit-content'
              }}>
                {path.badge}
              </span>

              {/* Title */}
              <h3 style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#0f252f',
                marginBottom: '24px',
                lineHeight: '1.3'
              }}>
                {path.title}
              </h3>

              {/* Timeline Section */}
              <div style={{ marginBottom: '32px' }}>
                <div style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#364a52',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '12px'
                }}>
                  Timeline: {path.timeline}
                </div>
                <div>
                  {path.timelineItems.map((item, tIdx) => (
                    <div
                      key={tIdx}
                      style={{
                        padding: '12px 0',
                        borderBottom: tIdx === path.timelineItems.length - 1 ? 'none' : '1px solid #eeeae7',
                        color: '#364a52',
                        lineHeight: '1.6',
                        fontSize: '15px'
                      }}
                    >
                      <span style={{
                        fontWeight: '600',
                        color: '#0f252f'
                      }}>
                        {item.period}
                      </span>{' '}
                      {item.description}
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights Box */}
              <div style={{
                background: '#fff',
                padding: '20px',
                borderRadius: '12px',
                marginBottom: '24px'
              }}>
                {path.highlights.map((highlight, hIdx) => (
                  <div
                    key={hIdx}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: hIdx === path.highlights.length - 1 ? '0' : '12px',
                      color: '#364a52'
                    }}
                  >
                    <span style={{
                      fontWeight: '600',
                      color: '#0f252f',
                      fontSize: '15px'
                    }}>
                      {highlight.label}
                    </span>
                    <span style={{
                      fontWeight: '700',
                      fontSize: '18px',
                      color: path.badgeColor
                    }}>
                      {highlight.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Result Badge */}
              <div style={{
                background: '#fff',
                border: `2px solid ${path.borderColor}`,
                borderRadius: '12px',
                padding: '16px 24px',
                textAlign: 'center',
                fontWeight: '600',
                color: path.borderColor,
                fontSize: '15px',
                lineHeight: '1.5',
                marginTop: 'auto'
              }}>
                {path.resultIcon} {path.result}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 968px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PublishingComparison;