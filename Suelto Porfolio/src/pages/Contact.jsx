import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && message) {
      // Handle simulated form dispatch or Supabase table entry hook here
      setSubmitted(true);
      setEmail('');
      setMessage('');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Get In Touch</h2>
      {submitted ? (
        <div className="success-banner">Thank you! Your message has been sent successfully.</div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <input 
            type="email" 
            placeholder="Your Email Address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <textarea 
            placeholder="Your Message..." 
            rows="5" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit" className="btn-submit">Send Message</button>
        </form>
      )}
    </section>
  );
};

export default Contact;