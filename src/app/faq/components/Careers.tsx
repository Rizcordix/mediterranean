import React from 'react'
import { careersData } from '../data'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Careers = () => {
  return (
    <section className="pb-3">
      <Container>
        <Row>
          <Col md={8} className="mb-5">
            <Accordion defaultActiveKey={'0'} className="accordion-icon-gradient" id="accordionExample3">
              {careersData.map((item, idx) => (
                <AccordionItem eventKey={`${idx}`} key={idx}>
                  <AccordionHeader as={'h2'} id="heading7">
                    {item.title}
                  </AccordionHeader>
                  <AccordionBody>{item.description}</AccordionBody>
                </AccordionItem>
              ))}
            </Accordion>
          </Col>
          <Col md={4} className="sidebar">
            <div className="widget bg-light p-3 border-0 rounded">
              <h4>Have any question? </h4>
              <p>
                If you need to send us mail regarding job opportunities, please write to us at{' '}
                <a className="text-primary" href="mailto:contact@example.com">
                  career@larexa.com
                </a>{' '}
                for more information.
              </p>{' '}
              or call us{' '}
              <Link className="display-8 text-dark primary-hover" href="">
                @(251) 854-6308
              </Link>
            </div>
            <div className="widget border-0">
              <div className="ratio ratio-16x9">
                <iframe width={560} height={315} src="https://www.youtube.com/embed/9No-FiEInLA" allow="autoplay; encrypted-media" allowFullScreen />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Careers
