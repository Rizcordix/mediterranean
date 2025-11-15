import React from 'react';
// import Image from 'next/image';

const Details = () => {
  return (
    <section className="position-relative" style={{ backgroundColor: '#eeeae7' }}>
      {/* Top Wave */}
      <figure className="position-absolute top-0 start-0 w-100 d-none d-md-block" style={{ marginTop: '-1px' }}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 43.4"
          style={{ display: 'block' }}>
          <path
            style={{ fill: '#eeeae7' }}
            d="M0,23.3c0,0,405.1-43.5,697.6,0c316.5,1.5,108.9-2.6,480.4-14.1c0,0,139-12.2,458.7,14.3 c0,0,67.8,19.2,283.3-22.7v35.1H0V23.3z"
          />
        </svg>
      </figure>

      <div className="container" style={{ padding: '0px 15px' }}>
        <div className="row justify-content-between align-items-center g-5">
          {/* Image Column */}
          <div className="col-lg-5">
            <div style={{ position: 'relative' }}>
              {/* Decorative Frame */}
              <div
                style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '-20px',
                  right: '20px',
                  bottom: '20px',
                  border: `2px solid #364a52`,
                  opacity: 0.3,
                  zIndex: 0,
                }}
              />
              
              {/* Main Image */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  overflow: 'hidden',
                  borderRadius: '2px',
                  boxShadow: '0 20px 60px rgba(15, 37, 47, 0.15)',
                }}
              >
                <img
                  src="https://placehold.co/600x800"
                  alt="Book Writing Service"
                  width={600}
                  height={800}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    filter: 'grayscale(10%)',
                  }}
                />
              </div>

              {/* Decorative Quote Mark */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-15px',
                  right: '-15px',
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#0f252f',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                  boxShadow: '0 10px 30px rgba(15, 37, 47, 0.3)',
                }}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#eeeae7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="col-lg-6">
            {/* Section Label */}
            <div
              style={{
                display: 'inline-block',
                fontSize: '0.75rem',
                fontWeight: '600',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#364a52',
                marginBottom: '20px',
                paddingBottom: '10px',
                borderBottom: '2px solid #364a52',
              }}
            >
              Our Services
            </div>

            {/* Main Heading */}
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: '300',
                color: '#0f252f',
                marginBottom: '30px',
                lineHeight: '1.2',
                letterSpacing: '-0.5px',
              }}
            >
              Exceptional Author Support for a
              <span style={{ fontWeight: '600' }}> Seamless Publishing Experience</span>
            </h2>

            {/* Lead Paragraph */}
            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.8',
                color: '#364a52',
                marginBottom: '25px',
                fontWeight: '400',
              }}
            >
              Publishing a book involves countless decisions—and we&apos;re here to make every step easier. Our premium support gives you direct access to experienced specialists who provide personalized advice, timely updates, and complete clarity from start to finish. No matter the question or concern, our team is always ready to help.
            </p>

            {/* Body Paragraph */}
            <p
              style={{
                fontSize: '1rem',
                lineHeight: '1.8',
                color: '#364a52',
                marginBottom: '35px',
                opacity: 0.9,
              }}
            >
              With Mediterranean Publishing&apos;s premium support, you&apos;re never navigating the process alone. We keep you informed, handle challenges proactively, and ensure your project stays on track with professional oversight. From writing and design to marketing and launch, we offer the ongoing support and attention your book deserves—so you can feel confident, empowered, and fully supported throughout your publishing journey.
            </p>

            {/* Signature Statement */}
            <div
              style={{
                padding: '30px 0',
                borderTop: '1px solid rgba(54, 74, 82, 0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
              }}
            >
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    fontSize: '0.95rem',
                    fontStyle: 'italic',
                    color: '#0f252f',
                    margin: 0,
                    lineHeight: '1.6',
                  }}
                >
                  &quot;At Meditarranean Publishing, we focus on creating books that not
                  only read well — but sell well.&quot;
                </p>
              </div>
            </div>

            {/* Feature Highlights */}
            {/* <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '20px',
                marginTop: '40px',
              }}
            >
              {[
                { icon: '✍️', text: 'Professional Writers' },
                { icon: '📚', text: 'All Genres Covered' },
                { icon: '✓', text: 'Publication Ready' },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  }}
                >
                  <div
                    style={{
                      width: '45px',
                      height: '45px',
                      backgroundColor: '#364a52',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.25rem',
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <span
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      color: '#0f252f',
                    }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <figure className="position-absolute bottom-0 start-0 w-100 d-none d-md-block" style={{ marginBottom: '-1px' }}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 43.4"
          style={{ display: 'block' }}>
          <path
            style={{ fill: '#ffffff' }}
            d="M0,23.3c0,0,405.1-43.5,697.6,0c316.5,1.5,108.9-2.6,480.4-14.1c0,0,139-12.2,458.7,14.3 c0,0,67.8,19.2,283.3-22.7v35.1H0V23.3z"
          />
        </svg>
      </figure>
    </section>
  );
};

export default Details;