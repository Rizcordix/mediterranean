import flyScreen from '@/assets/images/mockups/fly-screen.png'
import Image from 'next/image'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Features = () => {
  return (
    <section>
      <Container>
        <Row className="g-0 justify-content-between align-items-center">
          <Col md={6}>
            <h2 className="h1 fw-bold">Start off on the right foot</h2>
            <h5>Crafting visually stunning memorable experiences for web and interfaces.</h5>
            <p>We have a strong foundation built on legacy and emerging technologies, including excellent track record of on-time deliveries.</p>
            <p>
              We provide digital transformation solutions, enabling companies to make their visions reality. With us at your side, you will find the
              IT solution to achieve your strategic and financial goals.
            </p>
            <div className="progress-text-in progress-grad my-4">
              <div>
                <div className="progress-item">
                  <p>Positive reviews</p>
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
            </div>
            <Button variant="dark" className="btn btn-dark text-start mb-md-0 mb-2 ">
              <div className="d-flex align-items-center">
                <span className="fab fa-android fa-2x me-3" />
                <span className="d-block">
                  <span className="d-block small">Get it on</span>
                  <strong className="d-block">Google Play</strong>
                </span>
              </div>
            </Button>
            &nbsp;
            <Button variant="dark" className="btn btn-dark text-start mb-md-0 mb-2 ">
              <div className="d-flex align-items-center">
                <span className="fab fa-apple fa-2x me-3" />
                <span className="d-block">
                  <span className="d-block small">Download from</span>
                  <strong className="d-block">App Store</strong>
                </span>
              </div>
            </Button>
          </Col>
          <Col md={6}>
            <Image src={flyScreen} alt="flyScreen" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Features
