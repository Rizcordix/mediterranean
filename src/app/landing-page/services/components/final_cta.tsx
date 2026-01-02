"use client";
import React from 'react';
import { usePopup } from '@/components/wrappers/PopupContext';
import { Button } from 'react-bootstrap';

// --- Type Definitions ---

/** Defines the structure for trust metrics displayed in the banner. */
interface TrustMetric {
  icon: string;
  text: string;
}

// --- Component ---

const FinalCTABanner: React.FC = () => {
  const { openQuote } = usePopup();

  const trustMetrics: TrustMetric[] = [
    { icon: '✓', text: 'Join 5,000+ published authors' },
    { icon: '⭐', text: '98% satisfaction rate' },
    { icon: '💬', text: '24/7 support' },
    { icon: '💰', text: 'Money-back guarantee' }
  ];

  return (
    <div style={{
      backgroundColor: '#0f252f',
      padding: '80px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative background elements */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(54, 74, 82, 0.3) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        left: '-100px',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(54, 74, 82, 0.2) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />

      <div style={{ 
        maxWidth: '1000px', 
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>

        {/* Headline */}
        <h2 style={{
          fontSize: '48px',
          fontWeight: '700',
          color: '#eeeae7',
          textAlign: 'center',
          marginBottom: '24px',
          lineHeight: '1.2'
        }}>
          Your Publishing Journey Starts Today
        </h2>

        {/* Main Copy */}
        <div style={{
          maxWidth: '800px',
          margin: '0 auto 40px auto',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '20px',
            color: '#eeeae7',
            lineHeight: '1.7',
            marginBottom: '16px',
            opacity: 0.95
          }}>
            You&apos;ve written something remarkable. Your readers are waiting. The only thing between you and becoming a published author is one decision: <strong style={{ color: '#fff' }}>start</strong>.
          </p>
          <p style={{
            fontSize: '18px',
            color: '#eeeae7',
            lineHeight: '1.6',
            marginBottom: '20px',
            opacity: 0.9
          }}>
            Mediterranean Publishing makes that decision easy.
          </p>

          {/* Key Features */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '32px',
            flexWrap: 'wrap',
            marginBottom: '24px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{
                fontSize: '24px',
                color: '#364a52'
              }}>⚡</span>
              <span style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#eeeae7'
              }}>
                Fast <span style={{ opacity: 0.8, fontWeight: '400' }}>(90 days)</span>
              </span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{
                fontSize: '24px',
                color: '#364a52'
              }}>💲</span>
              <span style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#eeeae7'
              }}>
                Affordable <span style={{ opacity: 0.8, fontWeight: '400' }}>($1,299-$8,999)</span>
              </span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{
                fontSize: '24px',
                color: '#364a52'
              }}>🏆</span>
              <span style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#eeeae7'
              }}>
                Professional <span style={{ opacity: 0.8, fontWeight: '400' }}>(5,000+ authors)</span>
              </span>
            </div>
          </div>

          <p style={{
            fontSize: '18px',
            color: '#eeeae7',
            fontStyle: 'italic',
            marginBottom: '0',
            opacity: 0.85
          }}>
            Don&apos;t let your book become another &quot;someday&quot; project.
          </p>
        </div>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          flexWrap: 'wrap',
          marginBottom: '48px'
        }}>
          <Button 
            onClick={openQuote}
            className="btn btn-lg text-white mb-0"
            style={{
              padding: '16px 40px',
              fontSize: '18px',
              fontWeight: '700',
              border: 'none',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #364a52 0%, #0f252f 100%)',
              color: '#fff',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 6px 24px rgba(54, 74, 82, 0.4)',
              minWidth: '280px'
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 10px 32px rgba(54, 74, 82, 0.5)';
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(54, 74, 82, 0.4)';
            }}
          >
            🚀 Publish Your Book in 90 Days
          </Button>

          <Button
            onClick={openQuote}
            className="btn btn-lg mb-0"
            style={{
              padding: '16px 40px',
              fontSize: '18px',
              fontWeight: '600',
              border: '2px solid #eeeae7',
              borderRadius: '12px',
              background: 'transparent',
              color: '#eeeae7',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              minWidth: '280px'
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.background = '#eeeae7';
              e.currentTarget.style.color = '#0f252f';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#eeeae7';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            💼 Get Free Consultation + $550 Bonuses
          </Button>
        </div>

        {/* Trust Metrics */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '24px',
          flexWrap: 'wrap',
          paddingTop: '32px',
          borderTop: '1px solid rgba(238, 234, 231, 0.2)'
        }}>
          {trustMetrics.map((metric, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span style={{
                fontSize: '18px',
                color: '#364a52'
              }}>
                {metric.icon}
              </span>
              <span style={{
                fontSize: '15px',
                color: '#eeeae7',
                fontWeight: '500'
              }}>
                {metric.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Pulse Animation */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }

        @media (max-width: 768px) {
          h2 {
            font-size: 36px !important;
          }
          p {
            font-size: 16px !important;
          }
          button {
            min-width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default FinalCTABanner;