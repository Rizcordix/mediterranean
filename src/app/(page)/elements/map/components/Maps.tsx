import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Maps = () => {
  return (
    <section>
      <Container>
        <Row className="justify-content-md-between">
          <Col xs={12} className="mb-6">
            <h4 className="mb-4">Classic google map iframe</h4>
            <iframe
              className="w-100"
              height={400}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sin!4v1586000412513!5m2!1sen!2sin"
              style={{ border: 0 }}
              aria-hidden="false"
              tabIndex={0}
            />
          </Col>
          <Col xs={12} className="mb-6">
            <h4 className="mb-4">Google map iframe grayscale</h4>
            <iframe
              className="w-100 grayscale"
              height={400}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sin!4v1586000412513!5m2!1sen!2sin"
              style={{ border: 0 }}
              aria-hidden="false"
              tabIndex={0}
            />
          </Col>
          <Col xs={12} className="mb-6">
            <h4 className="mb-4">Google map street view iframe</h4>
            <iframe
              className="w-100"
              src="https://www.google.com/maps/embed?pb=!4v1603544361754!6m8!1m7!1s0uXxMeiVzyEVWAsgy1a7hQ!2m2!1d40.75784575320788!2d-73.98546109982622!3f13.490392957984167!4f12.242615063013332!5f0.7820865974627469"
              height={600}
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            />
          </Col>
          <Col xs={12} className="mb-6">
            <h4 className="mb-4">Google map satellite view iframe</h4>
            <iframe
              className="w-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15252.615129475813!2d-73.99202714724588!3d40.7578457532079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e1!3m2!1sen!2sin!4v1603544485054!5m2!1sen!2sin"
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Maps
