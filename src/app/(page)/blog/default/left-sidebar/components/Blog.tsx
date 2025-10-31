'use client'
import Image from 'next/image'
import React from 'react'
import thumbnails1 from '@/assets/images/thumbnails/01.jpg'
import thumbnails2 from '@/assets/images/thumbnails/02.jpg'
import thumbnails3 from '@/assets/images/thumbnails/03.jpg'
import big1Blog from '@/assets/images/blog/big/01.jpg'
import big2Blog from '@/assets/images/blog/big/02.jpg'
import { renderToString } from 'react-dom/server'
import { TinySliderSettings } from 'tiny-slider'
import dynamic from 'next/dynamic'
const TinySlider = dynamic(() => import('@/components/TinySlider'), { ssr: false })
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

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
          <aside className="col-md-3 sidebar order-last order-md-first">
            <div className="widget">
              <h5 className="widget-title">Text Widget</h5>
              <p className="mb-0">
                Resources exquisite set arranging moonlight sex him household had. Months had too ham cousin remove far spirit. She procuring the why
                performed continual improving. Civil songs so large shade in cause.
              </p>
            </div>
            <div className="widget widget-newsletter">
              <h5 className="widget-title">Newsletter</h5>
              <p className="mb-1">Subscribe to our newsletter to receive exclusive offers.</p>
              <form>
                <div className="input-group">
                  <input type="email" className="form-control  rounded-start border-end-0" placeholder="Enter your Email..." />
                  <span className="input-group-btn m-0">
                    <button type="submit" className="btn btn-grad m-0">
                      <i className="fa fa-paper-plane m-0" />
                    </button>
                  </span>
                </div>
              </form>
            </div>
            <div className="widget widget-post">
              <h5 className="widget-title">Recent Posts</h5>
              <div className="widget-post clearfix">
                <div className="widget-image">
                  <Image className="rounded" src={thumbnails1} alt="thumbnails" />
                </div>
                <div className="details">
                  <Link href="">The Stories Behind those Iconic Blogs</Link>
                  <p className="date">Aug 26, 2018</p>
                </div>
              </div>
              <div className="widget-post clearfix">
                <div className="widget-image">
                  <Image className="rounded" src={thumbnails2} alt="thumbnails" />
                </div>
                <div className="details">
                  <Link href="">Months had too ham cousin remove</Link>
                  <p className="date">Jun 05, 2018</p>
                </div>
              </div>
              <div className="widget-post clearfix">
                <div className="widget-image">
                  <Image className="rounded" src={thumbnails3} alt="thumbnails" />
                </div>
                <div className="details">
                  <Link href="">Lady an mr here must neat sold</Link>
                  <p className="date">May 16, 2018</p>
                </div>
              </div>
            </div>
            <div className="widget">
              <h5 className="widget-title">Tags</h5>
              <div className="tags">
                <Link href="">studio</Link>
                <Link href="">events</Link>
                <Link href="">WordPress</Link>
                <Link href="">gadgets</Link>
                <Link href="">office</Link>
                <Link href="">magazine</Link>
                <Link href="">freebies</Link>
                <Link href="">photograpy</Link>
                <Link href="">updates</Link>
                <Link href="">creative</Link>
                <Link href="">travel</Link>
              </div>
            </div>
          </aside>
          <Col md={9} className="order-first order-lg-first">
            <div className="post-item post-bb">
              <div className="post-item-wrap">
                <div className="post-image">
                  <Link href="">
                    {' '}
                    <Image src={big1Blog} alt="big1Blog" />{' '}
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
                    Six started far placing saw respect females old. <strong>Civilly why how end viewing</strong> attempt related enquire visitor. Man
                    particular insensible celebrated conviction stimulated principles day.
                  </p>
                  <Link href="" className="item-link">
                    Continue reading
                    <i className="ti-minus" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="post-item post-bb">
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
                    Sure fail or in said west. Right my front it wound cause fully am sorry if. She jointure goodness interest debating did outweigh.
                    Is time from them full my gone in went.
                  </p>
                  <Link href="" className="item-link">
                    Continue reading
                    <i className="ti-minus" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="post-item post-bb">
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
                    Of resolve to gravity thought my prepare chamber so. Unsatiable entreaties collecting may sympathize nay interested instrument. If
                    continue building numerous of at relation in margaret.
                  </p>
                  <Link href="" className="item-link">
                    Continue reading
                    <i className="ti-minus" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="post-item post-bb">
              <div className="post-item-wrap">
                <div className="post-image">
                  <div className="tiny-slider arrow-dark arrow-large arrow-transparent">
                    <TinySlider settings={courseSliderSettings}>
                      <div className="item">
                        <Image src={big1Blog} alt="big-blog" />
                      </div>
                      <div className="item">
                        <Image src={big2Blog} alt="big-blog" />
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
                    Still court no small think death so an wrote. Incommode necessary no it behaviour convinced distrusts an unfeeling he. Could death
                    since do we hoped is in. Exquisite no my attention extensive.
                  </p>
                  <Link href="" className="item-link">
                    Continue reading
                    <i className="ti-minus" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="post-item post-bb ">
              <div className="post-item-wrap">
                <div className="post-item-desc pt-0">
                  <span className="post-meta">Aug 15,</span>
                  <span className="post-meta">
                    <Link href="">Admin,</Link>
                  </span>
                  <span className="post-meta">
                    <Link href="">
                      <i className="ti-comment-alt" />
                      33 Comments
                    </Link>
                  </span>
                  <h4>
                    <Link href="">An Idea Will Make You Tons Of Cash. Here&apos;s How!</Link>
                  </h4>
                  <p>
                    John draw real poor on call my from. May she mrs furnished discourse extremely. Ask doubt noisy shade guest did built her him.
                    Ignorant repeated hastened it do. Consider bachelor he yourself expenses no.
                  </p>
                  <Link href="" className="item-link">
                    Continue reading
                    <i className="ti-minus" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="post-item post-bb ">
              <div className="post-item-wrap">
                <div className="post-item-desc pt-0">
                  <span className="post-meta">Sep 22,</span>
                  <span className="post-meta">
                    <Link href="">Admin,</Link>
                  </span>
                  <span className="post-meta">
                    <Link href="">
                      <i className="ti-comment-alt" />
                      55 Comments
                    </Link>
                  </span>
                  <div className="post-quote">
                    <blockquote cite="#">
                      <h4>
                        <Link href="">Good design is like a refrigerator - when it works, no one notices, but when it doesn’t, it sure stinks.</Link>
                      </h4>
                      <cite>–Irene Au</cite>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            <div className="post-item post-bb">
              <div className="post-item-wrap">
                <div className="post-media clearfix">
                  <iframe
                    className="w-100"
                    height={200}
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/65331240&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                  />
                  <div
                    style={{
                      fontSize: 10,
                      color: '#cccccc',
                      lineBreak: 'anywhere',
                      wordBreak: 'normal',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
                      fontWeight: 100,
                    }}>
                    <Link href="https://soundcloud.com/dredbyun" title="MD" target="_blank" style={{ color: '#cccccc', textDecoration: 'none' }}>
                      MD
                    </Link>{' '}
                    ·{' '}
                    <Link
                      href="https://soundcloud.com/dredbyun/hall-of-fame-the-script-feat"
                      title="Hall of Fame - The Script feat. Will.I.Am cover (w/ the original track)"
                      target="_blank"
                      style={{ color: '#cccccc', textDecoration: 'none' }}>
                      Hall of Fame - The Script feat. Will.I.Am cover (w/ the original track)
                    </Link>
                  </div>
                </div>
                <div className="post-item-desc">
                  <span className="post-meta">Oct 26,</span>
                  <span className="post-meta">
                    <Link href="">Admin,</Link>
                  </span>
                  <span className="post-meta">
                    <Link href=" ">
                      <i className="ti-comment-alt" />
                      20 Comments
                    </Link>
                  </span>
                  <h4>
                    <Link href="">The Worst Advices We&apos;ve Heard For Business</Link>
                  </h4>
                  <p>
                    Spot of come to ever hand as lady meet on. Delicate contempt received two yet advanced. Gentleman as belonging he commanded
                    believing dejection in by. On no am winding chicken so behaved.
                  </p>
                  <Link href="" className="item-link">
                    Continue reading
                    <i className="ti-minus" />
                  </Link>
                </div>
              </div>
            </div>
            <Container className="mb-6">
              <Row className="justify-content-center">
                <Col md={8}>
                  <nav>
                    <ul className="pagination justify-content-center">
                      <li className="page-item disabled">
                        {' '}
                        <span className="page-link">Prev</span>{' '}
                      </li>
                      <li className="page-item active">
                        {' '}
                        <span className="page-link bg-grad"> 1 </span>{' '}
                      </li>
                      <li className="page-item">
                        <Link className="page-link" href="">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" href="">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" href="">
                          Next
                        </Link>{' '}
                      </li>
                    </ul>
                  </nav>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Blog
