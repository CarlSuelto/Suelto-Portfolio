import React, { useState } from 'react';

const Achievements = () => {
  const achievements = [
    {
      id: 'ach-1',
      title: 'Responsive Web Design Certification',
      issuer: 'FREECODECAMP',
      date: 'Certified - 2025',
      image: '/Responsive web.png', 
      description: 'This course teaches the fundamentals of HTML and CSS including modern layout, design, accessibility, and responsive web development. You will build practical projects and gain the skills to create professional, user-friendly webpages.'
    },
    {
      id: 'ach-2',
      title: 'Computer Systems Servicing NC II',
      issuer: 'CSS NC II',
      date: 'Completed - 2026',
      image: '/NCII CSS.png', 
      description: 'Demonstrated 4 core competencies in setting up computer networks, configuring servers, and maintaining hardware systems infrastructure.'
    },
    {
      id: 'ach-3',
      title: 'Events Management Services NC III',
      issuer: 'EMS NC III',
      date: 'Completed - 2024',
      image: '/NCIII EMS.png', 
      description: 'Demonstrated 4 core competencies in event planning and coordination for successful event execution.'
    },
    {
      id: 'ach-4',
      title: 'OOPs in Java Programming Certification',
      issuer: 'OBJECTIVE PROGRAMMING',
      date: 'Completed - Nov 2025',
      image: '/OBJ Pro.png', 
      description: 'Mastered the principles of object-oriented programming in Java, including encapsulation, inheritance, and polymorphism.'
    },
    {
      id: 'ach-5',
      title: 'SIL (Job Internship)',
      issuer: 'ECE',
      date: 'Completed - June 2024',
      image: '/ece coc.png', 
      description: 'Successfully completed a 100 hrs SIL (Supervised Industry Learning) internship at ECE, gaining hands-on experience in IT support, network administration, and system maintenance.'
    },
    {
      id: 'ach-6',
      title: 'SIL (Job Internship)',
      issuer: 'Inspiro & Infocom',
      date: 'Completed - August 2025',
      image: '/inspiro.png', 
      description: 'Successfully completed a 200 hrs SIL (Supervised Industry Learning) internship at Inspiro & Infocom, gaining hands-on experience in IT support, network administration, and system maintenance.'
    },
    {
      id: 'ach-7',
      title: 'Search Engine Optimization (SEO) Seminar',
      issuer: 'Asian College',
      date: 'Completed - Apr 2024',
      image: '/seo.png', 
      description: 'Attended a comprehensive seminar on Search Engine Optimization (SEO) covering keyword research, on-page and off-page optimization techniques, and SEO analytics tools to enhance website visibility and ranking.'
    },
  ];

  const [flippedCardId, setFlippedCardId] = useState(null);

  const handleCardClick = (id) => {
    setFlippedCardId(flippedCardId === id ? null : id);
  };

  return (
    <section id="achievements" className="achievements-section">
      
      <style>{`
        .flip-card-container {
          perspective: 1200px !important;
          height: 380px;
          cursor: pointer;
        }
        .flip-card-inner {
          position: relative !important;
          width: 100% !important;
          height: 100% !important;
          transform-style: preserve-3d !important;
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        .flip-card-container.is-flipped .flip-card-inner {
          transform: rotateY(180deg) !important;
        }
        .flip-card-front, .flip-card-back {
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          height: 100% !important;
          backface-visibility: hidden !important;
          -webkit-backface-visibility: hidden !important;
          box-sizing: border-box !important;
        }
        .flip-card-front {
          z-index: 2 !important;
          transform: rotateY(0deg) !important;
        }
        .flip-card-back {
          transform: rotateY(180deg) !important;
          z-index: 1 !important;
        }

        /* 💡 FIXED: Base transition rules for your image elements */
        .credential-img {
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
          transform: scale(1);
        }

        /* 💡 FIXED: Stage 1 - Pop out slightly when the card is in its flipped state */
        .flip-card-container.is-flipped .credential-img {
          transform: scale(1.02);
        }

        /* 💡 FIXED: Stage 2 - Deep hover zoom that fires ONLY when flipped and hovered */
        .flip-card-container.is-flipped:hover .credential-img {
          transform: scale(1.08) !important;
        }
      `}</style>

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
                
                {/* FRONT FACE */}
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

                {/* BACK FACE */}
                <div className="flip-card-back supabase-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', justifyContent: 'space-between', padding: '1.25rem', boxSizing: 'border-box' }}>
                  <div className="image-wrapper" style={{ width: '100%', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: '6px' }}>
                    <img 
                      src={ach.image} 
                      alt={`${ach.title} Document`} 
                      loading="lazy"
                      className="credential-img"
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
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