'use client'

import React, { useState } from 'react';



const FeaturedBooksSection = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const [isAnimating, setIsAnimating] = useState(false);



  const books = [

    {

      id: 1,

      title: "WHISPERS OF THE AEGEAN",

      subtitle: "A Tale of Ancient Secrets",

      author: "Elena Markos",

      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",

      textColor: "#eeeae7"

    },

    {

      id: 2,

      title: "BENEATH OLIVE GROVES",

      subtitle: "Stories from the Coast",

      author: "Marco Santini",

      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",

      textColor: "#eeeae7"

    },

    {

      id: 3,

      title: "SAILING HOME",

      subtitle: "A Journey Across Seas",

      author: "Sofia Valencia",

      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",

      textColor: "#eeeae7"

    },

    {

      id: 4,

      title: "THE LAST VOYAGE",

      subtitle: "Chronicles of Discovery",

      author: "Andreas Dimitri",

      image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400&h=600&fit=crop",

      textColor: "#eeeae7"

    },

    {

      id: 5,

      title: "WHISPERS OF THE AEGEAN",

      subtitle: "A Tale of Ancient Secrets",

      author: "Elena Markos",

      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",

      textColor: "#eeeae7"

    },

    {

      id: 6,

      title: "BENEATH OLIVE GROVES",

      subtitle: "Stories from the Coast",

      author: "Marco Santini",

      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",

      textColor: "#eeeae7"

    },

    {

      id: 7,

      title: "SAILING HOME",

      subtitle: "A Journey Across Seas",

      author: "Sofia Valencia",

      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",

      textColor: "#eeeae7"

    },

    {

      id: 8,

      title: "THE LAST VOYAGE",

      subtitle: "Chronicles of Discovery",

      author: "Andreas Dimitri",

      image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400&h=600&fit=crop",

      textColor: "#eeeae7"

    }

  ];



  // Calculate books per slide based on screen size (default to 4 for desktop)

  const booksPerSlide = 4;

  const totalSlides = Math.max(1, Math.ceil(books.length / booksPerSlide));

 

  // Repeat books to fill empty slots if needed

  const displayBooks = React.useMemo(() => {
  const needed = booksPerSlide * totalSlides;
  if (books.length >= needed) return books;
  return [...books, ...books.slice(0, needed - books.length)];
}, [booksPerSlide, totalSlides]);




  const handleSlideChange = (index: number) => {

    if (isAnimating || index === currentSlide) return;

    setIsAnimating(true);

    setCurrentSlide(index);

    setTimeout(() => setIsAnimating(false), 600);

  };



  const getCurrentBooks = () => {

    const startIndex = currentSlide * booksPerSlide;

    return displayBooks.slice(startIndex, startIndex + booksPerSlide);

  };



  return (

    <section className="py-5" style={{

      background: "linear-gradient(135deg, #eeeae7 0%, #d4cfc9 50%, #eeeae7 100%)",

      position: "relative",

      overflow: "hidden"

    }}>

      {/* Decorative Background Elements */}

      <div style={{

        position: "absolute",

        top: "0",

        left: "0",

        width: "100%",

        height: "100%",

        opacity: "0.05",

        backgroundImage: `repeating-linear-gradient(45deg, #0f252f 0px, #0f252f 2px, transparent 2px, transparent 10px)`,

        pointerEvents: "none"

      }}></div>



      <div className="container position-relative" style={{ zIndex: 1 }}>

        {/* Header */}

        <div className="text-center mb-5">

          <h2

            className="display-4 fw-light mb-3"

            style={{

              color: "#0f252f",

              letterSpacing: "2px",

              fontFamily: "Georgia, serif"

            }}

          >

            Literary Treasures of the <span style={{ color: "#364a52", fontWeight: "600" }}>Mediterranean</span>

          </h2>

          <h3

            className="h4 mb-4"

            style={{

              color: "#364a52",

              fontWeight: "400",

              fontFamily: "Georgia, serif"

            }}

          >

            Explore Our Distinguished Collection

          </h3>

          <p

            className="mx-auto"

            style={{

              maxWidth: "900px",

              color: "#0f252f",

              fontSize: "1.1rem",

              lineHeight: "1.8",

              opacity: "0.9"

            }}

          >

            At Mediterranean Publishing, we craft narratives that transport readers across azure waters and sun-drenched shores.

            Our expert authors weave tales of adventure, romance, and mystery, bringing the rich cultural tapestry of the

            Mediterranean to life through every carefully chosen word.

          </p>

        </div>



        {/* Books Display */}

        <div

          className="row justify-content-center g-5 mt-5 pt-4"

          style={{

            transition: "opacity 0.6s ease, transform 0.6s ease",

            opacity: isAnimating ? 0 : 1,

            transform: isAnimating ? "translateY(20px)" : "translateY(0)"

          }}

        >

          {getCurrentBooks().map((book, index) => (

            <div key={`${book.id}-${currentSlide}-${index}`} className="col-lg-3 col-md-6 col-sm-6">

              <div

                className="position-relative"

                style={{

                  minHeight: "450px",

                  display: "flex",

                  justifyContent: "center",

                  alignItems: "center",

                  perspective: "1000px"

                }}

              >

                {/* Book Stack - Two books */}

                <div style={{ position: "relative", width: "100%", maxWidth: "260px" }}>

                  {/* Back Book */}

                  <div

                    style={{

                      width: "260px",

                      height: "380px",

                      backgroundImage: `url(${book.image})`,

                      backgroundSize: "cover",

                      backgroundPosition: "center",

                      borderRadius: "8px",

                      boxShadow: "0 20px 40px rgba(15, 37, 47, 0.3)",

                      position: "absolute",

                      left: "0",

                      top: "0",

                      transform: "rotate(-5deg) translateX(-10px)",

                      transition: "all 0.3s ease",

                      zIndex: 1,

                      filter: "brightness(0.9)"

                    }}

                    className="book-back"

                  ></div>



                  {/* Front Book */}

                  <div

                    style={{

                      width: "260px",

                      height: "380px",

                      backgroundImage: `url(${book.image})`,

                      backgroundSize: "cover",

                      backgroundPosition: "center",

                      borderRadius: "8px",

                      boxShadow: "0 25px 50px rgba(15, 37, 47, 0.4)",

                      position: "relative",

                      transform: "rotate(5deg) translateX(10px)",

                      transition: "all 0.3s ease",

                      zIndex: 2,

                      cursor: "pointer",

                      overflow: "hidden"

                    }}

                    className="book-front"

                    onMouseEnter={(e) => {

                      const parent = e.currentTarget.parentElement;

                      const backBook = parent?.querySelector('.book-back') as HTMLElement|null;

                      if (backBook) {

                        backBook.style.transform = "rotate(-8deg) translateX(-15px)";

                      }

                      e.currentTarget.style.transform = "rotate(8deg) translateX(15px) translateY(-10px)";

                    }}

                    onMouseLeave={(e) => {

                      const parent = e.currentTarget.parentElement;

                      const backBook = parent?.querySelector('.book-back')as HTMLElement|null;

                      if (backBook) {

                        backBook.style.transform = "rotate(-5deg) translateX(-10px)";

                      }

                      e.currentTarget.style.transform = "rotate(5deg) translateX(10px)";

                    }}

                  >

                    {/* Dark Overlay for Text Readability */}

                    <div style={{

                      position: "absolute",

                      top: 0,

                      left: 0,

                      right: 0,

                      bottom: 0,

                      background: "linear-gradient(to bottom, rgba(15, 37, 47, 0.3) 0%, rgba(15, 37, 47, 0.8) 100%)",

                      display: "flex",

                      flexDirection: "column",

                      justifyContent: "flex-end",

                      padding: "30px 25px"

                    }}>

                      {/* Book Title & Info */}

                      <div style={{ position: "relative", zIndex: 1 }}>

                        <h4

                          style={{

                            color: book.textColor,

                            fontSize: "1.5rem",

                            fontWeight: "bold",

                            marginBottom: "8px",

                            letterSpacing: "1px",

                            textShadow: "2px 2px 6px rgba(0,0,0,0.5)",

                            lineHeight: "1.3"

                          }}

                        >

                          {book.title}

                        </h4>

                        <p

                          style={{

                            color: book.textColor,

                            fontSize: "0.95rem",

                            fontStyle: "italic",

                            opacity: "0.9",

                            marginBottom: "15px",

                            textShadow: "1px 1px 3px rgba(0,0,0,0.5)"

                          }}

                        >

                          {book.subtitle}

                        </p>

                        <div

                          style={{

                            width: "60px",

                            height: "2px",

                            background: book.textColor,

                            margin: "0 0 12px 0",

                            opacity: "0.6"

                          }}

                        ></div>

                        <p

                          style={{

                            color: book.textColor,

                            fontSize: "1rem",

                            fontStyle: "italic",

                            marginBottom: "0",

                            textShadow: "1px 1px 3px rgba(0,0,0,0.5)"

                          }}

                        >

                          by {book.author}

                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>



        {/* Navigation Dots */}

        <div className="text-center mt-5 pt-3">

          <div className="d-inline-flex gap-3">

            {Array.from({ length: totalSlides }).map((_, dot) => (

              <button

                key={dot}

                onClick={() => handleSlideChange(dot)}

                disabled={isAnimating}

                style={{

                  width: "12px",

                  height: "12px",

                  borderRadius: "50%",

                  backgroundColor: dot === currentSlide ? "#364a52" : "#d4cfc9",

                  border: "none",

                  cursor: isAnimating ? "not-allowed" : "pointer",

                  transition: "all 0.3s ease",

                  opacity: isAnimating ? 0.5 : 1

                }}

                onMouseEnter={(e) => {

                  if (!isAnimating) {

                    e.currentTarget.style.backgroundColor = "#364a52";

                    e.currentTarget.style.transform = "scale(1.2)";

                  }

                }}

                onMouseLeave={(e) => {

                  if (dot !== currentSlide) {

                    e.currentTarget.style.backgroundColor = "#d4cfc9";

                  }

                  e.currentTarget.style.transform = "scale(1)";

                }}

                aria-label={`View book collection ${dot + 1}`}

              ></button>

            ))}

          </div>

        </div>

      </div>

    </section>

  );

};



export default FeaturedBooksSection;