import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Services = () => {
  return (
    <section className="pb-3">
      <Container>
        <Row>
          <Col md={4}>
            <h5 className="text-primary">Our services</h5>
            <h2 className="h1">Web wesign, Search engine optimization &amp; Online marketing.</h2>
            <p>
              Partnering with 100+ Fortune 500 companies and mid-sized firms across industries, experience the best in class, uniquely customized and
              scalable workforce solutions.
            </p>
            <div className="bg-light p-4 p-lg-5 ">
              <span className="display-5 icon-primary">
                <i className="ti-ruler-pencil" />
              </span>
              <h5>Graphic Design</h5>
              <p className="mb-0">
                We have a strong foundation built on legacy and emerging technologies, including excellent track record of on-time deliveries. We are
                emerging as one of the most promising private talent sourcing and management firms in the world.
              </p>
            </div>
          </Col>
          <Col md={4} className=" mt-5">
            <div className="bg-light p-4 p-lg-5 mb-5">
              <span className="display-5 icon-primary">
                <i className="ti-pencil-alt" />
              </span>
              <h5>Online Marketing</h5>
              <p className="mb-0">
                We provide digital transformation solutions, enabling companies to make their visions reality. With us at your side, you will find the
                IT solution to achieve your strategic and financial goals.
              </p>
            </div>
            <div className="bg-light p-4 p-lg-5 mb-5">
              <span className="display-5 icon-primary">
                <i className="ti-image" />
              </span>
              <h5>Live Site Builder</h5>
              <p className="mb-0">
                We provide digital transformation solutions, enabling companies to make their visions reality. With us at your side, you will find the
                IT solution to achieve your strategic and financial goals.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="bg-grad all-text-white p-4 p-lg-5 mb-5">
              <span className="display-5">
                <i className="ti-world icon-white" />
              </span>
              <h5>Ultra Performance</h5>
              <p className="mb-0">
                We provide digital transformation solutions, enabling companies to make their visions reality. With us at your side, you will find the
                IT solution to achieve your strategic and financial goals.
              </p>
            </div>
            <div className="bg-light p-4 p-lg-5 mb-5">
              <span className="display-5 icon-primary">
                <i className="ti-wallet" />
              </span>
              <h5>Premium Support</h5>
              <p className="mb-0">
                We provide digital transformation solutions, enabling companies to make their visions reality. With us at your side, you will find the
                IT solution to achieve your strategic and financial goals.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Services
