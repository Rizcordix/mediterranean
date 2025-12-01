'use client'
import React from 'react';
import { Button } from 'react-bootstrap';
import { usePopup } from '@/components/wrappers/PopupContext';

const AboutPage = () => {
  const stats = [
    { number: '15+', label: 'Years of Excellence' },
    { number: '500+', label: 'Books Published' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Industry Awards' }
  ];

  const services = [
    {
      icon: (
        <svg style={{ width: '48px', height: '48px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Book Writing',
      description: 'Professional ghostwriters craft compelling narratives that capture your unique voice and vision, transforming ideas into bestsellers.'
    },
    {
      icon: (
        <svg style={{ width: '48px', height: '48px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Editorial Services',
      description: 'Expert editors refine your manuscript with meticulous attention to detail, ensuring flawless grammar, structure, and flow.'
    },
    {
      icon: (
        <svg style={{ width: '48px', height: '48px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'Book Cover Design',
      description: 'Award-winning designers create stunning covers that captivate readers and make your book stand out in any marketplace.'
    },
    {
      icon: (
        <svg style={{ width: '48px', height: '48px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Publishing & Marketing',
      description: 'Strategic publishing guidance and targeted marketing campaigns to maximize your book\'s reach and commercial success.'
    }
  ];

  const values = [
    'Author-centric approach with personalized attention',
    'Industry-leading quality standards',
    'Transparent communication throughout',
    'Deadline-driven project management',
    'Comprehensive rights protection',
    'Post-publication support and guidance'
  ];

  const CheckIcon = () => (
    <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );

  const AwardIcon = () => (
    <svg style={{ width: '64px', height: '64px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  );

  const { openQuote } = usePopup();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#eeeae7' }}>
      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        overflow: 'hidden', 
        backgroundColor: '#0f252f',
        padding: '50px 0'
      }}>
        
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 20px',
          position: 'relative'
        }}>
          

          {/* Stats */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '32px',
            marginTop: '5px'
          }}>
            {stats.map((stat, idx) => (
              <div key={idx} style={{
                textAlign: 'center',
                padding: '22px',
                borderRadius: '12px',
                backgroundColor: 'rgba(54, 74, 82, 0.3)',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  marginBottom: '8px',
                  color: '#eeeae7'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#eeeae7',
                  opacity: 0.8
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Story Section */}
      <section style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{
                fontWeight: 'bold',
                marginBottom: '24px',
                color: '#0f252f'
              }}>
                Our Story
              </h2>
              <p style={{
                marginBottom: '16px',
                color: '#364a52',
                lineHeight: '1.7'
              }}>
                Founded in 2009, Mediterranean Publishing emerged from a simple belief: every story deserves to be told with excellence. What began as a small editorial service has blossomed into a full-spectrum publishing powerhouse, serving authors across genres and continents.
              </p>
              <p style={{
                marginBottom: '16px',
                color: '#364a52',
                lineHeight: '1.7'
              }}>
                Our team of seasoned professionals combines traditional publishing expertise with modern digital strategies, ensuring your work reaches its full potential in today&apos;s dynamic literary landscape.
              </p>
              <p style={{
                color: '#364a52',
                lineHeight: '1.7'
              }}>
                We&apos;ve helped hundreds of authors achieve their dreams—from first-time writers to established professionals—and we&apos;re passionate about making your publishing journey seamless, rewarding, and successful.
              </p>
            </div>
            <div>
              <div style={{
                borderRadius: '16px',
                padding: '32px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
                backgroundColor: '#364a52'
              }}>
                <div style={{ color: '#eeeae7', marginBottom: '16px' }}>
                  <AwardIcon />
                </div>
                <h3 style={{
                  fontWeight: 'bold',
                  marginBottom: '16px',
                  color: '#eeeae7'
                }}>
                  Award-Winning Excellence
                </h3>
                <p style={{
                  marginBottom: '24px',
                  color: '#eeeae7',
                  opacity: 0.9,
                  lineHeight: '1.6'
                }}>
                  Recognized industry-wide for our commitment to quality, innovation, and author success. Our portfolio includes multiple bestsellers and award-winning titles across all major categories.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {['Best Publishing Services 2023', 'Editorial Excellence Award', 'Top Design Studio'].map((award, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ color: '#eeeae7' }}>
                        <CheckIcon />
                      </div>
                      <span style={{ color: '#eeeae7' }}>{award}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '80px 0', backgroundColor: '#0f252f' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{
              fontWeight: 'bold',
              marginBottom: '16px',
              color: '#eeeae7'
            }}>
              Comprehensive Services
            </h2>
            <p style={{
              maxWidth: '600px',
              margin: '0 auto',
              color: '#eeeae7',
              opacity: 0.8
            }}>
              End-to-end publishing solutions tailored to your unique needs
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px'
          }}>
            {services.map((service, idx) => (
              <div key={idx} style={{
                padding: '32px',
                borderRadius: '12px',
                transition: 'all 0.3s',
                cursor: 'pointer',
                backgroundColor: '#364a52'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <div style={{ marginBottom: '16px', color: '#eeeae7' }}>
                  {service.icon}
                </div>
                <h3 style={{
                  fontWeight: 'bold',
                  marginBottom: '12px',
                  color: '#eeeae7'
                }}>
                  {service.title}
                </h3>
                <p style={{
                  color: '#eeeae7',
                  opacity: 0.9,
                  lineHeight: '1.6'
                }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px',
            alignItems: 'center'
          }}>
            <div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px'
              }}>
                {values.map((value, idx) => (
                  <div key={idx} style={{
                    padding: '24px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                    backgroundColor: '#364a52'
                  }}>
                    <div style={{ color: '#eeeae7', marginBottom: '12px' }}>
                      <CheckIcon />
                    </div>
                    <p style={{
                      fontWeight: '500',
                      color: '#eeeae7',
                      lineHeight: '1.5'
                    }}>
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 style={{
                fontWeight: 'bold',
                marginBottom: '24px',
                color: '#0f252f'
              }}>
                Why Authors Choose Us
              </h2>
              <p style={{
                marginBottom: '24px',
                color: '#364a52',
                lineHeight: '1.7'
              }}>
                At Mediterranean Publishing, we don&apos;t just publish books—we build lasting partnerships with our authors. Our commitment goes beyond the manuscript to ensure your success at every stage.
              </p>
              <p style={{
                marginBottom: '32px',
                color: '#364a52',
                lineHeight: '1.7'
              }}>
                With a dedicated team of publishing professionals, cutting-edge technology, and a proven track record, we provide the support and expertise you need to bring your vision to life.
              </p>
              <Button 
                href='/contact'
              
                style={{
                  padding: '16px 32px',
                  borderRadius: '50px',
                  fontWeight: '600',
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                  backgroundColor: '#0f252f',
                  color: '#eeeae7',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#364a52' }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '0 20px',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontWeight: 'bold',
            marginBottom: '24px',
            color: '#eeeae7'
          }}>
            Ready to Publish Your Story?
          </h2>
          <p style={{
            marginBottom: '32px',
            color: '#eeeae7',
            opacity: 0.9
          }}>
            Join hundreds of successful authors who trusted us with their dreams. Let&apos;s create something extraordinary together.
          </p>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Button 
              onClick={openQuote}
            style={{
              padding: '16px 32px',
              borderRadius: '50px',
              fontWeight: '600',
              transition: 'all 0.3s',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
              backgroundColor: '#eeeae7',
              color: '#0f252f',
              border: 'none',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              Get a Free Quote
            </Button>
            <Button 
              href="/book-samples"
            style={{
              padding: '16px 32px',
              borderRadius: '50px',
              fontWeight: '600',
              transition: 'all 0.3s',
              border: '2px solid #eeeae7',
              color: '#eeeae7',
              backgroundColor: 'transparent',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#eeeae7';
              e.currentTarget.style.color = '#0f252f';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#eeeae7';
            }}>
              View Book Samples
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;