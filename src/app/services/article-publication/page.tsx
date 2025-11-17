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
  title: "Article Publication Services | Mediterranean Publishing – Build Your Authority",
  description: "Professional article publication services for authors, researchers, and brands. Get published on reputable platforms and strengthen your credibility.",
  keywords: [
    "article publication",
    "publish my article",
    "professional article writing",
    "Mediterranean Publishing articles",
    "content publishing",
    "article submission services"
  ],
  openGraph: {
    title: "Article Publication Services | Mediterranean Publishing",
    description: "Get your articles published on top platforms.",
    url: "https://www.mediterraneanpublishing.com/article-publication",
    siteName: "Mediterranean Publishing",
    images: [
      {
        url: "https://www.mediterraneanpublishing.com/og-article-publication.jpg",
        width: 1200,
        height: 630,
        alt: "Article Publication – Mediterranean Publishing"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Article Publication Services | Mediterranean Publishing",
    description: "Professional article publication for authors and businesses.",
    images: ["https://www.mediterraneanpublishing.com/og-article-publication.jpg"]
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
      <PricingComponent defaultTab={1} />
      <ProcedureSection />
      <Categories />
      <Testimonials />
      <ActionBox />
      <Footer />
    </>
  )
}

export default AgencyStartUpPage
