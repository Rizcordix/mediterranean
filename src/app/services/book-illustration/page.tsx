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
  title: "Book Illustration Services | Mediterranean Publishing – Bring Your Story to Life",
  description: "Custom book illustrations for children's books, novels, comics, and more. Mediterranean Publishing creates visually stunning, story-enhancing artwork.",
  keywords: [
    "book illustration services",
    "hire illustrator",
    "children's book illustrations",
    "custom book art",
    "Mediterranean Publishing illustration",
    "illustration for authors"
  ],
  openGraph: {
    title: "Book Illustration Services | Mediterranean Publishing",
    description: "Beautiful and professional illustrations for all genres.",
    url: "https://www.mediterraneanpublishing.com/book-illustration",
    siteName: "Mediterranean Publishing",
    images: [
      {
        url: "https://www.mediterraneanpublishing.com/og-book-illustration.jpg",
        width: 1200,
        height: 630,
        alt: "Book Illustration – Mediterranean Publishing"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Illustration Services | Mediterranean Publishing",
    description: "Custom illustrations for authors and publishers.",
    images: ["https://www.mediterraneanpublishing.com/og-book-illustration.jpg"]
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
