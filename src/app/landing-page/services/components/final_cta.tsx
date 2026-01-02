"use client";
import React from 'react';
import { usePopup } from '@/components/wrappers/PopupContext';
import { Button } from 'react-bootstrap';

interface TrustMetric {
  icon: string;
  text: string;
}

const FinalCTABanner: React.FC = () => {
  const { openQuote } = usePopup();

  const trustMetrics: TrustMetric[] = [
    { icon: '✓', text: 'Join 5,000+ published authors' },
    { icon: '⭐', text: '98% satisfaction rate' },
    { icon: '💬', text: '24/7 support' },
    { icon: '💰', text: 'Money-back guarantee' }
  ];

  return (
    <div
      style={{
        position: 'relative',
        padding: '80px 20px',
        overflow: 'hidden',
        backgroundImage:
          'url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(rgba(15, 37, 47, 0.85), rgba(15, 37, 47, 0.85))',
          zIndex: 0
        }}
      />

      {/* Decorative background elements */}
      <div
        style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '300px',
          height: '300px',
          background:
            'radial-gradient(circle, rgba(54, 74, 82, 0.35) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-100px',
          left: '-100px',
          width: '400px',
          height: '400px',
          background:
            'radial-gradient(circle, rgba(54, 74, 82, 0.25) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2
        }}
      >
        {/* Headline */}
        <h2
          style={{
            fontSize: '48px',
            fontWeight: '700',
            color: '#eeeae7',
            textAlign: 'center',
            marginBottom: '24px',
            lineHeight: '1.2'
          }}
        >
          Your Publishing Journey Starts Today
        </h2>

        {/* Main Copy */}
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto 40px auto',
            textAlign: 'center'
          }}
        >
          <p
            style={{
              fontSize: '20px',
              color: '#eeeae7',
              lineHeight: '1.7',
              marginBottom: '16px',
              opacity: 0.95
            }}
          >
            You&apos;ve written something remarkable. Your readers are waiting.
            The only thing between you and becoming a published author is one
            decision: <strong style={{ color: '#fff' }}>start</strong>.
          </p>

          <p
            style={{
              fontSize: '18px',
              color: '#eeeae7',
              lineHeight: '1.6',
              marginBottom: '20px',
              opacity: 0.9
            }}
          >
            Mediterranean Publishing makes that decision easy.
          </p>

          {/* Key Features */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '32px',
              flexWrap: 'wrap',
              marginBottom: '24px'
            }}
          >
            {[
              ['⚡', 'Fast', '(90 days)'],
              ['💲', 'Affordable', '($1,299-$8,999)'],
              ['🏆', 'Professional', '(5,000+ authors)']
            ].map(([icon, title, sub], i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span style={{ fontSize: '24px', color: '#364a52' }}>
                  {icon}
                </span>
                <span
                  style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#eeeae7'
                  }}
                >
                  {title}{' '}
                  <span style={{ opacity: 0.8, fontWeight: '400' }}>
                    {sub}
                  </span>
                </span>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: '18px',
              color: '#eeeae7',
              fontStyle: 'italic',
              opacity: 0.85
            }}
          >
            Don&apos;t let your book become another &quot;someday&quot; project.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '48px'
          }}
        >
          <Button
            onClick={openQuote}
            className="btn btn-lg text-white"
            style={{
              padding: '16px 40px',
              fontSize: '18px',
              fontWeight: '700',
              borderRadius: '12px',
              background:
                'linear-gradient(135deg, #364a52 0%, #0f252f 100%)',
              boxShadow: '0 6px 24px rgba(54, 74, 82, 0.4)',
              minWidth: '280px'
            }}
          >
            🚀 Publish Your Book in 90 Days
          </Button>

          <Button
            href="/calendly"
            target="_blank"
            className="btn btn-lg"
            style={{
              padding: '16px 40px',
              fontSize: '18px',
              fontWeight: '600',
              border: '2px solid #eeeae7',
              borderRadius: '12px',
              background: 'transparent',
              color: '#eeeae7',
              minWidth: '280px'
            }}
          >
            💼 Get Free Consultation + $550 Bonuses
          </Button>
        </div>

        {/* Trust Metrics */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            flexWrap: 'wrap',
            paddingTop: '32px',
            borderTop: '1px solid rgba(238,234,231,0.2)'
          }}
        >
          {trustMetrics.map((metric, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '8px' }}>
              <span style={{ color: '#364a52' }}>{metric.icon}</span>
              <span style={{ color: '#eeeae7', fontSize: '15px' }}>
                {metric.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinalCTABanner;
