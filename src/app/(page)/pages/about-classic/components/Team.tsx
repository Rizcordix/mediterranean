import Image from 'next/image'
import Link from 'next/link'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { teamData } from '../data'

const Team = () => {
  return (
    <section className="team social-hover team-overlay pb-0">
      <Container>
        <Row>
          <Col xs={12} lg={8} className="mx-auto">
            <div className="title text-center">
              <span className="pre-title">They are all professionals</span>
              <h2>Creative Team and founders</h2>
            </div>
          </Col>
        </Row>
        <Row>
          {teamData.map((item, idx) => (
            <Col sm={6} md={3} key={idx}>
              <div className="team-item text-center">
                <div className="team-avatar">
                  <Image src={item.image} alt="Team" />
                </div>
                <div className="team-desc">
                  <h5 className="team-name">{item.name}</h5>
                  <span className="team-position">{item.category}</span>
                  <p>{item.description}</p>
                  <ul className="social-icons si-colored-on-hover">
                    <li className="social-icons-item social-facebook">
                      <Link href="" className="social-icons-link">
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li className="social-icons-item social-instagram">
                      <Link href="" className="social-icons-link">
                        <i className="fab fa-instagram" />
                      </Link>
                    </li>
                    <li className="social-icons-item social-twitter">
                      <Link href="" className="social-icons-link">
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Row>
          <Col xs={12} lg={8} className="mx-auto text-center mt-5">
            <h6>We are hiring! Join our team Creative Agency Specializing in: Video Production, Web Design, Branding, Brand Strategy.</h6>
            <Button variant="grad">Apply now!</Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Team
