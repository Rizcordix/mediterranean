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
  title: "Book Marketing Services | Mediterranean Publishing – Reach More Readers",
  description: "Strategic book marketing services including digital promotions, author branding, SEO, social campaigns, and more to expand your readership.",
  keywords: [
    "book marketing services",
    "promote my book",
    "author marketing",
    "digital book marketing",
    "Mediterranean Publishing marketing",
    "sell more books"
  ],
  openGraph: {
    title: "Book Marketing Services | Mediterranean Publishing",
    description: "Grow your readership with strategic book marketing.",
    url: "https://www.mediterraneanpublishing.com/book-marketing",
    siteName: "Mediterranean Publishing",
    images: [
      {
        url: "https://www.mediterraneanpublishing.com/og-book-marketing.jpg",
        width: 1200,
        height: 630,
        alt: "Book Marketing – Mediterranean Publishing"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Marketing Services | Mediterranean Publishing",
    description: "Boost your book’s visibility with expert marketing.",
    images: ["https://www.mediterraneanpublishing.com/og-book-marketing.jpg"]
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
