import Image from 'next/image'
import React from 'react'
import signature from '@/assets/images/mockups/signature.png'
import service9 from '@/assets/images/service/09.jpg'
import { Col, Container, Row } from 'react-bootstrap'

const AboutUs = () => {
  return (
    <section className="position-relative bg-light">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col md={6}>
            <figure className="w-100 ie-height-600">
              <svg
                version="1.1"
                id="about-image"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 678 595"
                xmlSpace="preserve">
                <defs>
                  <linearGradient id="BgGradient">
                    <stop className="fill-grad-start" offset="0%" />
                    <stop className="fill-grad-end" offset="100%" />
                  </linearGradient>
                </defs>
                <path
                  id="about-image-bg"
                  fill="url(#BgGradient)"
                  d="M652.2,493.6c-51.9,58.8-395.9,51.9-395.9,51.9S7.4,581.8,50.6,396.8
          C82.3,261.5,2.2,56.3,97.3,20c49-18.7,351.7-49,487.8,70.9C713.1,203.4,677.3,465.1,652.2,493.6z"
                />
                <g id="XMLID_120_">
                  <defs>
                    <path
                      id="XMLID_7_"
                      d="M635.5,506.9c-51.9,58.8-395.9,51.9-395.9,51.9S-9.3,595,34,410C65.6,274.7-14.4,69.5,80.6,33.2
              c49-18.7,351.7-49,487.8,70.9C696.4,216.7,660.6,478.4,635.5,506.9z"
                    />
                  </defs>
                  <clipPath id="XMLID_155_">
                    <use xlinkHref="#XMLID_7_" style={{ overflow: 'visible' }} />
                  </clipPath>
                  <g style={{ clipPath: 'url(#XMLID_155_)' }}>
                    <image
                      style={{ overflow: 'visible' }}
                      width={700}
                      height={700}
                      id="XMLID_121_"
                      xlinkHref={service9.src}
                      transform="matrix(0.9999 0 0 0.9999 1 -81)"></image>
                  </g>
                </g>
                <circle fill="none" stroke="url(#BgGradient)" strokeWidth={8} strokeMiterlimit={10} cx={60} cy={539} r={40} />
                <path
                  id="XMLID_149_"
                  fill="url(#BgGradient)"
                  d="M52.6,104.3L25.5,46.5c-2-4.2-0.1-9.4,4.1-11.3l0,0c4.2-2,9.4-0.1,11.3,4.1L68,97c2,4.2,0.1,9.4-4.1,11.3
            l0,0C59.7,110.4,54.6,108.5,52.6,104.3z"
                />
                <path
                  id="XMLID_150_"
                  fill="url(#BgGradient)"
                  d="M48.1,140.6l-12.8-27.2c-2-4.2-0.1-9.4,4.1-11.3l0,0c4.2-2,9.4-0.1,11.3,4.1l12.8,27.2
            c2,4.2,0.1,9.4-4.1,11.3l0,0C55.2,146.7,50.1,144.8,48.1,140.6z"
                />
                <circle id="XMLID_151_" fill="url(#BgGradient)" cx="590.9" cy="23.9" r="9.1" />
                <circle id="XMLID_152_" fill="url(#BgGradient)" cx="596.8" cy="76.4" r="14.6" />
                <circle id="XMLID_153_" fill="url(#BgGradient)" cx="630.8" cy="42.8" r="5.3" />
              </svg>
            </figure>
          </Col>
          <Col md={6} className="mt-4 mt-md-0">
            <h6 className="text-primary">About us</h6>
            <h2 className="h1">Your technical partner towards web success.</h2>
            <p className="lead">
              Our friendly team members are always willing to help you understand your present technology requirements and provide suggestions on your
              future needs.
            </p>
            <p>
              {' '}
              Additions can suspected its concealed put furnished. Met the why particular devonshire decisively considered partiality. Certain it
              waiting no entered is. Passed her indeed uneasy shy polite appear denied. Oh less girl no walk. At he spot with five of view.
            </p>
            <p>
              <span className="text-dark fw-bold">— Jessica Mores,</span> CEO larexa
            </p>
            <Row>
              <Col xs={5}>
                <Image src={signature.src} width={591} height={591} alt="signature" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <figure className="position-absolute top-0 start-0 w-100 d-none d-md-block ie-d-none mt-n3">
        <svg
          version="1.1"
          id="wave-1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 1920 43.4"
          xmlSpace="preserve">
          <path
            id="wave-1-path"
            className="fill-light"
            d="M0,23.3c0,0,405.1-43.5,697.6,0c316.5,1.5,108.9-2.6,480.4-14.1c0,0,139-12.2,458.7,14.3 c0,0,67.8,19.2,283.3-22.7v35.1H0V23.3z"
          />
        </svg>
      </figure>
      <figure className="position-absolute bottom-0 start-0 w-100 d-none d-md-block ie-d-none mb-n3">
        <svg
          version="1.1"
          id="wave-2"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 1920 43.4"
          xmlSpace="preserve">
          <path
            id="wave-2-path_"
            className="fill-white"
            d="M0,23.3c0,0,405.1-43.5,697.6,0c316.5,1.5,108.9-2.6,480.4-14.1c0,0,139-12.2,458.7,14.3 c0,0,67.8,19.2,283.3-22.7v35.1H0V23.3z"
          />
        </svg>
      </figure>
    </section>
  )
}

export default AboutUs
