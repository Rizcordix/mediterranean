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
  title: "Book Video Trailer Creation | Mediterranean Publishing – Bring Your Story to Life",
  description: "Professional book video trailer creation with cinematic visuals, engaging scripts, and dynamic editing to help your book stand out.",
  keywords: [
    "book video trailer",
    "book trailer creation",
    "cinematic book trailers",
    "video marketing for authors",
    "Mediterranean Publishing trailers"
  ],
  openGraph: {
    title: "Book Video Trailer Services | Mediterranean Publishing",
    description: "Cinematic book video trailers designed to captivate readers.",
    url: "https://www.mediterraneanpublishing.com/book-video-trailer",
    siteName: "Mediterranean Publishing",
    images: [
      {
        url: "https://www.mediterraneanpublishing.com/og-book-video-trailer.jpg",
        width: 1200,
        height: 630,
        alt: "Book Trailer – Mediterranean Publishing"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Video Trailer Services | Mediterranean Publishing",
    description: "Cinematic trailers for powerful book marketing.",
    images: ["https://www.mediterraneanpublishing.com/og-book-video-trailer.jpg"]
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
      <PricingComponent defaultTab={4} />
      <ProcedureSection />
      <Categories />
      <Testimonials />
      <ActionBox />
      <Footer />
    </>
  )
}

export default AgencyStartUpPage
