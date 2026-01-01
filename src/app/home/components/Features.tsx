"use client"
import background from '@/assets/images/cta/bgCTA.jpg'
import booksimage from '@/assets/images/cta/ctabooks.png'
import Image from 'next/image'
import { Button, Col, Container, Row } from 'react-bootstrap'
// import Link from 'next/link'
import type { CSSProperties } from 'react'

const CTA = () => {
    // const showThriller = true;
    const isMobile: { bookTransformMobile: CSSProperties } = {
      bookTransformMobile: {
        transform: 'scale(1.3) rotate(-15deg) skewY(-5deg) translate(-10%, -20%)', // changed Y from 10% to -10% to pull image up
        transformOrigin: '',
        opacity: 0.7,
        position: 'absolute',
        top: '40%', // changed from 50% to 40% to move image higher
        right: '-10%',
        left: 'auto',
        zIndex: 1, 
      }
    };


    return (
        <section
            className="position-relative py-5"
            style={{
                backgroundImage: `url(${background.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '500px',
                overflow: 'hidden'
            }}
        >
            {/* Dark overlay for better text readability */}
            <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1 }}
            />

            <Container className="position-relative" style={{ zIndex: 2 }}>
                {/* Reorder the columns for mobile: image first, then text, as seen in the first photo */}
                <Row className="align-items-center g-4 flex-column-reverse flex-lg-row"> 
                    
                    {/* The Book Image Column (lg={6}) - Now placed first in the JSX but last on desktop (flex-column-reverse) */}
                    <Col lg={6} md={12} className="text-center text-lg-end order-lg-2">
                        <div className="position-relative d-inline-block w-100 h-100">
                            <Image
                                src={booksimage}
                                alt="Thriller book collection"
                                // On desktop (lg), use the original large transform. On mobile, use the new style.
                                className="img-fluid d-none d-lg-block" // Hide original transform on small screens
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    transform: 'scale(2.4) rotate(-25deg) skewY(-8deg) translate(10px, -10px)',
                                    transformOrigin: 'center',
                                    filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.6))',
                                    transition: 'transform 300ms ease',
                                }}
                            />
                            <Image
                                src={booksimage}
                                alt="Thriller book collection"
                                className="img-fluid d-lg-none" // Show only on small screens
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    ...isMobile.bookTransformMobile // Apply the adjusted mobile styles
                                }}
                            />
                        </div>
                    </Col>
                    <Col lg={6} md={12} className="order-lg-1 text-center text-md-start"> {/* Center text on mobile to match image 1 */}
                        <div className="text-white">
                            <p
                                className="text-uppercase mb-2 fw-semibold"
                                style={{
                                    color: '#b8ff57',
                                    letterSpacing: '0.05em'
                                }}
                            >
                                Best Collection.
                            </p>

                            <h1
                                className="fw-bold mb-3"
                                style={{
                                    lineHeight: '1.2',
                                    color: '#ffffff',
                                    // fontSize: '3rem'
                                }}
                            >
                                TOP FAVOURITE<br />
                                STORIES
                            </h1>

                            <p className="mb-4" style={{ zIndex: 4 }}>
                                Find our take on the best books of all time.
                            </p>

                            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start"> {/* Center buttons on mobile */}
                                <Button href="/book-samples"
                                    variant="light"
                                    className="d-inline-flex align-items-center px-4 py-2"
                                    style={{
                                        borderRadius: '50px',
                                        fontWeight: '500',
                                        fontSize: '1rem',
                                        zIndex: 2
                                    }}
                                >
                                    Discover Now
                                    <span className="ms-2">→</span>
                                </Button>

                                <Button
                                    href='/calendly'
                                    target='_blank'
                                    variant="outline-light"
                                    className="d-inline-flex align-items-center px-4 py-2" 
                                    style={{
                                        borderRadius: '50px',
                                        fontWeight: '500',
                                        fontSize: '1rem',
                                        borderWidth: '2px',
                                        zIndex: 2
                                    }}
                                >
                                    Book a Free Consultation
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
             <div 
                className="position-absolute bottom-0 start-0 w-100" 
                style={{ 
                    height: '100px', 
                    background: 'linear-gradient(to top, rgba(16, 16, 26, 1) 0%, rgba(16, 16, 26, 0.2) 100%)',
                    zIndex: 3 
                }}
            />
        </section>
    )
}

export default CTA