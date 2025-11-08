'use client'
import portfolioBg from '@/assets/images/banner/portfolio-bg.jpg'
import dynamic from 'next/dynamic'
const TinySlider = dynamic(() => import('@/components/TinySlider'), { ssr: false })
import Image from 'next/image'
import { TinySliderSettings } from 'tiny-slider'
import { companyData, testimonialsData } from '../data'

// image
import clients1 from '@/assets/images/clients/01.png'
import clients2 from '@/assets/images/clients/02.png'
import clients3 from '@/assets/images/clients/03.png'
import clients4 from '@/assets/images/clients/04.png'
import clients5 from '@/assets/images/clients/05.png'
import clients6 from '@/assets/images/clients/06.png'
import clients7 from '@/assets/images/clients/07.png'
import clients8 from '@/assets/images/clients/08.png'
import logoImg from '@/assets/images/medi_logo2.png'

const GlightBox = dynamic(() => import('@/components/GlightBox'), { ssr: false })
import { renderToString } from 'react-dom/server'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'
import { currentYear } from '@/context/constants'

const Testimonials = () => {
  const courseSliderSettings: TinySliderSettings = {
    arrowKeys: true,
    gutter: 30,
    autoplayButtonOutput: false,
    nested: 'inner',
    autoplay: true,
    controls: false,
    mouseDrag: true,
    edgePadding: 2,
    loop: true,
    items: 1,
    nav: false,
    responsive: {
      1: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 2,
      },
    },
  }
  return (
    <Col md={12} className="testimonials testimonials-border">
      <div className="tiny-slider">
        <TinySlider settings={courseSliderSettings} className="testi-full">
          {testimonialsData.map((item, idx) => (
            <div className="item" key={idx}>
              <div className="testimonials-wrap">
                <div className="testi-text">
                  <p>{item.description}</p>
                  <div className="testi-avatar">
                    {' '}
                    <Image src={item.avatar} alt="avatar" />{' '}
                  </div>
                  <h6 className="mb-0 mt-3">{item.name}</h6>
                  <h6 className="small">{item.role}</h6>
                </div>
              </div>
            </div>
          ))}
        </TinySlider>
      </div>
    </Col>
  )
}

const ProfessionalSkill = () => {
  return (
    <Col sm={12} className="py-5">
      <div className="title mb-0">
        <h2>My professional skill</h2>
        <p className="m-0">
          {' '}
          On he of played he ladies answer little though nature. Blessing oh do pleasure as so formerly. Took four spot soon led size you. Outlived it
          received he material.
        </p>
      </div>
      <div className="progress-dark progress-sm">
        <div>
          <div className="progress-item">
            <p>Web Design</p>
            <div className="progress">
              <div
                className="progress-bar aos aos-init"
                data-aos="slide-right"
                data-aos-delay={200}
                data-aos-duration={1000}
                data-aos-easing="ease-in-out"
                role="progressbar"
                aria-valuenow={85}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: '85%' }}>
                <span className="progress-percent">85%</span>
              </div>
            </div>
          </div>
          <div className="progress-item">
            <p>Web Development</p>
            <div className="progress">
              <div
                className="progress-bar aos aos-init"
                data-aos="slide-right"
                data-aos-delay={200}
                data-aos-duration={1000}
                data-aos-easing="ease-in-out"
                role="progressbar"
                aria-valuenow={70}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: '70%' }}>
                <span className="progress-percent">70%</span>
              </div>
            </div>
          </div>
          <div className="progress-item">
            <p>Graphic Design</p>
            <div className="progress">
              <div
                className="progress-bar aos aos-init"
                data-aos="slide-right"
                data-aos-delay={400}
                data-aos-duration={1000}
                data-aos-easing="ease-in-out"
                role="progressbar"
                aria-valuenow={90}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: '90%' }}>
                <span className="progress-percent">90%</span>
              </div>
            </div>
          </div>
          <div className="progress-item">
            <p>WordPress</p>
            <div className="progress">
              <div
                className="progress-bar aos aos-init"
                data-aos="slide-right"
                data-aos-delay={500}
                data-aos-duration={1000}
                data-aos-easing="ease-in-out"
                role="progressbar"
                aria-valuenow={65}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: '65%' }}>
                <span className="progress-percent">65%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Col>
  )
}

