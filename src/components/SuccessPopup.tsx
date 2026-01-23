'use client';

import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  formType?: 'contact' | 'discount' | 'quote' | 'newsletter' | 'report';
};

const SuccessPopup: React.FC<Props> = ({ isOpen, onClose, formType = 'contact' }) => {
  const [mounted, setMounted] = useState(false);
  const mountedRef = useRef<boolean>(false);

  useEffect(() => {
    mountedRef.current = true;
    setMounted(true);
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (isOpen && typeof window !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  const messageConfig = {
    contact: {
      title: '✓ Message Received',
      message: 'Thank you for contacting us!',
      details: 'Check your email for a confirmation. We\'ll get back to you within 24-48 hours.',
      icon: '📧',
    },
    discount: {
      title: '🎉 Application Confirmed',
      message: 'You\'re Eligible for 50% Off',
      details: 'Check your email for details. Our team will contact you shortly to schedule your consultation call.',
      icon: '🎁',
    },
    quote: {
      title: '✓ Quote Request Received',
      message: 'Your Quote is Being Prepared',
      details: 'Check your email for confirmation. We\'ll send you a customized quote within 2-4 hours.',
      icon: '📋',
    },
    newsletter: {
      title: '✓ Welcome Aboard',
      message: 'Newsletter Subscription Confirmed',
      details: 'Check your email for a welcome message. Enjoy exclusive publishing tips and updates!',
      icon: '📰',
    },
    report: {
      title: '✓ Report Request Confirmed',
      message: 'Your Book Report is Being Prepared',
      details: 'Check your email for confirmation. We\'ll deliver your comprehensive report within 5-7 business days.',
      icon: '📖',
    },
  };

  const config = messageConfig[formType];

  return createPortal(
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(15, 37, 47, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99999,
        backdropFilter: 'blur(3px)',
        animation: 'fadeIn 0.3s ease-out',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: '40px 32px',
          maxWidth: '420px',
          width: '90%',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
          textAlign: 'center',
          animation: 'slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            color: '#999',
            padding: '4px 8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#364a52')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#999')}
          aria-label="Close"
        >
          ✕
        </button>

        {/* Icon */}
        <div
          style={{
            fontSize: '56px',
            marginBottom: '16px',
            animation: 'bounce 0.6s ease-out',
          }}
        >
          {config.icon}
        </div>

        {/* Main Title */}
        <h2
          style={{
            margin: '0 0 8px 0',
            fontSize: '24px',
            fontWeight: '700',
            color: '#0f252f',
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          {config.title}
        </h2>

        {/* Subtitle */}
        <h3
          style={{
            margin: '0 0 16px 0',
            fontSize: '16px',
            fontWeight: '600',
            color: '#364a52',
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          {config.message}
        </h3>

        {/* Divider */}
        <div
          style={{
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #364a52, transparent)',
            margin: '16px 0 20px 0',
          }}
        />

        {/* Details Text */}
        <p
          style={{
            margin: '0 0 28px 0',
            fontSize: '14px',
            color: '#666',
            lineHeight: '1.6',
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          {config.details}
        </p>

        {/* Button */}
        <button
          onClick={onClose}
          style={{
            width: '100%',
            padding: '14px 24px',
            backgroundColor: '#364a52',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '15px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontFamily: "'Poppins', sans-serif",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#0f252f';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(54, 74, 82, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#364a52';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Got It!
        </button>

        {/* Secondary text */}
        <p
          style={{
            margin: '16px 0 0 0',
            fontSize: '12px',
            color: '#999',
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          You can close this message anytime
        </p>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0% {
            transform: scale(0.8) translateY(10px);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>,
    document.body
  );
};

export default SuccessPopup;
