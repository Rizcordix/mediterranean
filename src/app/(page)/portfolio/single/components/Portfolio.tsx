'use client'
import portfolio1 from '@/assets/images/portfolio/big/01.jpg'
import portfolio2 from '@/assets/images/portfolio/big/02.jpg'
import portfolio3 from '@/assets/images/portfolio/big/03.jpg'
import dynamic from 'next/dynamic'
const GlightBox = dynamic(() => import('@/components/GlightBox'), { ssr: false })
import Image from 'next/image'
import Link from 'next/link'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Portfolio = () => {
  return (
    <section>
      <Container>
        <Row className="mb-4" data-sticky-container>
          <Col md={8}>
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
          <Col md={4}>
            <div style={{ position: 'sticky', transition: '0.2s all linear', top: '80px' }}>
              <h2>Interior architecture </h2>
              <p>
                Two assure Edward whence the was. Who worthy yet ten boy denote wonder. Weeks views her sight old tears sorry. Additions can suspected
                its concealed put furnished. Met the why particular Devonshire decisively considered partiality. Certain it waiting no entered is.
              </p>
              <p> Passed her indeed uneasy shy polite appear denied. Oh less girl no walk. At he spot with five of view. </p>
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <th scope="row">Client:</th>
                    <td className="text-body">Allen Smith</td>
                  </tr>
                  <tr>
                    <th scope="row">Manager:</th>
                    <td className="text-body">Emma Watson, Maria Smith</td>
                  </tr>
                  <tr>
                    <th scope="row">Category:</th>
                    <td className="text-body">Interior design</td>
                  </tr>
                  <tr>
                    <th scope="row">Awards:</th>
                    <td className="text-body">
                      <span className="d-block font-base"> Pineapple Award Design</span>
                      <span className="d-block mt-2"> Project of the Year </span>
                      <span className="d-block mt-2"> Designer of the Year</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Button variant="grad">
                View project website <i className="fas fa-external-link-alt ms-2 me-0" />
              </Button>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={6}>
            <h4 className="mb-4">Client testimonial</h4>
            <blockquote className="blockquote" cite="#">
              <h5 className="mb-2 text-light-gray">
                Design everything on the assumption that people are not heartless or stupid but marvelously capable, given the chance. Mr be cottage
                so related minuter is. Delicate say and blessing ladyship exertion few Margaret. Delight herself welcome against smiling its for.
                Suspected discovery by he affection household of principle perfectly he.
              </h5>
              <cite>– Allen Smith</cite>
            </blockquote>
          </Col>
          <Col md={6}>
            <h4 className="mb-4">Additional information</h4>
            <p>
              Residence certainly elsewhere something she preferred cordially law. Age his surprise formerly Mrs perceive few standstill moderate. Of
              in power match on truth worse voice would. Large an it sense shall an match learn. By expect it result silent in formal of. Ask eat
              questions abilities described elsewhere assurance.
            </p>
            <p>
              {' '}
              Appetite in unlocked advanced breeding position concerns as. Cheerful get shutters yet for repeated screened. An no am cause hopes at
              three. Prevent behaved fertile he is mistake on.{' '}
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="divider mb-4" />
            <Row>
              <Col xs={12} sm={8} className="tags text-center text-sm-start">
                <Link className="mb-2 mb-sm-0" href="">
                  studio
                </Link>
                <Link className="mb-2 mb-sm-0" href="">
                  events
                </Link>
                <Link className="mb-2 mb-sm-0" href="">
                  WordPress
                </Link>
                <Link className="mb-2 mb-sm-0" href="">
                  gadgets
                </Link>
                <Link className="mb-2 mb-sm-0" href="">
                  office
                </Link>
              </Col>
              <Col xs={12} sm={4} className="text-center text-sm-end">
                <ul className="social-icons si-colored-bg light">
                  <li className="social-icons-item social-facebook mb-0">
                    <Link className="social-icons-link" href="">
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li className="social-icons-item social-twitter mb-0">
                    <Link className="social-icons-link" href="">
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li className="social-icons-item social-gplus mb-0">
                    <Link className="social-icons-link" href="">
                      <i className="fab fa-google-plus-g" />
                    </Link>
                  </li>
                  <li className="social-icons-item social-linkedin mb-0">
                    <Link className="social-icons-link" href="">
                      <i className="fab fa-linkedin-in" />
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
            <div className="divider mt-4" />
            <Row className="post-navigation mt-5">
              <Col xs={5} className=" position-relative">
                <Link href="" className="post-prev">
                  <p className="m-2 m-lg-0">Previous Post</p>
                  <h6 className="text-truncate d-none d-lg-block">The Pink Chair</h6>{' '}
                </Link>
              </Col>
              <Col xs={2}>
                <Link href="/portfolio/column-3" className="all-post" title="View all post">
                  {' '}
                  <i className="fa fa-th" />{' '}
                </Link>
              </Col>
              <Col xs={5} className=" position-relative">
                <Link href="" className="post-next">
                  <p className="m-2 m-lg-0">Next Post</p>
                  <h6 className="text-truncate d-none d-lg-block">Black &amp; white</h6>{' '}
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Portfolio
