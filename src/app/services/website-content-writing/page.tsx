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

export const metadata = {
  title: "Website Content Writing | Mediterranean Publishing – Convert Visitors Into Customers",
  description: "Engaging, SEO-optimized website content writing for businesses, authors, and brands. Mediterranean Publishing delivers copy that ranks and converts.",
  keywords: [
    "website content writing",
    "SEO content writing",
    "hire content writer",
    "website copywriting",
    "Mediterranean Publishing writing",
    "professional copywriting"
  ],
  openGraph: {
    title: "Website Content Writing Services | Mediterranean Publishing",
    description: "SEO-friendly, conversion-focused website copywriting.",
    url: "https://www.mediterraneanpublishing.com/website-content-writing",
    siteName: "Mediterranean Publishing",
    images: [
      {
        url: "https://www.mediterraneanpublishing.com/og-website-content-writing.jpg",
        width: 1200,
        height: 630,
        alt: "Website Content Writing – Mediterranean Publishing"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Content Writing | Mediterranean Publishing",
    description: "Professional SEO website content that drives results.",
    images: ["https://www.mediterraneanpublishing.com/og-website-content-writing.jpg"]
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
