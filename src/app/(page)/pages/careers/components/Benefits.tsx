'use client'
import Image from 'next/image'
import React from 'react'
import service3 from '@/assets/images/service/03.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import dynamic from 'next/dynamic'
const GlightBox = dynamic(() => import('@/components/GlightBox'), { ssr: false })
import Link from 'next/link'

const Benefits = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col md={12} lg={6} className="align-self-center ">
            <div className="title text-start">
              <h2>What you can expect?</h2>
              <p className="p-0 mb-0">
                Benefits are the rewards that go beyond the paycheck. We offer a selection of benefits that meet our employees’ needs and expectation
                at different life stages. Examples for benefits at Larexa are retirement benefits, health care and accident insurance. This is a great
                opportunity to work with a leading organisation in the construction industry!{' '}
              </p>
            </div>
            <div className="list-group-inline list-group-number list-unstyled mb-5 mb-lg-0">
              <Link href="" className="list-group-item list-group-item-action">
                <span>1</span> Career Development
              </Link>
              <Link href="" className="list-group-item list-group-item-action">
                <span>2</span> Future Provision
              </Link>
              <Link href="" className="list-group-item list-group-item-action">
                <span>3</span> Flexible Working Hours{' '}
              </Link>
              <Link href="" className="list-group-item list-group-item-action">
                <span>4</span> Health &amp; Fitness{' '}
              </Link>
              <Link href="" className="list-group-item list-group-item-action">
                <span>5</span> Employee Gifts{' '}
              </Link>
              <Link href="" className="list-group-item list-group-item-action">
                <span>6</span> Welcome Aboard{' '}
              </Link>
            </div>
          </Col>
          <Col md={10} lg={6} className="mx-md-auto align-self-center position-relative">
            <Image className="rounded" src={service3} alt="service" />
            <div className="position-absolute start-0 bottom-0 ms-4 ms-md-n2 mb-3">
              <GlightBox className="btn btn-grad" data-glightbox href="https://youtu.be/n_Cn8eFo7u8">
                {' '}
                <i className="fa fa-play text-white" />
                Play Video{' '}
              </GlightBox>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Benefits
