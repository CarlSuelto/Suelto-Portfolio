import React from 'react';

const Home = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Alex Doe</span></h1>
        <h2>Full Stack Developer</h2>
        <p>Building high-performance, responsive web applications with React and cloud backends.</p>
        <a href="#projects" className="btn-primary">View My Work</a>
      </div>
    </section>
  );
};

export default Home;