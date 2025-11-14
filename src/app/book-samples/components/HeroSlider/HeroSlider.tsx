"use client";
import React, { useState , useEffect } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import BookModal from "../BookModal/BookModal";
import type { Book } from "../../data";

type Props = { books: Book[] };

export default function HeroSlider({ books }: Props) {
  const [current, setCurrent] = useState(0);
  const [openBook, setOpenBook] = useState<Book | null>(null);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
    },
    slideChanged(s) {
      setCurrent(s.track.details.rel);
    },
  });

  useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      slider.current?.next();
    } else if (e.key === "ArrowLeft") {
      slider.current?.prev();
    }
  };

  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}, [slider]);

  return (
    <>
      <section className="hero-slider">
        <div ref={sliderRef} className="keen-slider slider-container">
          {books.map((book, idx) => {
            const reverse = idx % 2 === 1;
            return (
              <div key={book.id} className="keen-slider__slide slide">
                <div className={`slide-inner ${reverse ? "reverse" : ""}`}>
                  <button
                    className="cover-button"
                    onClick={() => setOpenBook(book)}
                    aria-label={`Open preview for ${book.title}`}
                  >
                    <div className="book-cover">
                      <Image
                        src={book.cover}
                        alt={book.title}
                        width={420}
                        height={620}
                        priority={idx === 0}
                      />
                    </div>
                  </button>

                  <div className="content-copy">
                    <h2 className="book-title">{book.title}</h2>
                    <p className="book-author">{book.author}</p>
                    <p className="book-blurb">{book.blurb}</p>
                    <div className="action-buttons">
                      <button
                        className="cta-button"
                        onClick={() => setOpenBook(book)}
                        aria-label={`Preview ${book.title}`}
                      >
                        Preview
                      </button>
                      <a
                        className="learn-more-link"
                        href= '/contact'
                        aria-label={`Learn more about ${book.title}`}
                      >
                        Contact Us!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation arrows */}
        <button
          className="nav-arrow left"
          onClick={() => slider.current?.prev()}
          aria-label="Previous slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button
          className="nav-arrow right"
          onClick={() => slider.current?.next()}
          aria-label="Next slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="dots-navigation">
          {books.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === current ? "active" : ""}`}
              onClick={() => slider.current?.moveToIdx(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {openBook && <BookModal book={openBook} onClose={() => setOpenBook(null)} />}

      <style jsx>{`
        :global(:root) {
          --bg-primary: #0f252f;
          --bg-secondary: #364a52;
          --text-light: #0f252f;
          --bg-primary2: #eeeae7;
        }

        .hero-slider {
          position: relative;
          min-height: 85vh;
          // max-height: 95vh;
          background-color: var(--bg-primary2);
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
        }

        .slider-container {
          width: 100%;
          height: 100%;
        }

        .slide {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 85vh;
          padding: 4rem 2rem;
        }

        .slide-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4rem;
          max-width: 1400px;
          width: 100%;
          margin: 0 auto;
        }

        .slide-inner.reverse {
          flex-direction: row-reverse;
        }

        .cover-button {
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cover-button:hover {
          transform: translateY(-8px);
        }

        .cover-button:focus {
          outline: 2px solid var(--text-light);
          outline-offset: 4px;
        }

        .book-cover {
          position: relative;
          width: 420px;
          height: 520px;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }

        .cover-button:hover .book-cover {
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          transform: scale(1.02);
        }

        .book-cover :global(img) {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }

        .content-copy {
          flex: 1;
          max-width: 600px;
          color: var(--text-light);
        }

        .book-title {
          font-family: "Playfair Display", serif;
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin: 0 0 1rem 0;
          color: var(--text-light);
        }

        .book-author {
          font-family: "Inter", sans-serif;
          font-size: 1.25rem;
          font-weight: 400;
          margin: 0 0 2rem 0;
          opacity: 0.85;
          letter-spacing: 0.05em;
        }

        .book-blurb {
          font-family: "Inter", sans-serif;
          font-size: 1.125rem;
          line-height: 1.8;
          margin: 0 0 2.5rem 0;
          opacity: 0.9;
        }

        .action-buttons {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .cta-button {
          font-family: "Inter", sans-serif;
          font-size: 1rem;
          font-weight: 600;
          padding: 1rem 2.5rem;
          background-color: var(--bg-primary);
          color: var(--bg-primary2);
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .cta-button:hover {
          background-color: #4a6069;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }

        .cta-button:active {
          transform: translateY(0);
        }

        .cta-button:focus {
          outline: 2px solid var(--text-light);
          outline-offset: 2px;
        }

        .learn-more-link {
          font-family: "Inter", sans-serif;
          font-size: 1rem;
          font-weight: 500;
          color: var(--text-light);
          text-decoration: none;
          position: relative;
          transition: all 0.3s ease;
          opacity: 0.85;
        }

        .learn-more-link::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--text-light);
          transition: width 0.3s ease;
        }

        .learn-more-link:hover {
          opacity: 1;
        }

        .learn-more-link:hover::after {
          width: 100%;
        }

        .learn-more-link:focus {
          outline: 2px solid var(--text-light);
          outline-offset: 4px;
        }

        .dots-navigation {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 1rem;
          z-index: 10;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: var(--text-light);
          opacity: 0.3;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .dot:hover {
          opacity: 0.6;
          transform: scale(1.2);
        }

        .dot.active {
          opacity: 1;
          transform: scale(1.3);
        }

        .dot:focus {
          outline: 2px solid var(--text-light);
          outline-offset: 3px;
        }

        /* Arrow styles */
        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 20;
          width: 48px;
          height: 48px;
          border-radius: 8px;
          border: none;
          background: rgba(255, 255, 255, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 6px 18px rgba(0,0,0,0.15);
          transition: all 0.2s ease;
          padding: 0;
        }

        .nav-arrow:hover {
          transform: translateY(-50%) scale(1.05);
        }

        .nav-arrow:focus {
          outline: 2px solid var(--text-light);
          outline-offset: 4px;
        }

        .nav-arrow.left {
          left: 1.25rem;
        }

        .nav-arrow.right {
          right: 1.25rem;
        }

        .nav-arrow svg {
          width: 20px;
          height: 20px;
          color: var(--bg-primary);
        }

        @media (max-width: 1024px) {
          .hero-slider {
            min-height: 85vh;
            max-height: none;
          }
          .slide-inner {
            gap: 3rem;
          }

          .book-cover {
            width: 350px;
            height: 517px;
          }

          .book-title {
            font-size: 2.75rem;
          }

          .nav-arrow {
            width: 44px;
            height: 44px;
          }
        }

        @media (max-width: 768px) {
          .slide {
            padding: 3rem 1.5rem;
          }

          .slide-inner,
          .slide-inner.reverse {
            flex-direction: column;
            gap: 2.5rem;
          }

          .book-cover {
            width: 300px;
            height: 443px;
          }

          .content-copy {
            text-align: center;
            max-width: 100%;
          }

          .book-title {
            font-size: 2.25rem;
          }

          .book-author {
            font-size: 1.125rem;
          }

          .book-blurb {
            font-size: 1rem;
          }

          .action-buttons {
            justify-content: center;
          }

          .dots-navigation {
            bottom: 2rem;
          }

          .nav-arrow.left {
            left: 0.75rem;
          }

          .nav-arrow.right {
            right: 0.75rem;
          }
        }

        @media (max-width: 480px) {
          .slide {
            padding: 2rem 1rem;
          }

          .book-cover {
            width: 260px;
            height: 384px;
          }

          .book-title {
            font-size: 1.875rem;
          }

          .action-buttons {
            flex-direction: column;
            gap: 1rem;
            width: 100%;
          }

          .cta-button {
            width: 100%;
          }

          .nav-arrow {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </>
  );
}
