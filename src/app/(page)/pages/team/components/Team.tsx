import React from 'react'
import { teamData } from '../data'
import Image from 'next/image'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Team = () => {
  return (
    <section className="team social-hover team-overlay">
      <Container>
        <Row>
          {teamData.map((item, idx) => (
            <Col xs={12} sm={3} md={3} key={idx}>
              <div className="team-item text-center">
                <div className="team-avatar">
                  <Image src={item.image} alt="team" />
                </div>
                <div className="team-desc">
                  <h5 className="team-name">{item.name}</h5>
                  <span className="team-position">{item.position}</span>
                  <p>{item.description}</p>
                  <ul className="social-icons si-colored-on-hover">
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
