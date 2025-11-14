'use client'
import React from 'react'

interface Review {
  id: number;
  name: string;
  role: string;
  rating: number;
  text: string;
  bookCover: string;
}

const reviewsData: Review[] = [
  {
    id: 1,
    name: "Andy G.",
    role: "Author",
    rating: 5,
    text: "The ebook ghostwriting service was fantastic, and I was really satisfied. The talented authors at Mediterranean Publishing really brought my concept to life. I am satisfied, extremely glad, and would never have thought they were able to deliver me a phenomenal book!",
    bookCover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop"
  },
  {
    id: 2,
    name: "Fitz",
    role: "Novelist",
    rating: 5,
    text: "Mediterranean Publishing deserves thanks for delivering a fantastic experience. Their experts did a fantastic job translating my words into an exceptional piece - wholeheartedly advise them to other fellow authors!",
    bookCover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop"
  },
  {
    id: 3,
    name: "Angel",
    role: "Author",
    rating: 5,
    text: "Mediterranean Publishing's services improved my online presence dramatically. The sleek design and intelligent approach were successful. I emphatically recommend this platform.",
    bookCover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop"
  },
  {
    id: 4,
    name: "John L.",
    role: "Writer",
    rating: 5,
    text: "We were overwhelmed by the visual masterpiece thanks to the book illustration service. Mediterranean Publishing's graphics created excellent images of my characters. Their experience will bring life and excellence to stories!",
    bookCover: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=400&fit=crop"
  },
  {
    id: 5,
    name: "Mrs. Stella",
    role: "Author",
    rating: 5,
    text: "Thank you for your careful proofreading service. Mediterranean Publishing - My work is impeccable and ready for publication thanks to their commitment to detail. Strongly recommended!",
    bookCover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=400&fit=crop"
  },
  {
    id: 6,
    name: "Hailey",
    role: "Writer",
    rating: 5,
    text: "Choosing Mediterranean Publishing for publication transformed my authoring journey. Their talented team diligently edited my piece, dramatically increasing its reach and influence. Their dedication to quality and visibility is unrivaled!",
    bookCover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=400&fit=crop"
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '1rem' }}>
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill={index < rating ? "#FFD700" : "#D3D3D3"}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
};

const Reviews: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#eeeae7', padding: '80px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto 60px', textAlign: 'center' }}>
          <h2 
            style={{ 
              fontSize: 'clamp(2rem, 5vw, 2.5rem)',
              color: '#0f252f',
              lineHeight: '1.2',
              marginBottom: '1rem',
              fontWeight: 'bold'
            }}
          >
            Here Is What Our Clients{' '}
            <span style={{ color: '#364a52' }}>Say About Our Services</span>
          </h2>
          <p style={{ color: '#364a52', fontSize: '1.1rem', lineHeight: '1.6' }}>
            We have a proven track record of providing high-quality services. Here are some of our clients' thoughts on our work.
          </p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {reviewsData.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        padding: '30px',
        boxShadow: isHovered 
          ? '0 15px 50px rgba(15, 37, 47, 0.15)' 
          : '0 10px 40px rgba(15, 37, 47, 0.08)',
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <div 
          style={{
            width: '100px',
            height: '140px',
            margin: '0 auto',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 5px 20px rgba(15, 37, 47, 0.15)'
          }}
        >
          <img 
            src={review.bookCover} 
            alt="Book cover"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
      </div>

      <p 
        style={{ 
          color: '#364a52',
          fontSize: '0.95rem',
          lineHeight: '1.7',
          flex: 1,
          marginBottom: '1.5rem'
        }}
      >
        "{review.text}"
      </p>

      <div>
        <StarRating rating={review.rating} />
        
        <div style={{ textAlign: 'center' }}>
          <h5 
            style={{ 
              color: '#0f252f',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              marginBottom: '0.25rem'
            }}
          >
            {review.name}
          </h5>
          <p 
            style={{ 
              color: '#364a52',
              fontSize: '0.9rem',
              fontWeight: '500',
              marginBottom: '1rem'
            }}
          >
            {review.role}
          </p>
          
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '8px' 
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#00b67a">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span style={{ color: '#00b67a', fontWeight: 'bold', fontSize: '0.9rem' }}>
              Trustpilot
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews