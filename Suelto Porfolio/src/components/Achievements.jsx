import React, { useState } from 'react';
// Hardcoded achievements data array following your profile's data structures
  const achievements = [
    {
      id: 'ach-1',
      title: 'Responsive Web Design Certification',
      issuer: 'FREECODECAMP',
      date: 'Certified - 2025',
      image: '/Responsive web.png', // 🟢 Fixed to plain path string
      description: 'This course teaches the fundamentals of HTML and CSS...'
    },
    {
      id: 'ach-2',
      title: 'Computer Systems Servicing NC II',
      issuer: 'CSS NC II',
      date: 'Completed - 2026',
      image: '/NCII CSS.png', // 🟢 Fixed to plain path string
      description: 'Demonstrated 4 core competencies...'
    },
    {
      id: 'ach-3',
      title: 'Events Management Services NC III',
      issuer: 'EMS NC III',
      date: 'Completed - 2024',
      image: '/NCIII EMS.png', // 🟢 Fixed to plain path string
      description: 'Demonstrated 4 core competencies...'
    },
    {
      id: 'ach-4',
      title: 'OOPs in Java Programming Certification',
      issuer: 'OBJECTIVE PROGRAMMING',
      date: 'Completed - Nov 2025',
      image: '/OBJ Pro.png', // 🟢 Fixed to plain path string
      description: 'Mastered the principles...'
    },
  ];
const Achievements = () => {
  // Track which card is currently flipped
  const [flippedCardId, setFlippedCardId] = useState(null);

  const handleCardClick = (id) => {
    // If clicked card is already flipped, unflip it. Otherwise flip the new one.
    setFlippedCardId(flippedCardId === id ? null : id);
  };

  return (
    <section id="achievements" className="achievements-section">
      <div className="section-header">
        <h2>Credentials & Achievements</h2>
        <p>Interactive registry of validated certifications and technical competencies. Click any card to inspect the credential asset.</p>
      </div>

      <div className="achievements-grid">
        {achievements.map((ach) => {
          const isFlipped = flippedCardId === ach.id;

          return (
            <div 
              key={ach.id} 
              className={`flip-card-container ${isFlipped ? 'is-flipped' : ''}`}
              onClick={() => handleCardClick(ach.id)}
            >
              <div className="flip-card-inner">
                
                {/* FRONT FACE: Metadata Text */}
                <div className="flip-card-front supabase-card">
                  <div className="card-top-meta">
                    <span className="issuer-badge">{ach.issuer}</span>
                    <span className="date-badge">{ach.date}</span>
                  </div>
                  <h3 className="ach-title">{ach.title}</h3>
                  <p className="ach-desc">{ach.description}</p>
                  
                  <div className="card-action-hint">
                    <span>View Credential Asset</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" width="14" height="14">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                  </div>
                </div>

                {/* BACK FACE: Image Display Plane */}
                <div className="flip-card-back supabase-card">
                  <div className="image-wrapper">
                    <img 
                      src={ach.image} 
                      alt={`${ach.title} Document`} 
                      loading="lazy"
                      className="credential-img"
                    />
                  </div>
                  <div className="back-footer-overlay">
                    <h4>{ach.title}</h4>
                    <span className="unflip-action-text">Click card to exit viewer</span>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;