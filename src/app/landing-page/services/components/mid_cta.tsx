"use client"
import { Button, Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import type { CSSProperties } from 'react'
import { usePopup } from '@/components/wrappers/PopupContext'
import { useDiscountPopup } from '@/components/popup/DiscountPopupContext'
import background from '@/assets/images/cta/bgCTA.jpg'
import booksimage from '@/assets/images/cta/ctabooks.png'

const MidPageCTA = () => {
    const isMobile: { bookTransformMobile: CSSProperties } = {
      bookTransformMobile: {
        transform: 'scale(1.3) rotate(-15deg) skewY(-5deg) translate(-10%, -20%)',
        transformOrigin: '',
        opacity: 0.7,
        position: 'absolute',
        top: '40%',
        right: '-10%',
        left: 'auto',
        zIndex: 1, 
      }
    };

    const { openQuote } = usePopup();
    const { openDiscount } = useDiscountPopup();

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
                <Row className="align-items-center g-4 flex-column-reverse flex-lg-row"> 
                    
                    {/* Book Image Column */}
                    <Col lg={6} md={12} className="text-center text-lg-end order-lg-2">
                        <div className="position-relative d-inline-block w-100 h-100">
                            <Image
                                src={booksimage}
                                alt="Published books collection"
                                className="img-fluid d-none d-lg-block"
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
                                alt="Published books collection"
                                className="img-fluid d-lg-none"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    ...isMobile.bookTransformMobile
                                }}
                            />
                        </div>
                    </Col>

                    {/* Content Column */}
                    <Col lg={6} md={12} className="order-lg-1 text-center text-md-start">
                        <div className="text-white">
                            <h2
                                className="fw-bold mb-4"
                                style={{
                                    lineHeight: '1.2',
                                    color: '#ffffff',
                                    fontSize: 'clamp(2rem, 5vw, 3rem)'
                                }}
                            >
                                Ready to Publish<br />Your Book?
                            </h2>

                            <div className="mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                                <p className="mb-3">
                                    Your story deserves to be read.
                                </p>
                                <p 
                                    className="fw-semibold mb-0"
                                    style={{ color: '#b8ff57' }}
                                >
                                    In 90 days, you could be celebrating your published book.
                                </p>
                            </div>

                            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
                                <Button 
                                    onClick={openDiscount}
                                    variant="light"
                                    className="d-inline-flex align-items-center px-4 py-2"
                                    style={{
                                        borderRadius: '50px',
                                        fontWeight: '500',
                                        fontSize: '1rem',
                                        zIndex: 2
                                    }}
                                >
                                    Get Started Now
                                    <span className="ms-2">→</span>
                                </Button>

                                <Button
                                    onClick={openQuote}
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
                                    Request a Quote
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Bottom gradient fade */}
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

export default MidPageCTA