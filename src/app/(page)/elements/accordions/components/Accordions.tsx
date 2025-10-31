import React from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Container, Row } from 'react-bootstrap'
import { accordionsData } from '../data'

const DefaultAccordion = () => {
  return (
    <Col md={6} className="mb-5">
      <h5 className="mb-3">Accordion Default</h5>
      <Accordion defaultActiveKey={'0'} id="accordionExample">
        {accordionsData.map((item, idx) => (
          <AccordionItem eventKey={`${idx}`} key={idx}>
            <AccordionHeader as={'h2'} id="headingOne">
              {item.title}
            </AccordionHeader>
            <AccordionBody>{item.description}</AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </Col>
  )
}

const AccordionColor = () => {
  return (
    <Col md={6} className="mb-5">
      <h5 className="mb-3">Accordion primary color</h5>
      <Accordion defaultActiveKey={'0'} className="accordion-icon-primary" id="accordionExample2">
        {accordionsData.map((item, idx) => (
          <AccordionItem eventKey={`${idx}`} className="accordion-item" key={idx}>
            <AccordionHeader id="heading4">{item.title}</AccordionHeader>
            <AccordionBody>{item.description}</AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </Col>
  )
}

const AccordionGradient = () => {
  return (
    <Col md={6} className="mb-5">
      <h5 className="mb-3">Accordion gradient</h5>
      <Accordion defaultActiveKey={'0'} className="accordion-icon-gradient" id="accordionExample3">
        {accordionsData.map((item, idx) => (
          <AccordionItem eventKey={`${idx}`} key={idx}>
            <AccordionHeader as={'h2'} id="heading7">
              {item.title}
            </AccordionHeader>
            <AccordionBody>{item.description}</AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </Col>
  )
}

const AccordionLine = () => {
  return (
    <Col md={6} className="mb-5">
      <h5 className="mb-3">Accordion line</h5>
      <Accordion defaultActiveKey={'0'} className="accordion-line toggle-icon-left toggle-icon-round" id="accordionExample4">
        {accordionsData.map((item, idx) => (
          <AccordionItem eventKey={`${idx}`} key={idx}>
            <AccordionHeader as={'h2'} id="heading10">
              {item.title}
            </AccordionHeader>
            <AccordionBody>{item.description}</AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </Col>
  )
}

const AccordionDark = () => {
  return (
    <Col md={6} className="mb-5">
      <h5 className="mb-3">Accordion Dark</h5>
      <Accordion defaultActiveKey={'0'} className="accordion-icon-dark" id="accordionExample5">
        {accordionsData.map((item, idx) => (
          <AccordionItem key={idx} eventKey={`${idx}`}>
            <AccordionHeader as={'h2'} id="heading13">
              {item.title}
            </AccordionHeader>
            <AccordionBody>{item.description}</AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </Col>
  )
}

const Accordions = () => {
  return (
    <section className="pb-0">
      <Container>
        <Row>
          <DefaultAccordion />
          <AccordionColor />
          <AccordionGradient />
          <AccordionLine />
          <AccordionDark />
        </Row>
      </Container>
    </section>
  )
}

export default Accordions
