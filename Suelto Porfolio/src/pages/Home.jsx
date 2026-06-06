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
    <section id="home" className="hero-section-fullscreen">
      <div className="hero-split-container">
        
        {/* LEFT COLUMN: Text and Actions */}
        <div className="hero-left-content">
          <h1 className="hero-title">
            Hello there, <span className="highlight">Carl Vincent</span> here.
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

        {/* RIGHT COLUMN: Updated Circular Supabase-style Avatar Box */}
        <div className="hero-right-image">
          <div className="profile-card-wrapper circular-variant">
            <div className="profile-glow-container">
              <img 
                src="path-to-your-profile-image.png" 
                alt="Carl Vincent Profile" 
                className="profile-image-avatar"
              />

              <div className="radar-scanner-ring"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;