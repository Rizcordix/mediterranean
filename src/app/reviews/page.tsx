import React from 'react'
import Hero from './components/Heros'
import Reviews from './components/review'
import TopNavbar from '../home/components/TopNavbar'
import Footer from '../home/components/Footer'
import Careers from './components/Careers'
import FeaturedBooksSection from '../home/components/portfolio'
import ProcedureSection from '../home/components/procedure'

export const metadata = {
  title: "Customer Reviews | Mediterranean Publishing – Trusted by Authors Worldwide",
  description: "Read real customer reviews of Mediterranean Publishing. See what authors say about our eBook writing, editing, cover design, publishing, and marketing services.",
  keywords: [
    "Mediterranean Publishing reviews",
    "customer reviews",
    "trustpilot reviews",
    "book writing service reviews",
    "ebook publishing testimonials",
    "author feedback",
    "client testimonials"
  ],
  openGraph: {
    title: "Customer Reviews | Mediterranean Publishing – Trusted by Authors Worldwide",
    description: "Explore verified Trustpilot reviews and testimonials from authors who worked with Mediterranean Publishing for writing, editing, publishing, and marketing.",
    url: "https://www.mediterraneanpublishing.com/reviews",
    siteName: "Mediterranean Publishing",
    images: [
      {
        url: "https://www.mediterraneanpublishing.com/og-reviews.jpg",
        width: 1200,
        height: 630,
        alt: "Mediterranean Publishing Reviews"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Reviews | Mediterranean Publishing",
    description: "Read verified customer testimonials from authors who trust Mediterranean Publishing.",
    images: ["https://www.mediterraneanpublishing.com/og-reviews.jpg"]
  }
};

const ReviewPage = () => {
  return (
    <>
      <TopNavbar />
      <Hero />
      <Reviews />
      <Careers />
        <FeaturedBooksSection />
        <ProcedureSection />
      <Footer />
    </>
  )
}

export default ReviewPage
