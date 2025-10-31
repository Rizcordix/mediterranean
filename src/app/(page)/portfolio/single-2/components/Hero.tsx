import { Col, Container, Row } from 'react-bootstrap'
const Hero = () => {
  return (
    <div className="left pt-7">
      <Container>
        <Row className="all-text-white">
          <Col md={12} className="align-self-center">
            <h1 className="text-dark display-3 fw-bold">Interior design project</h1>
            <h6 className="text-dark">We transform your perception into an excellent website</h6>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero
