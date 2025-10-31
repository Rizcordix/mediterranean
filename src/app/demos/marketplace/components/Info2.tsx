import Image from 'next/image'
import React from 'react'
import mockups from '@/assets/images/mockups/02.png'
import { Col, Container, Row } from 'react-bootstrap'

const Info2 = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col md={6} lg={4} className="align-self-center">
            <h6 className="bg-grad p-2 rounded d-inline-block text-white">Explore Offers</h6>
            <h2>Discover fixed price offers.</h2>
            <p>
              A thing that looks beautiful and attractive always grabs eyeballs. The real challenge before companies in today&apos;s world is to make
              their products and services appealing to everyone. It can be the packaging of an item or the design of its website and Applications.
            </p>
          </Col>
          <Col md={6} lg={8}>
            <Image src={mockups} alt="mockups" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Info2
