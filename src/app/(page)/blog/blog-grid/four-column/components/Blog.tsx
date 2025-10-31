'use client'
import bigBlog1 from '@/assets/images/blog/big/01.jpg'
import bigBlog2 from '@/assets/images/blog/big/02.jpg'
import blogGrid1 from '@/assets/images/blog/grid/01.jpg'
import blogGrid3 from '@/assets/images/blog/grid/03.jpg'
import blogGrid4 from '@/assets/images/blog/grid/04.jpg'
import blogGrid5 from '@/assets/images/blog/grid/05.jpg'
import blogGrid6 from '@/assets/images/blog/grid/06.jpg'
import dynamic from 'next/dynamic'
const TinySlider = dynamic(() => import('@/components/TinySlider'), { ssr: false })
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { renderToString } from 'react-dom/server'
import { TinySliderSettings } from 'tiny-slider'

const Blog = () => {
  const courseSliderSettings: TinySliderSettings = {
    arrowKeys: true,
    gutter: 30,
    autoplayButtonOutput: false,
    nested: 'inner',
    autoplay: true,
    controls: true,
    controlsText: [renderToString(<i className="fas fa-chevron-left" />), renderToString(<i className="fas fa-chevron-right" />)],
    edgePadding: 2,
    loop: true,
    items: 1,
    nav: false,
    responsive: {
      1: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  }
  return (
    <section className="blog-page pb-0">
      <Container>
        <Row>
          <Col md={12}>
            <div className="blog-grid blog-grid-4 portfolio-wrap row row-cols-md-3 row-cols-1">
              <div className="post-item col">
                <div className="post-item-wrap">
                  <div className="post-image">
                    <Link href="">
                      {' '}
                      <Image src={blogGrid1} alt="blogGrid" />{' '}
                    </Link>
                    <span className="post-meta-category bg-grad">
                      <Link href="">Blog Image</Link>
                    </span>
                  </div>
                  <div className="post-item-desc">
                    <span className="post-meta">Jan 21,</span>
                    <span className="post-meta">
                      <Link href="">Admin,</Link>
                    </span>
                    <span className="post-meta">
                      <Link href="">
                        <i className="ti-comment-alt" />
                        06 Comments
                      </Link>
                    </span>
                    <h4>
                      <Link href="">The Stories Behind those Iconic Blogs</Link>
                    </h4>
                    <p>
                      Six started far placing saw respect females old. <strong>Civilly why how end viewing</strong> attempt related enquire visitor.
                      Man particular insensible celebrated conviction stimulated principles day.Six started far placing saw respect females old.{' '}
                    </p>
                    <Link href="" className="item-link">
                      Continue reading
                      <i className="ti-minus" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="post-item col">
                <div className="post-item-wrap">
                  <div className="post-image">
                    <div className="ratio ratio-16x9">
                      <iframe
                        width={560}
                        height={315}
                        src="https://www.youtube.com/embed/9No-FiEInLA"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      />
                    </div>
                    <span className="post-meta-category bg-grad">
                      <Link href="">YouTube</Link>
                    </span>
                  </div>
                  <div className="post-item-desc">
                    <span className="post-meta">Mar 26,</span>
                    <span className="post-meta">
                      <Link href="">Admin,</Link>
                    </span>
                    <span className="post-meta">
                      <Link href="">
                        <i className="ti-comment-alt" />
                        11 Comments
                      </Link>
                    </span>
                    <h4>
                      <Link href=""> Right my front it wound cause fully am sorry if</Link>
                    </h4>
                    <p>
                      Sure fail or in said west. Right my front it wound cause fully am sorry if. She jointure goodness interest debating did
                      outweigh. Is time from them full my gone in went.Sure fail or in said west.
                    </p>
                    <Link href="" className="item-link">
                      Continue reading
                      <i className="ti-minus" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="post-item col">
                <div className="post-item-wrap">
                  <div className="post-image">
                    <Link href="">
                      {' '}
                      <Image src={blogGrid3} alt="blogGrid" />{' '}
                    </Link>
                    <span className="post-meta-category bg-grad">
                      <Link href="">Blog Image</Link>
                    </span>
                  </div>
                  <div className="post-item-desc">
                    <span className="post-meta">Jan 21,</span>
                    <span className="post-meta">
                      <Link href="">Admin,</Link>
                    </span>
                    <span className="post-meta">
                      <Link href="">
                        <i className="ti-comment-alt" />
                        06 Comments
                      </Link>
                    </span>
                    <h4>
                      <Link href="">Wanted WordPress Tips, Tricks, and Hacks!</Link>
                    </h4>
                    <p>
                      Man particular insensible celebrated conviction stimulated principles day. Six started far placing saw respect females old.{' '}
                      <strong>Civilly why how end viewing</strong> attempt related enquire visitor.{' '}
                    </p>
                    <Link href="" className="item-link">
                      Continue reading
                      <i className="ti-minus" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="post-item col">
                <div className="post-item-wrap">
                  <div className="post-image">
                    <div className="ratio ratio-16x9">
                      <iframe src="https://player.vimeo.com/video/167434033?title=0&byline=0&portrait=0" width={640} height={360} allowFullScreen />
                    </div>
                    <span className="post-meta-category bg-grad">
                      <Link href="">Vimeo</Link>
                    </span>
                  </div>
                  <div className="post-item-desc">
                    <span className="post-meta">Apr 28,</span>
                    <span className="post-meta">
                      <Link href="">Admin,</Link>
                    </span>
                    <span className="post-meta">
                      <Link href="">
                        <i className="ti-comment-alt" />
                        16 Comments
                      </Link>
                    </span>
                    <h4>
                      <Link href="">Months had too ham cousin remove far spirit</Link>
                    </h4>
                    <p>
                      Of resolve to gravity thought my prepare chamber so. Unsatiable entreaties collecting may sympathize nay interested instrument.
                      If continue building numerous of at relation in margaret.
                    </p>
                    <Link href="" className="item-link">
                      Continue reading
                      <i className="ti-minus" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="post-item col">
                <div className="post-item-wrap">
                  <div className="post-image">
                    <div className="tiny-slider arrow-dark arrow-large arrow-transparent">
                      <TinySlider settings={courseSliderSettings}>
                        <div className="item">
                          <Image src={bigBlog1} alt="bigBlog" />
                        </div>
                        <div className="item">
                          <Image src={bigBlog2} alt="bigBlog" />
                        </div>
                      </TinySlider>
                    </div>
                    <span className="post-meta-category bg-grad">
                      <Link href="">Blog Slider</Link>
                    </span>
                  </div>
                  <div className="post-item-desc">
                    <span className="post-meta">Jun 01,</span>
                    <span className="post-meta">
                      <Link href="">Admin,</Link>
                    </span>
                    <span className="post-meta">
                      <Link href="">
                        <i className="ti-comment-alt" />
                        28 Comments
                      </Link>
                    </span>
                    <h4>
                      <Link href="">7 Great Lessons You Can Learn From Business</Link>
                    </h4>
                    <p>
                      Still court no small think death so an wrote. Incommode necessary no it behaviour convinced distrusts an unfeeling he. Could
                      death since do we hoped is in. Exquisite no my attention extensive.
                    </p>
                    <Link href="" className="item-link">
                      Continue reading
                      <i className="ti-minus" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="post-item col">
                <div className="post-item-wrap">
                  <div className="post-image">
                    <Link href="">
                      {' '}
                      <Image src={blogGrid4} alt="blogGrid" />{' '}
                    </Link>
                    <span className="post-meta-category bg-grad">
                      <Link href="">Blog Image</Link>
                    </span>
                  </div>
                  <div className="post-item-desc">
                    <span className="post-meta">Jan 21,</span>
                    <span className="post-meta">
                      <Link href="">Admin,</Link>
                    </span>
                    <span className="post-meta">
                      <Link href="">
                        <i className="ti-comment-alt" />
                        06 Comments
                      </Link>
                    </span>
                    <h4>
                      <Link href="">The Worst Advices We&apos;ve Heard For Business</Link>
                    </h4>
                    <p>
                      Civilly why how end viewing attempt related enquire visitor. Man particular insensible celebrated conviction stimulated
                      principles day. Six started far placing saw respect females old.{' '}
                    </p>
                    <Link href="" className="item-link">
                      Continue reading
                      <i className="ti-minus" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="post-item col">
                <div className="post-item-wrap">
                  <div className="post-image">
                    <Link href="">
                      {' '}
                      <Image src={blogGrid5} alt="blogGrid" />{' '}
                    </Link>
                    <span className="post-meta-category bg-grad">
                      <Link href="">Blog Image</Link>
                    </span>
                  </div>
                  <div className="post-item-desc">
                    <span className="post-meta">Jan 21,</span>
                    <span className="post-meta">
                      <Link href="">Admin,</Link>
                    </span>
                    <span className="post-meta">
                      <Link href="">
                        <i className="ti-comment-alt" />
                        06 Comments
                      </Link>
                    </span>
                    <h4>
                      <Link href="">Risks of artificial on financial markets</Link>
                    </h4>
                    <p>
                      Man particular insensible celebrated conviction stimulated principles day. Six started far placing saw respect females old.{' '}
                      <strong>Civilly why how end viewing</strong> attempt related enquire visitor.{' '}
                    </p>
                    <Link href="" className="item-link">
                      Continue reading
                      <i className="ti-minus" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="post-item col">
                <div className="post-item-wrap">
                  <div className="post-image">
                    <Link href="">
                      {' '}
                      <Image src={blogGrid6} alt="blogGrid" />{' '}
                    </Link>
                    <span className="post-meta-category bg-grad">
                      <Link href="">Blog Image</Link>
                    </span>
                  </div>
                  <div className="post-item-desc">
                    <span className="post-meta">Jan 21,</span>
                    <span className="post-meta">
                      <Link href="">Admin,</Link>
                    </span>
                    <span className="post-meta">
                      <Link href="">
                        <i className="ti-comment-alt" />
                        06 Comments
                      </Link>
                    </span>
                    <h4>
                      <Link href="">Argument Against Stock Buybacks Gets Wrong</Link>
                    </h4>
                    <p>
                      Man particular insensible celebrated conviction stimulated principles day. Six started far placing saw respect females old.{' '}
                      <strong>Civilly why how end viewing</strong> attempt related enquire visitor.{' '}
                    </p>
                    <Link href="" className="item-link">
                      Continue reading
                      <i className="ti-minus" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Blog
