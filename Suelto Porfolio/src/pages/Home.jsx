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
    /* 💡 INTEGRATED: Added dynamic theme background and text variables here */
    <section 
      id="home" 
      className="hero-section-fullscreen"
      style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-primary)' }}
    >
      {/* RESTORED: Original fluid container parameters */}
      <div className="hero-split-container">
        
        {/* LEFT COLUMN: Text and Actions */}
        <div className="hero-left-content">
          {/* 💡 INTEGRATED: Applied explicit variables to text tags so theme color overrides work cleanly */}
          <h1 className="hero-title" style={{ color: 'var(--text-primary)' }}>
            Hello there, <span className="highlight" style={{ color: 'var(--brand-emerald)' }}>Carl Vincent</span> here.
          </h1>
          <h2 className="hero-subtitle" style={{ color: 'var(--text-secondary)' }}> a Diploma Student</h2>
          
          <p className="typewriter-paragraph" style={{ color: 'var(--text-secondary)' }}>
            I am <span className="typed-text" style={{ color: 'var(--brand-emerald)' }}>{displayedText}</span>
            <span className="cursor" style={{ color: 'var(--brand-emerald)' }}>|</span>
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
            paddingRight: '10%' // 👈 Nudges the picture inwards away from the far-right monitor edge
          }}
        >
          <div className="profile-card-wrapper circular-variant">
            <div 
              className="profile-glow-container"
              style={{
                position: 'relative',
                /* ENLARGED: Max cap bumped to 400px and responsive base viewport width increased to 32vw */
                width: 'clamp(280px, 32vw, 400px)',  
                height: 'clamp(280px, 32vw, 400px)', 
                borderRadius: '50%',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                /* 💡 INTEGRATED: Swapped static values for borders, background cards, and adaptive glow drop-shadows */
                border: '2px solid var(--border-accent)', 
                backgroundColor: 'var(--bg-card)',
                boxShadow: '0 0 45px var(--border-accent), 0 20px 40px rgba(0, 0, 0, 0.25)'
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