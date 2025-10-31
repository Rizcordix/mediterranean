import service1 from '@/assets/images/service/01.jpg'
import service2 from '@/assets/images/service/02.jpg'
import service3 from '@/assets/images/service/03.jpg'
import service4 from '@/assets/images/service/04.jpg'
import Image from 'next/image'
import { teamData } from '../data'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Team = () => {
  return (
    <section>
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col md={6}>
            <h2 className="h1">
              We’re good,
              <br />
              Just ask our moms.
            </h2>
            <h5 className="mt-4">Crafting visually stunning memorable experiences for web and interfaces.</h5>
            <p>
              We have built a robust team, which is capable of delivering best quality of services when it comes to website-design, Website
              development, mobile application, content and digital marketing
            </p>
            <Link href="" className="btn btn-grad">
              Purchase Now!
            </Link>
          </Col>
          <Col md={6}>
            <Row className="mt-4 mt-md-0">
              <Col xs={7} className="ps-5 pe-2 mb-3">
                <Image
                  className="rounded aos"
                  data-aos="fade-right"
                  data-aos-delay={200}
                  data-aos-duration={1000}
                  data-aos-easing="ease-in-out"
                  src={service2}
                  alt="service"
                />
              </Col>
              <Col xs={5} className="align-self-end ps-2 mb-3">
                <Image className="rounded aos" data-aos="fade-down" data-aos-delay={200} data-aos-duration={1000} src={service4} alt="service" />
              </Col>
              <Col xs={5} className="offset-1 ps-5 pe-2 mb-3">
                <Image className="rounded aos" data-aos="fade-up" data-aos-delay={300} data-aos-duration={1500} src={service3} alt="service" />
              </Col>
              <Col xs={5} className="px-2 mb-3">
                <Image className="rounded aos" data-aos="fade-left" data-aos-delay={300} data-aos-duration={1500} src={service1} alt="service" />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-3 mt-md-5">
          {teamData.map((item, idx) => (
            <Col sm={6} lg={3} className="mt-5 mt-lg-0" key={idx}>
              <h6 className="text-primary">0{idx + 1}</h6>
              <h4 className="mb-2">{item.title}</h4>
              <p>{item.description}</p>
              <ul className="list-unstyled primary-hover fw-bold">
                {item.subTitle.map((title, idx) => (
                  <li key={idx}>
                    <Link href="">{title}</Link>{' '}
                  </li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Team
