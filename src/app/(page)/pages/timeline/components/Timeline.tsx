import Image from 'next/image'
import React from 'react'
import service1 from '@/assets/images/service/01.jpg'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Timeline = () => {
  return (
    <section className="timeline-page">
      <Container>
        <Row>
          <Col md={8} className="text-center mx-auto">
            <h2 className="mb-2">Best solutions for your business!</h2>
            <p className="mb-5">
              A Full Service Digital Creative Agency Specializing in: Video Production, Web Design, Branding, Brand Strategy, Content Marketing and
              Aerial Cinematography.
            </p>
          </Col>
        </Row>
        <Row className="g-0">
          <div className="col-md"> </div>
          <Col md={1} className="text-center timeline-line flex-column d-none d-md-flex position-relative">
            <div className="timeline-dot" />
          </Col>
          <div className="col-md py-2">
            <Card>
              <CardBody>
                <div className="float-end small">Jan 9th</div>
                <h4 className="mb-2">Our services reflect our knowledge</h4>
                <p>
                  Larexa; an innovative Internet marketing solutions company that offers comprehensive web development, SMO services, SEO strategies
                  and various other types of Internet marketing related services.
                </p>
                <div className="list-group-number list-unstyled list-group-borderless">
                  <Link href="" className="list-group-item list-group-item-action">
                    <span>01</span> Creative Ideas
                  </Link>
                  <Link href="" className="list-group-item list-group-item-action">
                    <span>02</span> Super Responsive for all devices
                  </Link>
                  <Link href="" className="list-group-item list-group-item-action">
                    <span>03</span> Extensive documentation
                  </Link>
                  <Link href="" className="list-group-item list-group-item-action">
                    <span>04</span> Excellent features
                  </Link>
                </div>
              </CardBody>
            </Card>
          </div>
        </Row>
        <Row className=" g-0">
          <div className="col-md py-2">
            <Card>
              <CardBody>
                <div className="float-end small">Jan 10th</div>
                <h4 className="mb-2">An Idea Will Make You Tons Of Cash. Here&apos;s How!</h4>
                <p className="mb-0">Sign-up for the lessons and speakers that coincide with your course syllabus. Meet and greet with instructors.</p>
              </CardBody>
              <Image className="img-fluid" src={service1} alt="service" />
            </Card>
          </div>
          <Col md={1} className="text-center timeline-line flex-column d-none d-md-flex position-relative">
            <div className="timeline-dot" />
          </Col>
          <div className="col-md" />
        </Row>
        <Row className="g-0">
          <div className="col-md"> </div>
          <Col md={1} className="text-center timeline-line flex-column d-none d-md-flex position-relative">
            <div className="timeline-dot" />
          </Col>
          <div className="col-md py-2">
            <Card>
              <CardBody>
                <div className="float-end small">Jan 11th</div>
                <h4 className="mb-2">Months had too ham cousin remove far spirit</h4>
              </CardBody>
              <div className="ratio ratio-16x9">
                <iframe src="https://player.vimeo.com/video/167434033?title=0&byline=0&portrait=0" width={640} height={360} allowFullScreen />
              </div>
            </Card>
          </div>
        </Row>
        <Row className="g-0">
          <div className="col-md py-2">
            <Card>
              <CardBody>
                <div className="float-end small">Jan 12th</div>
                <h4 className="mb-2">7 Great Lessons You Can Learn From Business</h4>
                <p>By expect it result silent in formal of. Ask eat questions abilities described elsewhere assurance. </p>
                <Accordion defaultActiveKey={'1'} className="accordion-line toggle-icon-left toggle-icon-round" id="accordionExample4">
                  <AccordionItem eventKey="1">
                    <AccordionHeader as={'h2'} id="heading10">
                      How many free samples can i redeem?
                    </AccordionHeader>
                    <AccordionBody>
                      Due to the limited quantity, each member&apos;s account is only entitled to 1 unique free sample. You can check out up to 4 free
                      samples in each checkout. We take such matters very seriously and will look into individual cases thoroughly.
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem eventKey="2">
                    <AccordionHeader as={'h2'} id="heading11">
                      What are the payment methods available?
                    </AccordionHeader>
                    <AccordionBody>
                      At the moment, we only accept Credit/Debit cards and Paypal payments. Paypal is the easiest way to make payments online. While
                      checking out your order. Be sure to fill in correct details for fast &amp; hassle-free payment processing.
                    </AccordionBody>
                  </AccordionItem>
                </Accordion>
              </CardBody>
            </Card>
          </div>
          <Col md={1} className="text-center timeline-line flex-column d-none d-md-flex position-relative">
            <div className="timeline-dot" />
          </Col>
          <div className="col-sm" />
        </Row>
      </Container>
    </section>
  )
}

export default Timeline
