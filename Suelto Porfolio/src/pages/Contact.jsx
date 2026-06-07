import React, { useState } from 'react';
import { supabase } from '../services/supabaseClient'; 

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage('Validation Failure: All fields are strictly required before transmission.');
      return;
    }

    /* 💡 FIXED: Changed from loading(true) to the correct state modifier function */
    setLoading(true); 
    
    try {
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

      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Database insertion breakdown:', error.message);
      setErrorMessage(error.message || 'Transmission failed. Pipeline connection lost.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section" style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-primary)', padding: '48px 40px', boxSizing: 'border-box', transition: 'background-color 0.3s ease, color 0.3s ease' }}>
      
      <style>{`
        .contact-form-card input, .contact-form-card textarea {
          background-color: var(--bg-main) !important;
          color: var(--text-primary) !important;
          border: 1px solid var(--border-subtle) !important;
          padding: 12px;
          border-radius: 6px;
          width: 100%;
          box-sizing: border-box;
          margin-top: 6px;
        }
        .contact-form-card input:focus, .contact-form-card textarea:focus {
          border-color: var(--brand-emerald) !important;
          outline: none;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-group label {
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
        }
      `}</style>

      <div className="section-header-block" style={{ maxWidth: '650px', margin: '0 auto 32px auto', textAlign: 'center' }}>
        <h2 style={{ color: 'var(--text-primary)', fontSize: '2rem', margin: '0 0 10px 0' }}>Get In Touch</h2>
        <p className="section-subtitle" style={{ color: 'var(--text-secondary)', margin: 0 }}>Have a project in mind or a question? Drop a message into the pipeline!</p>
      </div>

      <div className="contact-container-centered" style={{ maxWidth: '650px', margin: '0 auto' }}>
        {submitted ? (
          <div className="supabase-success-banner" style={{ backgroundColor: 'rgba(62, 207, 142, 0.1)', border: '1px solid var(--brand-emerald)', padding: '24px', borderRadius: '8px', color: 'var(--text-primary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div className="banner-icon-wrapper" style={{ color: 'var(--brand-emerald)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" width="24" height="24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="banner-text-content">
                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Message acquired!</h4>
                <p style={{ margin: '4px 0 0 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Entry written successfully. Connection established!</p>
              </div>
            </div>
            <button 
              onClick={() => setSubmitted(false)} 
              className="banner-reset-btn"
              style={{ background: 'none', border: 'none', color: 'var(--brand-emerald)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', padding: 0, fontSize: '0.85rem', fontWeight: '500', marginTop: '16px' }}
            >
              Need further assistance?
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" width="14" height="14">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </div>
        ) : (
          <div className="supabase-card contact-form-card" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-subtle)', padding: '32px', borderRadius: '8px' }}>
            <form onSubmit={handleSubmit} className="contact-form">
              
              {errorMessage && (
                <div className="supabase-error-banner" style={{ color: '#ef4444', backgroundColor: 'rgba(239, 68, 68, 0.1)', padding: '12px', borderRadius: '6px', marginBottom: '1.5rem', fontSize: '0.9rem', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                  ⚠️ {errorMessage}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="form-name"> Full Name *</label>
                <input 
                  type="text"
                  id="form-name"
                  placeholder="Firstname, MI., Lastname" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={loading}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="form-email">Email Address * </label>
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
                <label htmlFor="form-msg">Your Message *</label>
                <textarea 
                  id="form-msg"
                  placeholder="Describe what you think, your project requirements, goals, or core objectives..." 
                  rows="5" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={loading}
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`btn-primary-supabase form-submit-btn ${loading ? 'loading' : ''}`}
                disabled={loading}
                style={{ 
                  width: '100%', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  gap: '8px', 
                  padding: '14px', 
                  borderRadius: '6px', 
                  cursor: loading ? 'not-allowed' : 'pointer', 
                  fontWeight: '500',
                  backgroundColor: loading ? 'var(--border-subtle)' : '#2b845b', // Solid brand emerald background matching image_0caf07.png
                  color: '#ffffff',
                  border: 'none',
                  fontSize: '0.95rem',
                  transition: 'background-color 0.2s ease, transform 0.1s ease'
                }}
                onMouseOver={(e) => {
                  if (!loading) e.currentTarget.style.backgroundColor = '#226b49';
                }}
                onMouseOut={(e) => {
                  if (!loading) e.currentTarget.style.backgroundColor = '#2b845b';
                }}
                onMouseDown={(e) => {
                  if (!loading) e.currentTarget.style.transform = 'scale(0.98)';
                }}
                onMouseUp={(e) => {
                  if (!loading) e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <span>{loading ? 'Taking inputs to database...' : 'Acquire Message'}</span>
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