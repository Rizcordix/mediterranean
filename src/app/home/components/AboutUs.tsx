import React from 'react';
import Image from 'next/image';
import imagesrc from '@/assets/images/banner/homeabout.png';

const AboutUs = () => {
  return (
    <section className="position-relative bg-light" style={{ overflow: 'hidden' }}>
      {/* Decorative quote marks */}
      <div 
        className="position-absolute opacity-25" 
        style={{ 
          top: '5%', 
          right: '10%', 
          fontSize: '200px', 
          color: '#364a52',
          lineHeight: 1,
          pointerEvents: 'none'
        }}
      >
        &quot;
      </div>
      
      <div className="container py-5">
        <div className="row justify-content-between align-items-center g-5">
          <div className="col-md-6 position-relative">
            {/* Decorative corner accent */}
            <div 
              className="position-absolute" 
              style={{
                top: '-20px',
                left: '-20px',
                width: '80px',
                height: '80px',
                border: '3px solid #364a52',
                borderRight: 'none',
                borderBottom: 'none'
              }}
            />
            
            <Image
              src={imagesrc.src}
              width={800}
              height={740}
              alt="About us"
              className="img-fluid rounded shadow-lg"
              style={{ 
                position: 'relative',
                zIndex: 1
              }}
            />
            
            {/* Decorative corner accent bottom */}
            <div 
              className="position-absolute" 
              style={{
                bottom: '-20px',
                right: '-20px',
                width: '80px',
                height: '80px',
                border: '3px solid #364a52',
                borderLeft: 'none',
                borderTop: 'none'
              }}
            />
            
            {/* Decorative book spine accent */}
            <div 
              className="position-absolute d-none d-lg-block" 
              style={{
                bottom: '30px',
                left: '-40px',
                width: '15px',
                height: '200px',
                background: 'linear-gradient(180deg, #364a52 0%, #0f252f 100%)',
                borderRadius: '2px'
              }}
            />
          </div>
          
          <div className="col-md-6 mt-4 mt-md-0 position-relative">
            {/* Subtle page curl decoration */}
            <div 
              className="position-absolute d-none d-lg-block" 
              style={{
                top: '-30px',
                left: '0',
                width: '60px',
                height: '60px',
                background: '#eeeae7',
                clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                opacity: 0.5
              }}
            />
            
            <div className="mb-3" style={{ 
              display: 'inline-block',
              borderLeft: '4px solid #364a52',
              paddingLeft: '16px'
            }}>
              <h6 className="text-uppercase mb-0" style={{ 
                color: '#364a52',
                letterSpacing: '2px',
                fontSize: '0.875rem',
                fontWeight: 600
              }}>
                About us
              </h6>
            </div>
            
            <h2 className="mb-4" style={{ 
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              lineHeight: 1.3,
              color: '#0f252f',
              fontWeight: 600
            }}>
              Bringing Stories to Life With Professional Publishing Excellence.
            </h2>
            
            <p className="mb-4" style={{ 
              fontSize: '1.125rem',
              lineHeight: 1.8,
              // color: '#364a52'
            }}>
              Since our founding in 2022, Mediterranean Publishing has been dedicated to transforming the dreams of authors into beautifully crafted books that captivate readers worldwide.
            </p>
            
            <p className="mb-4" style={{ 
              lineHeight: 1.8,
              // color: '#364a52',
              opacity: 2.9
            }}>
              At Mediterranean Publishing, we believe every story deserves to be heard, celebrated, and shared with the world. Our mission is to empower authors by providing high-quality writing, editing, design, and publishing services tailored to their unique creative vision. From aspiring writers to established authors, we support every stage of the publishing journey with expertise, passion, and unwavering commitment to quality.
            </p>
            
            {/* Signature style element */}
            <div className="d-flex align-items-center mt-5 pt-4" style={{
              borderTop: '1px solid rgba(54, 74, 82, 0.2)'
            }}>
              <div style={{
                width: '3px',
                height: '40px',
                background: '#364a52',
                marginRight: '16px'
              }} />
              <div>
                <p className="mb-0" style={{ 
                  color: '#0f252f',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  fontStyle: 'italic'
                }}>
                  Message From
                </p>
                <p className="mb-0" style={{
                  fontSize: '0.875rem',
                  color: '#364a52',
                  opacity: 0.8,
                  letterSpacing: '0.5px'
                }}>
                  Founders & CEO
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Top wave */}
      <figure className="position-absolute top-0 start-0 w-100 d-none d-md-block" style={{ marginTop: '-2px' }}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 1920 43.4"
          xmlSpace="preserve">
          <path
            fill="#f8f9fa"
            d="M0,23.3c0,0,405.1-43.5,697.6,0c316.5,1.5,108.9-2.6,480.4-14.1c0,0,139-12.2,458.7,14.3 c0,0,67.8,19.2,283.3-22.7v35.1H0V23.3z"
          />
        </svg>
      </figure>
      
      {/* Bottom wave */}
      <figure className="position-absolute bottom-0 start-0 w-100 d-none d-md-block" style={{ marginBottom: '-2px' }}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 1920 43.4"
          xmlSpace="preserve">
          <path
            fill="#ffffff"
            d="M0,23.3c0,0,405.1-43.5,697.6,0c316.5,1.5,108.9-2.6,480.4-14.1c0,0,139-12.2,458.7,14.3 c0,0,67.8,19.2,283.3-22.7v35.1H0V23.3z"
          />
        </svg>
      </figure>
    </section>
  );
};

export default AboutUs;