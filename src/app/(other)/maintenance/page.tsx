import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const MaintenancePage = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg={8} className="mx-auto text-center">
            <h1 className="display-4 fw-bold text-grad">Something exciting is coming your way!</h1>
            <p>
              A Full package Digital Creative Agency Specializing in: Video Production, Web Design, Branding, Brand Strategy, Content Marketing and
              Aerial Cinematography. We are an insight and behavior driven creative marketing agency.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={6} className="mx-auto text-center">
            <div className="progress-text-in progress-grad mb-0 mb-md-4">
              <div className="progress-item">
                <p>Launch Progress</p>
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
            </div>
            <form className="mt-4">
              <p>Please subscribe to newsletter to get updates from us.</p>
              <div className="input-group">
                <input className="form-control bg-transparent rounded me-2 py-0 mb-0" type="text" placeholder="Enter your email..." />
                <button className="btn btn-dark rounded m-0">Notify me!</button>
              </div>
            </form>
            <ul className="social-icons round light si-colored-bg-on-hover text-center mt-5">
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
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default MaintenancePage
