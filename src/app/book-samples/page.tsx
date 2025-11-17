import React from "react";
import HeroSlider from "../book-samples/components/HeroSlider/HeroSlider";
import { bookData } from "./data"; // ✅ import your book data
import TopNavbar from "../home/components/TopNavbar";
import Footer from "../home/components/Footer";
import Hero from "./components/Hero";

export const metadata = {
  title: "Book Samples | Mediterranean Publishing – Preview Our Published Work",
  description: "Explore professional book samples crafted by Mediterranean Publishing. View examples of our eBook writing, ghostwriting, editing, cover design, and publishing work across various genres.",
  keywords: [
    "book samples",
    "published book examples",
    "Mediterranean Publishing samples",
    "ebook writing samples",
    "ghostwriting samples",
    "editing samples",
    "cover design samples",
    "published books portfolio",
    "author services samples"
  ],
  openGraph: {
    title: "Book Samples | Mediterranean Publishing – Preview Our Published Books",
    description: "Browse real book samples created by Mediterranean Publishing, including writing, editing, and design examples.",
    url: "https://www.mediterraneanpublishing.com/book-samples",
    siteName: "Mediterranean Publishing",
    images: [
      {
        url: "https://www.mediterraneanpublishing.com/og-book-samples.jpg",
        width: 1200,
        height: 630,
        alt: "Book Samples – Mediterranean Publishing"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Samples | Mediterranean Publishing",
    description: "View professionally crafted book samples from Mediterranean Publishing.",
    images: ["https://www.mediterraneanpublishing.com/og-book-samples.jpg"]
  }
};

export default function BookSamplesPage() {
  return (
    <main>
      <TopNavbar />
      <Hero />
      <HeroSlider books={bookData} /> {/* ✅ use bookData here */}
      <Footer />
    </main>
  );
}
