import React, { useState, useEffect } from 'react';
import heroImg from '../assets/CarlSuelto.png';

const Home = () => {
  const phrases = [
    "a DIT student at Asian College.",
    "a NC-III Events Management Servicing (EMS) holder.",
    "a passionate Web Developer and Designer.",
    "a NC-II Computer Systems Servicing (CSS) holder.",
    "a Responsive Web Design Certified by FreeCodeCamp.",
    "an OOPs in Java Programming Certified by Objective Programming."
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentFullText = phrases[currentPhraseIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayedText(currentFullText.substring(0, displayedText.length + 1));
        setTypingSpeed(100);

        if (displayedText === currentFullText) {
          setIsDeleting(true);
          setTypingSpeed(2000); 
        }
      } else {
        setDisplayedText(currentFullText.substring(0, displayedText.length - 1));
        setTypingSpeed(50);

        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          setTypingSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentPhraseIndex]);

  return (
    /* 💡 CHANGED: Main container monitors theme state background variables smoothly */
    <section id="home" className="hero-section-fullscreen" style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-primary)', transition: 'background-color 0.3s ease, color 0.3s ease' }}>
      
      {/* 💡 CHANGED: Localized configuration to capture theme variables for subcomponents */}
      <style>{`
        .hero-title {
          color: var(--text-primary) !important;
        }
        .hero-subtitle {
          color: var(--text-secondary) !important;
        }
        .typewriter-paragraph {
          color: var(--text-primary) !important;
        }
        .typed-text {
          color: var(--brand-emerald) !important;
          font-weight: 500;
        }
        .cursor {
          color: var(--brand-emerald);
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>

      <div className="hero-split-container">
        
        {/* LEFT COLUMN: Text and Actions */}
        <div className="hero-left-content">
          <h1 className="hero-title">
            Hello there, <span className="highlight" style={{ color: 'var(--brand-emerald)' }}>Carl Vincent</span> here.
          </h1>
          <h2 className="hero-subtitle"> a Diploma Student</h2>
          
          <p className="typewriter-paragraph">
            I am <span className="typed-text">{displayedText}</span>
            <span className="cursor">|</span>
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary-supabase">
              Check My Work
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Enlarged Avatar shifted slightly left */}
        <div 
          className="hero-right-image" 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            paddingRight: '10%'
          }}
        >
          <div className="profile-card-wrapper circular-variant">
            {/* 💡 CHANGED: Replaced hardcoded box shadow colors with alpha variable matching */}
            <div 
              className="profile-glow-container"
              style={{
                position: 'relative',
                width: 'clamp(280px, 32vw, 400px)',  
                height: 'clamp(280px, 32vw, 400px)', 
                borderRadius: '50%',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid var(--border-subtle)',
                boxShadow: '0 0 45px rgba(62, 207, 142, 0.15), 0 20px 40px rgba(0, 0, 0, 0.15)',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
              }}
            >
              <img 
                src={heroImg}
                alt="Carl Vincent Profile" 
                className="profile-image-avatar"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%'
                }}
              />

              <div className="radar-scanner-ring" style={{ pointerEvents: 'none' }}></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;