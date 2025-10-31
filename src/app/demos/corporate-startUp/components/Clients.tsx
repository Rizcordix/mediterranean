'use client'
import React from 'react'
import { clientsData } from '../data'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'

const Clients = () => {
  return (
    <section className="service pt-0">
      <Container>
        <Row>
          <Col xs={12} lg={8} className="mx-auto">
            <div className="title text-center">
              <span className="pre-title">Welcome to our website</span>
              <h2>Your small business web design solution</h2>
              <p className="mb-0">
                We are an insight and behavior driven creative marketing agency. A Full Service Digital Creative Agency Specializing in: Video
                Production, Web Design, Branding, Brand Strategy
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          {clientsData.map((item, idx) => (
            <Col sm={6} md={3} key={idx}>
              <div className="feature-box h-100 text-center">
                <div className="feature-box-icon">
                  <Image className="w-50" src={item.image} alt="clients" />
                </div>
                <h3 className="feature-box-title">{item.title}</h3>
                <p className="feature-box-desc">{item.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Clients
