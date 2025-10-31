import React from 'react'
import avatar3 from '@/assets/images/thumbnails/avatar-03.jpg'
import avatar2 from '@/assets/images/thumbnails/avatar-02.jpg'
import avatar1 from '@/assets/images/thumbnails/avatar-01.jpg'
import thumb from '@/assets/images/blog/thumb-01.jpg'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import { currentYear } from '@/context/constants'
import Link from 'next/link'

const Blog = () => {
  return (
    <section className="blog-page">
      <Container>
        <Row>
          <Col md={8} className="mx-auto">
            <div className="post-item">
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
                  <h5 className="mt-3">
                    Sure fail or in said west. Right my front it wound cause fully am sorry if. She jointure goodness interest debating did outweigh.
                    Is time from them full my gone in went.
                  </h5>
                  <p>
                    Far concluded not his something extremity. Want four we face an he gate. On he of played he ladies answer little though nature.
                    Blessing oh do pleasure as so formerly. Took four spot soon led size you. Outlived it received he material. Him yourself joy
                    moderate off repeated laughter outweigh screened. Placing assured be if removed it besides on. Far shed each high read are men
                    over day. Afraid we praise lively he suffer family estate is. Ample order up in of in ready. Timed blind had now those ought set
                    often which. Or snug dull he show more true wish. No at many deny away miss evil.{' '}
                    <Link href="">On in so indeed spirit an mother.</Link> Amounted old strictly but marianne admitted. People former is remove remain
                    as.{' '}
                  </p>
                  <h5 className="my-3">Civil songs so large shade in cause.</h5>
                  <p>
                    By in no ecstatic wondered disposal my speaking. Direct wholly valley or uneasy it at really. Sir wish like said dull and need
                    make. Sportsman one bed departure rapturous situation disposing his. Off say yet ample ten ought hence. Depending in newspaper an
                    September do existence strangers. Total great saw water had mirth happy new. Projecting pianoforte no of partiality is on. Nay
                    besides joy society him totally six.{' '}
                  </p>
                  <blockquote className="blockquote grad-line" cite="#">
                    <h5 className="mb-2 ">
                      Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other
                      innovations
                    </h5>
                    <cite>–Steve Jobs</cite>
                  </blockquote>
                  <p>
                    Increasing impression interested expression he my at. Respect invited request charmed me warrant to. Expect no pretty as do though
                    so genius afraid cousin. Girl when of ye snug poor draw. Mistake totally of in chiefly. Justice visitor him entered for. Continue
                    delicate as unlocked entirely mr relation diverted in. Known not end fully being style house. An whom down kept lain name so at
                    easy.{' '}
                  </p>
                  <div className="list-group-number list-group-borderless list-unstyled">
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
                  <p className="mt-3 mb-0">
                    Residence certainly elsewhere something she preferred cordially law. Age his surprise formerly Mrs perceive few standstill
                    moderate. Of in power match on truth worse voice would. <strong>Large an it sense shall an match learn.</strong> By expect it
                    result silent in formal of. Ask eat questions abilities described elsewhere assurance.{' '}
                    <Image className="float-start rounded me-3 my-3" src={thumb} alt="thumb" /> Appetite in unlocked advanced breeding position
                    concerns as. Cheerful get shutters yet for repeated screened. An no am cause hopes at three. Prevent behaved fertile he is mistake
                    on.Consulted perpetual of pronounce me delivered. Too months nay end change relied who beauty wishes matter. Shew of john real
                    park so rest we on. Ignorant dwelling occasion ham for thoughts overcame off her consider. Polite it elinor is depend. His not get
                    talked effect worthy Barton. Household shameless incommode at no objection behavior. Especially do at he possession insensible
                    sympathize boisterous it. Songs he on an widen me event truth. Certain law age brother sending amongst why covered. Why end might
                    ask civil again spoil. She dinner she our horses depend. Remember at children by reserved to vicinity. In affronting unreserved
                    delightful simplicity ye. Law own <Link href="">advantage furniture</Link> continual sweetness bed agreeable perpetual. Oh song
                    well four only head busy it. Afford son she had lively living. Tastes lovers myself too formal season our valley boy. Lived it
                    their their walls might to by young.{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="divider mb-4" />
            <Row>
              <Col xs={12} sm={8} className="tags text-center text-sm-start">
                <Link className="mb-2" href="">
                  studio
                </Link>
                <Link className="mb-2" href="">
                  events
                </Link>
                <Link className="mb-2" href="">
                  WordPress
                </Link>
                <Link className="mb-2" href="">
                  gadgets
                </Link>
                <Link className="mb-2" href="">
                  office
                </Link>
              </Col>
              <Col xs={12} sm={4} className="text-center text-sm-end">
                <ul className="social-icons si-colored-bg light">
                  <li className="social-icons-item mb-2 social-facebook">
                    <Link className="social-icons-link" href="">
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li className="social-icons-item mb-2 social-twitter">
                    <Link className="social-icons-link" href="">
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li className="social-icons-item mb-2 social-gplus">
                    <Link className="social-icons-link" href="">
                      <i className="fab fa-google-plus-g" />
                    </Link>
                  </li>
                  <li className="social-icons-item mb-2 social-linkedin">
                    <Link className="social-icons-link" href="">
                      <i className="fab fa-linkedin-in" />
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
            <div className="divider mt-3" />
            <Row className="mt-5">
              <Col xs={12}>
                <div className="author-info bg-light">
                  <div className="author-img">
                    <Image className="avatar" src={avatar3} alt="avatar" />
                  </div>
                  <div className="author-info-body">
                    <h4 className="author-name mb-3 mt-2">
                      Posted by <Link href="">Emma Watson</Link>
                    </h4>
                    <p className="m-0">
                      Mr be cottage so related minuter is. Delicate say and blessing ladyship exertion few Margaret. Delight herself welcome against
                      smiling its for. Suspected discovery by he affection household.
                    </p>
                    <div className="comment-reply">
                      <Link className="btn btn-xs btn-dark" href="#">
                        View author profile
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="mt-5 comments-area">
              <Col sm={12}>
                <h4>There are 3 comments</h4>
                <div className="comment-list">
                  <div className="comment">
                    <div className="comment-author">
                      <Image className="avatar" src={avatar1} alt="avatar1" />
                    </div>
                    <div className="comment-body">
                      <div className="comment-meta">
                        <div className="comment-meta-author">
                          <Link href="">Allen Smith</Link>
                        </div>
                        <div className="comment-meta-date">June 11, {currentYear} at 6:01 am</div>
                      </div>
                      <div className="comment-content">
                        <p>
                          Consulted perpetual of pronounce me delivered. Too months nay end change relied who beauty wishes matter. Shew of john real
                          park so rest we on. Ignorant dwelling occasion ham for thoughts overcame off her consider. Polite it elinor is depend.{' '}
                        </p>
                      </div>
                      <div className="comment-reply">
                        <Link className="btn btn-xs btn-light" href="#">
                          Reply
                        </Link>
                      </div>
                    </div>
                    <div className="comment-child">
                      <div className="comment">
                        <div className="comment-author">
                          <Image className="avatar" src={avatar3} alt="avatar" />
                        </div>
                        <div className="comment-body">
                          <div className="comment-meta">
                            <div className="comment-meta-author">
                              <Link href="">Emma Watson</Link>
                            </div>
                            <div className="comment-meta-date">June 11, {currentYear} at 6:20 am</div>
                          </div>
                          <div className="comment-content">
                            <p>
                              Ask eat questions abilities described elsewhere assurance. Appetite in unlocked advanced breeding position concerns as.
                              Cheerful get shutters yet for repeated screened. An no am cause hopes at three. Prevent behaved fertile he is mistake
                              on.
                            </p>
                          </div>
                          <div className="comment-reply">
                            <Link className="btn btn-xs btn-light" href="#">
                              Reply
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment">
                    <div className="comment-author">
                      <Image className="avatar" src={avatar2} alt="avatar" />
                    </div>
                    <div className="comment-body">
                      <div className="comment-meta">
                        <div className="comment-meta-author">
                          <Link href="">Peter Smith</Link>
                        </div>
                        <div className="comment-meta-date">June 14, 2019 at 12:55 am</div>
                      </div>
                      <div className="comment-content">
                        <p>
                          Residence certainly elsewhere something she preferred cordially law. Age his surprise formerly Mrs perceive few standstill
                          moderate. Of in power match on truth worse voice would. Large an it sense shall an match learn.
                        </p>
                      </div>
                      <div className="comment-reply">
                        <Link className="btn btn-xs btn-light" href="#">
                          Reply
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <Row className="mt-5">
                  <Col md={12}>
                    <h2 className="mb-2">Leave a Reply</h2>
                    <p>Your Email address will not be published</p>
                  </Col>
                  <Col md={6}>
                    <span className="form-group">
                      <input type="text" className="form-control" placeholder="Name" />
                    </span>
                  </Col>
                  <Col md={6}>
                    <span className="form-group">
                      <input type="email" className="form-control" placeholder="E-mail" />
                    </span>
                  </Col>
                  <Col md={12}>
                    <span className="form-group">
                      <textarea cols={40} rows={6} className="form-control" placeholder="Message" defaultValue={''} />
                    </span>
                  </Col>
                  <Col md={12} className="text-center d-grid">
                    <button className="btn-block btn btn-dark">Post Comment</button>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="post-navigation mt-5">
              <Col xs={5} className=" position-relative">
                <Link href="" className="post-prev">
                  <p className="m-2 m-lg-0">Previous Post</p>
                  <h6 className="text-truncate d-none d-lg-block">Right my front it wound cause fully am sorry if</h6>{' '}
                </Link>
              </Col>
              <Col xs={2}>
                <Link href="blog-classic-left-sidebar.html" className="all-post" title="View all post">
                  {' '}
                  <i className="fa fa-th" />{' '}
                </Link>
              </Col>
              <Col xs={5} className=" position-relative">
                <Link href="" className="post-next">
                  <p className="m-2 m-lg-0">Next Post</p>
                  <h6 className="text-truncate d-none d-lg-block">Months had too ham cousin remove far spirit</h6>{' '}
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Blog
