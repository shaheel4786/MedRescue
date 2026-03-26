import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Enquiry Submitted Successfully!');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="page-container" style={{ maxWidth: '900px', paddingBottom: '90px' }}>
      <div className="glass-header d-flex align-center gap-2" style={{ padding: '16px', borderRadius: '16px', marginBottom: '24px' }}>
        <button onClick={() => window.history.back()} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'flex' }}>
          <ChevronLeft size={24} />
        </button>
        <h2 style={{ fontSize: '20px', margin: 0 }}>Support Center</h2>
      </div>

      <div className="contact-wrapper slide-up">
        {/* Left Side: Illustration */}
        <div className="contact-illustration">
          <img src="/support_agent.png" alt="Customer Support" style={{ width: '100%', height: 'auto', borderRadius: '16px', objectFit: 'contain' }} />
        </div>

        {/* Right Side: Form */}
        <div className="contact-form-container">
          <h2 className="contact-title" style={{ color: '#2b5bf4', marginBottom: '24px', fontSize: '28px' }}>Contact / Enquiry</h2>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <input 
              type="text" 
              name="name"
              placeholder="Full Name" 
              className="contact-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input 
              type="tel" 
              name="phone"
              placeholder="Phone Number" 
              className="contact-input"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input 
              type="email" 
              name="email"
              placeholder="Email Address" 
              className="contact-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea 
              name="message"
              placeholder="Your Message" 
              className="contact-input"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              style={{ resize: 'none' }}
              required
            ></textarea>
            
            <button type="submit" className="contact-submit-btn">
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .contact-wrapper {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        
        @media (min-width: 768px) {
          .contact-wrapper {
            flex-direction: row;
            align-items: stretch;
          }
          .contact-illustration, .contact-form-container {
            flex: 1;
          }
        }

        .contact-illustration {
          background-color: white;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .contact-form-container {
          background-color: white;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          color: #333; /* Dark text for light form background */
        }

        .contact-input {
          width: 100%;
          padding: 14px 16px;
          border-radius: 12px;
          border: 1px solid #e1e4e8;
          font-family: inherit;
          font-size: 15px;
          background-color: #fff;
          color: #333;
          transition: border-color 0.2s;
        }

        .contact-input:focus {
          outline: none;
          border-color: #2b5bf4;
        }

        .contact-input::placeholder {
          color: #a0a5ab;
        }

        .contact-submit-btn {
          background-color: #2b5bf4;
          color: white;
          border: none;
          padding: 16px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.2s;
          margin-top: 8px;
        }

        .contact-submit-btn:hover {
          background-color: #1e45c4;
        }
      `}} />
    </div>
  );
};

export default Contact;
