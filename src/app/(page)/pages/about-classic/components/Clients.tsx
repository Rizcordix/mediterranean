'use client'
import client1 from '@/assets/images/clients/01.png'
import client2 from '@/assets/images/clients/02.png'
import client3 from '@/assets/images/clients/03.png'
import client4 from '@/assets/images/clients/04.png'
import client5 from '@/assets/images/clients/05.png'
import client6 from '@/assets/images/clients/06.png'
import client7 from '@/assets/images/clients/07.png'
import client8 from '@/assets/images/clients/08.png'
import dynamic from 'next/dynamic'
const TinySlider = dynamic(() => import('@/components/TinySlider'), { ssr: false })
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import { TinySliderSettings } from 'tiny-slider'

const Clients = () => {
  const clients = [client1, client2, client3, client4, client5, client6, client7, client8]

  const courseSliderSettings: TinySliderSettings = {
    arrowKeys: true,
    gutter: 30,
    autoplayButtonOutput: false,
    nested: 'inner',
    autoplay: true,
    controls: false,
    edgePadding: 2,
    loop: true,
    mouseDrag: true,
    items: 1,
    nav: false,
    responsive: {
      1: {
        items: 2,
      },
      576: {
        items: 3,
      },
      768: {
        items: 4,
      },
      992: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  }
  return (
    <section className="client py-5">
      <Container>
        <Row>
          <Col md={12}>
            <div className="tiny-slider">
              <TinySlider settings={courseSliderSettings}>
                {clients.map((client, idx) => (
                  <div className="item" key={idx}>
                    <Image className="w-75" src={client} alt="client" />
                  </div>
                ))}
              </TinySlider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Clients
