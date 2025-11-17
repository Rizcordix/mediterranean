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
  title: "Book Printing Services | Mediterranean Publishing – Premium & Affordable",
  description: "High-quality, affordable book printing services including paperback, hardcover, POD, and custom print options. Mediterranean Publishing brings your book to life.",
  keywords: [
    "book printing services",
    "affordable book printing",
    "print my book",
    "hardcover printing",
    "paperback printing",
    "Mediterranean Publishing printing"
  ],
  openGraph: {
    title: "Book Printing Services | Mediterranean Publishing",
    description: "Premium printing solutions for authors and publishers.",
    url: "https://www.mediterraneanpublishing.com/book-printing",
    siteName: "Mediterranean Publishing",
    images: [
      {
        url: "https://www.mediterraneanpublishing.com/og-book-printing.jpg",
        width: 1200,
        height: 630,
        alt: "Book Printing – Mediterranean Publishing"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Printing Services | Mediterranean Publishing",
    description: "High-quality book printing made simple.",
    images: ["https://www.mediterraneanpublishing.com/og-book-printing.jpg"]
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
      <PricingComponent defaultTab={2} />
      <ProcedureSection />
      <Categories />
      <Testimonials />
      <ActionBox />
      <Footer />
    </>
  )
}

export default AgencyStartUpPage