const Clients = () => {
  const clients = [clients1, clients2, clients3, clients4, clients5, clients6, clients7, clients8]

  const courseSliderSettings: TinySliderSettings = {
    arrowKeys: true,
    gutter: 30,
    autoplayButtonOutput: false,
    nested: 'inner',
    autoplay: true,
    controls: true,
    controlsText: [renderToString(<i className="fas fa-chevron-left" />), renderToString(<i className="fas fa-chevron-right" />)],
    edgePadding: 2,
    mouseDrag: true,
    loop: true,
    items: 1,
    nav: false,
    responsive: {
      1: {
        items: 2,
      },
      576: {
        items: 3,
      },
      768: {
        items: 3,
      },
      992: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  }
  return (
    <Row className="mt-4">
      <Col xs={12}>
        <div className="bg-light p-4 p-lg-5 rounded text-center">
          <div className="tiny-slider arrow-dark arrow-hover">
            <TinySlider settings={courseSliderSettings}>
              {clients.map((client, idx) => (
                <div key={idx} className="item">
                  <Image className="w-75 mx-auto" src={client} alt="client" />
                </div>
              ))}
            </TinySlider>
          </div>
        </div>
      </Col>
    </Row>
  )
}

const Footer = () => {
  return (
    <footer className="col-sm-12 col-lg-8 mx-auto py-5 text-center">
      <Link href="/" className="footer-logo">
        <Image src={logoImg} alt="logo" className="footer-logo-item" />
      </Link>
      <h3 className="alt-font fw-normal fst-italic mt-3">Larexa personal portfolio template</h3>
      <p>On in so indeed spirit an mother. Amounted old strictly but Marianne admitted. People former is remove remain as. </p>
      <p className="mt-3">
        ©{currentYear} All Rights Reserved by <Link href=""> Larexa.</Link>
      </p>
      <ul className="social-icons si-colored-bg light">
        <li className="social-icons-item social-facebook">
          <Link className="social-icons-link" href="">
            <i className="fab fa-facebook-f" />
          </Link>
        </li>
        <li className="social-icons-item social-instagram">
          <Link className="social-icons-link" href="">
            <i className="fab fa-instagram" />
          </Link>
        </li>
        <li className="social-icons-item social-twitter">
          <Link className="social-icons-link" href="">
            <i className="fab fa-twitter" />
          </Link>
        </li>
        <li className="social-icons-item social-youtube">
          <Link className="social-icons-link" href="">
            <i className="fab fa-youtube" />
          </Link>
        </li>
        <li className="social-icons-item social-vimeo">
          <Link className="social-icons-link" href="">
            <i className="fab fa-vimeo-v" />
          </Link>
        </li>
      </ul>
    </footer>
  )
}

const PortfolioHome = () => {
  return (
    <section className="p-0 d-flex align-items-center personal-portfolio">
      <Container fluid>
        <Row>
          <Col
            xs={12}
            md={5}
            lg={4}
            className="personal-portfolio-profile"
            style={{
              background: `url(${portfolioBg.src}) no-repeat`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center top',
              backgroundSize: 'cover',
              backgroundAttachment: 'scroll',
              zIndex: 0,
            }}>
            <div className="p-3 p-xl-5 all-text-white portfolio-info">
              <h2 className="alt-font display-5 fst-italic">Howdy, I&apos;m Neyton</h2>
              <p>
                My name is Neyton Troxell and I am a professional blogger. Working with world top agency for the first year it was mainly for fun, but
                then I began to take it more seriously.
              </p>
              <div className="btn btn-grad btn-round zoom-on-hover">
                <GlightBox data-glightbox href="https://youtu.be/n_Cn8eFo7u8">
                  {' '}
                  <i className="fa fa-play text-white" />{' '}
                </GlightBox>
              </div>
            </div>
          </Col>
          <Col xs={12} md={7} lg={8} className="personal-portfolio-main offset-md-5 offset-lg-4 position-relative">
            <Row className="mx-auto">
              <Col sm={12}>
                <h2 className="display-4 mt-5 fw-bold">
                  Hey, <br />
                  Look At
                  <br /> My Work.
                </h2>
                <h3>In order to be irreplaceable one must always be different.</h3>
                <p>
                  Placing assured be if removed it besides on. Far shed each high read are men over day. Afraid we praise lively he suffer family
                  estate is. Ample order up in of in ready. Timed blind had now those ought set often which.
                </p>
              </Col>
              <Col sm={12}>
                <div className="portfolio portfolio-style-2 w-100">
                  <div className="portfolio-wrap grid items-3 items-padding-inside">
                    {companyData.map((item, idx) => (
                      <div className="portfolio-card isotope-item" key={idx}>
                        <div className="portfolio-card-body">
                          <div className="portfolio-card-header">
                            <Image src={item.image} alt="img" />
                          </div>
                          <div className="portfolio-card-footer">
                            <GlightBox className="full-screen" href={`${item.image.src}`} data-glightbox data-gallery="portfolio">
                              <i className="ti-fullscreen" />
                            </GlightBox>
                            <h6 className="info-title">
                              <Link href="">{item.title}</Link>
                            </h6>
                            <p>{item.category}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Col>
              <ProfessionalSkill />
              <Col xs={12}>
                <div className="title">
                  <h2>Clients Testimonials</h2>
                  <p className="m-0">
                    Afraid we praise lively he suffer family estate is. Ample order up in of in ready. Timed blind had now those ought set often
                    which. Or snug dull he show more true wish.{' '}
                  </p>
                </div>
              </Col>
              <Testimonials />
              <Clients />
              <Footer />
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default PortfolioHome
