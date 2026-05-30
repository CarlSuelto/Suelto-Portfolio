import React, { useState, useEffect } from 'react';

const Home = () => {
  // Array of phrases to loop through dynamically
  const phrases = [
    "A DIT student at Asian College.",
    "A passionate Web Developer.",
    "A Creative UI/UX Designer.",
    "An NCII holder in Computer Systems Servicing graduate."
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentFullText = phrases[currentPhraseIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing Phase: Add one character
        setDisplayedText(currentFullText.substring(0, displayedText.length + 1));
        setTypingSpeed(100); // Normal typing pace

        // If the full phrase is typed out, pause before deleting
        if (displayedText === currentFullText) {
          setIsDeleting(true);
          setTypingSpeed(2000); // 2-second pause at the end of the sentence
        }
      } else {
        // Deleting Phase: Remove one character
        setDisplayedText(currentFullText.substring(0, displayedText.length - 1));
        setTypingSpeed(50); // Speed up slightly on deletion

        // If the phrase is completely cleared, move to the next sentence
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          setTypingSpeed(500); // Brief pause before typing the next phrase
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer); // Cleanup timeout to prevent memory leaks
  }, [displayedText, isDeleting, currentPhraseIndex]);

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>Hello there, <span className="highlight">Carl Vincent</span> here.</h1>
        <h2>Student</h2>
        
        {/* Upgraded Dynamic Paragraph */}
        <p className="typewriter-paragraph">
          I am <span className="typed-text">{displayedText}</span>
          <span className="cursor">|</span>
        </p>

        <a href="#projects" className="btn-primary">View My Work</a>
      </div>
    </section>
  );
};

export default Home;