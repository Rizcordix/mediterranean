import React from 'react'
import bgImg from '@/assets/images/bg/04.jpg'
import { Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
  return (
    <div
      className="innerpage-banner center bg-overlay-dark-7 py-7"
      style={{ background: `url(${bgImg.src}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center center' }}>
      <Container>
        <Row className="all-text-white">
          <Col md={8} lg={6} className="mx-auto text-center py-5">
            <h1 className="fw-bold">Frequntly Asked Questions</h1>
            <form className="bg-white my-2 my-md-4 p-2 w-100 rounded shadow">
              <div className="input-group">
                <input className="form-control rounded-start border-0 m-0" type="text" name="search" placeholder="Search your question..." />
                <button type="button" className="btn btn-grad m-0 rounded">
                  <span className="d-none d-md-block">Search</span>
                  <span className="d-md-none">
                    <i className="fa fa-search m-0" />
                  </span>
                </button>
              </div>
            </form>
            <h6 className="mb-0">We transform your perception into an excellent website</h6>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero
