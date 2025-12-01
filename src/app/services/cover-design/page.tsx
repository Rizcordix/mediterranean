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
  title: "Book Cover Design Services | Mediterranean Publishing – Stunning & Market-Ready",
  description: "Eye-catching, professional book cover design tailored to your genre. Mediterranean Publishing delivers covers that attract readers and boost sales.",
  keywords: [
    "book cover design",
    "hire cover designer",
    "custom book covers",
    "professional cover design",
    "Mediterranean Publishing covers",
    "ebook cover design"
  ],
  openGraph: {
    title: "Book Cover Design Services | Mediterranean Publishing",
    description: "Professional, genre-focused cover designs for authors.",
    url: "https://www.mediterraneanpublishing.com/cover-design",
    siteName: "Mediterranean Publishing",
    images: [
      {
        url: "https://www.mediterraneanpublishing.com/og-cover-design.jpg",
        width: 1200,
        height: 630,
        alt: "Book Cover Design – Mediterranean Publishing"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Cover Design Services | Mediterranean Publishing",
    description: "Custom, high-impact book cover design.",
    images: ["https://www.mediterraneanpublishing.com/og-cover-design.jpg"]
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
      <Component0 id={10} />
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
