import React, { useState, useEffect } from 'react';
// Import your hero image from your assets folder
import heroImg from '../assets/CarlSuelto.png'; 

const Home = () => {
  const phrases = [
    "A DIT student at Asian College.",
    "A passionate Web Developer.",
    "A Creative UI/UX Designer.",
    "An NCII Computer Systems Servicing (CSS) holder."
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
          <h2 className="hero-subtitle"> a Student</h2>
          
          <p className="typewriter-paragraph">
            I am <span className="typed-text">{displayedText}</span>
            <span className="cursor">|</span>
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary-supabase">
              View My Work
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Updated Circular Supabase-style Avatar Box */}
        <div className="hero-right-image">
          <div className="profile-card-wrapper circular-variant">
            <div className="profile-image-container circular-mask">
              <img 
                src={heroImg} 
                alt="Carl Vincent" 
                className="profile-avatar" 
              />
              {/* Overlay element to create a precision geometric radar border */}
              <div className="radar-scanner-ring"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;