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
import Footer from './components/Footer';

export const metadata = {
  title: "Author's Legacy Program | Mediterranean Publishing | Build Your Author Platform",
  description: "Transform your expertise into a published book and build your authority with Mediterranean Publishing's Author's Legacy program. Complete publishing, platform building, and marketing for coaches, consultants, and thought leaders.",
  keywords: [
    "book publishing",
    "author platform",
    "thought leadership",
    "Mediterranean Publishing",
    "Author's Legacy",
    "publishing services",
    "book marketing",
    "author branding",
    "expert publishing",
    "consultant publishing",
    "coach publishing",
    "business book publishing",
    "international book distribution",
    "author authority building"
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
    title: "Author's Legacy Program | Mediterranean Publishing",
    description: "Transform your expertise into a published book and build your authority. Complete publishing, platform building, and marketing for ambitious authors.",
    url: "https://mediterraneanpublishing.com/landing-page/services",
    siteName: "Mediterranean Publishing",
    images: [
      {
        url: "/favicon.ico",
        width: 50,
        height: 50,
        alt: "Mediterranean Publishing - Author's Legacy Program",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Author's Legacy Program | Mediterranean Publishing",
    description: "Transform your expertise into a published book and build your authority. Complete publishing, platform building, and marketing for ambitious authors.",
    images: ["/twitter-image.jpg"],
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
