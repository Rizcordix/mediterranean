'use client'

import React, { useState, useEffect, useRef } from 'react';
import { X, Pause, Volume2, VolumeX } from 'lucide-react';

const AudiobookSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentAudiobook, setCurrentAudiobook] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const audiobooks = [
    {
      id: 1,
      title: "The House You Build Within",
      subtitle: "A Guide to Building Your Inner Self",
      author: "Liam Green",
      narrator: "James Patterson",
      image: "/portfolio_images/1_converted.avif",
      audioUrl: "/audiobook/The_house_you_build_within.mp3"
    },
    {
      id: 2,
      title: "Marshall's Keep",
      subtitle: "Love is a Fortress.",
      author: "Ryan Marshall",
      narrator: "Sarah Mitchell",
      image: "/portfolio_images/2_converted.avif",
      audioUrl: "/audiobook/marshalls.mp3"
    },
    {
      id: 3,
      title: "The Story of a Thief",
      subtitle: "Tony was born into a family of thieves. His life seems predestined, until his girlfriend Eva disappears suddenly.",
      author: "Hristina BloomField",
      narrator: "Emma Thompson",
      image: "/portfolio_images/storyofathief.png",
      audioUrl: "/audiobook/storyofathief.mp3"
    },
    {
      id: 4,
      title: "Beyond The Resume:",
      subtitle: "A 40-Year Framework for the Modern Professional.",
      author: "Joshua Sciascia",
      narrator: "Michael Davis",
      image: "/portfolio_images/4_converted.avif",
      audioUrl: "/audiobook/beyondresume.mp3"
    },
    {
      id: 5,
      title: "The Last Good Liar",
      subtitle: "Followed by Millions. Hunted by One.",
      author: "Clara Monet",
      narrator: "Rachel Adams",
      image: "/portfolio_images/thelastgoodliar_converted.avif",
      audioUrl: "/audiobook/lastliar.mp3"
    },
    {
      id: 6,
      title: "Good Spirits",
      subtitle: "Nolan must haunt Harriet, but realizes she is not the person needing redemption, leading to a forbidden romance.",
      author: "B.K. Borison",
      narrator: "Sophie Clarke",
      image: "/portfolio_images/goodspirits.png",
      audioUrl: "/audiobook/goodspirits.mp3"
    },
    {
      id: 7,
      title: "PAX: Journey Home",
      subtitle: "Both boy and fox find themselves on journeys toward home, healing – and each other. A breathtaking novel about chosen families and the healing power of love.",
      author: "Jon Klassen",
      narrator: "Tom Hardy",
      image: "/portfolio_images/PAX.png",
      audioUrl: "/audiobook/PAX.mp3"
    },
    {
      id: 8,
      title: "The Librarian of Lost Things",
      subtitle: "Every object holds a memory. Some are deadly.",
      author: "Jennifer Delmont",
      narrator: "Emily Watson",
      image: "/portfolio_images/6_converted.avif",
      audioUrl: "/audiobook/librarian.mp3"
    },
    {
      id: 9,
      title: "Exiled",
      subtitle: "In a world of chaos and betrayal, one boy must fight to survive.",
      author: "Joaquin Lopez",
      narrator: "Emily Watson",
      image: "/portfolio_images/exiled.png",
      audioUrl: "/audiobook/Exiled.mp3"
    },
    {
      id: 10,
      title: "The Buried",
      subtitle: "The world above us is gone. But we, the chosen few, have survived.",
      author: "Melissa Grey",
      narrator: "Emily Watson",
      image: "/portfolio_images/buried.png",
      audioUrl: "/audiobook/theburried.mp3"
    },
    {
      id: 11,
      title: "Before I Cheat",
      subtitle: "Nolan must haunt Harriet, but realizes she is not the person needing redemption, leading to a forbidden romance.",
      author: "Meek White",
      narrator: "Emily Watson",
      image: "/portfolio_images/cheat.png",
      audioUrl: "/audiobook/beforeIcheat.mp3"
    },
    {
      id: 12,
      title: "Kadashus",
      subtitle: "In a kingdom poisoned by envy, one knight is cast into exile. Stripped of honor... now driven by vengeance.",
      author: "Ernesto J. Geigel JR",
      narrator: "Emily Watson",
      image: "/portfolio_images/kadashus.png",
      audioUrl: "/audiobook/kadashus.mp3"
    }
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isModalOpen) {
        if (e.key === 'Escape') {
          closeModal();
        } else if (e.key === ' ') {
          e.preventDefault();
          togglePlayPause();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };
    
    const updateDuration = () => {
      if (audio.duration && !isNaN(audio.duration) && isFinite(audio.duration)) {
        setDuration(audio.duration);
      }
    };
    
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    const handleLoadedMetadata = () => {
      updateDuration();
    };

    const handleCanPlay = () => {
      updateDuration();
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('durationchange', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('durationchange', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentAudiobook]);

  const openModal = (audiobook: any) => {
    setCurrentAudiobook(audiobook);
    setIsModalOpen(true);
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
  };

  const closeModal = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsModalOpen(false);
    setCurrentAudiobook(null);
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
  };

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => {
        console.error('Error playing audio:', err);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current && !isNaN(newTime)) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time) || !isFinite(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const getProgressPercentage = () => {
    if (!duration || duration === 0) return 0;
    return (currentTime / duration) * 100;
  };

  return (
    <>
      <section className="audiobook-section">
        <div className="audiobook-container">
          {/* Header */}
          <div className="audiobook-section-header">
            <h1 className="fw-bold mb-3" style={{ color: '#0f252f', letterSpacing: '-0.5px' }}>
              AUDIOBOOK <span className="audiobook-title-accent">COLLECTION</span>
            </h1>
            <h5 className="audiobook-section-description">
              Immerse yourself in captivating narrations that bring stories to life through the power of voice.
            </h5>
          </div>

          {/* Audiobooks Grid */}
          <div className="audiobook-books-grid">
            {audiobooks.map((audiobook) => (
              <div 
                key={audiobook.id}
                className="audiobook-book-card"
                onClick={() => openModal(audiobook)}
              >
                <div className="audiobook-book-image-wrapper">
                  <img 
                    src={audiobook.image} 
                    alt={audiobook.title}
                    className="audiobook-book-image"
                  />
                  <div className="audiobook-play-overlay">
                    <div className="audiobook-play-button">
                      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                        <circle cx="32" cy="32" r="30" fill="#364a52" opacity="0.95"/>
                        <circle cx="32" cy="32" r="28" fill="#0f252f"/>
                        <g>
                          <path d="M 26 20 L 26 44 L 44 32 Z" fill="#eeeae7"/>
                          <circle cx="32" cy="32" r="3" fill="#eeeae7"/>
                          <path d="M 28 32 Q 28 28, 32 28 Q 36 28, 36 32 Q 36 36, 32 36 Q 28 36, 28 32" fill="none" stroke="#eeeae7" strokeWidth="1.5" opacity="0.5"/>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audio Modal */}
      {isModalOpen && currentAudiobook && (
        <div className="audiobook-modal-overlay" onClick={closeModal}>
          <div className="audiobook-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="audiobook-modal-close" onClick={closeModal} aria-label="Close modal">
              <X size={24} />
            </button>

            <div className="audiobook-modal-header">
              <img 
                src={currentAudiobook.image} 
                alt={currentAudiobook.title}
                className="audiobook-modal-image"
              />
              <div className="audiobook-modal-info">
                <h2 className="audiobook-modal-title">{currentAudiobook.title}</h2>
                <p className="audiobook-modal-subtitle">{currentAudiobook.subtitle}</p>
                <p className="audiobook-modal-author">by {currentAudiobook.author}</p>
                <p className="audiobook-modal-narrator">Narrated by {currentAudiobook.narrator}</p>
              </div>
            </div>

            <div className="audiobook-modal-player">
              <audio 
                ref={audioRef} 
                src={currentAudiobook.audioUrl}
                preload="metadata"
              />

              <div className="audiobook-player-controls">
                <button 
                  className="audiobook-control-button audiobook-play-pause"
                  onClick={togglePlayPause}
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause size={32} /> : (
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M 10 6 L 10 26 L 26 16 Z" fill="#0f252f"/>
                    </svg>
                  )}
                </button>

                <button 
                  className="audiobook-control-button audiobook-mute-button"
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                </button>
              </div>

              <div className="audiobook-progress-container">
                <span className="audiobook-time">{formatTime(currentTime)}</span>
                <div className="audiobook-progress-wrapper">
                  <input
                    type="range"
                    min="0"
                    max={duration || 0}
                    value={currentTime}
                    onChange={handleSeek}
                    className="audiobook-progress-bar"
                    aria-label="Seek audio"
                    style={{
                      background: `linear-gradient(to right, #364a52 0%, #364a52 ${getProgressPercentage()}%, #eeeae7 ${getProgressPercentage()}%, #eeeae7 100%)`
                    }}
                  />
                </div>
                <span className="audiobook-time">{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .audiobook-section {
          padding: 4rem 1rem;
          background: linear-gradient(135deg, #eeeae7 0%, #d4cfc9 50%, #eeeae7 100%);
          position: relative;
          overflow: hidden;
        }

        .audiobook-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: repeating-linear-gradient(
            45deg,
            #0f252f 0px,
            #0f252f 1px,
            transparent 1px,
            transparent 12px
          );
          opacity: 0.03;
          pointer-events: none;
        }

        .audiobook-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .audiobook-section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .audiobook-title-accent {
          color: #364a52;
          font-weight: 600;
        }

        .audiobook-section-description {
          max-width: 600px;
          margin: 0 auto;
          color: #0f252f;
          opacity: 0.85;
          line-height: 1.6;
        }

        .audiobook-books-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .audiobook-book-card {
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .audiobook-book-card:hover {
          transform: translateY(-8px);
        }

        .audiobook-book-image-wrapper {
          position: relative;
          aspect-ratio: 2/3;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(15, 37, 47, 0.2);
          transition: box-shadow 0.3s ease;
        }

        .audiobook-book-card:hover .audiobook-book-image-wrapper {
          box-shadow: 0 15px 40px rgba(15, 37, 47, 0.3);
        }

        .audiobook-book-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .audiobook-play-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 37, 47, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s ease;
        }

        .audiobook-book-card:hover .audiobook-play-overlay {
          background: rgba(15, 37, 47, 0.5);
        }

        .audiobook-play-button {
          transition: transform 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
        }

        .audiobook-book-card:hover .audiobook-play-button {
          transform: scale(1.2);
        }

        /* Modal Styles */
        .audiobook-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 37, 47, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
          backdrop-filter: blur(10px);
        }

        .audiobook-modal-content {
          background: #eeeae7;
          border-radius: 16px;
          max-width: 600px;
          width: 100%;
          padding: 2rem;
          position: relative;
          box-shadow: 0 20px 60px rgba(15, 37, 47, 0.4);
        }

        .audiobook-modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          color: #0f252f;
          cursor: pointer;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease;
          z-index: 10;
        }

        .audiobook-modal-close:hover {
          transform: scale(1.1);
        }

        .audiobook-modal-header {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .audiobook-modal-image {
          width: 120px;
          height: 180px;
          object-fit: cover;
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(15, 37, 47, 0.2);
          flex-shrink: 0;
        }

        .audiobook-modal-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .audiobook-modal-title {
          color: #0f252f;
          margin-bottom: 0.5rem;
          font-size: 1.5rem;
          font-weight: 700;
          line-height: 1.3;
        }

        .audiobook-modal-subtitle {
          color: #364a52;
          font-style: italic;
          margin-bottom: 0.75rem;
          font-size: 0.95rem;
          line-height: 1.4;
        }

        .audiobook-modal-author {
          color: #0f252f;
          margin-bottom: 0.25rem;
          font-weight: 500;
        }

        .audiobook-modal-narrator {
          color: #364a52;
          font-size: 0.9rem;
          font-style: italic;
        }

        .audiobook-modal-player {
          background: #d4cfc9;
          border-radius: 12px;
          padding: 1.5rem;
        }

        .audiobook-player-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .audiobook-control-button {
          background: #eeeae7;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0f252f;
        }

        .audiobook-play-pause {
          width: 64px;
          height: 64px;
          box-shadow: 0 4px 12px rgba(15, 37, 47, 0.15);
        }

        .audiobook-play-pause:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 16px rgba(15, 37, 47, 0.2);
        }

        .audiobook-mute-button {
          width: 48px;
          height: 48px;
        }

        .audiobook-mute-button:hover {
          transform: scale(1.05);
        }

        .audiobook-progress-container {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .audiobook-time {
          color: #0f252f;
          font-size: 0.9rem;
          font-weight: 500;
          min-width: 45px;
          font-variant-numeric: tabular-nums;
        }

        .audiobook-progress-wrapper {
          flex: 1;
          position: relative;
        }

        .audiobook-progress-bar {
          width: 100%;
          height: 6px;
          border-radius: 3px;
          outline: none;
          cursor: pointer;
          -webkit-appearance: none;
          appearance: none;
          transition: height 0.2s ease;
        }

        .audiobook-progress-bar:hover {
          height: 8px;
        }

        .audiobook-progress-bar::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #364a52;
          cursor: pointer;
          transition: transform 0.2s ease;
          box-shadow: 0 2px 4px rgba(15, 37, 47, 0.3);
        }

        .audiobook-progress-bar::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }

        .audiobook-progress-bar::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #364a52;
          border: none;
          cursor: pointer;
          transition: transform 0.2s ease;
          box-shadow: 0 2px 4px rgba(15, 37, 47, 0.3);
        }

        .audiobook-progress-bar::-moz-range-thumb:hover {
          transform: scale(1.2);
        }

        .audiobook-progress-bar::-moz-range-track {
          background: transparent;
          border: none;
        }

        @media (max-width: 1024px) {
          .audiobook-books-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .audiobook-section {
            padding: 3rem 1rem;
          }

          .audiobook-section-header {
            margin-bottom: 2rem;
          }

          .audiobook-books-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .audiobook-modal-content {
            padding: 1.5rem;
          }

          .audiobook-modal-header {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .audiobook-modal-image {
            width: 150px;
            height: 225px;
          }

          .audiobook-modal-title {
            font-size: 1.3rem;
          }
        }

        @media (max-width: 480px) {
          .audiobook-section {
            padding: 2rem 0.5rem;
          }

          .audiobook-books-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .audiobook-section-description {
            padding: 0 1rem;
          }

          .audiobook-modal-content {
            padding: 1rem;
          }

          .audiobook-modal-player {
            padding: 1rem;
          }

          .audiobook-play-pause {
            width: 56px;
            height: 56px;
          }

          .audiobook-mute-button {
            width: 40px;
            height: 40px;
          }

          .audiobook-time {
            font-size: 0.85rem;
            min-width: 40px;
          }
        }
      `}</style>
    </>
  );
};

export default AudiobookSection;