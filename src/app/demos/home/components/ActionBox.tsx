import React from 'react'
import bg5Img from '@/assets/images/bg/05.jpg'
import { Col, Container, Row } from 'react-bootstrap'

const ActionBox = () => {
  return (
    <section className="p-0">
      <Container>
        <Row className="g-0 rounded overflow-hidden">
          <Col lg={6} className="d-none d-lg-block bg-light" style={{ background: `url(${bg5Img.src}) no-repeat`, backgroundSize: 'cover' }}></Col>
          <Col lg={6} md={12} className="bg-grad px-4 py-5 p-lg-5 all-text-white">
            <div className="h-100">
              <div className="title text-start p-0">
                <span className="pre-title">Why you should trust us?</span>
                <h2>We Provide the best solutions for your business needs!</h2>
                <p>
                  Amounted old strictly but Marianne admitted. People former is remove remain as. Admiration instrument affronting invitation
                  reasonably up do of prosperous in shy saw declared age debating ecstatic man call in so want pure rank am dear were remarkably to
                  continuing on.{' '}
                </p>
              </div>
              <Row>
                <Col>
                  <ul className="list-group list-group-borderless text">
                    <li className="list-group-item text-white d-flex">
                      <i className="fa fa-check mt-1" />
                      Maintained Windows Servers
                    </li>
                    <li className="list-group-item text-white d-flex">
                      <i className="fa fa-check mt-1" />
                      Supported Windows workstations
                    </li>
                    <li className="list-group-item text-white d-flex">
                      <i className="fa fa-check mt-1" />
                      Setup a rotation schedule
                    </li>
                    <li className="list-group-item text-white d-flex">
                      <i className="fa fa-check mt-1" />
                      Designed machines/server
                    </li>
                  </ul>
                </Col>
                <Col>
                  <ul className="list-group list-group-borderless text">
                    <li className="list-group-item text-white d-flex">
                      <i className="fa fa-check mt-1" />
                      Configured backups
                    </li>
                    <li className="list-group-item text-white d-flex">
                      <i className="fa fa-check mt-1" />
                      Setup a rotation schedule
                    </li>
                    <li className="list-group-item text-white d-flex">
                      <i className="fa fa-check mt-1" />
                      Windows workstations Supported
                    </li>
                    <li className="list-group-item text-white d-flex">
                      <i className="fa fa-check mt-1" />
                      Windows Servers Maintained
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ActionBox
