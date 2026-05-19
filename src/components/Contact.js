import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const socialLinks = [
    { icon: '💼', label: 'LinkedIn', link: '#' },
    { icon: '🐙', label: 'GitHub', link: 'https://github.com/mohidhayat63' },
    { icon: '🐦', label: 'Twitter', link: '#' },
    { icon: '📧', label: 'Email', link: 'mailto:razazain905@gmail.com' }
  ];

  return (
    <div className="contact-container">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="contact-content">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a project to discuss or just want to say hello, 
            feel free to reach out!
          </p>
          
          <div className="social-links">
            <h4>Follow Me</h4>
            <div className="social-buttons">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.link}
                  className="social-btn"
                  title={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-label">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-details">
            <h4>Contact Details</h4>
            <div className="detail-item">
              <span className="detail-icon">📍</span>
              <div>
                <p className="detail-label">Location</p>
                <p className="detail-value">Sargodha, Pakistan</p>
              </div>
            </div>
            <div className="detail-item">
              <span className="detail-icon">📱</span>
              <div>
                <p className="detail-label">Phone</p>
                <p className="detail-value">+92 302 0111809</p>
              </div>
            </div>
            <div className="detail-item">
              <span className="detail-icon">📧</span>
              <div>
                <p className="detail-label">Email</p>
                <p className="detail-value">razazain905@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell me about your project or inquiry..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </button>

            {submitted && (
              <div className="success-message">
                Thank you! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
