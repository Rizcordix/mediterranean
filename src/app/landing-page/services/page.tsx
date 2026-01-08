// import React from 'react'
import TopNavbar from './components/TopNavbar'
// import Footer from '../../home/components/Footer'
import Hero from './components/Hero';
import ProblemSolveSection from './components/problem';
import PublishingFeatures from './components/feature';
import LaunchOfferSection from './components/launch';
import Testimonials from './components/testimonial';
import PricingComponent from './components/Pricing';
import FAQ from './components/Faq';
import PublishingComparison from './components/comparison';
import FinalCTABanner from './components/final_cta';
import MidPageCTA from './components/mid_cta';
import Footer from '../../home/components/Footer';

export const metadata = {
  title: "Publish Your Book in 90 Days | Professional Book Publishing Services",
  description:
    "All-in-one book publishing in 90 days. Writing, editing, cover design, ISBN, Amazon KDP, global distribution & marketing. No freelancers. No hidden fees. 5,000+ authors published.",

  keywords: [
    "publish a book",
    "book publishing services",
    "self publishing company",
    "Amazon KDP publishing",
    "professional book writing",
    "book editing and proofreading",
    "book cover design",
    "ISBN registration service",
    "audiobook production",
    "ghostwriting services",
    "book marketing services",
    "author platform building",
    "business book publishing",
    "memoir publishing services",
    "fiction book publishing",
    "Mediterranean Publishing"
  ],

  authors: [{ name: "Mediterranean Publishing" }],
  creator: "Mediterranean Publishing",
  publisher: "Mediterranean Publishing",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  metadataBase: new URL("https://mediterraneanpublishing.com/landing-page/services"),

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    title: "Transform Your Story Into a Published Book in 90 Days",
    description:
      "Stop juggling freelancers and wasting months. Mediterranean Publishing handles writing, editing, design, ISBN, Amazon KDP, and global marketing—so your book gets published right.",
    url: "https://mediterraneanpublishing.com/landing-page/services",
    siteName: "Mediterranean Publishing",
    images: [
      {
        url: "/og-publish-book-90-days.jpg",
        width: 1200,
        height: 630,
        alt: "Mediterranean Publishing – Complete Book Publishing Solution",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Publish Your Book in 90 Days | Mediterranean Publishing",
    description:
      "One team. One vision. No hidden costs. Publish your book professionally with Mediterranean Publishing—writing, editing, design, ISBN & marketing included.",
    images: ["/og-publish-book-90-days.jpg"],
    creator: "@MediterraneanPub",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },

  other: {
    "theme-color": "#364a52",
    "msapplication-TileColor": "#364a52",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Mediterranean Publishing",
    "application-name": "Mediterranean Publishing",
    "msapplication-config": "/browserconfig.xml",
  },
};

const AgencyStartUpPage = () => {
  return (
    <>
      <TopNavbar />
      <Hero />
      <ProblemSolveSection />
      <PublishingFeatures />
      <LaunchOfferSection />
      <Testimonials />
        <MidPageCTA />
      <PricingComponent />
        <FAQ />
        <PublishingComparison />
        <FinalCTABanner />
        <Footer />
    </>
  )
}

export default AgencyStartUpPage
