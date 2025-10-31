import bgImg from '@/assets/images/bg/07.jpg'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
  return (
    <div
      className="bg-overlay-dark-7 py-7"
      style={{ background: `url(${bgImg.src}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center center' }}>
      <Container>
        <Row className="all-text-white">
          <Col md={12} className="align-items-center d-flex justify-content-between">
            <div>
              <h1 className="fw-bold">Team</h1>
              <h6 className="subtitle">We are a creative studio focusing on branding &amp; web design</h6>
            </div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item active">
                  <Link href="/">
                    <i className="ti-home" /> Home
                  </Link>
                </li>
                <li className="breadcrumb-item">Team</li>
              </ol>
            </nav>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero
