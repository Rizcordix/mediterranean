import React from 'react'
import bgImg from '@/assets/images/bg/03.jpg'
import { Col, Container, Row } from 'react-bootstrap'

const ActionBox = () => {
  return (
    <section
      className="about-newsletter bg-overlay-dark-8 bg-parallax"
      style={{ background: `url(${bgImg.src}) center center`, backgroundSize: 'cover' }}>
      <Container>
        <Row>
          <Col xs={12} lg={8} className="mx-auto">
            <div className="title title-light text-center">
              <span className="pre-title">Stay connected </span>
              <h2>Subscribe to our newsletter to receive exclusive offers</h2>
            </div>
          </Col>
          <Col xs={12} lg={5} md={8} className="mx-auto text-center">
            <form>
              <div className="input-group">
                <input
                  className="form-control rounded-start border-end-0 bg-transparent text-white m-0"
                  type="text"
                  name="search"
                  placeholder="Enter your email..."
                />
                <button type="button" className="btn btn-grad m-0">
                  Subscribe now!
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ActionBox
