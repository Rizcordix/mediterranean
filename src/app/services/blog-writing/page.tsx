import React from 'react'
import TopNavbar from '../../home/components/TopNavbar'
import Hero from './components/Hero'
import Clients from '../bookwriting/components/Clients'
import ActionBox from '../../about/components/ActionBox'
import Testimonials from '../../home/components/Testimonial'
import Footer from '../../home/components/Footer'
import PricingComponent from '../bookwriting/components/Pricing'
import AboutUs from './components/AboutSection'
import Categories from '@/app/home/components/Categories'
import CTA from '@/app/home/components/Features'
import ProcedureSection from '@/app/home/components/procedure'
import Component0 from '../bookwriting/components/Special'

export const metadata = {
  title: "Blog Writing Services | Mediterranean Publishing – SEO-Optimized, Engaging Content",
  description: "Boost your online presence with Mediterranean Publishing’s SEO-optimized blog writing services. High-quality blog posts crafted for engagement and ranking.",
  keywords: [
    "blog writing services",
    "SEO blog writing",
    "hire blog writer",
    "content writing services",
    "Mediterranean Publishing blogs",
    "professional blog writing"
  ],
  openGraph: {
    title: "Blog Writing Services | Mediterranean Publishing",
    description: "Engaging, SEO-friendly blogs written by expert content writers.",
    url: "https://www.mediterraneanpublishing.com/blog-writing",
    siteName: "Mediterranean Publishing",
    images: [
      {
        url: "https://www.mediterraneanpublishing.com/og-blog-writing.jpg",
        width: 1200,
        height: 630,
        alt: "Blog Writing Services – Mediterranean Publishing"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Writing Services | Mediterranean Publishing",
    description: "SEO-optimized blog writing for stronger online visibility.",
    images: ["https://www.mediterraneanpublishing.com/og-blog-writing.jpg"]
  }
};

const AgencyStartUpPage = () => {
  return (
    <>
      <TopNavbar />
      <Hero />
      <Clients />
      <div className="divider mt-5" />
      <AboutUs />
      <Component0 id={3} />
      <CTA />
      <PricingComponent defaultTab={5} />
      <ProcedureSection />
      <Categories />
      <Testimonials />
      <ActionBox />
      <Footer />
    </>
  )
}

export default AgencyStartUpPage
