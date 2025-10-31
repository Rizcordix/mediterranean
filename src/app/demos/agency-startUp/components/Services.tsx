import Image from 'next/image'
import React from 'react'
import blog3 from '@/assets/images/blog/03.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Services = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col md={6}>
            <Image className="rounded" src={blog3} alt="blog3" />
          </Col>
          <Col md={6} className="mt-4 mt-md-0">
            <h2 className="h1">Your technical partner towards web success.</h2>
            <p>
              Our friendly team members are always willing to help you understand your present technology requirements and provide suggestions on your
              future needs.
            </p>
            <ul className="list-group list-group-borderless list-group-icon-primary-bg mb-4">
              <li className="list-group-item">
                <i className="fa fa-check" /> Proven results as a recruitment consultant or strong sales experience
              </li>
              <li className="list-group-item">
                <i className="fa fa-check" /> Knowledge of the staffing industry
              </li>
              <li className="list-group-item">
                <i className="fa fa-check" /> Previous leadership experience, personally or professionally
              </li>
              <li className="list-group-item">
                <i className="fa fa-check" /> A strong desire to be successful and inspire people
              </li>
            </ul>
            <Link href="" className="btn btn-grad">
              Find out more!
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Services
