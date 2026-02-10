"use client";
import React, { useState } from 'react';

interface Partner {
  name: string;
  logo: string;
  url: string;
  position: 'outer' | 'middle' | 'center';
}

const PublishingPartnersShowcase: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Define partners with their positions for fade effect
  const partners: Partner[] = [
    // Row 1 - Top outer (faded)
    { name: 'Amazon', logo: 'https://logo.clearbit.com/amazon.com', url: 'https://www.amazon.com', position: 'outer' },
    { name: 'Apple Books', logo: 'https://logo.clearbit.com/apple.com', url: 'https://www.apple.com/apple-books/', position: 'outer' },
    { name: 'Google Play', logo: 'https://logo.clearbit.com/google.com', url: 'https://play.google.com/books', position: 'outer' },
    { name: 'Barnes & Noble', logo: 'https://logo.clearbit.com/barnesandnoble.com', url: 'https://www.barnesandnoble.com', position: 'outer' },
    { name: 'Kobo', logo: 'https://logo.clearbit.com/kobo.com', url: 'https://www.kobo.com', position: 'outer' },
    { name: 'Scribd', logo: 'https://logo.clearbit.com/scribd.com', url: 'https://www.scribd.com', position: 'outer' },
    
    // Row 2 - Middle layer
    { name: 'OverDrive', logo: 'https://logo.clearbit.com/overdrive.com', url: 'https://www.overdrive.com', position: 'middle' },
    { name: 'Hoopla', logo: 'https://logo.clearbit.com/hoopladigital.com', url: 'https://www.hoopladigital.com', position: 'middle' },
    { name: 'Bookshop.org', logo: 'https://logo.clearbit.com/bookshop.org', url: 'https://bookshop.org', position: 'middle' },
    { name: 'Follett', logo: 'https://logo.clearbit.com/follett.com', url: 'https://www.follett.com', position: 'middle' },
    { name: 'Baker & Taylor', logo: 'https://placehold.co/100x100/364a52/ffffff?text=B%26T', url: 'https://www.baker-taylor.com', position: 'middle' },
    { name: 'Perlego', logo: 'https://logo.clearbit.com/perlego.com', url: 'https://www.perlego.com', position: 'middle' },
    
    // Row 3 - Left side before center
    { name: 'VitalSource', logo: 'https://logo.clearbit.com/vitalsource.com', url: 'https://www.vitalsource.com', position: 'middle' },
    { name: 'ProQuest', logo: 'https://logo.clearbit.com/proquest.com', url: 'https://www.proquest.com', position: 'middle' },
    
    // CENTER PLACEHOLDER
    { name: 'CENTER_PLACEHOLDER', logo: '', url: '', position: 'center' },
    
    // Row 3 - Right side after center
    { name: 'EBSCO', logo: 'https://logo.clearbit.com/ebsco.com', url: 'https://www.ebsco.com', position: 'middle' },
    { name: 'Chegg', logo: 'https://logo.clearbit.com/chegg.com', url: 'https://www.chegg.com', position: 'middle' },
    
    // Row 4 - Middle layer
    { name: 'RedShelf', logo: 'https://logo.clearbit.com/redshelf.com', url: 'https://www.redshelf.com', position: 'middle' },
    { name: 'Storytel', logo: 'https://logo.clearbit.com/storytel.com', url: 'https://www.storytel.com', position: 'middle' },
    { name: 'Bolinda', logo: 'https://logo.clearbit.com/bolinda.com', url: 'https://www.bolinda.com', position: 'middle' },
    { name: 'Libby', logo: 'https://placehold.co/100x100/364a52/ffffff?text=Libby', url: 'https://libbyapp.com', position: 'middle' },
    { name: 'Fable', logo: 'https://placehold.co/100x100/364a52/ffffff?text=Fable', url: 'https://www.fable.co', position: 'middle' },
    { name: 'Kortext', logo: 'https://logo.clearbit.com/kortext.com', url: 'https://www.kortext.com', position: 'middle' },
    
    // Row 5 - Bottom outer (faded)
    { name: 'Bibliu', logo: 'https://logo.clearbit.com/bibliu.com', url: 'https://www.bibliu.com', position: 'outer' },
    { name: 'Perusall', logo: 'https://logo.clearbit.com/perusall.com', url: 'https://www.perusall.com', position: 'outer' },
    { name: 'Bookmate', logo: 'https://placehold.co/100x100/eeeae7/364a52?text=BM', url: 'https://www.bookmate.com', position: 'outer' },
    { name: 'Glose', logo: 'https://placehold.co/100x100/eeeae7/364a52?text=GL', url: 'https://www.glose.com', position: 'outer' },
    { name: 'Legible', logo: 'https://placehold.co/100x100/eeeae7/364a52?text=LG', url: 'https://www.legible.com', position: 'outer' },
    { name: 'Odilo', logo: 'https://placehold.co/100x100/eeeae7/364a52?text=OD', url: 'https://www.odilo.us', position: 'outer' },
    { name: 'Tolino', logo: 'https://placehold.co/100x100/eeeae7/364a52?text=TL', url: 'https://www.tolino.com', position: 'outer' },
    { name: 'Snapplify', logo: 'https://placehold.co/100x100/eeeae7/364a52?text=SP', url: 'https://www.snapplify.com', position: 'outer' },
    { name: 'SmashWords', logo: 'https://placehold.co/100x100/eeeae7/364a52?text=SW', url: 'https://www.smashwords.com', position: 'outer' },
    { name: 'TakeaLot.com', logo: 'https://placehold.co/100x100/eeeae7/364a52?text=OD', url: 'https://www.takealot.com', position: 'outer' },
  ];

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .partner-card:hover .partner-logo {
          filter: grayscale(0%) !important;
          opacity: 1 !important;
          transform: scale(1.08);
        }
        
        .partner-card:hover .card-inner {
          border-color: #364a52 !important;
          background-color: rgba(54, 74, 82, 0.02) !important;
        }
        
        @media (max-width: 1200px) {
          .partners-grid {
            grid-template-columns: repeat(5, 1fr) !important;
          }
          .center-card {
            grid-column: 2 / 5 !important;
          }
        }
        
        @media (max-width: 900px) {
          .partners-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
          .center-card {
            grid-column: 1 / 5 !important;
            grid-row: auto !important;
          }
        }
        
        @media (max-width: 600px) {
          .partners-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .center-card {
            grid-column: 1 / 3 !important;
          }
        }
      `}</style>
      
      <section style={styles.section}>
        <div style={styles.container}>
          {/* Header Section */}
          <div style={styles.header}>
            <h2 style={styles.title}>Our Publishing Partners</h2>
            <p style={styles.subtitle}>
              Connecting readers worldwide through 30+ trusted distribution platforms
            </p>
          </div>

          {/* Grid with Center Feature - ClickUp Style */}
          <div className="partners-grid" style={styles.grid}>
            {partners.map((partner, index) => {
              // Render the center card
              if (partner.name === 'CENTER_PLACEHOLDER') {
                return (
                  <div
                    key={index}
                    className="center-card"
                    style={styles.centerCard}
                  >
                    <div style={styles.centerCardInner}>
                      <div style={styles.iconWrapper}>
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                        </svg>
                      </div>
                      <h3 style={styles.centerTitle}>Global Distribution</h3>
                      <p style={styles.centerText}>30+ Distribution Partners</p>
                      <div style={styles.centerStats}>
                        <div style={styles.statItem}>
                          <div style={styles.statNumber}>190+</div>
                          <div style={styles.statLabel}>Countries</div>
                        </div>
                        <div style={styles.statDivider}></div>
                        <div style={styles.statItem}>
                          <div style={styles.statNumber}>∞</div>
                          <div style={styles.statLabel}>Readers</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              
              // Calculate opacity based on position
              const getOpacity = () => {
                if (partner.position === 'outer') return 0.25;
                if (partner.position === 'middle') return 1;
                return 1;
              };
              
              // Render partner cards with border-only style
              return (
                <a
                  key={index}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="partner-card"
                  style={{
                    ...styles.card,
                    opacity: getOpacity(),
                    animationDelay: `${index * 0.02}s`
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div 
                    className="card-inner"
                    style={{
                      ...styles.cardInner,
                      transform: hoveredIndex === index ? 'translateY(-2px)' : 'translateY(0)',
                      boxShadow: hoveredIndex === index 
                        ? '0 4px 12px rgba(54, 74, 82, 0.08)' 
                        : 'none'
                    }}
                  >
                    <div style={styles.logoWrapper}>
                      <img
                        className="partner-logo"
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        style={styles.logo}
                        onError={(e) => {
                          e.currentTarget.src = `https://placehold.co/80x80/f5f5f5/9ca3af`;
                        }}
                      />
                    </div>
                    <div style={styles.partnerName}>{partner.name}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    padding: '100px 20px',
    backgroundColor: '#ffffff',
    position: 'relative',
    overflow: 'hidden'
  },
  container: {
    maxWidth: '1600px',
    margin: '0 auto',
    position: 'relative'
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: '80px'
  },
  title: {
    fontSize: '52px',
    fontWeight: '700',
    color: '#0f252f',
    marginBottom: '16px',
    lineHeight: '1.1',
    letterSpacing: '-0.02em'
  },
  subtitle: {
    fontSize: '20px',
    color: '#364a52',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.6',
    fontWeight: '400'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gap: '1px',
    backgroundColor: '#e5e7eb',
    border: '1px solid #e5e7eb',
    position: 'relative'
  },
  card: {
    textDecoration: 'none',
    animation: 'fadeIn 0.5s ease-out forwards',
    backgroundColor: '#ffffff'
  },
  cardInner: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '32px 16px',
    backgroundColor: 'transparent',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    minHeight: '160px',
    height: '100%'
  },
  logoWrapper: {
    width: '64px',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px'
  },
  logo: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain' as const,
    filter: 'grayscale(100%)',
    opacity: 0.5,
    transition: 'all 0.3s ease'
  },
  partnerName: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#364a52',
    textAlign: 'center' as const,
    lineHeight: '1.3'
  },
  centerCard: {
    gridColumn: '3 / 5',
    gridRow: '3 / 5',
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    backgroundColor: '#ffffff',
    position: 'relative',
    zIndex: 10
  },
  centerCardInner: {
    backgroundColor: '#0f252f',
    padding: '56px 48px',
    textAlign: 'center' as const,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  iconWrapper: {
    width: '96px',
    height: '96px',
    margin: '0 auto 24px',
    background: '#364a52',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#eeeae7'
  },
  centerTitle: {
    fontSize: '36px',
    fontWeight: '700',
    color: '#eeeae7',
    marginBottom: '12px',
    letterSpacing: '-0.01em'
  },
  centerText: {
    fontSize: '18px',
    color: '#eeeae7',
    opacity: 0.85,
    marginBottom: '32px',
    fontWeight: '400'
  },
  centerStats: {
    display: 'flex',
    gap: '32px',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '8px'
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '8px'
  },
  statNumber: {
    fontSize: '32px',
    fontWeight: '800',
    color: '#eeeae7',
    lineHeight: '1'
  },
  statLabel: {
    fontSize: '12px',
    color: '#eeeae7',
    opacity: 0.7,
    textTransform: 'uppercase' as const,
    letterSpacing: '1.5px',
    fontWeight: '600'
  },
  statDivider: {
    width: '1px',
    height: '48px',
    backgroundColor: '#364a52'
  }
};

export default PublishingPartnersShowcase;