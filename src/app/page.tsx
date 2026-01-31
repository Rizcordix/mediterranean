import React, { lazy, Suspense } from 'react'
import Hero from './home/components/Hero'

const TopNavbar = lazy(() => import('./home/components/TopNavbar'))
const AboutUs = lazy(() => import('./home/components/AboutUs'))
const Clients = lazy(() => import('./services/bookwriting/components/Clients'))
const Service = lazy(() => import('./home/components/Service'))
const FeaturedBooksSection = lazy(() => import('./home/components/portfolio'))
const EditingSamples = lazy(() => import('./home/components/editing'))
const CTA = lazy(() => import('./home/components/Features'))
const PricingComponent = lazy(() => import('./home/components/Pricing'))
const ProcedureSection = lazy(() => import('./home/components/procedure'))
const Info = lazy(() => import('./home/components/Info'))
const Categories = lazy(() => import('./home/components/Categories'))
const Testimonials = lazy(() => import('./home/components/Testimonial'))
const ActionBox = lazy(() => import('./about/components/ActionBox'))
const Footer = lazy(() => import('./home/components/Footer'))

export const metadata = {
  title: "Mediterranean Publishing | Professional eBook Writing, Publishing & Marketing Services",
  description: "Mediterranean Publishing offers expert eBook writing, editing, cover design, book publishing, and marketing services. Transform your ideas into published books with professional support.",
  keywords: [
    "eBook writing",
    "book publishing",
    "book marketing",
    "cover design",
    "proofreading",
    "ghostwriting",
    "audio books",
    "book video trailer",
    "Mediterranean Publishing"
  ],
  openGraph: {
    title: "Mediterranean Publishing | Professional eBook Writing & Publishing",
    description: "Expert eBook writing, editing, cover design, book publishing, and marketing services to bring your book ideas to life.",
    url: "https://www.mediterraneanpublishing.com/",
    siteName: "Mediterranean Publishing",
    images: [
      {
        url: "https://www.mediterraneanpublishing.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mediterranean Publishing Services"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mediterranean Publishing | Professional eBook Writing & Publishing",
    description: "Expert eBook writing, editing, cover design, book publishing, and marketing services.",
    images: ["https://www.mediterraneanpublishing.com/og-image.jpg"]
  }
};

const CreativeAgencyPage = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <TopNavbar />
        <AboutUs />
        <div className="divider mb-3" />
        <Clients />
        <div className="divider mt-2" />
        <Service />
        <FeaturedBooksSection />
        <EditingSamples />
        <CTA />
        <PricingComponent />
        <ProcedureSection />
        <Info />
        <Categories />
        <Testimonials />
        <ActionBox />
        <Footer />
      </Suspense>
    </>
  )
}

export default CreativeAgencyPage
