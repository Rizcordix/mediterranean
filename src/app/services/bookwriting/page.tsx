import React from 'react'
import TopNavbar from '../../home/components/TopNavbar'
import Hero from './components/Hero'
import Clients from './components/Clients'
import ActionBox from '../../about/components/ActionBox'
import Testimonials from '../../home/components/Testimonial'
import Footer from '../../home/components/Footer'
import PricingComponent from './components/Pricing'
import AboutUs from './components/AboutSection'
import Categories from '@/app/home/components/Categories'
import ProcedureSection from '@/app/home/components/procedure'
import CTA from '@/app/home/components/Features'

export const metadata = {
  title: "Book Writing Services | Mediterranean Publishing – Turn Ideas Into Timeless Books",
  description: "Professional book writing services by Mediterranean Publishing. We transform your ideas into compelling, well-structured, and publish-ready books across all genres.",
  keywords: [
    "book writing services",
    "hire a book writer",
    "professional book writers",
    "Mediterranean Publishing book writing",
    "custom book writing",
    "write my book",
    "book manuscript writing",
    "author writing services"
  ],
  openGraph: {
    title: "Book Writing Services | Mediterranean Publishing",
    description: "Turn your ideas into a powerful book with our expert writing services.",
    url: "https://www.mediterraneanpublishing.com/bookwriting",
    siteName: "Mediterranean Publishing",
    images: [
      {
        url: "https://www.mediterraneanpublishing.com/og-book-writing.jpg",
        width: 1200,
        height: 630,
        alt: "Book Writing Services – Mediterranean Publishing"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Writing Services | Mediterranean Publishing",
    description: "Expert book writing and manuscript development services.",
    images: ["https://www.mediterraneanpublishing.com/og-book-writing.jpg"]
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
