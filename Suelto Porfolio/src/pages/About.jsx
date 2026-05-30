import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>I am a passionate software developer specializing in modern JavaScript frameworks, responsive UI architecture, and cloud database integrations like Supabase.</p>
          <p>My core mission is to write clean, scalable code that delivers exceptional user experiences.</p>
        </div>
        <div className="skills-box">
          <h3>Core Competencies</h3>
          <ul>
            <li>React.js (Hooks, Context, Router)</li>
            <li>Database Management (Supabase / PostgreSQL)</li>
            <li>RESTful APIs & Asynchronous Architecture</li>
            <li>Responsive UI/UX Design (CSS3 / Flexbox / Grid)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;