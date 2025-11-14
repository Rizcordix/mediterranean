import React from "react";
import HeroSlider from "../book-samples/components/HeroSlider/HeroSlider";
import { bookData } from "./data"; // ✅ import your book data
import TopNavbar from "../home/components/TopNavbar";
import Footer from "../home/components/Footer";
import Hero from "./components/Hero";

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
