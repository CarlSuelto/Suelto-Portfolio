import React, { useState, useEffect } from 'react';

const Home = () => {
  const phrases = [
    "A DIT student at Asian College.",
    "A passionate Web Developer.",
    "A Creative UI/UX Designer.",
    "An NCII Computer Systems Servicing holder."
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
      <div className="hero-center-content">
        <h1 className="hero-title">
          Hello there, <span className="highlight">Carl Vincent</span> here.
        </h1>
        <h2 className="hero-subtitle">Student</h2>
        
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
    </section>
  );
};

export default Home;