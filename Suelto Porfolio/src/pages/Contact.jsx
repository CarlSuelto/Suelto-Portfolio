import React, { useState } from 'react';
// Import your central Supabase client instance
import { supabase } from '../services/supabaseClient'; 

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  /* --- Upgraded UI Interaction States --- */
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    
    if (name.trim() && email.trim() && message.trim()) {
      setLoading(true);
      
      try {
        /* 🚀 CONNECTED: Inserting the form payload straight into your database */
        // 🔴 UPDATE APPLIED HERE: Using exact database column keys (full_name and email_address)
        const { error } = await supabase
          .from('contact_messages')
          .insert([
            { 
              full_name: name.trim(), 
              email_address: email.trim(), 
              message: message.trim() 
            }
          ]);

        if (error) throw error;

        // Transmission successful: reset states
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
      } catch (error) {
        console.error('Database insertion breakdown:', error.message);
        setErrorMessage(error.message || 'Transmission failed. Pipeline connection lost.');
      } finally {
        setLoading(false); // Clean and clear!
      }
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
             Got another concern? Ask away!
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" width="16" height="16">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
             </button>
          </div>
        ) : (
          /* Interactive Input Form housed inside a signature dashboard card block */
          <div className="supabase-card contact-form-card">
            <form onSubmit={handleSubmit} className="contact-form">
              
              {/* Optional Error Warning Banner if the API stream encounters an error */}
              {errorMessage && (
                <div className="supabase-error-banner" style={{ color: '#ef4444', backgroundColor: 'rgba(239, 68, 68, 0.1)', padding: '12px', borderRadius: '6px', marginBottom: '1.5rem', fontSize: '0.9rem', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                  ⚠️ {errorMessage}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="form-name">Full Name</label>
                <input 
                  type="text"
                  id="form-name"
                  placeholder="Carl Vincent" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={loading}
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
                  disabled={loading}
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
                  disabled={loading}
                  required
                ></textarea>
              </div>

              {/* Upgraded Button State: Shows a dynamic loading indicator during transit */}
              <button 
                type="submit" 
                className={`btn-primary-supabase form-submit-btn ${loading ? 'loading' : ''}`}
                disabled={loading}
              >
                <span>{loading ? 'Writing to database...' : 'Dispatch Message'}</span>
                {!loading && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" width="16" height="16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;