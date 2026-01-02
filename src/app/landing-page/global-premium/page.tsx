import React from 'react'
import TopNavbar from './components/TopNavbar'
import Footer from '../../home/components/Footer'
import Hero from './components/Hero';
import TargetAudience from './components/Target';
import AuthorsLegacyDifference from './components/legacy';
import CTA from './components/Features';
import FeaturesShowcase from './components/FeaturesShowcase';
import AuthorSuccessStories from './components/SuccessStories';
import Clients from '../../services/bookwriting/components/Clients';
import FAQ from './components/Faq';
import FinalCTA from './components/FinalCta';

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
  metadataBase: new URL("https://mediterraneanpublishing.com/landing-page/global-premium"),
  alternates: {
    canonical: "/landing-page/global-premium",
  },
  openGraph: {
    title: "Author's Legacy Program | Mediterranean Publishing",
    description: "Transform your expertise into a published book and build your authority. Complete publishing, platform building, and marketing for ambitious authors.",
    url: "https://mediterraneanpublishing.com/landing-page/global-premium",
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
      {/* <div className="divider mt-5" /> */}
      <Clients />
      {/* <div className="divider mb-5" /> */}
      <TargetAudience />
      <CTA />                                                                                 
      <AuthorsLegacyDifference />
      <FeaturesShowcase />
      <AuthorSuccessStories />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  )
}

export default AgencyStartUpPage
