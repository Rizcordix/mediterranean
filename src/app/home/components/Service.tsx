'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      leftColumn: {
        icon: 'ti-pencil',
        title: 'Book Writing',
        description: 'Transform your ideas into compelling narratives with our professional book writing services. Our experienced writers craft engaging stories across all genres, bringing your vision to life with creativity and precision.',
        link: '/services/bookwriting'
      },
      middleColumn: [
        {
          icon: 'ti-headphone-alt',
          title: 'Audio Books',
          description: 'Expand your reach with professional audiobook production. We provide high-quality narration and sound engineering to create immersive audio experiences that captivate listeners across all platforms.',
          link: '/services/audio-books'
        },
        {
          icon: 'ti-book',
          title: 'eBook Ghostwriting',
          description: 'Your ideas deserve to be told. Our professional ghostwriters transform your concepts into polished eBooks, maintaining your unique voice while delivering exceptional quality and confidentiality.',
          link: '/services/ebook-ghostwriting'
        }
      ],
      rightColumn: [
        {
          icon: 'ti-write',
          title: 'Blog Writing',
          description: 'Build your author platform with compelling blog content. Our bespoke blog writing services help you connect with readers, establish authority, and grow your audience through engaging, SEO-optimized content.',
          highlight: true,
          link: '/services/blog-writing'
        },
        {
          icon: 'ti-direction-alt',
          title: 'Book Marketing',
          description: 'Connect your masterpiece with eager readers. Our targeted marketing strategies leverage social media, email campaigns, and promotional tactics to maximize your book\'s visibility and sales.',
          link: '/services/book-marketing'
        }
      ]
    },
    {
      id: 2,
      leftColumn: {
        icon: 'ti-printer',
        title: 'Book Printing',
        description: 'Bring your book to physical life with our affordable, high-quality printing solutions. From paperback to hardcover, we offer flexible options to meet your publishing needs and budget.',
        link: '/services/book-printing'
      },
      middleColumn: [
        {
          icon: 'ti-palette',
          title: 'Book Illustration',
          description: 'Enhance your narrative with stunning custom illustrations. Our talented artists create beautiful, professional artwork that complements your story and captures readers\' imaginations.',
          link: '/services/book-illustration'
        },
        {
          icon: 'ti-layout',
          title: 'Cover Design',
          description: 'Make a powerful first impression with stunning book cover designs. Our designers create eye-catching covers that capture your book\'s essence and stand out in crowded marketplaces.',
          link: '/services/cover-design'
        }
      ],
      rightColumn: [
        {
          icon: 'ti-video-camera',
          title: 'Book Video Trailer',
          description: 'Captivate potential readers with cinematic book trailers. Our creative team produces engaging video content that brings your story to life, perfect for social media and promotional campaigns.',
          highlight: true,
          link: '/services/book-video-trailer'
        },
        {
          icon: 'ti-file',
          title: 'Article Publication',
          description: 'Establish your authority in your field through strategic article placement. We help you get published in reputable platforms, building credibility and expanding your professional presence.',
          link: '/services/article-publication'
        }
      ]
    },
    {
      id: 3,
      leftColumn: {
        icon: 'ti-world',
        title: 'Web Design SEO',
        description: 'Build your online presence with beautiful, search-optimized websites. We create professional author websites that showcase your work, engage readers, and rank well in search engines.',
        link: '/services/web-design-seo'
      },
      middleColumn: [
        {
          icon: 'ti-paragraph',
          title: 'Website Content Writing',
          description: 'Fuel your online presence with compelling content. Our writers create engaging web copy that resonates with your audience, improves SEO, and converts visitors into loyal readers.',
          link: '/services/website-content-writing'
        },
        {
          icon: 'ti-light-bulb',
          title: 'Creative Consulting',
          description: 'Navigate your publishing journey with expert guidance. Our consultants provide strategic advice on manuscript development, market positioning, and career planning for authors.',
          link: '/services/creative-consulting'
        }
      ],
      rightColumn: [
        {
          icon: 'ti-star',
          title: 'Publishing Packages',
          description: 'Get everything you need in one comprehensive solution. Our all-inclusive packages combine writing, editing, design, and marketing services for a seamless publishing experience.',
          highlight: true,
          link: '/services/publishing-packages'
        },
        {
          icon: 'ti-medall',
          title: 'Premium Support',
          description: 'Receive dedicated support throughout your publishing journey. Our team provides personalized assistance, answering questions and ensuring your project stays on track from start to finish.',
          link: '/services/premium-support'
        }
      ]
    }
  ]

  const totalSlides = slides.length

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="pb-3">
      <div className="container">
        {/* Desktop/Tablet View - Original 3 Column Layout */}
        <div className="d-none d-md-block">
          <div className="row">
            <div className="col-md-4">
              <h5 className="text-primary">Our services</h5>
              <h2 className="h1">Complete Book Publishing Solutions</h2>
              <p>
                From manuscript to marketing, we provide comprehensive publishing services to bring your literary vision to life. Partner with us for professional, personalized solutions tailored to your unique needs.
              </p>
              <div className="bg-light p-4 p-lg-5">
                <span className="display-5 icon-primary">
                  <i className={slides[currentSlide].leftColumn.icon} />
                </span>
                <h5>{slides[currentSlide].leftColumn.title}</h5>
                <p className="mb-0">
                  {slides[currentSlide].leftColumn.description}
                </p>
                <Link
                          href={slides[currentSlide].leftColumn.link}
                          className={`read-more mt-3 d-inline-block text-decoration-none fw-bold text-primary`}
                          >
                         Read More &rarr;
                      </Link>   
              </div>
            </div>
            <div className="col-md-4 mt-5">
              {slides[currentSlide].middleColumn.map((service, index) => (
                <div className="bg-light p-4 p-lg-5 mb-5" key={index}>
                  <span className="display-5 icon-primary">
                    <i className={service.icon} />
                  </span>
                  <h5>{service.title}</h5>
                  <p className="mb-0">
                    {service.description}
                  </p>
                  <Link
                          href={service.link}
                          className={`read-more mt-3 d-inline-block text-decoration-none fw-bold text-primary`}
                          >
                         Read More &rarr;
                      </Link>   
                </div>
              ))}
            </div>
            <div className="col-md-4">
              {slides[currentSlide].rightColumn.map((service, index) => (
                <div 
                  className={`${service.highlight ? 'bg-grad all-text-white' : 'bg-light'} p-4 p-lg-5 mb-5`} 
                  key={index}
                >
                  <span className={`display-5 ${service.highlight ? 'icon-white' : 'icon-primary'}`}>
                    <i className={service.icon} />
                  </span>
                  <h5>{service.title}</h5>
                  <p className="mb-0">
                    {service.description}
                  </p>
                  <Link
                          href={service.link}
                          className={`read-more mt-3 d-inline-block text-decoration-none fw-bold ${service.highlight ? 'text-white' : 'text-primary'}`}
                          >
                         Read More &rarr;
                      </Link>   
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View - Slider with 2-3 cards per slide */}
        <div className="d-md-none">
          <div className="text-center mb-4">
            <h5 className="text-primary">Our services</h5>
            <h2 className="h1">Complete Book Publishing Solutions</h2>
            <p>
              From manuscript to marketing, we provide comprehensive publishing services to bring your literary vision to life.
            </p>
          </div>
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <div 
              style={{
                display: 'flex',
                transition: 'transform 0.3s ease-in-out',
                transform: `translateX(-${currentSlide * 100}%)`
              }}
            >
              {slides.map((slide) => (
                <div key={slide.id} style={{ minWidth: '100%' }}>
                  <div className="bg-light p-4 mb-4">
                    <span className="display-5 icon-primary">
                      <i className={slide.leftColumn.icon} />
                    </span>
                    <h5>{slide.leftColumn.title}</h5>
                    <p className="mb-0">
                      {slide.leftColumn.description}
                    </p>
                  </div>
                  {slide.middleColumn.map((service, index) => (
                    <div className="bg-light p-4 mb-4" key={index}>
                      <span className="display-5 icon-primary">
                        <i className={service.icon} />
                      </span>
                      <h5>{service.title}</h5>
                      <p className="mb-0">
                        {service.description}
                      </p>
                      <Link
                          href={service.link}
                          className={`read-more mt-3 d-inline-block text-decoration-none fw-bold text-primary`}
                          >
                         Read More &rarr;
                      </Link>   
                    </div>
                  ))}
                  {slide.rightColumn.map((service, index) => (
                    <div 
                      className={`${service.highlight ? 'bg-grad all-text-white' : 'bg-light'} p-4 mb-4`} 
                      key={index}
                    >
                      <span className={`display-5 ${service.highlight ? 'icon-white' : 'icon-primary'}`}>
                        <i className={service.icon} />
                      </span>
                      <h5>{service.title}</h5>
                      <p className="mb-0">
                        {service.description}
                      </p>
                        <Link
                          href={service.link}
                          className={`read-more mt-3 d-inline-block text-decoration-none fw-bold ${service.highlight ? 'text-white' : 'text-primary'}`}
                          >
                         Read More &rarr;
                      </Link>                      
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="row mt-4">
          <div className="col-12 text-center">
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', alignItems: 'center' }}>
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  style={{
                    width: currentSlide === index ? '32px' : '12px',
                    height: '12px',
                    borderRadius: '6px',
                    border: 'none',
                    backgroundColor: currentSlide === index ? '#364a52' : '#dee2e6',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    padding: 0
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .bg-grad {
          background: linear-gradient(135deg, #364a52 0%, #0f252f 100%);
        }
        .icon-primary {
          color: #364a52;
        }
        .icon-white {
          color: #ffffff;
        }
        .all-text-white,
        .all-text-white h5,
        .all-text-white p {
          color: #ffffff !important;
        }

        .all-text-white,
        .all-text-white h5,
        .all-text-white p {
          color: #ffffff !important;
        }

        /* Styling for Read More link */
        .read-more {
          color: #364a52; /* Default color for non-highlighted */
          transition: transform 0.2s ease-in-out, color 0.2s ease-in-out; /* Smooth transition for hover effects */
        }

        /* Hover effect for Read More link (non-highlighted) */
        .read-more:hover {
          transform: scale(1.05); /* Slight scale up */
          color: #0f252f; /* Darker primary color on hover */
        }

        /* Hover effect for Read More link (highlighted - inside bg-grad) */
        .all-text-white .read-more {
            color: #ffffff !important; /* Ensure it stays white initially */
        }

        .all-text-white .read-more:hover {
            transform: scale(1.05); /* Slight scale up */
            color: #d1d1d1 !important; /* Slightly off-white on hover */
        }
      `}</style>
    </section>
  )
}

export default Services