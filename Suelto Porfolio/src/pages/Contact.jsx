import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      // Handle your Supabase table insert or edge function hook here
      console.log('Dispatching message payload:', { name, email, message });
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-header-block">
        <h2>Get In Touch</h2>
        <p className="section-subtitle">Drop a message into the database pipeline. I'll get back to you shortly.</p>
      </div>

      <div className="contact-container-centered">
        {submitted ? (
          /* Supabase Green Alert Banner Notification Box */
          <div className="supabase-success-banner">
            <div className="banner-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" width="20" height="20">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="banner-text-content">
              <h4>Transmission Successful</h4>
              <p>Thank you! Your message has been written to the backend successfully.</p>
            </div>
            <button onClick={() => setSubmitted(false)} className="banner-reset-btn">
              Send Another
            </button>
          </div>
        ) : (
          /* Interactive Input Form housed inside a signature dashboard card block */
          <div className="supabase-card contact-form-card">
            <form onSubmit={handleSubmit} className="contact-form">
              
              <div className="form-group">
                <label htmlFor="form-name">Full Name</label>
                <input 
                  type="text"
                  id="form-name"
                  placeholder="Carl Vincent" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="form-email">Email Address</label>
                <input 
                  type="email" 
                  id="form-email"
                  placeholder="your.email@example.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="form-msg">Message</label>
                <textarea 
                  id="form-msg"
                  placeholder="Describe your project requirements, goals, or core objectives..." 
                  rows="5" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary-supabase form-submit-btn">
                <span>Dispatch Message</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" width="16" height="16">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;