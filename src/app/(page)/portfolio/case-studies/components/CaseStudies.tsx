'use client'
import portfolio1 from '@/assets/images/portfolio/01.jpg'
import portfolio2 from '@/assets/images/portfolio/02.jpg'
import portfolio3 from '@/assets/images/portfolio/03.jpg'
import portfolio4 from '@/assets/images/portfolio/04.jpg'
import portfolio5 from '@/assets/images/portfolio/05.jpg'
import dynamic from 'next/dynamic'
const GlightBox = dynamic(() => import('@/components/GlightBox'), { ssr: false })
import Image from 'next/image'
import { Col, Row } from 'react-bootstrap'

const CaseStudies = () => {
  return (
    <>
      <Row className="mb-4" data-sticky-container>
        <Col md={6}>
          <GlightBox className="mb-4 d-block" href={portfolio1.src} data-glightbox data-gallery="portfolio">
            <Image src={portfolio1} alt="portfolio" />
          </GlightBox>
          <GlightBox className="mb-4 d-block" href={portfolio2.src} data-glightbox data-gallery="portfolio">
            <Image src={portfolio2} alt="portfolio" />
          </GlightBox>
          <GlightBox className="mb-4 d-block" href={portfolio3.src} data-glightbox data-gallery="portfolio">
            <Image src={portfolio3} alt="portfolio" />
          </GlightBox>
        </Col>
        <Col md={6}>
          <div style={{ position: 'sticky', transition: '0.2s all linear', top: '80px' }}>
            <h2>Work Requirement</h2>
            <p>
              Too months nay end change relied who beauty wishes matter. Shew of john real park so rest we on. Ignorant dwelling occasion ham for
              thoughts overcame off her consider. Polite it elinor is depend. His not get talked effect worthy Barton. Household shameless incommode
              at no objection behavior.
            </p>
            <ul className="list-group list-group-borderless list-group-icon-primary-bg">
              <li className="list-group-item">
                <i className="fa fa-check" />
                Maintained Windows Servers
              </li>
              <li className="list-group-item">
                <i className="fa fa-check" />
                Supported Windows workstations
              </li>
              <li className="list-group-item">
                <i className="fa fa-check" />
                Setup a rotation schedule and Setup anti-virus system
              </li>
              <li className="list-group-item">
                <i className="fa fa-check" />
                Designed machines/server and trained employees
              </li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row className="mb-4" data-sticky-container>
        <Col md={6} className="order-last order-md-1">
          <div style={{ position: 'sticky', transition: '0.2s all linear', top: '80px' }}>
            <h2>Our Solution</h2>
            <p>
              Started with Polite it Elinor is depend. His not get talked effect worthy Barton. Household shameless incommode at no objection
              behavior. Too months nay end change relied who beauty wishes matter. Shew of john real park so rest we on. Ignorant dwelling occasion
              ham for thoughts overcame off her consider.
            </p>
            <ul className="list-group list-group-borderless list-group-icon-primary-bg">
              <li className="list-group-item">
                <i className="fa fa-check" />
                Proven results as a recruitment consultant or strong sales experience
              </li>
              <li className="list-group-item">
                <i className="fa fa-check" />
                Knowledge of the staffing industry
              </li>
              <li className="list-group-item">
                <i className="fa fa-check" />
                Previous leadership experience, personally or professionally
              </li>
              <li className="list-group-item">
                <i className="fa fa-check" />A strong desire to be successful and inspire people
              </li>
            </ul>
          </div>
        </Col>
        <Col md={6} className="order-1 order-md-last">
          <GlightBox className="mb-4 d-block" href={portfolio4.src} data-glightbox data-gallery="portfolio">
            <Image src={portfolio4} alt="portfolio4" />
          </GlightBox>
          <GlightBox className="mb-4 d-block" href={portfolio5.src} data-glightbox data-gallery="portfolio">
            <Image src={portfolio5} alt="portfolio5" />
          </GlightBox>
        </Col>
      </Row>
    </>
  )
}

export default CaseStudies
