import React from 'react'
import { teamData } from '../data'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const TeamDefault = () => {
  return (
    <section className="team pb-0">
      <Container>
        <Row className="mb-5 text-center">
          <Col md={12}>
            <h4>Team Default</h4>
          </Col>
        </Row>
        <Row>
          {teamData.map((item, idx) => (
            <Col sm={6} md={3} key={idx}>
              <div className="team-item text-center">
                <div className="team-avatar">
                  <Image src={item.image} alt="team" />
                </div>
                <div className="team-desc">
                  <h5 className="team-name">{item.name}</h5>
                  <span className="team-position">{item.category}</span>
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
      </Container>
    </section>
  )
}

const TeamSocialHover = () => {
  return (
    <section className="team team-overlay social-hover">
      <Container>
        <Row className="mb-5 text-center">
          <Col md={12}>
            <h4>Team Social hover and overlay</h4>
          </Col>
        </Row>
        <Row>
          {teamData.map((item, idx) => (
            <Col sm={6} md={3} key={idx}>
              <div className="team-item hover-overlay text-center">
                <div className="team-avatar">
                  <Image src={item.image} alt="Team" />
                </div>
                <div className="team-desc">
                  <h5 className="team-name">{item.name}</h5>
                  <span className="team-position">{item.category}</span>
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
      </Container>
    </section>
  )
}

const TeamGrid = () => {
  return (
    <section className="team team-grid pt-0">
      <Container>
        <Row className="mb-5 text-center">
          <Col md={12}>
            <h4>Team Grid</h4>
          </Col>
        </Row>
        <Row>
          {teamData.map((item, idx) => (
            <Col sm={6} key={idx}>
              <div className="team-item">
                <div className="team-avatar">
                  <Image className="rounded" src={item.image} alt="Team" />
                </div>
                <div className="team-desc">
                  <h4 className="team-name">{item.name}</h4>
                  <span className="team-position">{item.category}</span>
                  <p>{item.description} </p>
                  <ul className="social-icons light si-colored-bg-on-hover no-pb">
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
      </Container>
    </section>
  )
}

const Teams = () => {
  return (
    <>
      <TeamDefault />
      <TeamSocialHover />
      <TeamGrid />
    </>
  )
}

export default Teams
