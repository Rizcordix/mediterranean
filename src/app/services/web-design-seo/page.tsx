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
  title: "Web Design & SEO Services | Mediterranean Publishing – Beautiful & High-Ranking Sites",
  description: "Full-service web design and SEO to help authors and businesses build high-ranking, visually stunning websites that convert visitors into clients.",
  keywords: [
    "web design",
    "SEO services",
    "author website design",
    "business web design",
    "Mediterranean Publishing SEO",
    "website development"
  ],
  openGraph: {
    title: "Web Design & SEO Services | Mediterranean Publishing",
    description: "Professional website design paired with effective SEO.",
    url: "https://www.mediterraneanpublishing.com/web-design-seo",
    siteName: "Mediterranean Publishing",
    images: [
      {
        url: "https://www.mediterraneanpublishing.com/og-web-design-seo.jpg",
        width: 1200,
        height: 630,
        alt: "Web Design & SEO – Mediterranean Publishing"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design & SEO | Mediterranean Publishing",
    description: "High-performing websites for authors and brands.",
    images: ["https://www.mediterraneanpublishing.com/og-web-design-seo.jpg"]
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
