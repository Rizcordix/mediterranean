"use client";
import React from 'react';

const TextMessageConsentAgreement: React.FC = () => {
  const colors = {
    primary: '#364a52',
    dark: '#0f252f',
    light: '#eeeae7',
  };

  const purposes = [
    {
      title: 'Order Updates',
      description:
        'Notifications regarding the status of your orders, including confirmations, shipping updates, and delivery confirmations.',
    },
    {
      title: 'Customer Support',
      description:
        'Assistance with your orders, responses to inquiries, and resolution of any issues related to our products or services.',
    },
    {
      title: 'Event Notifications',
      description:
        'Information about upcoming events, webinars, and other relevant activities hosted by Mediterranean Publishing.',
    },
    {
      title: 'Account Alerts',
      description:
        'Important alerts regarding your account, such as password changes, security notifications, and other account-related information.',
    },
    {
      title: 'Marketing Materials',
      description:
        'Promotional messages, special offers, and marketing materials related to Mediterranean Publishing products and services.',
    },
  ];

  const optOutMethods = [
    {
      title: "Reply 'STOP'",
      description:
        'Reply to any text message you receive from us with the word "STOP." This will automatically unsubscribe you from further text communications.',
    },
    {
      title: 'Contact Customer Support',
      description:
        'Reach out to our customer support team at info@mediterraneanpublishing.com or +1 281-247-0786 and request to be unsubscribed from text messages.',
    },
    {
      title: 'Update Preferences',
      description:
        'Log in to your account on our website and update your communication preferences to opt-out of receiving text messages.',
    },
  ];

  return (
    <section
      style={{
        backgroundColor: colors.light,
        minHeight: '100vh',
        padding: '140px 20px',
      }}
    >
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <header style={{ marginBottom: '60px', textAlign: 'center' }}>
          <div
            style={{
              width: '60px',
              height: '4px',
              backgroundColor: colors.primary,
              margin: '0 auto 24px',
            }}
          />
          <h1
            style={{
              fontSize: 'clamp(28px, 5vw, 42px)',
              fontWeight: 600,
              color: colors.dark,
              marginBottom: '16px',
              letterSpacing: '-0.5px',
              lineHeight: 1.2,
            }}
          >
            Text Message Consent Agreement
          </h1>
          <p
            style={{
              fontSize: '16px',
              color: colors.primary,
              opacity: 0.8,
            }}
          >
            Mediterranean Publishing
          </p>
        </header>

        {/* Introduction */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            padding: '32px',
            marginBottom: '32px',
            boxShadow: '0 2px 20px rgba(15, 37, 47, 0.06)',
          }}
        >
          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: colors.dark,
            }}
          >
            By providing your phone number and opting in, you agree to receive text
            messages (SMS) from Mediterranean Publishing related to the following
            purposes:
          </p>
        </div>

        {/* Purposes Section */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            padding: '40px 32px',
            marginBottom: '32px',
            boxShadow: '0 2px 20px rgba(15, 37, 47, 0.06)',
          }}
        >
          <h2
            style={{
              fontSize: '20px',
              fontWeight: 600,
              color: colors.dark,
              marginBottom: '28px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span
              style={{
                width: '32px',
                height: '32px',
                backgroundColor: colors.primary,
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: colors.light,
                fontSize: '14px',
              }}
            >
              📱
            </span>
            Message Purposes
          </h2>

          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {purposes.map((purpose, index) => (
              <li
                key={index}
                style={{
                  padding: '20px 0',
                  borderBottom:
                    index !== purposes.length - 1
                      ? `1px solid ${colors.light}`
                      : 'none',
                }}
              >
                <h3
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: colors.dark,
                    marginBottom: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      backgroundColor: colors.primary,
                      borderRadius: '50%',
                      flexShrink: 0,
                    }}
                  />
                  {purpose.title}
                </h3>
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.7,
                    color: colors.primary,
                    marginLeft: '16px',
                  }}
                >
                  {purpose.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Opt-Out Section */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            padding: '40px 32px',
            marginBottom: '32px',
            boxShadow: '0 2px 20px rgba(15, 37, 47, 0.06)',
          }}
        >
          <h2
            style={{
              fontSize: '20px',
              fontWeight: 600,
              color: colors.dark,
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span
              style={{
                width: '32px',
                height: '32px',
                backgroundColor: colors.primary,
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: colors.light,
                fontSize: '14px',
              }}
            >
              ✋
            </span>
            How to Withdraw Your Consent
          </h2>

          <p
            style={{
              fontSize: '15px',
              lineHeight: 1.7,
              color: colors.primary,
              marginBottom: '24px',
            }}
          >
            You have the right to withdraw your consent to receive text messages
            from Mediterranean Publishing at any time. To opt-out of receiving text
            messages, you can use any of the following methods:
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            {optOutMethods.map((method, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: colors.light,
                  borderRadius: '10px',
                  padding: '20px 24px',
                  borderLeft: `3px solid ${colors.primary}`,
                }}
              >
                <h3
                  style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    color: colors.dark,
                    marginBottom: '6px',
                  }}
                >
                  {method.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    lineHeight: 1.7,
                    color: colors.primary,
                    margin: 0,
                  }}
                >
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notice */}
        <div
          style={{
            backgroundColor: colors.dark,
            borderRadius: '12px',
            padding: '28px 32px',
            marginBottom: '32px',
          }}
        >
          <p
            style={{
              fontSize: '15px',
              lineHeight: 1.7,
              color: colors.light,
              margin: 0,
              textAlign: 'center',
            }}
          >
            <strong>Please note:</strong> Even if you opt-out of receiving
            promotional text messages, you may still receive transactional messages
            related to your orders or account.
          </p>
        </div>

        {/* Confirmation */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            padding: '32px',
            marginBottom: '32px',
            boxShadow: '0 2px 20px rgba(15, 37, 47, 0.06)',
            borderTop: `4px solid ${colors.primary}`,
          }}
        >
          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.8,
              color: colors.dark,
              margin: 0,
            }}
          >
            By opting in, you confirm that you are the owner or authorized user of
            the phone number provided and that you understand and agree to the
            terms outlined above.
          </p>
        </div>

        {/* Contact Section */}
        <div
          style={{
            textAlign: 'center',
            padding: '40px 0',
          }}
        >
          <p
            style={{
              fontSize: '15px',
              color: colors.primary,
              marginBottom: '20px',
            }}
          >
            If you have any questions or concerns regarding this consent agreement,
            please contact us:
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              alignItems: 'center',
              borderBottom: `1px solid ${colors.primary}`,
              paddingBottom: '20px',
            }}
          >
            <a
              href="mailto:info@mediterraneanpublishing.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: colors.dark,
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: 500,
                padding: '12px 24px',
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(15, 37, 47, 0.08)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  '0 4px 20px rgba(15, 37, 47, 0.12)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  '0 2px 10px rgba(15, 37, 47, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>✉️</span>
              info@mediterraneanpublishing.com
            </a>

            <a
              href="tel:+12812470786"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: colors.dark,
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: 500,
                padding: '12px 24px',
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(15, 37, 47, 0.08)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  '0 4px 20px rgba(15, 37, 47, 0.12)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  '0 2px 10px rgba(15, 37, 47, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>📞</span>
              +1 281-247-0786
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextMessageConsentAgreement;