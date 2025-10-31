import React from 'react'
import client1 from '@/assets/images/clients/01.png'
import client2 from '@/assets/images/clients/02.png'
import client3 from '@/assets/images/clients/03.png'
import client4 from '@/assets/images/clients/04.png'
import client5 from '@/assets/images/clients/05.png'
import client6 from '@/assets/images/clients/06.png'
import client7 from '@/assets/images/clients/07.png'
import client8 from '@/assets/images/clients/08.png'
import client9 from '@/assets/images/clients/09.png'
import client10 from '@/assets/images/clients/10.png'
import client11 from '@/assets/images/clients/11.png'
import client12 from '@/assets/images/clients/12.png'
import client13 from '@/assets/images/clients/13.png'
import client14 from '@/assets/images/clients/14.png'
import client15 from '@/assets/images/clients/15.png'
import client16 from '@/assets/images/clients/16.png'
import client17 from '@/assets/images/clients/17.png'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'

const Client = () => {
  const clients = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
    client8,
    client9,
    client10,
    client11,
    client12,
    client13,
    client14,
    client15,
    client16,
    client17,
  ]

  return (
    <section>
      <Container>
        <Row className="text-center">
          <Col md={8} className="mx-auto">
            <h2 className="h1">Trusted by thousands</h2>
            <p className="mb-5">
              Remarkably to continuing in surrounded diminution on. In unfeeling existence objection immediate repulsive on he in. Imprudence
              comparison uncommonly me he difficulty diminution resolution.
            </p>
          </Col>
        </Row>
        <Row className="text-center justify-content-center">
          {clients.map((client, idx) => (
            <Col xs={4} md={2} key={idx} className="mb-5">
              <Image className="w-75" src={client} alt="client" />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Client
